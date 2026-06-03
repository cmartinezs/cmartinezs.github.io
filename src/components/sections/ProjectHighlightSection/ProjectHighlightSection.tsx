import Link from "next/link";
import { GlassCard } from "@/components/sub-components/GlassCard";
import { Badge } from "@/components/mini-components/Badge";
import { labProjects } from "@/data/labProjects.data";

export function ProjectHighlightSection() {
  const featured = labProjects.find((p) => p.featured) ?? labProjects[0];
  if (!featured) return null;

  return (
    <section className="section" id="keygo">
      <div className="container">
        <GlassCard className="project-card p-lg-5">
          <div className="grid lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-7">
              {featured.badge && (
                <Badge variant="pill" className="mb-3">
                  {featured.badge}
                </Badge>
              )}
              <h2 className="display-heading display-5">{featured.title}</h2>
              <p className="text-muted-custom mt-3" style={{ fontStyle: "italic", opacity: 0.85 }}>
                {featured.tagline}
              </p>
              <p className="text-muted-custom text-lg mt-3">{featured.description}</p>
              <p className="mb-0">
                <strong>Estado:</strong> {featured.statusLabel}.
              </p>
              {featured.learnings && featured.learnings.length > 0 && (
                <div className="mt-3">
                  <p
                    className="case-card-label"
                    style={{ marginBottom: "0.4rem" }}
                  >
                    Aprendizajes de diseño
                  </p>
                  <ul className="service-outcomes-list">
                    {featured.learnings.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="flex flex-wrap gap-4 mt-4">
                <Link className="card-link-custom" href={featured.href}>
                  {featured.linkLabel}
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <ul className="feature-list">
                {featured.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              {featured.stack.length > 0 && (
                <div className="case-card-stack" style={{ marginTop: "1.5rem" }}>
                  {featured.stack.map((tech) => (
                    <span key={tech} className="case-stack-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
