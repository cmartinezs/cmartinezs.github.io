"use client";

import { useEffect, useState } from "react";

export function useHeroAnimation() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShouldAnimate(!prefersReduced);
  }, []);

  return { shouldAnimate };
}
