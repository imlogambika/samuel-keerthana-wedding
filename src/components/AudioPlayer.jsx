import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music, Play, Pause } from 'lucide-react';

export const AudioPlayer = ({ autoPlayTriggered, onAudioStart }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [usingAudioFile, setUsingAudioFile] = useState(true);
  const audioRef = useRef(null);
  const audioCtxRef = useRef(null);
  const synthNodesRef = useRef([]);

  // Synthesize soft Indian veena/flute ambient chords if MP3 is unavailable
  const startWebAudioSynth = () => {
    try {
      if (!audioCtxRef.current) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioContext();
      }
      
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      // Clear existing nodes
      synthNodesRef.current.forEach(node => {
        try { node.stop(); node.disconnect(); } catch (e) {}
      });
      synthNodesRef.current = [];

      const ctx = audioCtxRef.current;
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(isMuted ? 0 : 0.15, ctx.currentTime);
      masterGain.connect(ctx.destination);

      // Warm South Indian Raaga Drone frequencies (Hz): A3, E4, A4, C#5
      const freqs = [220.00, 329.63, 440.00, 554.37];
      
      freqs.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        
        // Sine + warm triangle harmonics
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Gentle swell oscillation
        gain.gain.setValueAtTime(0.02 + idx * 0.01, ctx.currentTime);
        
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start();
        synthNodesRef.current.push(osc);
      });

      setIsPlaying(true);
    } catch (err) {
      console.warn('Web Audio synth fallback error:', err);
    }
  };

  const stopWebAudioSynth = () => {
    synthNodesRef.current.forEach(node => {
      try { node.stop(); node.disconnect(); } catch (e) {}
    });
    synthNodesRef.current = [];
    if (audioCtxRef.current) {
      try { audioCtxRef.current.suspend(); } catch (e) {}
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      if (audioRef.current && usingAudioFile) {
        audioRef.current.pause();
      }
      stopWebAudioSynth();
      setIsPlaying(false);
    } else {
      playAudio();
    }
  };

  const playAudio = () => {
    if (audioRef.current && usingAudioFile) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            if (onAudioStart) onAudioStart();
          })
          .catch((err) => {
            console.log('HTML5 Audio play blocked/failed, switching to Web Audio Synth:', err);
            setUsingAudioFile(false);
            startWebAudioSynth();
            if (onAudioStart) onAudioStart();
          });
      }
    } else {
      startWebAudioSynth();
      if (onAudioStart) onAudioStart();
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    const newMuted = !isMuted;
    setIsMuted(newMuted);

    if (audioRef.current && usingAudioFile) {
      audioRef.current.muted = newMuted;
    }

    if (audioCtxRef.current) {
      try {
        const ctx = audioCtxRef.current;
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(newMuted ? 0 : 0.15, ctx.currentTime);
      } catch (e) {}
    }
  };

  // Trigger play when requested by parent (e.g. from Opening Curtain button)
  useEffect(() => {
    if (autoPlayTriggered && !isPlaying) {
      playAudio();
    }
  }, [autoPlayTriggered]);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Hidden HTML5 Audio Tag */}
      <audio
        ref={audioRef}
        src="/assets/oru_paadhi_kadhavu.mp3"
        loop
        preload="auto"
        onError={() => setUsingAudioFile(false)}
      />

      <div className="glass-panel group rounded-full border border-gold-500/40 shadow-xl transition-all duration-300 flex items-center gap-2">
        {/* Equalizer - clickable for play/pause */}
        <div 
          onClick={togglePlay}
          className="flex items-center gap-2 pl-3 pr-2 py-2.5 cursor-pointer"
        >
          <div className="flex items-end gap-0.5 h-4 w-4">
            {[0.6, 1, 0.4, 0.8].map((h, i) => (
              <span
                key={i}
                className={`w-0.5 bg-gradient-to-t from-gold-600 to-gold-300 rounded-full transition-all duration-300 ${
                  isPlaying && !isMuted ? 'animate-pulse' : 'h-1'
                }`}
                style={{
                  height: isPlaying && !isMuted ? `${h * 100}%` : '25%',
                  animationDelay: `${i * 150}ms`,
                  animationDuration: '600ms'
                }}
              />
            ))}
          </div>

          <div className="hidden sm:flex flex-col">
            <span className="text-[9px] tracking-[0.2em] uppercase text-gold-400 font-semibold leading-tight">
              Music
            </span>
            <span className="text-[10px] text-ivory-200 font-medium truncate max-w-[100px]">
              Oru Paadhi Kadhavu
            </span>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center gap-1 pr-2">
          <button
            onClick={togglePlay}
            className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-300 hover:bg-gold-500 hover:text-royal-950 transition-colors"
            title={isPlaying ? 'Pause Music' : 'Play Music'}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
          </button>

          <button
            onClick={toggleMute}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gold-400 hover:text-gold-200 transition-colors"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
          </button>
        </div>
      </div>
    </div>
  );
};
