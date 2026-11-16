// Lists optional items still worth adding. Informational only; never blocks a deploy.
// Usage: SITE_URL=https://karoofox.com npm run readiness
import { readinessGaps } from '../src/lib/readiness.ts';

const gaps = readinessGaps(undefined, undefined, process.env.SITE_URL ?? '');
if (!gaps.length) console.log('Nothing outstanding.');
for (const g of gaps) console.log(`• [${g.area}] ${g.item}\n    ${g.why}`);
