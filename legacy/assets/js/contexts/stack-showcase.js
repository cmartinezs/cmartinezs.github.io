export const initStackShowcaseContext = () => {
  document.querySelectorAll("[data-stack]").forEach((stack) => {
    const stackAnimate = window.anime?.animate;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const categoryViewport = stack.querySelector("[data-stack-category-viewport]");
    const categoryTrack = stack.querySelector("[data-stack-category-track]");
    const firstButton = stack.querySelector("[data-stack-first]");
    const prevButton = stack.querySelector("[data-stack-prev]");
    const nextButton = stack.querySelector("[data-stack-next]");
    const lastButton = stack.querySelector("[data-stack-last]");
    const controls = Array.from(stack.querySelectorAll(".stack-browser-control"));
    const label = stack.querySelector("[data-stack-current-label]");
    const title = stack.querySelector("[data-stack-current-title]");
    const description = stack.querySelector("[data-stack-current-description]");
    const grid = stack.querySelector("[data-stack-grid]");
    const filters = Array.from(stack.querySelectorAll("[data-stack-filter]"));
    const cards = Array.from(grid?.querySelectorAll("[data-stack-group]") || []);

    if (!categoryViewport || !categoryTrack || !firstButton || !prevButton || !nextButton || !lastButton || !label || !title || !description || !grid || !filters.length || !cards.length) {
      return;
    }

    let activeIndex = filters.findIndex((button) => button.classList.contains("is-active"));
    let transitionTimer;
    let animationRun = 0;

    if (activeIndex < 0) {
      activeIndex = 0;
    }

    const activeCategoryShadow = "inset 0 1px 0 rgba(255, 255, 255, 0.46), inset 0 -1.4rem 2.2rem rgba(73, 210, 255, 0.16), inset 0 0 1.8rem rgba(73, 210, 255, 0.16), 0 0.9rem 0.28rem rgba(130, 247, 191, 0.1), 0 2rem 4.5rem rgba(73, 210, 255, 0.18)";
    const inactiveCategoryShadow = "inset 0 1px 0 rgba(255, 255, 255, 0.28), inset 0 -1.1rem 1.8rem rgba(73, 210, 255, 0.07), inset 0 0 1rem rgba(73, 210, 255, 0.06), 0 0.65rem 0.12rem rgba(73, 210, 255, 0.04), 0 1.2rem 3rem rgba(0, 0, 0, 0.2)";

    const getCategoryState = (index) => {
      const distance = index - activeIndex;
      const isActive = distance === 0;
      const depth = Math.min(Math.abs(distance), 3);
      const sideTurn = distance < 0 ? -42 : 42;

      return {
        isActive,
        opacity: isActive ? 1 : Math.max(0.5, 0.82 - depth * 0.11),
        translateY: isActive ? -4 : depth * 2,
        rotateX: 0,
        rotateY: isActive ? -8 : sideTurn,
        rotateZ: distance * -1.5,
        scale: isActive ? 1.07 : Math.max(0.88, 0.97 - depth * 0.035),
        boxShadow: isActive ? activeCategoryShadow : inactiveCategoryShadow,
        filter: isActive ? "saturate(1.35) brightness(1.08)" : `saturate(${Math.max(0.65, 0.92 - depth * 0.08)}) brightness(${Math.max(0.72, 0.9 - depth * 0.05)})`,
      };
    };

    const setCategoryDeckState = () => {
      filters.forEach((card, index) => {
        const state = getCategoryState(index);

        card.style.opacity = String(state.opacity);
        card.style.transform = `translateY(${state.translateY}px) rotateX(${state.rotateX}deg) rotateY(${state.rotateY}deg) rotateZ(${state.rotateZ}deg) scale(${state.scale})`;
        card.style.boxShadow = state.boxShadow;
        card.style.filter = state.filter;
      });
    };

    const animateCategoryDeck = (trigger) => {
      if (!stackAnimate || reduceMotion) {
        setCategoryDeckState();
        return;
      }

      stackAnimate(categoryTrack, {
        opacity: [0.72, 1],
        translateY: [10, 0],
        duration: 460,
        ease: "outCubic",
        onComplete: () => {
          categoryTrack.style.removeProperty("opacity");
          categoryTrack.style.removeProperty("transform");
          categoryTrack.style.removeProperty("translate");
        },
      });

      filters.forEach((card, index) => {
        const state = getCategoryState(index);

        stackAnimate(card, {
          opacity: state.opacity,
          translateY: state.isActive ? [-8, state.translateY] : state.translateY,
          rotateX: state.rotateX,
          rotateY: state.isActive ? [-14, state.rotateY] : state.rotateY,
          rotateZ: state.rotateZ,
          scale: state.isActive ? [1.02, state.scale] : state.scale,
          boxShadow: state.boxShadow,
          filter: state.filter,
          duration: 620,
          delay: (_, index) => index * 28,
          ease: "outCubic",
        });
      });

      if (trigger && !filters.includes(trigger)) {
        stackAnimate(trigger, {
          scale: [1, 0.86, 1],
          opacity: [1, 0.72, 1],
          duration: 460,
          ease: "outCubic",
          onComplete: () => {
            trigger.style.removeProperty("scale");
            trigger.style.removeProperty("opacity");
          },
        });
      }
    };

    const animateStackChange = (visibleCards) => {
      animationRun += 1;

      if (!stackAnimate || reduceMotion) {
        visibleCards.forEach((card, index) => {
          card.style.animationDelay = `${index * 45}ms`;
          requestAnimationFrame(() => {
            card.classList.add("is-highlighted");
          });
        });

        return;
      }

      const panelCopy = [label, title, description];
      const currentRun = animationRun;

      visibleCards.forEach((card) => {
        card.style.transition = "none";
      });

      stackAnimate(panelCopy, {
        opacity: [0, 1],
        translateY: [8, 0],
        duration: 420,
        delay: (_, index) => index * 45,
        ease: "outCubic",
        onComplete: () => {
          if (currentRun !== animationRun) {
            return;
          }

          panelCopy.forEach((item) => {
            item.style.removeProperty("opacity");
            item.style.removeProperty("transform");
            item.style.removeProperty("translate");
          });
        },
      });

      stackAnimate(visibleCards, {
        opacity: [0, 1],
        translateY: [18, 0],
        scale: [0.96, 1],
        duration: 560,
        delay: (_, index) => index * 55,
        ease: "outBack",
        onComplete: () => {
          if (currentRun !== animationRun) {
            return;
          }

          visibleCards.forEach((card) => {
            card.style.removeProperty("opacity");
            card.style.removeProperty("transform");
            card.style.removeProperty("translate");
            card.style.removeProperty("scale");
            card.style.removeProperty("transition");
          });
        },
      });
    };

    const syncViewport = () => {
      const activeButton = filters[activeIndex];

      if (!(activeButton instanceof HTMLElement)) {
        return;
      }

      const viewportRect = categoryViewport.getBoundingClientRect();
      const activeRect = activeButton.getBoundingClientRect();
      const activeCenter = activeRect.left + activeRect.width / 2;
      const viewportCenter = viewportRect.left + viewportRect.width / 2;

      categoryViewport.scrollTo({
        left: categoryViewport.scrollLeft + activeCenter - viewportCenter,
        behavior: "smooth",
      });
    };

    const applyCategory = (button) => {
      const filter = button.dataset.stackFilter || "";

      label.textContent = button.dataset.stackLabel || button.textContent?.trim() || "";
      title.textContent = button.dataset.stackTitle || "";
      description.textContent = button.dataset.stackDescription || "";
      grid.classList.add("is-filtered");

      filters.forEach((candidate, index) => {
        candidate.classList.toggle("is-active", index === activeIndex);
      });

      const visibleCards = [];

      cards.forEach((card) => {
        const groups = (card.dataset.stackGroup || "").split(/\s+/).filter(Boolean);
        const matches = groups.includes(filter);

        card.hidden = !matches;
        card.classList.toggle("is-visible", matches);
        card.classList.remove("is-highlighted");
        card.style.animationDelay = "";
        card.style.removeProperty("opacity");
        card.style.removeProperty("transform");
        card.style.removeProperty("translate");
        card.style.removeProperty("scale");
        card.style.removeProperty("transition");

        if (matches) {
          visibleCards.push(card);
        }
      });

      animateStackChange(visibleCards);
    };

    const selectCategory = (nextIndex, trigger) => {
      window.clearTimeout(transitionTimer);
      activeIndex = (nextIndex + filters.length) % filters.length;
      grid.classList.add("is-transitioning");

      syncViewport();
      animateCategoryDeck(trigger);

      transitionTimer = window.setTimeout(() => {
        applyCategory(filters[activeIndex]);
        requestAnimationFrame(() => {
          grid.classList.remove("is-transitioning");
        });
      }, 150);
    };

    filters.forEach((button, index) => {
      button.addEventListener("click", () => {
        selectCategory(index, button);
      });
    });

    firstButton.addEventListener("click", () => {
      selectCategory(0, firstButton);
    });

    prevButton.addEventListener("click", () => {
      selectCategory(activeIndex - 1, prevButton);
    });

    nextButton.addEventListener("click", () => {
      selectCategory(activeIndex + 1, nextButton);
    });

    lastButton.addEventListener("click", () => {
      selectCategory(filters.length - 1, lastButton);
    });

    if (stackAnimate && !reduceMotion) {
      stackAnimate(controls, {
        opacity: [0, 1],
        translateY: [12, 0],
        duration: 520,
        delay: (_, index) => 220 + index * 45,
        ease: "outCubic",
        onComplete: () => {
          controls.forEach((control) => {
            control.style.removeProperty("opacity");
            control.style.removeProperty("transform");
            control.style.removeProperty("translate");
          });
        },
      });
    }

    applyCategory(filters[activeIndex]);
    syncViewport();
    setCategoryDeckState();
  });
};
