
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  Factory,
  Target,
  Smartphone,
  Users,
  Sparkles,
  MoveUpRight,
  Package,
  ShieldCheck,
  Globe2,
  CircleDot,
} from 'lucide-react';
import { COMPANY } from '@/data/catalog';

const milestones = [
  {
    year: '2004',
    label: 'The beginning',
    title: 'Built on manufacturing.',
    text: 'Vikas Packaging Works was founded by Shree Ghanshyam Mishra, with a focus on manufacturing metal parcel packing clips.',
    color: '#5368F6',
  },
  {
    year: 'Today',
    label: 'Growing forward',
    title: 'Expanding possibilities.',
    text: 'Operations led by Mr. Rinku Mishra, with expanded product lines and developing production capabilities.',
    color: '#079C83',
  },
  {
    year: 'Digital',
    label: 'A connected future',
    title: 'Packaging meets digital.',
    text: 'Digital channels, including vikashpack.com and the Vikash Pack mobile app, help connect the business with its customers.',
    color: '#E77B48',
  },
];

const offerings = [
  {
    number: '01',
    icon: Target,
    eyebrow: 'OUR PRODUCTS',
    title: 'Made for the real world.',
    description:
      'Parcel packing clips and PPE strapping for packaging, warehousing, transportation, and logistics applications.',
    background: '#E8EFFF',
    accent: '#5368F6',
  },
  {
    number: '02',
    icon: ShieldCheck,
    eyebrow: 'OUR APPROACH',
    title: 'Quality in every detail.',
    description:
      'A practical approach to product selection, consistency, and customer requirements for day-to-day packaging operations.',
    background: '#E2F7ED',
    accent: '#078C71',
  },
  {
    number: '03',
    icon: Smartphone,
    eyebrow: 'OUR CONNECTION',
    title: 'Business, made accessible.',
    description:
      'Digital touchpoints help customers explore products and connect with the business for their packaging requirements.',
    background: '#FFEBDD',
    accent: '#D96E39',
  },
];

