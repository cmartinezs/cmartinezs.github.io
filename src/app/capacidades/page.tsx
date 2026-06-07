import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Navbar } from "@/components/layout/Navbar";
import { LocalNav } from "@/components/layout/LocalNav";
import { Footer } from "@/components/layout/Footer";
import { ScrollTop } from "@/components/layout/ScrollTop";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { GlassCard } from "@/components/sub-components/GlassCard";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Capacidades: Frontend, Mobile y Herramientas con IA",
  description:
    "Capacidades complementarias de Carlos Martínez: frontend integrado con APIs, aplicaciones móviles con Ionic y Kotlin, y herramientas con IA aplicada al desarrollo y la productividad.",
  path: "/capacidades/",
});

const localNavItems = [
  { label: "Frontend", href: "#frontend" },
  { label: "Mobile", href: "#mobile" },
  { label: "Herramientas con IA", href: "#herramientas-ia" },
];

export default function CapacidadesPage() {
  return (
    <PageWrapper pageClass="page-capacidades">
      <Navbar />
      <main>
        <LocalNav
          items={localNavItems}
          homeHref="/capacidades/"
          homeLabel="Capacidades"
        />

        <PageHeroSection
          eyebrow="Capacidades complementarias"
          title="Amplitud técnica alrededor del foco principal."
          lead="Frontend, mobile e IA aplicada son capacidades que complementan mi especialización en backend y arquitectura. Las uso cuando el proyecto las requiere o cuando ayudan a integrar mejor las piezas del sistema."
        />

        {/* ── Frontend ─────────────────────────────────────────────── */}
        <section className="section" id="frontend">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">Frontend</span>
              <h2 className="display-heading display-5 mt-3">
                Interfaces web claras, responsive y conectadas a sistemas reales.
              </h2>
              <p className="mt-3">
                Desarrollo frontend funcional para landing pages, aplicaciones web, formularios,
                dashboards e interfaces que necesitan integrarse con APIs y flujos de negocio reales.
                No es mi foco principal, pero me permite colaborar mejor con equipos fullstack y
                entregar productos cohesivos.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <GlassCard as="article">
                <span className="service-icon">UI</span>
                <h3 className="h4">Producto antes que decoración</h3>
                <p className="text-muted-custom">
                  Interfaces que no solo se ven bien: comunican, responden en distintos dispositivos
                  y se integran correctamente con APIs y servicios reales.
                </p>
              </GlassCard>
              <GlassCard as="article">
                <span className="service-icon">UX</span>
                <h3 className="h4">Entregables concretos</h3>
                <p className="text-muted-custom">
                  Landing pages profesionales, dashboards internos, formularios conectados a
                  backend, flujos de usuario e interfaces para productos SaaS o sistemas
                  empresariales.
                </p>
              </GlassCard>
              <GlassCard as="article">
                <span className="service-icon">API</span>
                <h3 className="h4">Integración real</h3>
                <p className="text-muted-custom">
                  Trabajo con HTML, CSS, JavaScript, React, Bootstrap, Angular e Ionic según el
                  contexto técnico del proyecto.
                </p>
              </GlassCard>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link className="card-link-custom" href="/recursos-contacto/#contacto">
                Hablemos de frontend →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Mobile ───────────────────────────────────────────────── */}
        <section className="section" id="mobile">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">Mobile</span>
              <h2 className="display-heading display-5 mt-3">
                Aplicaciones móviles con foco en integración y base técnica sólida.
              </h2>
              <p className="mt-3">
                Desarrollo y enseño aplicaciones móviles desde un enfoque práctico: interfaces
                claras, consumo de APIs, integración con servicios backend y bases sólidas para
                construir soluciones mantenibles.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <GlassCard as="article">
                <span className="service-icon">
                  <i className="devicon-ionic-original" aria-hidden="true" />
                </span>
                <h3 className="h4">Ionic + Angular</h3>
                <p className="text-muted-custom">
                  Aplicaciones híbridas para avanzar rápido, reutilizar conocimiento web e integrar
                  servicios móviles.
                </p>
              </GlassCard>
              <GlassCard as="article">
                <span className="service-icon">
                  <i className="devicon-kotlin-plain" aria-hidden="true" />
                </span>
                <h3 className="h4">Kotlin + Compose</h3>
                <p className="text-muted-custom">
                  Fundamentos de desarrollo móvil nativo, interfaces modernas y estructura clara
                  para aprendizaje y producto.
                </p>
              </GlassCard>
              <GlassCard as="article">
                <span className="service-icon">API</span>
                <h3 className="h4">Integración con backend</h3>
                <p className="text-muted-custom">
                  Consumo de APIs, autenticación, Firebase y conexión con servicios backend reales.
                  Puente natural con mi especialización en backend.
                </p>
              </GlassCard>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link className="card-link-custom" href="/recursos-contacto/#contacto">
                Hablemos de mobile →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Herramientas con IA ──────────────────────────────────── */}
        <section className="section" id="herramientas-ia">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">Herramientas con IA</span>
              <h2 className="display-heading display-5 mt-3">
                IA aplicada al desarrollo, la documentación y el aprendizaje técnico.
              </h2>
              <p className="mt-3">
                Uso inteligencia artificial como apoyo práctico para acelerar tareas, ordenar
                información, generar recursos y mejorar flujos de trabajo. Siempre con revisión
                y criterio técnico humano. No me posiciono como AI engineer: la IA es una
                herramienta que uso, no un fin en sí mismo.
              </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 mt-6">
              <GlassCard as="article">
                <h3 className="h4">Casos de uso aplicados</h3>
                <p className="text-muted-custom">
                  Documentación técnica asistida, generación de material educativo, prompts para
                  análisis de código y requisitos, resumen de información compleja.
                </p>
              </GlassCard>
              <GlassCard as="article">
                <h3 className="h4">Productividad técnica</h3>
                <p className="text-muted-custom">
                  Automatización de tareas repetitivas, apoyo a estudio, planificación, revisión
                  de soluciones y preparación de contenido técnico o docente.
                </p>
              </GlassCard>
              <GlassCard as="article">
                <h3 className="h4">Criterio humano sobre IA</h3>
                <p className="text-muted-custom">
                  No presento la IA como reemplazo del criterio profesional. Es una herramienta
                  para pensar, construir y enseñar mejor. El resultado siempre pasa por revisión
                  técnica.
                </p>
              </GlassCard>
            </div>
            <div className="mt-6">
              <GlassCard as="div">
                <p className="text-muted-custom">
                  <strong style={{ color: "var(--text)" }}>Nota sobre posicionamiento:</strong>{" "}
                  Prefiero el término &ldquo;herramientas con IA&rdquo; o &ldquo;IA aplicada&rdquo; al de &ldquo;AI engineer&rdquo;. La IA
                  complementa mi trabajo en backend, arquitectura y docencia. No es un servicio
                  independiente ni mi foco central.
                </p>
              </GlassCard>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link className="card-link-custom" href="/recursos-contacto/#contacto">
                Hablemos de IA aplicada →
              </Link>
            </div>
          </div>
        </section>

        <CTASection
          id="contacto-capacidades"
          eyebrow="Capacidades complementarias"
          title="¿Necesitas frontend, mobile o integración con IA?"
          lead="Puedo ayudarte con interfaces conectadas al backend, apps móviles o integrar herramientas de IA en tu flujo de trabajo."
          primaryHref="/recursos-contacto/#contacto"
          primaryLabel="Conversemos"
        />
      </main>
      <Footer />
      <ScrollTop />
    </PageWrapper>
  );
}
