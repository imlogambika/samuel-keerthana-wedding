import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { GoldDivider } from './GoldDecorations';

export const CoupleStory = () => {
  return (
    <section id="story" className="py-24 relative bg-royal-950/90 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-gold-400 font-semibold inline-flex items-center gap-2">
            <Sparkles size={14} /> Our Beginning <Sparkles size={14} />
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-gold-gradient mt-2 mb-4">
            {weddingData.story.subtitle}
          </h2>
          <GoldDivider />
          <p className="text-sm sm:text-base font-serif italic text-ivory-200/90 leading-relaxed">
            "{weddingData.story.quote}"
          </p>
        </div>

        {/* Editorial Photo Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          
          {/* Main Large Photo - Staircase Pose */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-6 relative group"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gold-500/40 p-2 glass-card shadow-2xl">
              <img
                src="/assets/stairs.jpg"
                alt="Samuel & Keerthana Together"
                className="w-full h-[450px] sm:h-[550px] object-cover rounded-xl filter brightness-105 contrast-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-950/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[11px] uppercase tracking-[0.25em] text-gold-400 font-semibold">
                  Togetherness
                </span>
                <h3 className="text-2xl font-serif font-bold text-gold-gradient">
                  Samuel & Keerthana
                </h3>
              </div>
            </div>
          </motion.div>

          {/* Secondary Stacked Photos */}
          <div className="md:col-span-6 space-y-6">
            
            {/* Photo 2 - Beach Selfie */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group rounded-2xl overflow-hidden border border-gold-500/30 p-2 glass-card"
            >
              <img
                src="/assets/beach.jpg"
                alt="Beach Moments"
                className="w-full h-[240px] sm:h-[270px] object-cover rounded-xl filter brightness-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6">
                <p className="text-xs uppercase tracking-[0.2em] text-gold-300 font-medium">
                  Joyful Moments
                </p>
                <p className="text-lg font-serif font-bold text-ivory-100">
                  Shared Smiles & Endless Bliss
                </p>
              </div>
            </motion.div>

            {/* Photo 3 - Terrace Sunset */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group rounded-2xl overflow-hidden border border-gold-500/30 p-2 glass-card"
            >
              <img
                src="/assets/terrace.jpg"
                alt="Rooftop Sunset"
                className="w-full h-[240px] sm:h-[270px] object-cover rounded-xl filter brightness-105 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-royal-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6">
                <p className="text-xs uppercase tracking-[0.2em] text-gold-300 font-medium">
                  Looking Forward
                </p>
                <p className="text-lg font-serif font-bold text-ivory-100">
                  Stepping Into Eternity
                </p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
