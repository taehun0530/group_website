import { ArrowUpRight, CheckCircle2, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { applicationStatus, graduateApplications, recruitmentSources, winterInternship } from '../data/recruitment';

export default function OpenPositions() {
  return (
    <>
      <PageBanner hideLine />
      <div className="py-10 max-w-7xl mx-auto px-8" lang="ko">
        <header className="mb-8 pb-6 border-b border-slate-200">
          <div className="flex items-center gap-3 mb-5">
            <h1 className="page-title">Open Positions</h1>
          </div>
          <p className="font-academic text-slate-700 leading-relaxed text-sm">
            원자 수준 소재 모델링과 AI·데이터 기반 소재 연구를 함께할 대학원생과 2027년 동계 인턴을 모집하고 있습니다.
            관심 연구 주제와 진학 계획을 알려주시면 연구실 참여에 대해 상담하실 수 있습니다.
          </p>
        </header>

        <section aria-labelledby="graduate-heading" className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h2 id="graduate-heading" className="section-title">대학원생 모집</h2>
            <span className="text-xs font-medium text-tertiary bg-slate-50 px-2 py-1 rounded-sm whitespace-nowrap">모집 중</span>
          </div>
          <div className="grid md:grid-cols-12 gap-2 md:gap-4">
            <h3 className="md:col-span-3 font-sans font-bold text-base text-primary leading-snug">
              Graduate Students
              <span className="block text-xs font-medium mt-1">M.S. / Integrated M.S.–Ph.D. / Ph.D.</span>
            </h3>
            <div className="md:col-span-9 space-y-2 text-sm text-slate-700 font-academic leading-relaxed">
              <p>2027학년도 석사·석박사통합·박사과정 대학원생을 모집하고 있습니다. 지원 가능 과정과 모집 인원은 이메일로 상담해 주세요.</p>
              <p>재료공학·물리·화학·화학공학·컴퓨터과학 등 관련 전공자를 대상으로 하며, Python 프로그래밍과 원자 수준 소재 모델링에 관심 있는 학생을 환영합니다.</p>
              <p>Materials Modeling, MLIP, Materials Data Science 및 자동화 계산을 통해 반도체 소재의 결함·계면, 전기화학 소재와 Ionic Conductors의 구조–물성 관계를 연구합니다.</p>
            </div>
          </div>
        </section>

        <section aria-labelledby="admissions-heading" className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <h2 id="admissions-heading" className="section-title">원서 접수 일정</h2>
          </div>
          <ul className="divide-y divide-slate-100 border-y border-slate-100" aria-label="DGIST 대학원 원서 접수 일정">
            {graduateApplications.map((application) => (
              <li key={application.id} className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_1.25fr_auto] gap-x-4 gap-y-1 py-3">
                <h3 className="font-sans text-sm font-bold text-primary leading-relaxed">{application.title}</h3>
                <p className="col-start-1 row-start-2 md:col-start-2 md:row-start-1 text-sm font-academic text-slate-700 leading-relaxed">{application.period}</p>
                <span className="col-start-2 row-start-1 md:col-start-3 self-start text-xs font-medium text-tertiary bg-slate-50 px-2 py-1 rounded-sm whitespace-nowrap">{applicationStatus(application)}</span>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
            <a href={recruitmentSources.admissions} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-bold text-tertiary hover:underline underline-offset-4">DGIST 공식 모집요강 <ArrowUpRight size={13} aria-hidden="true" /></a>
            <p className="text-xs font-academic text-slate-600 leading-relaxed">접수 시각과 제출 서류는 지원 전 공식 모집요강에서 확인해 주세요.</p>
          </div>
        </section>

        <section aria-labelledby="internship-heading" className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h2 id="internship-heading" className="section-title">동계 인턴 프로그램</h2>
            <span className="text-xs font-medium text-tertiary bg-slate-50 px-2 py-1 rounded-sm whitespace-nowrap">모집 중</span>
          </div>
          <div className="grid md:grid-cols-12 gap-3 md:gap-4">
            <div className="md:col-span-3">
              <h3 className="font-sans font-bold text-base text-primary leading-snug">Winter Internship<span className="block text-xs font-medium mt-1">2027년 1월 · 4주</span></h3>
              <span className="inline-block mt-2 text-xs font-medium text-tertiary bg-slate-50 px-2 py-1 rounded-sm">공식 신청: {applicationStatus(winterInternship)}</span>
            </div>
            <div className="md:col-span-9 space-y-4 text-sm text-slate-700 font-academic leading-relaxed">
              <p>DGIST 대학원 동계 인턴 프로그램은 방학 중 연구실의 실제 연구에 참여하며 대학원 생활을 경험하는 프로그램입니다. 우리 연구실은 2027년 동계 인턴 참여연구실로 등록되어 있으며, 인턴 지원자를 모집하고 있습니다.</p>
              <dl className="grid grid-cols-[5.25rem_1fr] gap-x-3 gap-y-2">
                <dt className="font-medium text-primary">신청 기간</dt><dd>{winterInternship.period} <span className="text-xs">(한국시간)</span></dd>
                <dt className="font-medium text-primary">활동 기간</dt><dd><time dateTime="2027-01-04">2027. 1. 4.(월)</time> – <time dateTime="2027-01-29">1. 29.(금)</time></dd>
                <dt className="font-medium text-primary">지원 대상</dt><dd>DGIST 및 타 대학 재학생·휴학생·졸업생</dd>
                <dt className="font-medium text-primary">합격자 발표</dt><dd>2026. 11. 30.(월)</dd>
                <dt className="font-medium text-primary">합격자 등록</dt><dd>2026. 12. 1.(화) – 12. 15.(화)</dd>
                <dt className="font-medium text-primary">생활관</dt><dd>희망자 별도 신청</dd>
              </dl>
              <div>
                <h4 className="text-base font-bold text-primary mb-2">우리 연구실의 인턴 연구 주제</h4>
                <ul className="list-disc pl-4 space-y-1">
                  <li>제일원리 계산을 이용한 반도체 소재의 결함 구조 예측</li>
                  <li>머신러닝 분자동역학을 이용한 전기촉매 표면 구조 예측</li>
                  <li>데이터 사이언스를 활용한 소재 데이터베이스 분석</li>
                </ul>
              </div>
              <p>사전 상담을 희망하는 분은 관심 주제를 이메일로 문의해 주세요. 상담 여부와 별도로 접수 기간 내 DGIST 공식 신청 페이지에서 지원해야 합니다.</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                <a href={recruitmentSources.internshipApplication} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-bold text-tertiary hover:underline underline-offset-4">인턴 프로그램 신청 <ArrowUpRight size={13} aria-hidden="true" /></a>
                <a href={recruitmentSources.internshipNotice} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-tertiary hover:underline underline-offset-4">공식 모집 공고 <ArrowUpRight size={13} aria-hidden="true" /></a>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="projects-heading" className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h2 id="projects-heading" className="section-title">관심 연구 분야</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {[
              { title: 'AI-accelerated Materials Discovery', description: '데이터 기반 스크리닝과 생성 모델을 활용한 Ionic Conductors 등 기능성 소재 탐색' },
              { title: 'Operando Surface Modeling', description: '실제 구동 환경에서 전기촉매 표면의 구조 변화와 반응성을 이해하는 원자 수준 모델링' },
              { title: 'Defects & Materials Data Science', description: '반도체·산화물 소재의 결함과 물성을 예측하고 소재 데이터베이스에서 구조–물성 관계 분석' },
            ].map((project) => (
              <motion.div key={project.title} whileHover={{ x: 4 }} className="bg-white border border-slate-100 p-4 transition-all rounded-sm">
                <h3 className="font-sans font-bold text-base text-primary mb-2 leading-snug">{project.title}</h3>
                <p className="text-slate-700 font-academic text-sm leading-relaxed">{project.description}</p>
              </motion.div>
            ))}
          </div>
          <Link to="/research" className="inline-flex items-center gap-1 mt-3 text-xs font-bold text-tertiary hover:underline underline-offset-4">Research에서 더 알아보기 <ArrowUpRight size={13} aria-hidden="true" /></Link>
        </section>

        <section aria-labelledby="postdoc-heading" className="mb-8 border-t border-slate-100 pt-5">
          <div className="grid md:grid-cols-12 gap-2 md:gap-4">
            <h2 id="postdoc-heading" className="md:col-span-3 section-title">Postdoctoral Researchers</h2>
            <p className="md:col-span-9 font-academic text-sm text-slate-700 leading-relaxed">관련 분야 박사학위와 DFT 또는 분자동역학 연구 경험을 갖춘 연구자의 지원 문의도 환영합니다. MLIP나 구조 탐색 경험이 있는 분은 관심 연구 주제와 함께 연락해 주세요.</p>
          </div>
        </section>

        <section aria-labelledby="apply-heading" className="bg-primary text-white p-6 md:p-8 rounded-sm">
          <h2 id="apply-heading" className="section-title mb-2 text-white">지원 및 사전 상담</h2>
          <p className="font-academic text-sm text-slate-100 leading-relaxed mb-5">사전 상담을 원하시면 관심 연구 주제, 희망 과정과 참여 시기를 이메일로 알려주세요. 상담 여부와 별도로 대학원 원서와 인턴 신청서는 접수 기간 내 DGIST 공식 절차에 따라 제출해야 합니다.</p>
          <div className="grid md:grid-cols-2 gap-5 md:gap-8 border-t border-white/20 pt-5">
            <div>
              <h3 className="text-xs font-bold text-accent-blue mb-3">상담 시 함께 보내주실 자료</h3>
              <ul className="space-y-2">
                {['간단한 자기소개와 관심 연구 주제', '이력서 (CV)', '성적증명서 (학생 지원자)'].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm font-academic text-slate-100"><CheckCircle2 size={15} className="text-accent-blue shrink-0" aria-hidden="true" />{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-bold text-accent-blue mb-1">이태훈 교수 · DGIST 에너지공학과</h3>
              <p className="text-xs font-medium text-slate-100 mb-3">반도체공학과 겸임교수</p>
              <a href="mailto:taehun.lee@dgist.ac.kr" className="text-base font-extrabold text-white hover:text-accent-blue transition-colors inline-flex items-center gap-2 break-all"><Mail size={18} className="shrink-0" aria-hidden="true" />taehun.lee@dgist.ac.kr</a>
            </div>
          </div>
        </section>
        <p className="mt-4 text-xs font-academic text-slate-500 leading-relaxed">공식 일정 확인: {recruitmentSources.verifiedOn} · 전형·프로그램별 상세 조건은 링크된 DGIST 공고를 기준으로 확인해 주세요.</p>
      </div>
    </>
  );
}
