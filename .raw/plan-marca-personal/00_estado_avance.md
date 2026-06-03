# Estado de avance — Marca personal

## Reglas de avance

- Ejecutar siempre el primer batch con estado `pendiente`.
- Cambiar a `en_progreso` antes de modificar código.
- Cambiar a `realizado` solo si el batch queda implementado y validado.
- No saltar batches salvo instrucción explícita.
- No reabrir batches realizados salvo instrucción explícita.
- No ejecutar más de un batch por instrucción del usuario.
- Al finalizar cada batch, registrar resumen breve, archivos tocados y resultado de build.

## Batches

| Batch | Nombre | Estado | Tareas MP | Última actualización |
|---|---|---|---|---|
| 0 | Preparación y lectura del repo | realizado | N/A | 2026-06-03 |
| 1 | Hero data-driven y posicionamiento | realizado | MP-001, MP-002, MP-003, MP-004 | 2026-06-03 |
| 2 | Modelo de servicios y data | realizado | MP-005, MP-006, MP-007 | 2026-06-03 |
| 3 | UI de servicios | realizado | MP-008 | 2026-06-03 |
| 4 | Casos: modelo y data | realizado | MP-009, MP-010 | 2026-06-03 |
| 5 | Casos: componentes e integración | realizado | MP-011, MP-012, MP-013 | 2026-06-03 |
| 6 | Experiencia enriquecida | realizado | MP-014, MP-015, MP-016 | 2026-06-03 |
| 7 | Resumen ejecutivo de CV | realizado | MP-017 | 2026-06-03 |
| 8 | Forma de trabajo | realizado | MP-018, MP-019, MP-020 | 2026-06-03 |
| 9 | Laboratorio de producto | realizado | MP-021, MP-022, MP-023, MP-024 | 2026-06-03 |
| 10 | Stack con criterio | realizado | MP-025, MP-026, MP-027 | 2026-06-03 |
| 11 | Alianzas y conversión | realizado | MP-028, MP-029, MP-030, MP-031, MP-032 | 2026-06-03 |
| 12 | Navegación, metadata y páginas internas | realizado | MP-033, MP-034, MP-035, MP-036 | 2026-06-03 |
| 13 | QA final | realizado | MP-037, MP-038, MP-039, MP-040 | 2026-06-03 |

## Historial de ejecución

### Batch 0 — Preparación y lectura del repo

- **Fecha:** 2026-06-03
- **Estado:** realizado
- **Tareas MP cubiertas:** N/A
- **Archivos modificados/creados:** ninguno (batch de solo lectura)
- **Build:** N/A — no se modificaron archivos
- **Resumen:** Se analizó la estructura completa del repo. Framework Next.js 15/React/TypeScript confirmado. Se identificaron 8 data files existentes, 4 tipos existentes con campos faltantes, 8 data files nuevos a crear, 4 secciones nuevas a crear y 6 discrepancias respecto al plan documentado. Hallazgos registrados en sección `Hallazgos iniciales del repo`.
- **Pendientes:** ninguno

### Batch 1 — Hero data-driven y posicionamiento

- **Fecha:** 2026-06-03
- **Estado:** realizado
- **Tareas MP cubiertas:** MP-001, MP-002, MP-003, MP-004
- **Archivos creados:**
  - `src/types/hero.types.ts` — tipos `HeroAction`, `HeroSignal`, `HeroContent`
  - `src/data/hero.data.ts` — copy alineado a backend/arquitectura/formación, señales mejoradas (sin "Prod"/"Edu")
- **Archivos modificados:**
  - `src/components/sections/HeroSection/HeroSection.tsx` — migrado a data-driven, elimina todo copy hardcodeado
- **Build:** ✅ `npm run build` exitoso (Next.js 16.2.7, TypeScript OK, 17 páginas generadas)
- **Pendientes:** ninguno

### Batch 2 — Modelo de servicios y data

- **Fecha:** 2026-06-03
- **Estado:** realizado
- **Tareas MP cubiertas:** MP-005, MP-006, MP-007
- **Archivos modificados:**
  - `src/types/service.types.ts` — agregado `ServiceTier` y campos opcionales: `tier`, `audience`, `problems`, `outcomes`, `formats`, `proof`
  - `src/data/services.data.ts` — rediseñada taxonomía: 3 servicios `primary` (backend/arquitectura, liderazgo técnico, formación) + 3 `secondary` (IA, frontend, mobile); nuevo servicio `liderazgo-tecnico` apuntando a `/mentoria/`; cada servicio con `audience`, `problems` y `outcomes`
