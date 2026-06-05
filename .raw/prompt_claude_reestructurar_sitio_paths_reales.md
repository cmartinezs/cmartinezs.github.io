# Prompt para Claude Code — Reestructurar sitio por paths reales y landings temáticas

Actúa como **frontend senior**, **UX architect** y **arquitecto de información** especializado en sitios personales, landing pages técnicas, React/Next.js y navegación web.

Necesito reestructurar mi sitio personal para que el menú `Secciones` no represente solo una agrupación visual o lógica, sino una **arquitectura real de paths/rutas**.

## Idea central

El menú `Secciones` debe transformarse en el mapa real del sitio.

Cada grupo del menú debe corresponder a un **path real**.
Cada path debe ser una **landing temática independiente**.
Cada landing temática debe tener su propio **menú sticky local** con las anclas internas de esa temática.
El logo principal de cada menú sticky local debe volver siempre al path principal `/`.

No quiero una sola landing gigante con todas las anclas de corrido.
No quiero solo ajustar anchors existentes.
No quiero que todo siga viviendo dentro de una única página principal.
No quiero que el menú sea solo una organización visual.

Quiero convertir el sitio en una estructura multipágina o multipath, donde cada path es una landing de su temática.

---

## Contexto del sitio

El sitio es la página profesional de **Carlos Martínez Sánchez**.

Objetivo del sitio:

- Marca personal.
- CV profesional.
- Canal para consultoría técnica.
- Canal para mentoring.
- Canal para docencia.
- Canal para proyectos backend.
- Canal para alianzas estratégicas.

Posicionamiento principal:

- Backend senior.
- Arquitectura de software.
- Formación técnica, docencia y mentoring.
- Desarrollo de herramientas con y para IA aplicada.
- Experiencia real en banca, e-commerce, utilities y plataformas SaaS.

---

## Estado actual del menú

El navbar principal contiene algo parecido a:

- Inicio
- Perfil
- Servicios
- Casos
- Método
- Stack
- Alianzas
- Contacto
- Secciones

El dropdown `Secciones` está agrupado así:

```txt
PRINCIPAL
- Inicio
- Perfil
- Servicios
- Método

ESPECIALIDADES
- Backend core
- Arquitectura
- Mentoría
- Docencia

CAPACIDADES COMPLEMENTARIAS
- Frontend
- Mobile
- Herramientas con IA

TRAYECTORIA
- Experiencia
- Stack
- Certificaciones

PROYECTOS
- Casos
- KeyGo
- Videojuegos

RECURSOS Y CONTACTO
- Alianzas
- Recursos
- Contacto
```

Este menú visual está bien. El problema es que la estructura real del sitio no refleja este diseño.

---

# Cambio de enfoque obligatorio

La estructura correcta NO es:

```txt
/landing-unica
  #inicio
  #perfil
  #servicios
  #backend
  #arquitectura
  #mentoria
  #docencia
  #frontend
  #mobile
  #herramientas-ia
  #experiencia
  #stack
  #certificaciones
  #casos
  #keygo
  #videojuegos
  #alianzas
  #recursos
  #contacto
```

Eso es exactamente lo que quiero evitar.

La estructura correcta debe ser por **paths reales**, así:

```txt
/                         Landing principal
/especialidades           Landing temática de especialidades
/capacidades              Landing temática de capacidades complementarias
/trayectoria              Landing temática de trayectoria
/proyectos                Landing temática de proyectos
/recursos-contacto        Landing temática de recursos, alianzas y contacto
```

Cada path tiene sus propias anclas internas.

---

# Arquitectura final obligatoria por paths reales

## Path 1 — Landing principal

Ruta real:

```txt
/
```

Nombre del grupo en el menú:

```txt
Principal
```

Rol de esta landing:

La landing principal debe presentar la propuesta general, construir confianza inicial y derivar hacia las landings temáticas.

Debe responder a:

> “Quién soy, qué hago y hacia dónde puede navegar el usuario según su interés.”

Anclas internas de este path:

```txt
/#inicio
/#perfil
/#servicios
/#metodo
```

Estructura esperada:

