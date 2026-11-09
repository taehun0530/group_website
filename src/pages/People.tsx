import { motion } from 'motion/react';
import { Mail, GraduationCap, UserPlus, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const getTagColor = (tag: string) => {
  const t = tag.toLowerCase();
  // Variations within blue/indigo/slate family
  if (t.includes('battery') || t.includes('lithiation') || t.includes('energy')) return 'bg-blue-50 text-ink border-blue-100/50';
  if (t.includes('mlip') || t.includes('machine learning') || t.includes('ai') || t.includes('data-driven') || t.includes('potentials')) return 'bg-sky-50 text-ink border-sky-100/50';
  if (t.includes('photoelectrochemistry') || t.includes('catalysis') || t.includes('reactivity') || t.includes('electrochemical')) return 'bg-indigo-50 text-ink border-indigo-100/50';
  if (t.includes('semiconductor') || t.includes('dft') || t.includes('computation')) return 'bg-slate-50 text-ink border-slate-200/50';
  if (t.includes('experiment') || t.includes('collaboration')) return 'bg-cyan-50 text-ink border-cyan-100/50';
  if (t.includes('optimization') || t.includes('inverse design') || t.includes('prediction')) return 'bg-blue-100/30 text-ink border-blue-200/30';
  if (t.includes('defect') || t.includes('structure') || t.includes('identification') || t.includes('amorphous')) return 'bg-slate-100 text-ink border-slate-200/50';
  return 'bg-blue-50/50 text-ink border-blue-100/30';
};

import PageBanner from '../components/PageBanner';

export default function People() {
  return (
    <>
    <PageBanner hideLine />
    <div className="py-10 max-w-7xl mx-auto px-8">
      {/* Header Section */}
      <header className="mb-8 pb-5 border-b border-slate-200">
        <h1 className="page-title">People</h1>
      </header>

      {/* PI Section */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="section-title">Principal Investigator</h2>
        </div>
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-[28.5%] lg:w-[25.5%] md:sticky md:top-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="aspect-square bg-slate-100 overflow-hidden rounded-md group shadow-md"
            >
              <img 
                src="/images/taehun_lee_pi.jpg" 
                alt="Taehun Lee" 
                className="w-full h-full object-cover object-[center_0%] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
          
          <div className="text-body w-full md:flex-1">
            <header className="mb-4">
              <h3 className="section-title text-ink mb-1">
                Taehun Lee <span lang="ko" className="text-ink ml-2">이태훈</span>
              </h3>
              <p className="text-body text-copy mb-3">Assistant Professor</p>
              <div className="text-body text-copy mb-3">
                <p>Department of Energy Science and Engineering, DGIST</p>
                <p>Department of Semiconductor Engineering, DGIST (joint appointment)</p>
              </div>
              <div className="text-meta flex flex-wrap items-center gap-x-3 gap-y-2 text-copy">
                <a href="mailto:taehun.lee@dgist.ac.kr" className="flex items-center gap-1.5 hover:text-ink transition-colors text-ink">
                  <Mail size={12} className="text-ink" />
                  <span>taehun.lee@dgist.ac.kr</span>
                </a>
                <span className="text-meta hidden sm:inline text-copy" aria-hidden="true">|</span>
                <a href="https://scholar.google.com/citations?user=E4QBWfAAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-ink transition-colors text-ink">
                  <GraduationCap size={12} className="text-ink" />
                  <span>Google Scholar</span>
                </a>
              </div>
            </header>
            
            <div className="space-y-4">
              <p className="text-body text-copy">
                Taehun Lee is an Assistant Professor at DGIST. His group develops and applies machine-learning-guided atomistic modeling tools to understand and design functional materials under realistic conditions, with interests spanning interfaces, defects, transport, and data-driven materials design.
              </p>
              <Link 
                to="/profile/taehun-lee"
                className="text-meta inline-flex items-center gap-2 text-ink hover:text-ink transition-colors"
              >
                Open Profile →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="mb-10 h-[1px] bg-slate-200" />

      {/* Researchers */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="section-title">Researchers</h2>
        </div>
        <div className="py-6 px-6 bg-surface-container-low rounded-sm text-center border-2 border-dashed border-slate-200">
          <p className="text-body text-copy">
            Positions are available now. 
            Please check our <Link to="/open-positions" className="text-ink font-bold hover:text-ink transition-colors underline underline-offset-4">Open Positions</Link> page for more details.
          </p>
        </div>
      </section>

      {/* Graduate Students */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="section-title">Graduate Students</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { 
              name: 'Hyunjin Lee', 
              ko: '이현진', 
              role: '박사과정 (Ph.D.)', 
              period: 'Since Sep 2026',
              affiliation: 'DGIST',
              tags: ['Defects', 'MLIP Dev'],
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBI8gmjcilKm_k3PCfPV37kciyfGGv25-g_49-NgZTUm858MF7MjJUp5_HowhvmLLMyS4mLtwnrBlKO97V0cTYB8e-9rHGS2iFbCM3DG4f6WSJTdcTrnfVAL4bqzDJImyvY2mvYE-cOk9lhBIi9UUWtMAHirUJwZsDsnVz8vJ_V1sIjWDwxNmB-YvdaxNoLX7AaDGRP_HEqQo9JeAwsQDDeVbdrFVxXOxgXW9Ne-3lfhrSR1Q6I3xLY11X6RFVbRNdhYJW2C8RfSw'
            },
            { 
              name: 'Kyunghun Lee', 
              ko: '이경훈', 
              role: '통합과정 (Int. M.S./Ph.D.)', 
              period: 'Since Sep 2026',
              affiliation: 'DGIST',
              tags: ['Defects', 'MLIP Dev'],
              img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdkfamMJwjzE9nmAikuTLbgrANwlrI5kaS5eas8zHnG7GRgQ9_MVErW1aSFvkCm4lxbSDEm1qT7heTQ_926Xkq8JBw8ipUWo3Jl0CrT-PIRqm0IFhx7JlNtrnZepSqM2qeiQ-ceuaOjPWAIgK97dRe4oSJLCvQUyH6Wmn6nIPdqpN7kJi2NGA8n1UG4Kht6Zsx4oNzl1gOuT7_b8nPwUPgQ45TmIRRln47It8n5dAbqEgJQeaBwLBHM1FoOsqG9duMjNyXfd7DHw'
            },
          ].map((student, i) => (
            <motion.article 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white group flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg border border-slate-100 rounded-sm"
            >
              <div className="w-[60%] mx-auto mt-6 aspect-square bg-slate-100 overflow-hidden shadow-sm rounded-md flex items-center justify-center text-copy">
                <User size={80} strokeWidth={1.5} className="group-hover:text-copy transition-colors duration-300" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="card-title text-ink mb-2">
                  {student.name} <span className="card-title text-ink ml-1">{student.ko}</span>
                </h3>
                <div className="mb-3 flex flex-col gap-0.5">
                  <span className="text-meta text-ink">{student.role}</span>
                  {(student as any).period && <span className="text-meta text-copy">{ (student as any).period }</span>}
                </div>
                <div className="flex flex-wrap gap-1 mb-4">
                  {student.tags.map(tag => (
                    <span key={tag} className={`text-meta px-1.5 py-0.5 border rounded-full ${getTagColor(tag)}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-meta mt-auto flex items-center gap-2 text-ink hover:text-ink transition-all">
                  Open profile →
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Undergraduate Interns */}
      <section className="mb-10">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="section-title">Undergraduate Interns</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              name: '',
              ko: '박민주',
              role: '학부생 연구원',
              period: 'Since Jul 2026',
              affiliation: 'Chung-Ang University',
              tags: [],
            },
            { 
              name: 'Chanju Kim', 
              ko: '김찬주', 
              role: '학부생 연구원', 
              period: 'Since Jan 2026',
              affiliation: 'Jeonbuk National University',
              tags: ['Grand-canonical MD'],
              img: 'https://picsum.photos/seed/chanju/400/400'
            },
          ].map((student, i) => (
            <motion.article 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white group flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg border border-slate-100 rounded-sm"
            >
              <div className="w-[60%] mx-auto mt-6 aspect-square bg-slate-100 overflow-hidden shadow-sm rounded-md flex items-center justify-center text-copy">
                <User size={80} strokeWidth={1.5} className="group-hover:text-copy transition-colors duration-300" />
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="card-title text-ink mb-1">
                  {student.name ? <>{student.name} <span className="card-title text-ink ml-1">{student.ko}</span></> : <span lang="ko">{student.ko}</span>}
                </h3>
                <p className="text-meta text-copy mb-2">
                  {student.affiliation}
                </p>
                <div className="flex flex-wrap items-baseline gap-1.5 mb-3">
                  <span className="text-meta text-ink">{student.role}</span>
                  {(student as any).period && <span className="text-meta text-copy">{ (student as any).period }</span>}
                </div>
                <div className="flex flex-wrap gap-1">
                  {student.tags.map(tag => (
                    <span key={tag} className={`text-meta px-1.5 py-0.5 border rounded-full ${getTagColor(tag)}`}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
          
          {/* Recruitment Card */}
          <article className="bg-slate-50 border-2 border-dashed border-slate-200 group flex flex-col h-full overflow-hidden items-center justify-center p-5 text-center rounded-sm">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-2.5 shadow-sm group-hover:scale-110 transition-transform">
              <UserPlus size={16} className="text-ink" />
            </div>
            <h3 className="card-title text-ink mb-1">Join Our Team</h3>
            <p className="text-body text-copy mb-3">We are looking for motivated students interested in atomistic modeling.</p>
            <Link to="/open-positions" className="text-meta px-4 py-1.5 bg-primary text-on-dark hover:bg-tertiary transition-colors">Apply Now</Link>
          </article>
        </div>
      </section>

      {/* Secondary Connections */}
      <section className="mb-10 border-t border-slate-200 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { title: 'Alumni', path: '/people/alumni', desc: 'Former researchers and research internship programs.' },
            { title: 'Collaborators', path: '/people/collaborators', desc: 'Active research partnerships worldwide.' },
            { title: 'Former Collaborators', path: '/people/former-collaborators', desc: 'Past collaborations that shaped our foundation.' },
          ].map((link, i) => (
            <Link 
              key={i} 
              to={link.path}
              className="group p-5 bg-slate-50 border border-transparent hover:border-slate-200 hover:bg-white transition-all flex flex-col rounded-sm text-ink"
            >
              <h3 className="card-title text-ink mb-2.5 transition-colors">
                {link.title}
              </h3>
              <p className="text-body text-copy mb-3">
                {link.desc}
              </p>
              <span className="text-meta mt-auto text-copy group-hover:text-ink transition-colors">
                View List →
              </span>
            </Link>
          ))}
        </div>
      </section>
      </div>
    </>
  );
}
