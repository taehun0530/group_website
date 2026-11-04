import { motion } from 'motion/react';
import { ArrowLeft, Mail, GraduationCap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import PageBanner from '../components/PageBanner';

export default function Profile() {
  const navigate = useNavigate();

  const sections = [
    {
      title: 'Education',
      items: [
        { date: 'Aug 2019', content: 'Ph.D. in Materials Science and Engineering, Yonsei University, South Korea', detail: 'Supervisor: Prof. Aloysius Soon' },
        { date: 'Feb 2011', content: 'B.S. in Metallurgical Engineering, Yonsei University, South Korea' }
      ]
    },
    {
      title: 'Career',
      items: [
        { date: 'Mar 2026 – Present', content: 'Assistant Professor', detail: 'Department of Energy Science and Engineering, DGIST, South Korea' },
        { date: 'Sep 2023 – Feb 2026', content: 'Assistant Professor', detail: 'Division of Advanced Materials Engineering, Jeonbuk National University, South Korea' },
        { date: 'Jul 2020 – Jul 2023', content: 'Postdoctoral Research Associate', detail: 'Department of Chemistry, Princeton University, USA (Supervisor: Prof. Annabella Selloni)' },
        { date: 'Sep 2019 – Jun 2020', content: 'Postdoctoral Research Associate', detail: 'Department of Materials Science and Engineering, Yonsei University (Supervisor: Prof. Aloysius Soon)' }
      ]
    },
    {
      title: 'Awards & Fellowships',
      items: [
        { date: '2026', content: 'POSCO Science Fellowship' },
        { date: '2025', content: 'JBNU Young Fellow (Outstanding Researcher in Jeonbuk National University)' },
        { date: '2012 – 2014', content: 'Global Ph.D. Fellowship, National Research Foundation of Korea (NRF)' }
      ]
    },
    {
      title: 'Memberships',
      items: [
        { date: '2016 – 2023', content: 'Community Board Member, Materials Horizons' }
      ]
    }
  ];

  return (
    <>
    <PageBanner hideLine />
    <div className="text-body py-10 max-w-4xl mx-auto px-8">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-slate-500 hover:text-primary transition-colors mb-6 group"
      >
        <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
        <span className="text-meta">Back to People</span>
      </button>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="page-title">Principal Investigator</h1>
        </div>
        <div className="flex flex-col md:flex-row gap-6 items-start pb-4 relative">
          <div className="flex-grow">
            <div className="flex flex-wrap items-baseline gap-3 mb-2">
              <h2 className="section-title text-primary">Taehun Lee</h2>
              <span lang="ko" className="section-title text-slate-600">이태훈</span>
            </div>
            <div className="text-body text-slate-700 mb-3">
              <p>Assistant Professor</p>
              <p>Department of Energy Science and Engineering, DGIST</p>
              <p>Department of Semiconductor Engineering, DGIST (joint appointment)</p>
            </div>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-500">
              <a href="mailto:taehun.lee@dgist.ac.kr" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <Mail size={12} className="text-primary" />
                <span className="text-meta">taehun.lee@dgist.ac.kr</span>
              </a>
              <span className="text-meta hidden md:inline text-slate-300 text-center">|</span>
              <a href="https://scholar.google.com/citations?user=E4QBWfAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-primary transition-colors">
                <GraduationCap size={12} className="text-primary" />
                <span className="text-meta">Google Scholar</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="space-y-10">
        {sections.map((section, idx) => (
          <motion.section 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <h2 className="section-title mb-4">{section.title}</h2>
            
            <div className="space-y-3 ml-3 border-l border-slate-100 pl-6">
              {section.items.map((item, i) => (
                <div key={i} className="relative">
                  <div className="absolute -left-[25px] top-1.5 w-1 h-1 rounded-full bg-tertiary border-2 border-white shadow-sm" />
                  <p className="text-meta text-tertiary mb-0.5">{item.date}</p>
                  <h3 className="text-body text-slate-800">{item.content}</h3>
                  {item.detail && (
                    <p className="text-body text-slate-700 mt-0.5">{item.detail}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>
    </div>
    </>
  );
}
