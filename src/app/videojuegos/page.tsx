import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollTop } from "@/components/layout/ScrollTop";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { GamesSection } from "@/components/sections/GamesSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Videojuegos",
  description:
    "Proyectos de videojuegos como exploración creativa y técnica. Experimentos con Canvas 2D, física, mecánicas y lógica de juego.",
  path: "/videojuegos/",
});

export default function VideojuegosPage() {
  return (
    <PageWrapper pageClass="page-videojuegos">
      <Navbar />
      <main>
        <PageHeroSection
          eyebrow="Videojuegos"
          title="Exploración creativa aplicando lógica de desarrollo a mecánicas de juego."
          lead="Prototipos y experimentos donde combino desarrollo web con física, gráficos y diseño de mecánicas interactivas usando Canvas 2D y arquitecturas orientadas a eventos."
        />

        <GamesSection />

        <CTASection
          eyebrow="Proyectos propios"
          title="Desarrollo técnico más allá del trabajo profesional."
          lead="Si tienes curiosidad por cómo están construidos estos proyectos o quieres colaborar en algo similar, conversemos."
          primaryHref="/contacto/?topic=videojuegos"
          primaryLabel="Hablemos"
        />
      </main>
      <Footer />
      <ScrollTop />
    </PageWrapper>
  );
}
