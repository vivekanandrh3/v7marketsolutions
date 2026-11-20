# Academy preview acceptance · 19 November 2026

## Recovery and changes

The original deployment and backup are rooted at `e9272940e98e3783f897847a4b58e724c53143ce`. The first preview was `80deb72ac626b8215ffe7138fa2ad797d88ce0c5`. The recovered working tree matched Git tree `a4e3798bb312978c645cdbe0de1c8bd799ca7e50` byte for byte and was committed as `2a88ad4966eaeb7f6eebc731a44f631b089b8d23`. A separate ZIP of that tree passed archive integrity testing. SHA-256: `352551662028584081d80835d0f1c7b2002c6219ee56d176ad8b85d4e9f1f3ec`.

The saved browser evidence contained 74 unsuccessful checks. The resumed browser used the standard Playwright Chromium binary and installed Linux fonts. The first new run passed 67 checks. Two navigation assertions ran before client routing completed. Waiting for the destination URL fixed those tests. The article figures had invalid definition-list nesting, and mobile users could not keyboard-focus the calculator's scrolling results table. The final patch corrects both accessibility issues and repairs the production dependency lock.

## Final acceptance evidence

| Check | Outcome |
| --- | --- |
| Fresh npm ci, standalone TypeScript check, Next.js production build | Passed. The build enforces type checking and generated 30 static pages. Lint was skipped by the existing project build configuration. |
| Chromium at 390 × 880 and 1440 × 880 | 74/74 checks passed on the built app, with no uncaught page errors. |
| Path coverage | Per viewport, 26 route checks covered all sixteen articles, public sections, disclaimer and the checkout redirect. Each had a visible H1, the expected floating contact link, and no document-level horizontal overflow. |
| Interaction | Menu navigation, homepage image decoding, four original enquiry texts, original prices, consultation destination, ladder navigation and calculator currency/return examples passed. |
| Contact | Fictional data only. Browser interception tested native validation, the honeypot, rejection with field preservation, retry and accepted response. No test enquiry was sent. |
| Accessibility | axe-core checks for WCAG 2 A/AA and 2.1 AA passed on six representative pages at each width. This is a sample, not a full accessibility certification. |
| Promotions | 29 logic assertions passed, including India midnight, inclusive dates, invalid dates, on/off controls, percentage limits and eight fee calculations. 19 browser assertions passed with a disposable active-campaign fixture, including non-stacking, expiry, the WhatsApp eligibility request and all twelve seasonal month assignments. Shipped configuration remains disabled. |
| Dependencies | npm audit --omit=dev reported zero advisories. The audit including development tooling reported 64 moderate and 23 high, no critical. This count is specific to the tested lock and advisory database. |
| Unverified external behaviour | Inbox delivery, Formspree account-side spam controls and retention, native WhatsApp app delivery, iOS Safari and Android hardware. No actual payment or eligibility verification occurs on this site. |

The browser matrix, runtime dependency audit and build output are alongside this report. The [owner handbook](../academy-owner.md) includes the regular-price file, promotion switches and rollback procedure.
