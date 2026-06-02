import Link from "next/link";
import { GlassCard } from "@/components/sub-components/GlassCard";
import { Badge } from "@/components/mini-components/Badge";

export function ProjectHighlightSection() {
  return (
    <section className="section" id="keygo">
      <div className="container">
        <GlassCard className="project-card p-lg-5">
          <div className="row align-items-center g-4 position-relative z-1">
            <div className="col-lg-7">
              <Badge variant="pill" className="mb-3">
                Proyecto destacado
              </Badge>
              <h2 className="display-heading display-5">KeyGo: autenticación como servicio.</h2>
              <p className="text-muted-custom fs-5 mt-3">
                KeyGo es una iniciativa en desarrollo para simplificar la autenticación de
                aplicaciones y usuarios mediante una plataforma SaaS multi-tenant. La presento como
                una línea de trabajo y aprendizaje público, no como un producto comercial finalizado.
              </p>
              <p className="mb-0">
                <strong>Estado:</strong> próximamente disponible.
              </p>
              <Link className="card-link-custom" href="/keygo/">
                Ver landing de KeyGo
              </Link>
            </div>
            <div className="col-lg-5">
              <ul className="feature-list">
                <li>Multi-tenant con organizaciones independientes.</li>
                <li>Gestión de usuarios y roles.</li>
                <li>Autenticación centralizada.</li>
                <li>Tokens para aplicaciones y usuarios.</li>
                <li>Arquitectura escalable pensada para startups.</li>
              </ul>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
