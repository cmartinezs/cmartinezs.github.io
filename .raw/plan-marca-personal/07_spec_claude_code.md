# Spec para Claude Code v2 — Evolución marca personal trazable

## 1. Contexto

Repositorio: `cmartinezs/cmartinezs.github.io`

Stack observado: Next.js / React / TypeScript con secciones desacopladas y fuentes de datos en `src/data/*.data.ts`.

La home actual se compone conceptualmente con:

```tsx
<HeroSection />
<ExperienceSection id="experiencia" />
<ServicesSection />
<TrustSection />
<ProjectHighlightSection />
<StackShowcaseSection />
<ContentSection />
<CTASection />
```

## 2. Objetivo de implementación

Transformar la página personal en una landing/CV de alto impacto orientada a:

- Arquitectura backend.
- Liderazgo técnico.
- Formación técnica aplicada.
- Alianzas profesionales.
- Evidencia mediante casos y proyectos.
- Laboratorio técnico/producto propio.

## 3. Regla de trazabilidad

Toda implementación debe referenciar tareas del backlog `MP-XXX`.

Formato obligatorio para commits, PRs o notas de Claude:

```md
Backlog relacionado:
- MP-001
- MP-002

Alcance:
- ...

Fuera de alcance:
- ...
```

## 4. Restricciones globales

1. Mantener la estética actual de marca técnica.
2. Mantener el enfoque data-driven con `src/data/*.data.ts`.
3. No eliminar secciones actuales sin reemplazo funcional.
4. Evitar hardcodear copy estratégico en componentes.
5. No inventar métricas ni resultados no verificables.
6. Mantener compatibilidad responsive.
7. Implementar cambios en lotes pequeños.
8. Cada lote debe ejecutar build o, como mínimo, dejar indicado si no se pudo ejecutar.
9. No mezclar refactor técnico, copy y cambios visuales grandes si pueden separarse.

---

# 5. Fase 1 — Hero y posicionamiento

## Backlog relacionado

- MP-001 — Definir posicionamiento principal.
- MP-002 — Crear `hero.data.ts`.
- MP-003 — Migrar `HeroSection` a data-driven.
- MP-004 — Ajustar señales de confianza del hero.

## Objetivo

Reformular el hero para que comunique con mayor precisión:

- Backend.
- Arquitectura.
- Liderazgo técnico.
- Formación aplicada.
- Criterio profesional.

## Crear tipos

Archivo: `src/types/hero.types.ts`

```ts
export interface HeroAction {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  icon?: string;
  external?: boolean;
}

export interface HeroSignal {
  value: string;
  label: string;
  description?: string;
}

export interface HeroContent {
  eyebrow: string;
  title: string;
  highlight?: string;
  lead: string;
  actions: HeroAction[];
  signals: HeroSignal[];
}
```

## Crear data

Archivo: `src/data/hero.data.ts`

Debe incluir copy centrado en backend, arquitectura, formación técnica y criterio profesional.

## Modificar `HeroSection`

Archivo: `src/components/sections/HeroSection/HeroSection.tsx`

Cambios:

- Importar `heroContent`.
- Renderizar `eyebrow`, `title`, `lead`, `actions`, `signals` desde data.
- Mantener animaciones existentes.
- Mantener `TerminalCard`, `GlassCard`, `GlowEffect`.
- Eliminar copy estratégico hardcodeado.

## Definition of Done

- Hero renderiza desde data.
- No hay copy principal hardcodeado.
- Las señales son comprensibles sin abreviaturas confusas.
- No se altera la estructura visual principal.

---

# 6. Fase 2 — Servicios y oferta profesional

## Backlog relacionado

- MP-005 — Rediseñar taxonomía de servicios.
- MP-006 — Mejorar `Service` type.
- MP-007 — Actualizar contenido de `services.data.ts`.
- MP-008 — Ajustar UI de `ServicesSection`.

## Objetivo

Hacer que los servicios dejen de competir todos al mismo nivel y refuercen el posicionamiento principal.

## Modificar `Service` type

Agregar campos opcionales:

```ts
tier?: "primary" | "secondary" | "support";
audience?: string[];
problems?: string[];
outcomes?: string[];
formats?: string[];
proof?: string;
```

## Modificar `services.data.ts`

Orden recomendado:

1. Backend y arquitectura.
2. Liderazgo técnico y mentoring.
3. Formación técnica aplicada.
4. Automatización con IA.
5. Frontend/producto.
6. Mobile.

## Modificar UI

`ServicesSection` debe destacar `tier === "primary"` antes que el resto.

## Definition of Done

- Backend/arquitectura queda como eje dominante.
- Frontend/mobile no desaparecen, pero quedan como capacidades complementarias.
- IA se comunica como automatización con criterio técnico.
- La UI refleja jerarquía.

---

# 7. Fase 3 — Casos y evidencia

## Backlog relacionado

