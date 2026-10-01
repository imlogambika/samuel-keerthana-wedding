import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Share2, CheckCircle2, User, Phone, Users, MessageSquare, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { GoldDivider, CornerFlourish } from './GoldDecorations';

export const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    attending: 'yes',
    guestCount: '1',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return;

    try {
      const all = JSON.parse(localStorage.getItem('wedding_rsvps') || '[]');
      all.push({ ...formData, timestamp: new Date().toISOString() });
      localStorage.setItem('wedding_rsvps', JSON.stringify(all));
    } catch (_) {}

    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#38BDF8', '#FFFFFF', '#F4E5A4']
      });
    } catch (_) {}

    setSubmitted(true);
  };

  const downloadCard = () => {
    const canvas = document.createElement('canvas');
    const W = 1080;
    const H = 1520;
    canvas.width = W;
    canvas.height = H;
    const c = canvas.getContext('2d');
    if (!c) return;

    // Background
    const bg = c.createLinearGradient(0, 0, W, H);
    bg.addColorStop(0, '#060B18');
    bg.addColorStop(0.5, '#0C1B35');
    bg.addColorStop(1, '#060B18');
    c.fillStyle = bg;
    c.fillRect(0, 0, W, H);

    // Subtle sky radial glow
    const glow = c.createRadialGradient(W / 2, 0, 0, W / 2, 0, W);
    glow.addColorStop(0, 'rgba(56,189,248,0.22)');
    glow.addColorStop(1, 'rgba(0,0,0,0)');
    c.fillStyle = glow;
    c.fillRect(0, 0, W, H);

    // Outer sky-blue border
    c.strokeStyle = '#38BDF8';
    c.lineWidth = 6;
    c.strokeRect(30, 30, W - 60, H - 60);

    // Inner gold border
    c.strokeStyle = '#D4AF37';
    c.lineWidth = 3;
    c.strokeRect(48, 48, W - 96, H - 96);

    // Monogram circle
    c.fillStyle = '#D4AF37';
    c.beginPath();
    c.arc(W / 2, 170, 56, 0, Math.PI * 2);
    c.fill();
    c.fillStyle = '#060B18';
    c.font = 'bold 40px Georgia, serif';
    c.textAlign = 'center';
    c.textBaseline = 'middle';
    c.fillText('SK', W / 2, 172);

    // Tagline
    c.fillStyle = '#38BDF8';
    c.font = '600 18px "Plus Jakarta Sans", sans-serif';
    c.fillText('TOGETHER WITH THEIR FAMILIES', W / 2, 260);

    // Couple Names
    c.fillStyle = '#F4E5A4';
    c.font = 'bold 64px Georgia, serif';
    c.fillText('Samuel & Keerthana', W / 2, 335);

    // 10 years badge
    c.fillStyle = 'rgba(56,189,248,0.12)';
    const bx = W / 2 - 180;
    const by = 375;
    c.beginPath();
    c.roundRect(bx, by, 360, 42, 21);
    c.fill();
    c.strokeStyle = 'rgba(56,189,248,0.5)';
    c.lineWidth = 1.5;
    c.beginPath();
    c.roundRect(bx, by, 360, 42, 21);
    c.stroke();
    c.fillStyle = '#7DD3FC';
    c.font = '600 15px "Plus Jakarta Sans", sans-serif';
    c.fillText('10 YEARS OF LOVE  •  2016 – 2026', W / 2, by + 27);

    // Personalised Guest Box
    c.fillStyle = 'rgba(14,30,60,0.85)';
    c.beginPath();
    c.roundRect(80, 450, W - 160, 310, 20);
    c.fill();
    c.strokeStyle = '#38BDF8';
    c.lineWidth = 2;
    c.beginPath();
    c.roundRect(80, 450, W - 160, 310, 20);
    c.stroke();

    c.fillStyle = '#D4AF37';
    c.font = '600 14px "Plus Jakarta Sans", sans-serif';
    c.fillText('OFFICIAL PERSONALIZED INVITATION PASS', W / 2, 495);

    c.fillStyle = '#FFFFFF';
    c.font = 'bold 46px Georgia, serif';
    c.fillText(formData.name || 'Honored Guest', W / 2, 566);

    c.fillStyle = '#7DD3FC';
    c.font = '18px "Plus Jakarta Sans", sans-serif';
    const statusTxt = formData.attending === 'yes'
      ? `Confirmed Guest  ·  ${formData.guestCount} Attendee${formData.guestCount !== '1' ? 's' : ''}`
      : 'Warmest Wishes & Blessings Shared';
    c.fillText(statusTxt, W / 2, 620);

    if (formData.message) {
      c.fillStyle = '#F4E5A4';
      c.font = 'italic 17px Georgia, serif';
      const msg = `"${formData.message.slice(0, 55)}${formData.message.length > 55 ? '...' : ''}"`;
      c.fillText(msg, W / 2, 668);
    }

    c.fillStyle = 'rgba(255,255,255,0.18)';
    c.fillRect(80, 728, W - 160, 1);

    // Event Details
    c.fillStyle = '#D4AF37';
    c.font = 'bold 34px Georgia, serif';
    c.fillText('WEDDING RECEPTION', W / 2, 814);

    c.fillStyle = '#FFFFFF';
    c.font = '26px "Plus Jakarta Sans", sans-serif';
    c.fillText('Wednesday, October 28, 2026', W / 2, 866);
    c.fillStyle = '#7DD3FC';
    c.font = 'bold 22px "Plus Jakarta Sans", sans-serif';
    c.fillText('11:00 AM IST', W / 2, 910);

    c.fillStyle = '#F4E5A4';
    c.font = '24px Georgia, serif';
    c.fillText('AM Mahal, Erode, Tamil Nadu', W / 2, 960);

    // Hashtag
    c.fillStyle = '#38BDF8';
    c.font = 'bold 20px "Plus Jakarta Sans", sans-serif';
    c.fillText('#SamuelWedsKeerthana', W / 2, 1090);

    // Footer note
    c.fillStyle = 'rgba(253,251,247,0.45)';
    c.font = '14px "Plus Jakarta Sans", sans-serif';
    c.fillText('Please present this pass at the reception entrance — AM Mahal, Erode', W / 2, 1390);

    // Download
    const link = document.createElement('a');
    const fn = (formData.name || 'Guest').replace(/\s+/g, '_');
    link.download = `${fn}_SK_Wedding_Invitation.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const shareWhatsApp = () => {
    const txt = `I am attending Samuel & Keerthana's Wedding Reception!\nDate: Wednesday, Oct 28, 2026\nVenue: AM Mahal, Erode, Tamil Nadu\n#SamuelWedsKeerthana`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(txt)}`, '_blank');
  };

  return (
    <section id="rsvp" className="py-24 relative bg-[#060B18] overflow-hidden">
      <div className="absolute inset-0 bg-sky-glow opacity-30 pointer-events-none" />

      <div className="max-w-2xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-[#38BDF8] font-bold">
            <Sparkles size={13} className="text-[#38BDF8]" />
            Personalized Invitation Pass
            <Sparkles size={13} className="text-[#D4AF37]" />
          </span>
          <h2 className="text-4xl sm:text-6xl font-serif font-bold text-gold-gradient mt-2 mb-2">
            RSVP
          </h2>
          <GoldDivider />
          <p className="text-sm text-[#FDFBF7]/80">
            Enter your details to generate and download your personalized pass.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl glass-card border-2 border-[#38BDF8]/40 p-7 sm:p-10 shadow-[0_0_50px_rgba(56,189,248,0.18)] overflow-hidden"
        >
          <CornerFlourish />

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-4 space-y-5"
              >
                <div className="w-20 h-20 rounded-full bg-[#38BDF8]/20 border-2 border-[#38BDF8] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(56,189,248,0.4)]">
                  <CheckCircle2 size={44} className="text-[#38BDF8]" />
                </div>

                <div>
                  <h3 className="text-3xl font-serif font-bold text-gold-gradient">
                    You're on the Guest List
                  </h3>
                  <p className="text-sm text-[#FDFBF7]/80 mt-1">
                    Welcome, <span className="font-bold text-[#7DD3FC]">{formData.name}</span>. Your invitation pass is ready to download.
                  </p>
                </div>

                {/* Preview Card */}
                <div className="p-5 rounded-2xl bg-[#0C1B35]/90 border-2 border-[#D4AF37]/50 max-w-sm mx-auto relative overflow-hidden">
                  <CornerFlourish />
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] font-bold mb-2">
                    Official Invitation Pass
                  </p>
                  <p className="text-xl font-serif font-bold text-[#38BDF8]">{formData.name}</p>
                  <p className="text-xs text-[#FDFBF7]/80 mt-1">
                    {formData.attending === 'yes'
                      ? `Attending · ${formData.guestCount} Guest(s)`
                      : 'Wishes & Blessings Received'}
                  </p>
                  <div className="border-t border-[#38BDF8]/20 mt-3 pt-3 text-[11px] text-[#D4AF37]/90">
                    Wed, Oct 28, 2026 · 11:00 AM · AM Mahal, Erode
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={downloadCard}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#0EA5E9] via-[#D4AF37] to-[#0EA5E9] text-[#060B18] font-bold text-xs uppercase tracking-[0.2em] shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:scale-105 transition-all"
                  >
                    <Download size={15} /> Download Invitation (.PNG)
                  </button>
                  <button
                    onClick={shareWhatsApp}
                    className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-[#38BDF8]/50 text-[#7DD3FC] font-bold text-xs uppercase tracking-[0.15em] hover:bg-[#38BDF8]/10 transition-all"
                  >
                    <Share2 size={15} /> Share Details
                  </button>
                </div>

                <button
                  onClick={() => { setSubmitted(false); setFormData({ name:'',contact:'',attending:'yes',guestCount:'1',message:'' }); }}
                  className="text-xs text-[#D4AF37]/70 hover:text-[#D4AF37] underline uppercase tracking-widest block mx-auto pt-2"
                >
                  Submit another response
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Name */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#7DD3FC] font-bold mb-1.5">
                    Full Name — Printed on your pass *
                  </label>
                  <div className="relative">
                    <User size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#38BDF8]" />
                    <input
                      required
                      type="text"
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      placeholder="Your full name"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#0C1B35]/80 border border-[#38BDF8]/30 text-[#FDFBF7] placeholder-[#38BDF8]/30 focus:border-[#38BDF8] focus:outline-none focus:ring-1 focus:ring-[#38BDF8]/50 transition text-sm"
                    />
                  </div>
                </div>

                {/* Contact */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#7DD3FC] font-bold mb-1.5">
                    Phone / Email
                  </label>
                  <div className="relative">
                    <Phone size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#38BDF8]" />
                    <input
                      type="text"
                      value={formData.contact}
                      onChange={e => setFormData({...formData, contact: e.target.value})}
                      placeholder="Phone number or email"
                      className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#0C1B35]/80 border border-[#38BDF8]/30 text-[#FDFBF7] placeholder-[#38BDF8]/30 focus:border-[#38BDF8] focus:outline-none focus:ring-1 focus:ring-[#38BDF8]/50 transition text-sm"
                    />
                  </div>
                </div>

                {/* Attendance */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#7DD3FC] font-bold mb-1.5">
                    Will you attend?
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { val: 'yes', label: 'Joyfully Accepts' },
                      { val: 'no', label: 'Regretfully Declines' }
                    ].map(opt => (
                      <button
                        key={opt.val}
                        type="button"
                        onClick={() => setFormData({...formData, attending: opt.val})}
                        className={`py-3 px-3 rounded-xl border text-xs font-bold uppercase tracking-[0.12em] transition-all ${
                          formData.attending === opt.val
                            ? 'bg-gradient-to-r from-[#0EA5E9] to-[#D4AF37] text-[#060B18] border-transparent shadow-lg'
                            : 'bg-[#0C1B35]/60 text-[#7DD3FC] border-[#38BDF8]/25 hover:border-[#38BDF8]/50'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Guest count */}
                {formData.attending === 'yes' && (
                  <div>
                    <label className="block text-[11px] uppercase tracking-[0.2em] text-[#7DD3FC] font-bold mb-1.5">
                      Number of guests
                    </label>
                    <div className="relative">
                      <Users size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#38BDF8]" />
                      <select
                        value={formData.guestCount}
                        onChange={e => setFormData({...formData, guestCount: e.target.value})}
                        className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-[#0C1B35]/80 border border-[#38BDF8]/30 text-[#FDFBF7] focus:border-[#38BDF8] focus:outline-none appearance-none text-sm"
                      >
                        {['1','2','3','4+'].map(v => (
                          <option key={v} value={v} className="bg-[#060B18]">
                            {v} Guest{v !== '1' ? 's' : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Message */}
                <div>
                  <label className="block text-[11px] uppercase tracking-[0.2em] text-[#7DD3FC] font-bold mb-1.5">
                    Wishes for Samuel & Keerthana
                  </label>
                  <div className="relative">
                    <MessageSquare size={17} className="absolute left-4 top-4 text-[#38BDF8]" />
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      placeholder="Write your wishes and blessings..."
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#0C1B35]/80 border border-[#38BDF8]/30 text-[#FDFBF7] placeholder-[#38BDF8]/30 focus:border-[#38BDF8] focus:outline-none text-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#0EA5E9] via-[#D4AF37] to-[#0EA5E9] text-[#060B18] font-bold text-xs uppercase tracking-[0.25em] shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <Download size={16} />
                  Confirm & Download Invitation Pass
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
