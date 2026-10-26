import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { COMPANY } from '@/data/catalog';

export function Footer() {
  return (
    <footer className="border-t border-navy/5 bg-ivory">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {COMPANY.legalName} — manufacturer of parcel packing clips and PPE strapping since {COMPANY.foundedYear}.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/" className="text-navy/70 hover:text-cobalt">Home</Link></li>
            <li><Link to="/about" className="text-navy/70 hover:text-cobalt">About</Link></li>
            <li><Link to="/products" className="text-navy/70 hover:text-cobalt">Products</Link></li>
            <li><Link to="/contact" className="text-navy/70 hover:text-cobalt">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">Account</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/login" className="text-navy/70 hover:text-cobalt">Sign in</Link></li>
            <li><Link to="/admin" className="text-navy/70 hover:text-cobalt">Admin</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-muted">Online</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><span className="text-navy/70">{COMPANY.website}</span></li>
            <li><span className="text-navy/70">Available on Google Play & iOS</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-navy/5">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted sm:flex-row sm:px-8">
          <span>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</span>
          <span>Crafted with precision — {COMPANY.tagline}.</span>
        </div>
      </div>
    </footer>
  );
}
