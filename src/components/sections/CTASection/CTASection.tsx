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
        <div className="cta p-6 lg:p-12">
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <span className="eyebrow">{eyebrow}</span>
              <h2 className="display-heading display-5 mt-4">{title}</h2>
              <p className="text-muted-custom text-lg mb-0">{lead}</p>
            </div>
            <div className="lg:col-span-4 grid gap-4">
              <Link className="btn-primary-custom" href={primaryHref}>
                <i className="bi bi-ui-checks" aria-hidden="true" /> {primaryLabel}
              </Link>
              {secondaryLinks?.map((link) => (
                <Link
                  key={link.href}
                  className="btn-outline-custom"
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
    </section>
  );
}
