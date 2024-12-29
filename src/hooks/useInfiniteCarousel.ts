import { useState, useCallback, useEffect, useRef } from 'react';

export default function useInfiniteCarousel<T>(items: T[]) {
  const [currentIndex, setCurrentIndex] = useState(items.length);
  const [slides, setSlides] = useState<T[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef<number>();

  useEffect(() => {
    // Create array with three sets of items for infinite scroll
    setSlides([...items, ...items, ...items]);
  }, [items]);

  const next = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(current => current + 1);
    }
  }, [isTransitioning]);

  const previous = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex(current => current - 1);
    }
  }, [isTransitioning]);

  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
    
    // Reset position without animation
    if (currentIndex >= items.length * 2) {
      timeoutRef.current = window.setTimeout(() => {
        setCurrentIndex(items.length);
      }, 0);
    } else if (currentIndex < items.length) {
      timeoutRef.current = window.setTimeout(() => {
        setCurrentIndex(items.length * 2 - 1);
      }, 0);
    }
  }, [currentIndex, items.length]);

  // Auto-advance the carousel
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => {
      clearInterval(timer);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [next]);

  return {
    currentIndex,
    slides,
    next,
    previous,
    handleTransitionEnd
  };
}