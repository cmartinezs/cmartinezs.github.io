import Link from "next/link";
import { profileContent } from "@/data/profile.data";

export function ProfileSummarySection() {
  const { headline, paragraphs, availability } = profileContent;

  return (
    <section className="section" id="perfil">
      <div className="container">
        <div style={{ maxWidth: "56rem" }}>
          <span className="eyebrow">Perfil profesional</span>
          <h2 className="display-heading display-5 mt-3">{headline}</h2>
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className="text-muted-custom mt-4"
              style={{ lineHeight: 1.7 }}
            >
              {text}
            </p>
          ))}
          {availability && (
            <p className="profile-availability">
              <i
                className="bi bi-circle-fill"
                style={{ fontSize: "0.45rem" }}
                aria-hidden="true"
              />
              {availability}
            </p>
          )}
          <div>
            <Link className="card-link-custom" href="#servicios">
              Conoce cómo puedo ayudarte
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
