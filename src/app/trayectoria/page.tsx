import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Navbar } from "@/components/layout/Navbar";
import { LocalNav } from "@/components/layout/LocalNav";
import { Footer } from "@/components/layout/Footer";
import { ScrollTop } from "@/components/layout/ScrollTop";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { StackShowcaseSection } from "@/components/sections/StackShowcaseSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Trayectoria: Experiencia, Stack y Certificaciones",
  description:
    "Trayectoria profesional de Carlos Martínez: 15+ años en banca, e-commerce, utilities y SaaS. Stack técnico con Java, Spring Boot, cloud y más. Certificaciones y formación continua.",
  path: "/trayectoria/",
});

const localNavItems = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Stack", href: "#stack" },
  { label: "Certificaciones", href: "#certificaciones" },
];

export default function TrayectoriaPage() {
  return (
    <PageWrapper pageClass="page-trayectoria">
      <Navbar />
      <main style={{ paddingTop: "var(--header-height)" }}>
        <LocalNav items={localNavItems} />

        <PageHeroSection
          eyebrow="Trayectoria"
          title="Qué experiencia tengo y con qué trabajo."
          lead="15+ años construyendo sistemas en industrias reales. Aquí resumo el recorrido profesional, el stack técnico que manejo y las certificaciones que respaldan mi formación continua."
        />

        <ExperienceSection id="experiencia" />

        <StackShowcaseSection />

        <CertificationsSection />

        <div className="section">
          <div className="container">
            <div className="flex flex-wrap gap-4">
              <Link className="card-link-custom" href="/especialidades/">
                Ver especialidades →
              </Link>
              <Link className="card-link-custom" href="/proyectos/">
                Ver proyectos →
              </Link>
            </div>
          </div>
        </div>

        <CTASection
          id="contacto-trayectoria"
          eyebrow="Trayectoria"
          title="¿Quieres conocer más sobre mi experiencia?"
          lead="Puedo compartir más contexto sobre mi trayectoria, industrias en las que he trabajado y cómo mi experiencia puede ayudarte."
          primaryHref="/recursos-contacto/#contacto"
          primaryLabel="Hablemos"
        />
      </main>
      <Footer />
      <ScrollTop />
    </PageWrapper>
  );
}
