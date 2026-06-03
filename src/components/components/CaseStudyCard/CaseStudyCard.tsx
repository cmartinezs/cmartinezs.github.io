import { GlassCard } from "@/components/sub-components/GlassCard";
import { Badge } from "@/components/mini-components/Badge";
import type { CaseStudy, CaseStudyDomain } from "@/types/caseStudy.types";

const domainLabels: Record<CaseStudyDomain, string> = {
  ecommerce: "E-commerce",
  banca: "Banca",
  operaciones: "Operaciones",
  "liderazgo-tecnico": "Liderazgo técnico",
  "formacion-tecnica": "Formación",
};

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const { title, domain, period, context, problem, contribution, results, stack } = caseStudy;

  return (
    <GlassCard as="article">
      <div className="case-card-meta">
        <Badge variant="pill">{domainLabels[domain]}</Badge>
        {period && <span className="case-card-period">{period}</span>}
      </div>

      <h3 className="h5">{title}</h3>

      {context && <p className="case-card-context">{context}</p>}

      <div className="case-card-block">
        <p className="case-card-label">Problema</p>
        <p className="case-card-text">{problem}</p>
      </div>

      <div className="case-card-block">
        <p className="case-card-label">Aporte</p>
        <p className="case-card-text">{contribution}</p>
      </div>

      {results.length > 0 && (
        <div className="case-card-block">
          <p className="case-card-label">Resultados</p>
          <ul className="service-outcomes-list">
            {results.map((result, i) => (
              <li key={i}>
                {result.metric ? `${result.description} (${result.metric})` : result.description}
              </li>
            ))}
          </ul>
        </div>
      )}

      {stack && stack.length > 0 && (
        <div className="case-card-stack">
          {stack.map((tech) => (
            <span key={tech} className="case-stack-pill">
              {tech}
            </span>
          ))}
        </div>
      )}
    </GlassCard>
  );
}