const reveal = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#FAF9F6] pt-16 text-[#18233B]">

      {/* HERO — BRAND STORY */}
      <section className="relative isolate overflow-hidden bg-[#F0EDFF]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-12 h-80 w-80 rounded-full bg-[#C8D9FF]/70 blur-[100px]" />
          <div className="absolute -right-20 top-0 h-[430px] w-[430px] rounded-full bg-[#FFDCC8]/60 blur-[110px]" />
          <div className="absolute bottom-0 left-1/3 h-60 w-60 rounded-full bg-[#B8F0DD]/50 blur-[90px]" />

          <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(24,35,59,.18) 1px, transparent 1px), linear-gradient(90deg, rgba(24,35,59,.18) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              maskImage:
                'linear-gradient(to bottom, black, transparent 90%)',
            }}
          />
        </div>

        <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-5 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.05fr_.95fr] lg:gap-8 lg:px-16 lg:py-24">

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
              <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] shadow-sm backdrop-blur sm:text-xs">
                <Factory className="h-3.5 w-3.5 text-[#5368F6]" />
                {COMPANY.legalName}
              </span>
            </motion.div>

            <motion.p
              variants={reveal}
              className="mt-9 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.24em] text-[#6B7085]"
            >
              <Sparkles className="h-4 w-4 text-[#7655E8]" />
              The story behind the supply
            </motion.p>

            <motion.h1
              variants={reveal}
              className="mt-5 font-display text-[clamp(3.5rem,7.7vw,7.1rem)] font-bold leading-[0.88] tracking-[-0.075em]"
            >
              Built on
              <br />
              <span className="relative inline-block">
                experience.
                <span className="absolute -bottom-1 left-0 h-1.5 w-[70%] rounded-full bg-[#FF976A] sm:-bottom-2 sm:h-2" />
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#5368F6] via-[#7655E8] to-[#0DAE98] bg-clip-text text-transparent">
                Ready for
                <br className="hidden sm:block" /> what's next.
              </span>
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-7 max-w-xl text-base leading-8 text-[#62677D] sm:mt-9 sm:text-lg"
            >
              {COMPANY.aboutShort}
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-8 flex flex-wrap gap-3 sm:mt-10"
            >
              <Link
                to="/products"
                className="group inline-flex items-center gap-4 rounded-full bg-[#5368F6] py-2 pl-6 pr-2 text-sm font-bold text-white shadow-[0_12px_30px_rgba(83,104,246,.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#4054E8]"
              >
                Explore products
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#5368F6] transition-transform group-hover:rotate-45">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </Link>

              <a
                href="#our-story"
                className="inline-flex items-center gap-2 rounded-full border border-[#18233B]/15 bg-white/60 px-6 py-4 text-sm font-bold transition-colors hover:bg-white"
              >
                Discover our story
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#777D90]"
            >
              <span className="flex items-center gap-2">
                <CircleDot className="h-3.5 w-3.5 text-[#5368F6]" />
                Manufacturing roots
              </span>
              <span className="flex items-center gap-2">
                <CircleDot className="h-3.5 w-3.5 text-[#079C83]" />
                Business-focused solutions
              </span>
            </motion.div>
          </motion.div>

          {/* EDITORIAL IMAGE COMPOSITION */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[560px] pb-9 pl-3 pr-3 pt-3 sm:pl-7 sm:pr-7"
          >
            <div className="absolute inset-8 rotate-6 rounded-[36px] bg-[#C7CFFF]/70 sm:rounded-[44px]" />
            <div className="absolute inset-8 -rotate-3 rounded-[36px] bg-[#FFD9C1]/70 sm:rounded-[44px]" />

            <div className="relative overflow-hidden rounded-[30px] border-[5px] border-white/80 bg-white shadow-[0_30px_90px_rgba(41,49,88,.18)] sm:rounded-[40px]">
              <img
                src="https://images.pexels.com/photos/4487383/pexels-photo-4487383.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Packaging and warehouse operations"
                className="aspect-[4/4.4] w-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#18233B]/65 via-transparent to-[#18233B]/5" />

              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-3 py-2 text-[9px] font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-md sm:left-7 sm:top-7 sm:text-[10px]">
                <span className="h-2 w-2 rounded-full bg-[#B9F5DF]" />
                Our manufacturing story
              </div>

              <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                  From the beginning
                </p>
                <p className="mt-2 max-w-sm font-display text-3xl font-bold leading-tight tracking-[-0.045em] text-white sm:text-4xl">
                  A foundation built around packaging.
                </p>
              </div>
            </div>

            {/* Floating experience panel */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute -bottom-1 -left-1 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-[0_18px_50px_rgba(40,48,86,.12)] backdrop-blur-xl sm:-left-3 sm:p-5"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#E6EFFF] text-[#5368F6]">
                  <Factory className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-display text-2xl font-bold tracking-tight">
                    {new Date().getFullYear() - Number(COMPANY.foundedYear)}+
                  </p>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#777D90]">
                    Years since founding
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0], rotate: [0, 5, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute right-0 top-[18%] grid h-14 w-14 place-items-center rounded-2xl bg-[#DDF8EC] text-[#078C71] shadow-lg sm:-right-1 sm:h-[68px] sm:w-[68px]"
            >
              <Package className="h-7 w-7" />
            </motion.div>
          </motion.div>
        </div>

        {/* Brand strip */}
        <div className="relative border-t border-[#18233B]/10 bg-white/40">
          <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-10 lg:px-16">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#777D90]">
              Our focus
            </p>
            {['Manufacturing', 'Packaging supplies', 'Customer connection'].map(
              (item) => (
                <span
                  key={item}
                  className="text-xs font-bold text-[#505970] sm:text-sm"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* OUR STORY */}
      <section id="our-story" className="bg-[#FAF9F6]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:gap-20"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.23em] text-[#5368F6] sm:text-xs">
                <span className="h-px w-8 bg-[#5368F6]" />
                Who we are
              </span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[0.98] tracking-[-0.06em] sm:text-5xl lg:text-6xl">
                A practical
                <br />
                approach to
                <br />
                <span className="text-[#9296A8]">packaging.</span>
              </h2>
            </div>

            <div className="space-y-5 lg:pt-10">
              <p className="text-lg leading-8 text-[#4F586D] sm:text-xl sm:leading-9">
                What began as a focused manufacturing business for metal parcel
                packing clips has developed into a broader packaging offering.
              </p>
              <p className="text-sm leading-8 text-[#777D90] sm:text-base">
                {COMPANY.legalName} focuses on packaging products for business
                use, bringing together manufacturing experience, practical
                product requirements, and more accessible digital channels.
              </p>

              <div className="grid gap-3 pt-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#18233B]/5 bg-[#F0EDFF] p-5">
                  <Factory className="h-5 w-5 text-[#5368F6]" />
                  <p className="mt-4 font-display text-lg font-bold">
                    Manufacturing roots
                  </p>
                  <p className="mt-1 text-xs leading-6 text-[#6F7589]">
                    Built around practical packaging requirements.
                  </p>
                </div>

                <div className="rounded-2xl border border-[#18233B]/5 bg-[#E6F7EF] p-5">
                  <Globe2 className="h-5 w-5 text-[#078C71]" />
                  <p className="mt-4 font-display text-lg font-bold">
                    Digital access
                  </p>
                  <p className="mt-1 text-xs leading-6 text-[#6F7589]">
                    Making product discovery and enquiries more accessible.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="relative overflow-hidden bg-[#EAF5FF]">
        <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#C8D8FF]/60 blur-[100px]" />
        <div className="pointer-events-none absolute -bottom-20 left-0 h-72 w-72 rounded-full bg-[#C7F5E3]/70 blur-[100px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/75 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#078C71] sm:text-xs">
              <Sparkles className="h-3.5 w-3.5" />
              What drives us
            </span>

            <h2 className="mt-6 font-display text-4xl font-bold leading-[0.98] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
              Thoughtful products.
              <br />
              <span className="text-[#5368F6]">Practical solutions.</span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#69748A] sm:text-base sm:leading-8">
              Explore our product focus, customer approach, and digital
              touchpoints.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:mt-16">
            {offerings.map((item, i) => (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                style={{ backgroundColor: item.background }}
                className="group relative overflow-hidden rounded-[28px] border border-white/80 p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(35,48,80,.10)] sm:rounded-[32px] sm:p-8"
              >
                <div
                  className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-20 blur-2xl transition-transform duration-700 group-hover:scale-150"
                  style={{ backgroundColor: item.accent }}
                />

                <div className="relative flex items-start justify-between">
                  <span
                    className="grid h-14 w-14 place-items-center rounded-2xl bg-white/85 shadow-sm"
                    style={{ color: item.accent }}
                  >
                    <item.icon className="h-6 w-6" />
                  </span>

                  <span className="font-display text-sm font-bold text-[#737A8E]">
                    {item.number}
                  </span>
                </div>

                <p
                  className="relative mt-8 text-[9px] font-extrabold uppercase tracking-[0.22em]"
                  style={{ color: item.accent }}
                >
                  {item.eyebrow}
                </p>

                <h3 className="relative mt-3 font-display text-2xl font-bold leading-tight tracking-[-0.045em] sm:text-3xl">
                  {item.title}
                </h3>

                <p className="relative mt-4 text-sm leading-7 text-[#646D81]">
                  {item.description}
                </p>

                <div
                  className="relative mt-7 h-1 w-12 rounded-full transition-all duration-500 group-hover:w-20"
                  style={{ backgroundColor: item.accent }}
                />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* COMPANY JOURNEY */}
      <section className="bg-[#FAF9F6]">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"
          >
            <div>
              <span className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-[0.23em] text-[#5368F6] sm:text-xs">
                <span className="h-px w-8 bg-[#5368F6]" />
                Milestones
              </span>
              <h2 className="mt-5 font-display text-4xl font-bold leading-[0.98] tracking-[-0.06em] sm:text-6xl">
                The journey
                <br />
                <span className="text-[#9296A8]">so far.</span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-[#777D90] sm:text-base">
              From a manufacturing foundation to broader product access and
              digital connections.
            </p>
          </motion.div>

          <div className="relative mt-14 grid gap-5 md:mt-20 md:grid-cols-3">
            <div className="pointer-events-none absolute left-[8%] right-[8%] top-7 hidden h-px bg-[#D8D9E4] md:block" />

            {milestones.map((item, i) => (
              <motion.article
                key={item.year}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.14 }}
                className="relative rounded-[28px] border border-[#18233B]/[0.07] bg-white p-6 shadow-[0_8px_35px_rgba(35,42,76,.035)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(35,42,76,.08)] sm:p-8"
              >
                <div className="relative flex items-center justify-between">
                  <span
                    className="grid h-14 w-14 place-items-center rounded-2xl"
                    style={{
                      backgroundColor: `${item.color}16`,
                      color: item.color,
                    }}
                  >
                    {i === 0 ? (
                      <Factory className="h-6 w-6" />
                    ) : i === 1 ? (
                      <Package className="h-6 w-6" />
                    ) : (
                      <Smartphone className="h-6 w-6" />
                    )}
                  </span>

                  <span
                    className="font-display text-3xl font-bold tracking-[-0.06em] sm:text-4xl"
                    style={{ color: item.color }}
                  >
                    {item.year}
                  </span>
                </div>

                <p
                  className="mt-8 text-[9px] font-extrabold uppercase tracking-[0.22em]"
                  style={{ color: item.color }}
                >
                  {item.label}
                </p>

                <h3 className="mt-3 font-display text-2xl font-bold tracking-[-0.04em]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#6D7488]">
                  {item.text}
                </p>

                <div
                  className="mt-7 h-1 w-full rounded-full"
                  style={{ backgroundColor: `${item.color}22` }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '35%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, delay: i * 0.15 + 0.2 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[#F0EDFF] px-5 py-20 sm:px-10 sm:py-28 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-[1312px] overflow-hidden rounded-[30px] bg-[#202B50] px-6 py-16 sm:rounded-[42px] sm:px-14 sm:py-24"
        >
          <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[#667BFF]/70 blur-[80px]" />
          <div className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-[#12BFA1]/40 blur-[85px]" />
          <div className="pointer-events-none absolute bottom-[-100px] left-1/3 h-60 w-60 rounded-full bg-[#FF976A]/35 blur-[80px]" />

          <div className="relative mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#D5D9FF] sm:text-xs">
              <Users className="h-3.5 w-3.5" />
              Let's build a connection
            </span>

            <h2 className="mt-7 font-display text-4xl font-bold leading-[0.98] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
              Your packaging
              <br />
              <span className="text-[#B9F5DF]">starts here.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
              Explore our packaging products or speak with our team about your
              business requirements.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/products"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-extrabold text-[#202B50] transition-all hover:-translate-y-1 hover:bg-[#E9FFF6]"
              >
                View products
                <MoveUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-4 text-sm font-bold text-white transition-all hover:bg-white/15"
              >
                Contact us
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}