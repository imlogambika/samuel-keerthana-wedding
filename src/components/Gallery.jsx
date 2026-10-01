import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { GoldDivider } from './GoldDecorations';

export const Gallery = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === weddingData.photos.length - 1 ? 0 : prev + 1));
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setSelectedIndex((prev) => (prev === 0 ? weddingData.photos.length - 1 : prev - 1));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  return (
    <section id="gallery" className="py-24 relative bg-royal-950/95 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-gold-400 font-semibold inline-flex items-center gap-2">
            <Camera size={14} /> Precious Moments
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-gold-gradient mt-2 mb-4">
            Couple Gallery
          </h2>
          <GoldDivider />
          <p className="text-sm text-ivory-200/80 font-light">
            Glimpses of love, joy, and forever memories. Tap any photo for full screen view.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {weddingData.photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openLightbox(index)}
              className="relative group rounded-2xl overflow-hidden glass-card border border-gold-500/30 p-2 cursor-pointer shadow-xl hover:border-gold-300 transition-all duration-500"
            >
              <div className="relative overflow-hidden rounded-xl h-80 sm:h-96">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover filter brightness-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-royal-950/90 via-royal-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold-400 font-semibold mb-1">
                    {photo.category}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-gold-gradient">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-ivory-200/90 line-clamp-2 mt-1 font-light">
                    {photo.caption}
                  </p>
                  
                  <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gold-500/20 backdrop-blur-md border border-gold-400/50 flex items-center justify-center text-gold-300">
                    <Maximize2 size={16} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-royal-950/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-8"
          >
            {/* Top Close & Counter */}
            <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-300 font-semibold bg-royal-900/80 px-4 py-2 rounded-full border border-gold-500/30">
                Photo {selectedIndex + 1} of {weddingData.photos.length}
              </span>
              <button
                onClick={closeLightbox}
                className="w-10 h-10 rounded-full bg-gold-500/20 border border-gold-400/50 flex items-center justify-center text-gold-200 hover:bg-gold-500 hover:text-royal-950 transition-colors"
                aria-label="Close Lightbox"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gold-500/20 border border-gold-400/50 flex items-center justify-center text-gold-200 hover:bg-gold-500 hover:text-royal-950 transition-all shadow-xl"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={nextImage}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-gold-500/20 border border-gold-400/50 flex items-center justify-center text-gold-200 hover:bg-gold-500 hover:text-royal-950 transition-all shadow-xl"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>

            {/* Main Lightbox Content */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] flex flex-col items-center justify-center"
            >
              <img
                src={weddingData.photos[selectedIndex].url}
                alt={weddingData.photos[selectedIndex].title}
                className="max-w-full max-h-[72vh] object-contain rounded-xl border border-gold-500/40 shadow-2xl"
              />
              <div className="mt-4 text-center max-w-lg">
                <h3 className="text-2xl font-serif font-bold text-gold-gradient">
                  {weddingData.photos[selectedIndex].title}
                </h3>
                <p className="text-sm text-ivory-200/90 font-light mt-1">
                  {weddingData.photos[selectedIndex].caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
