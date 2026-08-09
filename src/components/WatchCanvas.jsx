import React, { useRef, useEffect } from 'react';

export default function WatchCanvas({
  currentFrameIndex,
  loadedImages,
  activeComponent,
  precisionMode = false,
  dragOffset = 0
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Get target image frame or fallback to nearest loaded frame
    let renderFrameIndex = currentFrameIndex;

    // If dragOffset is present at frame 300 (Final Exploded View), adjust render frame index smoothly
    if (dragOffset !== 0 && currentFrameIndex >= 295) {
      const shift = Math.round(dragOffset / 20);
      renderFrameIndex = Math.max(285, Math.min(299, currentFrameIndex + shift));
    }

    let img = loadedImages[renderFrameIndex];
    if (!img || !img.complete) {
      for (let offset = 1; offset < 300; offset++) {
        const lower = renderFrameIndex - offset;
        const upper = renderFrameIndex + offset;
        if (lower >= 0 && loadedImages[lower] && loadedImages[lower].complete) {
          img = loadedImages[lower];
          break;
        }
        if (upper < 300 && loadedImages[upper] && loadedImages[upper].complete) {
          img = loadedImages[upper];
          break;
        }
      }
    }

    // High DPI Canvas Scaling
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Pure black background #000000
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    if (img && img.naturalWidth > 0) {
      // Contain logic with Precision Mode scale multiplier
      const scaleMultiplier = precisionMode ? 1.35 : 1.0;
      const targetMaxHeight = height * 0.78 * scaleMultiplier;
      const targetMaxWidth = width * 0.85 * scaleMultiplier;

      const imgAspect = img.naturalWidth / img.naturalHeight;
      let drawW = targetMaxHeight * imgAspect;
      let drawH = targetMaxHeight;

      if (drawW > targetMaxWidth) {
        drawW = targetMaxWidth;
        drawH = drawW / imgAspect;
      }

      // Center watch horizontally & vertically
      const drawX = (width - drawW) / 2;
      const drawY = (height - drawH) / 2;

      // Draw original authentic watch frame image
      ctx.drawImage(img, drawX, drawY, drawW, drawH);

      // FEATURE 04 — Component Spotlight:
      // Subtle radial spotlight around active component, gently dimming non-active area
      if (activeComponent && activeComponent.spotlightZone && activeComponent.spotlightZone !== 'none') {
        const spotlightZone = activeComponent.spotlightZone;
        let focalX = width / 2;
        let focalY = height / 2;
        let focalRadius = Math.min(drawW, drawH) * 0.35;

        if (spotlightZone === 'top') focalY = height * 0.35;
        if (spotlightZone === 'ring') focalRadius = Math.min(drawW, drawH) * 0.45;
        if (spotlightZone === 'side') focalX = width * 0.55;
        if (spotlightZone === 'base') focalY = height * 0.68;

        // Apply a subtle darkening vignette around non-focal area
        const vignette = ctx.createRadialGradient(
          focalX,
          focalY,
          focalRadius * 0.5,
          focalX,
          focalY,
          Math.max(width, height) * 0.7
        );
        vignette.addColorStop(0, 'rgba(0, 0, 0, 0)');
        vignette.addColorStop(0.6, 'rgba(0, 0, 0, 0.15)');
        vignette.addColorStop(1, 'rgba(0, 0, 0, 0.4)');

        ctx.fillStyle = vignette;
        ctx.fillRect(0, 0, width, height);
      }
    }

    ctx.restore();
  }, [currentFrameIndex, loadedImages, activeComponent, precisionMode, dragOffset]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#000000] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block bg-[#000000] transition-transform duration-500 ease-out"
        aria-label={`300-frame watch disassembly view showing frame ${currentFrameIndex + 1}`}
      />
    </div>
  );
}
