"use client"

import React, { useRef, useEffect } from 'react';

interface AsciiVideoProps {
  src: string;
  className?: string;
  chars?: string;
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
}

export function AsciiVideo({
  src,
  className = "",
  chars = " .:-=+*#%@",
  fontSize = 12,
  color = "rgba(123, 97, 255, 0.4)", // A muted purple from the theme
  backgroundColor = "transparent"
}: AsciiVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hiddenCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const hiddenCanvas = hiddenCanvasRef.current;
    if (!video || !canvas || !hiddenCanvas) return;

    const ctx = canvas.getContext('2d');
    const hctx = hiddenCanvas.getContext('2d', { willReadFrequently: true });
    if (!ctx || !hctx) return;

    let animationFrameId: number;

    const resizeAndPlay = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const { width, height } = parent.getBoundingClientRect();
      
      canvas.width = width;
      canvas.height = height;

      // Adjust aspect ratio mapping
      // Standard video might be 16:9, but we just stretch/cover it
      const cols = Math.floor(width / fontSize);
      const rows = Math.floor(height / fontSize);
      
      hiddenCanvas.width = cols;
      hiddenCanvas.height = rows;

      video.play().catch(() => {
        console.warn("Autoplay was prevented by the browser.");
      });
    };

    window.addEventListener('resize', resizeAndPlay);
    
    // Sometimes video is already loaded
    if (video.readyState >= 2) {
      resizeAndPlay();
    } else {
      video.addEventListener('loadeddata', resizeAndPlay);
    }

    const renderFrame = () => {
      if (!video.paused && !video.ended) {
        const w = hiddenCanvas.width;
        const h = hiddenCanvas.height;

        // Draw video frame to hidden canvas, stretching to fill
        hctx.drawImage(video, 0, 0, w, h);
        
        const imgData = hctx.getImageData(0, 0, w, h);
        const pixels = imgData.data;

        // Clear main canvas
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = color;
        ctx.font = `${fontSize}px monospace`;
        ctx.textBaseline = 'top';

        // Map pixels to ascii
        for (let y = 0; y < h; y++) {
          for (let x = 0; x < w; x++) {
            const idx = (y * w + x) * 4;
            const r = pixels[idx];
            const g = pixels[idx + 1];
            const b = pixels[idx + 2];
            
            // Brightness formula
            const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
            const charIdx = Math.floor(brightness * (chars.length - 1));
            const char = chars[charIdx];

            if (char !== ' ') {
              ctx.fillText(char, x * fontSize, y * fontSize);
            }
          }
        }
      }
      animationFrameId = requestAnimationFrame(renderFrame);
    };

    renderFrame();

    return () => {
      window.removeEventListener('resize', resizeAndPlay);
      video.removeEventListener('loadeddata', resizeAndPlay);
      cancelAnimationFrame(animationFrameId);
    };
  }, [src, chars, fontSize, color, backgroundColor]);

  return (
    <div className={`relative overflow-hidden w-full h-full ${className}`}>
      <video
        ref={videoRef}
        src={src}
        crossOrigin="anonymous"
        loop
        muted
        playsInline
        className="hidden"
      />
      <canvas ref={hiddenCanvasRef} className="hidden" />
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
}
