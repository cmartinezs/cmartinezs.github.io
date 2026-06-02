export function getStepSize(
  trackElement: HTMLElement,
  gap: number,
  visibleCount: number
): number {
  const slides = Array.from(trackElement.children) as HTMLElement[];
  if (!slides.length) return 0;
  const slideWidth = slides[0]?.offsetWidth ?? 0;
  return (slideWidth + gap) * visibleCount;
}

export function clampOffset(offset: number, max: number): number {
  return Math.max(0, Math.min(offset, max));
}
