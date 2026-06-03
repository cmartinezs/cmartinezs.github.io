"use client";

import { useRef, useState, useCallback, useEffect } from "react";

export function useInfiniteCarousel(totalItems: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [stepWidth, setStepWidth] = useState(0);
  const [animated, setAnimated] = useState(true);
  const isInitialized = useRef(false);
  const isAnimatingRef = useRef(false);

  const recalcStepWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[0] as HTMLElement | undefined;
    if (!slide) return;
    const w = slide.offsetWidth + 24; // 24px = gap (1.5rem)
    if (!isInitialized.current) {
      isInitialized.current = true;
      setStepWidth(w);
      setAnimated(false);
      setOffset(totalItems);
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
    } else {
      setStepWidth(w);
    }
  }, [totalItems]);

  // Effect 1: step width (must be declared before the snap effect)
  useEffect(() => {
    recalcStepWidth();
    window.addEventListener("resize", recalcStepWidth, { passive: true });
    return () => window.removeEventListener("resize", recalcStepWidth);
  }, [recalcStepWidth]);

  // Effect 2: silent snap when entering clone zones
  useEffect(() => {
    if (!isInitialized.current) return;
    if (offset < totalItems || offset >= totalItems * 2) {
      const timer = setTimeout(() => {
        setAnimated(false);
        setOffset((o) => {
          if (o >= totalItems * 2) return o - totalItems;
          if (o < totalItems) return o + totalItems;
          return o;
        });
        requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)));
      }, 420); // match CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [offset, totalItems]);

  const goNext = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setOffset((o) => o + 1);
    setTimeout(() => { isAnimatingRef.current = false; }, 450);
  }, []);

  const goPrev = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setOffset((o) => o - 1);
    setTimeout(() => { isAnimatingRef.current = false; }, 450);
  }, []);

  const translateX = -offset * stepWidth;

  return { trackRef, translateX, goNext, goPrev, animated };
}
