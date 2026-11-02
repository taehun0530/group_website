import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link as LinkIcon, ArrowUpRight } from 'lucide-react';
import publicationData from '../data/publications.json';
import { formatScientificTitle as formatTitle, formatAuthors, JournalCitation } from '../components/PublicationText';
import PageBanner from '../components/PageBanner';

type PublicationRecord = {
  year: string;
  title: string;
  authors: string;
  journal: string;
  doi: string;
  status?: string;
  if?: string;
};

export const publications: PublicationRecord[] = publicationData.journalArticles;

const years = ['All', '2026', '2025', '2024', '2023', '2022', '2021', '2020 & Earlier'];

export default function Publications() {
  const [activeYear, setActiveYear] = useState('All');

  const filteredPubs = activeYear === 'All' 
    ? publications 
    : activeYear === '2020 & Earlier'
      ? publications.filter(p => parseInt(p.year) <= 2020)
      : publications.filter(p => p.year === activeYear);

  const groupedPubs = filteredPubs.reduce((acc, pub) => {
    const yearKey = parseInt(pub.year) <= 2020 ? '2020 & Earlier' : pub.year;
    if (!acc[yearKey]) acc[yearKey] = [];
    acc[yearKey].push(pub);
    return acc;
  }, {} as Record<string, typeof publications>);

  return (
    <>
    <PageBanner hideLine />
    <div className="py-10 max-w-7xl mx-auto px-8">
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-px w-12 bg-primary" />
          <h1 className="font-sans text-[16px] font-bold uppercase tracking-[0.35em] text-primary leading-none pt-0.5">Publications</h1>
        </div>
        <div className="flex flex-col gap-2 mt-4 ml-[60px]">
          <a 
            href="https://scholar.google.com/citations?user=E4QBWfAAAAAJ&hl=en" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-tertiary font-sans text-[10px] font-bold uppercase tracking-[0.15em] hover:text-primary transition-colors border-b border-tertiary/20 pb-0.5 w-fit"
          >
            Google Scholar Profile <ArrowUpRight size={12} />
          </a>
        </div>
      </header>

      {/* Filter */}
      <section className="sticky top-16 z-40 bg-white/80 backdrop-blur-md mb-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-8 py-2.5">
          <div className="flex items-center gap-5 overflow-x-auto no-scrollbar">
            <div className="flex gap-1.5">
              {years.map(year => (
                <button
                  key={year}
                  type="button"
                  aria-pressed={activeYear === year}
                  onClick={() => setActiveYear(year)}
                  className={`font-sans text-xs font-bold px-4 py-1.5 rounded-full transition-all tracking-widest uppercase ${
                    activeYear === year 
                      ? 'bg-primary text-white shadow-md' 
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 mb-4">
        <div className="flex items-center justify-start gap-4 text-slate-500 font-academic text-[12px] whitespace-nowrap">
          <span># Corresponding author</span>
          <span>† First author</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 space-y-6">
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeYear}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-10"
          >
            {Object.keys(groupedPubs).sort((a, b) => b.localeCompare(a)).map(year => (
              <section key={year} className="relative">
                <div className="flex items-baseline gap-4 mb-5">
                  <h2 className="font-sans font-extrabold text-slate-300 select-none text-3xl leading-none">
                    {year} <span className="text-xs font-bold text-slate-200 ml-1">({groupedPubs[year].length})</span>
                  </h2>
                  <div className="h-[1px] grow bg-slate-200" />
                </div>
                
                <div className="space-y-2">
                  {groupedPubs[year].map(pub => (
                    <motion.div 
                      key={pub.doi}
                      whileHover={{ x: 5 }}
                      className="group py-3 border-b border-slate-50 hover:bg-slate-50/50 px-5 -mx-5 transition-all"
                    >
                      <h3 className="text-primary font-sans font-extrabold text-sm mb-1 leading-snug group-hover:text-tertiary transition-colors">
                        {formatTitle(pub.title)}
                      </h3>
                      <p className="text-slate-600 font-academic text-[13px] mb-1 leading-relaxed">
                        {formatAuthors(pub.authors)}
                      </p>
                      <div className="flex flex-wrap items-center gap-5">
                        <p className="text-slate-700 font-academic text-[13px] italic">
                          <JournalCitation citation={pub.journal} />
                          {pub.if ? <>{' '}<strong>IF = {pub.if}</strong></> : null}
                        </p>
                        <a 
                          href={pub.doi} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-tertiary text-xs font-bold uppercase tracking-widest hover:underline flex items-center gap-1.5"
                        >
                          <LinkIcon size={12} />
                          DOI Link
                        </a>
                      </div>
                      {pub.status === 'article-in-press' ? (
                        <p className="text-slate-500 font-academic text-[12px] mt-1 leading-relaxed">Published online · Article in Press · Volume and issue pending</p>
                      ) : null}
                    </motion.div>
                  ))}
                </div>
              </section>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
    </>
  );
}
