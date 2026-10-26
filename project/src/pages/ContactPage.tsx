import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  AlertCircle,
  Package,
  Boxes,
  ArrowUpRight,
  Sparkles,
  Globe2,
} from 'lucide-react';
import { useToast } from '@/state/toast';
import { PRODUCTS } from '@/data/catalog';

interface FormData {
  name: string;
  contact: string;
  product: string;
  message: string;
}

const initial: FormData = {
  name: '',
  contact: '',
  product: '',
  message: '',
};

const ease = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

export function ContactPage() {
  const [data, setData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { push } = useToast();

  const validate = (): boolean => {
    const e: Partial<FormData> = {};

    if (!data.name.trim()) {
      e.name = 'Please enter your name.';
    }

    if (!data.contact.trim()) {
      e.contact = 'Please enter an email or phone number.';
    } else {
      const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.contact);
      const phone = /^\+?[0-9][0-9\s()-]{7,}$/.test(data.contact);

      if (!email && !phone) {
        e.contact = 'Enter a valid email or phone number.';
      }
    }

    if (!data.message.trim()) {
      e.message = 'Please describe your requirement.';
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();

    if (!validate()) return;

    setSubmitting(true);

    // Demo only: connect a backend before accepting real enquiries.
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      push('Demo only: no enquiry was sent or stored.', 'info');
      setData(initial);
      setErrors({});
    }, 900);
  };

  const updateField = (key: keyof FormData, value: string) => {
    setData((current) => ({ ...current, [key]: value }));

    if (errors[key]) {
      setErrors((current) => ({ ...current, [key]: undefined }));
    }
  };

  const field = (
    key: keyof FormData,
    label: string,
    placeholder: string,
    type = 'text',
    textarea = false,
  ) => (
    <div>
      <label
        htmlFor={key}
        className="mb-2 block text-sm font-semibold text-[#25314B]"
      >
        {label}
      </label>

      {textarea ? (
        <textarea
          id={key}
          value={data[key]}
          onChange={(e) => updateField(key, e.target.value)}
          placeholder={placeholder}
          rows={4}
          aria-invalid={Boolean(errors[key])}
          className={`w-full resize-none rounded-2xl border bg-white/80 px-4 py-3.5 text-sm text-[#25314B] outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
            errors[key]
              ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
              : 'border-slate-200/80 focus:border-indigo-400 focus:ring-indigo-100/70'
          }`}
        />
      ) : (
        <input
          id={key}
          type={type}
          value={data[key]}
          onChange={(e) => updateField(key, e.target.value)}
          placeholder={placeholder}
          aria-invalid={Boolean(errors[key])}
          className={`w-full rounded-2xl border bg-white/80 px-4 py-3.5 text-sm text-[#25314B] outline-none transition-all placeholder:text-slate-400 focus:bg-white focus:ring-4 ${
            errors[key]
              ? 'border-red-400 focus:border-red-400 focus:ring-red-100'
              : 'border-slate-200/80 focus:border-indigo-400 focus:ring-indigo-100/70'
          }`}
        />
      )}

      {errors[key] && (
        <p className="mt-2 flex items-center gap-1.5 text-xs text-red-500">
          <AlertCircle className="h-3.5 w-3.5" />
          {errors[key]}
        </p>
      )}
    </div>
  );

  const contactCards = [
    {
      title: 'Email us',
      value: 'info@vikashpack.com',
      href: 'mailto:info@vikashpack.com',
      note: 'Product and business enquiries',
      icon: Mail,
      color: 'bg-[#E9EEFF] text-[#5266E8]',
      delay: 0.12,
    },
    {
      title: 'Phone support',
      value: 'Get in touch with our team',
      note: 'Ask about available contact details',
      icon: Phone,
      color: 'bg-[#DDF8EF] text-[#118A70]',
      delay: 0.2,
    },
    {
      title: 'Explore online',
      value: 'Vikash Pack',
      href: 'https://vikashpack.com',
      note: 'Explore our business online',
      icon: Globe2,
      color: 'bg-[#FFF0E6] text-[#D87948]',
      delay: 0.28,
    },
  ];

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#F8F9FF] pt-20 text-[#25314B]">
      {/* Soft atmospheric background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#DDE5FF]/65 blur-3xl" />
        <div className="absolute -right-32 top-48 h-96 w-96 rounded-full bg-[#FFE9DB]/70 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-[#DDF8F0]/60 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              'radial-gradient(#8D9BC5 0.7px, transparent 0.7px)',
            backgroundSize: '24px 24px',
          }}
        />
      </div>

      <section className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 lg:pb-28 lg:pt-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* LEFT SIDE */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            <motion.div variants={reveal}>
              <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-indigo-600 shadow-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Let's connect
              </span>

              <h1 className="mt-7 max-w-xl font-display text-5xl font-bold leading-[1.04] tracking-[-0.055em] text-[#202B47] sm:text-6xl lg:text-7xl">
                Great packaging.
                <span className="mt-2 block bg-gradient-to-r from-indigo-600 via-[#7D70E9] to-[#E58D69] bg-clip-text pb-2 text-transparent">
                  Better connections.
                </span>
              </h1>

              <p className="mt-6 max-w-md text-base leading-7 text-slate-600 sm:text-lg">
                Tell us what your business needs. Let's explore the right
                packaging products for your next shipment.
              </p>
            </motion.div>

            {/* 3D PACKAGING ILLUSTRATION */}
            <motion.div
              variants={reveal}
              className="relative mx-auto mt-8 flex h-[270px] max-w-lg items-center justify-center sm:h-[310px] lg:mx-0"
              style={{ perspective: 1000 }}
            >
              {/* Decorative orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
                className="absolute h-56 w-56 rounded-full border border-dashed border-indigo-200/80 sm:h-64 sm:w-64"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 48, repeat: Infinity, ease: 'linear' }}
                className="absolute h-44 w-72 rounded-[50%] border border-[#E8BFA9]/70"
              />

              {/* Back floating box */}
              <motion.div
                animate={{ y: [0, -10, 0], rotate: [-8, -5, -8] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute right-[13%] top-[16%] z-10 grid h-20 w-20 place-items-center rounded-[22px] border border-white/80 bg-gradient-to-br from-[#FFE3D3] to-[#FFC6A9] text-[#B96643] shadow-[0_20px_35px_-15px_rgba(187,105,69,0.35)] sm:right-[19%] sm:h-24 sm:w-24"
              >
                <Package className="h-9 w-9 sm:h-11 sm:w-11" strokeWidth={1.5} />
              </motion.div>

              {/* Main 3D box */}
              <motion.div
                animate={{
                  y: [0, -9, 0],
                  rotateX: [4, 0, 4],
                  rotateY: [-8, -3, -8],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                whileHover={{ scale: 1.06, rotateY: 0 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative z-20 flex h-36 w-40 items-center justify-center rounded-[26px] border border-white/90 bg-gradient-to-br from-white via-[#F0F1FF] to-[#CFD5FF] shadow-[0_30px_55px_-22px_rgba(72,86,171,0.42)] sm:h-44 sm:w-48"
              >
                <div className="absolute inset-x-0 top-0 h-4 rounded-t-[26px] bg-white/80" />

                <div className="absolute inset-y-0 left-5 w-px bg-white/90" />
                <div className="absolute inset-y-0 right-5 w-px bg-indigo-200/60" />

                <div className="relative grid h-20 w-20 place-items-center rounded-3xl border border-white/90 bg-white/80 shadow-inner sm:h-24 sm:w-24">
                  <Boxes className="h-10 w-10 text-indigo-600 sm:h-12 sm:w-12" strokeWidth={1.4} />
                  <span className="absolute -bottom-2 rounded-full bg-indigo-600 px-3 py-1 text-[8px] font-bold tracking-[0.2em] text-white shadow-md">
                    VIKASH PACK
                  </span>
                </div>
              </motion.div>

              {/* Floating mini status card */}
              <motion.div
                animate={{ y: [0, 7, 0], rotate: [2, 0, 2] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute bottom-[12%] left-[3%] z-30 rounded-2xl border border-white/90 bg-white/90 p-3.5 shadow-[0_15px_40px_-15px_rgba(37,49,75,0.25)] backdrop-blur-xl sm:left-[8%] sm:p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#DDF8EF] text-[#118A70]">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#25314B]">
                      Built for business
                    </p>
                    <p className="mt-1 text-[10px] text-slate-500">
                      Packaging solutions
                    </p>
                  </div>
                </div>
              </motion.div>

              <div className="absolute left-[18%] top-[12%] h-3 w-3 rounded-full bg-[#8C9BFF] shadow-[0_0_20px_#8C9BFF]" />
              <div className="absolute bottom-[21%] right-[13%] h-2.5 w-2.5 rounded-full bg-[#EBA17E] shadow-[0_0_18px_#EBA17E]" />
              <Sparkles className="absolute right-[7%] top-[40%] h-5 w-5 text-indigo-400" />
            </motion.div>

            {/* CONTACT DETAILS */}
            <div className="mt-5 space-y-3">
              {contactCards.map((item) => {
                const Icon = item.icon;

                const content = (
                  <>
                    <span
                      className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl ${item.color} transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110`}
                    >
                      <Icon className="h-5 w-5" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-xs font-medium text-slate-500">
                        {item.title}
                      </span>
                      <span className="mt-1 block break-words text-sm font-bold text-[#25314B]">
                        {item.value}
                      </span>
                      <span className="mt-1 block text-xs text-slate-500">
                        {item.note}
                      </span>
                    </span>

                    {item.href && (
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-indigo-600" />
                    )}
                  </>
                );

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: item.delay,
                      ease,
                    }}
                    whileHover={{ x: 5, y: -2 }}
                    className="group"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-4 rounded-2xl border border-white/90 bg-white/75 p-4 shadow-[0_8px_25px_-18px_rgba(37,49,75,0.3)] backdrop-blur-md transition-all duration-300 hover:border-indigo-200 hover:bg-white hover:shadow-[0_18px_35px_-20px_rgba(69,83,170,0.3)]"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 rounded-2xl border border-white/90 bg-white/75 p-4 shadow-[0_8px_25px_-18px_rgba(37,49,75,0.3)] backdrop-blur-md">
                        {content}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT SIDE: ENQUIRY FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: 3 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease }}
            style={{ perspective: 1200 }}
            className="relative"
          >
            {/* Soft glow behind form */}
            <div className="absolute -inset-3 rounded-[36px] bg-gradient-to-br from-indigo-200/60 via-white/30 to-orange-200/60 blur-2xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-white/90 bg-white/85 p-6 shadow-[0_35px_90px_-35px_rgba(52,64,120,0.28)] backdrop-blur-2xl sm:p-9 lg:p-10">
              {/* Decorative corner gradient */}
              <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-indigo-100/80 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-orange-100/70 blur-3xl" />

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="relative grid min-h-[480px] place-items-center text-center"
                >
                  <div>
                    <motion.div
                      initial={{ scale: 0.6, rotate: -12 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 180, damping: 12 }}
                      className="mx-auto grid h-20 w-20 place-items-center rounded-[28px] bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-700 shadow-lg shadow-emerald-100/80"
                    >
                      <Check className="h-9 w-9" />
                    </motion.div>

                    <h2 className="mt-7 font-display text-3xl font-bold tracking-tight text-[#25314B]">
                      All set!
                    </h2>

                    <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-slate-500">
                      This was a demo submission. No enquiry was sent or
                      stored. Connect a backend to receive real customer
                      enquiries.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-[#5266E8] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition-all hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl"
                    >
                      <Send className="h-4 w-4" />
                      Try again
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form
                  onSubmit={onSubmit}
                  noValidate
                  className="relative space-y-5"
                >
                  <div className="mb-8">
                    <span className="inline-flex items-center gap-2 rounded-full bg-[#EEF0FF] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-indigo-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                      Your next step
                    </span>

                    <h2 className="mt-5 font-display text-3xl font-bold tracking-[-0.04em] text-[#25314B] sm:text-4xl">
                      Tell us what
                      <br />
                      <span className="text-indigo-600">you need.</span>
                    </h2>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
                      Share a few details and specify the packaging product
                      you're interested in.
                    </p>
                  </div>

                  {field('name', 'Your name', 'e.g. Aarav Sharma')}

                  {field(
                    'contact',
                    'Email or phone number',
                    'How can we reach you?',
                  )}

                  <div>
                    <label
                      htmlFor="product"
                      className="mb-2 block text-sm font-semibold text-[#25314B]"
                    >
                      Product of interest{' '}
                      <span className="font-normal text-slate-400">
                        (optional)
                      </span>
                    </label>

                    <div className="relative">
                      <select
                        id="product"
                        value={data.product}
                        onChange={(e) =>
                          updateField('product', e.target.value)
                        }
                        className="w-full appearance-none rounded-2xl border border-slate-200/80 bg-white/80 px-4 py-3.5 pr-10 text-sm text-[#25314B] outline-none transition-all focus:border-indigo-400 focus:bg-white focus:ring-4 focus:ring-indigo-100/70"
                      >
                        <option value="">Choose a product</option>
                        {PRODUCTS.map((p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        ))}
                      </select>

                      <Package className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    </div>
                  </div>

                  {field(
                    'message',
                    'Your requirement',
                    'Quantity, product specifications, delivery location...',
                    'text',
                    true,
                  )}

                  <motion.button
                    type="submit"
                    disabled={submitting}
                    whileHover={submitting ? undefined : { y: -2, scale: 1.005 }}
                    whileTap={submitting ? undefined : { scale: 0.985 }}
                    className="group flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[#5368E8] via-[#625FE5] to-[#8170E9] px-5 py-4 text-sm font-bold text-white shadow-[0_14px_28px_-12px_rgba(83,104,232,0.7)] transition-all hover:shadow-[0_20px_35px_-12px_rgba(83,104,232,0.75)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {submitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                        Processing demo...
                      </>
                    ) : (
                      <>
                        Send enquiry
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                      </>
                    )}
                  </motion.button>

                  <p className="text-center text-xs leading-5 text-slate-400">
                    Demo form only. Your details are not transmitted or saved.
                  </p>
                </form>
              )}
            </div>

            {/* Floating decorative badge */}
            {!submitted && (
              <motion.div
                animate={{ y: [0, -6, 0], rotate: [1, 0, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -right-2 top-16 hidden items-center gap-2 rounded-2xl border border-white bg-white/95 px-4 py-3 shadow-xl shadow-indigo-100/70 sm:flex lg:-right-5"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-[#FFF0E6] text-[#D87948]">
                  <Sparkles className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-xs font-bold text-[#25314B]">
                    Let's build together
                  </span>
                  <span className="mt-0.5 block text-[10px] text-slate-500">
                    Start a conversation
                  </span>
                </span>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease }}
          className="mt-16 flex flex-col items-center justify-between gap-4 rounded-3xl border border-white/90 bg-white/60 px-6 py-6 text-center shadow-sm backdrop-blur-lg sm:flex-row sm:px-8 sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#E9EEFF] text-indigo-600">
              <Boxes className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#25314B]">
                The right product starts with the right conversation.
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Tell us about your packaging requirements.
              </p>
            </div>
          </div>

          <a
            href="/products"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-indigo-600 transition-colors hover:bg-indigo-50"
          >
            Explore products
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </motion.div>
      </section>
    </main>
  );
}
