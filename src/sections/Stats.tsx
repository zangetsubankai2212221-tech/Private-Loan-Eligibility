import { FadeIn, Stagger, StaggerItem } from "../components/ui/Animations";

const stats = [
  { value: "100%", label: "Data Privacy", description: "Financial data never leaves your browser" },
  { value: "<5s", label: "Proof Generation", description: "Zero-knowledge proofs generated locally" },
  { value: "0", label: "Data On-Chain", description: "Only eligibility results are recorded" },
  { value: "256-bit", label: "Encryption", description: "Military-grade cryptographic security" },
];

export function Stats() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(34,211,238,0.08),transparent_24%)]" />
      <div className="container-page">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">Privacy by the numbers</h2>
            <p className="section-subheading mx-auto">
              Our zero-knowledge architecture ensures your financial data remains completely 
              private while enabling transparent verification.
            </p>
          </div>
        </FadeIn>

        <Stagger className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4" staggerDelay={0.1}>
          {stats.map((stat, i) => (
            <StaggerItem key={i}>
              <div className="flex h-full flex-col rounded-[1.75rem] border border-slate-200/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(248,250,252,0.78))] p-6 text-center shadow-[0_18px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-slate-300/80 hover:shadow-[0_24px_80px_rgba(79,70,229,0.10)] dark:border-white/10 dark:bg-[linear-gradient(180deg,rgba(15,23,42,0.84),rgba(15,23,42,0.64))]">
                <p className="bg-gradient-to-r from-indigo-500 via-primary-500 to-cyan-500 bg-clip-text text-4xl font-semibold tracking-tight text-transparent lg:text-5xl">{stat.value}</p>
                <p className="mt-3 text-base font-semibold text-slate-900 dark:text-white">{stat.label}</p>
                <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{stat.description}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
