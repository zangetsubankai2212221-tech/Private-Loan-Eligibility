# Private Loan Eligibility Verifier

> A privacy-preserving zero-knowledge loan eligibility and credit score verification platform built on the Midnight Network using Compact smart contracts.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel_Deployed-000000?style=flat-square&logo=vercel)](https://private-loan-eligibility.vercel.app/)
[![CI/CD Pipeline](https://github.com/zangetsubankai2212221-tech/Private-Loan-Eligibility/actions/workflows/ci.yml/badge.svg)](https://github.com/zangetsubankai2212221-tech/Private-Loan-Eligibility/actions/workflows/ci.yml)
[![Midnight Network](https://img.shields.io/badge/Network-Midnight-8b5cf6?style=flat-square)](https://midnight.network)
[![Compact Language](https://img.shields.io/badge/Compact-v0.31-06b6d4?style=flat-square)](https://docs.midnight.network/compact)
[![Node.js Version](https://img.shields.io/badge/Node.js-v22-10b981?style=flat-square)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

---

## Live Demo & Repository

- **Live Web Application**: [private-loan-eligibility.vercel.app](https://private-loan-eligibility.vercel.app/)
- **GitHub Repository**: [github.com/zangetsubankai2212221-tech/Private-Loan-Eligibility](https://github.com/zangetsubankai2212221-tech/Private-Loan-Eligibility)
- **CI/CD Workflow**: [.github/workflows/ci.yml](.github/workflows/ci.yml)

---

## Challenge Requirements & Passing Checklist

- [x] **Fully Functional Privacy dApp**: Meaningful use of Midnight's Zero-Knowledge privacy model for financial verification
- [x] **Live Demo Deployment**: [https://private-loan-eligibility.vercel.app/](https://private-loan-eligibility.vercel.app/)
- [x] **Passing Test Suite**: Unit tests passing (`npm test`)
- [x] **CI/CD Pipeline Running**: GitHub Actions workflow running automated build & tests (`.github/workflows/ci.yml`)
- [x] **Public GitHub Repository**: [github.com/zangetsubankai2212221-tech/Private-Loan-Eligibility](https://github.com/zangetsubankai2212221-tech/Private-Loan-Eligibility)
- [x] **Browser Wallet Integration**: Directly connects to user's Midnight Lace Wallet via `window.midnight`
- [x] **Lace Wallet Connect / Disconnect Lifecycle**: Full session management with event prompts and error handling
- [x] **Multi-Page Architecture**: 7-page SPA with React Router, Framer Motion animations, and full dark mode

---

## Midnight Privacy Model: What an Observer Learns vs Cannot Learn

### What an Observer CANNOT Learn (Kept Strictly Private):
1. **Your Annual Income**: Financial earnings are processed purely inside in-browser ZK circuits and **never** transmitted to servers or stored on-chain.
2. **Your Credit Score**: Your raw credit rating score is encrypted locally in your browser and used only to build local proof witnesses.
3. **Personal Identity (PII)**: User identification parameters stay off-chain; the wallet provides pseudonymous verification only.
4. **Raw Proof Data**: Cryptographic inputs and execution traces are computed entirely in-browser using the local Docker proof server.

### What an Observer CAN Learn (Disclosed On-Chain Public State):
1. **Eligibility Result**: Binary verification output (`eligible` or `not eligible`).
2. **Cryptographic Proof of Verification**: The mathematical ZK proof confirming eligibility conditions were satisfied.
3. **Transaction Hash**: Public transaction record for verification and audit trailing.
4. **Wallet Pseudonymous Address**: Unshielded wallet address initiating the on-chain verifier call.

---

## Contract & Deployment Details

| Component | Details |
|---|---|
| **Live Web App** | [private-loan-eligibility.vercel.app](https://private-loan-eligibility.vercel.app/) |
| **GitHub Repo** | [Private-Loan-Eligibility](https://github.com/zangetsubankai2212221-tech/Private-Loan-Eligibility) |
| **Compact Contract** | [`contracts/loan_eligibility.compact`](contracts/loan_eligibility.compact) |
| **CI/CD Workflow** | [`.github/workflows/ci.yml`](.github/workflows/ci.yml) |
| **ZK Artifacts** | `public/keys/` (prover + verifier) and `public/zkir/` (ZK IR) |

---

## Architecture

```
private-loan-eligibility/
├── contracts/
│   └── loan_eligibility.compact   # Compact ZK circuit
├── public/
│   ├── keys/                      # Compiled prover & verifier keys
│   └── zkir/                      # ZK intermediate representation
├── src/
│   ├── components/
│   │   ├── ui/                    # Reusable UI (Button, Card, Navbar, etc.)
│   │   ├── LoanForm.tsx           # Income & credit score input form
│   │   ├── ProgressVisualizer.tsx # Proof generation progress steps
│   │   └── ResultDisplay.tsx      # Eligibility result cards
│   ├── hooks/
│   │   ├── useWallet.ts           # Wallet connection state machine
│   │   ├── useEnvironment.ts      # Environment config loader
│   │   └── useTheme.ts            # Dark mode toggle with localStorage
│   ├── layouts/
│   │   ├── MainLayout.tsx         # Marketing pages (with footer)
│   │   └── AppLayout.tsx          # App page (no footer)
│   ├── pages/
│   │   ├── Home.tsx               # Landing page
│   │   ├── LaunchApp.tsx          # Main application
│   │   ├── About.tsx              # About the project
│   │   ├── HowItWorks.tsx         # Step-by-step explanation
│   │   ├── FeaturesPage.tsx       # Feature deep-dive
│   │   ├── PrivacyPage.tsx        # Privacy principles & threat model
│   │   └── FAQPage.tsx            # Frequently asked questions
│   ├── sections/
│   │   ├── Hero.tsx               # Landing hero section
│   │   ├── Features.tsx           # Feature cards grid
│   │   ├── HowItWorks.tsx         # 5-step timeline
│   │   ├── Stats.tsx              # Key metrics
│   │   ├── Privacy.tsx            # Private vs on-chain comparison
│   │   ├── FAQ.tsx                # FAQ accordion
│   │   └── CTA.tsx                # Call-to-action banner
│   ├── utils/
│   │   ├── contract.ts            # Wallet connection & proof submission
│   │   ├── providers.ts           # Midnight SDK provider setup
│   │   └── environment.ts         # Env config with defaults
│   ├── types/
│   │   └── index.ts               # TypeScript type definitions
│   ├── App.tsx                    # Router + code splitting
│   ├── main.tsx                   # Entry point
│   └── index.css                  # Global styles + dark mode base
├── tests/
│   └── loan_eligibility.test.ts   # Unit tests
├── .github/workflows/ci.yml       # CI/CD pipeline
├── tailwind.config.js             # Design system tokens
├── vite.config.ts                 # Vite build config
└── package.json
```

---

## Compact Smart Contract

```compact
pragma language_version 0.23;

import CompactStandardLibrary;

export ledger applicant: Bytes<32>;
export ledger isEligible: Boolean;

witness localIncome(): Uint<64>;
witness localCreditScore(): Uint<64>;

constructor(_applicant: Bytes<32>) {
  applicant = disclose(_applicant);
  isEligible = false;
}

export circuit checkEligibility(): [] {
  const income = localIncome();
  const creditScore = localCreditScore();

  assert(income >= (50000 as Uint<64>),
    "Annual income is below the $50,000 minimum threshold");
  assert(creditScore >= (700 as Uint<64>),
    "Credit score is below the 700 minimum threshold");

  isEligible = disclose(true);
}
```

The circuit takes two private witnesses (income and credit score), asserts eligibility thresholds, and discloses only the boolean result on-chain. The raw financial data never leaves the prover's browser.

---

## Browser Wallet Connector

```typescript
// Connect to user's Midnight Lace Wallet via window.midnight
const wallets = Object.values(window.midnight);
for (const wallet of wallets) {
  if (wallet?.enable) {
    const api = await wallet.enable("preview");
    const address = await api.getUnshieldedAddress();
    // Pseudonymous identity — no PII exposed
  }
}
```

The wallet provides pseudonymous verification. Financial data is never stored in the wallet or linked to the wallet address.

---

## Getting Started

### Prerequisites

- Node.js v22+
- Docker (for local proof server on port 6300)
- Lace Wallet extension for Midnight Network

### Installation

```bash
git clone https://github.com/zangetsubankai2212221-tech/Private-Loan-Eligibility.git
cd Private-Loan-Eligibility
npm install
```

### Configuration

```bash
cp .env.example .env
```

Edit `.env` with your values:

```env
VITE_NETWORK=preview
VITE_CONTRACT_ADDRESS=<your-deployed-contract-address>
VITE_PROOF_SERVER_URL=http://localhost:6300
```

### Running Locally

```bash
# Start the Midnight proof server
docker run -d -p 6300:6000 midnightnetwork/proof-server:latest

# Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Compiling the Compact Contract

```bash
# Install Compact toolchain (in WSL or Linux)
curl --proto '=https' --tlsv1.2 -LsSf https://github.com/midnightntwrk/compact/releases/latest/download/compact-installer.sh | sh

# Compile the contract
compact compile contracts/loan_eligibility.compact ./build

# Copy artifacts
cp build/keys/* public/keys/
cp build/zkir/* public/zkir/
```

### Running Tests

```bash
npm test
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Blockchain** | Midnight Network |
| **ZK Language** | Compact (v0.31) |
| **Wallet** | Lace Wallet for Midnight |
| **Frontend** | React 19 + TypeScript + Vite |
| **Styling** | Tailwind CSS with custom design system |
| **Animations** | Framer Motion with reduced-motion support |
| **Routing** | React Router v6 with code splitting |
| **Proof Server** | Midnight Docker proof server (local) |
| **Deployment** | Vercel |
| **CI/CD** | GitHub Actions |

---

## Design System

- **Colors**: Primary purple (`#7C3AED`), indigo secondary, green/amber/red semantic
- **Typography**: Inter font, custom scale (hero to caption)
- **Spacing**: 8-point grid system
- **Dark mode**: Class-based with `useTheme` hook, localStorage persistence, `prefers-color-scheme` detection
- **Animations**: `FadeIn`, `Stagger`, `StaggerItem` with `prefers-reduced-motion` support
- **Max content width**: 1240px

---

## Platform Screenshots

### Landing Page
![Landing Page](https://github.com/zangetsubankai2212221-tech/Private-Loan-Eligibility/blob/8403cf7a0b79bc22906b1028392ee3e0f23d83f3/Screenshot%202026-07-27%20123824.png?raw=true)

### Main Application Dashboard
![Main Application Dashboard](https://github.com/zangetsubankai2212221-tech/Private-Loan-Eligibility/blob/8403cf7a0b79bc22906b1028392ee3e0f23d83f3/Screenshot%202026-07-27%20123812.png?raw=true)

### Eligibility FAQ
![Eligibility FAQ](https://github.com/zangetsubankai2212221-tech/Private-Loan-Eligibility/blob/8403cf7a0b79bc22906b1028392ee3e0f23d83f3/Screenshot%202026-07-27%20123848.png?raw=true)

---

## License

MIT
