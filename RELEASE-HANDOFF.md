# V7 Market Solutions release handoff

The education overhaul is complete on `dev/consultation-led-academy`. Production publication is on hold. Confirm whether a learner can book, agree to purchase or pay for a course online, including via WhatsApp. If so, provide the verified seller identity, public business address, grievance contact and actual scheduling, cancellation and refund arrangements so the applicable disclosures can be completed. The preview omits the unverified Bengaluru location.

## Release records

| Item | Record |
|---|---|
| Tested source | 41155d34dc1862ededdf8a5b3c0fd41f622125bd |
| Ready preview | https://v7marketsolutions-f2wuaxjml-vivekanandrh3s-projects.vercel.app |
| Preview deployment | dpl_55qkrabAxK9i2F2RQFGRzVPtyCcc |
| Original production | e9272940e98e3783f897847a4b58e724c53143ce |
| Original production deployment | dpl_5xAD7L5MDjVyvxco7qVDjjaf5FHr |
| Accepted baseline | 6f63378b3019167ba0a30d1ec9d244265b951d4d |
| Prior acceptance recovery | recovery/academy-acceptance-20261119 at 225d69aa4494012fa87595875cb93a087ddd7c4a |
| Original production Git backup | backup/production-2026-11-19-e927294 |
| Production domain | https://www.v7marketsolutions.org/ |

## What changed

Homepage, About, enquiries and all four paid pathways now explain how I use consultation to identify learning gaps, agree a sequence and practise through charts and journals. The advanced pathway replaces Elliott Wave with VWAP and order flow, including spot-FX tick-volume and futures-volume limitations. Five worked lessons join 16 reviewed articles. Original article dates and routes are preserved. The public ladder includes four stages with exercises and related reading. Visitors can enquire about masterclass availability. Metadata, canonical links, mobile navigation checks, risk wording and contact transparency were reviewed.

## Acceptance

The build generated 37 pages. TypeScript passed. The production dependency audit reported zero known vulnerabilities. Chromium at 390, 820 and 1440 pixels passed 135/135 checks locally and 135/135 against the exact hosted preview. The suite covered 31 routes, course fees, enquiry destinations, article diagrams, navigation, responsive overflow, metadata, homepage stability and sampled automated accessibility checks. The 29 pricing/date assertions and 19 isolated promotion/theme UI assertions passed. A homepage metadata defect found during acceptance was corrected before both final browser runs. See the acceptance directory for machine-readable results.

The form tests simulated provider responses. Actual Formspree inbox and WhatsApp delivery were not exercised. Physical devices, Safari and full manual assistive-technology testing were outside the executed coverage.

## Unattended operation

Regular course fees in order are ₹5,999, ₹11,999, ₹19,999 and ₹29,999. Campaigns are disabled. Proposed first-time and referral discounts require an approved schedule and manual eligibility confirmation. Discounts do not stack. Date windows govern expiry and regular pricing resumes. Seasonal accents use India dates and fall back to the dark theme. The detailed configuration and commercial review notes are in [the owner handbook](https://github.com/vivekanandrh3/v7marketsolutions/blob/41155d34dc1862ededdf8a5b3c0fd41f622125bd/docs/academy-owner.md).

## Restore and verify

[Download the exact final source ZIP](https://codeload.github.com/vivekanandrh3/v7marketsolutions/zip/41155d34dc1862ededdf8a5b3c0fd41f622125bd). GitHub generates this archive from the pinned source commit. accepted-source.zip contains the earlier accepted source. SHA256SUMS.txt records source hashes. Verify a download with Get-FileHash -Algorithm SHA256 on Windows or sha256sum on Linux. Extract into a fresh directory. From the project directory run npm ci, npx tsc --noEmit and npm run build. The final ZIP passed archive integrity checks and its 97 file blobs matched the Git tree.

[Download the original production source](https://codeload.github.com/vivekanandrh3/v7marketsolutions/zip/e9272940e98e3783f897847a4b58e724c53143ce). This source was downloaded, rebuilt in isolation, served and smoke-tested against the published course fees and WhatsApp destination.

If a future release requires rollback, select the original production deployment ID above in the existing Vercel project's deployments and use the production rollback action. Verify the domain's deployment ID, homepage, four fees and contact destinations. Reconcile main with a reviewed revert of the failed release to preserve Git history. The source restoration was rehearsed. A live traffic switch was not exercised.
