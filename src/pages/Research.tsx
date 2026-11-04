import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Microscope, Database, BookOpen, ArrowUpRight, Zap, Waves, Activity, Battery, Layers, Search, Hexagon, RefreshCcw, FileText, HelpCircle, Cpu } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { publications as globalPublications } from './Publications';
import ImageModal from '../components/ImageModal';

const themes = [
  {
    id: 'complex-structure',
    title: 'Complex Structure Discovery',
    icon: <Search size={24} />,
    desc: 'We go beyond idealized structural models to predict surface reconstructions, defect arrangements, interfacial structures, amorphous phases, and nanostructures that emerge under realistic conditions. To achieve this, we combine active-learning MLIPs, global optimization, and large-scale atomistic sampling to explore complex potential-energy landscapes and construct realistic structural ensembles. Our goal is not only to identify what structures exist, but also to understand why they form and remain stable from the perspectives of thermodynamics and kinetics.',
    descKr: '우리는 이상화된 구조 모델을 넘어, 실제 조건에서 형성되는 표면 재구성, 결함 배열, 계면 구조, 비정질상, 나노구조 및 나노입자 형상을 예측합니다. 이를 위해 active-learning MLIPs, 전역 최적화, 알고리즘 기반 구조 샘플링 기법을 결합하여 복잡한 potential-energy landscape를 탐색하고, 구조 ensemble을 구축합니다. 우리의 목표는 어떤 구조가 존재하는지를 규명하는 데 그치지 않고, 그 구조가 왜 형성되고 안정화되는지를 열역학과 동역학의 관점에서 이해하는 것입니다',
    image: '/images/topic1.png',
    methodology: 'Active-Learning MLIPs, Global Optimization, DFT, Large-Scale Molecular Dynamics',
    questions: [
      'How can advanced sampling, global optimization, and MLIP-enabled large-scale simulations be used to identify and predict surface reconstructions, defect arrangements, interfacial structures, amorphous phases, and nanostructures beyond idealized structural models?',
      'How do these realistic structural ensembles govern materials properties, reactivity, and structure–property relationships?'
    ],
    publications: [
      { 
        doi: 'https://doi.org/10.1002/eem2.70328', 
        tags: ['Battery', 'Lithiation', 'Global Optimization'],
        methods: 'Global Optimization, DFT, Active-Learning MLIPs'
      },
      { 
        doi: 'https://doi.org/10.1021/jacs.4c17739', 
        tags: ['Photoelectrochemistry', 'MLIP', 'Global Optimization'],
        methods: 'Active-Learning MLIPs, Global Optimization, DFT'
      },
      { 
        doi: 'https://doi.org/10.1016/j.actamat.2025.121313', 
        tags: ['Semiconductor', 'Amorphous', 'Experiment Collaboration', 'DFT'],
        methods: 'DFT, Structure Ensembles'
      }
    ]
  },
  {
    id: 'operando-reactivity',
    title: 'Electrochemical Interfacial Reactivity',
    icon: <Waves size={24} />,
    desc: 'We investigate how the stability and reactivity of surfaces and interfaces evolve with changes in potential, electrolyte, pH, composition, and defects. By combining ab initio surface thermodynamics, grand-canonical approaches, charge-aware MLIP-MD, and explicit/implicit aqueous-interface modeling, we track structural evolution under realistic operating conditions. A major focus of this theme is to understand how surface reconstruction, hydration, defect chemistry, and electron/hole localization govern charge-carrier dynamics, catalytic reactivity, properties, and stability in photoelectrochemical and electrocatalytic systems.\n\nWe also investigate kinetic reaction pathways to understand how surface and interfacial structures evolve during catalytic processes under realistic environments. Beyond reactivity, we use atomistic modeling to identify degradation mechanisms in catalytic systems, revealing how structural transformation, defect formation, and environmental effects influence electrochemical stability.',
    descKr: '우리는 전위, 전해질, pH, 조성, 결함 변화에 따라 표면과 계면의 안정성 및 반응성이 어떻게 변화하는지를 연구합니다. 이를 위해 ab initio surface thermodynamics, grand-canonical 접근, charge-aware MLIP-MD, 그리고 explicit/implicit aqueous-interface modeling을 결합하여, 실제 구동 환경에서의 구조 변화를 추적합니다. 표면 재구성, 수화, 결함 공학, 그리고 전자/정공 국소화가 광전기화학 및 전기촉매 시스템에서 전하 운반자 동역학, 촉매 반응성, 물성, 안정성에 어떻게 영향을 주는지를 이해하는 것 입니다.\n\n또한 우리는 현실적인 환경에서 촉매 과정이 진행되는 동안 표면 및 계면 구조가 어떻게 진화하는지를 이해하기 위해 반응의 속도론적 경로도 함께 연구합니다. 더 나아가 반응성 분석을 넘어, 촉매 시스템에서 열화 메커니즘을 규명하기 위해 원자 수준 모델링을 활용하며, 이를 통해 구조 변화, 결함 형성, 환경 효과가 전기화학적 안정성에 어떤 영향을 미치는지를 밝히고자 합니다.',
    image: '/images/topic2.png',
    methodology: 'Surface Thermodynamics, Grand-Canonical Methods, (Charge-Aware) MLIP-MD, Explicit/implicit Aqueous-Interface Modeling',
    questions: [
      'How do potential, electrolyte, pH, composition, and defects reshape the stability, reactivity, and interfacial charge-carrier behavior of surfaces and interfaces under operating conditions?',
      'How do surface reconstruction, hydration, oxidation-state changes, defect chemistry, and electron/hole localization govern reaction pathways, charge-carrier dynamics, durability, and measurable functionality in photoelectrochemical and electrocatalytic systems?'
    ],
    publications: [
      { 
        doi: 'https://doi.org/10.1021/acsenergylett.2c00319',
        tags: ['Photoelectrochemistry', 'DFT', 'Aqueous Interface'],
        methods: 'Surface Thermodynamics, DFT'
      },
      { 
        doi: 'https://doi.org/10.1002/advs.202514939',
        tags: ['Electrocatalysis', 'DFT', 'Operando Reactivity'],
        methods: 'Grand-Canonical Methods, DFT'
      },
      { 
        doi: 'https://doi.org/10.1038/s41467-025-67318-y',
        tags: ['Electrocatalysis', 'Experiment Collaboration', 'Disorder'],
        methods: 'MD Simulations, Structure Transformation'
      },
      { 
        doi: 'https://doi.org/10.1002/adfm.202316446',
        tags: ['Battery', 'Experiment Collaboration', 'Defect Chemistry'],
        methods: 'Defect Chemistry, DFT'
      }
    ]
  },
  {
    id: 'data-driven-inverse',
    title: 'Data-Driven Materials Design',
    icon: <Database size={24} />,
    desc: 'We use data-driven machine learning and materials-informatics approaches to learn structure–property relationships, explore and generate materials spaces, and rapidly identify promising candidates for targeted applications. By combining data mining, graph-based and transformer-based representations, symbolic regression, generative modeling, and uncertainty quantification, we aim to establish design rules for ionic conductors, semiconductors, and electrochemical materials. The goal of this theme is to go beyond predictive accuracy by deriving interpretable descriptors, quantifying model confidence, and developing actionable inverse-design strategies that connect candidate generation with experimentally relevant materials discovery.',
    descKr: '우리는 데이터 기반 머신러닝과 소재정보학 접근법을 활용하여 구조–물성 관계를 학습하고, 소재 공간을 탐색·생성하며, 목표 응용에 적합한 유망 후보를 빠르게 발굴하고자 합니다. 데이터 마이닝, graph 기반 및 transformer 기반 표현, symbolic regression, 생성 모델, 그리고 불확실성 정량화를 결합하여 이온전도체, 반도체, 전기화학 소재에 대한 설계 규칙을 확립하는 것을 목표로 합니다. 이 주제의 목표는 단순한 예측 정확도를 넘어서, 해석 가능한 descriptor를 도출하고 모델의 신뢰도를 정량화하며, 후보 생성과 실험적으로 의미 있는 소재 발굴을 연결하는 실질적인 역설계 전략을 구축하는 것입니다.',
    image: '/images/topic3.png',
    methodology: 'Data Mining, Graph/Transformer Representations, Symbolic Regression, Generative Models, Uncertainty Quantification',
    questions: [
      'How can data-driven models learn structure–property relationships and rapidly identify promising material candidates across complex materials spaces?',
      'How can interpretable descriptors, uncertainty quantification, and generative models enable actionable design rules for inverse materials design?'
    ],
    publications: [
      { 
        doi: 'https://doi.org/10.1039/D4TA04553J', 
        tags: ['Solid Electrolytes', 'Data Mining', 'Materials Screening'],
        methods: 'Data Mining, Graph Representations, Transformers, Symbolic Regression, Generative Models, Uncertainty Quantification'
      }
    ]
  }
];

