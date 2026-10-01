import React, { useEffect, useRef } from 'react';

// Floating Ambient Gold Bokeh Particles Canvas
export const ParticleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 45 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2.5 + 0.8,
      color: Math.random() > 0.4 ? 'rgba(212, 175, 55, ' : 'rgba(244, 229, 164, ',
      alpha: Math.random() * 0.6 + 0.2,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.5 - 0.2,
      pulse: Math.random() * 0.02 + 0.005,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += Math.sin(Date.now() * p.pulse) * 0.01;

        if (p.y < 0) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        const currentAlpha = Math.max(0.1, Math.min(0.8, p.alpha));
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${currentAlpha})`;
        ctx.shadowColor = 'rgba(212, 175, 55, 0.8)';
        ctx.shadowBlur = 8;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-70"
    />
  );
};

// Luxury South Indian Mandala Ornament Accent
export const GoldMandala = ({ className = "w-32 h-32 opacity-20" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="46" stroke="#D4AF37" strokeWidth="1" strokeDasharray="3 3"/>
    <circle cx="50" cy="50" r="38" stroke="#D4AF37" strokeWidth="0.8"/>
    <circle cx="50" cy="50" r="28" stroke="#D4AF37" strokeWidth="1.2"/>
    <circle cx="50" cy="50" r="14" stroke="#D4AF37" strokeWidth="0.8"/>
    <path d="M50 4 V96 M4 50 H96 M17.5 17.5 L82.5 82.5 M17.5 82.5 L82.5 17.5" stroke="#D4AF37" strokeWidth="0.6"/>
    {Array.from({ length: 8 }).map((_, i) => (
      <circle
        key={i}
        cx={50 + 38 * Math.cos((i * Math.PI) / 4)}
        cy={50 + 38 * Math.sin((i * Math.PI) / 4)}
        r="3"
        fill="#D4AF37"
      />
    ))}
  </svg>
);

// Gold Section Divider Ornament
export const GoldDivider = ({ title }) => (
  <div className="flex items-center justify-center gap-4 my-8 max-w-md mx-auto px-4">
    <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-gold-500/50 to-gold-500" />
    <div className="flex items-center gap-2">
      <span className="w-1.5 h-1.5 rotate-45 bg-gold-400 inline-block" />
      {title && (
        <span className="text-xs uppercase tracking-[0.3em] text-gold-400 font-medium px-2">
          {title}
        </span>
      )}
      <span className="w-2.5 h-2.5 rotate-45 border border-gold-400 inline-block bg-royal-950" />
      <span className="w-1.5 h-1.5 rotate-45 bg-gold-400 inline-block" />
    </div>
    <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-gold-500/50 to-gold-500" />
  </div>
);

// Traditional Corner Flourish Border
export const CornerFlourish = () => (
  <>
    <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 border-gold-500/60 pointer-events-none" />
    <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 border-gold-500/60 pointer-events-none" />
    <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 border-gold-500/60 pointer-events-none" />
    <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 border-gold-500/60 pointer-events-none" />
  </>
);
