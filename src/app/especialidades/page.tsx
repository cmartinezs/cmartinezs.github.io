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
import { CoursesSection } from "@/components/sections/CoursesSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Especialidades: Backend, Arquitectura, Mentoría y Docencia",
  description:
    "Especialidades técnicas de Carlos Martínez: backend con Java y Spring Boot, arquitectura de software, mentoría a equipos y docencia técnica aplicada.",
  path: "/especialidades/",
});

const localNavItems = [
  { label: "Backend", href: "#backend" },
  { label: "Arquitectura", href: "#arquitectura" },
  { label: "Mentoría", href: "#mentoria" },
  { label: "Docencia", href: "#docencia" },
];

export default function EspecialidadesPage() {
  return (
    <PageWrapper pageClass="page-especialidades">
      <Navbar />
      <main style={{ paddingTop: "var(--header-height)" }}>
        <LocalNav items={localNavItems} />

        <PageHeroSection
          eyebrow="Especialidades"
          title="En qué soy fuerte profesionalmente."
          lead="Backend, arquitectura, mentoría y docencia son mi foco principal. Aquí profundizo en cada área: qué hago, cómo pienso el problema y cómo puedo ayudarte."
        />

        {/* ── Backend ──────────────────────────────────────────────── */}
        <section className="section" id="backend">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">Backend · core</span>
              <h2 className="display-heading display-5 mt-3">
                Backend robusto para sistemas que necesitan integrarse, mantenerse y crecer.
              </h2>
              <p className="mt-3">
                Diseño y desarrollo APIs, servicios y componentes backend con Java, Spring Boot
                y arquitectura limpia, cuidando mantenibilidad, calidad e integración con sistemas
                reales.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6 mt-6">
              <GlassCard as="article">
                <h3 className="h3">Bloques técnicos</h3>
                <ul className="feature-list mt-3">
                  <li>APIs REST: contratos claros, autenticación, validación y documentación.</li>
                  <li>Arquitectura: separación de responsabilidades, Clean Architecture, patrones y SOLID.</li>
                  <li>Integración: comunicación entre sistemas, servicios externos, colas y procesamiento asíncrono.</li>
                  <li>Calidad: testing, revisión de código, SonarQube, JMeter, Selenium, refactorización y documentación técnica.</li>
                  <li>Liderazgo técnico: estándares, mentoría y acompañamiento a equipos.</li>
                </ul>
              </GlassCard>
              <GlassCard as="article">
                <h3 className="h3">Problemas que puedo resolver</h3>
                <ul className="feature-list mt-3">
                  <li>Tu backend creció sin estructura clara.</li>
                  <li>Necesitas integrar sistemas que hoy trabajan aislados.</li>
                  <li>Tu equipo requiere estándares técnicos y revisión de código.</li>
                  <li>Debes crear una API nueva sin sobreingeniería.</li>
                  <li>Hay deuda técnica que impide evolucionar con seguridad.</li>
                </ul>
              </GlassCard>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link className="btn-primary-custom" href="/recursos-contacto/#contacto">
                Hablemos de backend
              </Link>
            </div>
          </div>
        </section>

        {/* ── Arquitectura ─────────────────────────────────────────── */}
        <section className="section" id="arquitectura">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">Arquitectura de software</span>
              <h2 className="display-heading display-5 mt-3">
                Decisiones técnicas claras para software que pueda evolucionar.
              </h2>
              <p className="mt-3">
                Ayudo a ordenar sistemas, definir límites, reducir deuda técnica y diseñar
                soluciones backend mantenibles sin caer en sobreingeniería.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <GlassCard as="article">
                <h3 className="h4">Diseño de soluciones</h3>
                <p className="text-muted-custom">
                  Análisis técnico, separación de responsabilidades, definición de componentes y
                  criterios para tomar decisiones sostenibles.
                </p>
              </GlassCard>
              <GlassCard as="article">
                <h3 className="h4">Clean Architecture</h3>
                <p className="text-muted-custom">
                  Aplicación pragmática de arquitectura limpia, hexagonal, patrones y SOLID para
                  mejorar mantenibilidad y testabilidad.
                </p>
              </GlassCard>
              <GlassCard as="article">
                <h3 className="h4">Calidad y pruebas</h3>
                <p className="text-muted-custom">
                  Mejora incremental de código existente con revisión técnica, SonarQube para
                  calidad, JMeter para carga y Selenium para pruebas end-to-end.
                </p>
              </GlassCard>
              <GlassCard as="article">
                <h3 className="h4">Evolución de sistemas</h3>
                <p className="text-muted-custom">
                  Diseño de rutas de migración, refactoring estratégico y criterio técnico para
                  llevar sistemas legacy hacia arquitecturas más mantenibles.
                </p>
              </GlassCard>
              <GlassCard as="article">
                <h3 className="h4">Revisión de arquitectura</h3>
                <p className="text-muted-custom">
                  Análisis del estado técnico actual, identificación de riesgos y propuesta de
                  mejoras priorizadas según impacto y contexto del equipo.
                </p>
              </GlassCard>
              <GlassCard as="article">
                <h3 className="h4">Criterio técnico compartido</h3>
                <p className="text-muted-custom">
                  Transferencia de criterio de diseño a equipos: cómo tomar decisiones, cuándo
                  simplificar y cómo mantener la visión técnica coherente.
                </p>
              </GlassCard>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link className="card-link-custom" href="/recursos-contacto/#contacto">
                Solicitar revisión de arquitectura →
              </Link>
            </div>
          </div>
        </section>

        {/* ── Mentoría ─────────────────────────────────────────────── */}
        <section className="section" id="mentoria">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">Mentoría técnica</span>
              <h2 className="display-heading display-5 mt-3">
                Acompañamiento técnico para crecer con dirección.
              </h2>
              <p className="mt-3">
                Mentoría para desarrolladores y equipos que necesitan mejorar criterio técnico,
                revisar proyectos, preparar entrevistas o consolidar buenas prácticas.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              <GlassCard as="article">
                <h3 className="h4">Java y Spring Boot</h3>
                <p className="text-muted-custom">
                  Diseño de APIs, capas, testing, integración y buenas prácticas backend.
                </p>
              </GlassCard>
              <GlassCard as="article">
                <h3 className="h4">Frontend y mobile</h3>
                <p className="text-muted-custom">
                  Revisión de proyectos con React, Angular, Ionic y Kotlin desde una mirada
                  práctica y mantenible.
                </p>
              </GlassCard>
              <GlassCard as="article">
                <h3 className="h4">Calidad y pruebas</h3>
                <p className="text-muted-custom">
                  Feedback sobre SonarQube, testing automatizado, Selenium, pruebas de carga con
                  JMeter y mantenibilidad.
                </p>
              </GlassCard>
              <GlassCard as="article">
                <h3 className="h4">Entrevistas</h3>
                <p className="text-muted-custom">
                  Preparación técnica, explicación de experiencia, resolución de problemas y
                  criterio profesional.
                </p>
              </GlassCard>
            </div>
            <div className="mt-6">
              <GlassCard as="div">
                <h3 className="h4">Para quiénes está pensada</h3>
                <div className="grid md:grid-cols-3 gap-4 mt-3">
                  <div>
                    <p className="text-muted-custom"><strong style={{ color: "var(--text)" }}>Perfiles junior y mid</strong> que necesitan un referente técnico que revise sus decisiones y los ayude a crecer con criterio.</p>
                  </div>
                  <div>
                    <p className="text-muted-custom"><strong style={{ color: "var(--text)" }}>Equipos sin tech lead</strong> que requieren acompañamiento periódico en arquitectura, código y buenas prácticas.</p>
                  </div>
                  <div>
                    <p className="text-muted-custom"><strong style={{ color: "var(--text)" }}>Desarrolladores senior</strong> que quieren contrastar su visión técnica o prepararse para roles de mayor responsabilidad.</p>
                  </div>
                </div>
              </GlassCard>
            </div>
            <div className="flex flex-wrap gap-4 mt-6">
              <Link className="btn-primary-custom" href="/recursos-contacto/#contacto">
                Solicitar mentoría
              </Link>
            </div>
          </div>
        </section>

        {/* ── Docencia ─────────────────────────────────────────────── */}
        <section className="section" id="docencia">
          <div className="container">
            <div className="section-title">
              <span className="eyebrow">Docencia técnica</span>
              <h2 className="display-heading display-5 mt-3">
                Formación técnica basada en práctica real de desarrollo de software.
              </h2>
              <p className="mt-3">
                Enseño programación, backend, frontend, desarrollo móvil con Ionic/Angular y
                Kotlin, bases de datos y arquitectura conectando fundamentos, ejercicios guiados
                y proyectos aplicados.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mt-6">
              <GlassCard as="article">
                <span className="service-icon">01</span>
                <h3 className="h4">Método práctico</h3>
                <p className="text-muted-custom">
                  Primero fundamentos claros, luego ejercicios guiados, después proyectos
                  aplicados y finalmente revisión crítica del código.
                </p>
              </GlassCard>
              <GlassCard as="article">
                <span className="service-icon">02</span>
                <h3 className="h4">Públicos</h3>
                <p className="text-muted-custom">
                  Para alumnos: bases sólidas. Para equipos: buenas prácticas, arquitectura, Git,
                  APIs y calidad. Para mentorías: revisión de proyectos y carrera técnica.
                </p>
              </GlassCard>
              <GlassCard as="article">
                <span className="service-icon">03</span>
                <h3 className="h4">Contenidos</h3>
                <p className="text-muted-custom">
                  Programación desde cero, Java, OOP, Spring Boot, frontend con React/Angular,
                  mobile con Ionic/Kotlin, bases de datos, APIs REST, arquitectura, testing,
                  SonarQube, JMeter y Selenium.
                </p>
              </GlassCard>
            </div>
          </div>
        </section>

        <CoursesSection />

        <CTASection
          id="contacto-especialidades"
          eyebrow="Especialidades"
          title="Hablemos de tu proyecto, equipo o programa."
          lead="Si necesitas backend sólido, revisión de arquitectura, mentoría técnica o formación aplicada, conversemos."
          primaryHref="/recursos-contacto/#contacto"
          primaryLabel="Iniciar conversación"
        />
      </main>
      <Footer />
      <ScrollTop />
    </PageWrapper>
  );
}
