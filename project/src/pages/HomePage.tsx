
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Package,
  Layers3,
  Headphones,
  Sparkles,
  MoveUpRight,
  Orbit,
} from 'lucide-react';
import { HeroScene } from '@/components/three/Scenes';
import { ProductCard } from '@/components/ProductCard';
import { QuickViewModal } from '@/components/QuickViewModal';
import { PRODUCTS, COMPANY, type Product } from '@/data/catalog';
import { useState } from 'react';

const featured = PRODUCTS.filter((p) => p.featured);

const values = [
  {
    number: '01',
    icon: Package,
    title: 'Packaging that performs.',
    body: 'Explore parcel packing clips and PPE strapping designed for the demands of logistics, warehousing, and courier operations.',
    color: 'bg-[#E3EFFF]',
    iconColor: 'text-[#355BEA]',
    blob: 'bg-[#8EB7FF]',
  },
  {
    number: '02',
    icon: Layers3,
    title: 'Built around your needs.',
    body: 'Discover practical packaging solutions with an emphasis on strength, durability, and dependable performance.',
    color: 'bg-[#E0F8ED]',
    iconColor: 'text-[#078C71]',
    blob: 'bg-[#7AE5C1]',
  },
  {
    number: '03',
    icon: Headphones,
    title: 'People behind every pack.',
    body: 'Connect with our team to discuss product requirements, business enquiries, and suitable packaging options.',
    color: 'bg-[#FFE8D8]',
    iconColor: 'text-[#D96930]',
    blob: 'bg-[#FFB47E]',
  },
];

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function HomePage() {
  const [view, setView] = useState<Product | null>(null);

  return (
    <main className="overflow-hidden bg-[#FAF9F6] pt-16 text-[#18233B]">

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-[#F0EDFF]">
        {/* Background artwork */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-36 top-16 h-80 w-80 rounded-full bg-[#C9D9FF]/70 blur-[90px]" />
          <div className="absolute right-0 top-0 h-[450px] w-[450px] rounded-full bg-[#FFDCC7]/60 blur-[110px]" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-[#B9F3DF]/50 blur-[90px]" />
          <div
            className="absolute inset-0 opacity-[0.14]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(24,35,59,.14) 1px, transparent 1px), linear-gradient(90deg, rgba(24,35,59,.14) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              maskImage:
                'linear-gradient(to bottom, black, transparent 90%)',
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-2 px-5 pb-12 pt-12 sm:px-10 sm:pb-20 sm:pt-20 lg:grid-cols-[1.05fr_.95fr] lg:px-16 lg:pb-24 lg:pt-20">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } },
            }}
            className="relative z-10"
          >
            <motion.div variants={reveal}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] shadow-sm backdrop-blur-md sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Packaging solutions · India
              </span>
            </motion.div>

            <motion.p
              variants={reveal}
              className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-[#5D6480] sm:mt-10"
            >
              <Sparkles className="h-4 w-4 text-[#7655E8]" />
              {COMPANY.legalName}
            </motion.p>

            <motion.h1
              variants={reveal}
              className="mt-4 max-w-4xl font-display text-[clamp(3.5rem,8.5vw,7.8rem)] font-bold leading-[0.88] tracking-[-0.075em]"
            >
              Packaging
              <br />
              <span className="relative inline-block">
                without
                <span className="absolute -bottom-1 left-0 h-[5px] w-[75%] rounded-full bg-[#FF976A] sm:-bottom-2 sm:h-2" />
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#5368F6] via-[#7655E8] to-[#0DAE98] bg-clip-text text-transparent">
                limits.
              </span>
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-7 max-w-md text-base leading-7 text-[#60677B] sm:mt-9 sm:text-lg sm:leading-8"
            >
              Smarter packaging starts with the right details. Discover
              industrial packaging supplies for secure, efficient everyday
              operations.
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10"
            >
              <Link
                to="/products"
                className="group inline-flex items-center gap-4 rounded-full bg-[#5368F6] py-2 pl-6 pr-2 text-sm font-bold text-white shadow-[0_12px_30px_rgba(83,104,246,.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4054E8] hover:shadow-[0_18px_40px_rgba(83,104,246,.35)]"
              >
                Explore collection
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#5368F6] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-[#18233B]/15 bg-white/50 px-6 py-4 text-sm font-bold transition-all hover:border-[#5368F6]/40 hover:bg-white"
              >
                Let's talk
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#777D90] sm:mt-14 sm:gap-x-7"
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5368F6]" />
                Industrial supplies
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#13AD92]" />
                Business enquiries
              </span>
            </motion.div>
          </motion.div>

          {/* 3D VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: 3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 1.1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto mt-2 h-[330px] w-full max-w-[600px] sm:h-[480px] lg:mt-0 lg:h-[600px]"
          >
            {/* Decorative orbit */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
              className="pointer-events-none absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#7E87D9]/30"
            />

            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 1.2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              <HeroScene className="h-full w-full" />
            </motion.div>

            {/* Floating label */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute left-0 top-[16%] rounded-2xl border border-white/80 bg-white/85 p-3 shadow-[0_15px_45px_rgba(48,55,100,.12)] backdrop-blur-xl sm:left-2 sm:p-4"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#E6EFFF] text-[#5368F6]">
                  <Package className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-extrabold text-[#18233B]">
                    Made for movement
                  </p>
                  <p className="mt-1 text-[10px] text-[#777D90]">
                    Packaging essentials
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating decorative bubble */}
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute right-0 top-[14%] grid h-14 w-14 place-items-center rounded-2xl bg-[#DDF8EC] text-[#078C71] shadow-lg shadow-emerald-900/5 sm:right-5 sm:h-[72px] sm:w-[72px]"
            >
              <Orbit className="h-7 w-7 sm:h-9 sm:w-9" />
            </motion.div>

            {/* Bottom floating badge */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-[10%] right-1 rounded-2xl border border-white/80 bg-white/85 px-4 py-3 shadow-[0_15px_45px_rgba(48,55,100,.12)] backdrop-blur-xl sm:bottom-[12%] sm:right-3 sm:px-5 sm:py-4"
            >
              <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#777D90]">
                The right fit
              </p>
              <p className="mt-1 text-sm font-bold text-[#18233B] sm:text-base">
                For every shipment.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom ticker */}
        <div className="relative overflow-hidden border-t border-[#18233B]/10 bg-white/40 py-4">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="flex w-max items-center gap-8 whitespace-nowrap"
          >
            {[0, 1].map((group) => (
              <div key={group} className="flex items-center gap-8">
                {[
                  'PACK SMARTER',
                  'MOVE WITH CONFIDENCE',
                  'INDUSTRIAL PACKAGING',
                  'BUILT FOR BUSINESS',
                ].map((word) => (
                  <span
                    key={`${group}-${word}`}
                    className="flex items-center gap-8 text-[10px] font-extrabold tracking-[0.23em] text-[#656B81] sm:text-xs"
                  >
                    {word}
                    <span className="h-2 w-2 rotate-45 bg-[#FF976A]" />
                  </span>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="relative bg-[#FAF9F6]">
        <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#DDE8FF]/60 blur-[100px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.25em] text-[#5368F6] sm:text-xs">
                <span className="h-px w-8 bg-[#5368F6]" />
                The collection
              </span>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                Good things
                <br />
                <span className="text-[#9296A8]">come packaged.</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-7 text-[#70768A] sm:text-base">
                Explore packaging essentials selected for practical use across
                shipping, storage, and day-to-day business operations.
              </p>
            </div>

            <Link
              to="/products"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-[#18233B]/15 bg-white px-5 py-3.5 text-sm font-bold transition-all hover:border-[#5368F6]/40 hover:text-[#5368F6]"
            >
              Browse all products
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#F0EDFF] transition-transform group-hover:rotate-45">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {featured.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="group min-w-0"
              >
                <div className="h-full rounded-[28px] border border-[#18233B]/[0.06] bg-white p-2 shadow-[0_8px_35px_rgba(35,42,76,.035)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(35,42,76,.10)] sm:rounded-[32px]">
                  <ProductCard product={p} onView={setView} />
                </div>
              </motion.div>
            ))}
          </div>

          {featured.length === 0 && (
            <div className="mt-10 rounded-3xl border border-dashed border-[#18233B]/15 bg-white/70 p-10 text-center">
              <Package className="mx-auto h-8 w-8 text-[#5368F6]" />
              <p className="mt-3 font-bold">Products coming soon</p>
              <p className="mt-2 text-sm text-[#70768A]">
                Add featured items to your catalogue to show them here.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* WHY VIKASH PACK */}
      <section className="relative overflow-hidden bg-[#EAF5FF]">
        <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#C4D7FF]/60 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-32 -left-16 h-80 w-80 rounded-full bg-[#C8F5E4]/70 blur-[100px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:sticky lg:top-28 lg:self-start"
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#078C71] sm:text-xs">
                <Sparkles className="h-3.5 w-3.5" />
                The Vikash Pack difference
              </span>

              <h2 className="mt-6 font-display text-5xl font-bold leading-[0.94] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Details make
                <br />
                <span className="text-[#5368F6]">the difference.</span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-8 text-[#626D83]">
                Packaging is more than the final step. The right supplies help
                businesses prepare, secure, and move their goods with
                confidence.
              </p>

              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-extrabold text-[#18233B]"
              >
                Discover our approach
                <span className="grid h-9 w-9 place-items-center rounded-full bg-[#18233B] text-white transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
            </motion.div>

            <div className="space-y-4">
              {values.map((v, i) => (
                <motion.article
                  key={v.number}
                  initial={{ opacity: 0, x: 28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.55, delay: i * 0.12 }}
                  className={`group relative overflow-hidden rounded-[26px] border border-white/80 ${v.color} p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(38,54,94,.09)] sm:rounded-[32px] sm:p-8`}
                >
                  <div className={`pointer-events-none absolute -right-12 -top-16 h-44 w-44 rounded-full ${v.blob} opacity-30 blur-2xl transition-transform duration-700 group-hover:scale-150`} />

                  <div className="relative flex items-start gap-5 sm:gap-7">
                    <div className="flex shrink-0 flex-col items-center gap-4">
                      <span className="text-xs font-extrabold tracking-widest text-[#747B91]">
                        {v.number}
                      </span>
                      <span className={`grid h-12 w-12 place-items-center rounded-2xl bg-white/85 ${v.iconColor} shadow-sm sm:h-14 sm:w-14`}>
                        <v.icon className="h-6 w-6" />
                      </span>
                    </div>

                    <div className="relative min-w-0 flex-1">
                      <h3 className="max-w-md font-display text-xl font-bold leading-tight tracking-[-0.04em] sm:text-2xl lg:text-3xl">
                        {v.title}
                      </h3>
                      <p className="mt-3 max-w-lg text-sm leading-7 text-[#626D83] sm:text-base">
                        {v.body}
                      </p>
                    </div>

                    <ArrowUpRight className="relative hidden h-5 w-5 shrink-0 text-[#747B91] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#18233B] sm:block" />
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[#FAF9F6] px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-[1312px] overflow-hidden rounded-[30px] bg-[#202B50] px-6 py-16 text-center sm:rounded-[42px] sm:px-14 sm:py-24"
        >
          {/* Abstract colourful shapes */}
          <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[#667BFF]/70 blur-[70px]" />
          <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#12BFA1]/40 blur-[85px]" />
          <div className="pointer-events-none absolute bottom-[-120px] left-1/3 h-64 w-64 rounded-full bg-[#FF976A]/40 blur-[80px]" />

          <div className="relative mx-auto max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.22em] text-[#D5D9FF] backdrop-blur sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              Your next shipment starts here
            </span>

            <h2 className="mt-7 font-display text-4xl font-bold leading-[0.98] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              Let's find your
              <br />
              <span className="text-[#B9F5DF]">perfect pack.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Have a product requirement or need help choosing the right
              packaging supplies? Let's talk.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-extrabold text-[#202B50] transition-all duration-300 hover:-translate-y-1 hover:bg-[#E9FFF6]"
              >
                Explore products
                <MoveUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-4 text-sm font-bold text-white backdrop-blur transition-all hover:bg-white/15"
              >
                Talk to our team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="pointer-events-none absolute bottom-5 right-6 hidden items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/35 sm:flex">
            PACK SMARTER
            <ArrowDownRight className="h-4 w-4" />
          </div>
        </motion.div>
      </section>

      <QuickViewModal product={view} onClose={() => setView(null)} />
    </main>
  );
}