```tsx
<PrincipalLanding>
  <InicioSection id="inicio" />
  <PerfilSection id="perfil" />
  <ServiciosOverviewSection id="servicios" />
  <MetodoOverviewSection id="metodo" />
</PrincipalLanding>
```

Notas:

- `#inicio` es el hero principal.
- `#perfil` construye confianza.
- `#servicios` debe ser un resumen de cómo ayudo, no necesariamente el detalle completo.
- `#metodo` debe explicar de forma resumida cómo trabajo.
- Desde esta landing se debe poder navegar hacia los paths temáticos.
- Esta landing NO debe contener todos los detalles de Backend, Arquitectura, Frontend, Mobile, KeyGo, etc.
- Puede tener cards o CTAs que lleven a `/especialidades`, `/capacidades`, `/trayectoria`, `/proyectos` y `/recursos-contacto`.

Menú sticky local de este path:

```txt
[Logo Carlos Martínez → /]
Inicio → /#inicio
Perfil → /#perfil
Servicios → /#servicios
Método → /#metodo
Secciones → dropdown global
```

---

## Path 2 — Landing de Especialidades

Ruta real:

```txt
/especialidades
```

Nombre del grupo en el menú:

```txt
Especialidades
```

Rol de esta landing:

Debe profundizar en mis servicios y áreas principales de posicionamiento.

Debe responder a:

> “En qué soy fuerte profesionalmente y cómo puedo ayudar desde mi especialidad técnica.”

Anclas internas de este path:

```txt
/especialidades#backend
/especialidades#arquitectura
/especialidades#mentoria
/especialidades#docencia
```

Estructura esperada:

```tsx
<EspecialidadesLanding>
  <EspecialidadesHero />
  <BackendSection id="backend" />
  <ArquitecturaSection id="arquitectura" />
  <MentoriaSection id="mentoria" />
  <DocenciaSection id="docencia" />
</EspecialidadesLanding>
```

Contenido esperado:

### Backend

Anchor:

```txt
/especialidades#backend
```

Debe presentarse como foco principal.

Intención:

- Desarrollo backend mantenible.
- APIs.
- Integraciones.
- Java / Spring Boot si corresponde.
- Sistemas que evolucionan sin acumular deuda técnica innecesaria.
- Experiencia en contextos reales.

### Arquitectura

Anchor:

```txt
/especialidades#arquitectura
```

Intención:

- Diseño técnico.
- Decisiones de arquitectura.
- Evolución de sistemas.
- Criterio técnico.
- Mantenibilidad.
- Diseño con visión de producto y operación.

### Mentoría

Anchor:

```txt
/especialidades#mentoria
```

Intención:

- Acompañamiento técnico.
- Desarrollo de criterio en equipos.
- Revisión de soluciones.
- Guía para perfiles junior, mid y senior.
- Transferencia de conocimiento aplicada.

### Docencia

Anchor:

```txt
/especialidades#docencia
```

Intención:

- Formación técnica.
- Enseñanza aplicada.
- Traducción de conocimiento complejo.
- Experiencia docente.
- Diseño de contenidos, evaluaciones y acompañamiento formativo.

Menú sticky local de este path:

```txt
[Logo Carlos Martínez → /]
Backend → /especialidades#backend
Arquitectura → /especialidades#arquitectura
Mentoría → /especialidades#mentoria
Docencia → /especialidades#docencia
```

Regla importante:

Backend, Arquitectura, Mentoría y Docencia no deben quedar como anchors dentro de `/`.
Deben vivir en `/especialidades`.

---

## Path 3 — Landing de Capacidades complementarias

Ruta real:

```txt
/capacidades
```

Nombre del grupo en el menú:

```txt
Capacidades complementarias
```

Rol de esta landing:

Debe mostrar amplitud técnica sin diluir el foco principal en Backend y Arquitectura.

Debe responder a:

> “Qué capacidades adicionales puedo aportar alrededor de mi foco principal.”

Anclas internas de este path:

```txt
/capacidades#frontend
/capacidades#mobile
/capacidades#herramientas-ia
```

Estructura esperada:

