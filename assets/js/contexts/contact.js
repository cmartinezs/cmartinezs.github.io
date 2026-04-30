const getMailAddress = (element) => {
  const { a, b, c } = element.dataset;

  if (!a || !b || !c) {
    return "";
  }

  return `${a}@${b}.${c}`;
};

export const initContactContext = () => {
  document.querySelectorAll(".js-email-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const address = getMailAddress(link);

      if (!address) {
        return;
      }

      window.location.href = `mailto:${address}`;
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

      const address = getMailAddress(form);

      if (!address) {
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

      window.location.href = `mailto:${address}?subject=${subject}&body=${body}`;
    });
  });
};
