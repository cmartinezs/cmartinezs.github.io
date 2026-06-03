# Batches sugeridos para Claude Code

## Propósito

Este documento transforma el backlog detallado en lotes ejecutables por Claude Code.

Cada batch debe ser lo bastante pequeño para:

- Revisar el diff con calma.
- Ejecutar `npm run build`.
- Corregir sin mezclar demasiadas áreas.
- Mantener trazabilidad contra tareas `MP`.

---

# Batch 0 — Preparación y lectura del repo

## Backlog relacionado

- No implementa MP directamente.
- Prepara ejecución de MP-001 a MP-040.

## Prompt sugerido para Claude Code

```md
Lee la estructura del repo `cmartinezs.github.io`.

Identifica:
- framework usado,
- estructura de `src/app`,
- componentes principales de home,
- archivos `src/data/*.data.ts`,
- tipos existentes en `src/types`,
- componentes de secciones y cards.

No modifiques archivos todavía.

Entrega un resumen de:
1. Arquitectura actual.
2. Secciones actuales de home.
3. Data files existentes.
4. Riesgos para implementar los próximos cambios.
```

## Definition of Done

- Claude no modifica archivos.
- Se confirma estructura real antes de intervenir.

---

# Batch 1 — Hero data-driven y posicionamiento

## Tareas

- MP-001
- MP-002
- MP-003
- MP-004

## Objetivo

Transformar el hero actual en una sección data-driven, con copy más específico y orientado a backend, arquitectura, liderazgo técnico y formación aplicada.

## Archivos esperados

- Crear `src/types/hero.types.ts`
- Crear `src/data/hero.data.ts`
- Modificar `src/components/sections/HeroSection/HeroSection.tsx`

## Prompt sugerido

```md
Implementa solo el Batch 1.

Tareas de backlog:
- MP-001 Definir posicionamiento principal.
- MP-002 Crear hero.data.ts.
- MP-003 Migrar HeroSection a data-driven.
- MP-004 Ajustar señales de confianza del hero.

Restricciones:
- Mantén la estructura visual actual.
- Mantén animaciones existentes.
- Mantén TerminalCard, GlassCard y GlowEffect.
- No hardcodees copy estratégico en HeroSection.
- Usa TypeScript estricto.
- No modifiques servicios, stack, experiencia ni contacto.

Resultado esperado:
- Hero renderiza desde `heroContent`.
- Existen tipos en `src/types/hero.types.ts`.
- Las señales son claras y no usan abreviaturas confusas como “Prod” o “Edu”.
- `npm run build` debe funcionar.
```

## DoD

- Hero se ve igual o mejor.
- Copy central ya no está hardcodeado.
- El cambio puede revisarse aislado.

---

# Batch 2 — Modelo de servicios y data

## Tareas

- MP-005
- MP-006
- MP-007

## Objetivo

Actualizar la taxonomía de servicios sin tocar todavía la UI compleja.

## Archivos esperados

- `src/types/service.types.ts`
- `src/data/services.data.ts`

## Prompt sugerido

```md
Implementa solo el Batch 2.

Tareas:
- MP-005 Rediseñar taxonomía de servicios.
- MP-006 Mejorar Service type.
- MP-007 Actualizar contenido de services.data.ts.

Restricciones:
- No modifiques componentes visuales todavía salvo que sea estrictamente necesario para compilar.
- Mantén compatibilidad con datos actuales.
- Agrega campos opcionales: tier, audience, problems, outcomes, formats, proof.
- Ordena servicios por prioridad estratégica:
  1. Backend y arquitectura.
  2. Liderazgo técnico / mentoring.
  3. Formación técnica aplicada.
  4. Automatización con IA.
  5. Frontend/producto.
  6. Mobile.

Resultado:
- `services.data.ts` comunica problema, audiencia y resultado.
- Backend/arquitectura queda como eje principal.
```

## DoD

- Compila aunque la UI todavía no renderice todos los campos nuevos.
- No hay ruptura en ServicesSection.

---

# Batch 3 — UI de servicios

## Tareas

- MP-008

## Objetivo

Hacer que la UI de servicios refleje la jerarquía definida en data.

## Archivos esperados

- `src/components/sections/ServicesSection/*`
- `src/components/components/ServicesCarousel/ServicesCarousel.tsx`

## Prompt sugerido

```md
Implementa solo el Batch 3.

Tarea:
- MP-008 Ajustar UI de ServicesSection.

Contexto:
Ya existen campos nuevos en Service:
- tier
- audience
- problems
- outcomes
- formats
- proof

Objetivo:
Mostrar servicios `tier === "primary"` con mayor peso visual y servicios secundarios sin competir visualmente.

Restricciones:
- Mantén estética actual.
- Mantén responsive.
- No modifiques hero, experiencia, stack ni contacto.
```

## DoD

- Servicios principales aparecen primero.
- El usuario entiende el foco profesional sin leer toda la página.

---

# Batch 4 — Casos: modelo y data

## Tareas

- MP-009
- MP-010

## Objetivo

Crear el modelo y data inicial para casos de evidencia.

## Archivos esperados

- `src/types/caseStudy.types.ts`
- `src/data/caseStudies.data.ts`

## Prompt sugerido

```md
Implementa solo el Batch 4.

Tareas:
- MP-009 Crear modelo CaseStudy.
- MP-010 Crear primer set de casos.

Crea casos anonimizados y prudentes:
1. Sistemas de alto movimiento / e-commerce.
2. Banca e integración.
3. Sistemas operacionales / utilities.
4. Liderazgo técnico.
5. Formación técnica aplicada.

Restricciones:
- No inventes métricas numéricas.
- Usa resultados cualitativos si no hay datos verificables.
- Incluye campo de confidencialidad cuando corresponda.
- No crees componentes todavía.
```

## DoD

- Data lista para render.
- Sin datos sensibles.
- Sin claims no verificables.

---

# Batch 5 — Casos: componentes e integración

## Tareas

- MP-011
- MP-012
- MP-013

## Objetivo

Renderizar casos en la home.

## Archivos esperados

- `src/components/components/CaseStudyCard/CaseStudyCard.tsx`
- `src/components/sections/CaseStudiesSection/CaseStudiesSection.tsx`
- `src/app/page.tsx`

## Prompt sugerido

```md
Implementa solo el Batch 5.

Tareas:
- MP-011 Crear CaseStudyCard.
- MP-012 Crear CaseStudiesSection.
- MP-013 Integrar casos en home.

Restricciones:
- La sección debe tener `id="casos"`.
- Mostrar solo casos `featured` o los primeros 3.
- Debe manejar campos opcionales.
- Insertar después de ServicesSection o TrustSection según mejor flujo narrativo.
- No modificar contenido de experiencia todavía.
```

## DoD

- Home tiene evidencia concreta.
- Flujo narrativo mejora: promesa → oferta → evidencia.

---

# Batch 6 — Experiencia enriquecida

## Tareas

- MP-014
- MP-015
- MP-016

## Objetivo

Convertir la experiencia en CV vivo, sin perder la narrativa actual.

## Archivos esperados

- `src/types/experience.types.ts`
- `src/data/experience.data.ts`
- `src/components/sections/ExperienceSection/ExperienceTimeline.tsx`

## Prompt sugerido

```md
Implementa solo el Batch 6.

Tareas:
- MP-014 Ampliar ExperienceItem.
- MP-015 Reescribir experiencia con impacto.
- MP-016 Ajustar timeline para mostrar impacto.

Restricciones:
- No borres la narrativa actual.
- Agrega campos opcionales: domain, impact, scope, stack, responsibilities, relatedCaseStudyIds.
- No inventes métricas.
- Renderiza campos solo si existen.
- Evita que la timeline se vuelva excesivamente larga.
```

## DoD

- Experiencia sigue siendo legible.
- Ahora funciona mejor como CV.

---

# Batch 7 — Resumen ejecutivo de CV

## Tareas

- MP-017

## Objetivo

Agregar una sección breve para reclutadores y alianzas.

## Archivos esperados

- `src/data/profile.data.ts`
- `src/types/profile.types.ts` si corresponde
- `src/components/sections/ProfileSummarySection/ProfileSummarySection.tsx`
- `src/app/page.tsx`

## Prompt sugerido

```md
Implementa solo el Batch 7.

Tarea:
- MP-017 Crear resumen ejecutivo de CV.

Objetivo:
Crear una sección breve que permita entender el perfil profesional de Carlos en menos de 30 segundos.

Debe comunicar:
- Backend y arquitectura.
- Liderazgo técnico.
- Formación aplicada.
- Experiencia en sistemas reales.
- Perfil colaborativo para alianzas o equipos.

Restricciones:
- No repetir literalmente el hero.
- No hacer una biografía larga.
```

## DoD

- Sección breve.
- Útil para reclutadores y posibles socios.

---

# Batch 8 — Forma de trabajo

## Tareas

- MP-018
- MP-019
- MP-020

## Objetivo

Mostrar cómo piensa y trabaja Carlos, no solo qué tecnologías usa.

## Archivos esperados

- `src/types/workMethod.types.ts`
- `src/data/workMethod.data.ts`
- `src/components/sections/WorkMethodSection/WorkMethodSection.tsx`
- `src/app/page.tsx`

## Prompt sugerido

```md
Implementa solo el Batch 8.

Tareas:
- MP-018 Crear workMethod.data.ts.
- MP-019 Crear WorkMethodSection.
- MP-020 Integrar forma de trabajo en home.

Principios sugeridos:
1. Entender dominio antes de diseñar.
2. Definir límites y contratos.
3. Construir incrementalmente.
4. Cuidar calidad y mantenibilidad.
5. Transferir criterio al equipo.

Restricciones:
- No repetir servicios.
- Enfocar en criterio profesional.
```

## DoD

- La sección responde “cómo trabaja Carlos”.
- Refuerza confianza para alianzas.

---

# Batch 9 — Laboratorio de producto

## Tareas

- MP-021
- MP-022
- MP-023
- MP-024

## Objetivo

Reposicionar KeyGo y videojuegos como laboratorio técnico coherente.

## Archivos esperados

- `src/types/project.types.ts`
- `src/data/labProjects.data.ts`
- `src/data/games.data.ts`
- `src/components/sections/ProjectHighlightSection/ProjectHighlightSection.tsx`

## Prompt sugerido

```md
Implementa solo el Batch 9.

Tareas:
- MP-021 Crear modelo LabProject.
- MP-022 Migrar KeyGo desde hardcoded a data.
- MP-023 Reposicionar KeyGo.
- MP-024 Incorporar videojuegos como laboratorio técnico.

Restricciones:
- KeyGo debe sonar como laboratorio público de arquitectura SaaS, no como producto terminado.
- Los videojuegos deben aparecer como exploración técnica de performance, interacción y creatividad, no como hobby desconectado.
- El copy estratégico debe venir desde data.
```

## DoD

- ProjectHighlightSection deja de tener copy estratégico hardcodeado.
- KeyGo y Starborne Voyager calzan dentro de la marca técnica.

---

# Batch 10 — Stack con criterio

## Tareas

- MP-025
- MP-026
- MP-027

## Objetivo

Evitar que el stack parezca una lista plana de tecnologías.

## Archivos esperados

- `src/types/tech.types.ts`
- `src/data/techStack.data.ts`
- `StackShowcaseSection.tsx`
- `StackShowcase.tsx`
- `TechCardGrid.tsx`

## Prompt sugerido

```md
Implementa solo el Batch 10.

Tareas:
- MP-025 Ampliar TechItem.
- MP-026 Reordenar techStack.data.ts.
- MP-027 Ajustar UI de stack.

Agrega campos:
- level: "core" | "strong" | "working" | "exploratory"
- priority
- context
- evidence

Objetivo:
Java, Spring Boot, REST, SQL/PostgreSQL/Oracle, Docker/CI/CD deben percibirse como core.

IA y herramientas experimentales deben aparecer como apoyo, no como eje principal.
```

## DoD

- Stack comunica profundidad y criterio.
- No parece catálogo genérico.

---

# Batch 11 — Alianzas y conversión

## Tareas

- MP-028
- MP-029
- MP-030
- MP-031
- MP-032

## Objetivo

Convertir visitas en conversaciones concretas.

## Archivos esperados

- `src/types/collaboration.types.ts`
- `src/data/collaboration.data.ts`
- `src/components/sections/CollaborationSection/CollaborationSection.tsx`
- `src/data/contact.data.ts`
- `ContactForm.tsx`
- `useContactForm.ts`
- `CTASection` o `page.tsx`

## Prompt sugerido

```md
Implementa solo el Batch 11.

Tareas:
- MP-028 Crear collaboration.data.ts.
- MP-029 Crear CollaborationSection.
- MP-030 Mejorar contact.data.ts.
- MP-031 Ajustar CTA final.
- MP-032 Evaluar integración con agenda.

Objetivo:
La web debe decir explícitamente:
- Con quién quiere colaborar Carlos.
- Qué problemas ayuda a resolver.
- Qué formatos acepta.
- Cuándo no es buen fit.
- Cómo iniciar contacto.

Restricciones:
- Query param `topic` debe preseleccionar intención si ya existe soporte o debe quedar implementado.
- Topics sugeridos: arquitectura, empleo, docencia, alianza, KeyGo, IA.
- Si se agrega agenda, el link debe quedar en data.
```

## DoD

- La conversión deja de ser genérica.
- Contacto queda alineado a alianzas y CV.

---

# Batch 12 — Navegación, metadata y páginas internas

## Tareas

- MP-033
- MP-034
- MP-035
- MP-036

## Objetivo

Alinear navegación, SEO y páginas internas con la nueva narrativa.

## Archivos esperados

- `src/data/navigation.data.ts`
- `src/app/page.tsx`
- `src/lib/metadata.ts`
- páginas internas bajo `src/app/*/page.tsx`
- opcional `src/app/casos/page.tsx`

## Prompt sugerido

```md
Implementa solo el Batch 12.

