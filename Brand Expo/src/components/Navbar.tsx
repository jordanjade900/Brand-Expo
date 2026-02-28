import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="w-full relative z-50 transition-all duration-500 bg-transparent border-b border-transparent hover:bg-[#020817]/90 hover:backdrop-blur-md hover:border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          {/* Official Marketing Seminar Logo */}
          <img 
            src="https://i.postimg.cc/prnfjnSt/image-2026-02-27-150340026-removebg-preview.png" 
            alt="UTech, Ja. Marketing Seminar 2025-2026" 
            className="h-14 md:h-20 object-contain"
            referrerPolicy="no-referrer"
          />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}>Home</Link>
          <Link to="/about" className={`text-sm font-medium transition-colors ${isActive('/about') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}>Who We Are</Link>
          <Link to="/packages" className={`text-sm font-medium transition-colors ${isActive('/packages') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}>Packages</Link>
        </nav>
        
        <div className="hidden md:flex items-center">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSc1rqPDLsBn4LppApqkvs2darMY30Aon5_H6KbyNV1E_58ClA/viewform?usp=sharing&ouid=101296545287331578114" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-400 hover:text-[#020817] text-cyan-400 transition-all duration-300 text-sm font-bold backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
          >
            Register Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-[#020817]/95 backdrop-blur-xl overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 space-y-4">
              <Link to="/" onClick={closeMenu} className={`text-base font-medium transition-colors ${isActive('/') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}>Home</Link>
              <Link to="/about" onClick={closeMenu} className={`text-base font-medium transition-colors ${isActive('/about') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}>Who We Are</Link>
              <Link to="/packages" onClick={closeMenu} className={`text-base font-medium transition-colors ${isActive('/packages') ? 'text-cyan-400' : 'text-gray-300 hover:text-white'}`}>Packages</Link>
              <div className="pt-4 pb-2 border-t border-white/10">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc1rqPDLsBn4LppApqkvs2darMY30Aon5_H6KbyNV1E_58ClA/viewform?usp=sharing&ouid=101296545287331578114" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="inline-block w-full text-center px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-400 hover:text-[#020817] text-cyan-400 transition-all duration-300 text-sm font-bold shadow-[0_0_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
                >
                  Register Now
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
