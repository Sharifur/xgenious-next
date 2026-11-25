import assert from 'node:assert/strict';
import test from 'node:test';
import { DEFAULT_REVENUE_INPUTS, projectEcommerceSaas } from './ecommerce-saas-revenue.ts';

test('default plan mix matches the spec sanity check', () => {
  const result = projectEcommerceSaas(DEFAULT_REVENUE_INPUTS);
  assert.ok(Math.abs(result.arpaList - 18.5) < 1e-9);
  assert.ok(Math.abs(result.arpa - 17.945) < 1e-9);
  assert.equal(result.sharesNormalized, false);

  const m1 = result.rows[0];
  assert.equal(m1.stores, 15);
  assert.ok(Math.abs(m1.mrr - 299.175) < 1e-6);
  assert.ok(Math.abs(m1.costs - 136.47525) < 1e-6);
  assert.ok(Math.abs(m1.profit - 162.69975) < 1e-6);
  // Month-1 profit already covers the $99 licence.
  assert.equal(result.breakEven, 1);
});

test('illustrative blended prices', () => {
  const budget = projectEcommerceSaas({ ...DEFAULT_REVENUE_INPUTS, s1: 70, s2: 25, s3: 5 });
  const premium = projectEcommerceSaas({ ...DEFAULT_REVENUE_INPUTS, s1: 30, s2: 40, s3: 30 });
  assert.ok(Math.abs(budget.arpaList - 13.5) < 1e-9);
  assert.ok(Math.abs(premium.arpaList - 25) < 1e-9);
});

test('shares that do not sum to 100% are normalised', () => {
  const result = projectEcommerceSaas({ ...DEFAULT_REVENUE_INPUTS, s1: 50, s2: 50, s3: 50 });
  assert.equal(result.sharesNormalized, true);
  assert.equal(result.shareSum, 150);
  // 50/150 of each price: (9+19+49)/3
  assert.ok(Math.abs(result.arpaList - (9 + 19 + 49) / 3) < 1e-9);
});

test('zero churn reports infinite LTV and steady state', () => {
  const result = projectEcommerceSaas({ ...DEFAULT_REVENUE_INPUTS, churn: 0 });
  assert.equal(result.ltv, null);
  assert.equal(result.steadyState, null);
  assert.ok(result.rows[23].stores > result.rows[0].stores);
});

test('steady state at a flat 20 new stores and 5% churn is 400', () => {
  const result = projectEcommerceSaas({ ...DEFAULT_REVENUE_INPUTS, newStores: 20, newGrowth: 0, churn: 5 });
  assert.ok(result.steadyState !== null && Math.abs(result.steadyState - 400) < 1e-9);
});