- **Build:** ✅ `npm run build` exitoso (TypeScript OK, 17 páginas generadas)
- **Pendientes:** ninguno

### Batch 13 — QA final

- **Fecha:** 2026-06-03
- **Estado:** realizado
- **Tareas MP cubiertas:** MP-037, MP-038, MP-039, MP-040

**Problemas encontrados y corregidos:**

1. ✅ **MP-037 — Responsive:** `.profile-pillars` no tenía regla para mobile (<768px). Corregido: `grid-template-columns: 1fr` en el breakpoint móvil.

2. ✅ **MP-038 — Accesibilidad:** `CollaborationSection` tenía `style={{ "--marker": '"✕"' }}` como variable CSS sin efecto (el `::before` de `service-outcomes-list` usa `content: "→"` hardcodeado con mayor especificidad). Solución: clase propia `collab-not-fit-list` con `li::before { content: "✕" }` dedicado.

3. ✅ **MP-039 — SEO:** Todas las páginas tienen `buildMetadata` con `title` y `description`. Títulos únicos verificados. `/casos/` aparece en sitemap automáticamente. Anchor `#casos` en hero apunta al ID correcto. `personJsonLd` actualizado en Batch 12.

4. ✅ **MP-040 — Contenido:** Sin porcentajes inventados en `caseStudies.data.ts` ni `experience.data.ts`. Sin emails expuestos en HTML (obfuscación activa via `emailParts`). Casos marcados como `anonimized` o `public` según corresponde. Sin claims no verificables.

**Sin errores:**
- Jerarquía de headings correcta: un solo `h1` por página (HeroSection/PageHeroSection), h2 en secciones, h3 en cards
- `aria-hidden="true"` en todos los íconos decorativos de secciones nuevas
- Links externos en datos de juegos usan `target="_blank"` + `rel="noopener noreferrer"` en `GamePreviewCard`
- Anclas de navegación del home todas apuntan a IDs existentes

**Requiere revisión humana:**
- Contenido de los 5 casos de `caseStudies.data.ts`: confirmar que el nivel de anonimato es adecuado para cada uno
- Textos de `experience.data.ts` (campos `impact`): verificar que reflejen correctamente el trabajo realizado
- Navbar visual en mobile: validar que el menú con 15 páginas + anclas sea usable (requiere browser)

- **Build:** ✅ `npm run build` exitoso (TypeScript OK, 18 páginas generadas)
- **Pendientes:** ninguno — plan MP-001–MP-040 completado

### Batch 12 — Navegación, metadata y páginas internas

- **Fecha:** 2026-06-03
- **Estado:** realizado
- **Tareas MP cubiertas:** MP-033, MP-034, MP-035, MP-036
- **Archivos modificados:**
  - `src/data/navigation.data.ts` — `navPages` reordenado: Backend y Arquitectura primero; agrega `/casos/`; anclas del home actualizadas con `#casos`, `#metodo`, `#alianzas` (reemplaza `#experiencia`, `#confianza`, `#keygo`, `#contenido`); anclas de `/casos/` agregadas
  - `src/app/page.tsx` — metadata: title "Backend, Arquitectura y Formación Técnica"; description con posicionamiento estratégico y sin lista de tecnologías
  - `src/lib/metadata.ts` — `personJsonLd`: jobTitle actualizado a "Desarrollador Backend Senior · Arquitecto de Software · Docente Técnico"; `knowsAbout` reordenado con backend/arquitectura primero
  - `src/app/backend/page.tsx` — description: menciona arquitectura, clean architecture, enterprise
  - `src/app/mentoria/page.tsx` — title: "Liderazgo Técnico y Mentoría"; description: acompañamiento técnico para equipos, revisión de código, decisiones de arquitectura
  - `src/app/docencia/page.tsx` — title: "Formación Técnica Aplicada"; description: conecta con práctica real de la industria
- **Archivos creados:**
  - `src/app/casos/page.tsx` — muestra los 5 casos con `CaseStudyCard`; `id="casos-lista"`; CTA hacia `/contacto/?topic=arquitectura`
- **Build:** ✅ `npm run build` exitoso (TypeScript OK, **18 páginas** generadas — `/casos/` incluida en sitemap)
- **Pendientes:** ninguno

### Batch 11 — Alianzas y conversión

