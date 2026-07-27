import { FadeIn, Stagger, StaggerItem } from "../components/ui/Animations";

const features = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Complete Privacy",
    description: "Your income and credit score are never transmitted on-chain. Zero-knowledge proofs verify eligibility without revealing the underlying data.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "On-Chain Verification",
    description: "Eligibility results are immutably recorded on the Midnight Network blockchain, providing transparent and tamper-proof verification records.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
    title: "Browser-Side Proofs",
    description: "Zero-knowledge proofs are generated entirely within your browser using the Midnight proof server. Your raw financial data never leaves your device.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5V6.75a4.5 4.5 0 119 0v3.75M3.75 21.75h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H3.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Wallet Integration",
    description: "Connect seamlessly with the Lace wallet for Midnight. Sign transactions securely without exposing your private keys or financial information.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Instant Results",
    description: "Generate zero-knowledge proofs and get eligibility results in seconds. No waiting for manual verification or third-party processing.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Full Transparency",
    description: "While your inputs remain private, the verification process is fully transparent. Anyone can confirm that eligibility was properly evaluated.",
  },
];

export function Features() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-12rem] top-24 h-80 w-80 rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute right-[-8rem] bottom-24 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px]" />
      </div>
      <div className="container-page">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">Built for privacy-first finance</h2>
            <p className="section-subheading mx-auto">
              Every feature is designed to protect your financial data while enabling 
              transparent, verifiable loan eligibility decisions.
            </p>
          </div>
        </FadeIn>

        <Stagger className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {features.map((feature, i) => (
            <StaggerItem key={i}>
              <div
                className="group flex h-full flex-col rounded-[1.75rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,250,252,0.78))] p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-[0_28px_100px_rgba(79,70,229,0.12)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.84),rgba(15,23,42,0.64))]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-primary-600 to-cyan-500 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_14px_40px_rgba(79,70,229,0.22)] ring-1 ring-white/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_18px_50px_rgba(79,70,229,0.28)]">
                  {feature.icon}
                </div>
                <h3 className="mt-5 text-card-title font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="mt-3 text-body leading-relaxed text-slate-700 dark:text-slate-300">{feature.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
