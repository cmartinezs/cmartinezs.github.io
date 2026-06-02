export interface NavPage {
  label: string;
  href: string;
}

export interface NavAnchor {
  href: string;
  label: string;
}

export const navPages: NavPage[] = [
  { label: "Inicio", href: "/" },
  { label: "Frontend", href: "/frontend/" },
  { label: "Mobile", href: "/mobile/" },
  { label: "Backend", href: "/backend/" },
  { label: "Arquitectura", href: "/arquitectura/" },
  { label: "Experiencia", href: "/experiencia/" },
  { label: "Docencia", href: "/docencia/" },
  { label: "Mentoría", href: "/mentoria/" },
  { label: "AI", href: "/ai/" },
  { label: "Certificaciones", href: "/certificaciones/" },
  { label: "Recursos", href: "/recursos/" },
  { label: "KeyGo", href: "/keygo/" },
  { label: "Contacto", href: "/contacto/" },
];

export const pageAnchors: Record<string, NavAnchor[]> = {
  "/": [
    { href: "#inicio", label: "Inicio" },
    { href: "#servicios", label: "Servicios" },
    { href: "#confianza", label: "Confianza" },
    { href: "#keygo", label: "KeyGo" },
    { href: "#stack", label: "Stack" },
    { href: "#contenido", label: "Contenido" },
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
    { href: "#videojuegos", label: "Videojuegos" },
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
