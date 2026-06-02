import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/mini-components/Badge";
import { featuredCertifications } from "@/data/certifications.data";

export function CertificationsTimeline() {
  return (
    <div className="cert-timeline">
      {featuredCertifications.map((cert, i) => {
        const isEven = i % 2 === 0;

        const badgeEl = (
          <div className="cert-badge">
            {cert.badgeImageUrl ? (
              cert.credlyUrl ? (
                <Link href={cert.credlyUrl} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={cert.badgeImageUrl}
                    alt={cert.title}
                    width={672}
                    height={352}
                    style={{ width: "100%", height: "auto", display: "block" }}
                    unoptimized
                  />
                </Link>
              ) : (
                <Image
                  src={cert.badgeImageUrl}
                  alt={cert.title}
                  width={672}
                  height={352}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  unoptimized
                />
              )
            ) : (
              <span className="service-icon">{cert.year.slice(-2)}</span>
            )}
          </div>
        );

        const contentEl = (
          <div className="cert-text glass-card">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                alignItems: "center",
                marginBottom: "0.6rem",
              }}
            >
              <Badge variant="pill">{cert.category}</Badge>
              <span className="text-muted-custom" style={{ fontSize: "0.8rem" }}>
                {cert.issuer} · {cert.year}
              </span>
            </div>
            <h3 className="h4" style={{ marginBottom: "0.5rem" }}>
              {cert.title}
            </h3>
            {cert.description && (
              <p
                className="text-muted-custom"
                style={{ fontSize: "0.88rem", lineHeight: 1.65, marginBottom: 0 }}
              >
                {cert.description}
              </p>
            )}
            {cert.credlyUrl && (
              <Link
                className="card-link-custom"
                href={cert.credlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: "0.75rem", display: "inline-block" }}
              >
                Ver badge en Credly
              </Link>
            )}
          </div>
        );

        const dotEl = (
          <div className="cert-dot-col">
            <div className="cert-dot-marker" />
          </div>
        );

        return (
          <div key={cert.id} className={`cert-item ${isEven ? "cert-even" : "cert-odd"}`}>
            {isEven ? (
              <>
                {badgeEl}
                {dotEl}
                {contentEl}
              </>
            ) : (
              <>
                {contentEl}
                {dotEl}
                {badgeEl}
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
