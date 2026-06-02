import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollTop } from "@/components/layout/ScrollTop";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Experiencia",
  description:
    "15+ años de experiencia en software real: liderazgo técnico, backend, arquitectura, integración y docencia.",
  path: "/experiencia/",
});

export default function ExperienciaPage() {
  return (
    <PageWrapper pageClass="page-experiencia">
      <Navbar />
      <main>
        <PageHeroSection
          eyebrow="Experiencia profesional"
          title="Historias de software real, liderazgo técnico y aprendizaje continuo."
          lead="Mi trayectoria no es solo una lista de cargos. Es una evolución desde el desarrollo de sistemas empresariales hasta el liderazgo técnico, la arquitectura, la docencia y la construcción de criterio para resolver problemas reales con software."
        />
        <ExperienceSection />
        <CTASection
          eyebrow="Síntesis"
          title="Lo que esta trayectoria me permite aportar."
          lead="Puedo moverme entre código, arquitectura, análisis, docencia y liderazgo técnico porque he trabajado en todas esas capas en proyectos reales."
          primaryHref="/contacto/?topic=experiencia"
          primaryLabel="Conversemos sobre tu contexto"
        />
      </main>
      <Footer />
      <ScrollTop />
    </PageWrapper>
  );
}
