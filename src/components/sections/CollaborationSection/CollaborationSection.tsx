import Link from "next/link";
import { collaborationContent } from "@/data/collaboration.data";

export function CollaborationSection() {
  const { profiles, notAFit } = collaborationContent;

  return (
    <section className="section" id="alianzas">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Colaboración</span>
          <h2 className="display-heading display-5 mt-3">
            Con quién trabajo mejor y qué tipo de proyectos acepto.
          </h2>
          <p className="mt-3">
            Para que una colaboración funcione, necesita contexto. Aquí describo los perfiles con
            los que trabajo bien y los que probablemente no encajan.
          </p>
        </div>

        <div className="collaboration-grid">
          {profiles.map((profile) => (
            <div key={profile.id} className="collab-card">
              <div className="collab-card-icon" aria-hidden="true">
                <i className={`bi ${profile.icon}`} />
              </div>
              <h3>{profile.title}</h3>
              <p className="collab-card-description">{profile.description}</p>
              <div className="collab-formats">
                {profile.formats.map((f) => (
                  <span key={f} className="case-stack-pill">
                    {f}
                  </span>
                ))}
              </div>
              <Link className="card-link-custom" href={profile.ctaHref}>
                {profile.ctaLabel}
              </Link>
            </div>
          ))}
        </div>

        {notAFit.length > 0 && (
          <div className="collab-not-fit">
            <p className="collab-not-fit-label">Cuándo probablemente no soy el fit correcto</p>
            <ul className="collab-not-fit-list">
              {notAFit.map((item) => (
                <li key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