Tareas:
- MP-033 Actualizar navigation.data.ts.
- MP-034 Actualizar metadata de home.
- MP-035 Revisar páginas de servicios existentes.
- MP-036 Crear página /casos opcional.

Restricciones:
- Todos los anchors deben existir.
- No crear /casos si la home aún no tiene data suficiente o si duplica innecesariamente contenido.
- Title y description deben comunicar backend, arquitectura y formación aplicada, no solo lista de tecnologías.
```

## DoD

- Navegación no tiene links rotos.
- Metadata está alineada al nuevo posicionamiento.

---

# Batch 13 — QA final

## Tareas

- MP-037
- MP-038
- MP-039
- MP-040

## Objetivo

Cerrar calidad técnica y contenido.

## Prompt sugerido

```md
Ejecuta QA final del proyecto.

Tareas:
- MP-037 QA responsive.
- MP-038 QA accesibilidad.
- MP-039 QA SEO básico.
- MP-040 QA de contenido.

Revisa:
- mobile, tablet, desktop,
- headings,
- aria labels,
- navegación por teclado,
- title/description/OG,
- claims no verificables,
- posibles datos sensibles,
- links internos,
- links externos,
- build.

Entrega:
1. Lista de problemas encontrados.
2. Cambios aplicados.
3. Problemas que requieren revisión humana.
```

## DoD

- `npm run build` OK.
- Sin errores visibles.
- Sin claims inventados.
- Sin información confidencial.
