document.querySelectorAll(".js-email-link").forEach((link) => {
  const { a, b, c } = link.dataset;

  if (!a || !b || !c) {
    return;
  }

  const email = `${a}@${b}.${c}`;
  link.href = `mailto:${email}`;
  link.setAttribute("aria-label", `Enviar email a ${email}`);
});
