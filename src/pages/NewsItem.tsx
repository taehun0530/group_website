import { useParams, useSearchParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, Calendar, Tag, ExternalLink } from 'lucide-react';
import { newsData } from '../data/news';
import { formatScientificTitle, formatAuthors, JournalCitation } from '../components/PublicationText';
import { renderNewsImage } from './News';
import PageBanner from '../components/PageBanner';

export default function NewsItem() {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const item = newsData.find((entry) => entry.id === id && entry.hasDetail);

  if (!item) return <Navigate to="/news" replace />;

  const requestedYear = searchParams.get('year');
  const returnYear = requestedYear && (requestedYear === 'All' || newsData.some((entry) => entry.date.slice(0, 4) === requestedYear)) ? requestedYear : item.date.slice(0, 4);
  const returnLabel = returnYear === 'All' ? 'All News' : `${returnYear} News`;

  return (
    <>
    <PageBanner hideLine />
    <div className="pt-12 pb-12 max-w-3xl mx-auto px-8">
      <Link to={`/news?year=${returnYear}`} className="text-meta inline-flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-6">
        <ChevronLeft size={14} aria-hidden="true" /> Back to {returnLabel}
      </Link>

      <motion.article initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <header className="mb-8">
          <div className="text-meta flex flex-wrap items-center gap-4 mb-3">
            <span className="flex items-center gap-1.5 text-tertiary">
              <Calendar size={12} aria-hidden="true" /> {item.date.length > 4 ? <time dateTime={item.date.replace(/\./g, '-')}>{item.date.replace(/-/g, '.')}</time> : item.date}
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <Tag size={12} aria-hidden="true" /> {item.category}
            </span>
          </div>
          <h1 className="page-title mb-5">
            {formatScientificTitle(item.title)}
          </h1>
        </header>

        <div className="prose prose-slate max-w-none">
          <div className="space-y-8">
            {item.publication && (
              <section aria-labelledby="publication-details" className="p-6 bg-slate-50 border-l-4 border-primary">
                <h4 id="publication-details" className="section-title mb-4">Publication Details</h4>
                <dl className="text-body grid grid-cols-1 sm:grid-cols-[100px_1fr] gap-y-3">
                  <dt className="text-meta text-slate-500">Title</dt>
                  <dd className="text-body text-slate-600 min-w-0">{formatScientificTitle(item.publication.title)}</dd>
                  <dt className="text-meta text-slate-500">Authors</dt>
                  <dd className="text-body text-slate-600 min-w-0">{formatAuthors(item.publication.authors)}</dd>
                  <dt className="text-meta text-slate-500">Journal</dt>
                  <dd className="text-body text-slate-600 min-w-0"><JournalCitation citation={item.publication.journal} /></dd>
                  {item.publication.status === 'article-in-press' && <><dt className="text-meta text-slate-500">Status</dt><dd className="text-body text-slate-600">Article in Press — final volume and issue not yet assigned.</dd></>}
                  <dt className="text-meta text-slate-500">Year</dt>
                  <dd className="text-body text-slate-600">{item.publication.year}</dd>
                  <dt className="text-meta text-slate-500">DOI/Link</dt>
                  <dd className="text-body text-slate-600 min-w-0 break-words"><a href={item.publication.doi} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary">{item.publication.doi}</a></dd>
                </dl>
              </section>
            )}
            {item.body?.map((paragraph) => <p key={paragraph} className="text-body text-slate-600">{formatScientificTitle(paragraph)}</p>)}
          </div>
          {item.images?.map(renderNewsImage)}
          {item.links && (
            <div className="mt-8 space-y-3">
              {item.links.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="text-body flex items-center gap-2 text-tertiary underline underline-offset-2 hover:text-primary">
                {link.label} <ExternalLink size={12} aria-hidden="true" />
              </a>)}
            </div>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex justify-between items-center">
          <Link to={`/news?year=${returnYear}`} className="text-meta text-primary hover:text-secondary transition-colors">
            ← Back to {returnLabel}
          </Link>
          <button type="button" className="text-meta flex items-center gap-2 px-5 py-2 bg-primary text-white hover:bg-tertiary transition-colors">
            Share <ExternalLink size={12} aria-hidden="true" />
          </button>
        </div>
      </motion.article>
    </div>
    </>
  );
}
