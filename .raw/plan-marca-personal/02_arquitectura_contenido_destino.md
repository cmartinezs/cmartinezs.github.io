# Arquitectura de contenido destino

## 1. Home propuesta

La home debe quedar ordenada como una landing profesional, no como una vitrina horizontal de todo el perfil.

## Orden recomendado

| Orden | Sección destino | Estado respecto a la sección actual | Objetivo |
|---:|---|---|---|
| 1 | Hero estratégico | Transformar `HeroSection` | Comunicar foco, seniority y CTA principal. |
| 2 | Señales de confianza | Mantener/fortalecer `TrustSection` o parte del hero | Mostrar años, dominios, roles, docencia, productos. |
| 3 | Oferta principal | Transformar/dividir `ServicesSection` | Enfocar servicios en arquitectura backend, liderazgo técnico, formación e IA aplicada. |
| 4 | Casos / evidencia | Nueva sección | Convertir experiencia genérica en prueba concreta. |
| 5 | Trayectoria profesional | Mantener y resumir `ExperienceSection` | Mostrar recorrido con énfasis en rol, dominio e impacto. |
| 6 | Forma de trabajo | Nueva sección | Explicar tu criterio técnico y cómo colaboras. |
| 7 | Proyecto propio / laboratorio | Transformar `ProjectHighlightSection` | Reposicionar KeyGo y videojuegos como laboratorio de producto/arquitectura. |
| 8 | Stack por criterio | Transformar `StackShowcaseSection` | Mostrar tecnologías por fortaleza, contexto y evidencia, no como lista horizontal. |
| 9 | Contenido / pensamiento técnico | Transformar `ContentSection` | Mostrar artículos, publicaciones, docencia, bitácoras, aprendizaje público. |
| 10 | Alianzas y colaboración | Nueva sección o bloque antes del CTA | Declarar con quién quieres trabajar. |
| 11 | CTA final | Mantener/mejorar `CTASection` | Convertir visitas en contacto. |

## 2. Secciones que se mantienen

### `HeroSection`

Se mantiene, pero debe dejar de tener copy hardcodeado y pasar a consumir `src/data/hero.data.ts`.

Debe comunicar:

- Foco principal: backend, arquitectura, liderazgo técnico y formación.
- Propuesta de valor: construir, ordenar y transferir criterio técnico.
- CTA primario: conversar / agendar / contactar.
- CTA secundario: ver casos o trayectoria.

### `ExperienceSection`

Se mantiene, pero se transforma en “Trayectoria con criterio”.

Debe reducir narrativas largas y sumar evidencia:

- Rol.
- Contexto.
- Problema técnico dominante.
- Aporte.
- Aprendizaje/criterio.
- Evidencia posible.

### `ServicesSection`

Se mantiene, pero se divide conceptualmente.

Hoy presenta cinco líneas similares: frontend, backend, mobile, docencia, IA. Eso es correcto como catálogo, pero débil como posicionamiento.

Debe transformarse en:

1. Oferta principal.
2. Capacidades complementarias.
3. Formatos de colaboración.

### `ProjectHighlightSection`

Se mantiene, pero se transforma en una sección data-driven y con mejor narrativa.

No debe sonar como “producto no terminado”, sino como:

> Laboratorio público de arquitectura SaaS, autenticación, multi-tenancy y producto propio.

### `StackShowcaseSection`

Se mantiene, pero se transforma desde “lista de tecnologías” hacia “stack con criterio”.

Debe distinguir:

- Stack principal.
- Stack complementario.
- Herramientas de soporte.
- Tecnologías exploratorias.

### `CTASection`

Se mantiene, pero debe ser más específico.

CTA actual genérico:

> ¿Tienes una idea, sistema o equipo que necesita apoyo técnico?

CTA destino:

> ¿Necesitas ordenar una arquitectura backend, fortalecer un equipo técnico o convertir una idea en producto mantenible?

## 3. Secciones nuevas

### Casos / Evidencia

Sección crítica para funcionar como CV.

Estructura sugerida:

```txt
Caso destacado
- Contexto
- Problema
- Decisión técnica
- Aporte personal
- Resultado / aprendizaje
- Stack
```

Importante: si no se pueden publicar métricas o nombres, usar rangos o descriptores seguros.

Ejemplos:

- Plataforma de alto movimiento en retail/e-commerce.
- Integración bancaria/microservicios.
- Sistemas operacionales para utilities.
- Formación técnica aplicada en educación superior.
- Producto propio KeyGo.

### Forma de trabajo

Debe explicar cómo piensas y colaboras.

Bloques recomendados:

1. Entender dominio antes de diseñar.
2. Definir límites y contratos.
3. Construir incrementalmente.
4. Cuidar calidad y mantenibilidad.
5. Documentar lo suficiente para transferir criterio.
6. Formar al equipo mientras se entrega.

### Alianzas y colaboración

Debe declarar explícitamente qué buscas.

Ejemplos:

- Equipos que necesitan arquitectura backend.
- Startups que requieren autenticación, APIs o integración.
- Instituciones que buscan formación técnica aplicada.
- Profesionales que quieren co-crear productos digitales.
- Empresas que necesitan mentoring técnico para equipos junior/semi-senior.

### Para quién soy / para quién no soy

Opcional, pero muy potente para posicionamiento.

Ejemplo:

```txt
Soy buen fit si necesitas criterio técnico, diseño backend, formación o acompañamiento.
No soy buen fit si buscas solo código rápido sin análisis, sin pruebas y sin visión de mantenimiento.
```

## 4. Arquitectura narrativa destino

La home debe pasar de:

> Perfil amplio + servicios + experiencia.

A:

> Promesa clara + evidencia + forma de trabajo + colaboración.

## 5. Navegación propuesta

### Actual esperable

- Inicio
- Servicios
- Experiencia
- KeyGo
- Contacto

### Destino recomendado

- Inicio
- Servicios
- Casos
- Trayectoria
- Laboratorio
- Docencia
- Contacto

Notas:

- “Laboratorio” puede agrupar KeyGo + videojuegos + exploraciones con IA.
- “Casos” debe tener más peso que “Stack”.
- “Stack” puede quedar como sección dentro de Inicio o página secundaria.
