/**
 * Public contact details for the website. The owner's instruction: the site
 * shows no company or legal details (no registration number, address or
 * legal-entity wording), just the Karoo Fox brand.
 *
 * Emails stay `null` until real, monitored mailboxes on the company domain
 * exist; a `null` email is simply not shown.
 */
export interface Company {
  brand: string;
  country: string;
  emails: { general: string | null; support: string | null; privacy: string | null };
  founder: { name: string; show: boolean };
  since: number;
}

export const company: Company = {
  brand: 'Karoo Fox',
  country: 'South Africa',
  emails: {
    general: null,
    support: null,
    privacy: null,
  },
  /** Founder shown on the About page only if `show` is true (owner's choice). */
  founder: { name: 'Muhammad Emmamally', show: false },
  /** Year the Karoo Fox brand was established (copyright line). */
  since: 2026,
};
