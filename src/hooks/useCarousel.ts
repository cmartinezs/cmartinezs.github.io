"use client";

import { useRef, useState, useCallback, useEffect } from "react";

export function useCarousel(totalItems: number) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [stepWidth, setStepWidth] = useState(0);
  const isAnimatingRef = useRef(false);

  const updateStepWidth = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.children[0] as HTMLElement | undefined;
    if (!slide) return;
    setStepWidth(slide.offsetWidth + 24);
  }, []);

  useEffect(() => {
    updateStepWidth();
    window.addEventListener("resize", updateStepWidth, { passive: true });
    return () => window.removeEventListener("resize", updateStepWidth);
  }, [updateStepWidth]);

  const getVisibleCount = useCallback((): number => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1200;
    if (w < 768) return 1;
    if (w < 992) return 2;
    return 3;
  }, []);

  const goNext = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setOffset((o) => Math.min(o + 1, totalItems - getVisibleCount()));
    setTimeout(() => { isAnimatingRef.current = false; }, 450);
  }, [totalItems, getVisibleCount]);

  const goPrev = useCallback(() => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;
    setOffset((o) => Math.max(o - 1, 0));
    setTimeout(() => { isAnimatingRef.current = false; }, 450);
  }, []);

  const translateX = -offset * stepWidth;

  return { trackRef, offset, translateX, goNext, goPrev };
}
