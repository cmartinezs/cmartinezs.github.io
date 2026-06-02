import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollTop } from "@/components/layout/ScrollTop";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { GlassCard } from "@/components/sub-components/GlassCard";

export const metadata: Metadata = buildMetadata({
  title: "KeyGo",
  description:
    "KeyGo: autenticación como servicio SaaS multi-tenant. Proyecto en desarrollo para simplificar identidad y auth.",
  path: "/keygo/",
});

const roadmapItems = [
  "Definir modelo multi-tenant y organizaciones.",
  "Gestión de usuarios, roles y permisos.",
  "Autenticación centralizada para aplicaciones.",
  "Tokens para apps y usuarios.",
  "Documentar arquitectura propuesta y decisiones técnicas.",
];

export default function KeyGoPage() {
  return (
    <PageWrapper pageClass="page-keygo">
      <Navbar />
      <main>
        <PageHeroSection
          eyebrow="KeyGo"
          title="Autenticación como servicio, pensada como proyecto SaaS multi-tenant."
          lead="KeyGo es una iniciativa en desarrollo para simplificar la autenticación de aplicaciones y usuarios. La presento como línea de trabajo y aprendizaje público, no como producto comercial finalizado."
        />

        <section className="section">
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-6">
                <GlassCard as="article">
                  <h2 className="h3">Problema que busca resolver</h2>
                  <p className="text-muted-custom">
                    Muchos productos pequeños y medianos necesitan identidad, usuarios, roles y
                    tokens, pero terminan reinventando autenticación en cada proyecto.
                  </p>
                </GlassCard>
              </div>
              <div className="col-lg-6">
                <GlassCard as="article">
                  <h2 className="h3">Público objetivo</h2>
                  <p className="text-muted-custom">
                    Startups, MVPs, herramientas internas y desarrolladores que necesitan una base
                    clara de autenticación sin construir todo desde cero.
                  </p>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="roadmap">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">Roadmap</span>
              <h2 className="display-heading display-5 mt-3">Próximos hitos del proyecto.</h2>
            </div>
            <ul className="feature-list">
              {roadmapItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section" id="aprendizajes">
          <div className="container">
            <div className="cta p-4 p-lg-5">
              <span className="eyebrow">Aprendizajes</span>
              <h2 className="display-heading display-5 mt-3">Construcción pública y criterio técnico.</h2>
              <p className="text-muted-custom fs-5 mb-0">
                KeyGo también será un espacio para documentar decisiones de arquitectura,
                trade-offs, errores, aprendizajes y evolución técnica de una plataforma SaaS.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </PageWrapper>
  );
}
