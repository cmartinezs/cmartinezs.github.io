export const initCarouselContext = () => {
  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const track = carousel.querySelector("[data-carousel-track]");
    const prevButton = carousel.querySelector("[data-carousel-prev]");
    const nextButton = carousel.querySelector("[data-carousel-next]");

    if (!track || !prevButton || !nextButton || track.children.length < 2) {
      return;
    }

    let isAnimating = false;

    const getStepSize = () => {
      const firstSlide = track.children[0];

      if (!(firstSlide instanceof HTMLElement)) {
        return 0;
      }

      const trackStyles = window.getComputedStyle(track);
      const gap = Number.parseFloat(trackStyles.columnGap || trackStyles.gap || "0");

      return firstSlide.getBoundingClientRect().width + gap;
    };

    const animateNext = () => {
      if (isAnimating) {
        return;
      }

      const step = getStepSize();

      if (!step) {
        return;
      }

      isAnimating = true;
      track.style.transition = "transform 420ms ease";
      track.style.transform = `translateX(-${step}px)`;

      const handleTransitionEnd = () => {
        track.style.transition = "none";
        track.append(track.firstElementChild);
        track.style.transform = "translateX(0)";

        requestAnimationFrame(() => {
          track.style.transition = "";
          isAnimating = false;
        });
      };

      track.addEventListener("transitionend", handleTransitionEnd, { once: true });
    };

    const animatePrev = () => {
      if (isAnimating) {
        return;
      }

      const step = getStepSize();

      if (!step) {
        return;
      }

      isAnimating = true;
      track.style.transition = "none";
      track.prepend(track.lastElementChild);
      track.style.transform = `translateX(-${step}px)`;

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          track.style.transition = "transform 420ms ease";
          track.style.transform = "translateX(0)";
        });
      });

      const handleTransitionEnd = () => {
        track.style.transition = "";
        isAnimating = false;
      };

      track.addEventListener("transitionend", handleTransitionEnd, { once: true });
    };

    prevButton.addEventListener("click", animatePrev);
    nextButton.addEventListener("click", animateNext);
  });
};
