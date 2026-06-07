import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Navbar } from "@/components/layout/Navbar";
import { LocalNav } from "@/components/layout/LocalNav";
import { Footer } from "@/components/layout/Footer";
import { ScrollTop } from "@/components/layout/ScrollTop";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ProjectHighlightSection } from "@/components/sections/ProjectHighlightSection";
import { GamesSection } from "@/components/sections/GamesSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Proyectos: Casos, KeyGo y Videojuegos",
  description:
    "Proyectos de Carlos Martínez: casos reales de trabajo en banca, e-commerce y formación; KeyGo como proyecto SaaS de autenticación; y videojuegos como exploración técnica.",
  path: "/proyectos/",
});

const localNavItems = [
  { label: "Casos", href: "#casos" },
  { label: "KeyGo", href: "#keygo" },
  { label: "Videojuegos", href: "#videojuegos" },
];

export default function ProyectosPage() {
  return (
    <PageWrapper pageClass="page-proyectos">
      <Navbar />
      <main>
        <LocalNav
          items={localNavItems}
          homeHref="/proyectos/"
          homeLabel="Proyectos"
        />

        <PageHeroSection
          eyebrow="Proyectos"
          title="Qué he construido y cómo pienso al hacerlo."
          lead="Casos de trabajo real, un proyecto SaaS en desarrollo y exploraciones técnicas a través del juego. Cada uno muestra una forma distinta de aplicar criterio técnico."
        />

        <CaseStudiesSection />

        <ProjectHighlightSection />

        <GamesSection />

        <div className="section">
          <div className="container">
            <div className="flex flex-wrap gap-4">
              <Link className="card-link-custom" href="/especialidades/">
                Ver especialidades →
              </Link>
              <Link className="card-link-custom" href="/trayectoria/">
                Ver trayectoria →
              </Link>
            </div>
          </div>
        </div>

        <CTASection
          id="contacto-proyectos"
          eyebrow="Proyectos"
          title="¿Tienes un proyecto que necesita criterio técnico?"
          lead="Puedo ayudarte con backend, arquitectura o un proyecto de producto desde la base."
          primaryHref="/recursos-contacto/#contacto"
          primaryLabel="Hablemos de tu proyecto"
        />
      </main>
      <Footer />
      <ScrollTop />
    </PageWrapper>
  );
}
