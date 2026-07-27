# Private Loan Eligibility Verifier

> A privacy-preserving zero-knowledge loan eligibility and credit score verification platform built on the Midnight Network using Compact smart contracts.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Vercel_Deployed-000000?style=flat-square&logo=vercel)](https://visitor-verification-platform.vercel.app/)
[![Demo Video](https://img.shields.io/badge/YouTube-Demo_Video-FF0000?style=flat-square&logo=youtube)](https://youtu.be/rCD3mMkdK7A)
[![CI/CD Pipeline](https://github.com/zangetsubankai2212221-tech/Private-Loan-Eligibility/actions/workflows/ci.yml/badge.svg)](https://github.com/zangetsubankai2212221-tech/Private-Loan-Eligibility/actions/workflows/ci.yml)
[![Midnight Preprod](https://img.shields.io/badge/Network-Midnight_Preprod-8b5cf6?style=flat-square)](https://explorer.preprod.midnight.network)
[![Compact Language](https://img.shields.io/badge/Compact-v0.5.1-06b6d4?style=flat-square)](https://midnight.network)
[![Node.js Version](https://img.shields.io/badge/Node.js-v22.23.1-10b981?style=flat-square)](https://nodejs.org)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

---

## 🚀 Live Demo, Video & Repository

- 🌐 **Live Web Application**: [visitor-verification-platform.vercel.app](https://visitor-verification-platform.vercel.app/)
- 📺 **YouTube Demo Video**: [youtu.be/rCD3mMkdK7A](https://youtu.be/rCD3mMkdK7A)
- 📦 **GitHub Repository**: [github.com/zangetsubankai2212221-tech/Private-Loan-Eligibility](https://github.com/zangetsubankai2212221-tech/Private-Loan-Eligibility)
- ⚙️ **CI/CD Workflow**: [.github/workflows/ci.yml](.github/workflows/ci.yml)

---

## 📋 Challenge Requirements & Passing Checklist

- [x] **Fully Functional Privacy dApp**: Meaningful use of Midnight's Zero-Knowledge privacy model for financial verification
- [x] **Live Demo Deployment**: [https://visitor-verification-platform.vercel.app/](https://visitor-verification-platform.vercel.app/)
- [x] **Demo Video (Lace Wallet + ZK Circuit Call)**: [https://youtu.be/rCD3mMkdK7A](https://youtu.be/rCD3mMkdK7A)
- [x] **Passing Test Suite**: 4/4 Vitest unit tests passing (`npm test`)
- [x] **CI/CD Pipeline Running**: GitHub Actions workflow running automated build & tests (`.github/workflows/ci.yml`)
- [x] **Public GitHub Repository**: [https://github.com/zangetsubankai2212221-tech/Private-Loan-Eligibility](https://github.com/zangetsubankai2212221-tech/Private-Loan-Eligibility)
- [x] **Deployed Smart Contract**: `0x187ab583926a5ff2e4819242a95edc8dfa8ff784`
- [x] **On-Chain Explorer Verification**: [Verify Contract on Midnight Preprod Explorer](https://explorer.preprod.midnight.network)
- [x] **Browser Wallet Integration**: Directly connects to user's Midnight Lace Wallet (`window.midnight.mnLace` / `window.midnight.lace`)
- [x] **Lace Wallet Connect / Disconnect Lifecycle**: Full session management with event prompts and error handling
- [x] **16+ Meaningful Commits**: Verified structured commit history in main branch

---

## 🛡️ Midnight Privacy Model: What an Observer Learns vs Cannot Learn

### ❌ What an Observer CANNOT Learn (Kept Strictly Private):
1. **Your Annual Income**: Financial earnings are processed purely inside in-browser ZK circuits and **never** transmitted to servers or stored on-chain.
2. **Your Credit Score**: Your raw credit rating score is encrypted locally in your browser and used only to build local proof witnesses.
3. **Personal Identity (PII)**: User identification parameters stay off-chain; the wallet provides pseudonymous verification only.
4. **Raw Proof Data**: Cryptographic inputs and execution traces are computed entirely in-browser using Midnight's Docker proof server client.

### ✅ What an Observer CAN Learn (Disclosed On-Chain Public State):
1. **Eligibility Result**: Binary verification output (`eligible` or `not eligible`).
2. **Cryptographic Proof of Verification**: The mathematical ZK proof confirming eligibility conditions were satisfied.
3. **Transaction Hash**: Public transaction record for verification and audit trailing.
4. **Wallet Pseudonymous Address**: Unshielded wallet address initiating the on-chain verifier call.

---

## 🛠️ Contract & Live Deployment Details

| Environment | Location / Address | Verification / Explorer Link |
|---|---|---|
| **Live Web App** | `https://visitor-verification-platform.vercel.app/` | [Open Live App](https://visitor-verification-platform.vercel.app/) |
| **Demo Video** | `https://youtu.be/rCD3mMkdK7A` | [Watch Video Demo](https://youtu.be/rCD3mMkdK7A) |
| **Preprod Smart Contract** | `0x187ab583926a5ff2e4819242a95edc8dfa8ff784` | [Verify Contract on Midnight Preprod Explorer](https://explorer.preprod.midnight.network) |
| **CI/CD Workflow** | `.github/workflows/ci.yml` | [View GitHub Actions Run](https://github.com/zangetsubankai2212221-tech/Private-Loan-Eligibility/actions) |

---

## 🔑 Browser Wallet Connector (`window.midnight.mnLace`)

```typescript
// Connect directly to user's browser Midnight Lace Wallet extension
public async connectWallet(): Promise<{ connected: boolean; walletAddress: string; walletName: string }> {
  const provider = this.getBrowserWalletProvider();
  if (!provider) {
    throw new Error("Midnight Lace Wallet extension not detected. Please install and enable the extension.");
  }
  const connectedApi = await provider.connect('preprod');
  const address = await connectedApi.getUnshieldedAddress();
  return { connected: true, walletAddress: address.unshieldedAddress, walletName: provider.name };
}
