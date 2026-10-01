import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { weddingData } from '../data/weddingData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060B18] pt-20 pb-12 overflow-hidden border-t border-[#38BDF8]/20">
      
      {/* Background Image Banner */}
      <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src="/assets/tree_couple.jpg"
          alt="Samuel & Keerthana"
          className="w-full h-full object-cover filter grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-[#060B18]/80 to-[#060B18]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Monogram Seal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-16 h-16 rounded-full border-2 border-[#38BDF8] bg-[#060B18]/90 backdrop-blur-md flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(56,189,248,0.4)]"
        >
          <span className="font-serif text-2xl font-bold text-gold-gradient">
            {weddingData.monogram}
          </span>
        </motion.div>

        {/* 10 Years Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#38BDF8]/40 bg-[#38BDF8]/10 text-xs text-[#7DD3FC] uppercase tracking-widest font-bold mb-4">
          10 Years of Love • 2016 – 2026
        </div>

        {/* Couple Names & Hashtag */}
        <h2 className="text-4xl sm:text-6xl font-serif font-bold text-gold-gradient mb-2">
          {weddingData.groom.name} & {weddingData.bride.name}
        </h2>

        <p className="text-sm font-mono text-[#38BDF8] font-bold tracking-widest my-2">
          {weddingData.hashtag}
        </p>

        <p className="text-base font-serif italic text-[#FDFBF7]/90 my-3">
          "நீ என்பதோ நான் தானடி... ஒரு பாதி கதவு நீயடி, ஒரு பாதி கதவு நானடி..."
        </p>

        <p className="text-xs uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
          Wednesday, October 28, 2026 • 11:00 AM • AM Mahal, Erode
        </p>

        {/* Back to Top */}
        <div className="mt-12 pt-8 border-t border-[#38BDF8]/15 flex flex-col items-center justify-center gap-4">
          <button
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full glass-panel border border-[#38BDF8]/40 text-[#7DD3FC] flex items-center justify-center hover:bg-[#38BDF8] hover:text-[#060B18] transition-all duration-300 shadow-lg hover:scale-110"
            aria-label="Back to Top"
          >
            <ChevronUp size={20} />
          </button>

          <p className="text-xs text-[#7DD3FC]/75 tracking-wider font-light">
            made with love {'\u{1F90D}'}.
          </p>
        </div>

      </div>
    </footer>
  );
};
