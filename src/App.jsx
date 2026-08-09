import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WatchAnimationSection from './components/WatchAnimationSection';
import Preloader from './components/Preloader';
import PreorderModal from './components/PreorderModal';

export default function App() {
  const [loadedCount, setLoadedCount] = useState(0);
  const [isPreorderOpen, setIsPreorderOpen] = useState(false);

  const totalFrames = 300;
  const isReady = loadedCount >= 20;

  const scrollToAnimation = () => {
    const el = document.getElementById('animation-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#000000] text-white min-h-screen selection:bg-white/20 selection:text-white">
      {/* Initial Loading Screen */}
      <Preloader
        loadedCount={loadedCount}
        totalFrames={totalFrames}
        isReady={isReady}
      />

      {/* Header Navigation */}
      <Header onOpenPreorder={() => setIsPreorderOpen(true)} />

      {/* Main Content Sections */}
      <main className="bg-[#000000]">
        {/* Viewport 1: Hero Section */}
        <Hero onExploreClick={scrollToAnimation} />

        {/* Viewport 2: GSAP ScrollTrigger Pinned 300-Frame Watch Disassembly Section */}
        <WatchAnimationSection
          onImagesLoaded={(count) => setLoadedCount(count)}
        />
      </main>

      {/* Concierge Preorder Allocation Modal */}
      <PreorderModal
        isOpen={isPreorderOpen}
        onClose={() => setIsPreorderOpen(false)}
      />
    </div>
  );
}