const getTagColor = (tag: string) => {
  const t = tag.toLowerCase();
  // Variations within blue/indigo/slate family
  if (t.includes('battery') || t.includes('lithiation') || t.includes('energy')) return 'bg-blue-50 text-copy border-blue-100/50';
  if (t.includes('mlip') || t.includes('machine learning') || t.includes('ai') || t.includes('data-driven')) return 'bg-sky-50 text-copy border-sky-100/50';
  if (t.includes('photoelectrochemistry') || t.includes('catalysis') || t.includes('reactivity')) return 'bg-indigo-50 text-copy border-indigo-100/50';
  if (t.includes('semiconductor') || t.includes('dft') || t.includes('computation')) return 'bg-slate-50 text-copy border-slate-200/50';
  if (t.includes('experiment') || t.includes('collaboration')) return 'bg-cyan-50 text-copy border-cyan-100/50';
  if (t.includes('optimization') || t.includes('inverse design')) return 'bg-blue-100/30 text-copy border-blue-200/30';
  if (t.includes('defect') || t.includes('structure') || t.includes('identification') || t.includes('amorphous')) return 'bg-slate-100 text-copy border-slate-200/50';
  return 'bg-blue-50/50 text-copy border-blue-100/30';
};

import PageBanner from '../components/PageBanner';

