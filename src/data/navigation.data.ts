export interface NavPage {
  label: string;
  href: string;
}

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
  label: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    label: "Principal",
    items: [
      { label: "Inicio", href: "/" },
      { label: "Perfil", href: "/#perfil" },
      { label: "Servicios", href: "/#servicios" },
      { label: "Método", href: "/#metodo" },
    ],
  },
  {
    label: "Especialidades",
    items: [
      { label: "Backend", href: "/backend/", core: true },
      { label: "Arquitectura", href: "/arquitectura/" },
      { label: "Mentoría", href: "/mentoria/" },
      { label: "Docencia", href: "/docencia/" },
    ],
  },
  {
    label: "Capacidades complementarias",
    items: [
      { label: "Frontend", href: "/frontend/" },
      { label: "Mobile", href: "/mobile/" },
      { label: "Herramientas con IA", href: "/ai/" },
    ],
  },
  {
    label: "Trayectoria",
    items: [
      { label: "Experiencia", href: "/experiencia/" },
      { label: "Stack", href: "/#stack" },
      { label: "Certificaciones", href: "/certificaciones/" },
    ],
  },
  {
    label: "Proyectos",
    items: [
      { label: "Casos", href: "/casos/" },
      { label: "KeyGo", href: "/keygo/" },
      { label: "Videojuegos", href: "/videojuegos/" },
    ],
  },
  {
    label: "Recursos y contacto",
    items: [
      { label: "Alianzas", href: "/#alianzas" },
      { label: "Recursos", href: "/recursos/" },
      { label: "Contacto", href: "/contacto/" },
    ],
  },
];

export const pageAnchors: Record<string, NavAnchor[]> = {
  "/": [
    { href: "#inicio", label: "Inicio" },
    { href: "#perfil", label: "Perfil" },
    { href: "#servicios", label: "Servicios" },
    { href: "#casos", label: "Casos" },
    { href: "#metodo", label: "Método" },
    { href: "#stack", label: "Stack" },
    { href: "#alianzas", label: "Alianzas" },
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
    { href: "#proyectos", label: "Proyectos" },
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