```tsx
<CapacidadesLanding>
  <CapacidadesHero />
  <FrontendSection id="frontend" />
  <MobileSection id="mobile" />
  <HerramientasIASection id="herramientas-ia" />
</CapacidadesLanding>
```

Contenido esperado:

### Frontend

Anchor:

```txt
/capacidades#frontend
```

Rol:

- Capacidad complementaria.
- Experiencia suficiente para integrar o comprender frontend.
- No debe posicionarme como frontend principal.
- Debe reforzar que puedo conversar mejor con equipos fullstack o frontend.

### Mobile

Anchor:

```txt
/capacidades#mobile
```

Rol:

- Capacidad complementaria.
- Experiencia con aplicaciones móviles o híbridas si corresponde.
- No debe competir con backend.
- Debe mostrar capacidad de integración entre backend, APIs y clientes móviles.

### Herramientas con IA

Anchor:

```txt
/capacidades#herramientas-ia
```

Rol:

- Capacidad moderna aplicada.
- Desarrollo de herramientas con y para IA.
- IA aplicada a productividad.
- Automatización.
- Apoyo docente.
- Generación y análisis de información.
- Mejora de procesos técnicos.
- Integración práctica de IA en flujos reales.

Importante:

No usar `AI` como label principal.
Usar preferentemente:

```txt
Herramientas con IA
```

o:

```txt
IA aplicada
```

No quiero parecer “AI engineer” como posicionamiento central.
La IA debe aparecer como capacidad aplicada y complementaria.

Menú sticky local de este path:

```txt
[Logo Carlos Martínez → /]
Frontend → /capacidades#frontend
Mobile → /capacidades#mobile
Herramientas con IA → /capacidades#herramientas-ia
```

---

## Path 4 — Landing de Trayectoria

Ruta real:

```txt
/trayectoria
```

Nombre del grupo en el menú:

```txt
Trayectoria
```

Rol de esta landing:

Debe validar experiencia, stack técnico, formación continua y credibilidad profesional.

Debe responder a:

> “Qué experiencia tengo, con qué tecnologías trabajo y qué respaldo profesional puedo mostrar.”

Anclas internas de este path:

```txt
/trayectoria#experiencia
/trayectoria#stack
/trayectoria#certificaciones
```

Estructura esperada:

```tsx
<TrayectoriaLanding>
  <TrayectoriaHero />
  <ExperienciaSection id="experiencia" />
  <StackSection id="stack" />
  <CertificacionesSection id="certificaciones" />
</TrayectoriaLanding>
```

Contenido esperado:

### Experiencia

Anchor:

```txt
/trayectoria#experiencia
```

Rol:

- Experiencia laboral.
- Industrias.
- Tipos de proyectos.
- Seniority.
- Contextos reales.
- Banca, e-commerce, utilities, SaaS si corresponde.

### Stack

Anchor:

```txt
/trayectoria#stack
```

Rol:

- Tecnologías.
- Herramientas.
- Ecosistema técnico.
- Backend, bases de datos, cloud/devops, frontend/mobile/IA como capacidades técnicas.

Cuidado:

No duplicar exactamente lo mismo que la landing de Especialidades.
Especialidades explica cómo ayudo.
Stack valida con qué herramientas trabajo.

### Certificaciones

Anchor:

```txt
/trayectoria#certificaciones
```

Rol:

- Credibilidad complementaria.
- Formación.
- Certificaciones si existen.
- Cursos, aprendizajes o formación continua si aplica.

No inventar certificaciones falsas.
Si no hay suficiente contenido real, crear una sección sobria tipo:

```txt
Certificaciones y formación continua
```

preparada para completar.

Menú sticky local de este path:

```txt
[Logo Carlos Martínez → /]
Experiencia → /trayectoria#experiencia
Stack → /trayectoria#stack
Certificaciones → /trayectoria#certificaciones
```

---

## Path 5 — Landing de Proyectos

Ruta real:

```txt
/proyectos
```

Nombre del grupo en el menú:

```txt
Proyectos
```

Rol de esta landing:

Debe mostrar evidencia, casos, proyectos personales, exploraciones y trabajo aplicado.

Debe responder a:

> “Qué he construido o qué iniciativas demuestran mi forma de trabajar.”

