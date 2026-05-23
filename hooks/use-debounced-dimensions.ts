import { useState, useEffect } from 'react';

export function useDebouncedDimensions<T extends HTMLElement>(
  elementRef: React.RefObject<T>,
  delay = 100
) {
  const [dimensions, setDimensions] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const updateDimensions = () => {
      if (element) {
        setDimensions({
          width: element.clientWidth,
          height: element.clientHeight,
        });
      }
    };

    // Initial update
    updateDimensions();

    const handleResize = () => {
      // Debounce the resize handler
      if (window.resizeTimeout) {
        clearTimeout(window.resizeTimeout);
      }
      window.resizeTimeout = window.setTimeout(updateDimensions, delay);
    };

    window.addEventListener('resize', handleResize);
    // Also listen for orientation changes on mobile
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (window.resizeTimeout) {
        clearTimeout(window.resizeTimeout);
      }
    };
  }, [elementRef, delay]);

  return dimensions;
}