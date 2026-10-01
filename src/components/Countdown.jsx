import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, Sparkles } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { GoldDivider, CornerFlourish } from './GoldDecorations';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    hasPassed: false
  });

  useEffect(() => {
    const targetDate = new Date(weddingData.event.targetIsoDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          hasPassed: true
        });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, hasPassed: false });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const timerItems = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="py-20 relative bg-royal-900/60 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
        
        <span className="text-xs uppercase tracking-[0.35em] text-[#38BDF8] font-bold inline-flex items-center gap-2">
          <Clock size={14} /> Counting Down To The Big Day
        </span>

        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-gold-gradient mt-2 mb-3">
          Until We Say "I Do"
        </h2>

        <GoldDivider />

        {timeLeft.hasPassed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="my-8 p-8 rounded-2xl glass-card border border-[#38BDF8]/50 max-w-xl mx-auto"
          >
            <Sparkles size={36} className="text-[#38BDF8] mx-auto mb-3 animate-pulse" />
            <h3 className="text-3xl font-serif font-bold text-gold-gradient mb-2">
              The Celebration Has Begun!
            </h3>
            <p className="text-sm text-ivory-200">
              Samuel & Keerthana are embarking on their journey together. Thank you for your love & blessings.
            </p>
          </motion.div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 my-10 max-w-3xl mx-auto">
            {timerItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative rounded-2xl p-6 glass-card border border-[#38BDF8]/30 shadow-xl text-center group hover:border-[#38BDF8] transition-all"
              >
                <CornerFlourish />
                <span className="text-4xl sm:text-6xl font-serif font-bold text-sky-gradient tracking-tight block">
                  {String(item.value).padStart(2, '0')}
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold mt-2 block">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
