export type RecruitmentTopicLanguage = 'en' | 'ko';

export interface RecruitmentTopic {
  id: string;
  title: string;
  description: Record<RecruitmentTopicLanguage, string>;
}

export const recruitmentTopics: RecruitmentTopic[] = [
  {
    id: 'ai-materials-discovery',
    title: 'AI-accelerated Materials Discovery',
    description: {
      en: 'Explore functional materials, including Ionic Conductors, through data-driven screening and generative models.',
      ko: '데이터 기반 스크리닝과 생성 모델을 활용한 Ionic Conductors 등 기능성 소재 탐색',
    },
  },
  {
    id: 'operando-surface-modeling',
    title: 'Operando Surface Modeling',
    description: {
      en: 'Use atomistic modeling to understand structural changes and reactivity of electrocatalyst surfaces under operating conditions.',
      ko: '실제 구동 환경에서 전기촉매 표면의 구조 변화와 반응성을 이해하는 원자 수준 모델링',
    },
  },
  {
    id: 'defects-materials-data-science',
    title: 'Defects & Materials Data Science',
    description: {
      en: 'Predict defects and properties of semiconductor and oxide materials, and analyze structure–property relationships in materials databases.',
      ko: '반도체·산화물 소재의 결함과 물성을 예측하고 소재 데이터베이스에서 구조–물성 관계 분석',
    },
  },
  {
    id: 'semiconductor-process-modeling',
    title: 'Semiconductor Process Modeling',
    description: {
      en: 'Model growth and process environments with MLIPs. Combine experimental and simulation data to predict process conditions, assess synthesizability, and tune materials properties.',
      ko: 'MLIP를 활용한 성장·공정 환경 모델링과 실험·시뮬레이션 데이터 통합을 통해 공정 조건 예측, 합성 가능성 평가 및 물성 제어',
    },
  },
];
