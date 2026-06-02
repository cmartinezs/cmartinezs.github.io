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
  title: "Arquitectura",
  description:
    "Arquitectura de software, Clean Architecture y calidad técnica. Decisiones técnicas claras para software que evoluciona.",
  path: "/arquitectura/",
});

export default function ArquitecturaPage() {
  return (
    <PageWrapper pageClass="page-arquitectura">
      <Navbar />
      <main>
        <PageHeroSection
          eyebrow="Arquitectura"
          title="Decisiones técnicas claras para software que pueda evolucionar."
          lead="Ayudo a ordenar sistemas, definir límites, reducir deuda técnica y diseñar soluciones backend mantenibles sin caer en sobreingeniería."
        />

        <section className="section" id="servicios">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-6 col-lg-4">
                <GlassCard as="article">
                  <h2 className="h4">Diseño de soluciones</h2>
                  <p className="text-muted-custom">
                    Análisis técnico, separación de responsabilidades, definición de componentes y
                    criterios para tomar decisiones sostenibles.
                  </p>
                </GlassCard>
              </div>
              <div className="col-md-6 col-lg-4">
                <GlassCard as="article">
                  <h2 className="h4">Clean Architecture</h2>
                  <p className="text-muted-custom">
                    Aplicación pragmática de arquitectura limpia, hexagonal, patrones y SOLID para
                    mejorar mantenibilidad y testabilidad.
                  </p>
                </GlassCard>
              </div>
              <div className="col-md-6 col-lg-4">
                <GlassCard as="article">
                  <h2 className="h4">Calidad y pruebas</h2>
                  <p className="text-muted-custom">
                    Mejora incremental de código existente con revisión técnica, SonarQube para
                    calidad, JMeter para carga y Selenium para pruebas end-to-end.
                  </p>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Calidad técnica"
          title="Mejoremos la arquitectura sin detener el producto."
          lead="Revisemos tu sistema, deuda técnica, APIs, límites y decisiones clave."
          primaryHref="/contacto/?topic=arquitectura"
          primaryLabel="Solicitar revisión"
        />
      </main>
      <Footer />
      <ScrollTop />
    </PageWrapper>
  );
}