- **Fecha:** 2026-06-03
- **Estado:** realizado
- **Tareas MP cubiertas:** MP-028, MP-029, MP-030, MP-031, MP-032
- **Archivos creados:**
  - `src/types/collaboration.types.ts` — tipos `CollaborationProfile`, `CollaborationContent`
  - `src/data/collaboration.data.ts` — 4 perfiles: consultoría backend, liderazgo técnico, docencia/formación, alianza técnica; sección "no fit" con 4 criterios de exclusión
  - `src/components/sections/CollaborationSection/CollaborationSection.tsx` — grid 2×2 de perfiles con icon/CTA por perfil; bloque "cuándo no soy el fit" con estilo muted
  - `src/components/sections/CollaborationSection/index.ts`
- **Archivos modificados:**
  - `src/types/contact.types.ts` — campo `hint?` en `ContactTopic`
  - `src/data/contact.data.ts` — 2 topics nuevos: `alianza` y `empleo`; hints en 10 topics para guiar mejores mensajes; `scheduleHref = null` (MP-032: decisión documentada de no integrar agenda en este ciclo)
  - `src/components/components/ContactForm/ContactForm.tsx` — muestra hint del topic seleccionado bajo el select
  - `src/app/globals.css` — clases nuevas: `.collaboration-grid`, `.collab-card`, `.collab-card-icon`, `.collab-card-description`, `.collab-formats`, `.collab-not-fit`, `.collab-not-fit-label`, `.collab-not-fit-item`; responsive mobile
  - `src/app/page.tsx` — `CollaborationSection` insertada antes del CTA final; CTA reescrito con foco en arquitectura/liderazgo/formación/alianza; "Hablemos" como CTA primary
- **Build:** ✅ `npm run build` exitoso (TypeScript OK, 17 páginas generadas)
- **Pendientes:** MP-032 resuelto como decisión: no integrar agenda externa en este ciclo; `scheduleHref` queda como `null` en `contact.data.ts`

### Batch 10 — Stack con criterio

- **Fecha:** 2026-06-03
- **Estado:** realizado
- **Tareas MP cubiertas:** MP-025, MP-026, MP-027
- **Archivos modificados:**
  - `src/types/tech.types.ts` — agregados `TechLevel`, `level`, `priority`, `context`, `evidence`, `yearsLabel` a `TechItem`
  - `src/data/techStack.data.ts` — reescrito completo: `level` y `priority` en todos los ítems; Java/Spring/REST APIs como `core` en backend; PostgreSQL/Oracle como `core` en datos; Docker/Docker Compose/GitHub Actions como `core` en devops; herramientas de IA (`claude-code`, `opencode`, `codex`, `copilot-cli`) como `exploratory`
  - `src/components/sub-components/TechCardGrid/TechCardGrid.tsx` — ordena ítems por nivel (core→strong→working→exploratory) y luego por priority; muestra badge `tech-level-{level}` en cada card con label en español
  - `src/components/sections/StackShowcaseSection/StackShowcaseSection.tsx` — heading actualizado: "Stack técnico con criterio, no un catálogo plano."
- **Archivos modificados (CSS):**
  - `src/app/globals.css` — clases nuevas: `.tech-level-badge`, `.tech-level-core`, `.tech-level-strong`, `.tech-level-working`, `.tech-level-exploratory`
- **Build:** ✅ `npm run build` exitoso (TypeScript OK, 17 páginas generadas)
- **Pendientes:** ninguno

### Batch 9 — Laboratorio de producto

- **Fecha:** 2026-06-03
- **Estado:** realizado
- **Tareas MP cubiertas:** MP-021, MP-022, MP-023, MP-024
- **Archivos creados:**
  - `src/types/project.types.ts` — tipos `LabProjectStatus`, `LabProject` con campos: badge, title, tagline, description, status, statusLabel, features, stack, learnings, href, linkLabel, githubHref, featured
  - `src/data/labProjects.data.ts` — KeyGo reposicionado como "laboratorio público de arquitectura SaaS"; copy sin defensiva; con tagline, learnings de diseño y stack explícito
- **Archivos modificados:**
  - `src/data/games.data.ts` — interfaz `GameProject` enriquecida con campos opcionales `techFocus` y `learnings`; 4 proyectos actualizados con foco técnico (física/rendering, prototipado, shaders, game loop); sin romper `GamePreviewCard`
  - `src/components/sections/ProjectHighlightSection/ProjectHighlightSection.tsx` — migrado a data-driven desde `labProjects.data.ts`; muestra tagline, learnings de diseño, stack pills; cero copy hardcodeado