Anclas internas de este path:

```txt
/proyectos#casos
/proyectos#keygo
/proyectos#videojuegos
```

Estructura esperada:

```tsx
<ProyectosLanding>
  <ProyectosHero />
  <CasosSection id="casos" />
  <KeyGoSection id="keygo" />
  <VideojuegosSection id="videojuegos" />
</ProyectosLanding>
```

Contenido esperado:

### Casos

Anchor:

```txt
/proyectos#casos
```

Rol:

- Casos de trabajo.
- Proyectos destacados.
- Aplicaciones reales.
- Evidencia de experiencia.
- Problema, solución, rol y resultado cuando haya información suficiente.

### KeyGo

Anchor:

```txt
/proyectos#keygo
```

Rol:

- Proyecto destacado.
- Caso/proyecto/laboratorio.
- No debe presentarse como servicio principal.

### Videojuegos

Anchor:

```txt
/proyectos#videojuegos
```

Rol:

- Exploración creativa y técnica.
- Desarrollo de videojuegos.
- Proyecto personal o laboratorio.
- Debe sumar personalidad y amplitud técnica sin diluir el foco backend.

Menú sticky local de este path:

```txt
[Logo Carlos Martínez → /]
Casos → /proyectos#casos
KeyGo → /proyectos#keygo
Videojuegos → /proyectos#videojuegos
```

---

## Path 6 — Landing de Recursos, alianzas y contacto

Ruta real recomendada:

```txt
/recursos-contacto
```

Nombre del grupo en el menú:

```txt
Recursos y contacto
```

Rol de esta landing:

Debe reunir colaboración, materiales de valor y cierre comercial.

Debe responder a:

> “Cómo colaborar conmigo, qué recursos puedo compartir y cómo contactarme.”

Anclas internas de este path:

```txt
/recursos-contacto#alianzas
/recursos-contacto#recursos
/recursos-contacto#contacto
```

Estructura esperada:

```tsx
<RecursosContactoLanding>
  <RecursosContactoHero />
  <AlianzasSection id="alianzas" />
  <RecursosSection id="recursos" />
  <ContactoSection id="contacto" />
</RecursosContactoLanding>
```

Contenido esperado:

### Alianzas

Anchor:

```txt
/recursos-contacto#alianzas
```

Rol:

- Colaboraciones.
- Empresas.
- Startups.
- Instituciones.
- Socios.
- Proyectos conjuntos.
- Consultoría o trabajo estratégico.

### Recursos

Anchor:

```txt
/recursos-contacto#recursos
```

Rol:

- Materiales.
- Publicaciones.
- Artículos.
- Guías.
- Repositorios.
- Contenido docente o técnico.

Si todavía hay poco contenido, dejar una estructura mínima, sobria y preparada para crecer.

### Contacto

Anchor:

```txt
/recursos-contacto#contacto
```

Rol:

- Cierre.
- CTA.
- Formas de contacto.
- Invitación a conversación.

Menú sticky local de este path:

```txt
[Logo Carlos Martínez → /]
Alianzas → /recursos-contacto#alianzas
Recursos → /recursos-contacto#recursos
Contacto → /recursos-contacto#contacto
```

---

# Mapa final del menú `Secciones`

El dropdown `Secciones` debe navegar a paths reales con anchors internos, así:

```txt
PRINCIPAL
- Inicio     → /#inicio
- Perfil     → /#perfil
- Servicios  → /#servicios
- Método     → /#metodo

ESPECIALIDADES
- Backend core → /especialidades#backend
- Arquitectura → /especialidades#arquitectura
- Mentoría     → /especialidades#mentoria
- Docencia     → /especialidades#docencia

CAPACIDADES COMPLEMENTARIAS
- Frontend             → /capacidades#frontend
- Mobile               → /capacidades#mobile
- Herramientas con IA  → /capacidades#herramientas-ia

TRAYECTORIA
- Experiencia      → /trayectoria#experiencia
- Stack            → /trayectoria#stack
- Certificaciones  → /trayectoria#certificaciones

PROYECTOS
- Casos       → /proyectos#casos
- KeyGo       → /proyectos#keygo
- Videojuegos → /proyectos#videojuegos

RECURSOS Y CONTACTO
- Alianzas → /recursos-contacto#alianzas
- Recursos → /recursos-contacto#recursos
- Contacto → /recursos-contacto#contacto
```

