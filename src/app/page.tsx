import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollTop } from "@/components/layout/ScrollTop";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ProjectHighlightSection } from "@/components/sections/ProjectHighlightSection";
import { StackShowcaseSection } from "@/components/sections/StackShowcaseSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { ProfileSummarySection } from "@/components/sections/ProfileSummarySection";
import { WorkMethodSection } from "@/components/sections/WorkMethodSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { CollaborationSection } from "@/components/sections/CollaborationSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Backend, Arquitectura y Formación Técnica",
  description:
    "Desarrollador backend senior y docente técnico con 15+ años en sistemas reales. Diseño APIs y arquitecturas mantenibles, acompaño equipos en decisiones técnicas y transfiero criterio a través de la formación aplicada. Especialización en Java, Spring Boot, sistemas enterprise y educación superior.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ProfileSummarySection />
        <ServicesSection />
        <CaseStudiesSection />
        <WorkMethodSection />
        <TrustSection />
        <ProjectHighlightSection />
        <StackShowcaseSection />
        <ContentSection />
        <CollaborationSection />
        <CTASection
          eyebrow="¿Empezamos?"
          title="Hablemos si tienes un proyecto, equipo o programa que necesita criterio técnico."
          lead="Puedo ayudarte con arquitectura backend, liderazgo técnico, formación aplicada o una alianza en un proyecto concreto."
          primaryHref="/contacto/?topic=colaboracion"
          primaryLabel="Iniciar conversación"
          secondaryLinks={[
            {
              href: "https://www.linkedin.com/in/cfms",
              label: "LinkedIn",
              icon: "bi-linkedin",
              external: true,
            },
            {
              href: "https://github.com/cmartinezs",
              label: "GitHub",
              icon: "bi-github",
              external: true,
            },
          ]}
        />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
