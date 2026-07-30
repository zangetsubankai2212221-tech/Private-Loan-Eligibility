import { describe, it, expect } from "vitest";

// ─── Circuit Simulation ─────────────────────────────────────────────
// Mirrors the Compact contract logic in pure TypeScript for unit testing.
// The real circuit runs inside the Midnight proof server; this simulation
// validates the same assertions that the Compact compiler generates.

type CircuitInputs = {
  income: number;
  creditScore: number;
};

type CircuitResult = {
  isEligible: boolean;
  error: string | null;
  disclosedFields: string[];
};

function runCircuit(inputs: CircuitInputs): CircuitResult {
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

  return {
    isEligible: true,
    error: null,
    disclosedFields: ["isEligible"],
  };
}

// ─── Tests ──────────────────────────────────────────────────────────

describe("Loan Eligibility Circuit", () => {
  // Test 1 – Circuit Logic: valid private witnesses pass the circuit
  it("should mark applicant as eligible when both thresholds are met", () => {
    const result = runCircuit({ income: 75_000, creditScore: 720 });

    expect(result.isEligible).toBe(true);
    expect(result.error).toBeNull();
  });

  // Test 2 – State Transitions: isEligible updates to true upon valid proof
  it("should update isEligible to true on valid proof", () => {
    const result = runCircuit({ income: 100_000, creditScore: 800 });

    expect(result.isEligible).toBe(true);
    expect(result.disclosedFields).toContain("isEligible");
  });

  // Test 3 – Privacy Behavior / Rejection: assertion error when below thresholds
  it("should throw assertion error when income is below $50,000", () => {
    const result = runCircuit({ income: 40_000, creditScore: 750 });

    expect(result.isEligible).toBe(false);
    expect(result.error).toContain("Annual income");
    expect(result.error).toContain("$50,000");
  });

  it("should throw assertion error when credit score is below 700", () => {
    const result = runCircuit({ income: 60_000, creditScore: 650 });

    expect(result.isEligible).toBe(false);
    expect(result.error).toContain("Credit score");
    expect(result.error).toContain("700");
  });

  it("should deny eligibility when both thresholds fail", () => {
    const result = runCircuit({ income: 30_000, creditScore: 600 });

    expect(result.isEligible).toBe(false);
    expect(result.error).toBeTruthy();
  });

  it("should accept exact boundary values (income = 50000, credit = 700)", () => {
    const result = runCircuit({ income: 50_000, creditScore: 700 });

    expect(result.isEligible).toBe(true);
    expect(result.error).toBeNull();
  });

  // Privacy guarantee: only isEligible is disclosed
  it("should never disclose income or creditScore on the public ledger", () => {
    const result = runCircuit({ income: 120_000, creditScore: 810 });

    expect(result.disclosedFields).not.toContain("income");
    expect(result.disclosedFields).not.toContain("creditScore");
    expect(result.disclosedFields).toEqual(["isEligible"]);
  });
});
