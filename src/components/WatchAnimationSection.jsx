import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WatchCanvas from './WatchCanvas';
import WatchDescriptionPanel from './WatchDescriptionPanel';
import ComponentHotspot from './ComponentHotspot';
import ComponentTimeline from './ComponentTimeline';
import PrecisionModeToggle from './PrecisionModeToggle';
import { TOTAL_FRAMES, getComponentForFrame } from '../config/watchTimeline';

gsap.registerPlugin(ScrollTrigger);

export default function WatchAnimationSection({ onProgressUpdate, onImagesLoaded }) {
  const sectionRef = useRef(null);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState([]);
  const [precisionMode, setPrecisionMode] = useState(false);

  // Drag interaction state for Feature 05 (Final Exploded View Interaction)
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Preload 300 frames strategically
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

  // GSAP ScrollTrigger for Pinning & Frame Scrubbing
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
      scrub: 0.1, // Smooth direct 1-to-1 scroll scrubbing
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

  // SINGLE SOURCE OF TRUTH: active component derived from currentFrameIndex
  const activeComponent = getComponentForFrame(currentFrameIndex);

  // Timeline click handler: Smoothly scroll to selected component's start frame
  const handleTimelineSelect = (targetStartFrame) => {
    const st = ScrollTrigger.getById('watch-scrub-trigger');
    if (!st) return;

    const targetProgress = (targetStartFrame - 1) / 299;
    const scrollPos = st.start + targetProgress * (st.end - st.start);

    window.scrollTo({
      top: scrollPos,
      behavior: 'smooth'
    });
  };

  // Handlers for Feature 05 (Final Exploded View Drag Interaction)
  const handleMouseDown = (e) => {
    if (currentFrameIndex >= 290) {
      setIsDragging(true);
      setDragStartX(e.clientX);
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - dragStartX;
      setDragOffset(deltaX);
    }
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  const handleTouchStart = (e) => {
    if (currentFrameIndex >= 290 && e.touches.length === 1) {
      setIsDragging(true);
      setDragStartX(e.touches[0].clientX);
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && e.touches.length === 1) {
      const deltaX = e.touches[0].clientX - dragStartX;
      setDragOffset(deltaX);
    }
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      setDragOffset(0);
    }
  };

  return (
    <section
      id="animation-section"
      ref={sectionRef}
      className="relative w-full h-screen bg-[#000000] overflow-hidden"
    >
      {/* FEATURE 03 — Precision Mode Toggle Button */}
      <PrecisionModeToggle
        precisionMode={precisionMode}
        onToggle={() => setPrecisionMode(!precisionMode)}
      />

      {/* Pinned Viewport Container (Pure Black #000000) */}
      <div
        className="w-full h-full flex items-center justify-center bg-[#000000] relative overflow-hidden select-none"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Centered Watch Canvas & Feature 04 Spotlight */}
        <div className="w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center relative bg-[#000000]">
          <WatchCanvas
            currentFrameIndex={currentFrameIndex}
            loadedImages={loadedImages}
            activeComponent={activeComponent}
            precisionMode={precisionMode}
            dragOffset={dragOffset}
          />

          {/* FEATURE 01 — Component Hotspot (Renders dot + label over active component) */}
          <ComponentHotspot activeComponent={activeComponent} />
        </div>

        {/* Specification Text (Fixed position left side, pure white typography) */}
        <div className="absolute left-6 sm:left-12 lg:left-20 top-1/2 -translate-y-1/2 max-w-[260px] sm:max-w-xs z-20 pointer-events-none">
          <WatchDescriptionPanel stage={activeComponent} />
        </div>

        {/* FEATURE 02 — Component Timeline (Far right edge list) */}
        <ComponentTimeline
          activeComponent={activeComponent}
          onSelectComponent={handleTimelineSelect}
        />

        {/* FEATURE 05 — Final Exploded View Interaction Cue (At Frame 300) */}
        {currentFrameIndex >= 290 && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] text-[#FFFFFF]/70 tracking-widest uppercase pointer-events-none animate-pulse">
            DRAG HORIZONTALLY TO EXPLORE EXPLODED VIEW
          </div>
        )}
      </div>
    </section>
  );
}
