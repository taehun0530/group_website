import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { applicationStatus, graduateApplications, recruitmentSources, winterInternship, type ApplicationWindow } from '../data/recruitment';

type Language = 'en' | 'ko';

const content = {
  en: {
    introduction: 'We are recruiting graduate students for 2027 and undergraduate interns for winter 2027 to work on atomistic materials modeling and AI- and data-driven materials research. Researchers interested in postdoctoral opportunities are also welcome to contact us.',
    positions: [
      { title: 'Graduate Students', description: 'M.S., Integrated M.S.–Ph.D., and Ph.D. applicants for 2027. Please contact us to discuss available degree programs and research opportunities.' },
      { title: 'Undergraduate Interns', description: 'Applicants for the 2027 DGIST Winter Internship. Join an ongoing research project and experience graduate research during the four-week program.' },
      { title: 'Postdoctoral Researchers', description: 'Inquiries are welcome from researchers with a relevant Ph.D. and experience in DFT or molecular dynamics. Please include your research interests, especially if you have worked with MLIPs or structure exploration.' },
    ],
    applicantBackground: 'We welcome applicants from materials science, physics, chemistry, chemical engineering, computer science, and related fields who are interested in Python programming and atomistic materials modeling.',
    positionsNote: 'Lab recruitment and preliminary discussions are separate from the official application windows listed below.',
    projects: [
      { title: 'AI-accelerated Materials Discovery', description: 'Explore functional materials, including Ionic Conductors, through data-driven screening and generative models.' },
      { title: 'Operando Surface Modeling', description: 'Use atomistic modeling to understand structural changes and reactivity of electrocatalyst surfaces under operating conditions.' },
      { title: 'Defects & Materials Data Science', description: 'Predict defects and properties of semiconductor and oxide materials, and analyze structure–property relationships in materials databases.' },
      { title: 'Semiconductor Process Modeling', description: 'Model growth and process environments with MLIPs. Combine experimental and simulation data to predict process conditions, assess synthesizability, and tune materials properties.' },
    ],
    researchLink: 'Explore our Research',
    programsIntroduction: 'Graduate admissions and the winter internship follow DGIST’s official application procedures. Contacting the lab does not replace an official application.',
    graduateHeading: 'Graduate Admissions',
    graduateScheduleLabel: 'DGIST graduate application dates',
    admissionsLink: 'Official DGIST admissions guidelines',
    admissionsNote: 'Check the official guidelines for application times and required documents before applying.',
    internshipHeading: 'Winter Internship 2027',
    internshipDuration: 'January 2027 · Four weeks',
    officialApplication: 'Official application',
    internshipIntroduction: 'The DGIST graduate winter internship offers hands-on research experience and an introduction to graduate life. Our lab is registered as a participating laboratory for winter 2027 and welcomes internship applicants.',
    applicationPeriod: 'Applications',
    activityPeriod: 'Program dates',
    activityDates: 'Mon, Jan 4 – Fri, Jan 29, 2027',
    eligibility: 'Eligibility',
    eligibleApplicants: 'Enrolled students, students on leave, and graduates of DGIST or other universities',
    results: 'Results',
    resultDate: 'Mon, Nov 30, 2026',
    registration: 'Registration',
    registrationDates: 'Tue, Dec 1 – Tue, Dec 15, 2026',
    housing: 'Housing',
    housingDetails: 'Separate application required for those who wish to stay in the residence hall',
    internProjectsHeading: 'Internship Research Topics',
    internProjects: [
      'Predict defect structures in semiconductor materials using first-principles calculations',
      'Predict electrocatalyst surface structures using machine-learning molecular dynamics',
      'Analyze materials databases using data science',
    ],
    internshipNote: 'For a preliminary discussion, email us with your preferred topic. You must also apply through DGIST’s official page during the application period.',
    internshipApply: 'Apply for the internship',
    internshipNotice: 'Official program announcement',
    contactIntroduction: 'Email us with your research interests, intended degree or position, and preferred start date. Graduate and internship applications must be submitted separately through DGIST’s official procedures within the relevant application period.',
    materialsHeading: 'Please include',
    materials: ['A brief introduction and your research interests', 'Curriculum vitae (CV)', 'Academic transcript (student applicants)'],
    contactName: 'Professor Taehun Lee · Department of Energy Science and Engineering, DGIST',
    jointAppointment: 'Joint appointment · Department of Semiconductor Engineering',
    verifiedOn: 'Official schedules last checked',
    verificationNote: 'Refer to the linked DGIST announcements for detailed requirements.',
  },
  ko: {
    introduction: '원자 수준 소재 모델링과 AI·데이터 기반 소재 연구를 함께할 대학원생과 2027년 동계 인턴을 모집하고 있습니다. 박사후연구원 참여에 관심 있는 연구자의 문의도 환영합니다.',
    positions: [
      { title: 'Graduate Students', description: '2027학년도 석사·석박사통합·박사과정 대학원생을 모집하고 있습니다. 지원 가능 과정과 모집 인원은 이메일로 상담해 주세요.' },
      { title: 'Undergraduate Interns', description: '2027년 DGIST 동계 인턴 지원자를 모집하고 있습니다. 4주 동안 연구실의 실제 연구에 참여하며 대학원 생활을 경험할 수 있습니다.' },
      { title: 'Postdoctoral Researchers', description: '관련 분야 박사학위와 DFT 또는 분자동역학 연구 경험을 갖춘 연구자의 지원 문의도 환영합니다. MLIP나 구조 탐색 경험이 있는 분은 관심 연구 주제와 함께 연락해 주세요.' },
    ],
    applicantBackground: '재료공학·물리·화학·화학공학·컴퓨터과학 등 관련 전공자를 대상으로 하며, Python 프로그래밍과 원자 수준 소재 모델링에 관심 있는 학생을 환영합니다.',
    positionsNote: '연구실의 모집 및 사전 상담과 아래의 공식 원서 접수 기간은 별개입니다.',
    projects: [
      { title: 'AI-accelerated Materials Discovery', description: '데이터 기반 스크리닝과 생성 모델을 활용한 Ionic Conductors 등 기능성 소재 탐색' },
      { title: 'Operando Surface Modeling', description: '실제 구동 환경에서 전기촉매 표면의 구조 변화와 반응성을 이해하는 원자 수준 모델링' },
      { title: 'Defects & Materials Data Science', description: '반도체·산화물 소재의 결함과 물성을 예측하고 소재 데이터베이스에서 구조–물성 관계 분석' },
      { title: 'Semiconductor Process Modeling', description: 'MLIP를 활용한 성장·공정 환경 모델링과 실험·시뮬레이션 데이터 통합을 통해 공정 조건 예측, 합성 가능성 평가 및 물성 제어' },
    ],
    researchLink: 'Research에서 더 알아보기',
    programsIntroduction: '대학원 원서와 동계 인턴 신청서는 DGIST 공식 절차에 따라 접수해야 합니다. 연구실 사전 상담이 공식 지원을 대신하지는 않습니다.',
    graduateHeading: '대학원 원서 접수 일정',
    graduateScheduleLabel: 'DGIST 대학원 원서 접수 일정',
    admissionsLink: 'DGIST 공식 모집요강',
    admissionsNote: '접수 시각과 제출 서류는 지원 전 공식 모집요강에서 확인해 주세요.',
    internshipHeading: '2027년 동계 인턴 프로그램',
    internshipDuration: '2027년 1월 · 4주',
    officialApplication: '공식 신청',
    internshipIntroduction: 'DGIST 대학원 동계 인턴 프로그램은 방학 중 연구실의 실제 연구에 참여하며 대학원 생활을 경험하는 프로그램입니다. 우리 연구실은 2027년 동계 인턴 참여연구실로 등록되어 있으며, 인턴 지원자를 모집하고 있습니다.',
    applicationPeriod: '신청 기간',
    activityPeriod: '활동 기간',
    activityDates: '2027. 1. 4.(월) – 1. 29.(금)',
    eligibility: '지원 대상',
    eligibleApplicants: 'DGIST 및 타 대학 재학생·휴학생·졸업생',
    results: '합격자 발표',
    resultDate: '2026. 11. 30.(월)',
    registration: '합격자 등록',
    registrationDates: '2026. 12. 1.(화) – 12. 15.(화)',
    housing: '생활관',
    housingDetails: '희망자 별도 신청',
    internProjectsHeading: '우리 연구실의 인턴 연구 주제',
    internProjects: ['제일원리 계산을 이용한 반도체 소재의 결함 구조 예측', '머신러닝 분자동역학을 이용한 전기촉매 표면 구조 예측', '데이터 사이언스를 활용한 소재 데이터베이스 분석'],
    internshipNote: '사전 상담을 희망하는 분은 관심 주제를 이메일로 문의해 주세요. 상담 여부와 별도로 접수 기간 내 DGIST 공식 신청 페이지에서 지원해야 합니다.',
    internshipApply: '인턴 프로그램 신청',
    internshipNotice: '공식 모집 공고',
    contactIntroduction: '사전 상담을 원하시면 관심 연구 주제, 희망 과정과 참여 시기를 이메일로 알려주세요. 상담 여부와 별도로 대학원 원서와 인턴 신청서는 접수 기간 내 DGIST 공식 절차에 따라 제출해야 합니다.',
    materialsHeading: '상담 시 함께 보내주실 자료',
    materials: ['간단한 자기소개와 관심 연구 주제', '이력서 (CV)', '성적증명서 (학생 지원자)'],
    contactName: '이태훈 교수 · DGIST 에너지공학과',
    jointAppointment: '반도체공학과 겸임교수',
    verifiedOn: '공식 일정 확인',
    verificationNote: '전형·프로그램별 상세 조건은 링크된 DGIST 공고를 기준으로 확인해 주세요.',
  },
};

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

