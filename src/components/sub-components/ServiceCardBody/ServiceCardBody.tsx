import Link from "next/link";
import type { Service } from "@/types/service.types";

interface ServiceCardBodyProps {
  service: Service;
}

export function ServiceCardBody({ service }: ServiceCardBodyProps) {
  return (
    <>
      <span className="service-icon">{service.number}</span>
      <h3 className="h4">{service.title}</h3>
      <p className="text-muted-custom">{service.description}</p>
      <ul className="feature-list">
        {service.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <Link className="card-link-custom" href={service.href}>
        {service.linkLabel}
      </Link>
    </>
  );
}
