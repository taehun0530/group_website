import { useEffect } from 'react';
import { ArrowUpRight, ChevronLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import RecruitmentLanguageToggle from '../components/RecruitmentLanguageToggle';
import useRecruitmentLanguage from '../components/useRecruitmentLanguage';
import { recruitmentTopics } from '../data/recruitmentTopics';

export default function RecruitmentTopics() {
  const location = useLocation();
  const { language, setLanguage, withLanguage } = useRecruitmentLanguage();

  useEffect(() => {
    if (!location.hash) return;
    let topicId: string;
    try {
      topicId = decodeURIComponent(location.hash.slice(1));
    } catch {
      return;
    }
    if (!recruitmentTopics.some((topic) => topic.id === topicId)) return;
    const frame = requestAnimationFrame(() => {
      document.getElementById(topicId)?.scrollIntoView({ block: 'start' });
    });
    return () => cancelAnimationFrame(frame);
  }, [location.hash, language]);

  return (
    <>
      <PageBanner hideLine />
      <div className="max-w-4xl mx-auto px-8 py-10" lang={language}>
        <Link
          to={withLanguage('/open-positions')}
          className="text-meta inline-flex items-center gap-2 text-ink hover:underline underline-offset-2 mb-6"
        >
          <ChevronLeft size={14} aria-hidden="true" />
          {language === 'ko' ? 'Open Positions로 돌아가기' : 'Back to Open Positions'}
        </Link>

        <header className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <h1 className="page-title" lang="en">Research Topics</h1>
          <RecruitmentLanguageToggle language={language} onChange={setLanguage} />
        </header>

        <div className="space-y-8">
          {recruitmentTopics.map((topic) => (
            <section key={topic.id} id={topic.id} aria-labelledby={`${topic.id}-heading`} className="scroll-mt-24">
              <h2 id={`${topic.id}-heading`} lang="en" className="section-title mb-3">{topic.title}</h2>
              <p className="text-body text-copy">{topic.description[language]}</p>
            </section>
          ))}
        </div>

        <Link to="/research" className="text-meta inline-flex items-center gap-1 text-ink hover:underline underline-offset-2 mt-8">
          {language === 'ko' ? 'Research에서 더 알아보기' : 'Explore our Research'}
          <ArrowUpRight size={13} aria-hidden="true" />
        </Link>
      </div>
    </>
  );
}
