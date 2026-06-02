"use client";

import { GlassCard } from "@/components/sub-components/GlassCard";
import { ServiceCardBody } from "@/components/sub-components/ServiceCardBody";
import { useCarousel } from "@/hooks/useCarousel";
import { services } from "@/data/services.data";

export function ServicesCarousel() {
  const { trackRef, translateX, goNext, goPrev } = useCarousel(services.length);

  return (
    <div className="services-carousel">
      <div className="services-carousel-toolbar">
        <div
          className="services-carousel-controls"
          role="group"
          aria-label="Controles del carrusel de servicios"
        >
          <button
            className="services-carousel-control"
            type="button"
            onClick={goPrev}
            aria-label="Ver servicios anteriores"
          >
            <i className="bi bi-arrow-left" aria-hidden="true" />
          </button>
          <button
            className="services-carousel-control"
            type="button"
            onClick={goNext}
            aria-label="Ver servicios siguientes"
          >
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="services-carousel-viewport">
        <div
          ref={trackRef}
          className="services-carousel-track"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {services.map((service) => (
            <GlassCard key={service.id} as="article" className="services-carousel-slide">
              <ServiceCardBody service={service} />
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
