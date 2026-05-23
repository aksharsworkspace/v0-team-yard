import { useEffect, useState, useRef, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';

type PixelDotProps = {
  pixelSize: number;
  fadeDuration: number;
  delay: number;
  pixelClassName: string;
  x: number;
  y: number;
  key: string;
};

const PixelDot = ({
  pixelSize,
  fadeDuration,
  delay,
  pixelClassName,
  x,
  y,
  key,
}: PixelDotProps) => {
  const [on, setOn] = useState(false);
  const [mounted, setMounted] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
    // Turn on after delay
    timeoutRef.current = setTimeout(() => {
      setOn(true);
    }, delay);
    // Turn off after fadeDuration
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      // When turning off, we wait for the fade duration then unmount? Actually we just toggle opacity.
      // We'll handle the off timeout in a separate effect.
    };
  }, [delay]);

  useEffect(() => {
    if (on) {
      // Schedule turn off
      timeoutRef.current = setTimeout(() => {
        setOn(false);
      }, fadeDuration);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [on, fadeDuration]);

  if (!mounted) return null;

  const opacity = on ? 1 : 0;

  return (
    <div
      key={key}
      className={`absolute left-[${x}px] top-[${y}px] ${pixelClassName}`}
      style={{
        width: `${pixelSize}px`,
        height: `${pixelSize}px`,
        borderRadius: '50%',
        opacity,
        transition: `opacity ${fadeDuration}ms ease`,
        pointerEvents: 'none',
      }}
    />
  );
};

type PixelTrailProps = {
  pixelSize?: number;
  fadeDuration?: number;
  delay?: number;
  pixelClassName?: string;
};

export const PixelTrail = ({
  pixelSize = 28,
  fadeDuration = 200,
  delay = 600,
  pixelClassName = 'bg-white',
}: PixelTrailProps) => {
  const [dots, setDots] = useState<Array<{ x: number; y: number; id: string }>>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current = { x: e.clientX, y: e.clientY };
  }, []);

  useEffect(() => {
    const addDot = () => {
      setDots(prev => [
        ...prev,
        {
          x: mouseRef.current.x,
          y: mouseRef.current.y,
          id: uuidv4(),
        },
      ]);
      // Keep trail length reasonable
      if (prev.length > 50) {
        setDots(prev => prev.slice(1));
      }
    };

    const animate = () => {
      addDot();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrameRef.current = requestAnimationFrame(animate);

    // Setup mouse move listener
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    >
      {dots.map(dot => (
        <PixelDot
          key={dot.id}
          x={dot.x}
          y={dot.y}
          pixelSize={pixelSize}
          fadeDuration={fadeDuration}
          delay={delay}
          pixelClassName={pixelClassName}
        />
      ))}
    </div>
  );
};