---

# Navbar principal

El navbar superior debe seguir siendo breve, pero ahora debe enlazar a paths reales.

Propuesta recomendada:

```txt
Inicio      → /
Perfil      → /#perfil
Servicios   → /#servicios o /especialidades
Casos       → /proyectos#casos
Método      → /#metodo
Stack       → /trayectoria#stack
Alianzas    → /recursos-contacto#alianzas
Contacto    → /recursos-contacto#contacto
Secciones   → dropdown agrupado
```

Criterio:

- El navbar principal debe ser una navegación rápida.
- El dropdown `Secciones` debe ser el índice extendido del sitio completo.
- No debe haber contradicción entre ambos.
- Si decides que `Servicios` del navbar debe ir a `/especialidades`, asegúrate de que el texto y la navegación sean coherentes.

---

# Menú sticky local por path

Cada path temático debe tener su propio menú sticky local.

Este menú debe:

1. Estar dentro de la landing temática correspondiente.
2. Mostrar solo las anclas internas de esa landing.
3. Tener un logo o marca principal que vuelva a `/`.
4. Mantener coherencia visual con el sitio.
5. Ser sticky o persistente de forma cómoda.
6. No competir visualmente con el navbar global si ambos existen.
7. Funcionar bien en desktop y mobile.

Ejemplo de componente conceptual:

```tsx
<LocalStickyNav
  logoHref="/"
  logoLabel="Carlos Martínez"
  items={[
    { label: 'Backend', href: '/especialidades#backend' },
    { label: 'Arquitectura', href: '/especialidades#arquitectura' },
    { label: 'Mentoría', href: '/especialidades#mentoria' },
    { label: 'Docencia', href: '/especialidades#docencia' },
  ]}
/>
```

Si ya existe un header global sticky, evaluar:

- si el menú local vive debajo del header global;
- si reemplaza parcialmente el menú global en paths internos;
- si se integra como segunda fila sticky;
- o si se muestra como navegación interna compacta.

No debe tapar contenido ni generar saltos incómodos.

---

# Fuente única de verdad de navegación

Si actualmente la navegación está hardcodeada o duplicada, crear o consolidar una fuente única de verdad.

Estructura sugerida:

