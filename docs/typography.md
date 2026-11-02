# Typography and text decoration

The existing Manrope heading/navigation font and Public Sans body font remain in use.
Korean text uses the system sans-serif fallback. No separate language version is introduced.

| Role | Size | Weight | Style |
| --- | --- | --- | --- |
| Hero | 24px mobile / 30px desktop | 800 | Sentence case |
| Page title (`.page-title`) | 22px | 700 | Normal letter spacing |
| Section title (`.section-title`) | 18px | 700 | Normal letter spacing |
| Card title | 14–16px | 600–800 | Allow natural wrapping |
| Body | 14px | 400 | Line height 1.65 |
| Navigation | 13px desktop / 14px mobile | 600 | Normal letter spacing |
| Metadata, dates, captions, secondary links (`.text-meta` or `text-xs`) | 12px | 400–700 | Normal letter spacing |

- Use size and weight to express hierarchy. Do not add leading decorative rules, mandatory uppercase, or wide letter spacing to section headings.
- Keep structural dividers and table borders where they separate content.
- Use upright, full-opacity text for Korean and ordinary explanatory prose. Preserve scientific subscripts/superscripts and journal-name conventions.
- Use the existing navy palette for emphasis. Do not stack underline, italic, shadow, and background treatments on one phrase.
- Keep illustrations and image controls distinct from text styling. Existing research figures are unchanged.
- Show the PI's primary affiliation and joint appointment separately. Use **Joint appointment · Department of Semiconductor Engineering, DGIST** and **반도체공학과 겸임교수**. Do not invent an appointment start date.

Shared heading styles and the relaxed body line height are defined in `src/index.css`.
