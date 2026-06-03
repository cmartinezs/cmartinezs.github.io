import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollTop } from "@/components/layout/ScrollTop";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { CaseStudyCard } from "@/components/components/CaseStudyCard";
import { CTASection } from "@/components/sections/CTASection";
import { caseStudies } from "@/data/caseStudies.data";

export const metadata: Metadata = buildMetadata({
  title: "Casos de trabajo",
  description:
    "Casos anonimizados de proyectos reales en banca, e-commerce, operaciones, liderazgo técnico y formación. Cada caso muestra el problema, el aporte y los resultados obtenidos.",
  path: "/casos/",
});

export default function CasosPage() {
  return (
    <PageWrapper pageClass="page-casos">
      <Navbar />
      <main>
        <PageHeroSection
          eyebrow="Casos"
          title="Problemas reales que he ayudado a resolver."
          lead="Proyectos anonimizados que muestran el tipo de desafíos técnicos que enfrento y cómo los abordo. Cada caso incluye contexto, problema, aporte y resultado."
        />

        <section className="section" id="casos-lista">
          <div className="container">
            <div className="case-studies-grid">
              {caseStudies.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
              ))}
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="¿Empezamos?"
          title="¿Tienes un proyecto similar o un desafío técnico que quieras conversar?"
          lead="Puedo ayudarte con arquitectura backend, liderazgo técnico, formación o una consultoría puntual."
          primaryHref="/contacto/?topic=arquitectura"
          primaryLabel="Iniciar conversación"
          secondaryLinks={[
            {
              href: "/experiencia/",
              label: "Ver trayectoria completa",
              icon: "bi-person-lines-fill",
            },
          ]}
        />
      </main>
      <Footer />
      <ScrollTop />
    </PageWrapper>
  );
}
