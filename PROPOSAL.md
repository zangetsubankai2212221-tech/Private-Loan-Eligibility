# Private Loan Eligibility Verifier — Product Proposal

## Problem Statement

Traditional loan eligibility verification suffers from a fundamental privacy flaw: applicants must disclose their full financial profile (income, credit score, employment history, debt obligations) to lenders just to determine if they qualify. This creates several critical issues:

- **Data Breach Risk**: Sensitive financial data is stored on centralized servers, making it a prime target for attackers.
- **Surveillance**: Lenders and intermediaries can see far more information than needed, creating a permanent shadow record of an applicant's finances.
- **Gatekeeping**: The cost of verifying financial data excludes underbanked populations who lack conventional credit histories.
- **Opaque Decisioning**: Applicants cannot verify that eligibility criteria were applied correctly without exposing their private data.

## Solution

**Private Loan Eligibility Verifier** is a privacy-preserving application built on the [Midnight Network](https://midnight.network) that uses zero-knowledge proofs (ZKPs) to verify financial eligibility without revealing the underlying data.

Instead of sending raw income and credit score values to a lender, the applicant's browser generates a Compact zero-knowledge proof locally. The proof cryptographically demonstrates that the applicant meets the required thresholds — but the actual values remain private, known only to the applicant.

## How It Uses Midnight's Privacy Model

| Component | Midnight Privacy Feature |
|---|---|
| **Income & Credit Score** | Private witnesses passed to the Compact circuit; never stored on-chain |
| **Eligibility Result** | Public ledger state — only a boolean `isEligible` is disclosed |
| **Applicant Identity** | Pseudonymous wallet address; no PII linked to the transaction |
| **Proof Generation** | Runs locally via the Midnight proof server; raw data never leaves the browser |
| **Smart Contract** | Compact circuit with explicit `disclose()` — privacy is the default |

### Compact Circuit Design

The contract defines two private witnesses (`localIncome`, `localCreditScore`) and one public ledger field (`isEligible`). The constructor takes an applicant identifier, and the main circuit (`checkEligibility`) asserts two thresholds:

```
income >= $50,000
creditScore >= 700
```

If both pass, `isEligible = disclose(true)` is written to the ledger. If either fails, no state change occurs and no private data is revealed. The Compact compiler enforces that any witness-derived value crossing into the public domain must be wrapped in `disclose()`, making accidental data leaks structurally impossible.

## Core Features

### 1. Wallet-Based Pseudonymous Identity
Users connect their Lace wallet for Midnight Network. The wallet provides a pseudonymous address — no email, name, or personal identifier is required or stored.

### 2. Local ZK Proof Generation
Financial data is entered into a browser form and processed entirely client-side. The Midnight proof server (running locally via Docker) generates the Compact zero-knowledge proof without transmitting raw values over the network.

### 3. Minimal On-Chain Footprint
Only the binary eligibility result and a transaction hash are recorded on the Midnight ledger. The contract's public state is intentionally minimal — two fields: `applicant` (address) and `isEligible` (boolean).

### 4. Transparent Verification
Anyone can audit the published Compact circuit logic. The eligibility criteria are hardcoded in the smart contract and visible on-chain. Users can independently verify that the criteria are applied correctly without trusting a third party.

### 5. Multi-Page Web Application
A full-featured React 19 + TypeScript frontend with:
- Landing page with feature overview and live demo
- Step-by-step "How It Works" guide with 5-step timeline
- Privacy page with threat model and data comparison table
- FAQ page with 10 questions
- Dashboard-style application page for the actual proof workflow
- Full dark mode with persistent theme preference

## Target Audience

- **Individuals** seeking loans without exposing their full financial history
- **Privacy-conscious consumers** who want to verify their eligibility for financial products without triggering hard credit checks
- **Lenders** who need to pre-qualify applicants without building centralized data stores
- **Midnight Network developers** looking for a reference implementation of Compact circuits with private witnesses and local proof generation

## Technical Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Browser (React App)                    │
│  ┌──────────┐  ┌────────────┐  ┌─────────────────────┐  │
│  │  Wallet   │  │   Form     │  │   Result Display    │  │
│  │  Connect  │  │  (Income / │  │  (Eligible / Denied)│  │
│  │           │  │  Credit)   │  │                     │  │
│  └────┬─────┘  └─────┬──────┘  └──────────┬──────────┘  │
│       │              │                     │             │
│       ▼              ▼                     ▼             │
│  ┌──────────────────────────────────────────────────┐    │
│  │           Midnight JS SDK Layer                   │    │
│  │  initializeProviders() → httpClientProofProvider  │    │
│  │                     FetchZkConfigProvider          │    │
│  └──────────────────────┬───────────────────────────┘    │
│                         │                                 │
└─────────────────────────┼─────────────────────────────────┘
                          │
                          ▼
            ┌──────────────────────────┐
            │   Docker: Proof Server   │
            │   localhost:6300         │
            │   /check + /prove        │
            └──────────────────────────┘
                          │
                          ▼
            ┌──────────────────────────┐
            │   Midnight Network       │
            │   (Preview / Preprod)    │
            │   On-Chain: isEligible   │
            └──────────────────────────┘
```

## Why This Matters

Financial privacy is a human right. No one should have to surrender their entire financial history to determine whether they qualify for a loan. By leveraging Midnight's zero-knowledge architecture, this application demonstrates a concrete alternative: **verification without exposure**. The technology exists today — what was missing was a clean, usable reference implementation. This project fills that gap.

## Repository

- **Source Code**: [github.com/zangetsubankai2212221-tech/Private-Loan-Eligibility](https://github.com/zangetsubankai2212221-tech/Private-Loan-Eligibility)
- **Live Demo**: [private-loan-eligibility.vercel.app](https://private-loan-eligibility.vercel.app/)
- **Demo Video**: [youtu.be/s9g4fJDbogQ](https://youtu.be/s9g4fJDbogQ)
