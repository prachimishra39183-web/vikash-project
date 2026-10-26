import { Link } from 'react-router-dom';
import { Package } from 'lucide-react';

export function Logo({ className = '', compact = false }: { className?: string; compact?: boolean }) {
  return (
    <Link to="/" className={`group flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-cobalt to-teal text-white shadow-soft transition-transform group-hover:scale-105">
        <Package className="h-5 w-5" strokeWidth={2.2} />
        <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-orange ring-2 ring-ivory" />
      </span>
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-[15px] font-bold tracking-tight text-navy">Vikash Pack</span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted">Precision in Every Package</span>
        </span>
      )}
    </Link>
  );
}