- MP-009 — Crear modelo `CaseStudy`.
- MP-010 — Crear primer set de casos.
- MP-011 — Crear `CaseStudyCard`.
- MP-012 — Crear `CaseStudiesSection`.
- MP-013 — Integrar casos en home.

## Objetivo

Agregar evidencia concreta para que la página funcione como CV y no solo como declaración de habilidades.

## Crear tipos

Archivo: `src/types/caseStudy.types.ts`

```ts
export interface CaseStudy {
  id: string;
  title: string;
  context: string;
  problem: string;
  contribution: string[];
  outcomes: string[];
  stack: string[];
  confidentiality?: string;
  relatedExperienceIds?: string[];
  featured?: boolean;
}
```

## Crear data

Archivo: `src/data/caseStudies.data.ts`

Casos iniciales sugeridos:

1. Backend/producto de alto movimiento.
2. Banca e integración.
3. Sistemas operacionales/utilities.
4. Liderazgo técnico.
5. Docencia aplicada.

## Crear componentes

- `src/components/components/CaseStudyCard/CaseStudyCard.tsx`
- `src/components/sections/CaseStudiesSection/CaseStudiesSection.tsx`

## Integrar en home

En `src/app/page.tsx`, insertar después de `ServicesSection` o después de `TrustSection`, según flujo narrativo.

## Definition of Done

- La sección tiene `id="casos"`.
- Muestra casos destacados.
- No inventa métricas.
- Soporta casos confidenciales.
- Mejora el flujo: promesa → oferta → evidencia.

---

# 8. Fase 4 — Experiencia como CV vivo

## Backlog relacionado

- MP-014 — Ampliar `ExperienceItem`.
- MP-015 — Reescribir experiencia con impacto.
- MP-016 — Ajustar timeline para mostrar impacto.
- MP-017 — Crear resumen ejecutivo de CV.

## Objetivo

Hacer que la experiencia funcione como CV vivo y no solo como timeline narrativa.

## Modificar `ExperienceItem`

Agregar campos opcionales:

```ts
domain?: string;
impact?: string;
scope?: string;
stack?: string[];
responsibilities?: string[];
relatedCaseStudyIds?: string[];
```

## Modificar `experience.data.ts`

- No borrar narrativa existente.
- Agregar datos estructurados progresivamente.
- No inventar métricas.
- Usar resultados cualitativos cuando no existan métricas verificables.

## Modificar timeline

Renderizar nuevos campos solo si existen.

## Crear resumen ejecutivo

Crear, si corresponde:

- `src/data/profile.data.ts`
- `src/types/profile.types.ts`
- `ProfileSummarySection`

## Definition of Done

- Reclutador entiende perfil en menos de 30 segundos.
- Experiencia mantiene narrativa pero gana evidencia.
- Timeline no queda excesivamente larga.

---

# 9. Fase 5 — Forma de trabajo

## Backlog relacionado

- MP-018 — Crear `workMethod.data.ts`.
- MP-019 — Crear `WorkMethodSection`.
- MP-020 — Integrar forma de trabajo en home.

## Objetivo

Explicar cómo piensa y trabaja Carlos.

## Crear

- `src/types/workMethod.types.ts`
- `src/data/workMethod.data.ts`
- `src/components/sections/WorkMethodSection/WorkMethodSection.tsx`

## Principios sugeridos

1. Entender dominio antes de diseñar.
2. Definir límites y contratos.
3. Construir incrementalmente.
4. Cuidar calidad y mantenibilidad.
5. Transferir criterio al equipo.

## Definition of Done

- No repite servicios.
- Comunica criterio.
- Refuerza confianza para alianzas.

---

# 10. Fase 6 — Laboratorio de producto y proyectos propios

## Backlog relacionado

- MP-021 — Crear modelo `LabProject`.
- MP-022 — Migrar KeyGo desde hardcoded a data.
- MP-023 — Reposicionar KeyGo.
- MP-024 — Incorporar videojuegos como laboratorio técnico.

## Objetivo

Convertir KeyGo, Starborne Voyager y otros prototipos en evidencia de criterio técnico, producto y exploración.

## Crear o modificar

- `src/types/project.types.ts`
- `src/data/labProjects.data.ts`
- `src/data/games.data.ts`
- `ProjectHighlightSection.tsx`

## Reposicionamiento KeyGo

KeyGo debe comunicarse como:

> Laboratorio público de autenticación SaaS, multi-tenancy, arquitectura backend y producto propio.

## Reposicionamiento videojuegos

Los videojuegos deben conectarse con:

- Performance.
- Interacción.
- Diseño de feedback.
- Creatividad técnica.
- Exploración visual.

## Definition of Done

- KeyGo ya no suena como producto comercial incompleto.
- Videojuegos no parecen hobby desconectado.
- Copy estratégico vive en data.

---

# 11. Fase 7 — Stack con criterio

