import { Accordion } from "../components/ui/Accordion";
import { FadeIn } from "../components/ui/Animations";

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
];

export function FAQ() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.06),transparent_24%)]" />
      <div className="container-page">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-heading">Frequently asked questions</h2>
            <p className="section-subheading mx-auto">
              Everything you need to know about our privacy-preserving loan 
              eligibility verification system.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="mx-auto mt-16 max-w-3xl">
          <Accordion items={faqItems} />
        </FadeIn>
      </div>
    </section>
  );
}
