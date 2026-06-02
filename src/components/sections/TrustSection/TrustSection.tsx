import Link from "next/link";

export function TrustSection() {
  return (
    <section className="section" id="confianza">
      <div className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <span className="eyebrow">Por qué confiar</span>
            <h2 className="display-heading display-5 mt-3">
              Experiencia técnica en proyectos reales, no solo teoría.
            </h2>
          </div>
          <div className="col-lg-6">
            <p className="text-muted-custom fs-5">
              He participado en proyectos productivos para empresas de tecnología, banca, consultoría
              y servicios, combinando desarrollo, liderazgo técnico, revisión de código, arquitectura,
              integración de sistemas y docencia.
            </p>
            <ul className="feature-list mt-4">
              <li>Liderazgo técnico en equipos de desarrollo.</li>
              <li>Diseño y evolución de soluciones backend.</li>
              <li>Experiencia en Java, Spring Boot, cloud, Docker y Kubernetes.</li>
              <li>
                Docencia en programación, fullstack, móvil con Ionic/Kotlin, bases de datos y
                arquitectura.
              </li>
            </ul>
            <div className="d-flex flex-wrap gap-3 mt-3">
              <Link className="card-link-custom" href="/experiencia/">
                Ver experiencia profesional
              </Link>
              <Link className="card-link-custom" href="/certificaciones/">
                Ver certificaciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
