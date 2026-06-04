import { GlassCard } from "@/components/sub-components/GlassCard";
import { CertificationsTimeline } from "./CertificationsTimeline";
import { TechnicalCoursesGrid } from "./TechnicalCoursesGrid";
import { complementaryLearning } from "@/data/certifications.data";

export function CertificationsSection() {
  return (
    <div id="certificaciones">
      <section className="section" id="destacadas">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Credenciales destacadas</span>
            <h2 className="display-heading display-5 mt-3">
              Certificaciones que respaldan liderazgo y base técnica.
            </h2>
          </div>
          <CertificationsTimeline />
        </div>
      </section>

      <section className="section" id="formacion">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Formación técnica</span>
            <h2 className="display-heading display-5 mt-3">
              Cursos técnicos certificados.
            </h2>
          </div>

          <TechnicalCoursesGrid />

          <div className="mt-8">
            <GlassCard as="article">
              <h2 className="h3">Aprendizaje complementario</h2>
              <p className="text-muted-custom mt-2">
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
      </section>
    </div>
  );
}
