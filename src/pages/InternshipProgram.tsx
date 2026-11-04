import { ChevronLeft } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import PageBanner from '../components/PageBanner';
import { internshipCohorts } from '../data/alumni';

export default function InternshipProgram() {
  const { cohortId } = useParams<{ cohortId: string }>();
  const cohort = internshipCohorts.find((entry) => entry.id === cohortId);

  if (!cohort) return <Navigate to="/people/alumni" replace />;

  return (
    <>
      <PageBanner hideLine />
      <div className="text-body py-10 max-w-4xl mx-auto px-8">
        <Link to="/people/alumni" className="text-meta inline-flex items-center gap-2 text-ink hover:text-ink transition-colors mb-6">
          <ChevronLeft size={14} aria-hidden="true" /> Back to Alumni
        </Link>

        <header className="mb-8">
          <p className="text-meta text-copy mb-2">Internship Programs · {cohort.year} · {cohort.term}</p>
          <h1 className="page-title mb-3">{cohort.title}</h1>
          <p className="text-meta text-copy">{cohort.period}</p>
        </header>

        <section aria-labelledby="program-activities" className="mb-8">
          <h2 id="program-activities" className="section-title mb-3">Program</h2>
          <p className="text-body text-copy mb-3">
            {cohort.description}
          </p>
          <ul className="text-copy bullet-list">
            {cohort.activities.map((activity) => <li key={activity}>{activity}</li>)}
          </ul>
        </section>

        <section aria-labelledby="internship-participants">
          <h2 id="internship-participants" className="section-title mb-4">Participants</h2>
          <ul className="text-body grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {cohort.participants.map((participant) => (
              <li key={participant.id} className="text-body p-4 border border-slate-200 rounded-sm bg-white">
                <h3 lang="ko" className="card-title text-ink">{participant.name}</h3>
                {participant.affiliation && <p className="text-meta text-copy mt-1">{participant.affiliation}</p>}
                <p className="text-meta text-copy mt-1">Research internship participant</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
