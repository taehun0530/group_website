import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Database, Brain, Globe, FlaskConical, BarChart3, Zap, Waves, Battery, Layers, Search, Activity, Atom, Server, Sun, Hexagon, ArrowDown, Cpu, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageModal from '../components/ImageModal';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' });

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    setModalOpen(true);
  };
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative z-10 min-h-[35vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-100">
          <img 
            src="/images/main_banner.jpg" 
            alt="Atomic structure visualization" 
            className="w-full h-full object-cover object-left"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-y-0 left-0 w-[80%] md:w-[70%] bg-gradient-to-r from-primary/100 via-primary/85 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full py-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl space-y-3"
          >
            <h1 className="hero-title text-white">
              Materials Modeling and Machine Learning for <br className="hidden md:block" /><span className="text-accent-blue">Structure–Property Relationships</span>
            </h1>
            <div className="flex flex-wrap items-center gap-2 md:gap-3 pt-4">
              <div className="flex items-center gap-2 text-white">
                <Server size={14} className="text-accent-blue" />
                <span className="text-meta pt-0.5">Computation</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Atom size={14} className="text-accent-blue" />
                <span className="text-meta pt-0.5">Materials Modeling</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Brain size={14} className="text-accent-blue" />
                <span className="text-meta pt-0.5">Machine Learning</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <Activity size={14} className="text-accent-blue" />
                <span className="text-meta pt-0.5">Structure–Property<br/>Relationships</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Group Intro Section */}
      <section className="relative z-10 py-10 bg-transparent overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Small Label */}
            <div className="flex items-center gap-3 mb-6">
              <h2 className="section-title">Group Introduction</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-10">
              {/* Left Section: English Text (ratio 4/10) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative">
                  <p className="text-body text-slate-800 text-left">
                    <Link to="/profile/taehun-lee" className="font-bold text-primary hover:underline underline-offset-2">Professor Taehun Lee</Link> leads our group in the <a href="https://www.dgist.ac.kr/energy/" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline underline-offset-2">Department of Energy Science and Engineering</a> at Daegu Gyeongbuk Institute of Science & Technology (DGIST), with a joint appointment in the <a href="https://www.dgist.ac.kr/semi/index.do" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:underline underline-offset-2">Department of Semiconductor Engineering</a>. We combine computational materials science, quantum-mechanical simulations, and machine learning to understand and design functional materials.
                  </p>
                </div>
                <div>
                  <p className="text-body text-slate-600 text-left">
                    We focus on how atomic-scale structures, defects, interfaces, and chemical environments govern materials properties under realistic operating conditions. By integrating density functional theory (DFT), molecular dynamics, machine-learned interatomic potentials, and automated workflows, we aim to establish design principles for advanced energy and electronic materials.
                  </p>
                </div>
              </div>

              {/* Right Section: Lab Introduction Image (ratio 6/10) */}
              <div className="lg:col-span-7 flex items-center justify-center overflow-hidden relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-full max-w-2xl mx-auto cursor-pointer group"
                  onClick={() => openModal("/images/lab-introduction.png", "Laboratory Overview Diagram")}
                >
                  <img 
                    src="/images/lab-introduction.png" 
                    alt="Laboratory Overview Diagram" 
                    className="w-full h-auto rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 group-hover:opacity-90 transition-opacity"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="text-meta bg-primary/60 text-white px-3 py-1.5 rounded-full backdrop-blur-sm">
                      Click to Enlarge
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom Section: Full Width Korean Text (Matching Research Overview format) */}
            <div className="mt-6 space-y-3" lang="ko">
              <p className="text-body text-slate-600 text-left break-keep">
                본 연구실은 DGIST 에너지공학과 이태훈 교수가 이끌며, 이 교수는 반도체공학과 겸임교수로도 재직하고 있습니다. 계산재료과학, 양자역학 기반 시뮬레이션, 머신러닝을 결합하여 기능성 소재를 이해하고 설계하며, 원자 수준의 구조, 결함, 계면이 소재 물성에 어떻게 영향을 주는지 연구합니다.
              </p>
              <p className="text-body text-slate-600 text-left break-keep">
                DFT, 분자동역학, MLIP, 자동화 계산 워크플로우를 통합하여 차세대 에너지 및 전자 소재의 설계 원리를 확립하는 것을 목표로 합니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="h-px bg-slate-200" />
      </div>

      {/* Research Overview */}
      <section className="relative z-10 py-10 bg-transparent">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="section-title">Research Overview</h2>
          </div>
          
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <p className="text-body text-slate-700 text-left">
                We combine computational materials science and machine learning to understand, predict, and design the structure, stability, reactivity, and performance of functional materials at the atomic scale under realistic operating conditions.
              </p>
            </div>

            <div className="w-full flex justify-center">
              <motion.div 
                whileHover={{ scale: 1.002 }}
                className="w-full max-w-2xl overflow-hidden bg-white shadow-sm border border-slate-100 rounded-sm cursor-pointer group relative"
                onClick={() => openModal("/images/overall.png", "Research Overall Graphic")}
              >
                <img 
                  src="/images/overall.png" 
                  alt="Research Overall Graphic" 
                  className="w-full h-auto group-hover:opacity-90 transition-opacity"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-meta bg-primary/60 text-white px-3 py-1.5 rounded-full backdrop-blur-sm">
                    Click to Enlarge
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-body text-slate-700 text-left">
                  Building on physics-based modeling with density functional theory (DFT), we integrate machine-learned interatomic potentials (MLIPs), automated computational workflows, data-driven screening, and generative models to investigate complex surfaces, interfaces, defects, amorphous structures, and their structure–property relationships.
                </p>
                <p className="text-body text-slate-700 text-left">
                  Our primary materials of interest include photoelectrochemical and electrocatalytic oxides, high-k dielectric oxides, and their nanostructured and disordered forms.
                </p>
              </div>
              <div className="space-y-4" lang="ko">
                <p className="text-body text-slate-600 text-left break-keep">
                  우리는 계산재료과학과 머신러닝을 결합하여, 실제 환경에서 기능성 재료의 구조, 안정성, 반응성, 성능을 원자 수준에서 이해하고 예측하며 설계합니다. 밀도범함수이론(DFT)에 기반한 물리 모델링을 바탕으로, 우리는 machine-learned interatomic potentials (MLIPs), 자동화 계산 워크플로, 데이터 기반 스크리닝, 생성 모델을 통합하여 복잡한 표면, 계면, 결함, 비정질 구조를 탐구하고, 그 구조–물성 관계를 연구합니다.
                </p>
                <p className="text-body text-slate-600 text-left break-keep">
                  주요 관심 소재는 광전기화학 및 전기촉매 산화물, high-k 유전체 산화물, 그리고 이들의 나노구조 및 무질서 구조체입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="h-px bg-slate-200" />
      </div>

      {/* Research Themes */}
      <section className="relative z-10 py-10 bg-transparent">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="section-title">Research Themes</h2>
            </div>
            <div className="w-full space-y-3">
              <div className="text-body text-slate-700 text-left">
                <p className="text-body mb-2">Our research spans three interconnected themes:</p>
                <ul className="text-body space-y-1.5 pl-2">
                  <li className="text-body flex items-start gap-2">
                    <span className="text-slate-500 font-medium">(1)</span>
                    <span className="flex-1">identifying active motifs in realistic complex structures,</span>
                  </li>
                  <li className="text-body flex items-start gap-2">
                    <span className="text-slate-500 font-medium">(2)</span>
                    <span className="flex-1">understanding the stability and reactivity of surfaces and interfaces under operating conditions, and</span>
                  </li>
                  <li className="text-body flex items-start gap-2">
                    <span className="text-slate-500 font-medium">(3)</span>
                    <span className="flex-1">establishing data-driven design rules for property prediction and inverse design.</span>
                  </li>
                </ul>
              </div>
              <div lang="ko">
                <div className="text-body text-slate-600 text-left break-keep">
                  <p className="text-body mb-1.5">본 연구실은 세 가지 주제를 포괄합니다. 전산재료과학 및 머신러닝 기반 모델링을 통해</p>
                  <ul className="text-body space-y-1.5 pl-2">
                    <li className="text-body flex items-start gap-2">
                      <span className="text-slate-400">(1)</span>
                      <span className="flex-1">실제 조건에서 형성되는 복잡한 구조에서 활성 motif를 규명하고,</span>
                    </li>
                    <li className="text-body flex items-start gap-2">
                      <span className="text-slate-400">(2)</span>
                      <span className="flex-1">구동 환경에서 표면과 계면의 안정성 및 반응성을 이해하며,</span>
                    </li>
                    <li className="text-body flex items-start gap-2">
                      <span className="text-slate-400">(3)</span>
                      <span className="flex-1">데이터 기반 소재 property 예측과 역설계를 기반으로 소재 설계 규칙을 확립하는 것입니다.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { id: 'complex-structure', title: 'Complex Structure Discovery', icon: <BarChart3 className="w-4 h-4" />, img: '/images/topic1_scheme.jpg' },
              { id: 'operando-reactivity', title: 'Electrochemical Interfacial Reactivity', icon: <Zap className="w-4 h-4" />, img: '/images/topic2_scheme.png' },
              { id: 'data-driven-inverse', title: 'Data-Driven Materials Design', icon: <Brain className="w-4 h-4" />, img: '/images/topic3_scheme.png' },
            ].map((theme, i) => (
              <Link 
                key={i}
                to={`/research?theme=${theme.id}`}
                className="block max-w-[240px] md:max-w-none mx-auto w-full h-full"
              >
                <motion.div 
                  whileHover={{ y: -3 }}
                  className="group bg-white flex flex-col border border-slate-100 hover:shadow-lg transition-all duration-500 overflow-hidden relative rounded-sm h-full shadow-sm"
                >
                  <div className="aspect-square w-full overflow-hidden bg-slate-50 relative">
                    <img 
                      src={theme.img} 
                      alt={theme.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                      referrerPolicy="no-referrer" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute top-0 left-0 w-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-1 group-hover:translate-y-0 flex items-center justify-between z-10">
                      <span className="text-meta text-primary bg-white/70 backdrop-blur-sm px-2 py-1 rounded-sm">Explore Theme</span>
                      <div className="bg-white/70 backdrop-blur-sm p-1.5 rounded-sm">
                        <ArrowRight size={10} className="text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="p-3 flex flex-col justify-center flex-auto">
                    <div className="flex items-center gap-2.5 w-full">
                      <div className="w-7 h-7 shrink-0 bg-primary/5 flex items-center justify-center text-primary rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        {theme.icon}
                      </div>
                      <h3 className="card-title text-primary text-left">
                        {theme.title}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="h-px bg-slate-200" />
      </div>

      {/* Materials Systems */}
      <section className="relative z-10 py-10 bg-transparent">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
            <div className="flex items-center gap-3">
              <h2 className="section-title">Materials Systems of Interest</h2>
            </div>
            <Link 
              to="/materials-systems" 
              className="text-meta text-primary hover:text-tertiary transition-all border-b-2 border-primary/20 pb-0.5"
            >
              Explore All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { 
                title: 'High-k Dielectrics & Oxide Interfaces', 
                desc: <>Phase stability, polarization properties, and the roles of defects and nanostructures in high-k oxides and oxide interfaces (e.g., SiO<sub>2</sub>, ZrO<sub>2</sub>, HfO<sub>2</sub>)</>,
                icon: <Zap size={18} />
              },
              { 
                title: 'Photoelectrochemical Systems & Charge Dynamics', 
                desc: <>Interfacial structure, hydration, charge localization, and dynamics at photoelectrochemical interfaces (e.g., BiVO<sub>4</sub>, GaN)</>,
                icon: <Sun size={18} />
              },
              { 
                title: 'Electrocatalytic Oxides & Alloys', 
                desc: <>Surface reconstruction, nanoparticle structures, and catalytic reactivity in transition-metal oxides and alloys (e.g., IrO<sub>2</sub>, RuO<sub>2</sub>)</>,
                icon: <Activity size={18} />
              },
              { 
                title: 'Halide Ionic Conductors', 
                desc: 'Structural disorder and machine-learning-assisted transport prediction in halide solid electrolytes',
                icon: <Battery size={18} />
              },
              { 
                title: '2D Semiconductor Heterojunctions', 
                desc: 'Interfacial behavior, contact properties, and interface structure prediction in 2D electronic materials',
                icon: <Layers size={18} />
              },
              { 
                title: 'Experimental Interpretation', 
                desc: 'Providing fundamental insight into experimental phenomena in electrocatalysis, semiconductors, and materials growth in close collaboration with experimental researchers.',
                icon: <Search size={18} />
              },
            ].map((item, i) => (
              <Link 
                key={i} 
                to="/materials-systems"
                className="bg-white p-5 lg:p-6 border border-slate-100 hover:shadow-md transition-all text-left group rounded-sm flex flex-col h-full"
              >
                <div className="flex items-start gap-2.5 mb-2.5">
                  <div className="text-primary mt-0.5 flex-shrink-0 scale-100 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="card-title text-primary group-hover:text-tertiary transition-colors">
                    {item.title}
                  </h4>
                </div>
                <p className="text-body text-slate-700">
                  {item.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="h-px bg-slate-200" />
      </div>

      {/* Method Section */}
      <section className="relative z-10 py-10 bg-transparent">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-3">
              <h2 className="section-title">Method</h2>
            </div>
            <div className="w-full space-y-3">
              <p className="text-body text-slate-700 text-left">
                We combine automated DFT-based workflows, data-driven machine learning, and machine-learned interatomic potentials to analyze materials across multiple scales. We further employ advanced sampling, global optimization, and realistic interface modeling under constant-potential conditions, explicit electrolytes, and electric-field effects to predict structure formation and understand materials properties under operating environments.
              </p>
              <div lang="ko">
                <p className="text-body text-slate-600 text-left break-keep">
                  우리 연구실은 DFT 기반의 자동화 계산, 데이터 기반 머신러닝, 그리고 machine-learned interatomic potentials를 결합하여 다양한 스케일에서 소재의 구조와 물성을 분석합니다. 나아가 고도화된 샘플링 및 전역 최적화 기법과 함께 constant-potential, explicit electrolyte, electric-field effects를 반영한 현실적 계면 모델링을 통해 실제 환경에서 소재의 구조 형성, 안정성, 반응성을 연구합니다.
                </p>
              </div>
            </div>
          </div>
          
          {/* Workflow Diagram */}
          <div className="relative mt-8 w-full max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
               
               {/* Middle Column: The 4 Methods */}
               <div className="w-full flex flex-col z-10">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 flex-1">
                   {[
                     { title: 'Data Science & Automation', icon: <Database size={16} />, bullets: ['Automated calculation workflows', 'Machine-learning analysis for materials discovery'] },
                     { title: 'Machine-Learned Interatomic Potentials', icon: <Brain size={16} />, bullets: ['Neural-network and kernel-based interatomic potentials', 'Large-scale molecular dynamics simulations'] },
                     { title: 'Global Optimization & Sampling', icon: <Globe size={16} />, bullets: ['Evolutionary algorithms', 'Finite-temperature and grand-canonical sampling'] },
                     { title: 'DFT and Beyond', icon: <Atom size={16} />, bullets: ['First-principles calculations', 'High-level quantum chemical methods'] },
                   ].map((method, i) => (
                     <div key={i} className="bg-white p-4 border border-slate-100 hover:border-sky-200 hover:shadow-md transition-all rounded-sm flex flex-col shadow-[0_1px_4px_rgba(0,0,0,0.02)] h-full">
                        <div className="flex items-start gap-2 mb-2 min-h-[36px]">
                          <div className="text-sky-500 mt-0.5 shrink-0 bg-sky-50/50 p-1 rounded-sm">
                            {method.icon}
                          </div>
                          <h4 className="card-title text-primary pt-0.5">
                            {method.title}
                          </h4>
                        </div>
                        <ul className="text-body space-y-1 pl-6">
                          {method.bullets.map((b, idx) => (
                            <li key={idx} className="text-body flex items-start gap-2 text-slate-700 text-left">
                              <div className="w-[3px] h-[3px] rounded-full bg-sky-200 mt-[7px] shrink-0"></div>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-12 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl text-center md:text-left space-y-1">
            <h2 className="section-title text-white">Join our research team.</h2>
            <p className="text-body text-slate-200">
              We are looking for motivated graduate students and postdocs interested in machine learning and materials modeling. Reach out to discuss potential projects.
            </p>
          </div>
          <div className="shrink-0">
            <Link 
              to="/open-positions" 
              className="text-meta inline-block bg-white text-primary px-8 py-3 hover:bg-tertiary hover:text-white transition-all shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <ImageModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        imageSrc={selectedImage.src} 
        imageAlt={selectedImage.alt} 
      />
    </div>
  );
}
