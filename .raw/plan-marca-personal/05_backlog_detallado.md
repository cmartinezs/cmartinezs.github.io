# Backlog detallado de implementación

## Convenciones

- Tamaño S: 30 a 60 minutos.
- Tamaño M: 1 a 2 horas.
- Tamaño L: 2 a 4 horas.
- Cada tarea debe poder implementarse, revisarse y probarse individualmente.
- Evitar mezclar copy, layout y refactor técnico en una misma tarea cuando no sea necesario.

## Épica 1 — Reposicionamiento base

### MP-001 — Definir posicionamiento principal

- Tamaño: S
- Tipo: Contenido
- Archivos: `src/data/hero.data.ts` nuevo o documento temporal.
- Acción: Definir frase principal, subtítulo y promesa de valor.
- Resultado esperado: Hero alineado a backend, arquitectura, liderazgo técnico y formación aplicada.
- Criterios de aceptación:
  - Existe una frase principal aprobada.
  - No menciona demasiadas líneas de servicio al mismo nivel.
  - Puede entenderse en menos de 10 segundos.

### MP-002 — Crear `hero.data.ts`

- Tamaño: S
- Tipo: Técnico/contenido
- Archivos:
  - `src/data/hero.data.ts`
  - `src/types/hero.types.ts`
- Acción: Extraer eyebrow, title, highlight, lead, CTAs y señales.
- Criterios de aceptación:
  - `HeroContent` tipado.
  - No hay copy principal hardcodeado en `HeroSection`.
  - Los CTAs soportan links internos y externos.

### MP-003 — Migrar `HeroSection` a data-driven

- Tamaño: M
- Tipo: Técnico
- Archivos:
  - `src/components/sections/HeroSection/HeroSection.tsx`
  - `src/data/hero.data.ts`
- Acción: Reemplazar strings por datos importados.
- Criterios de aceptación:
  - Misma estructura visual.
  - Hero renderiza desde datos.
  - Animaciones siguen funcionando.

### MP-004 — Ajustar señales de confianza del hero

- Tamaño: S
- Tipo: Contenido
- Archivos:
  - `src/data/hero.data.ts`
  - opcional `src/data/trustSignals.data.ts`
- Acción: Reemplazar “Prod” y “Edu” por señales más claras.
- Ejemplo:
  - `15+ años` construyendo software.
  - `Producto / banca / operaciones` como dominios.
  - `Docencia superior` como transferencia de criterio.
- Criterios de aceptación:
  - Las señales se entienden sin explicación adicional.

## Épica 2 — Servicios y oferta profesional

### MP-005 — Rediseñar taxonomía de servicios

- Tamaño: M
- Tipo: Contenido
- Archivos:
  - `src/data/services.data.ts`
  - `src/types/service.types.ts`
- Acción: Clasificar servicios en `primary`, `secondary` y `support`.
- Propuesta:
  - Principal: Backend y arquitectura.
  - Principal: Liderazgo técnico / mentoring.
  - Principal: Formación técnica aplicada.
  - Complementario: Frontend/producto.
  - Complementario: Mobile.
  - Complementario: Automatización con IA.
- Criterios de aceptación:
  - Cada servicio tiene audiencia, problema y resultado esperado.

### MP-006 — Mejorar `Service` type

- Tamaño: S
- Tipo: Técnico
- Archivos: `src/types/service.types.ts`
- Acción: Agregar campos opcionales.
- Campos sugeridos:
  - `tier`
  - `audience`
  - `problems`
  - `outcomes`
  - `formats`
  - `proof`
- Criterios de aceptación:
  - Datos actuales siguen compilando.
  - Campos nuevos pueden renderizarse progresivamente.

### MP-007 — Actualizar contenido de `services.data.ts`

- Tamaño: M
- Tipo: Contenido
- Archivos: `src/data/services.data.ts`
- Acción: Reescribir cada servicio con enfoque en problema/resultado.
- Criterios de aceptación:
  - Backend aparece como eje dominante.
  - Frontend/mobile no desaparecen, pero quedan como capacidades complementarias.
  - IA se comunica como automatización con criterio técnico.

### MP-008 — Ajustar UI de `ServicesSection`

- Tamaño: M
- Tipo: Técnico/UI
- Archivos:
  - `src/components/sections/ServicesSection/*`
  - `src/components/components/ServicesCarousel/ServicesCarousel.tsx`
