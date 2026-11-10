import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Senior Software Engineer | Backend, Cloud & Applied AI",
  description:
    "Carlos Martínez, Senior Software Engineer en Santiago de Chile. Más de 15 años construyendo software backend, APIs, sistemas distribuidos y productos digitales. Java, Spring Boot, cloud e IA aplicada.",
  path: "/",
});

const featuredWork = [
  {
    name: "GradeOps AI",
    category: "EdTech · IA aplicada",
    description:
      "Exploración y desarrollo de herramientas inteligentes para apoyar procesos de evaluación y trabajo docente.",
    href: "https://github.com/cmartinezs/grade-ops-ai",
    label: "Ver repositorio",
  },
  {
    name: "Academic Grading with AI",
    category: "Experimentación · Python",
    description:
      "Proyecto experimental sobre el uso de inteligencia artificial en flujos de evaluación académica.",
    href: "https://github.com/cmartinezs/academic-grading-with-ai",
    label: "Ver repositorio",
  },
  {
    name: "KeyGo",
    category: "Identidad · Arquitectura",
    description:
      "Diseño de una capacidad de identidad y autenticación para productos digitales, con foco en estándares e integración.",
    href: "/keygo/",
    label: "Conocer KeyGo",
  },
];

const experience = [
  { company: "Duoc UC", role: "Docente de Ingeniería en Informática", period: "2023 — actual" },
  { company: "Veolia Chile", role: "Analista Desarrollador I", period: "2024 — 2026" },
  { company: "Stefanini", role: "Tech Leader", period: "2024" },
  { company: "Mercado Libre", role: "Senior Software Engineer / Tech Leader", period: "2022 — 2024" },
  { company: "Globant", role: "Software Designer / Java Developer", period: "2021 — 2022" },
  { company: "GlobalLogic", role: "Senior Software Engineer / Integration Lead", period: "2019 — 2021" },
];

const capabilities = [
  "Java · Spring Boot",
  "Backend · REST APIs",
  "Microservices · Kafka",
  "Software Architecture",
  "AWS · GCP · Azure",
  "Docker · Kubernetes",
  "LLMs · AI-assisted engineering",
  "React · TypeScript",
];

export default function HomePage() {
  return (
    <main className="personal-home">
      <header className="personal-header">
        <a className="personal-brand" href="#inicio" aria-label="Carlos Martínez, inicio">
          <span className="personal-mark">CM</span>
          <span>Carlos Martínez</span>
        </a>
        <nav aria-label="Navegación principal" className="personal-nav">
          <a href="#perfil">Perfil</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="personal-header-link" href="https://github.com/cmartinezs" target="_blank" rel="noreferrer">
          GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="personal-hero" id="inicio">
        <div className="personal-hero-copy">
          <p className="personal-kicker"><span className="personal-status" /> Santiago, Chile · Disponible para oportunidades</p>
          <h1>Construyo software <span>que resuelve problemas reales.</span></h1>
          <p className="personal-lead">
            Soy Carlos, Senior Software Engineer con más de 15 años de experiencia en backend,
            arquitectura e integración de sistemas. Me interesa construir productos útiles,
            evolucionar plataformas y aplicar IA donde aporta valor.
          </p>
          <div className="personal-actions">
            <a className="personal-button primary" href="mailto:carlos.f.martinez.s@gmail.com">Hablemos <span aria-hidden="true">↗</span></a>
            <a className="personal-button secondary" href="#proyectos">Ver proyectos</a>
          </div>
          <p className="personal-proof">Java & Spring <i /> Sistemas distribuidos <i /> Cloud <i /> IA aplicada</p>
        </div>
        <aside className="personal-hero-aside" aria-label="Resumen profesional">
          <div className="personal-monogram">CM<span>.</span></div>
          <p className="personal-aside-label">INGENIERÍA DE SOFTWARE</p>
          <p className="personal-aside-title">Criterio técnico.<br />Ejecución práctica.<br />Foco en producto.</p>
          <div className="personal-aside-bottom"><span>15+ años</span><span>Experiencia</span></div>
        </aside>
      </section>

      <section className="personal-section personal-profile" id="perfil">
        <div className="personal-section-heading">
          <p className="personal-eyebrow">01 / PERFIL</p>
          <h2>Experiencia amplia.<br /><span>Foco en construir.</span></h2>
        </div>
        <div className="personal-profile-copy">
          <p>
            Mi especialidad es el desarrollo backend con Java y Spring, diseño de APIs,
            microservicios, integración y sistemas distribuidos. He trabajado en productos y
            plataformas de sectores como comercio electrónico, banca, servicios y educación.
          </p>
          <p>
            Combino el trabajo hands-on con arquitectura, calidad y colaboración técnica.
            También soy docente de informática: enseñar me mantiene cerca de los fundamentos
            y de los desafíos reales de quienes aprenden y utilizan tecnología.
          </p>
          <div className="personal-capabilities">
            {capabilities.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="personal-section personal-experience" id="experiencia">
        <div className="personal-section-heading">
          <p className="personal-eyebrow">02 / TRAYECTORIA</p>
          <h2>Experiencia en<br /><span>distintos contextos.</span></h2>
        </div>
        <div className="personal-timeline">
          {experience.map((item) => (
            <article className="personal-role" key={item.company}>
              <div><h3>{item.company}</h3><p>{item.role}</p></div>
              <time>{item.period}</time>
            </article>
          ))}
          <a className="personal-text-link" href="/trayectoria/">Ver trayectoria y formación completa <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section className="personal-section personal-projects" id="proyectos">
        <div className="personal-projects-heading">
          <div>
            <p className="personal-eyebrow">03 / TRABAJO SELECCIONADO</p>
            <h2>Ideas que pasan<br /><span>a la práctica.</span></h2>
          </div>
          <a className="personal-text-link" href="https://github.com/cmartinezs?tab=repositories" target="_blank" rel="noreferrer">
            Todos los repositorios <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="personal-project-grid">
          {featuredWork.map((project, index) => (
            <article className="personal-project" key={project.name}>
              <span className="personal-project-number">0{index + 1}</span>
              <p className="personal-project-category">{project.category}</p>
              <h3>{project.name}</h3>
              <p className="personal-project-description">{project.description}</p>
              <a href={project.href} target="_blank" rel="noreferrer">{project.label} <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
      </section>

      <section className="personal-contact" id="contacto">
        <p className="personal-eyebrow">04 / CONTACTO</p>
        <h2>¿Construimos<br /><span>algo valioso?</span></h2>
        <p>Abierto a conversar sobre ingeniería de software, productos digitales, IA aplicada y oportunidades profesionales.</p>
        <div className="personal-actions">
          <a className="personal-button primary" href="mailto:carlos.f.martinez.s@gmail.com">carlos.f.martinez.s@gmail.com <span aria-hidden="true">↗</span></a>
          <a className="personal-button secondary" href="https://www.linkedin.com/in/cfms" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </section>

      <footer className="personal-footer">
        <span>© {new Date().getFullYear()} Carlos Martínez Sánchez</span>
        <span>Diseñado y desarrollado con intención.</span>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </main>
  );
}
