import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ChevronRight, ChevronLeft, Play, Pause } from 'lucide-react';

const STORY_YEARS = [
  {
    year: '2016',
    title: 'Two Paths Cross',
    distance: 36,
    samuelNote: 'The moment my eyes found you in 2016, my world paused.',
    keerthanaNote: 'A gentle smile that started a forever conversation.',
    meaning: 'The beginning of an extraordinary decade.'
  },
  {
    year: '2018',
    title: 'Friendship Becomes Love',
    distance: 27,
    samuelNote: 'Late night talks turned into dreams of a shared future.',
    keerthanaNote: 'You became my best friend and my safest haven.',
    meaning: 'Two souls finding their rhythm together.'
  },
  {
    year: '2020',
    title: 'Through Every Storm',
    distance: 19,
    samuelNote: 'Distance and time only proved that our bond is unbreakable.',
    keerthanaNote: 'No storm could shake what was written in the stars.',
    meaning: 'Rooted deep in trust and unwavering devotion.'
  },
  {
    year: '2022',
    title: 'Growing Hand in Hand',
    distance: 12,
    samuelNote: 'Celebrating every milestone, building our dreams together.',
    keerthanaNote: 'Six years in, and I fell in love with you all over again.',
    meaning: 'Side by side, stronger with every passing year.'
  },
  {
    year: '2024',
    title: 'The Sacred Promise',
    distance: 6,
    samuelNote: 'I knew then with absolute certainty: it has always been you.',
    keerthanaNote: 'Ready to walk the rest of our days together as one.',
    meaning: 'Choosing each other for all our tomorrows.'
  },
  {
    year: '2026',
    title: '10 Years of Love — United Forever',
    distance: 0,
    samuelNote: 'October 28, 2026: Two lives, one heartbeat, for eternity.',
    keerthanaNote: 'From 2016 to 2026... my dreams came true with you.',
    meaning: 'A decade of love celebrated in marriage.'
  }
];