- Acción: Mostrar servicios principales con mayor peso visual.
- Criterios de aceptación:
  - Servicios principales se ven primero.
  - Servicios secundarios no compiten visualmente.
  - Responsive validado.

## Épica 3 — Casos y evidencia

### MP-009 — Crear modelo `CaseStudy`

- Tamaño: S
- Tipo: Técnico
- Archivos:
  - `src/types/caseStudy.types.ts`
  - `src/data/caseStudies.data.ts`
- Acción: Definir estructura de casos.
- Criterios de aceptación:
  - Soporta casos confidenciales.
  - Soporta stack y resultados cualitativos/cuantitativos.

### MP-010 — Crear primer set de casos

- Tamaño: L
- Tipo: Contenido
- Archivos: `src/data/caseStudies.data.ts`
- Acción: Crear 3 a 5 casos iniciales.
- Casos sugeridos:
  - Sistemas de alto movimiento / e-commerce.
  - Banca e integración.
  - Sistemas operacionales / utilities.
  - Liderazgo técnico en equipo bajo presión.
  - Formación técnica aplicada.
- Criterios de aceptación:
  - Cada caso tiene contexto, problema, aporte y resultado.
  - No expone información sensible.

### MP-011 — Crear `CaseStudyCard`

- Tamaño: M
- Tipo: Técnico/UI
- Archivos: `src/components/components/CaseStudyCard/CaseStudyCard.tsx`
- Acción: Crear card para caso.
- Criterios de aceptación:
  - Renderiza título, contexto, problema, acciones, resultados y stack.
  - Maneja casos con datos parciales.

### MP-012 — Crear `CaseStudiesSection`

- Tamaño: M
- Tipo: Técnico/UI
- Archivos: `src/components/sections/CaseStudiesSection/CaseStudiesSection.tsx`
- Acción: Renderizar casos en home.
- Criterios de aceptación:
  - Sección tiene `id="casos"`.
  - Muestra 3 casos principales.
  - Incluye CTA a contacto o trayectoria.

### MP-013 — Integrar casos en home

- Tamaño: S
- Tipo: Técnico
- Archivos: `src/app/page.tsx`
- Acción: Insertar `CaseStudiesSection` después de servicios o trust.
- Criterios de aceptación:
  - Orden narrativo mejora: promesa → oferta → evidencia.

## Épica 4 — Experiencia como CV vivo

### MP-014 — Ampliar `ExperienceItem`

- Tamaño: S
- Tipo: Técnico
- Archivos: `src/types/experience.types.ts`
- Acción: Agregar campos opcionales.
- Campos sugeridos:
  - `domain`
  - `impact`
  - `scope`
  - `stack`
  - `responsibilities`
  - `proofLevel`
  - `relatedCaseStudyIds`
- Criterios de aceptación:
  - No rompe experiencia actual.

### MP-015 — Reescribir experiencia con impacto

- Tamaño: L
- Tipo: Contenido
- Archivos: `src/data/experience.data.ts`
- Acción: Mantener narrativa actual, pero agregar resultados y scope cuando sea posible.
- Criterios de aceptación:
  - Cada experiencia indica rol real y aporte.
  - No inventa métricas.
  - Usa métricas solo cuando existan o rangos seguros.

### MP-016 — Ajustar timeline para mostrar impacto

- Tamaño: M
- Tipo: Técnico/UI
- Archivos: `src/components/sections/ExperienceSection/ExperienceTimeline.tsx`
- Acción: Renderizar impacto, dominio y stack si existen.
- Criterios de aceptación:
  - Las experiencias antiguas siguen renderizando.
  - La sección no se vuelve excesivamente larga.

### MP-017 — Crear resumen ejecutivo de CV

- Tamaño: M
- Tipo: Contenido/UI
- Archivos:
  - `src/data/profile.data.ts`
  - nueva sección opcional `ProfileSummarySection`
- Acción: Crear bloque breve de perfil profesional.
- Criterios de aceptación:
  - Reclutador entiende perfil en menos de 30 segundos.

## Épica 5 — Forma de trabajo

### MP-018 — Crear `workMethod.data.ts`

- Tamaño: S
- Tipo: Técnico/contenido
- Archivos:
  - `src/data/workMethod.data.ts`
  - `src/types/workMethod.types.ts`
- Acción: Modelar principios de trabajo.
- Criterios de aceptación:
  - Hay entre 4 y 6 principios.
  - Cada principio tiene descripción y evidencia.

### MP-019 — Crear `WorkMethodSection`

