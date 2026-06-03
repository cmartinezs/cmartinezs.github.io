"use client";

import { GlassCard } from "@/components/sub-components/GlassCard";
import { ServiceCardBody } from "@/components/sub-components/ServiceCardBody";
import { useInfiniteCarousel } from "@/hooks/useInfiniteCarousel";
import type { Service } from "@/types/service.types";

interface ServicesCarouselProps {
  services: Service[];
}

export function ServicesCarousel({ services }: ServicesCarouselProps) {
  const repeated = [...services, ...services, ...services];
  const { trackRef, translateX, goNext, goPrev, animated } = useInfiniteCarousel(services.length);

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
            aria-label="Ver servicio anterior"
          >
            <i className="bi bi-arrow-left" aria-hidden="true" />
          </button>
          <button
            className="services-carousel-control"
            type="button"
            onClick={goNext}
            aria-label="Ver servicio siguiente"
          >
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="services-carousel-viewport">
        <div
          ref={trackRef}
          className="services-carousel-track"
          style={{
            transform: `translateX(${translateX}px)`,
            transition: animated ? undefined : "none",
          }}
        >
          {repeated.map((service, i) => (
            <GlassCard
              key={`${service.id}-${i}`}
              as="article"
              className="services-carousel-slide"
            >
              <ServiceCardBody service={service} />
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
