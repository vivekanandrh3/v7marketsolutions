# V7 Market Solutions owner's handbook

## Review the preview

Start on the homepage on a phone and laptop. Follow the learning ladder into an article. On Premium Training, compare the four outlines and open a WhatsApp draft. Sending the message is a separate action. The consultation is for choosing lessons. The calculator models a hypothetical constant monthly return.

## Course fees and enquiries

The single source of regular rupee fees is `src/lib/course-prices.json`. The approved values are 5999 for foundations, 11999 for patterns, 19999 for derivatives and 29999 for global markets. The course-specific messages remain in the training page. Both course and floating contact links use the original destination. There is no online checkout.

## Schedule an approved campaign

`src/lib/promotions.json` holds proposals. Both the master switch and each individual campaign start disabled. Only after commercial approval, edit the intended campaign on a development branch. Enter inclusive start and end dates in YYYY-MM-DD format and set its switch and the master switch to true. Review a fresh preview before authorizing publication. Disable the master switch to suspend all campaigns on the next approved deployment.

FIRST20 proposes 20% for a first-time learner. REFER20 proposes 20% for a referred learner. A referral percentage from 20 through 30 may be configured after approval. Use unique codes. If both apply, the learner selects one. The fee is rounded to paise. The regular fee remains visible and the draft requests confirmation. Eligibility is confirmed manually before payment. Invalid, reversed, future or expired schedules produce no offer. With no active campaigns the original messages are used verbatim.

## Seasonal accents

The India calendar controls winter (December to February), summer (March to May), monsoon (June to September) and autumn (October and November). The page refreshes its date at India midnight and on tab visibility changes. Accent colours live in `src/app/globals.css`.

## Content and contact

Articles and exercises are in `src/lib/data.ts`. Figures and sources are in `src/lib/lesson-charts.json`. A chart must label its unit and distinguish invented numbers from observed data. Ladder stages and completion tasks are in the learning-modules page.

Contact enquiries use the existing Formspree form. Test with an intercepted provider response to avoid contacting the owner. A provider acceptance is distinct from delivery to an inbox. Confirm retention, provider spam settings and mailbox routing in the owner's Formspree account. The public form discloses its provider and requested fields. No learner needs to send holdings or identity documents.

## Editorial review before launch

The older About page implied disciplined execution would produce profits. The older consultation invited portfolio review, and a course listed high-potential stock selection. The preview describes learning goals, chart reasoning and fictional exercises instead. Review how real consultations are delivered as well as the public wording. SEBI describes personalized financial guidance and portfolio advice in its [investment adviser overview](https://investor.sebi.gov.in/investment_advisor.html). No registration, legal certification, eligibility to trade internationally or investment outcome is represented by these changes.

## Recovery and approval

The original production commit is `e9272940e98e3783f897847a4b58e724c53143ce`. The recovery reference is `backup/production-2026-11-19-e927294` and the original Vercel deployment is `dpl_5xAD7L5MDjVyvxco7qVDjjaf5FHr`. The preview branch is `dev/academy-refresh`.

A source ZIP restores tracked files. Git history remains in the repository. To rehearse recovery, clone the repository and create a fresh recovery branch from the exact commit. To recover after an approved launch, first obtain owner approval, restore the original verified Vercel deployment, then reconcile main through a reviewed revert commit. Verify the custom-domain deployment, fees and enquiry links. Never rewrite branch history. Environment variables and Formspree account settings are managed independently.
