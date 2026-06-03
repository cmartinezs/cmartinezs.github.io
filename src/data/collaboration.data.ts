import type { CollaborationContent } from "@/types/collaboration.types";

export const collaborationContent: CollaborationContent = {
  profiles: [
    {
      id: "consultoria-tecnica",
      icon: "bi-cpu",
      title: "Consultoría técnica backend",
      description:
        "Para CTOs, startups y pymes que necesitan criterio técnico backend sin incorporar un perfil senior dedicado. Ayudo a tomar decisiones de arquitectura, revisar sistemas existentes y definir bases técnicas para crecer.",
      formats: ["Revisión de arquitectura", "Consultoría puntual", "Diseño de solución"],
      ctaLabel: "Conversemos sobre arquitectura",
      ctaHref: "/contacto/?topic=arquitectura",
    },
    {
      id: "liderazgo-tecnico",
      icon: "bi-people",
      title: "Liderazgo técnico de equipo",
      description:
        "Para equipos junior o semi-senior que necesitan un referente técnico: revisión de código, estándares, buenas prácticas y decisiones de diseño. Trabajo como apoyo técnico externo al equipo de desarrollo.",
      formats: ["Revisión de código", "Acompañamiento de equipo", "Mentoring individual"],
      ctaLabel: "Conversemos sobre mentoría",
      ctaHref: "/contacto/?topic=mentoria",
    },
    {
      id: "docencia-formacion",
      icon: "bi-mortarboard",
      title: "Docencia y formación técnica",
      description:
        "Para instituciones, bootcamps y empresas que necesitan formación técnica aplicada: backend, APIs, arquitectura, testing y buenas prácticas conectadas con la realidad de la industria.",
      formats: ["Cursos universitarios", "Talleres técnicos", "Programas internos"],
      ctaLabel: "Conversemos sobre formación",
      ctaHref: "/contacto/?topic=docencia",
    },
    {
      id: "alianza-tecnica",
      icon: "bi-arrow-left-right",
      title: "Alianza técnica",
      description:
        "Para agencias, consultoras o profesionales independientes que buscan un socio técnico backend en proyectos donde necesitan profundidad en APIs, arquitectura o integración de sistemas.",
      formats: ["Co-desarrollo backend", "Subcontratación técnica", "Revisión de propuesta"],
      ctaLabel: "Conversemos sobre alianza",
      ctaHref: "/contacto/?topic=alianza",
    },
  ],
  notAFit: [
    "Proyectos que buscan el precio más bajo sin considerar criterio técnico.",
    "Requerimientos completamente indefinidos donde el técnico debe también hacer de product manager sin acuerdo previo.",
    "Posiciones de empleado full-time fuera de modalidad remota o que no se ajusten al perfil senior/tech lead.",
    "Proyectos que esperan resultados inmediatos sin tiempo para entender el dominio.",
  ],
};
