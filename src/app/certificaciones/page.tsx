import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollTop } from "@/components/layout/ScrollTop";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Certificaciones",
  description:
    "Certificaciones en liderazgo de proyectos, Java SE 8, Kotlin y formación técnica continua.",
  path: "/certificaciones/",
});

export default function CertificacionesPage() {
  return (
    <PageWrapper pageClass="page-certificaciones">
      <Navbar />
      <main>
        <PageHeroSection
          eyebrow="Certificaciones"
          title="Formación continua para sostener criterio técnico actualizado."
          lead="Mi trayectoria combina experiencia productiva con aprendizaje permanente en Java, liderazgo de proyectos, Kotlin, Spring, Angular, Ionic, requisitos, JSF, JSP e inglés técnico."
        />
        <CertificationsSection />
        <CTASection
          eyebrow="Mejora continua"
          title="La experiencia importa, pero actualizarse también."
          lead="Estas certificaciones complementan mi trabajo diario en desarrollo, liderazgo técnico y docencia."
          primaryHref="/contacto/?topic=certificaciones"
          primaryLabel="Conversemos"
        />
      </main>
      <Footer />
      <ScrollTop />
    </PageWrapper>
  );
}
