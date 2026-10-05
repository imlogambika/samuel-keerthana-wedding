import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink, Download } from 'lucide-react';
import { weddingData } from '../data/weddingData';
import { GoldDivider, CornerFlourish } from './GoldDecorations';

export const WeddingEvents = () => {
  const generateIcsFile = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Samuel & Keerthana Wedding//EN
BEGIN:VEVENT
SUMMARY:Samuel & Keerthana Wedding Reception
DESCRIPTION:Together with their families, Samuel & Keerthana invite you to celebrate their Wedding Reception.
LOCATION:AM Mahal, Erode, Tamil Nadu
DTSTART:20261028T053000Z
DTEND:20261028T093000Z
STATUS:CONFIRMED
SEQUENCE:0
BEGIN:VALARM
TRIGGER:-PT24H
ACTION:DISPLAY
DESCRIPTION:Reminder: Samuel & Keerthana Wedding Reception Tomorrow!
END:VALARM
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Samuel_Keerthana_Wedding_Reception.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Samuel & Keerthana Wedding Reception'
  )}&dates=20261028T053000Z/20261028T093000Z&details=${encodeURIComponent(
    'Together with their families, Samuel & Keerthana invite you to celebrate their Wedding Reception.'
  )}&location=${encodeURIComponent('AM Mahal, Erode, Tamil Nadu')}`;

  return (
    <section id="events" className="py-24 relative bg-royal-950 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.35em] text-gold-400 font-semibold">
            Wedding Celebration
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-gold-gradient mt-2 mb-4">
            Event Schedule
          </h2>
          <GoldDivider />
          <p className="text-sm text-ivory-200/80 font-light">
            We invite you to grace our occasion with your presence and blessings.
          </p>
        </div>

        {/* Reception Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl glass-card border border-gold-500/40 p-8 sm:p-12 max-w-3xl mx-auto shadow-2xl overflow-hidden group"
        >
          <CornerFlourish />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
            
            {/* Left Column: Date Badge */}
            <div className="text-center md:text-left shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl bg-gold-500/10 border-2 border-gold-400/60 flex flex-col items-center justify-center p-2 shadow-xl group-hover:border-gold-300 transition-colors">
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-gold-400 font-bold">
                  OCT
                </span>
                <span className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gold-gradient leading-none my-0.5 sm:my-1">
                  28
                </span>
                <span className="text-[10px] sm:text-[11px] text-ivory-200 font-medium">
                  Wednesday
                </span>
              </div>
            </div>

            {/* Middle Column: Event Details */}
            <div className="flex-1 text-center md:text-left space-y-3 sm:space-y-4">
              <div>
                <span className="inline-block px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-gold-500/20 text-gold-300 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-2">
                  Main Event
                </span>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-gold-gradient">
                  {weddingData.event.title}
                </h3>
              </div>

              <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-ivory-200">
                <p className="flex items-center justify-center md:justify-start gap-2 sm:gap-2.5">
                  <Clock size={14} className="text-gold-400 sm:w-4 sm:h-4" />
                  <span className="font-semibold text-gold-200">Time:</span> {weddingData.event.time}
                </p>

                <p className="flex items-start justify-center md:justify-start gap-2 sm:gap-2.5">
                  <MapPin size={14} className="text-gold-400 mt-0.5 sm:w-4 sm:h-4 shrink-0" />
                  <span><span className="font-semibold text-gold-200">Venue:</span> {weddingData.event.venue}, {weddingData.event.location}</span>
                </p>
              </div>

              <p className="text-[10px] sm:text-xs text-gold-300/80 italic font-serif">
                "{weddingData.event.directionsNote}"
              </p>
            </div>

          </div>

          {/* Action Row */}
          <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-gold-500/20 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center md:justify-end gap-2 sm:gap-3">
            <a
              href={googleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gold-500/20 hover:bg-gold-500 text-gold-300 hover:text-royal-950 border border-gold-400/50 text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap"
            >
              <Calendar size={13} className="sm:w-3.5 sm:h-3.5" />
              Google Calendar
            </a>

            <button
              onClick={generateIcsFile}
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full glass-panel hover:bg-gold-500/30 text-gold-200 border border-gold-400/30 text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] font-semibold transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap"
            >
              <Download size={13} className="sm:w-3.5 sm:h-3.5" />
              iCal (.ics)
            </button>

            <a
              href={weddingData.event.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-gold-500 to-gold-600 text-royal-950 font-semibold text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.15em] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 shadow-md whitespace-nowrap"
            >
              <MapPin size={13} className="sm:w-3.5 sm:h-3.5" />
              View Map
              <ExternalLink size={11} className="sm:w-3 sm:h-3" />
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
