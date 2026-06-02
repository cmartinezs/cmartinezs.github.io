import type { Service } from "@/types/service.types";

export const services: Service[] = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend",
    description: "Interfaces web claras, responsive y conectadas a servicios reales.",
    features: [
      "Landing pages profesionales.",
      "Interfaces responsive.",
      "React, Angular, Vite y Bootstrap.",
      "Mobile híbrido con Ionic.",
      "Integración con APIs.",
    ],
    href: "/frontend/",
    linkLabel: "Ver Frontend",
  },
  {
    id: "backend",
    number: "02",
    title: "Backend",
    description: "APIs, integraciones y servicios mantenibles para sistemas que necesitan crecer.",
    features: [
      "APIs REST profesionales.",
      "Clean Architecture y arquitectura hexagonal.",
      "Sistemas multi-tenant.",
      "Integración con servicios externos.",
    ],
    href: "/backend/",
    linkLabel: "Ver Backend",
  },
  {
    id: "mobile",
    number: "03",
    title: "Mobile",
    description:
      "Aplicaciones móviles híbridas y nativas con foco práctico, integración y aprendizaje técnico.",
    features: [
      "Ionic con Angular.",
      "Kotlin y Compose.",
      "Integración con APIs.",
      "Firebase y servicios móviles.",
    ],
    href: "/mobile/",
    linkLabel: "Ver Mobile",
  },
  {
    id: "docencia",
    number: "04",
    title: "Docencia y formación",
    description: "Formación técnica desde fundamentos hasta buenas prácticas profesionales.",
    features: [
      "Programación desde lógica hasta backend.",
      "Buenas prácticas y calidad de software.",
      "Testing y CI/CD.",
      "Arquitectura de software.",
    ],
    href: "/docencia/",
    linkLabel: "Ver Docencia",
  },
  {
    id: "ai",
    number: "05",
    title: "Automatización con IA",
    description: "Automatización y asistencia al desarrollo sin perder criterio técnico.",
    features: [
      "Automatización de tareas.",
      "Generación de código asistida.",
      "Integración de agentes AI.",
      "Optimización de flujos de trabajo.",
    ],
    href: "/ai/",
    linkLabel: "Ver AI",
  },
];
