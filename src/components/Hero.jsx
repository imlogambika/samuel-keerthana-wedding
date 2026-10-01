import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Sparkles } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Background Photo */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1.02 }}
          transition={{ duration: 16, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          src="/assets/tree_couple.jpg"
          alt="Samuel & Keerthana"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(0.35) contrast(1.15)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#060B18]/70 via-[#060B18]/50 to-[#060B18]" />
        <div className="absolute inset-0 bg-sky-glow opacity-60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* SK Monogram */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#38BDF8] bg-[#060B18]/90 backdrop-blur-md flex items-center justify-center mx-auto shadow-[0_0_35px_rgba(56,189,248,0.4)]">
            <span className="font-serif text-3xl font-bold text-gold-gradient">SK</span>
          </div>
        </motion.div>

        {/* 10 Years Milestone Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7 }}
          className="mb-4 inline-flex items-center gap-2.5 px-6 py-2 rounded-full border border-[#38BDF8]/40 bg-[#38BDF8]/10 text-xs uppercase font-bold tracking-[0.3em] text-[#7DD3FC] shadow-[0_0_20px_rgba(56,189,248,0.2)]"
        >
          <Sparkles size={13} className="text-[#38BDF8]" />
          10 Years of Love • 2016 – 2026
          <Sparkles size={13} className="text-[#D4AF37]" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="text-[11px] uppercase tracking-[0.4em] font-semibold text-[#D4AF37] mb-3"
        >
          Together with their families
        </motion.p>

        {/* Couple Names */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.9 }}
          className="select-none my-2"
        >
          <h1
            className="font-serif font-bold tracking-tight shimmer-text drop-shadow-2xl"
            style={{ fontSize: 'clamp(3.2rem, 10vw, 7.5rem)', lineHeight: 1.05 }}
          >
            Samuel
          </h1>
          
          <div className="my-3 flex items-center justify-center gap-4">
            <span className="h-px w-24 block bg-gradient-to-r from-transparent via-[#38BDF8] to-[#D4AF37]" />
            <span
              className="font-script text-3xl sm:text-4xl text-[#D4AF37]"
              style={{ fontFamily: '"Great Vibes", cursive' }}
            >
              weds
            </span>
            <span className="h-px w-24 block bg-gradient-to-l from-transparent via-[#38BDF8] to-[#D4AF37]" />
          </div>

          <h1
            className="font-serif font-bold tracking-tight shimmer-text drop-shadow-2xl"
            style={{ fontSize: 'clamp(3.2rem, 10vw, 7.5rem)', lineHeight: 1.05 }}
          >
            Keerthana
          </h1>
        </motion.div>

        {/* Romantic Lyric Quote */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8 }}
          className="mt-5 text-sm sm:text-base font-serif italic text-white/90 max-w-xl mx-auto px-5 py-2.5 rounded-2xl bg-[#0C1B35]/65 border border-[#38BDF8]/25 backdrop-blur-md shadow-lg"
        >
          "ஒரு பாதி கதவு நீயடி... ஒரு பாதி கதவு நானடி..."
        </motion.p>

        {/* Event Meta */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-6 space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/35">
            <span className="text-xs uppercase tracking-[0.3em] font-bold text-[#D4AF37]">
              Wedding Reception
            </span>
          </div>
          <p className="text-xl sm:text-2xl font-serif text-[#FDFBF7] font-light">
            Wednesday, 28th October 2026
          </p>
          <p className="flex items-center justify-center gap-2 text-sm text-[#38BDF8] font-medium">
            <MapPin size={15} /> AM Mahal, Erode, Tamil Nadu
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.8 }}
          className="mt-8 flex flex-wrap gap-4 items-center justify-center"
        >
          <a
            href="#ghibli-story"
            className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 bg-gradient-to-r from-[#0EA5E9] via-[#D4AF37] to-[#0EA5E9] text-[#060B18] shadow-[0_0_25px_rgba(56,189,248,0.35)] hover:scale-105 transition-all duration-300"
          >
            <Sparkles size={14} /> Our 10-Year Story
          </a>
          <a
            href="#rsvp"
            className="px-8 py-3.5 rounded-full font-bold text-xs uppercase tracking-[0.2em] flex items-center gap-2 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
          >
            Get Invitation Pass
          </a>
        </motion.div>
      </div>
    </section>
  );
};
