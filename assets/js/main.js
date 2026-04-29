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
