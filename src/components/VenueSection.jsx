import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, QrCode, ExternalLink, Compass } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { GoldDivider, CornerFlourish } from './GoldDecorations';

export const VenueSection = () => {
  return (
    <section id="venue" className="py-24 relative bg-royal-950 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-gold-400 font-semibold inline-flex items-center gap-2">
            <Compass size={14} /> Location & Directions
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-gold-gradient mt-2 mb-4">
            The Wedding Venue
          </h2>
          <GoldDivider />
          <p className="text-sm text-ivory-200/80 font-light">
            Join us at {weddingData.event.venue}, {weddingData.event.location} for an unforgettable reception.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Venue Info Card & Directions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col justify-between p-8 rounded-3xl glass-card border border-gold-500/40 shadow-2xl relative overflow-hidden"
          >
            <CornerFlourish />

            <div className="space-y-6">
              <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-400/50 flex items-center justify-center text-gold-300">
                <MapPin size={28} />
              </div>

              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-gold-400 font-semibold">
                  Reception Venue
                </span>
                <h3 className="text-3xl font-serif font-bold text-gold-gradient mt-1">
                  {weddingData.event.venue}
                </h3>
                <p className="text-base text-ivory-100 font-medium mt-1">
                  {weddingData.event.location}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-royal-900/80 border border-gold-500/20 text-xs text-ivory-200/90 leading-relaxed space-y-2">
                <p className="font-semibold text-gold-300 uppercase tracking-wider text-[11px]">
                  Address Details:
                </p>
                <p>{weddingData.event.fullAddress}</p>
                <p className="text-gold-200/80 italic font-serif pt-1 border-t border-gold-500/10">
                  Date: Wednesday, Oct 28, 2026 • 11:00 AM
                </p>
              </div>

              {/* QR Directions Badge */}
              <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-400/40 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-royal-950 flex items-center justify-center text-gold-300 shrink-0 border border-gold-500/30">
                  <QrCode size={24} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-gold-300 font-bold">
                    Scan for directions
                  </h4>
                  <p className="text-[11px] text-ivory-200/80 font-light">
                    Matches QR code from official printed card
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gold-500/20">
              <a
                href={weddingData.event.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-royal-950 font-semibold text-xs uppercase tracking-[0.2em] shadow-lg shadow-gold-500/20 hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Navigation size={16} />
                Open in Google Maps
                <ExternalLink size={14} />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Google Maps iFrame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 min-h-[400px] lg:min-h-full rounded-3xl glass-card border border-gold-500/40 p-2 shadow-2xl relative overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-full min-h-[380px] rounded-2xl overflow-hidden border border-gold-500/30 bg-royal-900">
              <iframe
                title="Venue Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62601.3262955375!2d77.6800!3d11.3410!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba96f46762f4671%3A0xd211e0e4b85c18!2sErode%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1696000000000!5m2!1sen!2sin"
                className="w-full h-full min-h-[380px] filter grayscale border-0 opacity-90 contrast-125"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 right-4 bg-royal-950/90 border border-gold-500/40 px-3 py-1.5 rounded-full backdrop-blur-md text-[11px] text-gold-300 font-medium tracking-wider flex items-center gap-1.5 shadow-lg">
                <MapPin size={12} className="text-gold-400" />
                AM Mahal, Erode
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
