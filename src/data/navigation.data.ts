export interface NavAnchor {
  href: string;
  label: string;
}

export interface NavItem {
  label: string;
  href: string;
  core?: boolean;
}

export interface NavGroup {
  id: string;
  label: string;
  path: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    id: "profesional",
    label: "Profesional",
    path: "/profesional/",
    items: [
      { label: "Servicios", href: "/profesional/#servicios" },
      { label: "Método", href: "/profesional/#metodo" },
      { label: "Explorar", href: "/profesional/#explorar" },
    ],
  },
  {
    id: "trayectoria",
    label: "Trayectoria",
    path: "/trayectoria/",
    items: [
      { label: "Experiencia", href: "/trayectoria/#experiencia" },
      { label: "Stack", href: "/trayectoria/#stack" },
      { label: "Certificaciones", href: "/trayectoria/#certificaciones" },
    ],
  },
  {
    id: "especialidades",
    label: "Especialidades",
    path: "/especialidades/",
    items: [
      { label: "Backend", href: "/especialidades/#backend", core: true },
      { label: "Arquitectura", href: "/especialidades/#arquitectura" },
      { label: "Mentoría", href: "/especialidades/#mentoria" },
      { label: "Docencia", href: "/especialidades/#docencia" },
    ],
  },
  {
    id: "proyectos",
    label: "Proyectos",
    path: "/proyectos/",
    items: [
      { label: "Casos", href: "/proyectos/#casos" },
      { label: "KeyGo", href: "/proyectos/#keygo" },
      { label: "Videojuegos", href: "/proyectos/#videojuegos" },
    ],
  },
  {
    id: "recursos-contacto",
    label: "Recursos",
    path: "/recursos-contacto/",
    items: [
      { label: "Alianzas", href: "/recursos-contacto/#alianzas" },
      { label: "Recursos", href: "/recursos-contacto/#recursos" },
      { label: "Contacto", href: "/recursos-contacto/#contacto" },
    ],
  },
];

export const pageAnchors: Record<string, NavAnchor[]> = {
  "/": [
    { href: "#inicio", label: "Portada" },
  ],
  "/profesional/": [
    { href: "#servicios", label: "Servicios" },
    { href: "#metodo", label: "Método" },
    { href: "#explorar", label: "Explorar" },
  ],
  "/especialidades/": [
    { href: "#backend", label: "Backend" },
    { href: "#arquitectura", label: "Arquitectura" },
    { href: "#mentoria", label: "Mentoría" },
    { href: "#docencia", label: "Docencia" },
  ],
  "/capacidades/": [
    { href: "#frontend", label: "Frontend" },
    { href: "#mobile", label: "Mobile" },
    { href: "#herramientas-ia", label: "Herramientas con IA" },
  ],
  "/trayectoria/": [
    { href: "#experiencia", label: "Experiencia" },
    { href: "#stack", label: "Stack" },
    { href: "#certificaciones", label: "Certificaciones" },
  ],
  "/proyectos/": [
    { href: "#casos", label: "Casos" },
    { href: "#keygo", label: "KeyGo" },
    { href: "#videojuegos", label: "Videojuegos" },
  ],
  "/recursos-contacto/": [
    { href: "#alianzas", label: "Alianzas" },
    { href: "#recursos", label: "Recursos" },
    { href: "#contacto", label: "Contacto" },
  ],
  "/casos/": [
    { href: "#inicio", label: "Inicio" },
    { href: "#casos-lista", label: "Casos" },
    { href: "#contacto", label: "Contacto" },
  ],
  "/frontend/": [
    { href: "#inicio", label: "Inicio" },
    { href: "#enfoque", label: "Enfoque" },
    { href: "#contacto", label: "Contacto" },
  ],
  "/backend/": [
    { href: "#inicio", label: "Inicio" },
    { href: "#arquitectura", label: "Arquitectura" },
    { href: "#contacto", label: "Contacto" },
  ],
  "/mobile/": [
    { href: "#inicio", label: "Inicio" },
    { href: "#enfoque", label: "Enfoque" },
    { href: "#contacto", label: "Contacto" },
  ],
  "/arquitectura/": [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#contacto", label: "Contacto" },
  ],
  "/experiencia/": [
    { href: "#inicio", label: "Inicio" },
    { href: "#historias", label: "Historias" },
    { href: "#contacto", label: "Contacto" },
  ],
  "/docencia/": [
    { href: "#inicio", label: "Inicio" },
    { href: "#metodo", label: "Método" },
    { href: "#cursos", label: "Cursos" },
    { href: "#contacto", label: "Contacto" },
  ],
  "/videojuegos/": [
    { href: "#inicio", label: "Inicio" },
    { href: "#videojuegos", label: "Proyectos" },
    { href: "#contacto", label: "Contacto" },
  ],
  "/mentoria/": [
    { href: "#inicio", label: "Inicio" },
    { href: "#areas", label: "Áreas" },
    { href: "#contacto", label: "Contacto" },
  ],
  "/ai/": [
    { href: "#inicio", label: "Inicio" },
    { href: "#aplicaciones", label: "Aplicaciones" },
    { href: "#contacto", label: "Contacto" },
  ],
  "/certificaciones/": [
    { href: "#inicio", label: "Inicio" },
    { href: "#destacadas", label: "Destacadas" },
    { href: "#formacion", label: "Formación" },
    { href: "#contacto", label: "Contacto" },
  ],
  "/recursos/": [
    { href: "#inicio", label: "Inicio" },
    { href: "#articulos", label: "Artículos" },
    { href: "#contacto", label: "Contacto" },
  ],
  "/keygo/": [
    { href: "#inicio", label: "Inicio" },
    { href: "#roadmap", label: "Roadmap" },
    { href: "#aprendizajes", label: "Aprendizajes" },
  ],
  "/contacto/": [
    { href: "#inicio", label: "Inicio" },
    { href: "#canales", label: "Canales" },
    { href: "#formulario", label: "Formulario" },
  ],
};
