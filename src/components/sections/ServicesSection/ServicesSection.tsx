import { services } from "@/data/services.data";
import { ServicesCarousel } from "@/components/components/ServicesCarousel";

export function ServicesSection() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Qué hago</span>
          <h2 className="display-heading display-5 mt-3">
            Qué puedo hacer por tu equipo o proyecto.
          </h2>
          <p className="mt-3">
            Acompaño proyectos y equipos desde tres frentes principales: desarrollo backend,
            arquitectura de software y formación técnica aplicada. Cuando el proyecto lo requiere,
            también apoyo en automatización, frontend y mobile.
          </p>
        </div>

        <ServicesCarousel services={services} />
      </div>
    </section>
  );
}
