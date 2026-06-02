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
  title: "Frontend",
  description:
    "Interfaces web claras, responsive y conectadas a sistemas reales. React, Angular, Ionic, Vite y Bootstrap.",
  path: "/frontend/",
});

export default function FrontendPage() {
  return (
    <PageWrapper pageClass="page-frontend">
      <Navbar />
      <main>
        <PageHeroSection
          eyebrow="Frontend"
          title="Interfaces web claras, responsive y conectadas a sistemas reales."
          lead="Desarrollo frontend funcional para landing pages, aplicaciones web, formularios, dashboards e interfaces que necesitan integrarse con APIs. También cuento con experiencia en mobile híbrido usando Ionic y Angular."
        />

        <section className="section" id="enfoque">
          <div className="container">
            <div className="row g-4">
              <div className="col-md-4">
                <GlassCard as="article">
                  <span className="service-icon">UI</span>
                  <h2 className="h4">Producto antes que decoración</h2>
                  <p className="text-muted-custom">
                    Desarrollo interfaces web que no solo se ven bien: comunican, responden en
                    distintos dispositivos y se integran correctamente con APIs y servicios reales.
                  </p>
                </GlassCard>
              </div>
              <div className="col-md-4">
                <GlassCard as="article">
                  <span className="service-icon">UX</span>
                  <h2 className="h4">Entregables concretos</h2>
                  <p className="text-muted-custom">
                    Landing pages profesionales, dashboards internos, formularios conectados a
                    backend, flujos de usuario e interfaces para productos SaaS o sistemas
                    empresariales.
                  </p>
                </GlassCard>
              </div>
              <div className="col-md-4">
                <GlassCard as="article">
                  <span className="service-icon">API</span>
                  <h2 className="h4">Integración real</h2>
                  <p className="text-muted-custom">
                    Trabajo con HTML, CSS, JavaScript, React, Bootstrap, Angular e Ionic según el
                    contexto técnico del proyecto.
                  </p>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="Frontend listo para vender"
          title="Diseñemos una interfaz que comunique y convierta."
          lead="Si necesitas una landing, dashboard, interfaz conectada a tu backend o app híbrida con Ionic, hablemos."
          primaryHref="/contacto/?topic=frontend"
          primaryLabel="Necesito una interfaz clara para mi producto"
        />
      </main>
      <Footer />
      <ScrollTop />
    </PageWrapper>
  );
}
