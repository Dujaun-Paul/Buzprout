import type { FlexTermMonths } from "../data/flex";

const FEE_BY_TERM: Record<FlexTermMonths, number> = {
  6: 0.1,
  12: 0.15,
  18: 0.2,
};

export type FlexQuote = {
  cashPriceJmd: number;
  depositPercent: number;
  termMonths: FlexTermMonths;
  depositJmd: number;
  financedPortionJmd: number;
  financeFeePercent: number;
  financeFeeJmd: number;
  totalFinancedJmd: number;
  monthlyPaymentJmd: number;
  totalCollectedJmd: number;
  premiumJmd: number;
  premiumPercent: number;
};

export type BuildPlusCareQuote = {
  cashPriceJmd: number;
  depositPercent: number;
  termMonths: number;
  depositJmd: number;
  monthlyPaymentJmd: number;
  totalCollectedJmd: number;
  premiumJmd: number;
  premiumPercent: number;
};

export function calculateFlexQuote(input: {
  cashPriceJmd: number;
  depositPercent: number;
  termMonths: FlexTermMonths;
}): FlexQuote {
  const { cashPriceJmd, depositPercent, termMonths } = input;
  const depositJmd = Math.round(cashPriceJmd * (depositPercent / 100));
  const financedPortionJmd = cashPriceJmd - depositJmd;
  const financeFeePercent = FEE_BY_TERM[termMonths] * 100;
  const financeFeeJmd = Math.round(financedPortionJmd * FEE_BY_TERM[termMonths]);
  const totalFinancedJmd = financedPortionJmd + financeFeeJmd;
  const monthlyPaymentJmd = Math.round(totalFinancedJmd / termMonths);
  const totalCollectedJmd = depositJmd + monthlyPaymentJmd * termMonths;
  const premiumJmd = totalCollectedJmd - cashPriceJmd;
  const premiumPercent = Math.round((premiumJmd / cashPriceJmd) * 1000) / 10;

  return {
    cashPriceJmd,
    depositPercent,
    termMonths,
    depositJmd,
    financedPortionJmd,
    financeFeePercent,
    financeFeeJmd,
    totalFinancedJmd,
    monthlyPaymentJmd,
    totalCollectedJmd,
    premiumJmd,
    premiumPercent,
  };
}

export function calculateBuildPlusCareQuote(input: {
  cashPriceJmd: number;
  depositPercent: number;
  termMonths: number;
  totalCollectedJmd?: number;
}): BuildPlusCareQuote {
  const { cashPriceJmd, depositPercent, termMonths } = input;
  const depositJmd = Math.round(cashPriceJmd * (depositPercent / 100));
  const totalCollectedJmd =
    input.totalCollectedJmd ??
    Math.round(cashPriceJmd * (1 + (termMonths <= 18 ? 0.375 : 0.45)));
  const remaining = totalCollectedJmd - depositJmd;
  const monthlyPaymentJmd = Math.round(remaining / termMonths);
  const premiumJmd = totalCollectedJmd - cashPriceJmd;
  const premiumPercent = Math.round((premiumJmd / cashPriceJmd) * 1000) / 10;

  return {
    cashPriceJmd,
    depositPercent,
    termMonths,
    depositJmd,
    monthlyPaymentJmd,
    totalCollectedJmd,
    premiumJmd,
    premiumPercent,
  };
}

export function formatJmd(amount: number): string {
  return `JMD $${amount.toLocaleString("en-JM")}`;
}
