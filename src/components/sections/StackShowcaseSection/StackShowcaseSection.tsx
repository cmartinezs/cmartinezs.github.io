import { StackShowcase } from "@/components/components/StackShowcase";

export function StackShowcaseSection() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <div className="row align-items-end g-4 mb-4">
          <div className="col-lg-8">
            <span className="eyebrow">Stack tecnológico</span>
            <h2 className="display-heading display-5 mt-3 mb-0">
              Herramientas para construir productos serios.
            </h2>
          </div>
        </div>
        <StackShowcase />
      </div>
    </section>
  );
}
