import { ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import { Link, Navigate, useLocation } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import RecruitmentLanguageToggle from '../components/RecruitmentLanguageToggle';
import useRecruitmentLanguage from '../components/useRecruitmentLanguage';
import { openPositionContent } from '../data/openPositionContent';
import { recruitmentSources } from '../data/recruitment';
import { recruitmentTopics } from '../data/recruitmentTopics';

export default function OpenPositions() {
  const { language, setLanguage, withLanguage } = useRecruitmentLanguage();
  const location = useLocation();
  const text = openPositionContent[language];
  const legacyDestination = location.hash === '#graduate-admissions'
    ? '/open-positions/graduate-admissions'
    : ['#undergraduate-internship-2027', '#winter-internship-2027'].includes(location.hash)
      ? '/open-positions/winter-internship-2027'
      : null;

  if (legacyDestination) return <Navigate to={withLanguage(legacyDestination)} replace />;

  return (
    <>
      <PageBanner hideLine />
      <div className="py-10 max-w-7xl mx-auto px-8 text-copy" lang={language}>
        <header className="mb-8 pb-6 border-b border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <h1 className="page-title">Open Positions</h1>
            <RecruitmentLanguageToggle language={language} onChange={setLanguage} />
          </div>
          <ul className="bullet-list">
            {text.positions.map((position) => (
              <li key={position.title} className="leading-relaxed">
                <strong className="font-semibold text-ink">{position.title}:</strong>{' '}{position.description}
              </li>
            ))}
          </ul>
          <p className="text-body mt-4 text-copy">{text.applicantBackground}</p>
          <h2 className="section-title mt-6 mb-4">Programs &amp; Application Dates</h2>
          <nav aria-label={text.programNavigation} className="square-card-grid square-card-grid--compact">
            <Link to={withLanguage('/open-positions/graduate-admissions')} title={text.graduateCardDescription} className="square-card group relative border border-slate-200 bg-white text-ink transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary">
              <span className="min-w-0">
                <span lang="en" className="card-title block">Graduate Admissions</span>
              </span>
              <ArrowRight size={14} className="absolute bottom-1.5 right-1.5" aria-hidden="true" />
            </Link>
            <Link to={withLanguage('/open-positions/winter-internship-2027')} title={text.internshipCardDescription} className="square-card group relative border border-slate-200 bg-white text-ink transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary">
              <span className="min-w-0">
                <span lang="en" className="card-title block">Undergraduate Internship 2027</span>
              </span>
              <ArrowRight size={14} className="absolute bottom-1.5 right-1.5" aria-hidden="true" />
            </Link>
          </nav>
        </header>

        <section aria-labelledby="projects-heading" className="mb-8">
          <h2 id="projects-heading" className="section-title mb-4">Research Topics</h2>
          <div className="square-card-grid square-card-grid--compact">
            {recruitmentTopics.map((project) => (
              <Link key={project.id} to={`${withLanguage('/open-positions/research-topics')}#${project.id}`} className="square-card relative border border-slate-100 bg-white transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary">
                <h3 lang="en" className="card-title text-ink">{project.title}</h3>
                <ArrowRight size={14} className="absolute bottom-1.5 right-1.5" aria-hidden="true" />
              </Link>
            ))}
          </div>
          <Link to="/research" className="text-meta inline-flex items-center gap-1 mt-3 text-ink hover:underline underline-offset-4">{text.researchLink}<ArrowUpRight size={13} aria-hidden="true" /></Link>
        </section>

        <section aria-labelledby="apply-heading" className="bg-primary text-on-dark p-6 md:p-8 rounded-sm">
          <h2 id="apply-heading" className="section-title mb-2 text-on-dark">Contact</h2>
          <p className="text-body text-on-dark mb-5">{text.contactIntroduction}</p>
          <div className="grid md:grid-cols-2 gap-5 md:gap-8 border-t border-white/20 pt-5">
            <div>
              <h3 className="subsection-title text-on-dark mb-3">{text.materialsHeading}</h3>
              <ul className="bullet-list">
                {text.materials.map((item) => (
                  <li key={item} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
            <div className="min-w-0">
              <h3 className="text-body text-on-dark mb-1">{text.contactName}</h3>
              <p className="text-meta text-on-dark mb-3">{text.jointAppointment}</p>
              <a href="mailto:taehun.lee@dgist.ac.kr" className="text-body text-on-dark hover:underline underline-offset-4 inline-flex items-center gap-2"><Mail size={18} className="shrink-0" aria-hidden="true" /><span className="min-w-0 break-all">taehun.lee@dgist.ac.kr</span></a>
            </div>
          </div>
        </section>
        <p className="text-meta mt-4 text-copy">{text.verifiedOn}: {recruitmentSources.verifiedOn} · {text.verificationNote}</p>
      </div>
    </>
  );
}
