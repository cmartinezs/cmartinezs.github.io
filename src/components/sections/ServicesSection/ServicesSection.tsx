import Link from "next/link";
import { services } from "@/data/services.data";
import { GlassCard } from "@/components/sub-components/GlassCard";
import { ServiceCardBody } from "@/components/sub-components/ServiceCardBody";

export function ServicesSection() {
  const primary = services.filter((s) => s.tier === "primary");
  const secondary = services.filter((s) => s.tier === "secondary");

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
            también apoyo en automatización con IA, frontend y mobile.
          </p>
        </div>

        {/* ── Especialidades ─────────────────────────────────────── */}
        <div className="mt-8 mb-4">
          <span className="eyebrow">Especialidades</span>
          <p className="mt-2" style={{ color: "var(--muted)", fontSize: "0.95rem" }}>
            Backend, arquitectura y formación técnica son mi foco principal.
          </p>
        </div>
        <div className="services-primary-grid">
          {primary.map((service) => (
            <GlassCard key={service.id} as="article" className="services-primary-slide">
              <ServiceCardBody service={service} />
            </GlassCard>
          ))}
        </div>
        <div className="mt-4">
          <Link className="card-link-custom" href="/especialidades/">
            Ver todas las especialidades →
          </Link>
        </div>

        {/* ── Capacidades complementarias ─────────────────────────── */}
        <div className="services-secondary-block">
          <span className="eyebrow services-secondary-eyebrow">
            Capacidades complementarias
          </span>
          <div className="services-primary-grid">
            {secondary.map((service) => (
              <GlassCard key={service.id} as="article">
                <ServiceCardBody service={service} />
              </GlassCard>
            ))}
          </div>
          <div className="mt-4">
            <Link className="card-link-custom" href="/capacidades/">
              Ver capacidades complementarias →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
