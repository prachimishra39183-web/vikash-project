import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Package } from 'lucide-react';
import type { Product } from '@/data/catalog';
import { ProductImage } from './ProductImage';
import { useCart } from '@/state/cart';
import { useToast } from '@/state/toast';

export function QuickViewModal({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const { add } = useCart();
  const { push } = useToast();
  if (!product) return null;

  const priceLabel = product.pricePerUnit > 0 ? `₹${product.pricePerUnit}${product.unit}` : 'On enquiry';

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] grid place-items-center bg-navy/40 p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="relative grid max-h-[90vh] w-full max-w-3xl overflow-hidden rounded-xl2 bg-white shadow-lift md:grid-cols-2"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-navy shadow-soft backdrop-blur transition-colors hover:text-cobalt"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="relative aspect-square md:aspect-auto">
              <ProductImage src={product.image} alt={product.name} className="h-full w-full" />
            </div>

            <div className="flex flex-col overflow-y-auto p-6 md:p-8">
              <span className="chip w-fit bg-soft-mint text-teal-dark">
                <Package className="h-3.5 w-3.5" />
                {product.category}
              </span>
              <h2 className="mt-3 font-display text-2xl font-bold text-navy">{product.name}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">{product.longDescription}</p>

              <div className="mt-5 space-y-2.5 rounded-xl bg-pale-blue/60 p-4">
                {product.specs.map((s) => (
                  <div key={s.label} className="flex items-center justify-between text-sm">
                    <span className="text-muted">{s.label}</span>
                    <span className="font-semibold text-navy">{s.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-end justify-between">
                <div>
                  <div className="font-display text-2xl font-bold text-navy">{priceLabel}</div>
                  <div className="text-xs text-muted-light">Pack: {product.packSize}</div>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    add(product);
                    push(`${product.name} added to enquiry list`, 'success');
                    onClose();
                  }}
                  className="btn-primary w-full"
                >
                  <ShoppingBag className="h-4 w-4" />
                  Add to Enquiry List
                </button>
                <p className="text-center text-xs text-muted-light">
                  Online checkout is not available. Use the enquiry list to request a quote.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
