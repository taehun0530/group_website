import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Research', path: '/research' },
  { name: 'People', path: '/people' },
  { name: 'Publications', path: '/publications' },
  { name: 'News', path: '/news' },
  { name: 'Open Positions', path: '/open-positions' },
];

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full z-50 glass-nav border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="font-sans font-extrabold text-lg text-primary shrink-0">
          Lee Group @ DGIST ESE
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-sans text-[13px] font-semibold tracking-normal transition-colors pb-1 border-b-2 ${
                location.pathname === link.path
                  ? 'text-primary border-primary'
                  : 'text-slate-700 border-transparent hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button type="button" aria-label={isOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isOpen} aria-controls="mobile-navigation" className="lg:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white border-b border-slate-200 px-6 py-8 space-y-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block font-sans text-sm font-semibold tracking-normal ${
                  location.pathname === link.path ? 'text-primary' : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
