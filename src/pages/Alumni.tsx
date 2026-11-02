import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import PageBanner from '../components/PageBanner';

export default function Alumni() {
  const alumniList = [
    { 
      name: 'Junhyun Moon (문준현)', 
      role: '학부생 연구원 (Undergraduate Intern), 2024.04 – 2025.12', 
      next: 'Currently Integrated Course at KAIST' 
    },
    { 
      name: 'Changgyu Cho (조창규)', 
      role: '학부생 연구원 (Undergraduate Intern), 2024.07 – 2025.12', 
      next: '' 
    },
    { 
      name: 'Junho Lee (이준호)', 
      role: '학부생 연구원 (Undergraduate Intern), 2023.12 – 2025.06', 
      next: 'Currently Integrated Course at KIST' 
    },
  ];

  return (
    <>
    <PageBanner hideLine />
    <div className="py-10 max-w-4xl mx-auto px-8">
      <Link 
        to="/people" 
        className="inline-flex items-center gap-2 text-slate-600 hover:text-primary font-sans text-xs font-bold uppercase tracking-normal transition-colors mb-6"
      >
        <ChevronLeft size={14} /> Back to People
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="page-title">Alumni</h1>
        </div>
        <p className="font-academic text-slate-700 max-w-2xl leading-relaxed text-sm font-normal">
          Celebrating the achievements and career paths of our former group members.
        </p>
      </header>

      <div className="space-y-3">
        {alumniList.map((alumni, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-3 bg-white border border-slate-100 grid grid-cols-1 md:grid-cols-12 group hover:border-slate-200 transition-all gap-2 rounded-sm items-center"
          >
            <div className="md:col-span-7">
              <h3 className="font-sans font-bold text-primary text-base leading-tight">{alumni.name}</h3>
              <p className="font-academic text-xs text-slate-600 font-medium">{alumni.role}</p>
            </div>
            <div className="md:col-span-5">
              {alumni.next && (
                <p className="font-academic text-xs text-tertiary font-medium">{alumni.next}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    </>
  );
}
