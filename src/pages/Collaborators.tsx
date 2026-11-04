import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

import PageBanner from '../components/PageBanner';
import collaboratorGroups from '../data/collaborators.json';

export default function Collaborators() {
  const groups = collaboratorGroups;

  return (
    <>
    <PageBanner hideLine />
    <div className="py-10 max-w-4xl mx-auto px-8">
      <Link 
        to="/people" 
        className="text-meta inline-flex items-center gap-2 text-ink hover:text-ink transition-colors mb-6"
      >
        <ChevronLeft size={14} /> Back to People
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="page-title">Current Collaborators</h1>
        </div>
        <p className="text-body text-copy max-w-2xl">
          Active partnerships with leading researchers and institutions worldwide, driving multidisciplinary breakthroughs in materials science.
        </p>
      </header>

      <div className="space-y-24">
        {groups.map((group, groupIdx) => (
          <section key={groupIdx}>
            <div className="flex items-center gap-4 mb-6">
              <h2 className="section-title">
                {group.title}
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {group.members.map((collab, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (groupIdx * group.members.length + i) * 0.05 }}
                  className="p-4 bg-white border border-slate-100 hover:border-slate-200 hover:shadow-sm transition-all rounded-sm"
                >
                  <h3 className="card-title text-ink mb-1">{collab.name}</h3>
                  <p className="text-meta text-copy">{collab.role}</p>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
    </>
  );
}
