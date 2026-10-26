
import { useEffect, useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  MessageSquare,
  Settings,
  LogOut,
  Plus,
  Pencil,
  Trash2,
  X,
  Check,
  Mail,
  Phone,
  Inbox,
  Search,
  AlertTriangle,
  ArrowUpRight,
  Sparkles,
  Boxes,
  TrendingUp,
  Globe2,
  ChevronRight,
  Command,
} from 'lucide-react';

import { Logo } from '@/components/Logo';
import {
  PRODUCTS,
  CATEGORIES,
  COMPANY,
  type Product,
} from '@/data/catalog';
import { useToast } from '@/state/toast';

type Tab = 'overview' | 'products' | 'enquiries' | 'settings';
type Status = 'New' | 'In review' | 'Resolved';

interface Enquiry {
  id: string;
  name: string;
  contact: string;
  product: string;
  message: string;
  status: Status;
  date: string;
}

const demoEnquiries: Enquiry[] = [
  {
    id: 'e1',
    name: 'Aarav Sharma',
    contact: 'aarav@logico.in',
    product: 'GP-Clips',
    message: 'Need 50 KG for monthly courier operations.',
    status: 'New',
    date: '2026-10-22',
  },
  {
    id: 'e2',
    name: 'Priya Nair',
    contact: '+91 98200 11223',
    product: 'PPE Strap',
    message: 'Virgin plastic strapping for pallet loads.',
    status: 'In review',
    date: '2026-10-20',
  },
  {
    id: 'e3',
    name: 'Rahul Verma',
    contact: 'rahul@vermacargo.com',
    product: 'Silver-Clip',
    message: 'Quote for 200 pcs with delivery to Delhi.',
    status: 'Resolved',
    date: '2026-10-15',
  },
];

const navigation = [
  { key: 'overview', label: 'Overview', icon: LayoutDashboard },
  { key: 'products', label: 'Products', icon: Package },
  { key: 'enquiries', label: 'Enquiries', icon: MessageSquare },
  { key: 'settings', label: 'Settings', icon: Settings },
] as const;

const inputClass =
  'w-full rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100';

const cardClass =
  'rounded-[28px] border border-white/80 bg-white/85 shadow-[0_12px_40px_rgba(49,60,100,0.06)] backdrop-blur-xl';

