import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollTop } from "@/components/layout/ScrollTop";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProfileSummarySection } from "@/components/sections/ProfileSummarySection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WorkMethodSection } from "@/components/sections/WorkMethodSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ProjectHighlightSection } from "@/components/sections/ProjectHighlightSection";
import { GamesSection } from "@/components/sections/GamesSection";
import { StackShowcaseSection } from "@/components/sections/StackShowcaseSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { CollaborationSection } from "@/components/sections/CollaborationSection";
import { ContentSection } from "@/components/sections/ContentSection";
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
        <WorkMethodSection />
        <CaseStudiesSection />
        <ProjectHighlightSection />
        <GamesSection />
        <StackShowcaseSection />
        <ExperienceSection id="experiencia" />
        <CertificationsSection />
        <CollaborationSection />
        <ContentSection />
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