export default function OpenPositions() {
  const [language, setLanguage] = useState<Language>('en');
  const text = content[language];
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
      <div className="py-10 max-w-7xl mx-auto px-8" lang={language}>
        <header className="mb-8 pb-6 border-b border-slate-200">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
            <h1 className="page-title">Open Positions</h1>
            <div role="group" aria-label="Page language" className="ml-auto inline-flex shrink-0 rounded-sm border border-slate-200 p-0.5">
              {(['en', 'ko'] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  lang={option}
                  aria-pressed={language === option}
                  onClick={() => setLanguage(option)}
                  className={`text-meta px-2.5 py-1.5 rounded-sm transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tertiary ${language === option ? 'bg-primary text-white' : 'text-slate-600 hover:bg-slate-50'}`}
                >
                  {option === 'en' ? 'English' : '한국어'}
                </button>
              ))}
            </div>
          </div>
          <p className="text-body text-slate-700">{text.introduction}</p>
        </header>

        <section aria-labelledby="positions-heading" className="mb-8">
          <h2 id="positions-heading" className="section-title mb-4">Positions</h2>
          <ul className="text-body list-disc pl-5 space-y-3 text-slate-700">
            {text.positions.map((position) => (
              <li key={position.title}>
                <h3 className="card-title inline text-primary">{position.title}</h3>
                <p className="text-body mt-0.5">{position.description}</p>
              </li>
            ))}
          </ul>
          <p className="text-body mt-4 text-slate-700">{text.applicantBackground}</p>
          <p className="text-meta mt-2 text-slate-600">{text.positionsNote}</p>
        </section>

        <section aria-labelledby="projects-heading" className="mb-8">
          <h2 id="projects-heading" className="section-title mb-4">Research Topics</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {text.projects.map((project) => (
              <div key={project.title} className="bg-white border border-slate-100 p-4 rounded-sm">
                <h3 className="card-title text-primary mb-2">{project.title}</h3>
                <p className="text-body text-slate-700">{project.description}</p>
              </div>
            ))}
          </div>
          <Link to="/research" className="text-meta inline-flex items-center gap-1 mt-3 text-tertiary hover:underline underline-offset-4">{text.researchLink}<ArrowUpRight size={13} aria-hidden="true" /></Link>
        </section>

        <section aria-labelledby="programs-heading" className="mb-8">
          <h2 id="programs-heading" className="section-title mb-3">Programs &amp; Application Dates</h2>
          <p className="text-body text-slate-700 mb-5">{text.programsIntroduction}</p>

          <section aria-labelledby="admissions-heading" className="mb-6">
            <h3 id="admissions-heading" className="subsection-title text-primary mb-3">{text.graduateHeading}</h3>
            <ul className="text-body divide-y divide-slate-100 border-y border-slate-100" aria-label={text.graduateScheduleLabel}>
              {graduateApplications.map((application) => (
                <li key={application.id} className="text-body grid grid-cols-[minmax(0,1fr)_auto] md:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)_auto] gap-x-4 gap-y-1 py-3">
                  <h4 className="card-title text-primary">
                    {language === 'ko' ? application.title : application.titleEn ?? application.title}
                  </h4>
                  <p className="text-body col-span-2 row-start-2 md:col-span-1 md:col-start-2 md:row-start-1 text-slate-700">{period(application)}</p>
                  <span className="text-meta col-start-2 row-start-1 md:col-start-3 self-start text-tertiary bg-slate-50 px-2 py-1 rounded-sm whitespace-nowrap">{status(application)}</span>
                </li>
              ))}
            </ul>
            <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
              <a href={recruitmentSources.admissions} target="_blank" rel="noopener noreferrer" className="text-meta inline-flex items-center gap-1 text-tertiary hover:underline underline-offset-4">{text.admissionsLink}<ArrowUpRight size={13} aria-hidden="true" /></a>
              <p className="text-meta text-slate-600">{text.admissionsNote}</p>
            </div>
          </section>

          <section aria-labelledby="internship-heading" className="border-t border-slate-100 pt-5">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <h3 id="internship-heading" className="subsection-title text-primary">{text.internshipHeading}</h3>
                <p className="text-meta text-slate-600 mt-1">{text.internshipDuration}</p>
              </div>
              <span className="text-meta text-tertiary bg-slate-50 px-2 py-1 rounded-sm">{text.officialApplication}: {status(winterInternship)}</span>
            </div>
            <div className="text-body space-y-4 text-slate-700">
              <p>{text.internshipIntroduction}</p>
              <dl className="text-body space-y-2">
                {internshipDetails.map(([label, value]) => (
                  <div key={label} className="grid grid-cols-1 sm:grid-cols-[8rem_minmax(0,1fr)] gap-x-4">
                    <dt className="text-meta text-primary">{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <div>
                <h4 className="card-title text-primary mb-2">{text.internProjectsHeading}</h4>
                <ul className="text-body list-disc pl-4 space-y-1">{text.internProjects.map((project) => <li key={project}>{project}</li>)}</ul>
              </div>
              <p>{text.internshipNote}</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                <a href={recruitmentSources.internshipApplication} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-bold text-tertiary hover:underline underline-offset-4">{text.internshipApply}<ArrowUpRight size={13} aria-hidden="true" /></a>
                <a href={recruitmentSources.internshipNotice} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-tertiary hover:underline underline-offset-4">{text.internshipNotice}<ArrowUpRight size={13} aria-hidden="true" /></a>
              </div>
            </div>
          </section>
        </section>

        <section aria-labelledby="apply-heading" className="bg-primary text-white p-6 md:p-8 rounded-sm">
          <h2 id="apply-heading" className="section-title mb-2 text-white">Contact</h2>
          <p className="text-body text-slate-100 mb-5">{text.contactIntroduction}</p>
          <div className="grid md:grid-cols-2 gap-5 md:gap-8 border-t border-white/20 pt-5">
            <div>
              <h3 className="subsection-title text-accent-blue mb-3">{text.materialsHeading}</h3>
              <ul className="text-body space-y-2">
                {text.materials.map((item) => (
                  <li key={item} className="text-body flex items-center gap-2.5 text-slate-100"><CheckCircle2 size={15} className="text-accent-blue shrink-0" aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="min-w-0">
              <h3 className="text-body text-accent-blue mb-1">{text.contactName}</h3>
              <p className="text-meta text-slate-100 mb-3">{text.jointAppointment}</p>
              <a href="mailto:taehun.lee@dgist.ac.kr" className="text-body text-white hover:text-accent-blue transition-colors inline-flex items-center gap-2"><Mail size={18} className="shrink-0" aria-hidden="true" /><span className="min-w-0 break-all">taehun.lee@dgist.ac.kr</span></a>
            </div>
          </div>
        </section>
        <p className="text-meta mt-4 text-slate-500">{text.verifiedOn}: {recruitmentSources.verifiedOn} · {text.verificationNote}</p>
      </div>
    </>
  );
}