- Tamaño: M
- Tipo: Técnico/UI
- Archivos: `src/components/sections/WorkMethodSection/WorkMethodSection.tsx`
- Acción: Renderizar cómo trabajas.
- Criterios de aceptación:
  - Sección responde “cómo piensa Carlos”.
  - No repite servicios.

### MP-020 — Integrar forma de trabajo en home

- Tamaño: S
- Tipo: Técnico
- Archivos: `src/app/page.tsx`
- Acción: Insertar después de casos o trayectoria.
- Criterios de aceptación:
  - Flujo narrativo natural.

## Épica 6 — Laboratorio de producto y proyectos propios

### MP-021 — Crear modelo `LabProject`

- Tamaño: S
- Tipo: Técnico
- Archivos:
  - `src/types/project.types.ts`
  - `src/data/labProjects.data.ts`
- Acción: Modelar KeyGo, Starborne Voyager y otros prototipos.
- Criterios de aceptación:
  - Soporta estado, stack, aprendizaje, links y capturas.

### MP-022 — Migrar KeyGo desde hardcoded a data

- Tamaño: M
- Tipo: Técnico/contenido
- Archivos:
  - `src/components/sections/ProjectHighlightSection/ProjectHighlightSection.tsx`
  - `src/data/labProjects.data.ts`
- Acción: Eliminar copy hardcodeado de KeyGo.
- Criterios de aceptación:
  - KeyGo se configura desde datos.
  - Copy deja de sonar defensivo.

### MP-023 — Reposicionar KeyGo

- Tamaño: S
- Tipo: Contenido
- Archivos: `src/data/labProjects.data.ts`
- Acción: Reescribir KeyGo como laboratorio de arquitectura SaaS.
- Criterios de aceptación:
  - Comunica autenticación, multi-tenancy, producto y aprendizaje público.

### MP-024 — Incorporar videojuegos como laboratorio técnico

- Tamaño: M
- Tipo: Contenido
- Archivos:
  - `src/data/games.data.ts`
  - `src/data/labProjects.data.ts`
- Acción: Conectar Starborne Voyager y otros juegos con habilidades técnicas.
- Criterios de aceptación:
  - No parece hobby desconectado.
  - Se comunica como exploración de performance, interacción y creatividad.

## Épica 7 — Stack con criterio

### MP-025 — Ampliar `TechItem`

- Tamaño: S
- Tipo: Técnico
- Archivos: `src/types/tech.types.ts`
- Campos sugeridos:
  - `level: "core" | "strong" | "working" | "exploratory"`
  - `context`
  - `evidence`
  - `priority`
  - `yearsLabel`
- Criterios de aceptación:
  - Stack actual sigue funcionando.

### MP-026 — Reordenar `techStack.data.ts`

- Tamaño: M
- Tipo: Contenido
- Archivos: `src/data/techStack.data.ts`
- Acción: Priorizar Java, Spring Boot, REST, arquitectura, SQL/PostgreSQL/Oracle, Docker/CI/CD.
- Criterios de aceptación:
  - Stack principal se percibe claramente.
  - Herramientas de IA quedan como apoyo, no como core principal.

### MP-027 — Ajustar UI de stack

- Tamaño: M
- Tipo: Técnico/UI
- Archivos:
  - `StackShowcaseSection.tsx`
  - `StackShowcase.tsx`
  - `TechCardGrid.tsx`
- Acción: Mostrar badges de nivel/contexto.
- Criterios de aceptación:
  - No se ve como lista plana.
  - Las categorías siguen filtrando.

## Épica 8 — Alianzas y conversión

### MP-028 — Crear `collaboration.data.ts`

- Tamaño: S
- Tipo: Contenido/técnico
- Archivos:
  - `src/data/collaboration.data.ts`
  - `src/types/collaboration.types.ts`
- Acción: Definir tipos de colaboración.
- Criterios de aceptación:
  - Hay al menos 4 perfiles de colaboración.

### MP-029 — Crear `CollaborationSection`

- Tamaño: M
- Tipo: Técnico/UI
- Archivos: `src/components/sections/CollaborationSection/CollaborationSection.tsx`
- Acción: Renderizar alianzas buscadas y fit/no-fit.
- Criterios de aceptación:
  - Sección tiene CTA contextual.
  - Ayuda a filtrar conversaciones.

### MP-030 — Mejorar `contact.data.ts`

- Tamaño: M
- Tipo: Técnico/contenido
- Archivos:
  - `src/data/contact.data.ts`
  - `ContactForm.tsx`
  - `useContactForm.ts`
