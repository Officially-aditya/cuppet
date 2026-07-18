import { motion } from 'framer-motion'
import {
  ArrowRight,
  CalendarClock,
  Check,
  CheckCheck,
  Clock3,
  HardDrive,
  Inbox,
  LockKeyhole,
  Newspaper,
} from 'lucide-react'

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      <div className="absolute left-0 top-0 h-full w-px bg-black/[0.04] sm:left-[calc(50%-576px)]" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-[minmax(0,1fr)_440px] gap-16 lg:gap-12 xl:gap-20 items-center">
        <div className="min-w-0 text-center lg:text-left">
          <motion.div variants={fade} initial="hidden" animate="show" custom={0}>
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/50">
              <span className="w-1.5 h-1.5 rounded-full bg-[#2f6b49] pulse-dot" />
              Private beta · iOS & Android
            </span>
          </motion.div>

          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-7 font-display font-normal tracking-[-0.035em] text-[3.55rem] leading-[0.91] sm:text-[5rem] lg:text-[5.25rem] text-[#171a17]"
          >
            Work gets done.
            <span className="block italic text-[#2c6042]">You get a message.</span>
          </motion.h1>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-7 text-[16px] sm:text-[17px] text-black/55 leading-7 max-w-[36rem] mx-auto lg:mx-0"
          >
            Create an agent in one sentence. It works across your connected accounts, keeps its
            schedule, and sends the result to your inbox. No dashboards to babysit.
          </motion.p>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start"
          >
            <a
              href="#cta"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#173c2a] hover:bg-[#102e20] text-[#F5F3EE] text-sm font-semibold px-6 py-3.5 rounded-full transition-all"
            >
              Join private beta
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#how"
              className="w-full sm:w-auto inline-flex items-center justify-center text-sm text-black/65 font-semibold px-5 py-3.5 rounded-full hover:text-black transition-colors"
            >
              See how it works
              <span aria-hidden="true" className="ml-1">↓</span>
            </a>
          </motion.div>

          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-11 flex flex-wrap items-center gap-x-6 gap-y-3 justify-center lg:justify-start text-[11px] font-medium text-black/45"
          >
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#2c6042]" />
              No workflow builder
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#2c6042]" />
              Cancel anytime
            </span>
            <span className="flex items-center gap-1.5">
              <LockKeyhole className="w-3.5 h-3.5 text-[#2c6042]" />
              Read-first access
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full min-w-0 justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-[440px] rounded-[2rem] bg-[#dfe7dc] p-3 sm:p-5">
            <div className="mb-4 flex items-center justify-between px-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#254633]/60">
              <span>Today’s agent activity</span>
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#2c6042]" />
                Live
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
              <div className="col-span-2 rounded-[1.4rem] bg-[#173c2a] p-5 text-[#F5F3EE] sm:p-6">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F3EE]/10">
                    <Newspaper className="h-4 w-4 text-[#b7d3bd]" strokeWidth={1.6} />
                  </span>
                  <span className="flex items-center gap-1.5 text-[9px] font-medium uppercase tracking-[0.12em] text-[#F5F3EE]/40">
                    <CheckCheck className="h-3.5 w-3.5 text-[#a8ceb2]" />
                    Delivered · 7:00
                  </span>
                </div>
                <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#F5F3EE]/40">
                  Morning brief
                </p>
                <h3 className="mt-2 max-w-[18rem] text-[19px] font-semibold leading-6 tracking-[-0.025em]">
                  Three stories are worth your attention today.
                </h3>
                <div className="mt-5 grid grid-cols-3 gap-2 border-t border-[#F5F3EE]/10 pt-4">
                  {['AI', 'Markets', 'Product'].map((topic, index) => (
                    <div key={topic}>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-[#a8ceb2]">
                        {topic}
                      </p>
                      <p className="mt-1 text-[10px] leading-4 text-[#F5F3EE]/48">
                        {index === 0 ? '2 updates' : '1 update'}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="min-w-0 rounded-[1.25rem] bg-[#F5F3EE] p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dfe7dc]">
                    <Inbox className="h-3.5 w-3.5 text-[#2c6042]" strokeWidth={1.7} />
                  </span>
                  <Clock3 className="h-3.5 w-3.5 text-black/25" />
                </div>
                <p className="mt-8 truncate text-[12px] font-semibold text-[#171a17]">Inbox close</p>
                <p className="mt-1 text-[10px] leading-4 text-black/42">
                  12 emails · 2 need replies
                </p>
                <p className="mt-4 flex items-center gap-1 text-[9px] uppercase tracking-[0.08em] text-black/28">
                  <CalendarClock className="h-2.5 w-2.5" />
                  6:00 PM
                </p>
              </div>

              <div className="min-w-0 rounded-[1.25rem] bg-[#F5F3EE] p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#dfe7dc]">
                    <HardDrive className="h-3.5 w-3.5 text-[#2c6042]" strokeWidth={1.7} />
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#43855b]" />
                </div>
                <p className="mt-8 truncate text-[12px] font-semibold text-[#171a17]">Project watch</p>
                <p className="mt-1 text-[10px] leading-4 text-black/42">
                  Monitoring client folders
                </p>
                <p className="mt-4 flex items-center gap-1 text-[9px] uppercase tracking-[0.08em] text-black/28">
                  <CalendarClock className="h-2.5 w-2.5" />
                  Friday
                </p>
              </div>

              <div className="col-span-2 flex items-center gap-3 rounded-[1.2rem] border border-black/[0.07] bg-[#F5F3EE]/70 px-4 py-3.5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2c6042]">
                  <Check className="h-3.5 w-3.5 text-[#F5F3EE]" strokeWidth={2.5} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[10px] font-semibold text-[#171a17]">
                    Calendar brief completed
                  </p>
                  <p className="mt-0.5 text-[9px] text-black/35">Ready before your 9:30 meeting</p>
                </div>
                <span className="text-[9px] font-medium text-black/28">8:45</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
