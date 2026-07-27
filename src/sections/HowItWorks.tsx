import { FadeIn, Stagger, StaggerItem } from "../components/ui/Animations";

const steps = [
  {
    step: "01",
    title: "Connect Wallet",
    description: "Connect your Lace wallet for Midnight Network. Your wallet handles identity and transaction signing — no private keys are ever shared.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Enter Financial Details",
    description: "Input your annual income and credit score. These values are used only to generate a zero-knowledge proof — they never leave your browser.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Generate ZK Proof",
    description: "A zero-knowledge proof is generated locally in your browser using the Midnight proof server. The proof confirms eligibility without revealing your data.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    step: "04",
    title: "Wallet Signs Transaction",
    description: "Your Lace wallet signs the proof transaction, cryptographically attesting to the validity of the zero-knowledge proof.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    step: "05",
    title: "Blockchain Records Result",
    description: "Only the final eligibility result (eligible or not) is recorded on the Midnight Network. Your income and credit score remain completely private.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.08),transparent_28%)]" />
      <div className="container-page">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">How it works</h2>
            <p className="section-subheading mx-auto">
              Five simple steps to verify your loan eligibility — with complete privacy 
              at every stage.
            </p>
          </div>
        </FadeIn>

        <div className="mt-20 relative">
          {/* Vertical connector line */}
          <div className="absolute left-[39px] top-0 bottom-0 hidden w-px bg-gradient-to-b from-indigo-300 via-cyan-300 to-pink-300 dark:from-indigo-700 dark:via-cyan-700 dark:to-pink-700 lg:block" />

          <Stagger className="space-y-12 lg:space-y-16" staggerDelay={0.15}>
            {steps.map((step, i) => (
              <StaggerItem key={i}>
                <div className="group relative flex gap-8 lg:gap-12">
                  {/* Step indicator */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-[1.25rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,250,252,0.78))] text-primary-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_16px_45px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:border-slate-300/80 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_22px_65px_rgba(79,70,229,0.14)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.84),rgba(15,23,42,0.64))] dark:text-cyan-300">
                      {step.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 rounded-[1.75rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,250,252,0.78))] p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:border-slate-300/80 group-hover:shadow-[0_28px_100px_rgba(79,70,229,0.12)] lg:p-10 dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.84),rgba(15,23,42,0.64))]">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex rounded-full bg-gradient-to-r from-indigo-500 via-primary-500 to-cyan-500 px-3 py-1 text-xs font-bold tracking-[0.2em] text-white shadow-[0_12px_30px_rgba(79,70,229,0.18)]">STEP {step.step}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                    <p className="mt-3 text-body leading-relaxed text-slate-700 dark:text-slate-300">{step.description}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
