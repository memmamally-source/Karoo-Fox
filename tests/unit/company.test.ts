import { test } from 'node:test';
import assert from 'node:assert/strict';
import { company } from '../../src/config/company.ts';
import { readinessGaps } from '../../src/lib/readiness.ts';

test('the site config holds no company registration details', () => {
  const keys = Object.keys(company);
  for (const k of ['registrationNumber', 'address', 'currentLegalName', 'futureLegalName']) assert.ok(!keys.includes(k), k);
});

test('readiness only lists optional items and flags a missing custom domain', () => {
  const gaps = readinessGaps(company, [], 'https://memmamally-source.github.io');
  assert.ok(gaps.some((g) => g.area === 'Domain'));
  const done = { ...company, emails: { general: 'a@x.com', support: 'b@x.com', privacy: 'c@x.com' } };
  assert.deepEqual(readinessGaps(done, [], 'https://karoofox.com'), []);
});
