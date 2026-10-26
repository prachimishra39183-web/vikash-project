import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Product } from '@/data/catalog';

export interface CartLine {
  product: Product;
  quantity: number;
}

interface CartCtx {
  lines: CartLine[];
  isOpen: boolean;
  add: (p: Product, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  open: () => void;
  close: () => void;
}

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setOpen] = useState(false);

  const add = useCallback((p: Product, qty = 1) => {
    setLines((prev) => {
      const existing = prev.find((l) => l.product.id === p.id);
      if (existing) {
        return prev.map((l) => (l.product.id === p.id ? { ...l, quantity: l.quantity + qty } : l));
      }
      return [...prev, { product: p, quantity: qty }];
    });
    setOpen(true);
  }, []);

  const remove = useCallback((id: string) => setLines((prev) => prev.filter((l) => l.product.id !== id)), []);
  const setQty = useCallback(
    (id: string, qty: number) =>
      setLines((prev) => prev.map((l) => (l.product.id === id ? { ...l, quantity: Math.max(1, qty) } : l))),
    []
  );
  const clear = useCallback(() => setLines([]), []);
  const count = lines.reduce((n, l) => n + l.quantity, 0);

  return (
    <Ctx.Provider
      value={{ lines, isOpen, add, remove, setQty, clear, count, open: () => setOpen(true), close: () => setOpen(false) }}
    >
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error('useCart must be used within CartProvider');
  return c;
}
