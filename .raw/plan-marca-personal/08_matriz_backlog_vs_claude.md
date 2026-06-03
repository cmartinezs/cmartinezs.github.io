# Matriz de trazabilidad — Backlog detallado vs Spec para Claude Code

## Propósito

Este documento conecta explícitamente:

- Las fases de `07_spec_claude_code.md`.
- Las épicas y tareas de `05_backlog_detallado.md`.
- Los archivos involucrados.
- El propósito narrativo/técnico de cada bloque.

La matriz evita que Claude Code trabaje solo por intuición o por fases demasiado grandes.

---

## Vista general

| Spec Claude | Épica Backlog | Tareas Backlog | Resultado esperado |
|---|---|---:|---|
| Fase 1 — Hero y posicionamiento | Épica 1 — Reposicionamiento base | MP-001 a MP-004 | Hero data-driven, más específico y alineado a backend/arquitectura/formación |
| Fase 2 — Servicios | Épica 2 — Servicios y oferta profesional | MP-005 a MP-008 | Servicios jerarquizados por foco estratégico |
| Fase 3 — Casos | Épica 3 — Casos y evidencia | MP-009 a MP-013 | Evidencia concreta mediante casos anonimizados |
| Fase 4 — Experiencia | Épica 4 — Experiencia como CV vivo | MP-014 a MP-017 | Trayectoria con impacto, scope y stack |
| Fase 5 — Forma de trabajo | Épica 5 — Forma de trabajo | MP-018 a MP-020 | Sección que explica cómo piensa y trabaja Carlos |
| Fase 6 — Laboratorio de producto | Épica 6 — Laboratorio de producto y proyectos propios | MP-021 a MP-024 | KeyGo y videojuegos conectados con criterio técnico |
| Fase 7 — Stack | Épica 7 — Stack con criterio | MP-025 a MP-027 | Stack jerarquizado por nivel/contexto/evidencia |
| Fase 8 — Alianzas y conversión | Épica 8 — Alianzas y conversión | MP-028 a MP-032 | Sección de colaboración, topics de contacto y CTA más claro |
| Fase 9 — Navegación y metadata | Épica 9 — Navegación, SEO y páginas internas | MP-033 a MP-036 | Navegación, metadata y páginas alineadas |
| Definition of Done global | Épica 10 — Calidad final | MP-037 a MP-040 | QA responsive, accesibilidad, SEO y contenido |

---

# Detalle por fase

## Fase 1 — Hero y posicionamiento

### Relación

| Campo | Valor |
|---|---|
| Spec original | Fase 1 — Hero y posicionamiento |
| Backlog relacionado | Épica 1 — Reposicionamiento base |
| Tareas | MP-001, MP-002, MP-003, MP-004 |
| Tipo de trabajo | Contenido + refactor data-driven |
| Dependencias | Ninguna |
| Debe ejecutarse antes de | Servicios, metadata, CTA final |

### Trazabilidad por tarea

| Tarea | Se usa en spec | Qué debe hacer Claude | Archivos |
|---|---|---|---|
| MP-001 | “Crear data centrada en backend, arquitectura, formación técnica y criterio profesional” | Definir copy base del hero antes de tocar componentes | `src/data/hero.data.ts` o documento temporal |
| MP-002 | “Crear tipos” + “Crear data” | Crear `HeroContent`, `HeroAction`, `HeroSignal` y data inicial | `src/types/hero.types.ts`, `src/data/hero.data.ts` |
| MP-003 | “Modificar HeroSection” | Importar `heroContent` y reemplazar strings hardcodeados | `HeroSection.tsx` |
| MP-004 | Parte de “Crear data” | Mejorar señales del hero: evitar abreviaturas confusas como `Prod`/`Edu` | `hero.data.ts` |

### Observación

La spec original no menciona los IDs `MP-001` a `MP-004`. Por eso visualmente parece separada del backlog. La versión trazable debe incorporarlos.

---

## Fase 2 — Servicios

| Campo | Valor |
|---|---|
| Spec original | Fase 2 — Servicios |
| Backlog relacionado | Épica 2 — Servicios y oferta profesional |
| Tareas | MP-005, MP-006, MP-007, MP-008 |
| Tipo de trabajo | Modelo + contenido + UI |
| Dependencias | Hero recomendado, pero no bloqueante |

| Tarea | Se usa en spec | Qué debe hacer Claude | Archivos |
|---|---|---|---|
| MP-005 | “Modificar services.data.ts / Orden recomendado” | Rediseñar la taxonomía de servicios por prioridad estratégica | `services.data.ts`, `service.types.ts` |
| MP-006 | “Modificar Service type” | Agregar campos opcionales como `tier`, `audience`, `problems`, `outcomes` | `service.types.ts` |
| MP-007 | “Modificar services.data.ts” | Reescribir contenido de servicios con problema/resultado | `services.data.ts` |
| MP-008 | “Modificar UI” | Destacar servicios `primary` visualmente | `ServicesSection`, `ServicesCarousel` |

