# Karoo Fox website — standing instructions

These are the owner's instructions. They override older notes, including `docs/CLAUDE_MASTER_PROMPT.md`.

1. **No company or legal details on the website** (owner, 16 Nov 2026). Show no registration or CIPC number, no address, no "(Pty) Ltd" or "registered in South Africa" wording, and never mention EM Medical Group. Don't add "preview", "to be supplied" or "not yet confirmed" banners or placeholders: if something isn't available, leave it off. The site presents the Karoo Fox brand only, with "© Karoo Fox" in the footer.
2. **The album app ("In Pictures") is not on the website.** Don't add it back, or mention it, unless the owner asks. `scripts/verify-build.mjs` fails the build if either rule is broken.
3. **The logo is the approved artwork.** Every logo image is generated from `brand/source/Karoo_Fox_Logo_High_Resolution_6144x4096.png` by `npm run brand`: blank canvas trimmed, then resized, never redrawn. The homepage shows the complete logo (fox and wordmark). Logo images sit on white backgrounds only. The SVG in `brand/vector-candidate/` is not approved.
4. **App Store:** Crossword Hub (id6825187540), Oursome (id6826843084) and Research Tracker (id6826669553) are on the App Store. Never invent store links.
5. **Never invent details.** Only real mailboxes go in `src/config/company.ts` (support@karoofox.com exists); others stay `null` and aren't shown. If the CIPC number is ever needed (for Apple or D-U-N-S), the owner provides it privately; it never goes on the site.
6. Run `npm run check` before every commit.
