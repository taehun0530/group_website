export interface UndergraduateAlumnus {
  id: string;
  name: string;
  koreanName: string;
  period: string;
  next?: string;
}

export interface InternshipParticipant {
  id: string;
  name: string;
  affiliation?: string;
}

export interface InternshipCohort {
  id: string;
  year: number;
  term: string;
  title: string;
  startDate: string;
  endDate: string;
  period: string;
  description: string;
  activities: string[];
  participants: InternshipParticipant[];
}

export const undergraduateAlumni: UndergraduateAlumnus[] = [
  {
    id: 'junhyun-moon',
    name: 'Junhyun Moon',
    koreanName: '문준현',
    period: '2024.04 – 2025.12',
    next: 'Currently Integrated Course at KAIST',
  },
  {
    id: 'changgyu-cho',
    name: 'Changgyu Cho',
    koreanName: '조창규',
    period: '2024.07 – 2025.12',
    next: 'LG Energy Solution, United States',
  },
  {
    id: 'junho-lee',
    name: 'Junho Lee',
    koreanName: '이준호',
    period: '2023.12 – 2025.06',
    next: 'Currently Integrated Course at KIST',
  },
];

// This cohort and its participants are already documented in summer-internship-2026 in news.json.
export const internshipCohorts: InternshipCohort[] = [
  {
    id: '2026-summer',
    year: 2026,
    term: 'Summer',
    title: '2026 Summer Research Internship',
    startDate: '2026-07-06',
    endDate: '2026-07-31',
    period: 'July 6–31, 2026',
    description: 'Hands-on tutorials in ASE, MLIP-MD, and symbolic regression, followed by team presentations.',
    activities: [
      'ASE tutorials',
      'MLIP-MD tutorials',
      'Symbolic regression tutorials',
      'Team presentations',
    ],
    participants: [
      { id: '2026-summer-01', name: '석일현', affiliation: 'Pukyong National University' },
      { id: '2026-summer-02', name: '김지환', affiliation: 'Dankook University' },
      { id: '2026-summer-03', name: '박민주', affiliation: 'Chung-Ang University' },
      { id: '2026-summer-04', name: '전재영', affiliation: 'Pusan National University' },
      { id: '2026-summer-05', name: '김찬주', affiliation: 'Jeonbuk National University' },
    ],
  },
];
