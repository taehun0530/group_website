import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import PageBanner from '../components/PageBanner';

export default function FormerCollaborators() {
  const theoryList = [
    { name: 'Prof. Annabella Selloni', role: 'Princeton University (Chemistry), US' },
    { name: 'Dr. Simone Piccinin', role: 'CNR-IOM at SISSA (Condensed Matter Theory), IT' },
  ];

  const experimentList = [
    { name: 'Prof. Seong-Ju Hwang', role: 'Yonsei University (Materials Science and Engineering), KR' },
    { name: 'Prof. Xiaoyan Jin', role: 'University of Seoul (Applied Chemistry), KR' },
    { name: 'Prof. Kwangwook Park', role: 'Jeonbuk National University (Electronic Materials Engineering), KR' },
    { name: 'Prof. Yoon Kyeung Lee', role: 'Jeonbuk National University (Electronic Materials Engineering), KR' },
  ];

  return (
    <>
    <PageBanner hideLine />
    <div className="py-10 max-w-4xl mx-auto px-8">
      <Link 
        to="/people" 
        className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-sans text-xs font-bold uppercase tracking-normal transition-colors mb-8"
      >
        <ChevronLeft size={14} /> Back to People
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="page-title">Former Collaborators</h1>
        </div>
        <p className="font-academic text-slate-700 max-w-2xl leading-relaxed text-sm font-normal">
          Acknowledging the past collaborations that have contributed significantly to our research foundation and academic growth.
        </p>
      </header>

      <div className="space-y-24">
        {/* Theory List */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="section-title">Theory</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {theoryList.map((person, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 bg-white border border-slate-100 hover:border-slate-200 transition-colors"
              >
                <h3 className="font-sans font-bold text-primary text-base mb-1">{person.name}</h3>
                <p className="font-academic text-xs text-slate-700">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experiment List */}
        <section>
          <div className="flex items-center gap-4 mb-8">
            <h2 className="section-title">Experiment</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experimentList.map((person, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-4 bg-white border border-slate-100 hover:border-slate-200 transition-colors"
              >
                <h3 className="font-sans font-bold text-primary text-base mb-1">{person.name}</h3>
                <p className="font-academic text-xs text-slate-700">{person.role}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
    </>
  );
}
