# Matriz de trazabilidad técnica

## 1. Estado técnico observado

El proyecto usa una estructura Next/React con componentes por sección y fuentes de datos en `src/data`. La página principal (`src/app/page.tsx`) compone la home importando secciones independientes.

Esto es positivo porque permite evolucionar la marca personal sin reescribir toda la aplicación.

## 2. Matriz técnica principal

| Artefacto actual | Estado | Cambio técnico | Archivos nuevos/modificados | Riesgo | Validación |
|---|---|---|---|---|---|
| `src/app/page.tsx` | Modificar | Reordenar secciones y agregar nuevas: `CaseStudiesSection`, `WorkMethodSection`, `CollaborationSection`. | `src/app/page.tsx` | Bajo | Build Next OK; navegación ancla OK. |
| `HeroSection.tsx` | Modificar | Remover strings hardcodeados y consumir `hero.data.ts`. | `HeroSection.tsx`, `src/data/hero.data.ts`, `src/types/hero.types.ts` | Bajo | Render visual idéntico o mejor; copy editable desde datos. |
| `TerminalCard` | Mantener/mejorar | Ajustar comandos para reforzar backend/arquitectura/calidad. | `TerminalCard.tsx` o `terminal.data.ts` si se extrae | Bajo | El terminal sigue animando y no rompe layout. |
| `ExperienceSection` | Modificar | Soportar nuevos campos: `impact`, `domain`, `stack`, `proofLevel`, `visibility`. | `ExperienceTimeline.tsx`, `experience.types.ts`, `experience.data.ts` | Medio | No rompe datos actuales; campos opcionales al inicio. |
| `services.data.ts` | Modificar | Agregar clasificación: `tier`, `audience`, `outcomes`, `formats`, `primary`. | `services.data.ts`, `service.types.ts` | Bajo/medio | Cards renderizan servicios antiguos y nuevos. |
| `ServicesSection` | Modificar | Separar visualmente servicios principales y secundarios. | `ServicesSection.tsx`, `ServicesCarousel.tsx` si aplica | Medio | Mobile OK; no se sobrecarga carrusel. |
| `TrustSection` | Modificar | Consumir `trustSignals.data.ts`, evitar duplicación con hero. | `TrustSection.tsx`, `trustSignals.data.ts` | Bajo | Señales legibles en desktop/mobile. |
| `ProjectHighlightSection` | Modificar | Pasar de hardcoded a data-driven. | `ProjectHighlightSection.tsx`, `projects.data.ts`, `project.types.ts` | Bajo | KeyGo sigue visible y más editable. |
| `StackShowcaseSection` | Modificar | Soportar jerarquía del stack. | `StackShowcaseSection.tsx`, `techStack.data.ts`, `tech.types.ts` | Medio | Filtros siguen funcionando; categorías claras. |
| `ContentSection` | Modificar | Alinear a pensamiento técnico y recursos. | `ContentSection.tsx`, `content.data.ts` | Bajo | Links externos seguros y accesibles. |
| Nueva `CaseStudiesSection` | Crear | Renderizar casos desde `caseStudies.data.ts`. | `CaseStudiesSection.tsx`, `CaseStudyCard.tsx`, `caseStudies.data.ts`, `caseStudy.types.ts` | Medio | Datos confidenciales no exponen información sensible. |
| Nueva `WorkMethodSection` | Crear | Renderizar principios de trabajo. | `WorkMethodSection.tsx`, `workMethod.data.ts`, `workMethod.types.ts` | Bajo | Copy claro y no redundante. |
| Nueva `CollaborationSection` | Crear | Mostrar tipos de alianza y fit/no-fit. | `CollaborationSection.tsx`, `collaboration.data.ts`, `collaboration.types.ts` | Bajo | CTA por tipo de colaboración. |
| `navigation.data.ts` | Modificar | Agregar anclas nuevas y ajustar orden. | `navigation.data.ts` | Bajo | Navbar apunta a IDs existentes. |
| `contact.data.ts` | Modificar | Agregar topics/intenciones y CTA por audiencia. | `contact.data.ts`, `ContactForm.tsx`, `useContactForm.ts` | Medio | Query param `topic` sigue funcionando. |
| Metadata | Modificar | Ajustar title/description a posicionamiento nuevo. | `src/app/page.tsx`, `src/lib/metadata.ts` | Bajo | SEO básico actualizado. |

