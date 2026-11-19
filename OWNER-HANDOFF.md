# V7 Market Solutions · owner review

[Preview](https://v7marketsolutions-hig7053fz-vivekanandrh3s-projects.vercel.app) · [Source changes](https://github.com/vivekanandrh3/v7marketsolutions/compare/e927294...6f63378b3019167ba0a30d1ec9d244265b951d4d) · [Owner handbook](https://github.com/vivekanandrh3/v7marketsolutions/blob/6f63378b3019167ba0a30d1ec9d244265b951d4d/docs/academy-owner.md) · [Acceptance report](https://github.com/vivekanandrh3/v7marketsolutions/blob/6f63378b3019167ba0a30d1ec9d244265b951d4d/docs/acceptance/report.md)

## What to review

The old homepage used hover-only market descriptions. The preview displays them on mobile and desktop, with a floating WhatsApp contact. The training outlines explain the consultation and learning goals. Each of the four ladder stages now connects to its articles and a completion exercise. Sixteen lessons contain illustrative charts, exercises and source links. The calculator explains its assumptions and separates added deposits from gains.

First-time and referral campaigns are proposals. All promotion switches are off and both date ranges are blank. The fixed fees are ₹5,999, ₹11,999, ₹19,999 and ₹29,999. Existing course enquiries retain their destination and exact text at regular price. A simulated approved discount adds the code and conditional price to the draft and asks for eligibility confirmation.

## Evidence and recovery

| Item | Verified value |
| --- | --- |
| Original production and original backup | e9272940e98e3783f897847a4b58e724c53143ce |
| Earlier preview | 80deb72ac626b8215ffe7138fa2ad797d88ce0c5 |
| Recovered working tree committed to development | 2a88ad4966eaeb7f6eebc731a44f631b089b8d23 |
| Final development and preview | 6f63378b3019167ba0a30d1ec9d244265b951d4d |
| Vercel preview deployment | dpl_H7q7BPEWqwYGGLwifiZMaHYL2a5K |
| Final ZIP integrity | 93 file contents matched their corresponding Git blob IDs and the ZIP passed CRC verification |
| V7-final.zip SHA-256 | 998300c13f05a253b9d74a8e65b973fc5cfd5b39319b5d478daf367cc5eb9538 |
| V7-recovered.zip SHA-256 | 352551662028584081d80835d0f1c7b2002c6219ee56d176ad8b85d4e9f1f3ec |

The saved 74-check failed run is retained in the final source under docs/acceptance. With a functioning Chromium environment, 74/74 tests passed against the built app and another 74/74 against the final authenticated Vercel preview at phone and desktop viewport sizes. Hosted results are in [hosted-browser.json](./hosted-browser.json). Four independent hosted HTTP reads returned 200 with expected content. In isolated fixtures, 29 promotion logic and 19 browser assertions passed. Formspree responses were intercepted. Native WhatsApp sending, mailbox delivery, physical devices and non-Chromium browsers remain unverified.

Production dependency audit: zero reported vulnerabilities. Full development-tool audit: 64 moderate and 23 high. The full count includes optional development tools. It should be reviewed before using those tools with untrusted inputs. No live discounts, checkout, merger or production promotion was activated in this session.

The source ZIP includes the website, lockfile and handbook. Git history and original deployment are separate recovery paths. If a later approved release needs rollback, obtain approval to restore Vercel deployment `dpl_5xAD7L5MDjVyvxco7qVDjjaf5FHr`, verify the live alias and reconcile main with a reviewed revert. Restoring a ZIP alone does not change a deployment.