const Research = () => {
  const location = useLocation();
  const [activeTheme, setActiveTheme] = useState(themes[0].id);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' });

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setModalOpen(true);
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const themeId = params.get('theme');
    if (themeId && themes.some(t => t.id === themeId)) {
      setActiveTheme(themeId);
      // Small timeout to ensure the DOM is ready if it's the first mount
      setTimeout(() => {
        const element = document.getElementById('research-themes');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.search]);

  const currentTheme = themes.find(t => t.id === activeTheme)!;

  return (
    <>
    <PageBanner hideLine />
    <div id="research-content" className="subsection-title text-copy py-10 max-w-7xl mx-auto px-8 relative overflow-hidden">
      {/* Header Section */}
      <header className="relative z-10 mb-8">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="page-title text-ink">Research</h1>
        </div>
      </header>

        {/* Intro Text */}
        <section className="relative z-10">
          {/* Text Content */}
          <div className="w-full space-y-4">
            <div className="text-body text-copy">
              <p className="text-body mb-2">Our research spans three interconnected themes:</p>
              <ul className="bullet-list text-body text-copy text-left">
                <li>Identify active motifs in realistic complex structures.</li>
                <li>Understand the stability and reactivity of surfaces and interfaces under operating conditions.</li>
                <li>Establish data-driven design rules for property prediction and inverse design.</li>
              </ul>
            </div>
            <div className="text-body text-copy" lang="ko">
              <p className="text-body mb-2">전산재료과학 및 머신러닝 기반 모델링을 통해 세 가지 연구 주제를 탐구합니다.</p>
              <ul className="bullet-list text-body text-copy text-left">
                <li>실제 조건에서 형성되는 복잡한 구조의 활성 motif를 규명합니다.</li>
                <li>구동 환경에서 표면과 계면의 안정성 및 반응성을 이해합니다.</li>
                <li>데이터 기반 물성 예측과 역설계를 위한 소재 설계 규칙을 확립합니다.</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 h-[1px] bg-slate-200" />
        </section>

      <div id="research-themes" className="subsection-title relative z-10 grid grid-cols-1 md:grid-cols-10 gap-10 py-10">
        {/* Sidebar Navigation */}
        <aside className="md:col-span-2 h-fit md:sticky md:top-32">
          <nav className="flex flex-col gap-4">
            <div className="subsection-title text-ink py-2 border-b border-slate-200">Research Themes</div>
            {themes.map((theme) => (
              <button
                key={theme.id}
                onClick={() => setActiveTheme(theme.id)}
                className={`group flex items-center gap-3 py-1 text-left transition-all ${activeTheme === theme.id ? 'translate-x-2' : 'hover:translate-x-1'}`}
              >
                <span className={`h-[1px] transition-all ${activeTheme === theme.id ? 'w-8 bg-tertiary' : 'w-5 bg-slate-200 group-hover:bg-tertiary'}`}></span>
                <span className="nav-link text-ink">
                  {theme.title}
                </span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Dynamic Research Content */}
        <div className="md:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTheme}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-8"
            >
              {/* 1. Title Section */}
              <div className="flex items-center gap-3 mb-4">
                <h2 className="section-title text-ink">{currentTheme.title}</h2>
              </div>

              {/* 2 & 3. Research Questions & Methodologies */}
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-3">
                  {currentTheme.questions && (
                    <div className="p-4 bg-slate-50 border border-slate-100">
                      <h4 className="subsection-title text-ink mb-3">
                        Research Questions
                      </h4>
                      <ul className="bullet-list text-body text-copy">
                        {(Array.isArray(currentTheme.questions) ? currentTheme.questions : [currentTheme.questions]).map((q) => (
                          <li key={q}>"{q}"</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="p-4 bg-primary text-on-dark">
                  <h4 className="subsection-title mb-3 text-on-dark">
                    Methodologies
                  </h4>
                  <ul className="bullet-list text-body text-on-dark">
                    {currentTheme.methodology.split(',').map((method) => <li key={method.trim()}>{method.trim()}</li>)}
                  </ul>
                </div>
              </div>

              {/* 4. General Description (Bilingual) + Image (7:3 ratio) */}
              <div className="py-6 border-y border-slate-100/50">
                <h4 className="subsection-title text-ink mb-4 flex items-center gap-1.5">
                  <FileText size={12} className="text-copy" />
                  Description
                </h4>
                <div className="flex flex-col gap-6">
                  <div className="space-y-6">
                    <div className="space-y-6">
                      {currentTheme.desc.split('\n\n').map((para, i) => (
                        <div key={i} className="flex flex-col gap-8">
                          <p className="text-body text-copy text-left">
                            {para}
                          </p>
                          {i === 0 && (
                            <div className="w-full flex justify-center py-2">
                              <div 
                                className="w-full max-w-[563px] bg-slate-50 border border-slate-100 flex items-center justify-center overflow-hidden shadow-sm rounded-sm cursor-pointer group relative"
                                onClick={() => openModal(currentTheme.image, currentTheme.title)}
                              >
                                <img 
                                  src={currentTheme.image} 
                                  alt={currentTheme.title} 
                                  className="w-full h-auto group-hover:opacity-90 transition-opacity"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                  <div className="text-meta bg-primary/60 text-on-dark px-3 py-1.5 rounded-full backdrop-blur-sm">
                                    Click to Enlarge
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 space-y-4">
                      {currentTheme.descKr.split('\n\n').map((para, i) => (
                        <p key={i} className="text-body text-copy break-keep text-left">
                          {para}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* 5. Related Publications */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="subsection-title text-ink flex items-center gap-2">
                    <BookOpen size={12} className="text-ink" />
                    Related Lab Publications
                  </h4>
                </div>
                <div className="flex flex-col">
                  {[...currentTheme.publications]
                    .map(pubRef => {
                      const globalPub = globalPublications.find(p => p.doi === pubRef.doi);
                      return { ...globalPub, ...pubRef }; // Merge, but pubRef (tags) should take precedence if needed
                    })
                    .sort((a, b) => {
                      const yearA = parseInt(a.year) || 0;
                      const yearB = parseInt(b.year) || 0;
                      return yearB - yearA;
                    })
                    .map((pub: any, idx: number) => {
                      const isLink = !!pub.doi;
                      const PubWrapper = isLink ? 'a' : 'div';
                      return (
                        <PubWrapper 
                          key={idx}
                          {...(isLink ? { href: pub.doi, target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className={`py-3 border-b border-slate-100 last:border-0 group flex items-start justify-between gap-4 px-2 -mx-2 rounded-sm ${isLink ? 'hover:bg-slate-50/50 transition-colors cursor-pointer' : ''}`}
                        >
                          <div className="flex-1 flex flex-col gap-2">
                            {(pub.year || pub.journal || pub.if) && (
                              <p className="text-body text-copy italic flex items-center gap-2 flex-wrap">
                                {pub.year && <span className="font-bold not-italic text-ink">{pub.year}</span>}
                                {pub.journal && <span>{pub.journal}</span>}
                                {pub.if && <span className="text-ink font-semibold not-italic whitespace-nowrap ml-1">IF: {pub.if}</span>}
                              </p>
                            )}
                            {pub.tags && (
                              <div className="flex flex-wrap gap-1.5 mt-0.5">
                                {pub.tags.map((tag: string) => (
                                  <span key={tag} className={`text-meta px-1.5 py-0.5 rounded-sm transition-colors border ${getTagColor(tag)}`}>{tag}</span>
                                ))}
                              </div>
                            )}
                          </div>
                          {isLink && <ArrowUpRight size={12} className="text-ink transition-all shrink-0 mt-1.5" />}
                        </PubWrapper>
                      );
                    })}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
    <ImageModal 
      isOpen={modalOpen} 
      onClose={() => setModalOpen(false)} 
      imageSrc={selectedImage.src} 
      imageAlt={selectedImage.alt} 
    />
    </>
  );
};

export default Research;
