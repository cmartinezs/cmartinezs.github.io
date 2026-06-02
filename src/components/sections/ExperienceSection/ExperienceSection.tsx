import { ExperienceTimeline } from "./ExperienceTimeline";

interface Props {
  id?: string;
}

export function ExperienceSection({ id = "historias" }: Props) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Relatos profesionales</span>
          <h2 className="display-heading display-5 mt-3">
            Experiencias resumidas como aprendizajes aplicables.
          </h2>
          <p className="mt-3">
            Los nombres de empresas ayudan a contextualizar la trayectoria, pero el foco está en el
            trabajo realizado, los desafíos enfrentados y lo aprendido.
          </p>
        </div>
        <ExperienceTimeline />
      </div>
    </section>
  );
}
