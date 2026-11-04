export const recruitmentSources = {
  verifiedOn: '2026. 11. 2.',
  admissions: 'https://www.dgist.ac.kr/gadm/sub02_01.do',
  internshipNotice: 'https://www.dgist.ac.kr/bbs/BBSMSTR_000000000352/view.do?nttId=B000000112394Bg0oU1',
  internshipApplication: 'https://www.dgist.ac.kr/prog/gradInternPrgrm/college/sub05_02_03/main.do',
};

export interface ApplicationWindow {
  id: string;
  title: string;
  titleEn?: string;
  startsOn: string;
  endsOn: string;
  period: string;
  opensAt?: string;
  closesAt?: string;
}

export const graduateApplications: ApplicationWindow[] = [
  { id: 'spring-2027-third', title: '2027학년도 봄학기 3차', titleEn: 'Spring 2027 · Third Round', startsOn: '2026-11-05', endsOn: '2026-11-19', period: '2026. 11. 5.(목) – 11. 19.(목)' },
  { id: 'fall-2027', title: '2027학년도 가을학기', titleEn: 'Fall 2027', startsOn: '2027-04-08', endsOn: '2027-04-22', period: '2027. 4. 8.(목) – 4. 22.(목)' },
];

export const winterInternship: ApplicationWindow = {
  id: 'winter-2027',
  title: '2027년 DGIST 대학원 동계 인턴 프로그램',
  titleEn: '2027 DGIST Graduate Winter Internship',
  startsOn: '2026-11-04',
  endsOn: '2026-11-13',
  opensAt: '2026-11-04T09:00:00+09:00',
  closesAt: '2026-11-13T16:00:00+09:00',
  period: '2026. 11. 4.(수) 09:00 – 11. 13.(금) 16:00',
};

/** Graduate admissions publishes dates only; internship times are explicitly KST. */
export function applicationStatus(window: ApplicationWindow, now = Date.now()) {
  const today = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(now);
  const beforeOpening = window.opensAt ? now < Date.parse(window.opensAt) : today < window.startsOn;
  const afterClosing = window.closesAt ? now >= Date.parse(window.closesAt) : today > window.endsOn;
  if (beforeOpening) return '접수 예정';
  if (afterClosing) return '접수 종료';
  return '접수 기간';
}
