import { GlassCard } from "@/components/sub-components/GlassCard";
import { Badge } from "@/components/mini-components/Badge";
import { experienceItems } from "@/data/experience.data";

export function ExperienceSection() {
  return (
    <section className="section" id="historias">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Relatos profesionales</span>
          <h2 className="display-heading display-5 mt-3">
            Experiencias resumidas como aprendizajes aplicables.
          </h2>
          <p className="mt-3">
            Los nombres de empresas ayudan a contextualizar la trayectoria, pero el foco está en el
            trabajo realizado, los desafíos enfrentados y lo aprendido sin revelar detalles internos
            sensibles.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {experienceItems.map((item) => (
            <div key={item.id}>
              <GlassCard as="article">
                <Badge variant="pill" className="mb-3">
                  {item.badge}
                </Badge>
                <h3 className="h4">{item.title}</h3>
                <p className="text-muted-custom">{item.body}</p>
                <p className="text-muted-custom mb-0">
                  <strong>Aprendizaje:</strong> {item.learning}
                </p>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
