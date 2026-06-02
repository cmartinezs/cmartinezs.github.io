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
  title: "Mobile",
  description:
    "Desarrollo de aplicaciones móviles con Ionic, Angular, Kotlin y Compose. Enfoque práctico e integración real.",
  path: "/mobile/",
});

export default function MobilePage() {
  return (
    <PageWrapper pageClass="page-mobile">
      <Navbar />
      <main>
        <PageHeroSection
          eyebrow="Mobile"
          title="Aplicaciones móviles con Ionic, Angular, Kotlin y Compose."
          lead="Desarrollo y enseño aplicaciones móviles desde un enfoque práctico: interfaces claras, consumo de APIs, integración con servicios y bases sólidas para construir soluciones mantenibles."
        />

        <section className="section" id="enfoque">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <GlassCard as="article">
                  <span className="service-icon">
                    <i className="devicon-ionic-original" />
                  </span>
                  <h2 className="h4">Ionic + Angular</h2>
                  <p className="text-muted-custom">
                    Aplicaciones híbridas para avanzar rápido, reutilizar conocimiento web e integrar
                    servicios móviles.
                  </p>
                </GlassCard>
              </div>
              <div>
                <GlassCard as="article">
                  <span className="service-icon">
                    <i className="devicon-kotlin-plain" />
                  </span>
                  <h2 className="h4">Kotlin + Compose</h2>
                  <p className="text-muted-custom">
                    Fundamentos de desarrollo móvil nativo, interfaces modernas y estructura clara
                    para aprendizaje y producto.
                  </p>
                </GlassCard>
              </div>
              <div>
                <GlassCard as="article">
                  <span className="service-icon">API</span>
                  <h2 className="h4">Integración</h2>
                  <p className="text-muted-custom">
                    Consumo de APIs, autenticación, Firebase y conexión con servicios backend reales.
                  </p>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Mobile práctico"
          title="Construyamos o enseñemos mobile con base técnica."
          lead="Si necesitas una app híbrida, apoyo docente o mentoría en Ionic/Kotlin, conversemos."
          primaryHref="/contacto/?topic=mobile"
          primaryLabel="Hablar de Mobile"
        />
      </main>
      <Footer />
      <ScrollTop />
    </PageWrapper>
  );
}
