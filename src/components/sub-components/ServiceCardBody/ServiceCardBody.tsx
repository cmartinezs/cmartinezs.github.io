import Link from "next/link";
import type { Service } from "@/types/service.types";

interface ServiceCardBodyProps {
  service: Service;
}

export function ServiceCardBody({ service }: ServiceCardBodyProps) {
  const isPrimary = service.tier === "primary";

  return (
    <>
      <span className="service-icon">{service.number}</span>
      <h3 className="h4">{service.title}</h3>
      <p className="text-muted-custom">{service.description}</p>
      <p className="service-features-label">
        {isPrimary ? "Trabajo en:" : "Puedo apoyar en:"}
      </p>
      <ul className="feature-list">
        {service.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      {isPrimary && service.outcomes && service.outcomes.length > 0 && (
        <div className="service-outcomes">
          <p className="service-outcomes-label">Resultados</p>
          <ul className="service-outcomes-list">
            {service.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>
      )}
      <Link className="card-link-custom" href={service.href}>
        {service.linkLabel}
      </Link>
    </>
  );
}