- **Build:** ✅ `npm run build` exitoso (TypeScript OK, 17 páginas generadas)
- **Pendientes:** ninguno

### Batch 8 — Forma de trabajo

- **Fecha:** 2026-06-03
- **Estado:** realizado
- **Tareas MP cubiertas:** MP-018, MP-019, MP-020
- **Archivos creados:**
  - `src/types/workMethod.types.ts` — tipos `WorkPrinciple`, `WorkMethodContent`
  - `src/data/workMethod.data.ts` — 6 principios: entender dominio, límites y contratos, construcción incremental, calidad y mantenibilidad, transferir criterio, revisión honesta; cada uno con descripción y evidencia cualitativa
  - `src/components/sections/WorkMethodSection/WorkMethodSection.tsx` — grid de 6 cards (3-col desktop, 2-col tablet, 1-col mobile); cada card con icono, título, descripción y evidencia (italic, solo si existe)
  - `src/components/sections/WorkMethodSection/index.ts`
- **Archivos modificados:**
  - `src/app/globals.css` — clases nuevas: `.work-method-grid`, `.method-card`, `.method-card-icon`, `.method-card-description`, `.method-card-evidence`; responsive
  - `src/app/page.tsx` — `WorkMethodSection` insertada entre `CaseStudiesSection` y `TrustSection`
- **Build:** ✅ `npm run build` exitoso (TypeScript OK, 17 páginas generadas)
- **Pendientes:** ninguno

### Batch 7 — Resumen ejecutivo de CV

- **Fecha:** 2026-06-03
- **Estado:** realizado
- **Tareas MP cubiertas:** MP-017
- **Archivos creados:**
  - `src/types/profile.types.ts` — tipos `ProfilePillar`, `ProfileContent`
  - `src/data/profile.data.ts` — headline, summary (distinto del hero lead), 4 pilares (backend/arquitectura, liderazgo técnico, formación aplicada, sistemas reales), nota de disponibilidad
  - `src/components/sections/ProfileSummarySection/ProfileSummarySection.tsx` — layout 2 columnas: texto + grid 2x2 de pilares; badge de disponibilidad con color acento
  - `src/components/sections/ProfileSummarySection/index.ts`
- **Archivos modificados:**
  - `src/app/globals.css` — clases nuevas: `.profile-pillars`, `.profile-pillar`, `.profile-pillar-icon`, `.profile-availability`
  - `src/app/page.tsx` — `ProfileSummarySection` insertada entre `HeroSection` y `ExperienceSection`
- **Build:** ✅ `npm run build` exitoso (TypeScript OK, 17 páginas generadas)
- **Pendientes:** ninguno

### Batch 6 — Experiencia enriquecida

- **Fecha:** 2026-06-03
- **Estado:** realizado
- **Tareas MP cubiertas:** MP-014, MP-015, MP-016
- **Archivos modificados:**
  - `src/types/experience.types.ts` — agregados campos opcionales: `domain`, `impact`, `scope`, `stack`, `responsibilities`, `proofLevel`, `relatedCaseStudyIds`
  - `src/data/experience.data.ts` — 7 ítems enriquecidos con `domain`, `impact` y `stack` (DuocUC, Veolia, Stefanini, Mercado Libre, Globant, GlobalLogic, Imagemaker); sin métricas inventadas; solo resultados cualitativos
  - `src/components/sections/ExperienceSection/ExperienceTimeline.tsx` — renderiza `domain` como chip compacto siempre visible; renderiza `impact` (con borde lateral acento) y `stack` (pills `case-stack-pill`) solo en el ítem activo, para no alargar los inactivos
- **Build:** ✅ `npm run build` exitoso (TypeScript OK, 17 páginas generadas)
- **Pendientes:** ninguno

### Batch 5 — Casos: componentes e integración

- **Fecha:** 2026-06-03
- **Estado:** realizado
- **Tareas MP cubiertas:** MP-011, MP-012, MP-013
- **Archivos creados:**
  - `src/components/components/CaseStudyCard/CaseStudyCard.tsx` — card completa con GlassCard, domainLabel, badge, period, contexto, problema, aporte, resultados (`service-outcomes-list`) y stack pills (`case-stack-pill`); maneja todos los campos opcionales
  - `src/components/components/CaseStudyCard/index.ts`
  - `src/components/sections/CaseStudiesSection/CaseStudiesSection.tsx` — sección con `id="casos"`, muestra casos `featured` (3); CTA a `/experiencia/`
  - `src/components/sections/CaseStudiesSection/index.ts`
