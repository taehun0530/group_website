import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Main Group Info */}
          <div className="md:col-span-6 space-y-3">
            <h4 className="font-sans font-semibold text-meta text-slate-600">
              Lee Group @DGIST
            </h4>
            <div className="font-academic text-xs text-slate-600 leading-relaxed space-y-1">
              <p>Data-driven Materials Modeling Group</p>
              <p>Department of Energy Science and Engineering,<br/>Daegu Gyeongbuk Institute of Science & Technology (DGIST)</p>
              <p className="font-medium text-primary">PI joint appointment: Department of Semiconductor Engineering, DGIST</p>
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-2">
            <h5 className="font-sans font-semibold text-meta text-slate-600">Contact</h5>
            <p className="font-academic text-meta text-slate-600">
              <a href="mailto:taehun.lee@dgist.ac.kr" className="hover:text-slate-600 transition-colors">
                taehun.lee@dgist.ac.kr
              </a>
            </p>
          </div>

          {/* Location */}
          <div className="md:col-span-3 space-y-2">
            <h5 className="font-sans font-semibold text-meta text-slate-600">Location</h5>
            <address className="not-italic font-academic text-xs text-slate-600 leading-relaxed">
              E6-414<br />
              333, Techno Jungang-daero,<br />
              Daegu, South Korea
            </address>
          </div>
        </div>

        <div className="mt-3 pt-3">
          <p className="font-sans text-meta text-slate-500 font-medium">
            © 2026 Lee Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
