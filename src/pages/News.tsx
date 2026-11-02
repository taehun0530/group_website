import { motion } from 'motion/react';
import { newsData, type NewsImage } from '../data/news';
import { formatScientificTitle } from '../components/PublicationText';
import { Link } from 'react-router-dom';
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
      <figcaption className="mt-2 font-academic text-xs leading-relaxed text-slate-600">
        {image.caption}{' '}
        <a href={image.sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary">{image.credit}</a>
        {image.license && <>{' '}<a href={image.license.url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-primary">{image.license.label}</a></>}
      </figcaption>
    </figure>
  );
}

import PageBanner from '../components/PageBanner';

export default function News() {
  return (
    <>
    <PageBanner hideLine />
    <div className="py-10 max-w-7xl mx-auto px-8">
      <header className="mb-10 pb-8 border-b border-slate-200">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="page-title">News</h1>
        </div>
        <p className="font-academic text-slate-700 max-w-2xl leading-relaxed text-sm font-normal">
          Recent updates from our lab, including publications, awards, and team activities.
        </p>
      </header>

      <div className="space-y-6">
        {newsData.map((item, i) => (
          <motion.article 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative flex flex-col md:flex-row gap-4 md:gap-10"
          >
            {/* Left side: Date and Tag */}
            <div className="md:w-32 shrink-0 pt-0.5">
              <div className="flex items-center gap-2 text-primary font-sans text-xs font-bold uppercase tracking-normal mb-1.5">
                <Calendar size={12} className="text-tertiary" aria-hidden="true" />
                {item.date.length > 4 ? <time dateTime={item.date.replace(/\./g, '-')}>{item.date.replace(/-/g, '.')}</time> : item.date}
              </div>
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-slate-50 text-tertiary rounded-sm text-xs font-bold uppercase tracking-normal group-hover:bg-slate-100 transition-colors">
                <Tag size={10} className="text-tertiary" aria-hidden="true" />
                {item.category}
              </div>
            </div>

            {/* Right side: Content */}
            <div className="flex-grow min-w-0">
              <h3 className="font-sans text-base font-bold text-primary mb-2 leading-tight group-hover:text-tertiary transition-colors">
                {formatScientificTitle(item.title)}
              </h3>
              
                  {item.summary && (
                    <p className="font-academic text-sm text-slate-700 leading-relaxed mb-3">
                      {formatScientificTitle(item.summary)}
                    </p>
                  )}

              {item.hasDetail && (
                <Link 
                  to={`/news/${item.id}`}
                  className="inline-flex items-center gap-1 text-primary font-sans text-xs font-bold uppercase tracking-normal hover:gap-2 transition-all"
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
