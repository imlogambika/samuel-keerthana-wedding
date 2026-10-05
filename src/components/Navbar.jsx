import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled ? 'py-2 bg-[#060B18]/85 backdrop-blur-lg border-b border-[#38BDF8]/20 shadow-lg' : 'py-3 sm:py-4 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 sm:gap-3 group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-[#38BDF8] bg-[#060B18]/80 flex items-center justify-center font-serif font-bold text-base sm:text-lg text-[#D4AF37] shadow-[0_0_18px_rgba(56,189,248,0.4)] group-hover:scale-110 transition-transform">
            SK
          </div>
          <div className="hidden sm:block">
            <p className="font-serif font-bold text-[#D4AF37] text-base leading-tight">Samuel & Keerthana</p>
            <p className="text-[10px] text-[#38BDF8] uppercase tracking-widest">10 Years of Love · 2016–2026</p>
          </div>
        </a>

        {/* CTA */}
        <a href="#rsvp" className="flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-5 sm:py-2.5 rounded-full bg-gradient-to-r from-[#0EA5E9] via-[#D4AF37] to-[#0EA5E9] text-[#060B18] text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.18em] shadow-[0_0_22px_rgba(56,189,248,0.4)] hover:scale-105 transition-all duration-300 whitespace-nowrap">
          <Sparkles size={12} className="sm:w-3.5 sm:h-3.5" />
          <span className="hidden xs:inline">Get </span>Invitation
        </a>
      </div>
    </header>
  );
};
