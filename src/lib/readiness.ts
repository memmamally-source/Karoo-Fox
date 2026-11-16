import { company, type Company } from '../config/company.ts';
import { apps, type App } from '../data/apps.ts';

export interface Gap {
  area: string;
  item: string;
  why: string;
}

/** Optional items still worth adding. Nothing here blocks publishing. Pure: pass data in to test it. */
export function readinessGaps(c: Company = company, list: App[] = apps, siteUrl = ''): Gap[] {
  const gaps: Gap[] = [];
  if (!siteUrl || /localhost|127\.0\.0\.1|\.invalid|github\.io/.test(siteUrl)) {
    gaps.push({ area: 'Domain', item: 'Custom domain (karoofox.com) connected in Settings → Pages', why: 'Apple expects the company website on its own domain.' });
  }
  if (!c.emails.general) gaps.push({ area: 'Email', item: 'General email on the domain (emails.general)', why: 'Shown on the Contact page once set.' });
  if (!c.emails.support) gaps.push({ area: 'Email', item: 'Support email on the domain (emails.support)', why: 'Shown in the Support Centre once set.' });
  if (!c.emails.privacy) gaps.push({ area: 'Email', item: 'Privacy email on the domain (emails.privacy)', why: 'Privacy pages fall back to each app’s support email until set.' });
  for (const app of list) {
    for (const r of app.releases) {
      if (r.status === 'available' && !r.url) gaps.push({ area: app.name, item: `${r.platform === 'ios' ? 'App Store' : 'Google Play'} listing URL`, why: 'Shown as available without a link until added to apps.ts.' });
      if (r.status === 'unconfirmed') gaps.push({ area: app.name, item: `${r.platform} release status`, why: 'Hidden from the site until confirmed in apps.ts.' });
    }
  }
  return gaps;
}