```ts
export type SiteAnchor = {
  label: string;
  href: string;
  id: string;
  badge?: string;
  description?: string;
};

export type SitePath = {
  label: string;
  path: string;
  groupTitle: string;
  description: string;
  anchors: SiteAnchor[];
};

export const sitePaths: SitePath[] = [
  {
    label: 'Principal',
    path: '/',
    groupTitle: 'Principal',
    description: 'Landing principal de marca personal y propuesta de valor.',
    anchors: [
      { label: 'Inicio', href: '/#inicio', id: 'inicio' },
      { label: 'Perfil', href: '/#perfil', id: 'perfil' },
      { label: 'Servicios', href: '/#servicios', id: 'servicios' },
      { label: 'Método', href: '/#metodo', id: 'metodo' },
    ],
  },
  {
    label: 'Especialidades',
    path: '/especialidades',
    groupTitle: 'Especialidades',
    description: 'Servicios principales: backend, arquitectura, mentoría y docencia.',
    anchors: [
      { label: 'Backend', href: '/especialidades#backend', id: 'backend', badge: 'core' },
      { label: 'Arquitectura', href: '/especialidades#arquitectura', id: 'arquitectura' },
      { label: 'Mentoría', href: '/especialidades#mentoria', id: 'mentoria' },
      { label: 'Docencia', href: '/especialidades#docencia', id: 'docencia' },
    ],
  },
  {
    label: 'Capacidades complementarias',
    path: '/capacidades',
    groupTitle: 'Capacidades complementarias',
    description: 'Capacidades de soporte: frontend, mobile e IA aplicada.',
    anchors: [
      { label: 'Frontend', href: '/capacidades#frontend', id: 'frontend' },
      { label: 'Mobile', href: '/capacidades#mobile', id: 'mobile' },
      { label: 'Herramientas con IA', href: '/capacidades#herramientas-ia', id: 'herramientas-ia' },
    ],
  },
  {
    label: 'Trayectoria',
    path: '/trayectoria',
    groupTitle: 'Trayectoria',
    description: 'Experiencia, stack técnico y formación continua.',
    anchors: [
      { label: 'Experiencia', href: '/trayectoria#experiencia', id: 'experiencia' },
      { label: 'Stack', href: '/trayectoria#stack', id: 'stack' },
      { label: 'Certificaciones', href: '/trayectoria#certificaciones', id: 'certificaciones' },
    ],
  },
  {
    label: 'Proyectos',
    path: '/proyectos',
    groupTitle: 'Proyectos',
    description: 'Casos, proyectos destacados y exploraciones técnicas.',
    anchors: [
      { label: 'Casos', href: '/proyectos#casos', id: 'casos' },
      { label: 'KeyGo', href: '/proyectos#keygo', id: 'keygo' },
      { label: 'Videojuegos', href: '/proyectos#videojuegos', id: 'videojuegos' },
    ],
  },
  {
    label: 'Recursos y contacto',
    path: '/recursos-contacto',
    groupTitle: 'Recursos y contacto',
    description: 'Alianzas, recursos y vías de contacto.',
    anchors: [
      { label: 'Alianzas', href: '/recursos-contacto#alianzas', id: 'alianzas' },
      { label: 'Recursos', href: '/recursos-contacto#recursos', id: 'recursos' },
      { label: 'Contacto', href: '/recursos-contacto#contacto', id: 'contacto' },
    ],
  },
];
```

Puedes adaptar nombres, tipos o estructura según el proyecto, pero la navegación debe quedar centralizada y consistente.

---

# Requerimientos técnicos

Debes revisar y modificar lo necesario en:

- Sistema de rutas.
- `page.tsx` o equivalente.
- Componentes de landing.
- Componentes de secciones.
- Navbar/Header global.
- Dropdown `Secciones`.
- Nuevo menú sticky local por path.
- Configuración de navegación.
- Archivos de datos.
- Estilos globales o CSS Modules.
- Lógica de scroll spy si existe.
- Tipos TypeScript relacionados con navegación.

Si el proyecto usa Next.js App Router, crear rutas equivalentes:

```txt
app/page.tsx
app/especialidades/page.tsx
app/capacidades/page.tsx
app/trayectoria/page.tsx
app/proyectos/page.tsx
app/recursos-contacto/page.tsx
```

Si el proyecto usa Pages Router, usar estructura equivalente en `pages/`.

Si el proyecto no usa Next.js, adaptar a React Router o al sistema de rutas existente.

No fuerces una arquitectura incompatible con el proyecto. Primero inspecciona cómo está construido.

---

# Reglas de diseño

Mantener la estética actual:

- Fondo oscuro.
- Estética técnica.
- Diseño sobrio.
- Verde/celeste como acentos.
- Jerarquía visual clara.
- Cards y bloques modernos.
- Buen espaciado.
- Responsive correcto.

Cada landing temática debe tener:

1. Hero o encabezado temático.
2. Bajada clara.
3. Menú sticky local.
4. Secciones internas según su path.
5. CTAs o enlaces cruzados hacia otras landings cuando corresponda.
6. Cierre o navegación al siguiente path recomendado.

No quiero páginas internas vacías o débiles.
Cada path debe sentirse como una landing real.

---

# Reglas de scroll y anchors

Cada sección interna debe tener id real.

Ejemplo:

```tsx
<section id="backend">
  ...
</section>
```

Usar `scroll-margin-top` o solución equivalente para que el header sticky y el menú local no tapen el contenido.

Ejemplo:

```css
[id] {
  scroll-margin-top: calc(var(--header-height) + var(--local-nav-height) + 24px);
}
```

Ajustar según el diseño real.

No usar `100vh` rígido si puede causar problemas en mobile.
Preferir `100svh`, `min-height`, `clamp()` y layouts fluidos.

