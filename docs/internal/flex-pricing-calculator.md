# Buzprout Flex — Internal Pricing Calculator

Use this sheet to quote cash, Flex, and Build + Care side by side. Formulas reference [`src/lib/flexCalculator.ts`](../src/lib/flexCalculator.ts).

## Flex formula

| Step | Formula |
|------|---------|
| Deposit | `cash_price × deposit_percent` |
| Financed portion | `cash_price − deposit` |
| Plan fee | `financed × fee_rate` (6mo 10%, 12mo 15%, 18mo 20%) |
| Monthly | `(financed + plan_fee) ÷ months` |
| Total collected | `deposit + (monthly × months)` |

## Scenario table (copy to spreadsheet)

| Scenario | Cash JMD | Deposit % | Term | Fee % | Deposit JMD | Monthly JMD | Total JMD | Premium % |
|----------|----------|-----------|------|-------|-------------|-------------|-----------|-----------|
| Starter site | 120000 | 40 | 6 | 10 | 48000 | 13200 | 127200 | 6.0 |
| Growth site | 400000 | 40 | 12 | 15 | 160000 | 23000 | 436000 | 9.0 |
| Tourism site | 550000 | 40 | 12 | 15 | 220000 | 31625 | 599500 | 9.0 |
| Logistics lite | 1000000 | 40 | 12 | 15 | 400000 | 57500 | 1090000 | 9.0 |
| Custom platform | 1200000 | 50 | 18 | 20 | 600000 | 46667 | 1440000 | 20.0 |
| MVP build | 1500000 | 50 | 18 | 20 | 750000 | 58333 | 1800000 | 20.0 |

## Build + Care (entry tier)

| Cash JMD | Deposit 25% | Months | Monthly JMD | Total JMD | Premium % |
|----------|---------------|--------|-------------|-----------|-----------|
| 120000 | 30000 | 18 | 7500 | 165000 | 37.5 |

## Margin checklist (before signing)

- [ ] Deposit covers hosting, domain, licenses, and 30–40% of estimated labor
- [ ] Total contract value exceeds cash price
- [ ] Scope fixed in writing; change requests billed separately
- [ ] Hosting stays on Buzprout accounts during term
- [ ] Client passed eligibility scorecard (see `src/data/flex.ts`)

## CSV export

See [`flex-pricing-calculator.csv`](./flex-pricing-calculator.csv) for import into Excel or Google Sheets.
