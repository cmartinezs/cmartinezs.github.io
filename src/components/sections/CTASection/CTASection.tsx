import Link from "next/link";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  lead: string;
  id?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryLinks?: Array<{ href: string; label: string; icon: string; external?: boolean }>;
}

export function CTASection({
  eyebrow = "Contacto",
  title,
  lead,
  id = "contacto",
  primaryHref,
  primaryLabel,
  secondaryLinks,
}: CTASectionProps) {
  return (
    <section className="section" id={id}>
      <div className="container">
        <div className="cta p-4 p-lg-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <span className="eyebrow">{eyebrow}</span>
              <h2 className="display-heading display-5 mt-3">{title}</h2>
              <p className="text-muted-custom fs-5 mb-0">{lead}</p>
            </div>
            <div className="col-lg-4">
              <div className="d-grid gap-3">
                <Link className="btn btn-primary-custom btn-lg rounded-pill" href={primaryHref}>
                  <i className="bi bi-ui-checks" aria-hidden="true" /> {primaryLabel}
                </Link>
                {secondaryLinks?.map((link) => (
                  <Link
                    key={link.href}
                    className="btn btn-outline-custom btn-lg rounded-pill"
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                  >
                    <i className={`bi ${link.icon}`} aria-hidden="true" /> {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
