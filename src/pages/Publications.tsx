import { Link, useSearchParams } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import publicationData from '../data/publications.json';
import { newsData, normalizeDoi } from '../data/news';
import { formatScientificTitle as formatTitle, formatAuthors, JournalCitation } from '../components/PublicationText';
import PageBanner from '../components/PageBanner';
import YearFilter from '../components/YearFilter';

type PublicationRecord = {
  year: string;
  title: string;
  authors: string;
  journal: string;
  doi: string;
  status?: string;
  if?: string;
  ifYear?: string;
  ifSource?: string;
  highlightImage?: { src: string; alt: string };
};

export const publications: PublicationRecord[] = publicationData.journalArticles;

const yearBucket = (year: string) => Number(year) <= 2020 ? '2020 & Earlier' : year;
const publicationYears = [...new Set(publications.map((publication) => yearBucket(publication.year)))].sort((a, b) => b.localeCompare(a));
const years = [...publicationYears, 'All'];
const detailsByDoi = new Map(newsData.filter((entry) => entry.hasDetail && entry.publicationDoi).map((entry) => [normalizeDoi(entry.publicationDoi!), entry.id]));

export default function Publications() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedYear = searchParams.get('year');
  const activeYear = requestedYear && years.includes(requestedYear) ? requestedYear : publicationYears[0] ?? 'All';
  const filteredPubs = activeYear === 'All' ? publications : publications.filter((publication) => yearBucket(publication.year) === activeYear);
  const groupedPubs = filteredPubs.reduce((groups, publication) => {
    const year = yearBucket(publication.year);
    (groups[year] ??= []).push(publication);
    return groups;
  }, {} as Record<string, PublicationRecord[]>);

  return (
    <>
      <PageBanner hideLine />
      <div className="py-10 max-w-7xl mx-auto px-8">
        <header className="mb-6">
          <h1 className="page-title mb-4">Publications</h1>
          <a href="https://scholar.google.com/citations?user=E4QBWfAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-body text-ink hover:underline underline-offset-2">
            Google Scholar <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </header>

        <YearFilter years={years} selectedYear={activeYear} onSelect={(year) => setSearchParams({ year })} label="Filter publications by year" />
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-copy font-academic text-meta mt-4 mb-6">
          <span># Corresponding author</span>
          <span>† First author</span>
        </div>

        <div className="space-y-8">
          {Object.keys(groupedPubs).sort((a, b) => b.localeCompare(a)).map((year) => (
            <section key={year} aria-label={`${year} publications`}>
              <h2 className="section-title mb-3">{year} <span className="text-meta font-normal text-copy ml-1">({groupedPubs[year].length})</span></h2>
              <div className="divide-y divide-slate-100">
                {groupedPubs[year].map((publication) => {
                  const detailId = detailsByDoi.get(normalizeDoi(publication.doi));
                  const title = formatTitle(publication.title);
                  return (
                    <article key={publication.doi} className={`py-4 ${publication.highlightImage ? 'flex flex-col sm:flex-row gap-4' : ''}`}>
                      {publication.highlightImage && (
                        <img src={publication.highlightImage.src} alt={publication.highlightImage.alt} loading="lazy" className="w-full sm:w-36 aspect-[4/3] object-contain bg-white shrink-0 self-start" />
                      )}
                      <div className="min-w-0 text-body text-copy">
                        <h3 className="card-title mb-1">
                          {detailId ? <Link to={`/news/${detailId}`} className="hover:underline underline-offset-2 text-ink">{title}</Link> : <a href={publication.doi} target="_blank" rel="noopener noreferrer" className="hover:underline underline-offset-2 text-ink">{title}</a>}
                        </h3>
                        <p className="mb-1">{formatAuthors(publication.authors)}</p>
                        <p><JournalCitation citation={publication.journal} showIssue={false} emphasizeVolume={false} />{publication.if && (publication.ifSource ? <a href={publication.ifSource} target="_blank" rel="noopener noreferrer" className="inline-block text-meta text-ink ml-2 hover:underline underline-offset-2" aria-label={`Journal Impact Factor ${publication.if}, source`}>IF = {publication.if}</a> : <span className="inline-block text-meta text-copy ml-2">IF = {publication.if}</span>)}</p>
                        {publication.status === 'article-in-press' && <p className="text-meta text-copy mt-1">Published online · Article in Press</p>}
                        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-meta text-ink">
                          <a href={publication.doi} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 hover:underline underline-offset-2 text-ink">DOI <ArrowUpRight size={12} aria-hidden="true" /></a>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  );
}