### Observación

Esta fase conviene dividirla en dos batches:
1. Tipos + data.
2. Render/UI.

---

## Fase 3 — Casos

| Campo | Valor |
|---|---|
| Spec original | Fase 3 — Casos |
| Backlog relacionado | Épica 3 — Casos y evidencia |
| Tareas | MP-009, MP-010, MP-011, MP-012, MP-013 |
| Tipo de trabajo | Nueva sección completa |
| Dependencias | Servicios recomendados |

| Tarea | Se usa en spec | Qué debe hacer Claude | Archivos |
|---|---|---|---|
| MP-009 | “Crear tipos” | Crear `CaseStudy` | `caseStudy.types.ts` |
| MP-010 | “Crear data” | Crear 3 a 5 casos anonimizados | `caseStudies.data.ts` |
| MP-011 | “Crear componentes” | Crear card reusable | `CaseStudyCard.tsx` |
| MP-012 | “Crear componentes” | Crear sección de home | `CaseStudiesSection.tsx` |
| MP-013 | “Integrar en home” | Insertar sección en flujo narrativo | `src/app/page.tsx` |

### Observación

Esta fase es demasiado grande para un solo prompt de Claude Code. Debe ejecutarse en dos o tres batches.

---

## Fase 4 — Experiencia

| Campo | Valor |
|---|---|
| Spec original | Fase 4 — Experiencia |
| Backlog relacionado | Épica 4 — Experiencia como CV vivo |
| Tareas | MP-014, MP-015, MP-016, MP-017 |
| Tipo de trabajo | Evolución de modelo existente |
| Dependencias | Casos recomendado para relacionar `relatedCaseStudyIds` |

| Tarea | Se usa en spec | Qué debe hacer Claude | Archivos |
|---|---|---|---|
| MP-014 | “Modificar ExperienceItem” | Agregar campos opcionales | `experience.types.ts` |
| MP-015 | “Modificar experience.data.ts” | Agregar impacto/scope/stack sin borrar narrativa | `experience.data.ts` |
| MP-016 | “Modificar timeline” | Renderizar campos opcionales | `ExperienceTimeline.tsx` |
| MP-017 | No estaba suficientemente explicitada | Crear resumen ejecutivo de CV | `profile.data.ts`, `ProfileSummarySection` |

### Observación

MP-017 quedó débilmente representada en la spec original. Debe agregarse explícitamente como subfase 4B.

---

## Fase 5 — Forma de trabajo

| Campo | Valor |
|---|---|
| Spec original | Fase 5 — Forma de trabajo |
| Backlog relacionado | Épica 5 — Forma de trabajo |
| Tareas | MP-018, MP-019, MP-020 |
| Tipo de trabajo | Nueva sección |
| Dependencias | Casos y experiencia recomendados |

| Tarea | Se usa en spec | Qué debe hacer Claude | Archivos |
|---|---|---|---|
| MP-018 | “Crear types/data” | Crear modelo y data de principios | `workMethod.types.ts`, `workMethod.data.ts` |
| MP-019 | “Crear WorkMethodSection” | Renderizar principios | `WorkMethodSection.tsx` |
| MP-020 | No explicitado en detalle | Insertar sección en home | `src/app/page.tsx` |

---

## Fase 6 — Laboratorio de producto

| Campo | Valor |
|---|---|
| Spec original | Fase 6 — Laboratorio de producto |
| Backlog relacionado | Épica 6 — Laboratorio de producto y proyectos propios |
| Tareas | MP-021, MP-022, MP-023, MP-024 |
| Tipo de trabajo | Refactor + reposicionamiento contenido |
| Dependencias | Ninguna estricta |

| Tarea | Se usa en spec | Qué debe hacer Claude | Archivos |
|---|---|---|---|
| MP-021 | “Crear o modificar project.types/labProjects.data” | Crear modelo `LabProject` | `project.types.ts`, `labProjects.data.ts` |
| MP-022 | “Migrar KeyGo desde hardcoded a data” | Refactorizar `ProjectHighlightSection` | `ProjectHighlightSection.tsx` |
| MP-023 | “Reposicionar KeyGo” | Cambiar narrativa de KeyGo | `labProjects.data.ts` |
| MP-024 | “Incluir videojuegos/prototipos” | Conectar games con laboratorio técnico | `games.data.ts`, `labProjects.data.ts` |

