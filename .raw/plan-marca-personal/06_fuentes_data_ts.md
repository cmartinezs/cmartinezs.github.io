# Estrategia para mantener y mejorar `*.data.ts`

## 1. Principio general

El repo ya tiene una buena práctica: separar parte del contenido en archivos `src/data/*.data.ts`. El plan recomienda mantener esa decisión y profundizarla.

La regla objetivo:

> Los componentes renderizan; los `*.data.ts` comunican.

Esto significa que el copy estratégico, listas, CTAs, señales, casos, servicios y proyectos deben vivir en datos tipados, no dentro de JSX.

## 2. Data files actuales a mantener

| Archivo actual | Decisión | Mejora recomendada |
|---|---|---|
| `src/data/services.data.ts` | Mantener y mejorar | Agregar clasificación, audiencia, problema, outcomes y formatos. |
| `src/data/experience.data.ts` | Mantener y mejorar | Agregar impacto, dominio, stack, responsabilidades y relación con casos. |
| `src/data/techStack.data.ts` | Mantener y mejorar | Agregar nivel, prioridad, contexto y evidencia. |
| `src/data/games.data.ts` | Mantener | Conectar con laboratorio técnico y creatividad aplicada. |
| `src/data/contact.data.ts` | Mantener y mejorar | Agregar topics/intenciones, CTAs y links externos configurables. |
| `src/data/navigation.data.ts` | Mantener y mejorar | Sincronizar con nueva arquitectura de secciones. |
| `src/data/courses.data.ts` | Mantener | Integrar con docencia/formación aplicada. |
| `src/data/certifications.data.ts` | Mantener | Mostrar solo si aporta señal de confianza o profundidad. |

## 3. Data files nuevos sugeridos

```txt
src/data/hero.data.ts
src/data/trustSignals.data.ts
src/data/caseStudies.data.ts
src/data/workMethod.data.ts
src/data/collaboration.data.ts
src/data/labProjects.data.ts
src/data/content.data.ts
```

## 4. Ejemplo de `hero.data.ts`

```ts
import type { HeroContent } from "@/types/hero.types";

export const heroContent: HeroContent = {
  eyebrow: "Backend · Arquitectura · Formación técnica",
  title: "Construyo backend mantenible y ayudo a equipos a tomar mejores decisiones técnicas.",
  highlight: "Software con criterio, no solo código.",
  lead: "Soy desarrollador senior y docente. Acompaño equipos en diseño backend, integración, calidad, automatización y transferencia de conocimiento técnico.",
  actions: [
    {
      label: "Hablemos de colaboración",
      href: "/contacto/?topic=colaboracion",
      variant: "primary",
      icon: "bi-chat-dots-fill"
    },
    {
      label: "Ver casos",
      href: "#casos",
      variant: "secondary",
      icon: "bi-kanban-fill"
    }
  ],
  signals: [
    {
      value: "15+",
      label: "años",
      description: "construyendo software en contextos reales"
    },
    {
      value: "Backend",
      label: "e integración",
      description: "APIs, sistemas enterprise y plataformas SaaS"
    },
    {
      value: "Docencia",
      label: "superior",
      description: "formación técnica aplicada a proyectos reales"
    }
  ]
};
```

## 5. Ejemplo de `caseStudies.data.ts`

```ts
import type { CaseStudy } from "@/types/caseStudy.types";

export const caseStudies: CaseStudy[] = [
  {
    id: "backend-producto-alto-movimiento",
    title: "Diseño backend en ecosistema de producto de alto movimiento",
    context: "Plataforma con impacto en flujos de venta, stock, distribución y operación.",
    problem: "Necesidad de construir soluciones confiables dentro de un ecosistema amplio, con integración entre equipos y dominio complejo.",
    contribution: [
      "Análisis de dominio y diseño de solución.",
      "Construcción backend e integración con servicios existentes.",
      "Colaboración técnica y apoyo en decisiones de implementación."
    ],
    outcomes: [
      "Mayor claridad técnica para evolucionar componentes del dominio.",
      "Soluciones alineadas a restricciones reales de producto y operación."
    ],
    stack: ["Java", "Spring Boot", "REST", "SQL", "CI/CD"],
    confidentiality: "Caso resumido sin métricas ni información sensible."
  }
];
```

