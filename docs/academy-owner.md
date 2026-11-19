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

The original production commit is `e9272940e98e3783f897847a4b58e724c53143ce`. The recovery reference is `backup/production-2026-11-19-e927294` and the original Vercel deployment is `dpl_5xAD7L5MDjVyvxco7qVDjjaf5FHr`. The preview branch is `dev/consultation-led-academy`.

A source ZIP restores tracked files. Git history remains in the repository. To rehearse recovery, clone the repository and create a fresh recovery branch from the exact commit. To recover after an approved launch, first obtain owner approval, restore the original verified Vercel deployment, then reconcile main through a reviewed revert commit. Verify the custom-domain deployment, fees and enquiry links. Never rewrite branch history. Environment variables and Formspree account settings are managed independently.

## Operating the consultation-led edition

While unattended, the site serves public lessons, the four-stage ladder and fixed course fees. The masterclass button opens an enquiry. No booking, discount verification or charge occurs on the website. Each course draft uses its established message. The general consultation draft is separate. The owner replies personally and agrees the subject, sequence, fee and practical arrangements before enrolment.

Use `src/lib/pathways.ts` for pathway titles, fit, examples and enquiry context. The related figures, sources and original publication dates belong with the article data. Recheck sources before publishing any changes to legal, tax or market-access material. The optional reading list is independent of the core study stages. The sitemap follows the article list. Review contact delivery and commercial information when the business changes. No scheduled editorial job or paid dashboard is required.

## Commercial and legal review · owner draft, 19 November 2026

The former Bengaluru address was not independently substantiated. The public contact page retains the phone, email, form and WhatsApp channels. Confirm the legal seller and the place and channel where a student concludes a paid booking. If electronic sales are concluded, determine and publish the disclosures applicable to that sales model. Rules 4 and 7 address seller identity, geographic address, grievance contacts and transaction information for covered entities. A brochure enquiry alone does not establish how the later transaction occurs. [Consumer Protection (E-Commerce) Rules](https://consumeraffairs.gov.in/public/upload/files/E%20commerce%20rules_1732703966.pdf)

Draft for review before collecting payment: identify the contracting seller and grievance contact, the agreed learning scope, total payable fee and charges, delivery or scheduling arrangements, and what happens if either party cancels, reschedules or requests a refund. Enter the actual policy and dates after agreement. No cancellation window, refund entitlement or waiver has been invented. Maintain a stand-alone public service-terms page if the sales channel and actual terms require it. Confirm Formspree retention, deletion contact and any additional data processing before expanding the existing point-of-collection privacy notice.

Content review: All lesson figures are fictional. No live named security, brokerage referral, portfolio assessment, signal or performance representation is part of the new lessons. Educational curation is based on prior knowledge and learning goals. SEBI’s May 2026 circular updates the education/advice distinction in the association and price-data framework effective July 2026. A disclaimer alone cannot cure personalised recommendations. [SEBI circular](https://www.sebi.gov.in/sebi_data/attachdocs/may-2026/1778242522289.pdf)

The FX lesson and paid pathway do not authorise trading through any provider. Resident transactions are subject to permitted purposes and authorised persons and venues. [RBI forex FAQ](https://www.rbi.org.in/Scripts/FAQDisplay.aspx?Id=146)
