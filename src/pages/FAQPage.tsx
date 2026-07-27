import { Accordion } from "../components/ui/Accordion";
import { CTA } from "../sections/CTA";

const faqItems = [
  {
    question: "Do you store my salary or income?",
    answer: "No. Your income and credit score are used only to generate a zero-knowledge proof locally in your browser. These raw values are never transmitted to our servers, stored in any database, or recorded on the Midnight Network blockchain. Only the final eligibility result (eligible or not) is recorded on-chain.",
  },
  {
    question: "Can others see my credit score?",
    answer: "No. Your credit score remains completely private. The zero-knowledge proof cryptographically proves that your score meets the required threshold without revealing the actual number. Neither lenders, nor other users, nor even our platform can see your credit score.",
  },
  {
    question: "Why do I need to connect a wallet?",
    answer: "The Lace wallet for Midnight Network is used to sign the zero-knowledge proof transaction. This cryptographic signature attests to the validity of your proof without revealing your identity or financial data. The wallet also submits the verified result to the blockchain.",
  },
  {
    question: "What is Midnight Network?",
    answer: "Midnight Network is a blockchain platform built with privacy at its core. It uses zero-knowledge proof technology to enable applications where users can prove facts about their data without revealing the data itself. This makes it ideal for privacy-preserving financial applications.",
  },
  {
    question: "How secure is the zero-knowledge proof?",
    answer: "Zero-knowledge proofs are one of the most secure cryptographic techniques available. They provide mathematical certainty that the prover knows the secret (your financial data) satisfies certain criteria, without revealing the secret itself. The proofs are verified on-chain and cannot be forged or tampered with.",
  },
  {
    question: "What happens if I'm not eligible?",
    answer: "If your financial data doesn't meet the eligibility criteria, the zero-knowledge proof cannot be generated. The system will show you that eligibility was denied, but your actual income and credit score are never revealed — even in the denied state.",
  },
  {
    question: "Is my data encrypted?",
    answer: "Yes. All financial data is processed locally in your browser and never leaves your device. The zero-knowledge proof is generated using cryptographic techniques that ensure the raw values are never exposed, even during the proof generation process.",
  },
  {
    question: "Can the eligibility result be tampered with?",
    answer: "No. The eligibility result is cryptographically bound to the zero-knowledge proof. Any attempt to modify the result would invalidate the proof, and the blockchain would reject the transaction. The verification is mathematically guaranteed.",
  },
  {
    question: "What wallet do I need?",
    answer: "You need the Lace wallet extension for Midnight Network. It's available for Chrome, Firefox, and other major browsers. The wallet provides identity and transaction signing without exposing your private keys or financial data.",
  },
  {
    question: "Is this open source?",
    answer: "The smart contract logic is published on the Midnight Network blockchain and is fully auditable. The zero-knowledge proof circuits are compiled from Compact, Midnight's ZK circuit language. Our platform code is available for inspection.",
  },
];

export function FAQPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_28%),radial-gradient(circle_at_top_right,rgba(236,72,153,0.06),transparent_24%)]" />
        <div className="container-page">
          <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/15 bg-white/65 px-6 py-10 text-center shadow-[0_24px_90px_rgba(15,23,42,0.08)] backdrop-blur-xl lg:px-10 lg:py-14 dark:border-white/10 dark:bg-slate-950/55">
            <h1 className="text-hero text-balance text-gray-950 dark:text-white">
              Frequently asked <span className="text-primary-600 dark:text-primary-400">questions</span>
            </h1>
            <p className="mt-6 text-hero-sub text-gray-600 dark:text-gray-300">
              Everything you need to know about our privacy-preserving loan 
              eligibility verification system.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-spacing relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.08),transparent_40%)]" />
        <div className="container-page">
          <div className="mx-auto max-w-3xl">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