## 6. Ejemplo de `services.data.ts` mejorado

```ts
export const services: Service[] = [
  {
    id: "backend-architecture",
    number: "01",
    title: "Backend y arquitectura",
    tier: "primary",
    description: "Diseño y construcción de APIs, integraciones y servicios mantenibles.",
    audience: ["CTOs", "startups", "equipos técnicos", "pymes con producto digital"],
    problems: [
      "APIs difíciles de mantener",
      "crecimiento sin arquitectura clara",
      "integraciones frágiles",
      "falta de criterios técnicos compartidos"
    ],
    outcomes: [
      "límites más claros",
      "servicios más mantenibles",
      "contratos mejor definidos",
      "base técnica lista para crecer"
    ],
    features: [
      "APIs REST profesionales",
      "Clean Architecture y arquitectura hexagonal",
      "sistemas multi-tenant",
      "integración con servicios externos"
    ],
    href: "/backend/",
    linkLabel: "Ver Backend"
  }
];
```

## 7. Mejora recomendada para `techStack.data.ts`

Agregar jerarquía para evitar percepción de generalista.

```ts
export type TechLevel = "core" | "strong" | "working" | "exploratory";

export interface TechItem {
  id: string;
  name: string;
  description: string;
  groups: StackCategoryId[];
  level?: TechLevel;
  priority?: number;
  context?: string;
  evidence?: string;
  icon: TechIcon;
}
```

Ejemplo:

```ts
{
  id: "java",
  name: "Java 21",
  description: "Backend principal",
  groups: ["backend"],
  level: "core",
  priority: 1,
  context: "APIs, servicios empresariales, integración y arquitectura backend",
  evidence: "Experiencia en banca, producto, sistemas operacionales y docencia"
}
```

## 8. Reglas para todos los `*.data.ts`

1. Cada item debe tener `id` estable.
2. Los `id` deben ser kebab-case.
3. No usar texto largo innecesario en cards; mover detalle a páginas internas.
4. Usar `visible: boolean` solo cuando se necesite ocultar temporalmente.
5. Usar `priority` para ordenar sin depender del orden del array cuando sea relevante.
6. Usar `external: true` para links externos.
7. Evitar datos sensibles de empresas o clientes.
8. No inventar métricas.
9. Centralizar CTAs en data cuando se repitan.
10. Separar contenido estratégico de presentación visual.

## 9. Estructura recomendada de carpeta `src/data`

```txt
src/data/
  caseStudies.data.ts
  certifications.data.ts
  collaboration.data.ts
  contact.data.ts
  content.data.ts
  courses.data.ts
  experience.data.ts
  games.data.ts
  hero.data.ts
  labProjects.data.ts
  navigation.data.ts
  services.data.ts
  techStack.data.ts
  trustSignals.data.ts
  workMethod.data.ts
  index.ts
```

## 10. `src/data/index.ts`

Opcional, pero útil para imports ordenados.

```ts
export * from "./hero.data";
export * from "./services.data";
export * from "./experience.data";
export * from "./caseStudies.data";
export * from "./workMethod.data";
export * from "./collaboration.data";
export * from "./labProjects.data";
export * from "./techStack.data";
export * from "./contact.data";
export * from "./navigation.data";
```

## 11. Antipatrón a evitar

No convertir cada texto mínimo en un data file si eso aumenta complejidad sin beneficio.

Buen criterio:

- Copy estratégico: data file.
- Lista editable: data file.
- CTA reusable: data file.
- Label puramente visual de un componente interno: puede quedar en componente.
