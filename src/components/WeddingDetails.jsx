import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Sparkles, Shirt, Hash, Heart, X, Eye } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { GoldDivider, CornerFlourish } from './GoldDecorations';

export const WeddingDetails = ({ showPdfModal, setShowPdfModal }) => {
  return (
    <section id="details" className="py-24 relative bg-royal-900/40 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-gold-400 font-semibold inline-flex items-center gap-2">
            <Sparkles size={14} /> Key Information
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-gold-gradient mt-2 mb-4">
            Wedding Details
          </h2>
          <GoldDivider />
          <p className="text-sm text-ivory-200/80 font-light">
            Everything you need to know for our celebration.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Reception Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl glass-card border border-gold-500/30 p-6 text-center shadow-xl group hover:border-gold-300 transition-all"
          >
            <CornerFlourish />
            <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-400/50 flex items-center justify-center text-gold-300 mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-gold-gradient mb-2">
              Wedding Reception
            </h3>
            <p className="text-sm text-ivory-200 font-medium mb-1">
              {weddingData.event.day}, October 28, 2026
            </p>
            <p className="text-xs text-gold-300/90 font-light">
              {weddingData.event.time}
            </p>
          </motion.div>

          {/* Card 2: Traditional Attire */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl glass-card border border-gold-500/30 p-6 text-center shadow-xl group hover:border-gold-300 transition-all"
          >
            <CornerFlourish />
            <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-400/50 flex items-center justify-center text-gold-300 mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Shirt size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-gold-gradient mb-2">
              Suggested Dress Code
            </h3>
            <p className="text-sm text-ivory-200 font-medium mb-1">
              Traditional South Indian / Festive Elegant
            </p>
            <p className="text-xs text-gold-300/90 font-light">
              Silk Sarees, Veshti, Traditional Kurtas or Festive Formals
            </p>
          </motion.div>

          {/* Card 3: Wedding Hashtag */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative rounded-2xl glass-card border border-gold-500/30 p-6 text-center shadow-xl group hover:border-gold-300 transition-all"
          >
            <CornerFlourish />
            <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-400/50 flex items-center justify-center text-gold-300 mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Hash size={24} />
            </div>
            <h3 className="text-xl font-serif font-bold text-gold-gradient mb-2">
              Official Hashtag
            </h3>
            <p className="text-lg font-mono text-gold-300 font-bold mb-1">
              {weddingData.hashtag}
            </p>
            <p className="text-xs text-gold-300/90 font-light">
              Tag your photos & moments on Instagram & Facebook!
            </p>
          </motion.div>

        </div>

        {/* View Original PDF Invitation Card Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl glass-card border-2 border-gold-400/60 p-8 sm:p-10 text-center max-w-3xl mx-auto shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
                Authentic Invitation Document
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-gold-gradient">
                View Official Reception Card
              </h3>
              <p className="text-xs sm:text-sm text-ivory-200/90 font-light">
                Inspect the original printed invitation card provided by Samuel & Keerthana.
              </p>
            </div>

            <button
              onClick={() => setShowPdfModal(true)}
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-royal-950 font-semibold text-xs uppercase tracking-[0.2em] shadow-lg shadow-gold-500/30 hover:scale-105 transition-all duration-300 shrink-0 flex items-center gap-2"
            >
              <Eye size={16} />
              Open PDF Card
            </button>
          </div>
        </motion.div>

      </div>

      {/* PDF Modal */}
      <AnimatePresence>
        {showPdfModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-royal-950/95 backdrop-blur-2xl flex items-center justify-center p-4 sm:p-6"
            onClick={() => setShowPdfModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl h-[85vh] bg-royal-900 rounded-2xl border border-gold-500/50 shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Modal Header */}
              <div className="px-6 py-4 bg-royal-950 border-b border-gold-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="text-gold-400" size={20} />
                  <span className="font-serif font-bold text-gold-gradient text-lg">
                    Reception Invitation.pdf
                  </span>
                </div>
                
                <div className="flex items-center gap-3">
                  <a
                    href={weddingData.pdfPath}
                    download="Samuel_Keerthana_Reception_Invitation.pdf"
                    className="px-3 py-1.5 rounded-full bg-gold-500/20 text-gold-300 text-xs font-semibold hover:bg-gold-500 hover:text-royal-950 transition-colors"
                  >
                    Download PDF
                  </a>
                  <button
                    onClick={() => setShowPdfModal(false)}
                    className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-300 flex items-center justify-center hover:bg-gold-500 hover:text-royal-950 transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>

              {/* PDF Embed / Preview */}
              <div className="flex-1 bg-neutral-900 w-full h-full p-2">
                <iframe
                  src={`${weddingData.pdfPath}#toolbar=0`}
                  title="Reception Invitation PDF"
                  className="w-full h-full rounded-lg border-0"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
