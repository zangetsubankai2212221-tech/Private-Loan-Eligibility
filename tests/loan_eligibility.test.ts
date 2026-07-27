/**
 * Tests for the Loan Eligibility Compact circuit logic.
 *
 * These tests validate the three core invariants:
 *   1. An applicant with income >= 50,000 AND creditScore >= 700 is eligible.
 *   2. An applicant failing EITHER threshold is NOT eligible.
 *   3. The raw income and creditScore values are never disclosed on the public ledger.
 *
 * The tests simulate the ZK circuit's assertion behaviour without requiring
 * the full Compact runtime (which runs inside the proof server).
 */
import { describe, it, expect } from "vitest";

// ─── Circuit Simulation ─────────────────────────────────────────────
// Mirrors the Compact contract logic in pure TypeScript for unit testing.

interface CircuitInputs {
  income: number;
  creditScore: number;
}

interface CircuitResult {
  isEligible: boolean;
  error: string | null;
  disclosedFields: string[];
}

function runCircuit(inputs: CircuitInputs): CircuitResult {
  // The Compact circuit asserts these two conditions.
  if (inputs.income < 50_000) {
    return {
      isEligible: false,
      error: "Assertion failed: Annual income is below the $50,000 minimum threshold",
      disclosedFields: [],
    };
  }

  if (inputs.creditScore < 700) {
    return {
      isEligible: false,
      error: "Assertion failed: Credit score is below the 700 minimum threshold",
      disclosedFields: [],
    };
  }

  // Only `isEligible` is disclosed — income and creditScore are private.
  return {
    isEligible: true,
    error: null,
    disclosedFields: ["isEligible"],
  };
}

// ─── Tests ──────────────────────────────────────────────────────────

describe("Loan Eligibility Circuit", () => {
  it("should mark applicant as eligible when both thresholds are met", () => {
    const result = runCircuit({ income: 75_000, creditScore: 720 });

    expect(result.isEligible).toBe(true);
    expect(result.error).toBeNull();
  });

  it("should deny eligibility when income is below $50,000", () => {
    const result = runCircuit({ income: 45_000, creditScore: 750 });

    expect(result.isEligible).toBe(false);
    expect(result.error).toContain("income");
    expect(result.error).toContain("$50,000");
  });

  it("should deny eligibility when credit score is below 700", () => {
    const result = runCircuit({ income: 60_000, creditScore: 680 });

    expect(result.isEligible).toBe(false);
    expect(result.error).toContain("Credit score");
    expect(result.error).toContain("700");
  });

  it("should deny eligibility when both thresholds fail", () => {
    const result = runCircuit({ income: 30_000, creditScore: 600 });

    expect(result.isEligible).toBe(false);
    expect(result.error).toBeTruthy();
  });

  it("should accept exact boundary values as eligible", () => {
    const result = runCircuit({ income: 50_000, creditScore: 700 });

    expect(result.isEligible).toBe(true);
    expect(result.error).toBeNull();
  });

  it("should never disclose income or creditScore on the public ledger", () => {
    const result = runCircuit({ income: 120_000, creditScore: 810 });

    expect(result.disclosedFields).not.toContain("income");
    expect(result.disclosedFields).not.toContain("creditScore");
    expect(result.disclosedFields).not.toContain("income" as never);
    expect(result.disclosedFields).not.toContain("creditScore" as never);
    expect(result.disclosedFields).toContain("isEligible");
  });

  it("should have exactly one disclosed field (isEligible) on success", () => {
    const result = runCircuit({ income: 200_000, creditScore: 850 });

    expect(result.disclosedFields).toEqual(["isEligible"]);
    expect(result.disclosedFields.length).toBe(1);
  });
});
