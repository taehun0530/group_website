import { motion } from 'motion/react';
import { newsData, type NewsImage } from '../data/news';
import { formatScientificTitle } from '../components/PublicationText';
import { Link, useSearchParams } from 'react-router-dom';
import { Calendar, ChevronRight, Tag } from 'lucide-react';

export { newsData } from '../data/news';
export type { NewsCategory, NewsEntry as NewsItem } from '../data/news';

export function renderNewsImage(image: NewsImage) {
  const isAwardPhoto = image.src === '/images/news/dgist-ai-build-week-2026.jpg';
  const photo = <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" className={isAwardPhoto ? 'block size-full object-cover object-center' : 'block w-full h-auto'} />;

  return (
    <figure key={image.src} className="mt-6">
      {isAwardPhoto ? (
        <a href={image.src} target="_blank" rel="noopener noreferrer" aria-label="View the original AI Build Week photograph" className="block aspect-square w-40 overflow-hidden">
          {photo}
        </a>
      ) : photo}
      <figcaption className="text-meta mt-2 text-slate-600">
        {image.caption}{' '}
        <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary">{image.credit}</a>
        {image.license && <>{' '}<a href={image.license.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary">{image.license.label}</a></>}
      </figcaption>
    </figure>
  );
}

import PageBanner from '../components/PageBanner';
import YearFilter from '../components/YearFilter';

const newsYears = [...new Set(newsData.map((entry) => entry.date.slice(0, 4)))].sort((a, b) => b.localeCompare(a));
const years = [...newsYears, 'All'];

export default function News() {
  const [searchParams, setSearchParams] = useSearchParams();
  const requestedYear = searchParams.get('year');
  const activeYear = requestedYear && years.includes(requestedYear) ? requestedYear : newsYears[0] ?? 'All';
  const filteredNews = activeYear === 'All' ? newsData : newsData.filter((entry) => entry.date.startsWith(activeYear));

  return (
    <>
    <PageBanner hideLine />
    <div className="py-10 max-w-7xl mx-auto px-8">
      <header className="mb-6">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="page-title">News</h1>
        </div>
        <p className="text-body text-slate-700 max-w-2xl">
          Recent updates from our lab, including publications, awards, and team activities.
        </p>
      </header>

      <YearFilter years={years} selectedYear={activeYear} onSelect={(year) => setSearchParams({ year })} label="Filter news by year" />
      <h2 className="section-title mt-6 mb-5">{activeYear === 'All' ? 'All News' : `${activeYear} News`}</h2>
      <div className="space-y-6">
        {filteredNews.map((item, i) => (
          <motion.article 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative flex flex-col md:flex-row gap-4 md:gap-10"
          >
            {/* Left side: Date and Tag */}
            <div className="md:w-32 shrink-0 pt-0.5">
              <div className="text-meta flex items-center gap-2 text-primary mb-1.5">
                <Calendar size={12} className="text-tertiary" aria-hidden="true" />
                {item.date.length > 4 ? <time dateTime={item.date.replace(/\./g, '-')}>{item.date.replace(/-/g, '.')}</time> : item.date}
              </div>
              <div className="text-meta inline-flex items-center gap-1.5 px-2 py-0.5 bg-slate-50 text-tertiary rounded-sm group-hover:bg-slate-100 transition-colors">
                <Tag size={10} className="text-tertiary" aria-hidden="true" />
                {item.category}
              </div>
            </div>

            {/* Right side: Content */}
            <div className="flex-grow min-w-0">
              <h3 className="card-title text-primary mb-2 group-hover:text-tertiary transition-colors">
                {item.hasDetail ? <Link to={`/news/${item.id}?year=${activeYear}`} className="hover:underline underline-offset-2">{formatScientificTitle(item.title)}</Link> : formatScientificTitle(item.title)}
              </h3>
              
                  {item.summary && (
                    <p className="text-body text-slate-700 mb-3">
                      {formatScientificTitle(item.summary)}
                    </p>
                  )}

              {item.hasDetail && (
                <Link 
                  to={`/news/${item.id}?year=${activeYear}`}
                  className="text-meta inline-flex items-center gap-1 text-primary hover:gap-2 transition-all"
                >
                  Read More <ChevronRight size={12} aria-hidden="true" />
                </Link>
              )}
              {item.images?.map(renderNewsImage)}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
    </>
  );
}
