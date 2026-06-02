import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollTop } from "@/components/layout/ScrollTop";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { GlassCard } from "@/components/sub-components/GlassCard";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { CTASection } from "@/components/sections/CTASection";

export const metadata: Metadata = buildMetadata({
  title: "Docencia",
  description:
    "Formación técnica en programación, backend, frontend mobile y arquitectura. Docencia en DuocUC y proyectos educativos.",
  path: "/docencia/",
});

export default function DocenciaPage() {
  return (
    <PageWrapper pageClass="page-docencia">
      <Navbar />
      <main>
        <PageHeroSection
          eyebrow="Docencia"
          title="Formación técnica basada en práctica real de desarrollo de software."
          lead="Enseño programación, backend, frontend, desarrollo móvil con Ionic/Angular y Kotlin, bases de datos y arquitectura conectando fundamentos, ejercicios guiados y proyectos aplicados."
        />

        <section className="section" id="metodo">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <GlassCard as="article">
                  <span className="service-icon">01</span>
                  <h2 className="h4">Método práctico</h2>
                  <p className="text-muted-custom">
                    Primero fundamentos claros, luego ejercicios guiados, después proyectos
                    aplicados y finalmente revisión crítica del código.
                  </p>
                </GlassCard>
              </div>
              <div>
                <GlassCard as="article">
                  <span className="service-icon">02</span>
                  <h2 className="h4">Públicos</h2>
                  <p className="text-muted-custom">
                    Para alumnos: bases sólidas. Para equipos: buenas prácticas, arquitectura, Git,
                    APIs y calidad. Para mentorías: revisión de proyectos y carrera técnica.
                  </p>
                </GlassCard>
              </div>
              <div>
                <GlassCard as="article">
                  <span className="service-icon">03</span>
                  <h2 className="h4">Contenidos</h2>
                  <p className="text-muted-custom">
                    Programación desde cero, Java, OOP, Spring Boot, frontend con React/Angular,
                    mobile con Ionic/Kotlin, bases de datos, APIs REST, arquitectura, testing,
                    SonarQube, JMeter y Selenium.
                  </p>
                </GlassCard>
              </div>
            </div>
          </div>
        </section>

        <CoursesSection />

        <CTASection
          eyebrow="Formación técnica"
          title="Aprendizaje técnico con base en experiencia real."
          lead="Si necesitas formación para tu equipo, mentoría técnica o materiales educativos, conversemos."
          primaryHref="/contacto/?topic=docencia"
          primaryLabel="Hablemos de formación"
        />
      </main>
      <Footer />
      <ScrollTop />
    </PageWrapper>
  );
}
