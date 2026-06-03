import Link from "next/link";

export function TrustSection() {
  return (
    <section className="section" id="confianza">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <span className="eyebrow">Trayectoria real</span>
            <h2 className="display-heading display-5 mt-4">
              Experiencia técnica en proyectos reales, no solo teoría.
            </h2>
          </div>
          <div>
            <p className="text-muted-custom text-lg">
              He participado en proyectos en producción para empresas de tecnología, banca, consultoría
              y servicios, combinando desarrollo backend, liderazgo técnico, arquitectura de software
              y docencia.
            </p>
            <ul className="feature-list mt-6">
              <li>Liderazgo técnico en equipos de desarrollo.</li>
              <li>Diseño y evolución de soluciones backend.</li>
              <li>Experiencia en Java, Spring Boot, cloud, Docker y Kubernetes.</li>
              <li>Docencia en programación, backend, arquitectura y tecnologías móviles.</li>
            </ul>
            <div className="flex flex-wrap gap-4 mt-4">
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
