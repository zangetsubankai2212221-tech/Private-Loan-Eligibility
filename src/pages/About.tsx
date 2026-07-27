import { CTA } from "../sections/CTA";

const visionItems = [
  {
    title: "Privacy-First Architecture",
    description: "We believe financial data should remain private by default. Our zero-knowledge proof system ensures that users can verify eligibility without exposing sensitive information.",
  },
  {
    title: "Midnight Network",
    description: "Built on Midnight Network, a blockchain platform designed for privacy-preserving applications. Midnight enables smart contracts that process encrypted data without revealing it.",
  },
  {
    title: "Zero Knowledge Proofs",
    description: "Zero-knowledge proofs allow one party to prove to another that a statement is true, without revealing any information beyond the validity of the statement itself. This cryptographic breakthrough makes private verification possible.",
  },
  {
    title: "Open & Transparent",
    description: "While individual data remains private, the verification process is fully transparent. Anyone can confirm that eligibility was properly evaluated using the published smart contract logic.",
  },
];

const stackItems = [
  { name: "Midnight Network", role: "Blockchain Layer", description: "Privacy-preserving smart contract platform" },
  { name: "Compact", role: "ZK Circuit Language", description: "Domain-specific language for zero-knowledge circuits" },
  { name: "Lace Wallet", role: "User Interface", description: "Wallet for Midnight Network transactions" },
  { name: "React + TypeScript", role: "Frontend", description: "Modern web application framework" },
  { name: "Vite", role: "Build Tool", description: "Fast development and production builds" },
];

export function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(34,211,238,0.08),transparent_24%)]" />
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/15 bg-white/65 px-6 py-10 text-center shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:px-10 lg:py-14 dark:border-white/10 dark:bg-slate-950/55">
            <h1 className="text-hero text-balance text-gray-950 dark:text-white">
              Privacy is a <span className="text-primary-600 dark:text-primary-400">fundamental right</span>
            </h1>
            <p className="mt-6 text-hero-sub text-gray-600 dark:text-gray-300">
              We're building the infrastructure for private financial verification — 
              where your data stays yours, and trust is established through mathematics, 
              not data exposure.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_34%)]" />
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">Our vision</h2>
            <p className="section-subheading mx-auto">
              A world where financial verification doesn't require surrendering your privacy.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {visionItems.map((item, i) => (
              <div key={i} className="rounded-[1.75rem] border border-white/15 bg-white/70 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/60">
                <h3 className="text-card-title text-gray-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-body leading-relaxed text-slate-700 dark:text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.08),transparent_30%)]" />
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">Technology stack</h2>
            <p className="section-subheading mx-auto">
              Built on cutting-edge zero-knowledge cryptography and modern web technologies.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="space-y-4">
              {stackItems.map((item, i) => (
                <div key={i} className="flex items-center gap-6 rounded-[1.75rem] border border-white/15 bg-white/70 p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all hover:-translate-y-0.5 hover:shadow-[0_24px_80px_rgba(15,23,42,0.12)] dark:border-white/10 dark:bg-slate-950/60">
                  <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 via-primary-600 to-cyan-500 text-sm font-bold text-white shadow-[0_18px_50px_rgba(79,70,229,0.24)]">
                    {item.role.split(" ").map(w => w[0]).join("")}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-body font-semibold text-slate-900 dark:text-white">{item.name}</h3>
                    <p className="text-caption text-slate-500 dark:text-slate-400">{item.role}</p>
                  </div>
                  <p className="hidden text-caption text-slate-500 dark:text-slate-400 sm:block">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Privacy Matters */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(239,68,68,0.06),transparent_28%),radial-gradient(circle_at_top_right,rgba(16,185,129,0.06),transparent_28%)]" />
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <h2 className="section-heading text-center">Why privacy matters</h2>
            <p className="mt-4 text-center text-body-lg text-slate-600 dark:text-slate-300">
              In traditional financial systems, verifying eligibility requires exposing your 
              entire financial profile. This creates unnecessary risk and violates user privacy.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-red-100 text-red-600 shadow-[0_14px_40px_rgba(239,68,68,0.14)] dark:bg-red-900/30 dark:text-red-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-body font-semibold text-slate-900 dark:text-white">Traditional approach</h3>
                  <p className="mt-1 text-body text-slate-700 dark:text-slate-300">Requires sharing your full income, credit history, and personal details with lenders, creating privacy risks and potential for data breaches.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-[0_14px_40px_rgba(16,185,129,0.14)] dark:bg-emerald-900/30 dark:text-emerald-400">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-body font-semibold text-slate-900 dark:text-white">Zero-knowledge approach</h3>
                  <p className="mt-1 text-body text-slate-700 dark:text-slate-300">Prove you meet the criteria without revealing your actual data. Only the eligibility result is recorded — nothing else.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
