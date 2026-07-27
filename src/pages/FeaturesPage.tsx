import { CTA } from "../sections/CTA";

const featureDetails = [
  {
    title: "Zero-Knowledge Privacy",
    description: "Your income and credit score are used only to generate a cryptographic proof. The raw values never leave your browser and are never stored or transmitted anywhere.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    badge: "Privacy",
    badgeVariant: "primary" as const,
  },
  {
    title: "Browser-Side Proof Generation",
    description: "Zero-knowledge proofs are generated entirely within your browser using the local Midnight proof server. Your device does the cryptographic work — not our servers.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25" />
      </svg>
    ),
    badge: "Local Processing",
    badgeVariant: "success" as const,
  },
  {
    title: "Wallet Integration",
    description: "Seamless connection with the Lace wallet for Midnight. Your wallet handles identity and transaction signing — private keys never leave the wallet extension.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3" />
      </svg>
    ),
    badge: "Integration",
    badgeVariant: "primary" as const,
  },
  {
    title: "On-Chain Verification",
    description: "Eligibility results are immutably recorded on the Midnight Network blockchain. The verification is transparent, tamper-proof, and publicly auditable.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
    badge: "Blockchain",
    badgeVariant: "default" as const,
  },
  {
    title: "Instant Results",
    description: "Generate zero-knowledge proofs and get eligibility results in seconds. No waiting for manual verification, third-party processing, or slow backend services.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    badge: "Speed",
    badgeVariant: "warning" as const,
  },
  {
    title: "Full Transparency",
    description: "While your inputs remain private, the verification process is fully transparent. The smart contract logic is published and anyone can audit the eligibility criteria.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    badge: "Transparency",
    badgeVariant: "success" as const,
  },
];

const badgeVariants = {
  primary: "bg-primary-100 text-primary-700",
  success: "bg-emerald-100 text-emerald-700",
  warning: "bg-amber-100 text-amber-700",
  default: "bg-gray-100 text-gray-600",
  danger: "bg-red-100 text-red-700",
};

export function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_24%)]" />
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/15 bg-white/65 px-6 py-10 text-center shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:px-10 lg:py-14 dark:border-white/10 dark:bg-slate-950/55">
            <h1 className="text-hero text-balance text-gray-950 dark:text-white">
              Features designed for <span className="text-primary-600 dark:text-primary-400">privacy</span>
            </h1>
            <p className="mt-6 text-hero-sub text-gray-600 dark:text-gray-300">
              Every feature is built to protect your financial data while enabling 
              transparent, verifiable loan eligibility decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_40%)]" />
        <div className="container-page">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featureDetails.map((feature, i) => (
              <div key={i} className="group rounded-[1.75rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,250,252,0.78))] p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-[0_28px_100px_rgba(79,70,229,0.12)] backdrop-blur-xl dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.84),rgba(15,23,42,0.64))]">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-primary-600 to-cyan-500 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_14px_40px_rgba(79,70,229,0.22)] ring-1 ring-white/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_18px_50px_rgba(79,70,229,0.28)]">
                    {feature.icon}
                  </div>
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${badgeVariants[feature.badgeVariant]}`}>
                    {feature.badge}
                  </span>
                </div>
                <h3 className="text-card-title font-semibold text-slate-900 dark:text-white">{feature.title}</h3>
                <p className="mt-3 text-body leading-relaxed text-slate-700 dark:text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
