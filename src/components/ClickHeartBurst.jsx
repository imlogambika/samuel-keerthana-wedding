import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ClickHeartBurst = () => {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    const handleGlobalClick = (e) => {
      // Don't spawn if clicking interactive inputs/buttons unless desired
      const emojis = ['💖', '💕', '💗', '💓', '✨', '💍'];
      const count = 5;
      const newHearts = [];

      for (let i = 0; i < count; i++) {
        newHearts.push({
          id: Date.now() + Math.random(),
          x: e.clientX + (Math.random() - 0.5) * 40,
          y: e.clientY + (Math.random() - 0.5) * 40,
          emoji: emojis[Math.floor(Math.random() * emojis.length)],
          scale: Math.random() * 0.6 + 0.8,
          rotation: (Math.random() - 0.5) * 60,
          vx: (Math.random() - 0.5) * 60,
          vy: -Math.random() * 80 - 40
        });
      }

      setHearts((prev) => [...prev, ...newHearts]);
    };

    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  // Auto clean up hearts after animation completes
  useEffect(() => {
    if (hearts.length === 0) return;
    const timer = setTimeout(() => {
      setHearts((prev) => prev.filter((h) => Date.now() - h.id < 1200));
    }, 1200);
    return () => clearTimeout(timer);
  }, [hearts]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      <AnimatePresence>
        {hearts.map((h) => (
          <motion.span
            key={h.id}
            initial={{ opacity: 1, scale: h.scale, x: h.x, y: h.y, rotate: 0 }}
            animate={{
              opacity: 0,
              scale: h.scale * 1.4,
              x: h.x + h.vx,
              y: h.y + h.vy,
              rotate: h.rotation
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="absolute text-xl select-none"
            style={{ left: 0, top: 0 }}
          >
            {h.emoji}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
};
