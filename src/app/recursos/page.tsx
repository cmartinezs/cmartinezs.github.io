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
  title: "Recursos",
  description:
    "Guías y apuntes sobre backend, arquitectura, buenas prácticas y uso de IA en desarrollo de software.",
  path: "/recursos/",
});

const plannedArticles = [
  "Cómo diseñar APIs REST mantenibles con Spring Boot.",
  "Clean Architecture sin sobreingeniería.",
  "Errores comunes en integración de APIs.",
  "IA para documentación técnica.",
  "Git en equipos pequeños.",
  "Checklist de revisión de código con SonarQube.",
  "Pruebas de carga con JMeter y E2E con Selenium.",
  "Cómo dar clases técnicas efectivas.",
];

export default function RecursosPage() {
  return (
    <PageWrapper pageClass="page-recursos">
      <Navbar />
      <main>
        <PageHeroSection
          eyebrow="Recursos"
          title="Guías y apuntes para aprender y construir mejor software."
          lead="Comparto conocimiento práctico sobre backend, arquitectura, buenas prácticas e IA aplicada al desarrollo, basado en mi experiencia productiva y docente."
        />

        <section className="section" id="articulos">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">Próximamente</span>
              <h2 className="display-heading display-5 mt-3">Contenido en desarrollo.</h2>
              <p className="mt-3">
                Estoy preparando guías prácticas y recursos técnicos. Suscríbete o contáctame para
                saber cuándo estén listos.
              </p>
            </div>
            <GlassCard>
              <h3 className="h4 mb-3">Artículos planificados</h3>
              <ul className="feature-list">
                {plannedArticles.map((article) => (
                  <li key={article}>{article}</li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </section>

        <CTASection
          eyebrow="Notifícame"
          title="¿Quieres saber cuándo publique?"
          lead="Escríbeme y te aviso cuando los primeros recursos estén disponibles."
          primaryHref="/contacto/?topic=recursos"
          primaryLabel="Notifícame"
        />
      </main>
      <Footer />
      <ScrollTop />
    </PageWrapper>
  );
}
