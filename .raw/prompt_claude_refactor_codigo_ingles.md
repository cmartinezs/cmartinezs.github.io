# Prompt para Claude Code: refactor de código fuente a inglés

Actúa como frontend senior especializado en React/Next.js, TypeScript, arquitectura de código y refactorización segura.

## Objetivo

Refactorizar el proyecto para que **todo el código fuente esté 100% en inglés**, manteniendo **todo el contenido visible en español**.

## Regla principal

- Código fuente: inglés.
- Contenido visible para el usuario: español.

No traduzcas la web al inglés. Traduce la arquitectura técnica del código al inglés.

---

## Debe quedar en inglés

Refactoriza a inglés todos los elementos técnicos del proyecto:

- variables
- funciones
- componentes
- props
- tipos e interfaces
- constantes
- hooks
- helpers
- parámetros
- archivos
- carpetas
- rutas/paths
- anchors/ids técnicos
- clases CSS propias si representan conceptos del dominio
- nombres de configuración/datos
- comentarios técnicos

---

## Debe seguir en español

Mantén en español todo texto visible:

- labels del menú
- títulos
- bajadas
- párrafos
- CTAs
- badges visibles
- textos comerciales
- contenido profesional
- contenido de marca personal

Ejemplo correcto:

```tsx
<section id="work-method">
  <h2>Método</h2>
  <p>Explico cómo trabajo desde el diagnóstico hasta la implementación.</p>
</section>
```

Ejemplo incorrecto:

```tsx
<section id="metodo">
  <h2>Work Method</h2>
</section>
```

---

## Paths reales en inglés

Los paths canónicos deben estar en inglés.

| Concepto visible | Path técnico |
|---|---|
| Inicio | `/` |
| Profesional | `/professional` |
| Servicios | `/services` |
| Método | `/work-method` |
| Casos | `/cases` |
| Stack | `/stack` |
| Alianzas | `/partnerships` |
| Contacto | `/contact` |
| Recursos | `/resources` |
| Proyectos | `/projects` |
| KeyGo | `/keygo` |
| Videojuegos | `/video-games` |

Evitar paths como `/servicios`, `/metodo`, `/alianzas`, `/contacto`, `/recursos`, `/videojuegos`.

---

## Anchors en inglés

Los anchors canónicos deben estar en inglés.

| Concepto visible | Anchor técnico |
|---|---|
| Inicio | `#home` |
| Perfil | `#profile` |
| Servicios | `#services` |
| Backend | `#backend` |
| Arquitectura | `#architecture` |
| Mentoría | `#mentoring` |
| Docencia | `#teaching` |
| Método | `#work-method` |
| Capacidades | `#capabilities` |
| Frontend | `#frontend` |
| Mobile | `#mobile` |
| Herramientas con IA | `#ai-tools` |
| Trayectoria | `#career` |
| Experiencia | `#experience` |
| Stack | `#tech-stack` |
| Certificaciones | `#certifications` |
| Proyectos | `#projects` |
| Casos | `#cases` |
| KeyGo | `#keygo` |
| Videojuegos | `#video-games` |
| Alianzas | `#partnerships` |
| Recursos | `#resources` |
| Contacto | `#contact` |

---

## Componentes en inglés

Usa nombres como:

```txt
HomeSection
ProfileSection
ServicesSection
BackendServiceBlock
ArchitectureServiceBlock
MentoringServiceBlock
TeachingServiceBlock
WorkMethodSection
CapabilitiesSection
AiToolsBlock
CareerSection
ExperienceSection
TechStackSection
CertificationsSection
ProjectsSection
CasesSection
VideoGamesSection
PartnershipsSection
ResourcesSection
ContactSection
MainNavigation
SectionNavigation
StickyPathMenu
```

Evita nombres como:

```txt
InicioSection
PerfilSection
ServiciosSection
ArquitecturaBlock
MentoriaBlock
DocenciaBlock
MetodoSection
HerramientasIaBlock
ExperienciaSection
AlianzasSection
RecursosSection
ContactoSection
```

---

## Datos de navegación

La estructura técnica debe estar en inglés; los textos visibles pueden seguir en español.

Ejemplo esperado:

