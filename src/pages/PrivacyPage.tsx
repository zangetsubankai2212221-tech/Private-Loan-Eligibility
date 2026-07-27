import { CTA } from "../sections/CTA";

const privacyPrinciples = [
  {
    title: "Local Processing",
    description: "All financial data processing happens entirely within your browser. No data is sent to external servers during proof generation.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 7.41A2.25 2.25 0 012.25 5.495V5.25" />
      </svg>
    ),
  },
  {
    title: "No Data Storage",
    description: "We never store your income, credit score, or any financial data. There is no database of user financial information on our servers.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    title: "Cryptographic Security",
    description: "Zero-knowledge proofs provide mathematical certainty that your data satisfies criteria, without revealing the data itself.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Minimal On-Chain Data",
    description: "Only the eligibility result (eligible/not) is recorded on the blockchain. No financial values, no personal identifiers, no sensitive data.",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
];

const threatModel = [
  {
    threat: "Server Breach",
    protection: "No financial data is stored on our servers. A breach would expose no user financial information.",
  },
  {
    threat: "Network Interception",
    protection: "Financial data is processed locally in your browser. It never travels over the network during proof generation.",
  },
  {
    threat: "Blockchain Analysis",
    protection: "Only the eligibility result is on-chain. No financial values can be extracted through blockchain analysis.",
  },
  {
    threat: "Wallet Compromise",
    protection: "The wallet provides pseudonymous identity. Financial data is not stored in the wallet or linked to the wallet address.",
  },
  {
    threat: "Third-Party Tracking",
    protection: "No third-party analytics or tracking scripts have access to your financial data. Processing is entirely local.",
  },
];

export function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.08),transparent_24%)]" />
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/15 bg-white/65 px-6 py-10 text-center shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:px-10 lg:py-14 dark:border-white/10 dark:bg-slate-950/55">
            <h1 className="text-hero text-balance text-gray-950 dark:text-white">
              Your data <span className="text-primary-600 dark:text-primary-400">never leaves</span> your browser
            </h1>
            <p className="mt-6 text-hero-sub text-gray-600 dark:text-gray-300">
              We built our system around a fundamental principle: your financial data should 
              remain completely private. Here's how we guarantee it.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_40%)]" />
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">Privacy principles</h2>
            <p className="section-subheading mx-auto">
              Every architectural decision is made to protect your financial data.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2">
            {privacyPrinciples.map((principle, i) => (
              <div key={i} className="rounded-[1.75rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,250,252,0.78))] p-8 shadow-[0_20px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-[0_28px_100px_rgba(79,70,229,0.10)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.84),rgba(15,23,42,0.64))]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-primary-600 to-cyan-500 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_14px_40px_rgba(79,70,229,0.22)] ring-1 ring-white/20">
                  {principle.icon}
                </div>
                <h3 className="mt-5 text-card-title font-semibold text-slate-900 dark:text-white">{principle.title}</h3>
                <p className="mt-3 text-body leading-relaxed text-slate-700 dark:text-slate-300">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's collected vs what's not */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.06),transparent_28%),radial-gradient(circle_at_top_right,rgba(99,102,241,0.06),transparent_28%)]" />
        <div className="container-page">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-[1.75rem] border border-emerald-200/70 bg-[linear-gradient(180deg,rgba(236,253,245,0.94),rgba(240,253,244,0.84))] p-8 shadow-[0_18px_60px_rgba(16,185,129,0.08)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-emerald-300/80 hover:shadow-[0_28px_100px_rgba(16,185,129,0.12)] dark:border-emerald-800 dark:bg-[linear-gradient(180deg,rgba(6,78,59,0.42),rgba(6,78,59,0.26))]">
              <h3 className="mb-6 text-lg font-semibold text-slate-900 dark:text-emerald-300">What stays private</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-body text-slate-700 dark:text-slate-300">Annual income</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-body text-slate-700 dark:text-slate-300">Credit score</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-body text-slate-700 dark:text-slate-300">Personal identity</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-body text-slate-700 dark:text-slate-300">Raw proof data</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-500 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-body text-slate-700 dark:text-slate-300">Browser processing data</span>
                </li>
              </ul>
            </div>

            <div className="rounded-[1.75rem] border border-primary-200/70 bg-[linear-gradient(180deg,rgba(239,246,255,0.94),rgba(240,249,255,0.84))] p-8 shadow-[0_18px_60px_rgba(79,70,229,0.08)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary-300/80 hover:shadow-[0_28px_100px_rgba(79,70,229,0.12)] dark:border-primary-800 dark:bg-[linear-gradient(180deg,rgba(30,41,59,0.7),rgba(15,23,42,0.56))]">
              <h3 className="mb-6 text-lg font-semibold text-slate-900 dark:text-primary-300">What goes on-chain</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-500 dark:text-primary-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-body text-slate-700 dark:text-slate-300">Eligibility result (binary)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-500 dark:text-primary-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-body text-slate-700 dark:text-slate-300">Cryptographic proof hash</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-500 dark:text-primary-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-body text-slate-700 dark:text-slate-300">Transaction metadata</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-500 dark:text-primary-400" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  <span className="text-body text-slate-700 dark:text-slate-300">Wallet pseudonymous address</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Threat Model */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(239,68,68,0.06),transparent_28%)]" />
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">Threat model</h2>
            <p className="section-subheading mx-auto">
              How our system protects you against common attack vectors.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-3xl">
            <div className="space-y-4">
              {threatModel.map((item, i) => (
                <div key={i} className="rounded-[1.75rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,250,252,0.78))] p-6 shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-[0_24px_80px_rgba(239,68,68,0.08)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.84),rgba(15,23,42,0.64))]">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/15 to-rose-500/10 text-red-600 shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_12px_30px_rgba(239,68,68,0.10)] ring-1 ring-red-200/60 dark:bg-red-900/30 dark:text-red-400 dark:ring-red-800/60">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-body font-semibold text-slate-900 dark:text-white">{item.threat}</h3>
                      <p className="mt-1 text-caption text-slate-700 dark:text-slate-300">{item.protection}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
