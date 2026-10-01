import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ChevronUp } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { GoldMandala } from './GoldDecorations';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-royal-950 pt-20 pb-12 overflow-hidden border-t border-gold-500/30">
      
      {/* Background Image Banner */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img
          src="/assets/terrace.jpg"
          alt="Samuel & Keerthana Sunset"
          className="w-full h-full object-cover filter grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-royal-950 via-royal-950/80 to-royal-950" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        {/* Monogram Seal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-16 h-16 rounded-full border-2 border-gold-400/80 bg-royal-900/90 backdrop-blur-md flex items-center justify-center mx-auto mb-6 shadow-xl"
        >
          <span className="font-serif text-2xl font-bold text-gold-gradient">
            {weddingData.monogram}
          </span>
        </motion.div>

        {/* Couple Names & Hashtag */}
        <h2 className="text-4xl sm:text-6xl font-serif font-bold text-gold-gradient mb-2">
          {weddingData.groom.name} & {weddingData.bride.name}
        </h2>

        <p className="text-sm font-mono text-gold-300 font-bold tracking-widest my-2">
          {weddingData.hashtag}
        </p>

        <p className="text-base font-serif italic text-ivory-200/90 my-4">
          "A new chapter begins..."
        </p>

        <p className="text-xs uppercase tracking-[0.3em] text-gold-400/80 font-medium">
          Wednesday, October 28, 2026 • AM Mahal, Erode
        </p>

        {/* Back to Top */}
        <div className="mt-12 pt-8 border-t border-gold-500/20 flex flex-col items-center justify-center gap-4">
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full glass-panel border border-gold-400/40 text-gold-300 flex items-center justify-center hover:bg-gold-500 hover:text-royal-950 transition-all duration-300 shadow-lg"
            aria-label="Back to Top"
          >
            <ChevronUp size={20} />
          </button>

          <p className="text-[11px] text-gold-400/60 tracking-widest uppercase">
            Designed for Samuel & Keerthana's Wedding Reception
          </p>
        </div>

      </div>
    </footer>
  );
};
