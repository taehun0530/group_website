# Typography and text decoration

The existing Manrope heading/navigation font and Public Sans body font remain in use.
Korean text uses the system sans-serif fallback. Open Positions has a page-local
English/Korean translation control; it does not change the rest of the site.

| Role | Size | Weight | Line height |
| --- | --- | --- | --- |
| Home hero (`.hero-title`) | 24px mobile / 30px desktop | 800 | 1.3 |
| Page title (`.page-title`) | 22px | 700 | 1.3 |
| Section title (`.section-title`) | 18px | 700 | 1.35 |
| Subsection title (`.subsection-title`) | 16px | 600 | 1.4 |
| Card or list-item title (`.card-title`) | 14px | 600 | 1.4 |
| Body, paragraphs, lists (`.text-body`) | 14px | 400 | 1.65 |
| Navigation and year controls (`.nav-link`) | 14px | 600 | 1.4 |
| Metadata, dates, captions, secondary links (`.text-meta`) | 12px | 400 | 1.5 |

All roles use normal letter spacing. Font sizes are the same on mobile and desktop
except for the Home hero. Keep headings, paragraphs, and lists on these shared roles
instead of adding local font-size or line-height utilities. Color and layout utilities
may be combined with the roles; selected navigation controls may use a stronger weight.

## Text colors

Use exactly three foreground colors for website text, including hover and active states.
Backgrounds, borders, and the colors inside research figures are separate from this rule.

| Role | Utility | Color |
| --- | --- | --- |
| Titles, links, emphasis | `text-ink` | `#003559` |
| Body and metadata | `text-copy` | `#475569` |
| All text on dark backgrounds | `text-on-dark` | `#FFFFFF` |

Body and metadata share one color; distinguish them by the approved font size and role.
Do not add text-color alpha values or use text opacity to create additional shades.
Use underlines and other non-color cues for link interactions. On dark backgrounds,
apply `text-on-dark` to body and metadata roles as well as headings and button labels.
Keep the footer's plain affiliations in `text-copy`.

## Bullet lists

Use a semantic `ul.bullet-list` with `li` children for explanatory bullet lists.
The shared style uses 14px text, line height 1.65, outside disc markers, 1.25rem left
padding, and 0.375rem between items. Markers inherit the item's foreground color.
The list class does not force a color, so a list on a dark background can inherit white.
Use the same format in both languages. Do not substitute manually typed numbers,
bullet characters, check icons, or small decorative shapes for the list markers.
Navigation, card grids, and definition lists keep their existing semantic structures.

- Use size and weight to express hierarchy. Do not add leading decorative rules, mandatory uppercase, or wide letter spacing to section headings.
- Keep structural dividers and table borders where they separate content.
- Use upright, full-opacity text for Korean and ordinary explanatory prose. Preserve scientific subscripts/superscripts and journal-name conventions.
- Use `text-ink` for emphasis. Do not stack underline, italic, shadow, and background treatments on one phrase.
- Keep illustrations and image controls distinct from text styling. Existing research figures are unchanged.
- Keep the footer's department affiliations as ordinary 12px metadata with the same weight and color. The PI's semiconductor joint appointment should be stated as a plain affiliation, without a badge or a separate promotional emphasis. Do not invent an appointment start date.

Shared roles and the inherited 14px / 1.65 body style are defined in `src/index.css`.
Scientific subscripts and superscripts retain their relative sizing; research figure
labels belong to the image and are not resized by these page typography rules.
