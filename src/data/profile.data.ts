import type { ProfileContent } from "@/types/profile.types";

export const profileContent: ProfileContent = {
  headline:
    "Ingeniería backend con mirada de arquitectura y formación técnica.",
  paragraphs: [
    "Combino más de 15 años de experiencia construyendo software en contextos reales con una mirada práctica sobre arquitectura, mantenibilidad y calidad técnica.",
    "He trabajado en sistemas para banca, e-commerce, utilities y plataformas SaaS, participando en diseño backend, integración de servicios, evolución de sistemas y fortalecimiento de equipos técnicos.",
    "Mi enfoque une ejecución y criterio: desarrollo soluciones, tomo decisiones técnicas con fundamento y traduzco conocimiento complejo en formación aplicable para equipos y profesionales.",
  ],
  availability:
    "Abierto a consultoría técnica, mentoring, docencia, proyectos backend y alianzas estratégicas.",
  stats: [
    { value: "15+", label: "años en software" },
    { value: "4", label: "industrias" },
    { value: "10+", label: "equipos acompañados" },
  ],
  pillars: [
    {
      icon: "bi-server",
      title: "Backend Java / Spring Boot",
      description:
        "APIs y sistemas backend mantenibles, escalables y preparados para crecer en equipos reales.",
    },
    {
      icon: "bi-diagram-3",
      title: "Arquitectura e integración",
      description:
        "Diseño de sistemas con criterio, evolución sostenida y decisiones técnicas con fundamento.",
    },
    {
      icon: "bi-mortarboard",
      title: "Docencia y mentoring",
      description:
        "Formación técnica aplicada que fortalece criterio, calidad y autonomía en equipos.",
    },
  ],
  sectors: ["Banca", "E-commerce", "Utilities", "SaaS"],
};
