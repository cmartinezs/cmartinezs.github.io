export const initHeroContext = () => {
  const hero = document.querySelector("[data-hero]");

  if (!hero) {
    return;
  }

  const heroAnimate = window.anime?.animate;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!heroAnimate || reduceMotion) {
    return;
  }

  const revealItems = Array.from(hero.querySelectorAll("[data-hero-reveal]"));
  const panels = Array.from(hero.querySelectorAll("[data-hero-panel]"));
  const terminal = hero.querySelector("[data-hero-terminal]");

  if (revealItems.length) {
    heroAnimate(revealItems, {
      opacity: [0, 1],
      translateY: [18, 0],
      duration: 720,
      delay: (_, index) => 120 + index * 90,
      ease: "outCubic",
    });
  }

  if (panels.length) {
    heroAnimate(panels, {
      opacity: [0, 1],
      translateX: [24, 0],
      scale: [0.985, 1],
      duration: 820,
      delay: (_, index) => 280 + index * 110,
      ease: "outCubic",
    });
  }

  if (terminal) {
    heroAnimate(terminal, {
      translateY: [0, -6, 0],
      duration: 4200,
      loop: true,
      ease: "inOutSine",
    });
  }
};
