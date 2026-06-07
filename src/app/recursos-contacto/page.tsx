import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Navbar } from "@/components/layout/Navbar";
import { LocalNav } from "@/components/layout/LocalNav";
import { Footer } from "@/components/layout/Footer";
import { ScrollTop } from "@/components/layout/ScrollTop";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { CollaborationSection } from "@/components/sections/CollaborationSection";
import { ContentSection } from "@/components/sections/ContentSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Recursos, Alianzas y Contacto",
  description:
    "Colabora con Carlos Martínez: alianzas estratégicas, recursos y materiales técnicos, y vías de contacto para proyectos, consultoría o mentoring.",
  path: "/recursos-contacto/",
});

const localNavItems = [
  { label: "Alianzas", href: "#alianzas" },
  { label: "Recursos", href: "#recursos" },
  { label: "Contacto", href: "#contacto" },
];

export default function RecursosContactoPage() {
  return (
    <PageWrapper pageClass="page-recursos-contacto">
      <Navbar />
      <main>
        <LocalNav
          items={localNavItems}
          homeHref="/recursos-contacto/"
          homeLabel="Recursos"
        />

        <PageHeroSection
          eyebrow="Recursos y contacto"
          title="Cómo colaborar, qué compartir y cómo contactarme."
          lead="Esta sección reúne los perfiles con los que trabajo mejor, los recursos y materiales que comparto, y las vías para iniciar una conversación."
        />

        <CollaborationSection />

        <ContentSection />

        <CTASection
          eyebrow="Contacto"
          title="Hablemos si tienes algo concreto en mente."
          lead="Un proyecto backend, una revisión de arquitectura, un programa de formación o una alianza estratégica. Cuéntame qué necesitas."
          primaryHref="/contacto/?topic=colaboracion"
          primaryLabel="Abrir formulario de contacto"
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
    </PageWrapper>
  );
}