export function AdminPage() {
  const [tab, setTab] = useState<Tab>('overview');

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#F4F5FB] text-slate-800">
      {/* Decorative background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-indigo-200/35 blur-[100px]" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-100/60 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-pink-100/40 blur-[100px]" />
      </div>

      <div className="relative min-h-screen lg:pl-[270px]">
        {/* Desktop sidebar */}
        <aside className="fixed inset-y-0 left-0 z-40 hidden w-[270px] flex-col border-r border-white/80 bg-white/70 px-5 py-6 backdrop-blur-2xl lg:flex">
          <div className="px-2">
            <Logo compact />
            <div className="mt-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Admin workspace
            </div>
          </div>

          <div className="mt-10 px-3 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
            Workspace
          </div>

          <nav className="mt-3 flex-1 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = tab === item.key;

              return (
                <button
                  key={item.key}
                  onClick={() => setTab(item.key)}
                  className={`group relative flex w-full items-center gap-3 overflow-hidden rounded-2xl px-4 py-3.5 text-left text-sm font-semibold transition-all duration-300 ${
                    active
                      ? 'bg-gradient-to-r from-indigo-600 to-violet-500 text-white shadow-[0_10px_25px_rgba(99,102,241,0.28)]'
                      : 'text-slate-500 hover:bg-indigo-50 hover:text-indigo-700'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-500"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <Icon className="relative z-10 h-5 w-5" />
                  <span className="relative z-10">{item.label}</span>
                  {active && (
                    <ChevronRight className="relative z-10 ml-auto h-4 w-4" />
                  )}
                </button>
              );
            })}
          </nav>

          <div className="rounded-[24px] bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-4">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-indigo-600 shadow-sm">
              <Sparkles className="h-5 w-5" />
            </div>
            <p className="mt-3 text-sm font-bold text-slate-800">
              Packaging made smarter.
            </p>
            <p className="mt-1 text-xs leading-5 text-slate-500">
              Manage your product catalogue and customer enquiries in one place.
            </p>
            <Link
              to="/"
              className="mt-4 flex items-center gap-2 text-xs font-bold text-indigo-600 hover:text-indigo-800"
            >
              View website <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <Link
            to="/"
            className="mt-5 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold text-slate-500 transition hover:bg-rose-50 hover:text-rose-600"
          >
            <LogOut className="h-5 w-5" />
            Exit dashboard
          </Link>
        </aside>

        {/* Mobile header */}
        <header className="sticky top-0 z-30 border-b border-white/70 bg-white/80 px-4 py-3 backdrop-blur-xl lg:hidden">
          <div className="flex items-center justify-between">
            <Logo compact />
            <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-bold text-indigo-600">
              Admin
            </span>
          </div>
          <nav className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {navigation.map(({ key, label, icon: Icon }) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={`flex shrink-0 items-center gap-2 rounded-xl px-3 py-2 text-xs font-bold transition ${
                  tab === key
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                    : 'bg-slate-100 text-slate-500'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </button>
            ))}
          </nav>
        </header>

        {/* Main content */}
        <main className="mx-auto max-w-[1600px] px-4 py-6 sm:px-7 sm:py-8 lg:px-10 lg:py-10">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.17em] text-indigo-500">
                <Command className="h-4 w-4" />
                Vikash Pack / Workspace
              </div>
              <h1 className="mt-2 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
                {navigation.find((item) => item.key === tab)?.label}
                <span className="text-indigo-500">.</span>
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Your business, organised beautifully.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden rounded-2xl border border-white bg-white/75 px-4 py-2.5 shadow-sm sm:block">
                <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Workspace status
                </p>
                <div className="mt-1 flex items-center gap-2 text-xs font-bold text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Demo mode
                </div>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 text-sm font-black text-white shadow-lg shadow-indigo-200">
                VP
              </div>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22 }}
            >
              {tab === 'overview' && <Overview setTab={setTab} />}
              {tab === 'products' && <Products />}
              {tab === 'enquiries' && <Enquiries />}
              {tab === 'settings' && <SettingsTab />}
            </motion.div>
          </AnimatePresence>

          <footer className="mt-10 flex flex-wrap items-center justify-between gap-2 border-t border-white/80 pt-5 text-xs text-slate-400">
            <span>© {new Date().getFullYear()} Vikash Pack · Admin workspace</span>
            <span className="flex items-center gap-1.5">
              Designed for better workflows <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            </span>
          </footer>
        </main>
      </div>
    </div>
  );
}

/* ----------------------------- OVERVIEW ----------------------------- */

