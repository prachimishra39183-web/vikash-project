import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, Send } from 'lucide-react';
import { useCart } from '@/state/cart';
import { useToast } from '@/state/toast';
import { ProductImage } from './ProductImage';

export function CartDrawer() {
  const { isOpen, close, lines, setQty, remove, clear, count } = useCart();
  const { push } = useToast();

  const submitEnquiry = () => {
    if (lines.length === 0) return;
    push('Enquiry list submitted as a demo. No data was sent.', 'info');
    clear();
    close();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-navy/30 backdrop-blur-sm"
            onClick={close}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 34 }}
            className="fixed right-0 top-0 z-[95] flex h-full w-full max-w-md flex-col bg-ivory shadow-lift"
          >
            <header className="flex items-center justify-between border-b border-navy/5 px-5 py-4">
              <div>
                <h2 className="font-display text-lg font-bold text-navy">Enquiry List</h2>
                <p className="text-xs text-muted">{count} item{count !== 1 ? 's' : ''} selected</p>
              </div>
              <button onClick={close} className="grid h-9 w-9 place-items-center rounded-full text-navy hover:bg-white" aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {lines.length === 0 ? (
                <div className="grid h-full place-items-center text-center">
                  <div>
                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-pale-blue text-cobalt">
                      <Send className="h-7 w-7" />
                    </div>
                    <p className="mt-4 text-sm font-medium text-navy">Your enquiry list is empty</p>
                    <p className="mt-1 text-xs text-muted">Add products to request a quote.</p>
                  </div>
                </div>
              ) : (
                <ul className="space-y-3">
                  {lines.map((line) => (
                    <li key={line.product.id} className="flex gap-3 rounded-xl border border-navy/5 bg-white p-3">
                      <ProductImage
                        src={line.product.image}
                        alt={line.product.name}
                        className="h-16 w-16 flex-shrink-0 rounded-lg"
                      />
                      <div className="flex flex-1 flex-col">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-sm font-semibold text-navy">{line.product.name}</h3>
                          <button
                            onClick={() => remove(line.product.id)}
                            className="text-muted-light transition-colors hover:text-red-500"
                            aria-label={`Remove ${line.product.name}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                        <span className="text-xs text-muted">{line.product.category}</span>
                        <div className="mt-auto flex items-center justify-between pt-2">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => setQty(line.product.id, line.quantity - 1)}
                              className="grid h-7 w-7 place-items-center rounded-full border border-navy/10 text-navy hover:border-cobalt/40"
                              aria-label="Decrease"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-6 text-center text-sm font-semibold text-navy">{line.quantity}</span>
                            <button
                              onClick={() => setQty(line.product.id, line.quantity + 1)}
                              className="grid h-7 w-7 place-items-center rounded-full border border-navy/10 text-navy hover:border-cobalt/40"
                              aria-label="Increase"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <span className="text-sm font-bold text-navy">
                            {line.product.pricePerUnit > 0
                              ? `₹${line.product.pricePerUnit * line.quantity}${line.product.unit}`
                              : 'On enquiry'}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {lines.length > 0 && (
              <footer className="border-t border-navy/5 px-5 py-4">
                <button onClick={submitEnquiry} className="btn-primary w-full">
                  <Send className="h-4 w-4" />
                  Submit Enquiry
                </button>
                <p className="mt-2 text-center text-xs text-muted-light">
                  Demo only — no data is sent or stored.
                </p>
              </footer>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
