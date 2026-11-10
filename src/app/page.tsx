import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollTop } from "@/components/layout/ScrollTop";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = buildMetadata({
  title: "Ingeniería, innovación, docencia y productos",
  description:
    "Carlos Martínez: ingeniero de software senior, creador de productos digitales y docente. Explora su experiencia en backend, arquitectura, IA aplicada, formación y proyectos.",
  path: "/",
});

const dimensions = [
  {
    number: "01",
    eyebrow: "Ingeniería",
    title: "Construir software con criterio",
    description:
      "Backend, Java, Spring, APIs, integración y arquitectura. Experiencia práctica diseñando y evolucionando sistemas para problemas reales.",
    href: "/especialidades/",
    link: "Explorar especialidades",
    tags: ["Java & Spring", "Sistemas distribuidos", "Arquitectura"],
    tone: "engineering",
  },
  {
    number: "02",
    eyebrow: "Innovación e IA",
    title: "Aplicar tecnología donde aporta valor",
    description:
      "Inteligencia artificial aplicada, agentes, automatización y experimentación para mejorar productos, procesos y formas de trabajar.",
    href: "/ai/",
    link: "Explorar IA aplicada",
    tags: ["IA aplicada", "Automatización", "Experimentación"],
    tone: "intelligence",
  },
  {
    number: "03",
    eyebrow: "Docencia y formación",
    title: "Compartir conocimiento construyendo",
    description:
      "Docencia superior, diseño de experiencias prácticas, materiales técnicos y formación conectada con los desafíos de la industria.",
    href: "/docencia/",
    link: "Conocer mi enfoque docente",
    tags: ["Docencia", "Aprendizaje práctico", "Mentoría"],
    tone: "education",
  },
  {
    number: "04",
    eyebrow: "Productos y proyectos",
    title: "Convertir ideas en experiencias",
    description:
      "Productos digitales, laboratorios y videojuegos. Una mirada de producto que conecta tecnología, creatividad y ejecución.",
    href: "/proyectos/",
    link: "Ver proyectos y casos",
    tags: ["ADÜMÜN", "Productos digitales", "Videojuegos"],
    tone: "products",
  },
  {
    number: "05",
    eyebrow: "Trayectoria",
    title: "Experiencia en distintos contextos",
    description:
      "Más de 15 años en equipos y organizaciones de distintas industrias, combinando desarrollo hands-on, diseño técnico y colaboración.",
    href: "/trayectoria/",
    link: "Ver experiencia y formación",
    tags: ["15+ años", "Experiencia profesional", "Certificaciones"],
    tone: "career",
  },
];

const selectedInitiatives = [
  {
    name: "GradeOps AI",
    area: "Educación · IA aplicada",
    description: "Exploración de capacidades de IA para apoyar procesos de evaluación y trabajo docente.",
  },
  {
    name: "KeyGo",
    area: "Identidad · Plataforma",
    description: "Diseño y evolución de capacidades de identidad y autenticación para productos digitales.",
  },
  {
    name: "Starborne Voyager · Lab Lights",
    area: "Videojuegos · Experiencias web",
    description: "Iniciativas de producto que combinan desarrollo web, interacción y exploración creativa.",
  },
];

export default function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <main>
        <HeroSection />

        <section className="section home-dimensions" aria-labelledby="dimensions-title">
          <div className="container">
            <div className="home-section-heading">
              <div>
                <span className="eyebrow">Distintas dimensiones, una misma forma de pensar</span>
                <h2 id="dimensions-title" className="display-heading display-5 mt-3">
                  Lo que hago y cómo puedo aportar.
                </h2>
              </div>
              <p className="text-muted-custom">
                Ingeniería, creatividad y aprendizaje se cruzan en mi trabajo. Cada espacio
                profundiza en una parte distinta de esa experiencia.
              </p>
            </div>

            <div className="home-dimension-grid">
              {dimensions.map((item) => (
                <Link
                  className={`home-dimension-card home-dimension-${item.tone}`}
                  href={item.href}
                  key={item.number}
                >
                  <div className="home-dimension-top">
                    <span className="home-dimension-number">{item.number}</span>
                    <span className="home-dimension-eyebrow">{item.eyebrow}</span>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="home-dimension-bottom">
                    <div className="home-dimension-tags">
                      {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    <span className="home-dimension-link">{item.link} <span aria-hidden="true">↗</span></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section home-collaboration" aria-labelledby="collaboration-title">
          <div className="container">
            <div className="home-collaboration-panel">
              <div className="home-collaboration-intro">
                <span className="eyebrow">Trabajo de producto</span>
                <h2 id="collaboration-title" className="display-heading display-5 mt-3">
                  También construyo en equipo.
                </h2>
                <p className="text-muted-custom">
                  Parte importante de mis iniciativas de producto y tecnología se desarrolla
                  desde ADÜMÜN. Aquí las presento respetando su identidad y organización,
                  no como repositorios personales.
                </p>
                <a className="btn-outline-custom mt-3 inline-flex" href="https://github.com/adumun" target="_blank" rel="noopener noreferrer">
                  Explorar ADÜMÜN en GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
              <div className="home-initiative-list">
                {selectedInitiatives.map((item, index) => (
                  <article className="home-initiative" key={item.name}>
                    <span className="home-initiative-number">0{index + 1}</span>
                    <div>
                      <span className="home-initiative-area">{item.area}</span>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section home-about">
          <div className="container home-about-inner">
            <div>
              <span className="eyebrow">Una mirada transversal</span>
              <h2 className="display-heading display-5 mt-3">Tecnología, producto y personas.</h2>
            </div>
            <div>
              <p className="text-muted-custom">
                Soy ingeniero de software y docente. Me interesa entender los problemas antes
                de elegir soluciones, construir sistemas que puedan evolucionar y compartir
                conocimiento para que otras personas también puedan hacerlo.
              </p>
              <Link className="card-link-custom" href="/contacto/">
                Conversemos → 
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
