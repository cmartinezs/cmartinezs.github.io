document.querySelectorAll(".js-email-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const { a, b, c } = link.dataset;

    if (!a || !b || !c) {
      return;
    }

    window.location.href = `mailto:${a}@${b}.${c}`;
  });
});

document.querySelectorAll(".js-contact-form").forEach((form) => {
  const topic = new URLSearchParams(window.location.search).get("topic");
  const topicSelect = form.querySelector('[name="topic"]');

  if (topic && topicSelect) {
    topicSelect.value = topic;
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { a, b, c } = form.dataset;

    if (!a || !b || !c) {
      return;
    }

    const data = new FormData(form);
    const name = data.get("name") || "";
    const replyTo = data.get("replyTo") || "";
    const topicValue = data.get("topic") || "";
    const selectedTopic = topicSelect?.selectedOptions[0]?.text || topicValue || "Consulta";
    const message = data.get("message") || "";
    const subject = encodeURIComponent(`Contacto web: ${selectedTopic}`);
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${replyTo}\nTema: ${selectedTopic}\n\nMensaje:\n${message}`);

    window.location.href = `mailto:${a}@${b}.${c}?subject=${subject}&body=${body}`;
  });
});

document.querySelectorAll("[data-scroll-top]").forEach((button) => {
  const toggleVisibility = () => {
    button.classList.toggle("is-visible", window.scrollY > 420);
  };

  button.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  toggleVisibility();
  window.addEventListener("scroll", toggleVisibility, { passive: true });
});

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

document.querySelectorAll("[data-stack]").forEach((stack) => {
  const categoryViewport = stack.querySelector("[data-stack-category-viewport]");
  const prevButton = stack.querySelector("[data-stack-prev]");
  const nextButton = stack.querySelector("[data-stack-next]");
  const label = stack.querySelector("[data-stack-current-label]");
  const title = stack.querySelector("[data-stack-current-title]");
  const description = stack.querySelector("[data-stack-current-description]");
  const grid = stack.querySelector("[data-stack-grid]");
  const filters = Array.from(stack.querySelectorAll("[data-stack-filter]"));
  const cards = Array.from(grid?.querySelectorAll("[data-stack-group]") || []);

  if (!categoryViewport || !prevButton || !nextButton || !label || !title || !description || !grid || !filters.length || !cards.length) {
    return;
  }

  let activeIndex = filters.findIndex((button) => button.classList.contains("is-active"));
  let transitionTimer;

  if (activeIndex < 0) {
    activeIndex = 0;
  }

  const syncViewport = () => {
    const activeButton = filters[activeIndex];

    if (!(activeButton instanceof HTMLElement)) {
      return;
    }

    activeButton.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
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

    let visibleIndex = 0;

    cards.forEach((card) => {
      const groups = (card.dataset.stackGroup || "").split(/\s+/).filter(Boolean);
      const matches = groups.includes(filter);

      card.hidden = !matches;
      card.classList.toggle("is-visible", matches);
      card.classList.remove("is-highlighted");
      card.style.animationDelay = "";

      if (matches) {
        card.style.animationDelay = `${visibleIndex * 45}ms`;
        requestAnimationFrame(() => {
          card.classList.add("is-highlighted");
        });
        visibleIndex += 1;
      }
    });
  };

  const selectCategory = (nextIndex) => {
    window.clearTimeout(transitionTimer);
    activeIndex = (nextIndex + filters.length) % filters.length;
    grid.classList.add("is-transitioning");

    syncViewport();

    transitionTimer = window.setTimeout(() => {
      applyCategory(filters[activeIndex]);
      requestAnimationFrame(() => {
        grid.classList.remove("is-transitioning");
      });
    }, 150);
  };

  filters.forEach((button, index) => {
    button.addEventListener("click", () => {
      selectCategory(index);
    });
  });

  prevButton.addEventListener("click", () => {
    selectCategory(activeIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    selectCategory(activeIndex + 1);
  });

  applyCategory(filters[activeIndex]);
  syncViewport();
});
