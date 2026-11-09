import { ArrowRight, ArrowUpRight, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import RecruitmentLanguageToggle from '../components/RecruitmentLanguageToggle';
import useRecruitmentLanguage from '../components/useRecruitmentLanguage';
import { openPositionContent } from '../data/openPositionContent';
import { applicationStatus, graduateApplications, recruitmentSources, winterInternship, type ApplicationWindow } from '../data/recruitment';

const englishStatuses: Record<string, string> = {
  '접수 예정': 'Upcoming',
  '접수 종료': 'Closed',
  '접수 기간': 'Open',
};

function englishApplicationPeriod(application: ApplicationWindow) {
  const dateFormat = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Asia/Seoul', year: 'numeric', month: 'short', day: 'numeric', weekday: 'short',
  });
  const timeFormat = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Asia/Seoul', hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  });
  const format = (date: string, timestamp?: string) => {
    const value = new Date(timestamp ?? `${date}T00:00:00+09:00`);
    return `${dateFormat.format(value)}${timestamp ? ` ${timeFormat.format(value)}` : ''}`;
  };
  return `${format(application.startsOn, application.opensAt)} – ${format(application.endsOn, application.closesAt)}${application.opensAt || application.closesAt ? ' KST' : ''}`;
}

export default function OpenPositionProgram({ kind }: { kind: 'graduate' | 'internship' }) {
  const { language, setLanguage, withLanguage } = useRecruitmentLanguage();
  const text = openPositionContent[language];
  const isGraduate = kind === 'graduate';
  const status = (application: ApplicationWindow) => {
    const value = applicationStatus(application);
    return language === 'ko' ? value : englishStatuses[value];
  };
  const period = (application: ApplicationWindow) => language === 'ko' ? application.period : englishApplicationPeriod(application);
  const internshipDetails = [
    [text.applicationPeriod, `${period(winterInternship)}${language === 'ko' ? ' (한국시간)' : ''}`],
    [text.activityPeriod, text.activityDates],
    [text.eligibility, text.eligibleApplicants],
    [text.results, text.resultDate],
    [text.registration, text.registrationDates],
    [text.housing, text.housingDetails],
  ];

  return (
    <>
      <PageBanner hideLine />
      <div className="text-body py-10 max-w-4xl mx-auto px-8" lang={language}>
        <Link to={withLanguage('/open-positions')} className="text-meta inline-flex items-center gap-2 text-ink hover:underline underline-offset-2 mb-6">
          <ChevronLeft size={14} aria-hidden="true" /> {language === 'ko' ? 'Open Positions로 돌아가기' : 'Back to Open Positions'}
        </Link>
        <header className="mb-6">
          <p className="text-meta mb-2">Programs &amp; Application Dates</p>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <h1 className="page-title">{isGraduate ? text.graduateHeading : text.internshipHeading}</h1>
            <RecruitmentLanguageToggle language={language} onChange={setLanguage} />
          </div>
          <p className="text-body">{text.programsIntroduction}</p>
        </header>

        {isGraduate ? (
          <section aria-labelledby="admissions-heading" className="mb-8">
            <h2 id="admissions-heading" className="section-title mb-3">{language === 'ko' ? '원서 접수 일정' : 'Application Dates'}</h2>
            <ul className="text-body divide-y divide-slate-100 border-y border-slate-100" aria-label={text.graduateScheduleLabel}>
              {graduateApplications.map((application) => (
                <li key={application.id} className="grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_auto] gap-x-4 gap-y-1 py-3">
                  <h3 className="card-title leading-relaxed">{language === 'ko' ? application.title : application.titleEn ?? application.title}</h3>
                  <p className="text-body col-span-2 row-start-2 md:col-span-1 md:col-start-2 md:row-start-1">{period(application)}</p>
                  <span className="text-meta col-start-2 row-start-1 md:col-start-3 self-start text-ink bg-slate-50 px-2 py-1 whitespace-nowrap">{status(application)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 space-y-2">
              <a href={recruitmentSources.admissions} target="_blank" rel="noopener noreferrer" className="text-meta inline-flex items-center gap-1 text-ink hover:underline underline-offset-4">{text.admissionsLink}<ArrowUpRight size={13} aria-hidden="true" /></a>
              <p className="text-meta">{text.admissionsNote}</p>
            </div>
          </section>
        ) : (
          <section aria-labelledby="internship-heading" className="mb-8">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h2 id="internship-heading" className="section-title">{language === 'ko' ? '프로그램 안내' : 'Program Details'}</h2>
                <p className="text-meta mt-1">{text.internshipDuration}</p>
              </div>
              <span className="text-meta text-ink bg-slate-50 px-2 py-1">{text.officialApplication}: {status(winterInternship)}</span>
            </div>
            <div className="text-body space-y-4">
              <p>{text.internshipIntroduction}</p>
              <dl className="space-y-2">
                {internshipDetails.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-1 sm:grid-cols-[8rem_minmax(0,1fr)] gap-x-4">
                    <dt className="text-body font-semibold text-ink">{label}</dt>
                    <dd className="text-body">{value}</dd>
                  </div>
                ))}
              </dl>
              <div>
                <h3 className="subsection-title mb-2">{text.internProjectsHeading}</h3>
                <ul className="bullet-list">{text.internProjects.map((project) => <li key={project}>{project}</li>)}</ul>
              </div>
              <p>{text.internshipNote}</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                <a href={recruitmentSources.internshipApplication} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-bold text-ink hover:underline underline-offset-4">{text.internshipApply}<ArrowUpRight size={13} aria-hidden="true" /></a>
                <a href={recruitmentSources.internshipNotice} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-ink hover:underline underline-offset-4">{text.internshipNotice}<ArrowUpRight size={13} aria-hidden="true" /></a>
              </div>
            </div>
          </section>
        )}

        <nav aria-label={language === 'ko' ? '관련 모집 안내' : 'Related recruitment information'} className="flex flex-wrap gap-x-5 gap-y-3 border-t border-slate-200 pt-5">
          <Link to={withLanguage(isGraduate ? '/open-positions/winter-internship-2027' : '/open-positions/graduate-admissions')} className="text-meta inline-flex items-center gap-1 text-ink hover:underline underline-offset-4">
            {isGraduate ? 'Winter Internship 2027' : 'Graduate Admissions'}<ArrowRight size={13} aria-hidden="true" />
          </Link>
          <Link to={withLanguage('/open-positions/research-topics')} className="text-meta inline-flex items-center gap-1 text-ink hover:underline underline-offset-4">Research Topics<ArrowRight size={13} aria-hidden="true" /></Link>
        </nav>
        <p className="text-meta mt-5">{text.verifiedOn}: {recruitmentSources.verifiedOn} · {text.verificationNote}</p>
      </div>
    </>
  );
}