### Observación

Esta fase debe cuidar que “videojuegos” no compita con backend/arquitectura, sino que aparezca como evidencia complementaria de creatividad técnica.

---

## Fase 7 — Stack

| Campo | Valor |
|---|---|
| Spec original | Fase 7 — Stack |
| Backlog relacionado | Épica 7 — Stack con criterio |
| Tareas | MP-025, MP-026, MP-027 |
| Tipo de trabajo | Modelo + data + UI |
| Dependencias | Servicios recomendado |

| Tarea | Se usa en spec | Qué debe hacer Claude | Archivos |
|---|---|---|---|
| MP-025 | “Modificar TechItem” | Agregar `level`, `priority`, `context`, `evidence` | `tech.types.ts` |
| MP-026 | “Actualizar techStack.data.ts” | Reordenar y jerarquizar stack | `techStack.data.ts` |
| MP-027 | No suficientemente detallado | Renderizar badges/contexto en UI | `StackShowcase*`, `TechCardGrid` |

---

## Fase 8 — Alianzas y conversión

| Campo | Valor |
|---|---|
| Spec original | Fase 8 — Alianzas y conversión |
| Backlog relacionado | Épica 8 — Alianzas y conversión |
| Tareas | MP-028, MP-029, MP-030, MP-031, MP-032 |
| Tipo de trabajo | Nueva sección + mejora contacto + decisión producto |
| Dependencias | Servicios y casos recomendados |

| Tarea | Se usa en spec | Qué debe hacer Claude | Archivos |
|---|---|---|---|
| MP-028 | “Crear collaboration.types/data” | Definir colaboraciones buscadas | `collaboration.types.ts`, `collaboration.data.ts` |
| MP-029 | “Crear CollaborationSection” | Renderizar fit/no-fit y CTA | `CollaborationSection.tsx` |
| MP-030 | No suficientemente detallado | Mejorar topics del formulario | `contact.data.ts`, `ContactForm.tsx`, `useContactForm.ts` |
| MP-031 | Parcialmente cubierto | Ajustar CTA final con enfoque no genérico | `page.tsx` o data de CTA |
| MP-032 | No suficientemente conectado | Decidir agenda externa | `contact.data.ts`, `CTASection` |

### Observación

La spec original habla de alianzas, pero no conecta con el formulario ni con la decisión de agenda. Esa conexión es clave para conversión.

---

## Fase 9 — Navegación y metadata

| Campo | Valor |
|---|---|
| Spec original | Fase 9 — Navegación y metadata |
| Backlog relacionado | Épica 9 — Navegación, SEO y páginas internas |
| Tareas | MP-033, MP-034, MP-035, MP-036 |
| Tipo de trabajo | Navegación + SEO + páginas |
| Dependencias | Todas las secciones nuevas deberían existir antes de cerrar navegación |

| Tarea | Se usa en spec | Qué debe hacer Claude | Archivos |
|---|---|---|---|
| MP-033 | “Modificar navigation.data.ts” | Agregar anchors reales | `navigation.data.ts` |
| MP-034 | “Modificar metadata” | Actualizar title/description | `page.tsx`, `metadata.ts` |
| MP-035 | No detallado en spec original | Revisar páginas internas existentes | `src/app/*/page.tsx` |
| MP-036 | No detallado en spec original | Crear `/casos` si la home queda larga | `src/app/casos/page.tsx` |

---

## Definition of Done global

| Campo | Valor |
|---|---|
| Spec original | Definition of Done global |
| Backlog relacionado | Épica 10 — Calidad final |
| Tareas | MP-037, MP-038, MP-039, MP-040 |
| Tipo de trabajo | QA |
| Dependencias | Todo lo anterior |

| Tarea | Se usa en spec | Qué debe hacer Claude/humano | Resultado |
|---|---|---|---|
| MP-037 | “responsive correcto” | QA responsive | Mobile/tablet/desktop sin overflow |
| MP-038 | No suficientemente detallado | QA accesibilidad | Headings, aria, contraste, teclado |
| MP-039 | “metadata alineada” | QA SEO básico | Title, description, OG, sitemap |
| MP-040 | “no inventa métricas” | QA contenido | Sin claims falsos ni datos sensibles |

---

# Conclusión

La spec original no está mal. Su problema es que está escrita como documento de dirección general, no como plan ejecutable trazable.

El backlog sí es ejecutable, pero necesita saber en qué fase de la spec vive cada tarea.

La combinación recomendada es:

1. Usar `07_spec_claude_code_v2_trazable.md` como contexto inicial.
2. Usar `09_claude_code_batches.md` como instrucciones concretas por sesión.
3. Usar esta matriz para revisar avance y cobertura.
