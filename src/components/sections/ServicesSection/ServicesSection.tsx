import { ServicesCarousel } from "@/components/components/ServicesCarousel";

export function ServicesSection() {
  return (
    <section className="section" id="servicios">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Qué hago</span>
          <h2 className="display-heading display-5 mt-3">
            Desarrollo, arquitectura, formación e IA aplicada desde experiencia real.
          </h2>
          <p className="mt-3">
            Puedo ayudarte a construir una API, mejorar una arquitectura, crear una interfaz web,
            formar desarrolladores o incorporar herramientas de IA a un flujo de trabajo técnico.
          </p>
        </div>
        <ServicesCarousel />
      </div>
    </section>
  );
}
