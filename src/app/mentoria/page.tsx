import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollTop } from "@/components/layout/ScrollTop";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { GlassCard } from "@/components/sub-components/GlassCard";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Mentoría",
  description:
    "Mentoría técnica en Java, Spring Boot, frontend, mobile, testing y preparación de entrevistas.",
  path: "/mentoria/",
});

export default function MentoriaPage() {
  return (
    <PageWrapper pageClass="page-mentoria">
      <Navbar />
      <main>
        <PageHeroSection
          eyebrow="Mentoría"
          title="Acompañamiento técnico para crecer con dirección."
          lead="Mentoría para desarrolladores y equipos que necesitan mejorar criterio técnico, revisar proyectos, preparar entrevistas o consolidar buenas prácticas."
        />

        <section className="section" id="areas">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <GlassCard as="article">
                  <h2 className="h4">Java y Spring Boot</h2>
                  <p className="text-muted-custom">
                    Diseño de APIs, capas, testing, integración y buenas prácticas backend.
                  </p>
                </GlassCard>
              </div>
              <div className="col-md-6 col-lg-3">
                <GlassCard as="article">
                  <h2 className="h4">Frontend y mobile</h2>
                  <p className="text-muted-custom">
                    Revisión de proyectos con React, Angular, Ionic y Kotlin desde una mirada
                    práctica y mantenible.
                  </p>
                </GlassCard>
              </div>
              <div className="col-md-6 col-lg-3">
                <GlassCard as="article">
                  <h2 className="h4">Calidad y pruebas</h2>
                  <p className="text-muted-custom">
                    Feedback sobre SonarQube, testing automatizado, Selenium, pruebas de carga con
                    JMeter y mantenibilidad.
                  </p>
                </GlassCard>
              </div>
              <div className="col-md-6 col-lg-3">
                <GlassCard as="article">
                  <h2 className="h4">Entrevistas</h2>
                  <p className="text-muted-custom">
                    Preparación técnica, explicación de experiencia, resolución de problemas y
                    criterio profesional.
                  </p>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Mentoría práctica"
          title="Revisemos dónde estás y qué necesitas mejorar."
          lead="Una mentoría útil debe terminar con próximos pasos concretos, no solo consejos generales."
          primaryHref="/contacto/?topic=mentoria"
          primaryLabel="Solicitar mentoría"
        />
      </main>
      <Footer />
      <ScrollTop />
    </PageWrapper>
  );
}
