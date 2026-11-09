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
  const isActive = (path: string) => location.pathname === path || (path === '/open-positions' && location.pathname.startsWith(`${path}/`));

  return (
    <nav className="sticky top-0 w-full z-50 glass-nav border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link to="/" className="section-title text-ink shrink-0">
          Lee Group @ DGIST ESE
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link transition-colors pb-1 border-b-2 ${
                isActive(link.path)
                  ? 'text-ink border-primary'
                  : 'text-copy border-transparent hover:text-ink'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button type="button" aria-label={isOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isOpen} aria-controls="mobile-navigation" className="lg:hidden text-ink" onClick={() => setIsOpen(!isOpen)}>
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
                className={`nav-link block ${
                  isActive(link.path) ? 'text-ink' : 'text-copy'
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