- **Archivos modificados:**
  - `src/app/globals.css` — clases nuevas: `.case-studies-grid`, `.case-card-meta`, `.case-card-period`, `.case-card-context`, `.case-card-block`, `.case-card-label`, `.case-card-text`, `.case-card-stack`, `.case-stack-pill`; responsive para tablet y mobile
  - `src/app/page.tsx` — `CaseStudiesSection` insertada después de `ServicesSection` (flujo: promesa → oferta → evidencia)
- **Build:** ✅ `npm run build` exitoso (TypeScript OK, 17 páginas generadas)
- **Pendientes:** ninguno

### Batch 4 — Casos: modelo y data

- **Fecha:** 2026-06-03
- **Estado:** realizado
- **Tareas MP cubiertas:** MP-009, MP-010
- **Archivos creados:**
  - `src/types/caseStudy.types.ts` — tipos `CaseStudyDomain`, `CaseStudyConfidentiality`, `CaseStudyResult`, `CaseStudy`; soporta casos confidenciales, stack, resultados cualitativos con métrica opcional, campo `featured`
  - `src/data/caseStudies.data.ts` — 5 casos anonimizados: e-commerce (featured), banca/integración (featured), liderazgo técnico (featured), operaciones/utilities, formación universitaria (public); sin métricas inventadas; todos con contexto, problema, aporte y resultados cualitativos
- **Build:** ✅ `npm run build` exitoso (TypeScript OK, 17 páginas generadas)
- **Pendientes:** ninguno

### Batch 3 — UI de servicios

- **Fecha:** 2026-06-03
- **Estado:** realizado
- **Tareas MP cubiertas:** MP-008
- **Archivos modificados:**
  - `src/components/sections/ServicesSection/ServicesSection.tsx` — dividida en dos grupos: grid de primarios (3 tarjetas featured) + carousel de secundarios; copy actualizado para reflejar jerarquía backend/arquitectura/formación
  - `src/components/components/ServicesCarousel/ServicesCarousel.tsx` — acepta prop `services?: Service[]` opcional; cae al listado completo si no se pasa nada
  - `src/components/sub-components/ServiceCardBody/ServiceCardBody.tsx` — renderiza sección "Resultados" con `outcomes` solo para `tier === "primary"`
  - `src/app/globals.css` — nuevas clases: `.services-primary-grid`, `.services-primary-slide`, `.services-secondary-block`, `.services-secondary-eyebrow`, `.service-outcomes`, `.service-outcomes-label`, `.service-outcomes-list`; reglas responsive para tablet y mobile
- **Build:** ✅ `npm run build` exitoso (TypeScript OK, 17 páginas generadas)
- **Pendientes:** ninguno

## Hallazgos iniciales del repo

Registrados el 2026-06-03. Solo para trazabilidad, no son tareas inmediatas.

1. **`CertificationsSection` fuera del plan de secciones**
   - Existe en el repo pero no está en la home ni priorizada en el plan.
   - Acción: dejar como pendiente evaluable para una fase posterior de credibilidad/certificaciones.

2. **`GamesSection` sin incluir en la home**
   - Existe como componente pero no aparece en la home actual.
   - Acción: considerar dentro del Batch 9 — Laboratorio de producto para conectar videojuegos/prototipos con aprendizaje técnico.

3. **`ContentSection` sin `content.data.ts`**
   - La sección existe pero no tiene data file correspondiente.
   - Acción: revisar cuando corresponda trabajar contenido/artículos. No resolver ahora.

4. **`ImageCarouselModal` sin `index.ts`**
   - Existe en `sub-components` pero no tiene export estandarizado.
   - Acción: no intervenir salvo que un batch necesite usarlo o estandarizar exports.

5. **CTA final hardcodeado en `src/app/page.tsx`**
   - El copy estratégico del CTA no está en un data file.
   - Acción: resolver en Batch 11 — Alianzas y conversión, moviendo copy a data.

6. **Tipos existentes necesitan campos opcionales nuevos**
   - `Service` (`service.types.ts`): sin `tier`, `audience`, `problems`, `outcomes`, `formats`, `proof`. → Batch 2.
   - `ExperienceItem` (`experience.types.ts`): sin `domain`, `impact`, `scope`, `stack`, `responsibilities`, `relatedCaseStudyIds`. → Batch 6.
   - `TechItem` (`tech.types.ts`): sin `level`, `priority`, `context`, `evidence`. → Batch 10.
