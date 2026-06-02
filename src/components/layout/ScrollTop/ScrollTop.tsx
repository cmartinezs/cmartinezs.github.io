"use client";

import { cn } from "@/lib/cn";
import { useScrollTop } from "@/hooks/useScrollTop";

export function ScrollTop() {
  const { isVisible, scrollToTop } = useScrollTop();

  return (
    <button
      type="button"
      className={cn("scroll-top", isVisible && "is-visible")}
      onClick={scrollToTop}
      aria-label="Volver arriba"
    >
      ↑
    </button>
  );
}
