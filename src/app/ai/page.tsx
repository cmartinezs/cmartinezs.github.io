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
  title: "AI",
  description:
    "IA aplicada al desarrollo, documentación y aprendizaje técnico. Automatización sin perder criterio profesional.",
  path: "/ai/",
});

export default function AIPage() {
  return (
    <PageWrapper pageClass="page-ai">
      <Navbar />
      <main>
        <PageHeroSection
          eyebrow="AI aplicada"
          title="IA aplicada al desarrollo, la documentación y el aprendizaje técnico."
          lead="Uso inteligencia artificial como apoyo práctico para acelerar tareas, ordenar información, generar recursos y mejorar flujos de trabajo, siempre con revisión y criterio técnico humano."
        />

        <section className="section" id="aplicaciones">
          <div className="container">
            <div className="grid lg:grid-cols-3 gap-6">
              <div>
                <GlassCard as="article">
                  <h2 className="h4">Casos de uso</h2>
                  <p className="text-muted-custom">
                    Documentación técnica asistida, generación de material educativo, prompts para
                    análisis de código y requisitos.
                  </p>
                </GlassCard>
              </div>
              <div>
                <GlassCard as="article">
                  <h2 className="h4">Productividad</h2>
                  <p className="text-muted-custom">
                    Automatización de tareas repetitivas y apoyo a estudio, planificación, revisión
                    de soluciones y preparación de contenido.
                  </p>
                </GlassCard>
              </div>
              <div>
                <GlassCard as="article">
                  <h2 className="h4">Criterio humano</h2>
                  <p className="text-muted-custom">
                    No presento la IA como reemplazo del criterio profesional, sino como una
                    herramienta para pensar, construir y enseñar mejor.
                  </p>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          eyebrow="IA con propósito"
          title="Automatiza procesos sin perder control técnico."
          lead="Incorpora asistentes, prompts y flujos de IA útiles para desarrollo, formación y operaciones."
          primaryHref="/contacto/?topic=ai"
          primaryLabel="Quiero explorar IA aplicada"
        />
      </main>
      <Footer />
      <ScrollTop />
    </PageWrapper>
  );
}
