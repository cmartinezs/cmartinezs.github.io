import Link from "next/link";
import { PageHeroSection } from "@/components/sections/PageHeroSection";
import { profileContent } from "@/data/profile.data";

export function ProfileSummarySection() {
  const { headline, paragraphs, availability, stats, pillars, sectors } =
    profileContent;
  const [lead, ...supportParagraphs] = paragraphs;

  return (
    <PageHeroSection
      id="inicio"
      eyebrow="Perfil profesional"
      title={headline}
      lead={lead ?? headline}
      side={
        <div className="profile-side">
          {stats && stats.length > 0 && (
            <div className="glass-card profile-stats-card">
              {stats.map((stat) => (
                <div key={stat.value} className="profile-stat">
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          )}
          {pillars && pillars.length > 0 && (
            <div className="profile-pillars-grid">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="profile-pillar">
                  <div className="profile-pillar-icon">
                    <i className={`bi ${pillar.icon}`} aria-hidden="true" />
                  </div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                </div>
              ))}
            </div>
          )}
          {sectors && sectors.length > 0 && (
            <div className="profile-sectors">
              {sectors.map((sector) => (
                <span key={sector} className="profile-sector-tag">
                  {sector}
                </span>
              ))}
            </div>
          )}
        </div>
      }
    >
      {supportParagraphs.length > 0 && (
        <div className="profile-paragraphs">
          {supportParagraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>
      )}
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
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-6">
        <Link href="#servicios" className="btn-primary-custom">
          Ver servicios
        </Link>
        <Link href="/contacto" className="btn-outline-custom">
          Conversemos
        </Link>
      </div>
    </PageHeroSection>
  );
}
