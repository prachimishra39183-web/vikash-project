import { motion } from 'framer-motion';
import { Eye, ShoppingBag } from 'lucide-react';
import type { Product } from '@/data/catalog';
import { ProductImage } from './ProductImage';
import { useCart } from '@/state/cart';

export function ProductCard({ product, onView }: { product: Product; onView: (p: Product) => void }) {
  const { add } = useCart();
  const priceLabel = product.pricePerUnit > 0 ? `₹${product.pricePerUnit}${product.unit}` : 'On enquiry';

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group card-surface flex flex-col overflow-hidden"
    >
      <button
        onClick={() => onView(product)}
        className="relative aspect-[4/3] w-full overflow-hidden"
        aria-label={`View ${product.name}`}
      >
        <ProductImage src={product.image} alt={product.name} className="h-full w-full transition-transform duration-700 group-hover:scale-[1.05]" />
        <span className="absolute left-3 top-3 chip bg-white/90 text-navy backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-cobalt" />
          {product.category}
        </span>
        <span className="absolute inset-0 grid place-items-center bg-navy/0 opacity-0 transition-all duration-300 group-hover:bg-navy/10 group-hover:opacity-100">
          <span className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-navy shadow-card backdrop-blur">
            <Eye className="h-4 w-4" /> Quick view
          </span>
        </span>
      </button>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-base font-semibold text-navy">{product.name}</h3>
        <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-muted">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <div>
            <div className="font-display text-lg font-bold text-navy">{priceLabel}</div>
            <div className="text-xs text-muted-light">Pack: {product.packSize}</div>
          </div>
          <button
            onClick={() => add(product)}
            className="grid h-10 w-10 place-items-center rounded-full bg-cobalt text-white shadow-soft transition-all hover:bg-cobalt-dark hover:shadow-lift active:scale-95"
            aria-label={`Add ${product.name} to enquiry`}
          >
            <ShoppingBag className="h-4.5 w-4.5" />
          </button>
        </div>
      </div>
    </motion.article>
  );
}