---

# Reglas de contenido

No inventar datos profesionales falsos.

Si falta contenido real para una sección, crear una estructura sobria y honesta, por ejemplo:

```txt
Contenido en preparación
```

o un bloque tipo:

```txt
Esta sección reunirá recursos, certificaciones o casos a medida que sean publicados.
```

Pero evita afirmaciones inventadas.

---

# Qué NO debes hacer

No hagas esto:

- No dejar todo en una sola página.
- No convertir los paths en agrupaciones lógicas sin rutas reales.
- No limitarte a cambiar `href`.
- No hacer que todos los ítems apunten a `/`.
- No hacer que Backend, Arquitectura, Mentoría y Docencia apunten todos a `/especialidades` sin anchors diferenciadas.
- No dejar Frontend, Mobile o Herramientas con IA como anchors inexistentes.
- No dejar KeyGo y Videojuegos sin sección real.
- No dejar Recursos y Contacto dentro del home si el path definido es `/recursos-contacto`.
- No eliminar el dropdown agrupado.
- No cambiar todo el diseño visual sin necesidad.
- No agregar dependencias innecesarias.
- No romper responsive.
- No dejar ids duplicados.
- No dejar enlaces muertos.
- No sobreingenierizar.

---

# Criterios de aceptación

El trabajo está terminado solo si se cumple todo esto:

1. Existen paths reales para:
   - `/`
   - `/especialidades`
   - `/capacidades`
   - `/trayectoria`
   - `/proyectos`
   - `/recursos-contacto`
2. Cada path es una landing temática real.
3. Cada landing temática tiene su propio menú sticky local.
4. El logo/marca del menú sticky local vuelve a `/`.
5. El dropdown `Secciones` apunta a paths reales con anchors internos.
6. Cada ítem del dropdown tiene destino real y diferenciado.
7. Existen anchors reales para:
   - `/#inicio`
   - `/#perfil`
   - `/#servicios`
   - `/#metodo`
   - `/especialidades#backend`
   - `/especialidades#arquitectura`
   - `/especialidades#mentoria`
   - `/especialidades#docencia`
   - `/capacidades#frontend`
   - `/capacidades#mobile`
   - `/capacidades#herramientas-ia`
   - `/trayectoria#experiencia`
   - `/trayectoria#stack`
   - `/trayectoria#certificaciones`
   - `/proyectos#casos`
   - `/proyectos#keygo`
   - `/proyectos#videojuegos`
   - `/recursos-contacto#alianzas`
   - `/recursos-contacto#recursos`
   - `/recursos-contacto#contacto`
8. Backend sigue siendo el foco principal.
9. Frontend, Mobile e IA quedan como capacidades complementarias.
10. Herramientas con IA se comunica como IA aplicada, no como cambio total de posicionamiento.
11. KeyGo y Videojuegos quedan como proyectos/casos/laboratorio.
12. El navbar principal sigue funcionando.
13. El dropdown sigue viéndose bien.
14. No hay anchors muertos.
15. No hay ids duplicados dentro de cada path.
16. El scroll por anchors funciona bien con header y menú local sticky.
17. No hay overflow horizontal.
18. El sitio se ve bien en desktop, tablet y mobile.
19. El build pasa.
20. El lint pasa.
21. El código queda mantenible.

---

# Proceso obligatorio

Antes de modificar código, entrega un diagnóstico breve con:

1. Framework y estructura de rutas detectada.
2. Archivos de navegación encontrados.
3. Archivos de secciones encontrados.
4. Anchors actuales encontrados.
5. Secciones que hoy viven en `/` y deberían migrar a paths temáticos.
6. Paths nuevos a crear.
7. Componentes reutilizables que conviene crear.
8. Propuesta final de estructura de carpetas/rutas.

Luego implementa.

Al terminar, entrega:

1. Archivos modificados.
2. Paths reales creados.
3. Estructura final del sitio.
4. Mapa final de navegación.
5. Mapa final de anchors por path.
6. Componentes nuevos creados.
7. Cambios visuales realizados.
8. Decisiones de arquitectura de información.
9. Confirmación de build/lint.