```ts
export const mainNavigationItems: NavigationItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Profesional', href: '/professional' },
  { label: 'Servicios', href: '/services' },
  { label: 'Casos', href: '/cases' },
  { label: 'Stack', href: '/stack' },
  { label: 'Alianzas', href: '/partnerships' },
  { label: 'Contacto', href: '/contact' },
];

export const sectionNavigationGroups: NavigationGroup[] = [
  {
    title: 'Principal',
    items: [
      { label: 'Perfil', href: '/professional#profile' },
      { label: 'Servicios', href: '/professional#services' },
      { label: 'Método', href: '/professional#work-method' },
    ],
  },
  {
    title: 'Especialidades',
    items: [
      { label: 'Backend', href: '/professional#backend', badge: 'core' },
      { label: 'Arquitectura', href: '/professional#architecture' },
      { label: 'Mentoría', href: '/professional#mentoring' },
      { label: 'Docencia', href: '/professional#teaching' },
    ],
  },
  {
    title: 'Capacidades complementarias',
    items: [
      { label: 'Frontend', href: '/professional#frontend' },
      { label: 'Mobile', href: '/professional#mobile' },
      { label: 'Herramientas con IA', href: '/professional#ai-tools' },
    ],
  },
  {
    title: 'Trayectoria',
    items: [
      { label: 'Experiencia', href: '/professional#experience' },
      { label: 'Stack', href: '/professional#tech-stack' },
      { label: 'Certificaciones', href: '/professional#certifications' },
    ],
  },
  {
    title: 'Proyectos',
    items: [
      { label: 'Casos', href: '/professional#cases' },
      { label: 'KeyGo', href: '/professional#keygo' },
      { label: 'Videojuegos', href: '/professional#video-games' },
    ],
  },
  {
    title: 'Recursos y contacto',
    items: [
      { label: 'Alianzas', href: '/professional#partnerships' },
      { label: 'Recursos', href: '/professional#resources' },
      { label: 'Contacto', href: '/professional#contact' },
    ],
  },
];
```

---

## Tipos esperados

Usa tipos en inglés:

```ts
export type NavigationItem = {
  label: string;
  href: string;
  anchor?: string;
  description?: string;
  badge?: string;
  isCore?: boolean;
};

export type NavigationGroup = {
  title: string;
  items: NavigationItem[];
};

export type LandingSection = {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
};
```

Evita tipos como `ElementoNavegacion`, `GrupoNavegacion`, `SeccionLanding`.

---

## Mapa de migración sugerido

| Español técnico | Inglés técnico |
|---|---|
| inicio | home |
| perfil | profile |
| profesional | professional |
| servicios | services |
| metodo | workMethod / work-method |
| explorar / secciones | sections |
| arquitectura | architecture |
| mentoria | mentoring |
| docencia | teaching |
| capacidades | capabilities |
| herramientasIa / herramientas-ia | aiTools / ai-tools |
| trayectoria | career |
| experiencia | experience |
| stack | techStack / tech-stack |
| certificaciones | certifications |
| proyectos | projects |
| casos | cases |
| videojuegos | videoGames / video-games |
| alianzas | partnerships |
| recursos | resources |
| contacto | contact |
| navegacion | navigation |
| principal | main |
| secundario | secondary |
| activo | active |
| grupo | group |
| elemento | item |
| enlace | link |
| tarjeta | card |
| bloque | block |
| seccion | section |
```

---

## CSS

Renombra clases CSS propias si usan conceptos del dominio en español.

Ejemplos:

```txt
.seccion-principal -> .main-section
.tarjeta-servicio -> .service-card
.menu-secciones -> .sections-menu
.grupo-navegacion -> .navigation-group
.enlace-activo -> .active-link
```

No renombres clases de librerías ni utilidades si hacerlo aumenta el riesgo sin aportar claridad.

---

## Proceso

Antes de modificar:

1. Revisa el proyecto.
2. Lista archivos, rutas, anchors, componentes y configs con naming técnico en español.
3. Propón el mapa de migración.

Luego implementa por capas:

1. rutas y paths
2. anchors
3. navegación/configs
4. componentes
5. archivos/carpetas
6. tipos/interfaces
7. hooks/helpers
8. CSS propio
9. imports y referencias
10. tests, si existen

---

## Validaciones

Al terminar, verifica:

- No hay imports rotos.
- No hay paths canónicos en español.
- No hay anchors canónicos en español.
- No hay componentes propios en español.
- No hay tipos/interfaces propios en español.
- No hay variables principales en español.
- Los textos visibles siguen en español.
- Los labels del menú siguen en español.
- El scroll por anchors funciona.
- El menú sticky funciona.
- El logo principal vuelve al path principal.
- No hay ids duplicados.
- No hay enlaces muertos.
- No hay overflow horizontal.
- Build y lint pasan.

---

## Entrega final

Entrega:

1. Archivos modificados.
2. Mapa español → inglés aplicado.
3. Paths finales.
4. Anchors finales.
5. Componentes/archivos renombrados.
6. Confirmación de contenido visible en español.
7. Confirmación de build/lint.