export const GhibliScrollStory = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % STORY_YEARS.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const current = STORY_YEARS[activeIdx];
  const isFinalYear = activeIdx === STORY_YEARS.length - 1;

  return (
    <section
      ref={containerRef}
      id="ghibli-story"
      className="relative bg-gradient-to-b from-[#060B18] via-[#091833] to-[#060B18] pt-28 pb-24 px-4 overflow-hidden border-t border-[#38BDF8]/20"
    >
      <div className="absolute inset-0 bg-sky-glow opacity-30 pointer-events-none" />
      <div className="absolute inset-0 bg-gold-glow opacity-20 pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#38BDF8]/40 bg-[#38BDF8]/10 text-xs uppercase font-bold tracking-[0.25em] text-[#7DD3FC] shadow-[0_0_20px_rgba(56,189,248,0.2)]">
            <Sparkles size={13} className="text-[#38BDF8]" />
            A 10-Year Journey · 2016 to 2026
            <Sparkles size={13} className="text-[#D4AF37]" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-gold-gradient mt-3">
            Two Paths, One Destiny
          </h2>
          <p className="text-xs sm:text-sm text-[#FDFBF7]/70 font-light mt-1">
            Tap a year below to see how two lives crossed paths and became one.
          </p>
        </div>

        <div className="w-full max-w-2xl flex items-center justify-between gap-1.5 sm:gap-3 p-2 rounded-2xl glass-card border border-[#38BDF8]/30 mb-8 shadow-[0_0_30px_rgba(56,189,248,0.15)]">
          {STORY_YEARS.map((item, idx) => (
            <button
              key={item.year}
              onClick={() => {
                setIsPlaying(false);
                setActiveIdx(idx);
              }}
              className={`flex-1 py-2 sm:py-2.5 px-2 rounded-xl text-xs sm:text-sm font-serif font-bold transition-all duration-300 relative ${
                activeIdx === idx
                  ? 'bg-gradient-to-r from-[#0EA5E9] to-[#D4AF37] text-[#060B18] shadow-[0_0_20px_rgba(56,189,248,0.4)] scale-105'
                  : 'text-[#7DD3FC]/80 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="block leading-none">{item.year}</span>
              {activeIdx === idx && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
              )}
            </button>
          ))}

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            title={isPlaying ? 'Pause Story' : 'Auto Play Story'}
            className="p-2 sm:p-2.5 rounded-xl border border-[#38BDF8]/40 bg-[#0C1B35] text-[#38BDF8] hover:bg-[#38BDF8]/20 transition-all shrink-0"
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
        </div>

        <div className="w-full max-w-4xl relative min-h-[380px] sm:min-h-[440px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {!isFinalYear ? (
              <motion.div
                key={`sep-${activeIdx}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="w-full flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-10 relative"
              >
                <motion.div
                  animate={{ x: `${-current.distance}%` }}
                  transition={{ type: 'spring', stiffness: 90, damping: 20 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative rounded-3xl overflow-hidden p-1.5 border-2 border-[#38BDF8] bg-[#0C1B35] shadow-[0_0_35px_rgba(56,189,248,0.35)] w-44 sm:w-56 h-56 sm:h-72">
                    <img
                      src="/assets/ghibli_samuel.jpg"
                      alt="Samuel Ghibli Portrait"
                      className="w-full h-full object-cover rounded-2xl brightness-105"
                    />
                    <div className="absolute top-3 left-3 bg-[#060B18]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#38BDF8]/40 text-[10px] text-[#7DD3FC] font-bold uppercase tracking-wider">
                      Samuel
                    </div>
                  </div>
                  <p className="max-w-[220px] text-xs text-[#7DD3FC]/90 font-serif italic mt-3 bg-[#0C1B35]/70 p-2.5 rounded-xl border border-[#38BDF8]/20 shadow-md">
                    "{current.samuelNote}"
                  </p>
                </motion.div>

                <div className="flex flex-col items-center justify-center shrink-0 my-2 md:my-0 z-20">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-[#D4AF37]/80 bg-[#0C1B35]/95 backdrop-blur-md flex flex-col items-center justify-center shadow-[0_0_30px_rgba(212,175,55,0.4)]">
                    <span className="text-2xl sm:text-3xl text-gold-gradient font-serif leading-none">
                      ∞
                    </span>
                    <span className="text-[10px] font-serif font-bold text-[#7DD3FC] mt-0.5">
                      {current.year}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#D4AF37] mt-2">
                    {current.title}
                  </span>
                </div>

                <motion.div
                  animate={{ x: `${current.distance}%` }}
                  transition={{ type: 'spring', stiffness: 90, damping: 20 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative rounded-3xl overflow-hidden p-1.5 border-2 border-[#D4AF37] bg-[#0C1B35] shadow-[0_0_35px_rgba(212,175,55,0.35)] w-44 sm:w-56 h-56 sm:h-72">
                    <img
                      src="/assets/ghibli_keerthana.jpg"
                      alt="Keerthana Ghibli Portrait"
                      className="w-full h-full object-cover rounded-2xl brightness-105"
                    />
                    <div className="absolute top-3 right-3 bg-[#060B18]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#D4AF37]/40 text-[10px] text-[#D4AF37] font-bold uppercase tracking-wider">
                      Keerthana
                    </div>
                  </div>
                  <p className="max-w-[220px] text-xs text-[#F4E5A4]/90 font-serif italic mt-3 bg-[#0C1B35]/70 p-2.5 rounded-xl border border-[#D4AF37]/20 shadow-md">
                    "{current.keerthanaNote}"
                  </p>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="joined"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="w-full flex flex-col items-center text-center"
              >
                <div className="relative rounded-3xl overflow-hidden p-2 border-[3px] border-[#38BDF8] bg-[#0C1B35] shadow-[0_0_60px_rgba(56,189,248,0.5)] max-w-xl w-full">
                  <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden">
                    <img
                      src="/assets/ghibli_main.jpg"
                      alt="Samuel and Keerthana Together in Ghibli Style"
                      className="w-full h-full object-cover brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060B18] via-transparent to-transparent opacity-75" />
                    
                    <div className="absolute top-4 right-4 bg-[#060B18]/85 backdrop-blur-md border border-[#D4AF37] px-4 py-1.5 rounded-full text-xs font-bold text-[#D4AF37] uppercase tracking-widest shadow-xl flex items-center gap-1.5">
                      <Sparkles size={13} /> 2026 · United Forever
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <span className="text-sm font-serif italic text-white/95 drop-shadow-md">
                        "From 2016 to 2026... two souls, one eternal melody."
                      </span>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25, duration: 0.7 }}
                  className="mt-6 p-6 sm:p-8 rounded-3xl glass-card border-2 border-[#D4AF37]/80 shadow-[0_0_50px_rgba(212,175,55,0.3)] max-w-2xl w-full relative"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Sparkles size={15} className="text-[#38BDF8]" />
                    <span className="text-[11px] uppercase tracking-[0.3em] font-bold text-[#7DD3FC]">
                      Their Eternal Song · Oru Paadhi Kadhavu
                    </span>
                    <Sparkles size={15} className="text-[#D4AF37]" />
                  </div>

                  <h3 className="text-3xl sm:text-5xl font-serif font-bold text-gold-gradient leading-tight my-2">
                    "நீ என்பதோ நான் தானடி..."
                  </h3>
                  
                  <p className="text-lg sm:text-2xl font-serif italic text-[#7DD3FC]">
                    "Nee Enpadhe Naan Dhaanadi..."
                  </p>

                  <p className="text-xs sm:text-sm text-[#FDFBF7]/80 mt-3 font-light max-w-lg mx-auto leading-relaxed">
                    "ஒரு பாதி கதவு நீயடி... ஒரு பாதி கதவு நானடி..."<br />
                    <span className="text-[#D4AF37] font-medium">
                      10 Years of Love (2016 – 2026) · Now Married in Love &amp; Grace
                    </span>
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={() => {
              setIsPlaying(false);
              setActiveIdx((prev) => Math.max(0, prev - 1));
            }}
            disabled={activeIdx === 0}
            className="p-2.5 rounded-full border border-[#38BDF8]/40 text-[#7DD3FC] hover:bg-[#38BDF8]/10 disabled:opacity-30 disabled:pointer-events-none transition"
            aria-label="Previous milestone"
          >
            <ChevronLeft size={18} />
          </button>

          <span className="text-xs font-serif text-[#D4AF37] uppercase tracking-widest font-semibold">
            {activeIdx + 1} of {STORY_YEARS.length}
          </span>

          <button
            onClick={() => {
              setIsPlaying(false);
              setActiveIdx((prev) => Math.min(STORY_YEARS.length - 1, prev + 1));
            }}
            disabled={activeIdx === STORY_YEARS.length - 1}
            className="p-2.5 rounded-full border border-[#38BDF8]/40 text-[#7DD3FC] hover:bg-[#38BDF8]/10 disabled:opacity-30 disabled:pointer-events-none transition"
            aria-label="Next milestone"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};
