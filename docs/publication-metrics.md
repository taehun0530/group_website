# Impact Factors for the 2026 publication list

Publisher and journal sources checked on 4 November 2026. These are journal-level
Impact Factors, not citation counts or scores for an individual article. The year
in the source data is the JIF metric year, not the paper's publication year or the
JCR release year. The website shows `IF = value` with a source link and omits the
metric year and explanatory legend. Historical publication records are unchanged.

| Journal | IF | Metric year | Source |
| --- | --- | --- | --- |
| eScience | 52.9 | 2025 | [KeAi](https://www.keaipublishing.com/en/journals/escience/), [journal owner announcement](https://journal.nankai.edu.cn/2026/0618/c38402a598630/page.htm) |
| Small Structures | 8.9 | 2025 | [Wiley metrics](https://onlinelibrary.wiley.com/journal/26884062/journal-metrics) |
| Journal of Materials Chemistry A | 9.2 | 2025 | [RSC](https://www.rsc.org/publishing/journals/journal-of-materials-chemistry-a) |
| Computational Materials Science | 3.7 | Not explicitly stated | [Journal announcement](https://www.linkedin.com/posts/computational-materials-science_we-are-pleased-to-share-that-computational-activity-7473197088344911872-OzfZ) |
| Energy & Environmental Materials | 13.8 | 2025 | [Wiley metrics](https://onlinelibrary.wiley.com/journal/25750356/journal-metrics) |
| ACS Applied Materials & Interfaces | 7.9 | 2025 | [ACS metrics](https://pubs.acs.org/page/aamick/about.html) |
| Advanced Functional Materials | 19.9 | 2025 | [Wiley metrics](https://advanced.onlinelibrary.wiley.com/journal/16163028/journal-metrics) |
| Advanced Science | 14.1 | 2025 | [Wiley metrics](https://advanced.onlinelibrary.wiley.com/journal/21983844/journal-metrics) |
| Nature Communications | 18.1 | 2025 | [Nature metrics](https://www.nature.com/ncomms/journal-impact) |

ACS identifies the current data as 2025; its [June 2026 announcement](https://axial.acs.org/publishing/journal-metrics-2026)
also distinguishes 2025 JIFs from the 2026 JCR release. Prefer the current 2-Year
Impact Factor (7.9) over old landing-page snippets or the unrelated 7.8-day
acceptance-to-ASAP statistic.

For Computational Materials Science the journal announces a new JIF of 3.7,
compared with 3.3 in 2024. The announcement does not explicitly give the new metric
year, so `ifYear` is intentionally omitted rather than inferred. The website
shows the confirmed value and a source link without a year.

Store values in `src/data/publications.json` as `if`, with optional `ifYear` and
`ifSource`. Update a value and its provenance together. Do not automatically apply
current metrics to older papers.
