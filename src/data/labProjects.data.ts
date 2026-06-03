import type { LabProject } from "@/types/project.types";

export const labProjects: LabProject[] = [
  {
    id: "keygo",
    badge: "Laboratorio técnico",
    title: "KeyGo: arquitectura SaaS de autenticación",
    tagline:
      "Laboratorio público de diseño backend para sistemas de autenticación multi-tenant.",
    description:
      "KeyGo es un proyecto propio donde exploro decisiones de arquitectura SaaS en un dominio no trivial: autenticación, identidad y multi-tenancy. Es un espacio para construir con criterio real, documentar decisiones de diseño y aprender en público. No es un producto en competencia; es arquitectura aplicada.",
    status: "in-progress",
    statusLabel: "En desarrollo activo",
    features: [
      "Multi-tenant con organizaciones completamente aisladas.",
      "Gestión de usuarios, roles y permisos por tenant.",
      "Autenticación centralizada con tokens de aplicación y usuario.",
      "Arquitectura pensada para evolucionar sin romper contratos.",
    ],
    stack: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Next.js", "TypeScript"],
    learnings: [
      "Diseño de esquemas multi-tenant con aislamiento real de datos.",
      "Contratos entre servicios de autenticación e integración.",
      "Trade-offs de arquitectura en contextos SaaS de crecimiento gradual.",
    ],
    href: "/keygo/",
    linkLabel: "Ver laboratorio KeyGo",
    githubHref: "https://github.com/cmartinezs",
    featured: true,
  },
];
