import { StackShowcase } from "@/components/components/StackShowcase";

export function StackShowcaseSection() {
  return (
    <section className="section" id="stack">
      <div className="container">
        <div className="mb-6">
          <span className="eyebrow">Stack tecnológico</span>
          <h2 className="display-heading display-5 mt-4 mb-0">
            Herramientas para construir productos serios.
          </h2>
        </div>
        <StackShowcase />
      </div>
    </section>
  );
}
