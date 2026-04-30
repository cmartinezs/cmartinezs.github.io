export const initScrollTopContext = () => {
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
};
