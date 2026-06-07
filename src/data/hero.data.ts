import type { HeroContent } from "@/types/hero.types";

export const heroContent: HeroContent = {
  eyebrow: "Backend · Arquitectura · Formación técnica",
  title: "Backend mantenible para equipos que crecen.",
  tagline: "Software con criterio, no solo código.",
  lead: "Diseño APIs, arquitecturas y formación técnica para equipos que necesitan claridad, calidad y mejores decisiones técnicas.",
  actions: [
    {
      label: "Hablemos de colaboración",
      href: "/contacto/?topic=colaboracion",
      variant: "primary",
      icon: "bi-chat-dots-fill",
    },
    {
      label: "Ver casos",
      href: "/proyectos/#casos",
      variant: "secondary",
      icon: "bi-kanban-fill",
    },
  ],
  signals: [
    {
      value: "15+",
      label: "años",
      description: "construyendo software en contextos reales",
    },
    {
      value: "Backend",
      label: "e integración",
      description: "APIs, sistemas enterprise y plataformas SaaS",
    },
    {
      value: "Docencia",
      label: "superior",
      description: "formación técnica aplicada a proyectos reales",
    },
  ],
};