## Backlog relacionado

- MP-025 — Ampliar `TechItem`.
- MP-026 — Reordenar `techStack.data.ts`.
- MP-027 — Ajustar UI de stack.

## Objetivo

Mostrar profundidad y criterio, no una lista plana de tecnologías.

## Modificar `TechItem`

Agregar:

```ts
level?: "core" | "strong" | "working" | "exploratory";
priority?: number;
context?: string;
evidence?: string;
```

## Actualizar `techStack.data.ts`

Priorizar como core:

- Java.
- Spring Boot.
- REST APIs.
- SQL.
- PostgreSQL / Oracle.
- Docker.
- CI/CD.
- Testing/calidad cuando aplique.

IA y herramientas experimentales deben quedar como apoyo.

## Definition of Done

- Stack principal se percibe claramente.
- Herramientas de IA no desplazan el foco técnico principal.
- UI muestra nivel/contexto/evidencia.

---

# 12. Fase 8 — Alianzas y conversión

## Backlog relacionado

- MP-028 — Crear `collaboration.data.ts`.
- MP-029 — Crear `CollaborationSection`.
- MP-030 — Mejorar `contact.data.ts`.
- MP-031 — Ajustar CTA final.
- MP-032 — Evaluar integración con agenda.

## Objetivo

Convertir visitas en conversaciones concretas.

## Crear

- `src/types/collaboration.types.ts`
- `src/data/collaboration.data.ts`
- `src/components/sections/CollaborationSection/CollaborationSection.tsx`

## La sección debe decir explícitamente

- Con quién quiere colaborar Carlos.
- Qué problemas puede ayudar a resolver.
- Qué formatos de colaboración acepta.
- Cuándo no es buen fit.

## Mejorar contacto

Agregar topics sugeridos:

- arquitectura.
- empleo.
- docencia.
- alianza.
- KeyGo.
- IA.

Si se agrega agenda, el link debe quedar en data.

## Definition of Done

- CTA final no es genérico.
- Formulario orienta mejor la intención.
- Hay fit/no-fit para filtrar conversaciones.

---

# 13. Fase 9 — Navegación, metadata y páginas internas

## Backlog relacionado

- MP-033 — Actualizar `navigation.data.ts`.
- MP-034 — Actualizar metadata de home.
- MP-035 — Revisar páginas de servicios existentes.
- MP-036 — Crear página `/casos` opcional.

## Objetivo

Alinear navegación y SEO con la nueva estructura.

## Modificar

- `src/data/navigation.data.ts`
- `src/app/page.tsx`
- `src/lib/metadata.ts`
- páginas internas bajo `src/app/*/page.tsx`

## Nueva navegación sugerida

- Inicio.
- Servicios.
- Casos.
- Trayectoria.
- Laboratorio.
- Contacto.

## Definition of Done

- Todos los anchors existen.
- Metadata comunica backend, arquitectura y formación aplicada.
- No hay títulos genéricos o duplicados críticos.
- `/casos` solo se crea si aporta valor real.

---

# 14. Fase 10 — QA final

## Backlog relacionado

- MP-037 — QA responsive.
- MP-038 — QA accesibilidad.
- MP-039 — QA SEO básico.
- MP-040 — QA de contenido.

## Objetivo

Validar calidad final.

## Revisar

- Mobile.
- Tablet.
- Desktop.
- Heading hierarchy.
- Aria labels.
- Contraste.
- Navegación por teclado.
- Title.
- Description.
- OG.
- Sitemap si aplica.
- Claims no verificables.
- Información confidencial.
- Links internos/externos.

## Definition of Done global

- `npm run build` ejecuta sin errores.
- No hay copy estratégico hardcodeado en secciones principales.
- Home responde quién es Carlos, qué ofrece, qué evidencia tiene y cómo contactarlo.
- La experiencia no inventa métricas.
- La página no parece perfil generalista.
- Backend/arquitectura queda como eje principal.
- Docencia, IA y videojuegos quedan como diferenciales complementarios.
- La web mantiene responsive correcto.
- Links de navegación apuntan a IDs existentes.

---

# 15. Modo recomendado de ejecución

No ejecutar todas las fases juntas.

Usar `09_claude_code_batches.md` y avanzar batch por batch.

Orden recomendado:

1. Batch 0 — Lectura.
2. Batch 1 — Hero.
3. Batch 2 — Servicios data.
4. Batch 3 — Servicios UI.
5. Batch 4 — Casos data.
6. Batch 5 — Casos UI.
7. Batch 6 — Experiencia.
8. Batch 7 — Resumen ejecutivo.
9. Batch 8 — Forma de trabajo.
10. Batch 9 — Laboratorio.
11. Batch 10 — Stack.
12. Batch 11 — Alianzas/contacto.
13. Batch 12 — Navegación/metadata.
14. Batch 13 — QA final.
