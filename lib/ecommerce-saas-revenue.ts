/** 24-month ecommerce SaaS projection. Shares, growth, churn and fees are percents. */

export type RevenueInputs = {
  startStores: number;
  newStores: number;
  newGrowth: number;
  p1: number;
  s1: number;
  p2: number;
  s2: number;
  p3: number;
  s3: number;
  annualShare: number;
  annualDiscount: number;
  churn: number;
  setupFee: number;
  setupShare: number;
  addon: number;
  billingFee: number;
  fixedCost: number;
  varCost: number;
  licence: number;
};

export type MonthRow = {
  month: number;
  stores: number;
  newStores: number;
  churned: number;
  mrr: number;
  revenue: number;
  costs: number;
  profit: number;
  cumProfit: number;
};

export type RevenueProjection = {
  arpaList: number;
  arpa: number;
  /** True when plan shares were scaled so they sum to 100%. */
  sharesNormalized: boolean;
  shareSum: number;
  rows: MonthRow[];
  /** First month (1–24) where cumulative profit covers the licence, or null. */
  breakEven: number | null;
  /** Stores where month-24 acquisition equals churn. Null when churn is 0. */
  steadyState: number | null;
  /** Margin per store before it cancels. Null when churn is 0. */
  ltv: number | null;
};

export const DEFAULT_REVENUE_INPUTS: RevenueInputs = {
  startStores: 0,
  newStores: 15,
  newGrowth: 5,
  p1: 9,
  s1: 50,
  p2: 19,
  s2: 35,
  p3: 49,
  s3: 15,
  annualShare: 20,
  annualDiscount: 15,
  churn: 5,
  setupFee: 0,
  setupShare: 30,
  addon: 2,
  billingFee: 3,
  fixedCost: 120,
  varCost: 0.5,
  licence: 99,
};

export function projectEcommerceSaas(input: RevenueInputs): RevenueProjection {
  const shareSum = input.s1 + input.s2 + input.s3;
  const sharesNormalized = shareSum > 0 && Math.abs(shareSum - 100) > 0.001;
  const f1 = shareSum > 0 ? input.s1 / shareSum : 0;
  const f2 = shareSum > 0 ? input.s2 / shareSum : 0;
  const f3 = shareSum > 0 ? input.s3 / shareSum : 0;

  const arpaList = input.p1 * f1 + input.p2 * f2 + input.p3 * f3;
  const arpa = arpaList * (1 - (input.annualShare / 100) * (input.annualDiscount / 100));
  const churnRate = input.churn / 100;
  const growth = input.newGrowth / 100;
  const setupShare = input.setupShare / 100;
  const billingFee = input.billingFee / 100;

  let stores = input.startStores;
  let profitSum = 0;
  const rows: MonthRow[] = [];
  let breakEven: number | null = null;

  for (let m = 1; m <= 24; m++) {
    const newM = input.newStores * Math.pow(1 + growth, m - 1);
    const churned = stores * churnRate;
    stores = Math.max(0, stores + newM - churned);
    const mrr = stores * (arpa + input.addon);
    const setup = newM * setupShare * input.setupFee;
    const revenue = mrr + setup;
    const costs = input.fixedCost + stores * input.varCost + revenue * billingFee;
    const profit = revenue - costs;
    profitSum += profit;
    const cumProfit = profitSum - input.licence;
    if (breakEven === null && cumProfit >= 0) breakEven = m;
    rows.push({
      month: m,
      stores,
      newStores: newM,
      churned,
      mrr,
      revenue,
      costs,
      profit,
      cumProfit,
    });
  }

  const month24New = rows[23]?.newStores ?? 0;
  const steadyState = churnRate > 0 ? month24New / churnRate : null;
  const ltv = churnRate > 0 ? ((arpa + input.addon) * (1 - billingFee)) / churnRate : null;

  return { arpaList, arpa, sharesNormalized, shareSum, rows, breakEven, steadyState, ltv };
}
