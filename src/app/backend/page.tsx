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
  title: "Backend",
  description:
    "Backend robusto con Java, Spring Boot y arquitectura limpia. APIs, integraciones y sistemas mantenibles.",
  path: "/backend/",
});

export default function BackendPage() {
  return (
    <PageWrapper pageClass="page-backend">
      <Navbar />
      <main>
        <PageHeroSection
          eyebrow="Backend"
          title="Backend robusto para sistemas que necesitan integrarse, mantenerse y crecer."
          lead="Diseño y desarrollo APIs, servicios y componentes backend con Java, Spring Boot y arquitectura limpia, cuidando mantenibilidad, calidad e integración con sistemas reales."
        />

        <section className="section" id="arquitectura">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6">
                <GlassCard as="article">
                  <h2 className="h3">Bloques técnicos</h2>
                  <ul className="feature-list mt-3">
                    <li>APIs REST: contratos claros, autenticación, validación y documentación.</li>
                    <li>
                      Arquitectura: separación de responsabilidades, Clean Architecture, patrones y
                      SOLID.
                    </li>
                    <li>
                      Integración: comunicación entre sistemas, servicios externos, colas y
                      procesamiento asíncrono.
                    </li>
                    <li>
                      Calidad: testing, revisión de código, SonarQube, JMeter, Selenium,
                      refactorización y documentación técnica.
                    </li>
                    <li>
                      Liderazgo técnico: estándares, mentoría y acompañamiento a equipos.
                    </li>
                  </ul>
                </GlassCard>
              </div>
              <div className="col-lg-6">
                <GlassCard as="article">
                  <h2 className="h3">Problemas que puedo resolver</h2>
                  <ul className="feature-list mt-3">
                    <li>Tu backend creció sin estructura clara.</li>
                    <li>Necesitas integrar sistemas que hoy trabajan aislados.</li>
                    <li>Tu equipo requiere estándares técnicos y revisión de código.</li>
                    <li>Debes crear una API nueva sin sobreingeniería.</li>
                    <li>Hay deuda técnica que impide evolucionar con seguridad.</li>
                  </ul>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Backend escalable"
          title="Construyamos una base técnica sólida."
          lead="APIs, autenticación, arquitectura limpia y sistemas preparados para crecer."
          primaryHref="/contacto/?topic=backend"
          primaryLabel="Quiero mejorar o construir mi backend"
        />
      </main>
      <Footer />
      <ScrollTop />
    </PageWrapper>
  );
}