## 3. Recomendación de nuevos archivos `*.data.ts`

| Archivo nuevo | Motivo |
|---|---|
| `src/data/hero.data.ts` | Centralizar promesa, subtítulo, CTAs y señales. |
| `src/data/trustSignals.data.ts` | Evitar señales hardcodeadas y reutilizar entre hero/trust. |
| `src/data/caseStudies.data.ts` | Convertir experiencia en evidencia concreta. |
| `src/data/workMethod.data.ts` | Explicar criterio técnico de forma reusable. |
| `src/data/collaboration.data.ts` | Declarar tipos de alianza y fit/no-fit. |
| `src/data/projects.data.ts` o `src/data/labProjects.data.ts` | Reunir KeyGo, Starborne Voyager y prototipos. |
| `src/data/content.data.ts` | Gestionar artículos, publicaciones, links y recursos. |

## 4. Recomendación de tipos nuevos

| Tipo | Archivo sugerido | Campos mínimos |
|---|---|---|
| `HeroContent` | `src/types/hero.types.ts` | `eyebrow`, `title`, `highlight`, `lead`, `actions`, `signals`. |
| `TrustSignal` | `src/types/trust.types.ts` | `id`, `value`, `label`, `description`, `priority`. |
| `CaseStudy` | `src/types/caseStudy.types.ts` | `id`, `title`, `context`, `problem`, `actions`, `outcomes`, `stack`, `confidentiality`. |
| `WorkMethodItem` | `src/types/workMethod.types.ts` | `id`, `title`, `description`, `principles`, `evidence`. |
| `CollaborationProfile` | `src/types/collaboration.types.ts` | `id`, `title`, `who`, `needs`, `formats`, `cta`. |
| `LabProject` | `src/types/project.types.ts` | `id`, `name`, `category`, `status`, `summary`, `learning`, `links`, `stack`. |

## 5. Reglas técnicas para componentes

1. Los componentes de sección no deben contener copy estratégico hardcodeado.
2. Todo bloque reutilizable debe tener type explícito en `src/types`.
3. Los `*.data.ts` deben exportar arreglos u objetos tipados.
4. La home debe importar secciones, no datos directamente salvo excepciones justificadas.
5. Los IDs de secciones deben venir de constantes o estar sincronizados con `navigation.data.ts`.
6. Las secciones nuevas deben ser opcionales en datos mediante `visible: boolean` si existe incertidumbre.
7. Los links externos deben tener `external: true`, `ariaLabel` y apertura segura si aplica.

## 6. Riesgos técnicos

| Riesgo | Mitigación |
|---|---|
| Romper diseño mobile al agregar secciones | Implementar sección por sección, validando responsive cada vez. |
| Duplicar contenido entre hero/trust/CTA | Centralizar señales y CTAs en data files. |
| Sobrecargar la home | Usar resúmenes en home y páginas detalle para profundidad. |
| Exponer datos sensibles en casos | Definir `confidentiality` y usar nombres genéricos cuando corresponda. |
| Crear demasiados tipos prematuramente | Empezar con tipos simples y evolucionar cuando se repita estructura. |

## 7. Orden técnico recomendado

1. Crear data files y tipos nuevos sin cambiar UI.
2. Migrar `HeroSection` a data-driven.
3. Migrar `ProjectHighlightSection` a data-driven.
4. Actualizar `services.data.ts` y `ServicesSection`.
5. Agregar `CaseStudiesSection`.
6. Agregar `WorkMethodSection`.
7. Agregar `CollaborationSection`.
8. Ajustar navegación y CTA.
9. Actualizar metadata.
10. QA visual, responsive, SEO y accesibilidad.
