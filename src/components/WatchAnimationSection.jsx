import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WatchCanvas from './WatchCanvas';
import WatchDescriptionPanel from './WatchDescriptionPanel';
import { TOTAL_FRAMES, getStageForFrame } from '../config/watchTimeline';

gsap.registerPlugin(ScrollTrigger);

export default function WatchAnimationSection({ onProgressUpdate, onImagesLoaded }) {
  const sectionRef = useRef(null);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);

  // Preload frames strategically in background
  useEffect(() => {
    const images = new Array(TOTAL_FRAMES);
    let count = 0;

    const loadFrame = (index) => {
      return new Promise((resolve) => {
        const img = new Image();
        const frameNum = String(index + 1).padStart(3, '0');
        img.src = `/frames/frame_${frameNum}.jpg`;

        img.onload = () => {
          images[index] = img;
          count++;
          if (onImagesLoaded) onImagesLoaded(count);
          resolve();
        };

        img.onerror = () => {
          images[index] = images[0] || null;
          count++;
          resolve();
        };
      });
    };

    const priorityIndices = [];
    for (let i = 0; i < 40; i++) priorityIndices.push(i);
    for (let i = 40; i < TOTAL_FRAMES; i++) priorityIndices.push(i);

    let isCancelled = false;

    const loadAll = async () => {
      const firstBatch = priorityIndices.slice(0, 25);
      await Promise.all(firstBatch.map((idx) => loadFrame(idx)));
      setLoadedImages([...images]);

      const rest = priorityIndices.slice(25);
      for (let i = 0; i < rest.length; i += 10) {
        if (isCancelled) break;
        const chunk = rest.slice(i, i + 10);
        await Promise.all(chunk.map((idx) => loadFrame(idx)));
        setLoadedImages([...images]);
      }
    };

    loadAll();

    return () => {
      isCancelled = true;
    };
  }, []);

  // Set up GSAP ScrollTrigger for Pinning & Scrubbing
  useEffect(() => {
    if (!sectionRef.current) return;

    const existingST = ScrollTrigger.getById('watch-scrub-trigger');
    if (existingST) existingST.kill();

    const st = ScrollTrigger.create({
      id: 'watch-scrub-trigger',
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=5000', // 5000px scroll distance consumed by watch scrubbing
      pin: true,
      scrub: 0.1, // Responsive direct scrubbing
      anticipatePin: 1,
      onUpdate: (self) => {
        const progress = self.progress; // 0.0 to 1.0
        const frameIdx = Math.max(0, Math.min(299, Math.round(progress * 299)));
        setCurrentFrameIndex(frameIdx);
        if (onProgressUpdate) onProgressUpdate(progress, frameIdx);
      },
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      st.kill();
    };
  }, [loadedImages.length > 0]);

  const currentStage = getStageForFrame(currentFrameIndex);

  return (
    <section
      id="animation-section"
      ref={sectionRef}
      className="relative w-full h-screen bg-[#000000] overflow-hidden"
    >
      {/* Pinned Viewport Container (Pure Black #000000) */}
      <div className="w-full h-full flex items-center justify-center bg-[#000000] relative overflow-hidden">
        
        {/* Centered Watch Canvas */}
        <div className="w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center relative bg-[#000000]">
          <WatchCanvas
            currentFrameIndex={currentFrameIndex}
            loadedImages={loadedImages}
          />
        </div>

        {/* Absolutely Positioned Plain White Specification Text (Left Side, zero layout flow impact) */}
        <div className="absolute left-6 sm:left-12 lg:left-20 top-1/2 -translate-y-1/2 max-w-[260px] sm:max-w-xs z-20 pointer-events-none">
          <WatchDescriptionPanel stage={currentStage} />
        </div>
      </div>
    </section>
  );
}
