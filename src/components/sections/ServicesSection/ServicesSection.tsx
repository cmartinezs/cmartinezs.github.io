import { services } from "@/data/services.data";
import { ServicesCarousel } from "@/components/components/ServicesCarousel";

export function ServicesSection() {
  return (
    <section className="section" id="servicios">
      {/* Anchor targets for sub-navigation from Secciones dropdown */}
      <span id="backend" aria-hidden="true" className="section-anchor" />
      <span id="arquitectura" aria-hidden="true" className="section-anchor" />
      <span id="mentoria" aria-hidden="true" className="section-anchor" />
      <span id="docencia" aria-hidden="true" className="section-anchor" />
      <span id="frontend" aria-hidden="true" className="section-anchor" />
      <span id="mobile" aria-hidden="true" className="section-anchor" />
      <span id="herramientas-ia" aria-hidden="true" className="section-anchor" />
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