- Acción: Agregar topics: arquitectura, empleo, docencia, alianza, KeyGo, IA.
- Criterios de aceptación:
  - Query param `topic` preselecciona intención.
  - Mensajes del formulario ayudan a redactar mejor.

### MP-031 — Ajustar CTA final

- Tamaño: S
- Tipo: Contenido/técnico
- Archivos: `src/app/page.tsx` o data del CTA
- Acción: Reescribir CTA final con enfoque en arquitectura, equipo, formación y producto.
- Criterios de aceptación:
  - CTA no es genérico.
  - Ofrece dos rutas: contacto y LinkedIn/GitHub.

### MP-032 — Evaluar integración con agenda

- Tamaño: S
- Tipo: Producto
- Archivos: `contact.data.ts`, `CTASection`
- Acción: Definir si se incorpora Calendly, Google Calendar appointment schedule o link externo.
- Criterios de aceptación:
  - Existe decisión documentada.
  - Si se implementa, link queda en datos, no hardcodeado.

## Épica 9 — Navegación, SEO y páginas internas

### MP-033 — Actualizar `navigation.data.ts`

- Tamaño: S
- Tipo: Técnico/contenido
- Archivos: `src/data/navigation.data.ts`
- Acción: Agregar anclas nuevas: casos, método, laboratorio, alianzas.
- Criterios de aceptación:
  - Todos los links apuntan a IDs existentes.

### MP-034 — Actualizar metadata de home

- Tamaño: S
- Tipo: SEO/contenido
- Archivos:
  - `src/app/page.tsx`
  - `src/lib/metadata.ts`
- Acción: Cambiar title/description para posicionamiento nuevo.
- Criterios de aceptación:
  - Title menciona backend/arquitectura/formación.
  - Description no parece lista de tecnologías.

### MP-035 — Revisar páginas de servicios existentes

- Tamaño: L
- Tipo: Contenido/técnico
- Archivos:
  - `src/app/frontend/page.tsx`
  - `src/app/backend/page.tsx` si existe
  - `src/app/mobile/page.tsx` si existe
  - `src/app/docencia/page.tsx` si existe
  - `src/app/ai/page.tsx` si existe
- Acción: Alinear páginas internas con nueva taxonomía.
- Criterios de aceptación:
  - Backend tiene mayor profundidad.
  - Cada página tiene CTA específico.

### MP-036 — Crear página `/casos` opcional

- Tamaño: L
- Tipo: Técnico/contenido
- Archivos: `src/app/casos/page.tsx`
- Acción: Página detalle para casos si la home queda muy larga.
- Criterios de aceptación:
  - Home muestra 3 casos; página muestra todos.

## Épica 10 — Calidad final

### MP-037 — QA responsive

- Tamaño: M
- Tipo: QA
- Acción: Revisar home en mobile, tablet y desktop.
- Criterios de aceptación:
  - No hay overflow horizontal.
  - Cards no quedan demasiado largas.
  - CTA visibles en mobile.

### MP-038 — QA accesibilidad

- Tamaño: M
- Tipo: QA
- Acción: Revisar heading hierarchy, aria labels, contraste y navegación por teclado.
- Criterios de aceptación:
  - Un solo `h1` por página.
  - Links externos tienen labels claros.
  - Botones/anclas son navegables por teclado.

### MP-039 — QA SEO básico

- Tamaño: S
- Tipo: QA/SEO
- Acción: Revisar title, description, OG, sitemap si aplica.
- Criterios de aceptación:
  - Metadata alineada al posicionamiento.
  - No hay títulos duplicados críticos.

### MP-040 — QA de contenido

- Tamaño: M
- Tipo: Contenido
- Acción: Revisar que no haya claims inventados ni información confidencial.
- Criterios de aceptación:
  - Métricas reales o formuladas como cualitativas.
  - Casos anonimizados cuando corresponda.
  - Tono profesional, directo y confiable.

## Orden de implementación recomendado

1. MP-001 a MP-004: Hero y posicionamiento.
2. MP-005 a MP-008: Servicios.
3. MP-009 a MP-013: Casos.
4. MP-014 a MP-017: Experiencia CV.
5. MP-018 a MP-020: Forma de trabajo.
6. MP-021 a MP-024: Laboratorio.
7. MP-025 a MP-027: Stack.
8. MP-028 a MP-032: Alianzas y conversión.
9. MP-033 a MP-036: Navegación, SEO y páginas.
10. MP-037 a MP-040: QA final.
