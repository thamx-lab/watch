import React, { useRef, useEffect } from 'react';

export default function WatchCanvas({ currentFrameIndex, loadedImages }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Retrieve target image or nearest fallback
    let img = loadedImages[currentFrameIndex];
    if (!img || !img.complete) {
      for (let offset = 1; offset < 300; offset++) {
        const lower = currentFrameIndex - offset;
        const upper = currentFrameIndex + offset;
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

    // High DPI scaling for ultra sharpness
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
    
    // Pure black canvas background #000000
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);

    if (img && img.naturalWidth > 0) {
      // Contain logic: watch occupies ~75-80% of canvas height
      const targetMaxHeight = height * 0.80;
      const targetMaxWidth = width * 0.85;

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

      ctx.drawImage(img, drawX, drawY, drawW, drawH);
    }

    ctx.restore();
  }, [currentFrameIndex, loadedImages]);

  return (
    <div className="w-full h-full flex items-center justify-center bg-[#000000] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block bg-[#000000]"
        aria-label={`300-frame watch disassembly view showing frame ${currentFrameIndex + 1}`}
      />
    </div>
  );
}
