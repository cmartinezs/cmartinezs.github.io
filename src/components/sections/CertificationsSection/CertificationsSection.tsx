import { GlassCard } from "@/components/sub-components/GlassCard";
import {
  featuredCertifications,
  technicalCourses,
  complementaryLearning,
} from "@/data/certifications.data";

export function CertificationsSection() {
  return (
    <>
      <section className="section" id="destacadas">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Credenciales destacadas</span>
            <h2 className="display-heading display-5 mt-3">
              Certificaciones que respaldan liderazgo y base técnica.
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {featuredCertifications.map((cert) => (
              <div key={cert.id}>
                <GlassCard as="article">
                  <span className="service-icon">{cert.year.slice(-2)}</span>
                  <h3 className="h4">{cert.title}</h3>
                  <p className="text-muted-custom">{cert.description}</p>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="formacion">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <GlassCard as="article">
                <h2 className="h3">Cursos técnicos</h2>
                <ul className="feature-list mt-3">
                  {technicalCourses.map((course) => (
                    <li key={course}>{course}</li>
                  ))}
                </ul>
              </GlassCard>
            </div>
            <div>
              <GlassCard as="article">
                <h2 className="h3">Aprendizaje complementario</h2>
                <p className="text-muted-custom">
                  Además de certificaciones técnicas, mantengo formación complementaria en inglés y
                  práctica continua en frontend/mobile con Angular, Ionic y Kotlin.
                </p>
                <ul className="feature-list mt-3">
                  {complementaryLearning.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
