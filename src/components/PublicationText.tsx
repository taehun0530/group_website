import { Fragment, type ReactNode } from 'react';

/** Format formula subscripts without changing the title's wording or punctuation. */
export function formatScientificTitle(title: string): ReactNode[] {
  const formulas = /\b(?:[A-Z][a-z]?(?:[0-9xyzδ]+(?:[−-][0-9xyzδ]+)*)?)+(?![a-z])/g;
  const parts: ReactNode[] = [];
  let previousEnd = 0;

  for (const formula of title.matchAll(formulas)) {
    const value = formula[0];
    // A lone English word such as "By" is not a variable-stoichiometry formula.
    if (!/[0-9]/.test(value) && (value.match(/[A-Z]/g)?.length ?? 0) < 2) continue;

    const subscripts = /([A-Z][a-z]?)([0-9xyzδ]+(?:[−-][0-9xyzδ]+)*)(?![a-z])/g;
    let localEnd = 0;
    const formatted: ReactNode[] = [];

    for (const token of value.matchAll(subscripts)) {
      formatted.push(value.slice(localEnd, token.index), token[1]);
      formatted.push(
        <sub key={`formula-${formula.index}-${token.index}`} className="text-[0.72em] leading-none">
          {token[2]}
        </sub>,
      );
      localEnd = token.index + token[0].length;
    }

    if (localEnd === 0) continue;
    formatted.push(value.slice(localEnd));
    parts.push(title.slice(previousEnd, formula.index), ...formatted);
    previousEnd = formula.index + value.length;
  }

  parts.push(title.slice(previousEnd));
  return parts;
}

/** Preserve delimiters and identify the complete author, rather than a name suffix. */
export function formatAuthors(authors: string): ReactNode[] {
  return authors.split(/(,\s*|\band\b)/).map((author, authorIndex) => {
    const isTaehunLee = author.replace(/[†#]/g, '').trim() === 'T. Lee';

    return (
      <Fragment key={`author-${authorIndex}`}>
        {author.split(/([†#]+)/).map((part, partIndex) => {
          if (/^[†#]+$/.test(part)) {
            return <sup key={partIndex} className="text-[0.72em] leading-none">{part}</sup>;
          }

          const name = isTaehunLee ? part.match(/^(\s*)(T\. Lee)(\s*)$/) : null;
          return name ? (
            <Fragment key={partIndex}>
              {name[1]}<strong className="text-primary font-bold">{name[2]}</strong>{name[3]}
            </Fragment>
          ) : part;
        })}
      </Fragment>
    );
  });
}

/** Journal volume(issue), pages/article number (year), with a single final period. */
export function JournalCitation({ citation }: { citation: string }) {
  const normalized = citation.trim().replace(/\.$/, '');
  const match = normalized.match(/^(.+?)\s+(\d+)\s*(\([^()]+\))?,\s+(.+?)\s+\((\d{4})\)$/);
  if (!match) {
    // Online-first articles may have an article number before a volume is assigned.
    const onlineFirst = normalized.match(/^(.+?),\s+(.+?)\s+\((\d{4})\)$/);
    if (!onlineFirst) return <span className="not-italic">{citation}</span>;
    const [, journal, articleNumber, year] = onlineFirst;
    return <span className="not-italic"><em className="italic">{journal}</em>{`, ${articleNumber} (${year}).`}</span>;
  }

  const [, journal, volume, issue = '', pages, year] = match;
  return (
    <span className="not-italic">
      <em className="italic">{journal}</em>{' '}<strong className="font-bold">{volume}</strong>
      <span className="not-italic">{issue}, {pages} ({year}).</span>
    </span>
  );
}
