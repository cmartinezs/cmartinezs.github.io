import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollTop } from "@/components/layout/ScrollTop";
import { HeroSection } from "@/components/sections/HeroSection";

export const metadata: Metadata = buildMetadata({
  title: "Backend, Arquitectura y Formación Técnica",
  description:
    "Desarrollador backend senior y docente técnico con 15+ años en sistemas reales. Diseño APIs y arquitecturas mantenibles, acompaño equipos en decisiones técnicas y transfiero criterio a través de la formación aplicada.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="home-page">
      <Navbar />
      <main className="home-main">
        <HeroSection />
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}
