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
