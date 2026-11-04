import { motion } from 'motion/react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { internshipCohorts, undergraduateAlumni } from '../data/alumni';

export default function Alumni() {
  return (
    <>
    <PageBanner hideLine />
    <div className="text-body py-10 max-w-4xl mx-auto px-8">
      <Link 
        to="/people" 
        className="text-meta inline-flex items-center gap-2 text-ink hover:text-ink transition-colors mb-6"
      >
        <ChevronLeft size={14} aria-hidden="true" /> Back to People
      </Link>

      <header className="mb-10">
        <div className="flex items-center gap-3 mb-6">
          <h1 className="page-title">Alumni</h1>
        </div>
        <p className="text-body text-copy max-w-2xl">
          Former undergraduate researchers and participants in our research internship programs.
        </p>
      </header>

      <section aria-labelledby="undergraduate-alumni" className="mb-10">
        <h2 id="undergraduate-alumni" className="section-title mb-4">Undergraduate Researchers</h2>
        <div className="space-y-3">
          {undergraduateAlumni.map((alumni, i) => (
            <motion.article
              key={alumni.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 bg-white border border-slate-100 grid grid-cols-1 md:grid-cols-12 gap-2 rounded-sm items-center"
            >
              <div className="md:col-span-7">
                <h3 className="card-title text-ink mb-1">
                  {alumni.name} <span lang="ko" className="font-normal">({alumni.koreanName})</span>
                </h3>
                <p className="text-meta text-copy">
                  <span lang="ko">학부생 연구원</span> (Undergraduate Intern), {alumni.period}
                </p>
              </div>
              {alumni.next && <p className="text-meta md:col-span-5 text-copy">{alumni.next}</p>}
            </motion.article>
          ))}
        </div>
      </section>

      <section aria-labelledby="internship-programs">
        <h2 id="internship-programs" className="section-title mb-4">Internship Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {internshipCohorts.map((cohort) => (
            <article key={cohort.id} className="p-5 border border-slate-200 rounded-sm bg-white">
              <p className="text-meta text-copy mb-2">{cohort.year} · {cohort.term}</p>
              <h3 className="card-title text-ink mb-2">
                <Link to={`/people/alumni/internships/${cohort.id}`} className="hover:text-ink transition-colors text-ink">
                  {cohort.title}
                </Link>
              </h3>
              <p className="text-meta text-copy mb-3">{cohort.period} · {cohort.participants.length} participants</p>
              <p className="text-body text-copy mb-4">{cohort.description}</p>
              <Link to={`/people/alumni/internships/${cohort.id}`} className="text-meta text-ink hover:text-ink transition-colors">
                View participants →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
    </>
  );
}
