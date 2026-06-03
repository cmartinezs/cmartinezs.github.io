# Matriz de trazabilidad de contenido

Esta matriz muestra qué ocurre con cada sección actual y cómo debe evolucionar.

## 1. Trazabilidad por sección de la home

| Sección actual | Archivo actual | Estado | Problema actual | Cambio propuesto | Sección destino | Fuente de datos destino |
|---|---|---|---|---|---|---|
| Hero | `src/components/sections/HeroSection/HeroSection.tsx` | Transformar | Copy correcto, pero todavía amplio: “Software · Formación · IA aplicada”. Mensaje fuerte, pero no jerarquiza backend/arquitectura. | Reescribir hero con propuesta senior más específica. Mover copy a datos. Agregar CTA hacia casos/agenda. | Hero estratégico | `src/data/hero.data.ts` + `src/types/hero.types.ts` |
| Señales del hero | `HeroSection.tsx` | Mantener y mejorar | “15+”, “Prod”, “Edu” son buenas señales, pero genéricas. | Reemplazar por señales más interpretables: años, dominios, liderazgo, docencia, producto propio. | Señales de confianza | `src/data/trustSignals.data.ts` |
| Experiencia | `src/components/sections/ExperienceSection/*` + `src/data/experience.data.ts` | Mantener y transformar | Buena narrativa, pero con poco resultado explícito. | Agregar `impact`, `scope`, `domain`, `stack`, `proofLevel`, `confidentialityNote`. | Trayectoria profesional | `src/data/experience.data.ts` mejorado |
| Servicios | `src/components/sections/ServicesSection/*` + `src/data/services.data.ts` | Dividir | Presenta muchas capacidades al mismo nivel. Puede parecer generalista. | Separar oferta principal, capacidades complementarias y formatos de colaboración. | Oferta principal + capacidades | `src/data/services.data.ts` mejorado + `src/data/collaboration.data.ts` |
| Trust | `src/components/sections/TrustSection/*` | Mantener | Aporta credibilidad, pero puede duplicar señales del hero. | Convertir en bloque de autoridad: dominios, tipos de sistemas, roles, formas de trabajo. | Señales de autoridad | `src/data/trustSignals.data.ts` |
| KeyGo | `src/components/sections/ProjectHighlightSection/ProjectHighlightSection.tsx` | Transformar | Copy hardcodeado y narrativa defensiva: “no producto comercial finalizado”. | Data-driven. Reposicionar como laboratorio SaaS/auth/multi-tenant. | Laboratorio de producto | `src/data/projects.data.ts` o `src/data/labProjects.data.ts` |
| Stack | `src/components/sections/StackShowcaseSection/*` + `src/data/techStack.data.ts` | Mantener y transformar | Stack muy amplio. Puede diluir foco. | Agregar jerarquía: principal/complementario/exploratorio; nivel de dominio; evidencia. | Stack con criterio | `src/data/techStack.data.ts` mejorado |
| Contenido | `src/components/sections/ContentSection/*` | Transformar | Puede no estar alineada con estrategia de autoridad. | Enfocar en pensamiento técnico, artículos, docencia, LinkedIn, bitácoras de producto. | Pensamiento técnico | `src/data/content.data.ts` |
| CTA final | `src/components/sections/CTASection/*` | Mantener y mejorar | Mensaje amplio. Contacto por formulario, pero falta foco de conversión. | CTA específico para arquitectura, equipo, formación y alianzas. Añadir opciones por intención. | CTA de conversión | `src/data/contact.data.ts` mejorado |
| Navbar | `src/components/layout/Navbar/Navbar.tsx` + `src/data/navigation.data.ts` | Transformar | Navegación probablemente orientada a secciones actuales. | Reflejar nueva jerarquía: Servicios, Casos, Trayectoria, Laboratorio, Contacto. | Navegación estratégica | `src/data/navigation.data.ts` |

## 2. Trazabilidad de contenido por objetivo

| Objetivo | Contenido actual que lo soporta | Brecha | Contenido nuevo requerido |
|---|---|---|---|
| Servir como CV | `experience.data.ts`, `techStack.data.ts`, hero, metadata | Falta evidencia, resultados, casos y descargas/contacto claro. | Casos, resumen ejecutivo, stack priorizado, CTA de CV/LinkedIn. |
| Llegar a personas | Hero, servicios, CTA | Mensaje poco segmentado por audiencia. | Bloques “para quién soy”, “cómo puedo ayudarte”, “formatos de colaboración”. |
| Generar alianzas | KeyGo, GenDigital, docencia, IA | No se declara explícitamente qué alianzas buscas. | Nueva sección `CollaborationSection` con tipos de alianza. |
| Diferenciar seniority | Experiencia extensa | Falta explicar forma de pensar. | Nueva sección `WorkMethodSection`. |
| Evitar percepción generalista | Servicios y stack amplios | Todo parece tener igual peso. | Jerarquía: core / complementary / exploratory. |
| Mostrar producto propio | KeyGo y videojuegos | KeyGo defensivo; videojuegos podrían verse desconectados. | Sección “Laboratorio”: KeyGo, Starborne Voyager y prototipos como evidencia de creación. |

## 3. Decisiones de permanencia

| Elemento | Decisión | Justificación |
|---|---|---|
| Estética terminal/dev | Mantener | Refuerza identidad técnica real y diferencia visual. |
| `TerminalCard` | Mantener | Buen recurso visual, pero debe alinearse con posicionamiento backend/arquitectura. |
| Enfoque en docencia | Mantener, pero no liderar toda la narrativa | Es diferencial, pero si domina demasiado puede desplazar el perfil de arquitecto/desarrollador senior. |
| IA aplicada | Mantener como capacidad complementaria | Potente, pero debe presentarse como productividad/automatización con criterio, no como moda. |
| Mobile/frontend | Mantener como capacidades complementarias | Suman a perfil producto, pero no deben competir con backend como eje. |
| Videojuegos | Mantener en laboratorio | Excelente para mostrar creatividad técnica, performance, interacción y Three.js/Canvas. |

## 4. Secciones que no deberían eliminarse

No se recomienda eliminar completamente ninguna sección actual. La estrategia es reordenar y transformar.

El único riesgo actual es la dilución. Por eso se propone:

- Mantener experiencia.
- Mantener servicios, pero priorizados.
- Mantener stack, pero jerarquizado.
- Mantener KeyGo, pero reposicionado.
- Mantener docencia, pero integrada a transferencia de criterio.
