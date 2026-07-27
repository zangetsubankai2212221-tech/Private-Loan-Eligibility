import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FadeIn } from "../components/ui/Animations";
import { Button } from "../components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 sm:pt-40 lg:pt-48 lg:pb-36">
      <div className="absolute inset-0 -z-10">
        <div className="absolute -left-24 top-[-10rem] h-[34rem] w-[34rem] rounded-full bg-indigo-500/20 blur-[120px]" />
        <div className="absolute right-[-8rem] top-24 h-[28rem] w-[28rem] rounded-full bg-cyan-400/15 blur-[120px]" />
        <div className="absolute bottom-[-10rem] left-1/3 h-[22rem] w-[22rem] rounded-full bg-pink-500/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.5),transparent_55%)] opacity-30 dark:opacity-0" />
      </div>

      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-24">
          {/* Left — Copy */}
          <div className="max-w-2xl">
            <FadeIn delay={0}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/70 px-4 py-2 text-xs font-semibold text-gray-700 shadow-[0_12px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-gray-200">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 animate-pulse" />
                Privacy-preserving finance on Midnight Network
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-950 dark:text-white sm:text-6xl lg:text-7xl lg:leading-[0.95]">
                Prove loan eligibility without exposing your data
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
                Zero-knowledge proofs verify your income and credit score meet lending criteria —
                without ever revealing the actual values on-chain.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/launch"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-primary-600 to-cyan-500 px-7 py-3.5 font-semibold text-white shadow-[0_18px_50px_rgba(79,70,229,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_70px_rgba(79,70,229,0.42)]"
                >
                  Launch Application
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link to="/how-it-works">
                  <Button size="lg" variant="secondary">
                    Learn More
                  </Button>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-white/15 bg-white/70 p-4 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">100% Private</p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Financial data stays local</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/70 p-4 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">On-Chain</p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">Eligibility is verifiable</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/70 p-4 shadow-[0_14px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
                  <p className="text-sm font-semibold text-gray-900 dark:text-white">ZK Proofs</p>
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">No raw values revealed</p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right — Visual */}
          <FadeIn delay={0.2} direction="left" className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-10 rounded-[2.5rem] bg-gradient-to-br from-indigo-500/10 via-transparent to-cyan-400/10 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/15 bg-white/65 p-6 shadow-[0_30px_120px_rgba(15,23,42,0.16)] backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/60">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-primary-600 to-cyan-500 shadow-[0_18px_50px_rgba(79,70,229,0.35)]">
                      <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-950 dark:text-white">Eligibility Check</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">Zero-Knowledge Verification</p>
                    </div>
                  </div>
                  <span className="rounded-full border border-emerald-300/60 bg-emerald-100/80 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-[0_10px_30px_rgba(16,185,129,0.18)] dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                    Verified
                  </span>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-white/15 bg-white/75 p-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/5">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Annual Income</p>
                    <p className="mt-2 text-sm font-semibold text-gray-950 dark:text-white">•••••••</p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-primary-600 dark:text-cyan-300">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                      Encrypted locally
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/15 bg-white/75 p-4 shadow-[0_12px_40px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/5">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">Credit Score</p>
                    <p className="mt-2 text-sm font-semibold text-gray-950 dark:text-white">••••</p>
                    <div className="mt-3 flex items-center gap-2 text-xs text-primary-600 dark:text-cyan-300">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                      </svg>
                      Never leaves browser
                    </div>
                  </div>

                  <div className="rounded-[1.75rem] border border-emerald-200/80 bg-emerald-50/90 p-4 shadow-[0_18px_50px_rgba(16,185,129,0.14)] dark:border-emerald-800 dark:bg-emerald-950/25">
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-400">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-200">Eligibility Confirmed</p>
                        <p className="text-xs text-emerald-600 dark:text-emerald-400">ZK proof generated and verified on-chain</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 -top-4 rounded-2xl border border-white/15 bg-white/80 px-4 py-3 shadow-[0_16px_50px_rgba(15,23,42,0.10)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/70"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-primary-600 to-cyan-500">
                  <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-950 dark:text-white">Zero Knowledge</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-400">Privacy by default</p>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
