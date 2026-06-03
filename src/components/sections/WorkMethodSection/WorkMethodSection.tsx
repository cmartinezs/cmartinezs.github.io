import { workMethodContent } from "@/data/workMethod.data";

export function WorkMethodSection() {
  const { principles } = workMethodContent;

  return (
    <section className="section" id="metodo">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Forma de trabajo</span>
          <h2 className="display-heading display-5 mt-3">
            Cómo pienso y trabajo con un equipo o proyecto.
          </h2>
          <p className="mt-3">
            Más que herramientas o frameworks, lo que define mi trabajo es el criterio con el que
            enfrento cada decisión técnica. Estos principios guían cómo diseño, colaboro y transfiero
            conocimiento.
          </p>
        </div>

        <div className="work-method-grid">
          {principles.map((principle) => (
            <div key={principle.id} className="method-card">
              <div className="method-card-icon" aria-hidden="true">
                <i className={`bi ${principle.icon}`} />
              </div>
              <h3>{principle.title}</h3>
              <p className="method-card-description">{principle.description}</p>
              {principle.evidence && (
                <p className="method-card-evidence">{principle.evidence}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
