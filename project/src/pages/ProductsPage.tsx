import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, SlidersHorizontal, X, Check } from 'lucide-react';
import { ProductCard } from '@/components/ProductCard';
import { QuickViewModal } from '@/components/QuickViewModal';
import { PRODUCTS, CATEGORIES, type Product, type Category } from '@/data/catalog';

type SortKey = 'featured' | 'name' | 'price-asc' | 'price-desc';

const sortOptions: { key: SortKey; label: string }[] = [
  { key: 'featured', label: 'Featured' },
  { key: 'name', label: 'Name: A–Z' },
  { key: 'price-asc', label: 'Price: low to high' },
  { key: 'price-desc', label: 'Price: high to low' },
];

export function ProductsPage() {
  const [query, setQuery] = useState('');
  const [active, setActive] = useState<Category | 'All'>('All');
  const [sort, setSort] = useState<SortKey>('featured');
  const [view, setView] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    let list = [...PRODUCTS];
    if (active !== 'All') list = list.filter((p) => p.category === active);
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      );
    }
    switch (sort) {
      case 'name': list.sort((a, b) => a.name.localeCompare(b.name)); break;
      case 'price-asc': list.sort((a, b) => a.pricePerUnit - b.pricePerUnit); break;
      case 'price-desc': list.sort((a, b) => b.pricePerUnit - a.pricePerUnit); break;
      default: list.sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
    }
    return list;
  }, [query, active, sort]);

  const allCats: (Category | 'All')[] = ['All', ...CATEGORIES];

  return (
    <div className="bg-ivory pt-16">
      <section className="border-b border-navy/5 bg-white/60">
        <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 lg:py-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-cobalt"
          >
            Catalogue
          </motion.span>
          <h1 className="mt-2 font-display text-4xl font-bold tracking-tight text-navy sm:text-5xl">
            Explore Our Products
          </h1>
          <p className="mt-3 max-w-xl text-muted">
            Packaging supplies manufactured to strict quality standards. Add items to your enquiry list to request a quote.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="mx-auto max-w-7xl px-5 py-8 sm:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-xs">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-light" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              className="input-field pl-10"
              aria-label="Search products"
            />
            {query && (
              <button onClick={() => setQuery('')} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-light hover:text-navy" aria-label="Clear search">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {allCats.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`chip border ${
                  active === cat
                    ? 'border-cobalt bg-cobalt text-white'
                    : 'border-navy/10 bg-white text-navy/70 hover:border-cobalt/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-muted" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-xl border border-navy/10 bg-white px-3 py-2.5 text-sm font-medium text-navy outline-none focus:border-cobalt"
              aria-label="Sort products"
            >
              {sortOptions.map((o) => (
                <option key={o.key} value={o.key}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        <p className="mt-4 text-sm text-muted">
          {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
        </p>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8">
        {filtered.length === 0 ? (
          <div className="grid place-items-center rounded-xl2 border border-dashed border-navy/10 py-24 text-center">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-pale-blue text-cobalt">
              <Search className="h-6 w-6" />
            </div>
            <p className="mt-4 font-medium text-navy">No products match your search.</p>
            <button
              onClick={() => { setQuery(''); setActive('All'); }}
              className="mt-3 text-sm font-semibold text-cobalt hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <motion.div layout className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <ProductCard key={p.id} product={p} onView={setView} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        <div className="mt-10 flex items-center gap-2 rounded-xl bg-soft-mint/60 px-5 py-4 text-sm text-teal-dark">
          <Check className="h-4 w-4" />
          Online checkout is not available. Use the enquiry list to request a quote for selected products.
        </div>
      </section>

      <QuickViewModal product={view} onClose={() => setView(null)} />
    </div>
  );
}