function Overview({ setTab }: { setTab: (tab: Tab) => void }) {
  const newCount = demoEnquiries.filter((e) => e.status === 'New').length;
  const reviewCount = demoEnquiries.filter((e) => e.status === 'In review').length;
  const resolvedCount = demoEnquiries.filter((e) => e.status === 'Resolved').length;

  return (
    <div className="space-y-7">
      <motion.section
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative overflow-hidden rounded-[30px] bg-gradient-to-br from-[#4F46E5] via-[#6658ED] to-[#8B5CF6] p-6 text-white shadow-[0_24px_55px_rgba(99,102,241,0.24)] sm:p-9"
      >
        <div className="pointer-events-none absolute -right-10 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
        <div className="pointer-events-none absolute right-32 top-20 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl" />
        <div className="relative z-10 max-w-xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em]">
            <Sparkles className="h-3.5 w-3.5" />
            Business snapshot
          </span>
          <h2 className="mt-5 text-3xl font-black leading-tight sm:text-4xl">
            Good things are
            <br />
            <span className="text-cyan-200">moving forward.</span>
          </h2>
          <p className="mt-3 max-w-md text-sm leading-6 text-indigo-100">
            Keep your products organised and customer enquiries moving. Your dashboard at a glance.
          </p>
          <button
            onClick={() => setTab('products')}
            className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-indigo-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            Manage products <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
        <div className="absolute bottom-7 right-8 hidden rotate-[-8deg] sm:block">
          <div className="relative grid h-36 w-36 place-items-center rounded-[30px] border border-white/30 bg-white/10 shadow-2xl backdrop-blur-xl">
            <Boxes className="h-16 w-16 text-white drop-shadow-lg" />
            <span className="absolute -right-3 -top-3 grid h-10 w-10 place-items-center rounded-2xl bg-cyan-300 text-indigo-900 shadow-lg">
              <Check className="h-5 w-5" />
            </span>
          </div>
        </div>
      </motion.section>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Metric
          label="Total products"
          value={String(PRODUCTS.length)}
          detail="In your catalogue"
          icon={Package}
          color="indigo"
          index={0}
        />
        <Metric
          label="New enquiries"
          value={String(newCount)}
          detail="Awaiting review"
          icon={Inbox}
          color="orange"
          index={1}
        />
        <Metric
          label="In review"
          value={String(reviewCount)}
          detail="Being processed"
          icon={MessageSquare}
          color="blue"
          index={2}
        />
        <Metric
          label="Resolved"
          value={String(resolvedCount)}
          detail="Marked complete"
          icon={Check}
          color="green"
          index={3}
        />
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <div className={`${cardClass} p-5 sm:p-7`}>
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-black text-slate-800">Recent enquiries</h2>
              <p className="mt-1 text-xs text-slate-400">A quick look at customer requests</p>
            </div>
            <button
              onClick={() => setTab('enquiries')}
              className="rounded-xl bg-indigo-50 px-3 py-2 text-xs font-bold text-indigo-600 transition hover:bg-indigo-100"
            >
              View all
            </button>
          </div>

          <div className="mt-6 space-y-3">
            {demoEnquiries.slice(0, 3).map((e, i) => (
              <div
                key={e.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-100 bg-slate-50/70 p-4 transition hover:border-indigo-100 hover:bg-indigo-50/30"
              >
                <div className="flex min-w-0 items-center gap-3">
                  <div className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl ${['bg-violet-100 text-violet-600', 'bg-cyan-100 text-cyan-700', 'bg-orange-100 text-orange-600'][i]}`}>
                    <span className="text-sm font-black">{e.name.charAt(0)}</span>
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-slate-800">{e.name}</p>
                    <p className="mt-1 truncate text-xs text-slate-400">{e.product} · {e.date}</p>
                  </div>
                </div>
                <StatusBadge status={e.status} />
              </div>
            ))}
          </div>
        </div>

        <div className={`${cardClass} p-5 sm:p-7`}>
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-emerald-50 text-emerald-600">
              <TrendingUp className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-800">Quick actions</h2>
              <p className="text-xs text-slate-400">Jump into your workflow</p>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <QuickAction
              icon={Plus}
              title="Add a product"
              description="Expand your catalogue"
              color="indigo"
              onClick={() => setTab('products')}
            />
            <QuickAction
              icon={MessageSquare}
              title="Review enquiries"
              description="Manage customer requests"
              color="cyan"
              onClick={() => setTab('enquiries')}
            />
            <QuickAction
              icon={Settings}
              title="Update settings"
              description="Edit business information"
              color="orange"
              onClick={() => setTab('settings')}
            />
          </div>

          <div className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-50 to-indigo-50 p-4">
            <div className="flex items-center gap-2 text-xs font-bold text-indigo-700">
              <Globe2 className="h-4 w-4" />
              Website overview
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-500">
              Your public website and admin workspace are ready to be connected to live data.
            </p>
          </div>
        </div>
      </section>

      <p className="text-xs text-slate-400">
        Preview data only. Connect your backend to display live enquiries and saved product changes.
      </p>
    </div>
  );
}

function Metric({
  label,
  value,
  detail,
  icon: Icon,
  color,
  index,
}: {
  label: string;
  value: string;
  detail: string;
  icon: typeof Package;
  color: 'indigo' | 'orange' | 'blue' | 'green';
  index: number;
}) {
  const styles = {
    indigo: { icon: 'bg-indigo-100 text-indigo-600', glow: 'group-hover:shadow-indigo-100' },
    orange: { icon: 'bg-orange-100 text-orange-600', glow: 'group-hover:shadow-orange-100' },
    blue: { icon: 'bg-cyan-100 text-cyan-700', glow: 'group-hover:shadow-cyan-100' },
    green: { icon: 'bg-emerald-100 text-emerald-600', glow: 'group-hover:shadow-emerald-100' },
  }[color];

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      whileHover={{ y: -5, rotateX: 2 }}
      className={`${cardClass} group p-5 transition-shadow duration-300 hover:shadow-xl ${styles.glow}`}
    >
      <div className="flex items-center justify-between">
        <div className={`grid h-12 w-12 place-items-center rounded-2xl ${styles.icon}`}>
          <Icon className="h-5 w-5" />
        </div>
        <ArrowUpRight className="h-4 w-4 text-slate-300 transition group-hover:text-indigo-500" />
      </div>
      <p className="mt-5 text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-1 text-3xl font-black tracking-tight text-slate-900">{value}</p>
      <p className="mt-2 text-xs text-slate-400">{detail}</p>
    </motion.div>
  );
}

function QuickAction({
  icon: Icon,
  title,
  description,
  color,
  onClick,
}: {
  icon: typeof Package;
  title: string;
  description: string;
  color: 'indigo' | 'cyan' | 'orange';
  onClick: () => void;
}) {
  const styles = {
    indigo: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600',
    cyan: 'bg-cyan-50 text-cyan-700 group-hover:bg-cyan-600',
    orange: 'bg-orange-50 text-orange-600 group-hover:bg-orange-500',
  }[color];

  return (
    <button
      onClick={onClick}
      className="group flex w-full items-center gap-3 rounded-2xl border border-slate-100 p-3 text-left transition hover:border-indigo-100 hover:bg-indigo-50/40"
    >
      <div className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition group-hover:text-white ${styles}`}>
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-slate-700">{title}</p>
        <p className="mt-0.5 text-xs text-slate-400">{description}</p>
      </div>
      <ChevronRight className="h-4 w-4 text-slate-300 transition group-hover:translate-x-1 group-hover:text-indigo-500" />
    </button>
  );
}

/* ----------------------------- PRODUCTS ----------------------------- */

function Products() {
  const [list, setList] = useState<Product[]>([...PRODUCTS]);
  const [editing, setEditing] = useState<Product | null>(null);
  const [adding, setAdding] = useState(false);
  const [confirm, setConfirm] = useState<Product | null>(null);
  const [search, setSearch] = useState('');
  const { push } = useToast();

  const filtered = list.filter((product) =>
    `${product.name} ${product.category}`.toLowerCase().includes(search.toLowerCase()),
  );

  const save = (product: Product) => {
    setList((previous) => {
      const exists = previous.some((item) => item.id === product.id);

      return exists
        ? previous.map((item) => item.id === product.id ? product : item)
        : [{ ...product, id: product.id || `prod-${Date.now()}` }, ...previous];
    });

    push(`"${product.name}" saved in this demo session.`, 'success');
  };

  const remove = (product: Product) => {
    setList((previous) => previous.filter((item) => item.id !== product.id));
    push(`"${product.name}" removed from this demo session.`, 'info');
    setConfirm(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-500">Catalogue studio</p>
          <h2 className="mt-2 text-2xl font-black text-slate-900">Your products</h2>
          <p className="mt-1 text-sm text-slate-500">Manage product details and catalogue images.</p>
        </div>
        <button
          onClick={() => setAdding(true)}
          className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
        >
          <Plus className="h-4 w-4" /> Add product
        </button>
      </div>

      <div className={`${cardClass} p-4`}>
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            className={inputClass + ' pl-11'}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search products or categories..."
          />
        </div>
      </div>

      {filtered.length ? (
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((product, index) => (
            <motion.article
              key={product.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.04 }}
              className={`${cardClass} group overflow-hidden transition hover:-translate-y-1 hover:shadow-xl`}
            >
              <div className="relative m-3 overflow-hidden rounded-[22px] bg-gradient-to-br from-indigo-50 via-slate-50 to-cyan-50">
                <div className="flex h-48 items-center justify-center p-5">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <Package className="h-16 w-16 text-indigo-200" />
                  )}
                </div>
                <span className="absolute left-3 top-3 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-[10px] font-bold text-indigo-600 shadow-sm">
                  {product.category}
                </span>
              </div>

              <div className="p-5 pt-2">
                <h3 className="text-lg font-black text-slate-800">{product.name}</h3>
                <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-slate-500">
                  {product.description || 'Packaging solution for professional operations.'}
                </p>

                <div className="mt-4 flex items-end justify-between gap-3 border-t border-slate-100 pt-4">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Price</p>
                    <p className="mt-1 text-base font-black text-slate-800">
                      {product.pricePerUnit > 0
                        ? `₹${product.pricePerUnit}${product.unit}`
                        : 'On enquiry'}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditing(product)}
                      aria-label={`Edit ${product.name}`}
                      className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-50 text-indigo-600 transition hover:bg-indigo-600 hover:text-white"
                    >
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setConfirm(product)}
                      aria-label={`Delete ${product.name}`}
                      className="grid h-10 w-10 place-items-center rounded-xl bg-rose-50 text-rose-500 transition hover:bg-rose-500 hover:text-white"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      ) : (
        <div className={`${cardClass} p-12 text-center`}>
          <Package className="mx-auto h-10 w-10 text-slate-300" />
          <p className="mt-3 font-bold text-slate-700">No products found</p>
          <p className="mt-1 text-sm text-slate-400">Try another search or add a product.</p>
        </div>
      )}

      <ProductEditor
        open={adding || editing !== null}
        product={editing}
        onClose={() => {
          setAdding(false);
          setEditing(null);
        }}
        onSave={save}
      />

      <ConfirmDialog
        open={confirm !== null}
        title="Delete this product?"
        message={`"${confirm?.name ?? ''}" will be removed from the current demo session.`}
        confirmLabel="Delete product"
        onCancel={() => setConfirm(null)}
        onConfirm={() => confirm && remove(confirm)}
      />
    </div>
  );
}

function ProductEditor({
  open,
  product,
  onClose,
  onSave,
}: {
  open: boolean;
  product: Product | null;
  onClose: () => void;
  onSave: (product: Product) => void;
}) {
  const emptyProduct: Product = {
    id: '',
    name: '',
    category: CATEGORIES[0] ?? 'Parcel Packing Clips',
    description: '',
    longDescription: '',
    unit: '/kg',
    pricePerUnit: 0,
    packSize: '',
    image: '',
    specs: [],
  };

  const [form, setForm] = useState<Product>(emptyProduct);

  useEffect(() => {
    if (!open) return;
    setForm(product ? { ...product } : { ...emptyProduct });
  }, [open, product]);

  if (!open) return null;

  const update = <K extends keyof Product>(key: K, value: Product[K]) => {
    setForm((previous) => ({ ...previous, [key]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.name.trim()) return;
    onSave({ ...form, name: form.name.trim() });
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-500">
            Catalogue studio
          </span>
          <h2 className="mt-2 text-2xl font-black text-slate-900">
            {product ? 'Edit product' : 'Create product'}
          </h2>
          <p className="mt-1 text-sm text-slate-500">Keep your product information up to date.</p>
        </div>
        <button onClick={onClose} className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-slate-100 text-slate-500 hover:bg-slate-200" aria-label="Close">
          <X className="h-4 w-4" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Field label="Product name">
          <input required className={inputClass} value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="e.g. GP-Clips" />
        </Field>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Category">
            <select className={inputClass} value={form.category} onChange={(e) => update('category', e.target.value as Product['category'])}>
              {CATEGORIES.map((category) => <option key={category} value={category}>{category}</option>)}
            </select>
          </Field>
          <Field label="Pack size">
            <input className={inputClass} value={form.packSize} onChange={(e) => update('packSize', e.target.value)} placeholder="e.g. 25 KG" />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Price per unit">
            <input type="number" min="0" className={inputClass} value={form.pricePerUnit} onChange={(e) => update('pricePerUnit', Number(e.target.value))} />
          </Field>
          <Field label="Unit">
            <input className={inputClass} value={form.unit} onChange={(e) => update('unit', e.target.value)} placeholder="/kg" />
          </Field>
        </div>

        <Field label="Short description">
          <textarea rows={3} className={inputClass + ' resize-none'} value={form.description} onChange={(e) => update('description', e.target.value)} placeholder="Describe this product..." />
        </Field>

        <Field label="Image path or URL">
          <input className={inputClass} value={form.image} onChange={(e) => update('image', e.target.value)} placeholder="/products/gp-clips.jpg" />
        </Field>

        {form.image && (
          <div className="flex items-center gap-3 rounded-2xl bg-indigo-50/70 p-3">
            <img src={form.image} alt="Product preview" className="h-14 w-14 rounded-xl bg-white object-contain" onError={(e) => { e.currentTarget.style.opacity = '0.25'; }} />
            <div>
              <p className="text-xs font-bold text-slate-700">Image preview</p>
              <p className="mt-1 break-all text-[11px] text-slate-500">{form.image}</p>
            </div>
          </div>
        )}

        <div className="flex flex-wrap justify-end gap-3 border-t border-slate-100 pt-5">
          <button type="button" onClick={onClose} className="rounded-2xl px-5 py-3 text-sm font-bold text-slate-500 transition hover:bg-slate-100">
            Cancel
          </button>
          <button type="submit" className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700">
            <Check className="h-4 w-4" /> Save product
          </button>
        </div>
      </form>
    </Modal>
  );
}

/* ----------------------------- ENQUIRIES ----------------------------- */

function Enquiries() {
  const [list, setList] = useState<Enquiry[]>(demoEnquiries);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<'All' | Status>('All');
  const { push } = useToast();

  const filtered = useMemo(() => {
    const normalized = query.toLowerCase().trim();

    return list.filter((item) => {
      const matchesQuery =
        `${item.name} ${item.contact} ${item.product} ${item.message}`
          .toLowerCase()
          .includes(normalized);

      return matchesQuery && (filter === 'All' || item.status === filter);
    });
  }, [list, query, filter]);

  const cycleStatus = (id: string) => {
    setList((previous) =>
      previous.map((item) => {
        if (item.id !== id) return item;

        const next: Status =
          item.status === 'New'
            ? 'In review'
            : item.status === 'In review'
              ? 'Resolved'
              : 'New';

        return { ...item, status: next };
      }),
    );

    push('Enquiry status updated in this demo session.', 'success');
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-500">Customer relationships</p>
        <h2 className="mt-2 text-2xl font-black text-slate-900">Customer enquiries</h2>
        <p className="mt-1 text-sm text-slate-500">Review requests and move each enquiry through its status.</p>
      </div>

      <div className={`${cardClass} p-4`}>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input className={inputClass + ' pl-11'} value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name, product or message..." />
          </div>
          <div className="flex flex-wrap gap-2">
            {(['All', 'New', 'In review', 'Resolved'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`rounded-xl px-3.5 py-2.5 text-xs font-bold transition ${
                  filter === status ? 'bg-indigo-600 text-white shadow-md shadow-indigo-100' : 'bg-slate-100 text-slate-500 hover:bg-indigo-50 hover:text-indigo-600'
                }`}
              >
                {status}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {filtered.map((item, index) => (
          <motion.article
            layout
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.04 }}
            className={`${cardClass} p-5 sm:p-6`}
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex min-w-0 gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-indigo-100 to-cyan-100 text-base font-black text-indigo-700">
                  {item.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <h3 className="font-black text-slate-800">{item.name}</h3>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-400">
                    <span className="flex items-center gap-1.5"><Mail className="h-3.5 w-3.5" />{item.contact}</span>
                    <span className="flex items-center gap-1.5"><Package className="h-3.5 w-3.5" />{item.product}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
              <button onClick={() => cycleStatus(item.id)} title="Click to change status">
                <StatusBadge status={item.status} />
              </button>
            </div>

            <p className="mt-5 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-600">
              {item.message}
            </p>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] text-slate-400">Click the status to advance it.</span>
              <button
                onClick={() => cycleStatus(item.id)}
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-50 px-3.5 py-2.5 text-xs font-bold text-indigo-600 transition hover:bg-indigo-100"
              >
                Update status <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </motion.article>
        ))}

        {filtered.length === 0 && (
          <div className={`${cardClass} px-6 py-14 text-center`}>
            <Inbox className="mx-auto h-10 w-10 text-slate-300" />
            <p className="mt-3 font-bold text-slate-700">No enquiries found</p>
            <p className="mt-1 text-sm text-slate-400">Try changing the search or status filter.</p>
          </div>
        )}
      </div>

      <p className="text-xs text-slate-400">Sample enquiries only. Connect your enquiry API to load real customer messages.</p>
    </div>
  );
}

/* ----------------------------- SETTINGS ----------------------------- */

function SettingsTab() {
  const [form, setForm] = useState({
    companyName: COMPANY.name,
    legalName: COMPANY.legalName,
    website: COMPANY.website,
    seoTitle: 'Vikash Pack — Precision in Every Package',
    seoDescription:
      'Industrial packaging supplies by Vikash Pack. Manufacturer of parcel packing clips and PPE strapping.',
  });

  const { push } = useToast();

  const update = (key: keyof typeof form, value: string) => {
    setForm((previous) => ({ ...previous, [key]: value }));
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-500">Workspace preferences</p>
        <h2 className="mt-2 text-2xl font-black text-slate-900">Business settings</h2>
        <p className="mt-1 text-sm text-slate-500">Edit your company profile and search engine metadata.</p>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <section className={`${cardClass} overflow-hidden`}>
          <div className="bg-gradient-to-r from-indigo-50 to-violet-50 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-indigo-600 shadow-sm">
                <Globe2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-black text-slate-800">Company profile</h3>
                <p className="mt-1 text-xs text-slate-500">Your business identity</p>
              </div>
            </div>
          </div>

          <div className="space-y-5 p-6">
            <Field label="Brand name">
              <input className={inputClass} value={form.companyName} onChange={(e) => update('companyName', e.target.value)} />
            </Field>
            <Field label="Legal name">
              <input className={inputClass} value={form.legalName} onChange={(e) => update('legalName', e.target.value)} />
            </Field>
            <Field label="Website">
              <input className={inputClass} value={form.website} onChange={(e) => update('website', e.target.value)} />
            </Field>
          </div>
        </section>

        <section className={`${cardClass} overflow-hidden`}>
          <div className="bg-gradient-to-r from-cyan-50 to-emerald-50 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-emerald-600 shadow-sm">
                <Search className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-black text-slate-800">SEO metadata</h3>
                <p className="mt-1 text-xs text-slate-500">How your site appears in search</p>
              </div>
            </div>
          </div>

          <div className="space-y-5 p-6">
            <Field label="SEO title">
              <input className={inputClass} value={form.seoTitle} onChange={(e) => update('seoTitle', e.target.value)} />
            </Field>
            <Field label="Meta description">
              <textarea rows={5} className={inputClass + ' resize-none'} value={form.seoDescription} onChange={(e) => update('seoDescription', e.target.value)} />
            </Field>

            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Search preview</p>
              <p className="mt-2 truncate text-sm font-semibold text-blue-700">{form.seoTitle || 'Your page title'}</p>
              <p className="mt-1 line-clamp-2 text-xs leading-5 text-slate-500">{form.seoDescription || 'Your meta description will appear here.'}</p>
            </div>
          </div>
        </section>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={() => push('Settings updated in this demo session only.', 'success')}
          className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700"
        >
          <Check className="h-4 w-4" /> Save changes
        </button>
        <span className="text-xs text-slate-400">A backend is needed to permanently save these settings.</span>
      </div>
    </div>
  );
}

/* ----------------------------- SHARED UI ----------------------------- */

function StatusBadge({ status }: { status: Status }) {
  const styles: Record<Status, string> = {
    New: 'border-orange-100 bg-orange-50 text-orange-600',
    'In review': 'border-blue-100 bg-blue-50 text-blue-600',
    Resolved: 'border-emerald-100 bg-emerald-50 text-emerald-600',
  };

  return (
    <span className={`inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-3 py-1.5 text-[11px] font-bold ${styles[status]}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {status}
    </span>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold text-slate-600">{label}</label>
      {children}
    </div>
  );
}

function Modal({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center overflow-y-auto bg-slate-950/40 p-3 backdrop-blur-md sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96 }}
        className="my-auto max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-[30px] border border-white/80 bg-white p-5 shadow-2xl sm:p-8"
      >
        {children}
      </motion.div>
    </div>
  );
}

function ConfirmDialog({
  open,
  title,
  message,
  confirmLabel,
  onCancel,
  onConfirm,
}: {
  open: boolean;
  title: string;
  message: string;
  confirmLabel: string;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  if (!open) return null;

  return (
    <Modal onClose={onCancel}>
      <div className="py-4 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-rose-50 text-rose-500">
          <AlertTriangle className="h-6 w-6" />
        </div>
        <h2 className="mt-5 text-xl font-black text-slate-900">{title}</h2>
        <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-500">{message}</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <button onClick={onCancel} className="rounded-2xl bg-slate-100 px-5 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-200">
            Cancel
          </button>
          <button onClick={onConfirm} className="rounded-2xl bg-rose-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-rose-100 transition hover:bg-rose-600">
            <Trash2 className="mr-2 inline h-4 w-4" /> {confirmLabel}
          </button>
        </div>
      </div>
    </Modal>
  );
}