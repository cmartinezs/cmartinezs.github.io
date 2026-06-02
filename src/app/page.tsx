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
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Software Developer & Docente",
  description:
    "Carlos Martínez, software developer backend specialist, docente universitario y creador de soluciones con IA. 15+ años de experiencia en Java, Spring Boot, React, Kotlin.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <TrustSection />
        <ProjectHighlightSection />
        <StackShowcaseSection />
        <ContentSection />
        <CTASection
          eyebrow="Contacto"
          title="¿Tienes una idea, sistema o equipo que necesita apoyo técnico?"
          lead="Puedo ayudarte a diseñar una solución, mejorar una arquitectura, construir una API, formar desarrolladores o explorar automatización con IA."
          primaryHref="/contacto/?topic=colaboracion"
          primaryLabel="Formulario de contacto"
          secondaryLinks={[
            {
              href: "https://github.com/cmartinezs",
              label: "GitHub",
              icon: "bi-github",
              external: true,
            },
            {
              href: "https://www.linkedin.com/in/cfms",
              label: "LinkedIn",
              icon: "bi-linkedin",
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
