import React from 'react';
import { ParticleCanvas } from './components/GoldDecorations';
import { Navbar } from './components/Navbar';
import { AudioPlayer } from './components/AudioPlayer';
import { Hero } from './components/Hero';
import { GhibliScrollStory } from './components/GhibliScrollStory';
import { WeddingEvents } from './components/WeddingEvents';
import { Countdown } from './components/Countdown';
import { Gallery } from './components/Gallery';
import { VenueSection } from './components/VenueSection';
import { RSVPSection } from './components/RSVPSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen bg-royal-950 text-ivory-100 font-sans relative">
      {/* Ambient Starlight Particles */}
      <ParticleCanvas />

      {/* Clean Header - Monogram + CTA */}
      <Navbar />

      {/* Audio Controller */}
      <AudioPlayer autoPlayTriggered={true} />

      {/* Main Storytelling Flow */}
      <main>
        <Hero />
        <GhibliScrollStory />
        <WeddingEvents />
        <Countdown />
        <Gallery />
        <VenueSection />
        <RSVPSection />
      </main>

      {/* Closing Footer */}
      <Footer />
    </div>
  );
}

export default App;
