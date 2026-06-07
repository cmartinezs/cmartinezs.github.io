import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { Navbar } from "@/components/layout/Navbar";
import { LocalNav } from "@/components/layout/LocalNav";
import { Footer } from "@/components/layout/Footer";
import { ScrollTop } from "@/components/layout/ScrollTop";
import { ProfileSummarySection } from "@/components/sections/ProfileSummarySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkMethodSection } from "@/components/sections/WorkMethodSection";
import { CTASection } from "@/components/sections/CTASection";
import { GlassCard } from "@/components/sub-components/GlassCard";

export const metadata: Metadata = buildMetadata({
  title: "Profesional: Servicios y Método",
  description:
    "Landing profesional de Carlos Martínez con perfil, servicios, forma de trabajo y rutas temáticas para explorar trayectoria, especialidades, proyectos, capacidades y contacto.",
  path: "/profesional/",
});

const professionalNavItems = [
  { label: "Servicios", href: "#servicios" },
  { label: "Método", href: "#metodo" },
  { label: "Explorar", href: "#explorar" },
];

const thematicPaths = [
  {
    href: "/especialidades/",
    icon: "bi-cpu",
    label: "Especialidades",
    description: "Backend, arquitectura, mentoría y docencia técnica.",
    anchors: ["Backend", "Arquitectura", "Mentoría", "Docencia"],
  },
  {
    href: "/capacidades/",
    icon: "bi-grid-3x3-gap",
    label: "Capacidades complementarias",
    description: "Frontend, mobile y herramientas con IA aplicada.",
    anchors: ["Frontend", "Mobile", "Herramientas con IA"],
  },
  {
    href: "/trayectoria/",
    icon: "bi-graph-up-arrow",
    label: "Trayectoria",
    description: "Experiencia profesional, stack técnico y certificaciones.",
    anchors: ["Experiencia", "Stack", "Certificaciones"],
  },
  {
    href: "/proyectos/",
    icon: "bi-layers",
    label: "Proyectos",
    description: "Casos reales, KeyGo y exploraciones técnicas.",
    anchors: ["Casos", "KeyGo", "Videojuegos"],
  },
  {
    href: "/recursos-contacto/",
    icon: "bi-handshake",
    label: "Recursos y contacto",
    description: "Alianzas, materiales y vías de contacto.",
    anchors: ["Alianzas", "Recursos", "Contacto"],
  },
] as const;

export default function ProfesionalPage() {
  return (
    <>
      <Navbar />
      <main>
        <LocalNav
          items={professionalNavItems}
          homeHref="/profesional/"
          homeLabel="Profesional"
        />
        <ProfileSummarySection />
        <ServicesSection />
        <WorkMethodSection />

        <section className="section" id="explorar">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">Explorar</span>
              <h2 className="display-heading display-5 mt-3">
                Navega por cada área del sitio.
              </h2>
              <p className="mt-3">
                El sitio está organizado por temáticas. Cada sección es una landing independiente
                con su propio contenido, navegación y propósito.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
              {thematicPaths.map((path) => (
                <GlassCard key={path.href} as="article" className="flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <span className="service-icon" style={{ fontSize: "1.2rem" }}>
                      <i className={`bi ${path.icon}`} aria-hidden="true" />
                    </span>
                    <h3 className="h5 mb-0">{path.label}</h3>
                  </div>
                  <p className="text-muted-custom" style={{ fontSize: "0.9rem" }}>
                    {path.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mt-auto">
                    {path.anchors.map((anchor) => (
                      <span key={anchor} className="case-stack-pill">{anchor}</span>
                    ))}
                  </div>
                  <Link className="card-link-custom mt-2" href={path.href}>
                    Explorar {path.label} →
                  </Link>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="¿Empezamos?"
          title="Hablemos si tienes un proyecto, equipo o programa que necesita criterio técnico."
          lead="Puedo ayudarte con arquitectura backend, liderazgo técnico, formación aplicada o una alianza en un proyecto concreto."
          primaryHref="/recursos-contacto/#contacto"
          primaryLabel="Iniciar conversación"
          secondaryLinks={[
            {
              href: "https://www.linkedin.com/in/cfms",
              label: "LinkedIn",
              icon: "bi-linkedin",
              external: true,
            },
            {
              href: "https://github.com/cmartinezs",
              label: "GitHub",
              icon: "bi-github",
              external: true,
            },
          ]}
        />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
