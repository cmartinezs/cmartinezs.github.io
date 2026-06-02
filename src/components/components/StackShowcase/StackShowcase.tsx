"use client";

import { GlassCard } from "@/components/sub-components/GlassCard";
import { StackCategoryDeck } from "@/components/sub-components/StackCategoryDeck";
import { TechCardGrid } from "@/components/sub-components/TechCardGrid";
import { useStackShowcaseStore } from "@/store/stackShowcaseStore";
import { techItems } from "@/data/techStack.data";

export function StackShowcase() {
  const { activeCategory, goFirst, goPrev, goNext, goLast } =
    useStackShowcaseStore();

  return (
    <div className="stack-showcase">
      <GlassCard className="stack-browser">
        <div className="stack-browser-header">
          <div className="stack-browser-copy">
            <span className="eyebrow">Explorar stack</span>
            <p className="text-muted-custom mb-0">
              Haz click en una categoría para ver sus tecnologías.
            </p>
          </div>
        </div>

        <StackCategoryDeck />

        <div
          className="stack-browser-controls"
          role="group"
          aria-label="Controles del carrusel de categorías"
        >
          <button
            className="stack-browser-control"
            type="button"
            onClick={goFirst}
            aria-label="Ir a la primera categoría"
          >
            <i className="bi bi-chevron-double-left" aria-hidden="true" />
          </button>
          <button
            className="stack-browser-control"
            type="button"
            onClick={goPrev}
            aria-label="Ver categoría anterior"
          >
            <i className="bi bi-arrow-left" aria-hidden="true" />
          </button>
          <button
            className="stack-browser-control"
            type="button"
            onClick={goNext}
            aria-label="Ver categoría siguiente"
          >
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </button>
          <button
            className="stack-browser-control"
            type="button"
            onClick={goLast}
            aria-label="Ir a la última categoría"
          >
            <i className="bi bi-chevron-double-right" aria-hidden="true" />
          </button>
        </div>
      </GlassCard>

      <GlassCard className="stack-panel">
        <div className="stack-panel-head">
          <span className="eyebrow">{activeCategory.label}</span>
          <h3 className="display-heading h2 mt-3 mb-2">{activeCategory.title}</h3>
          <p className="text-muted-custom mb-0">{activeCategory.description}</p>
        </div>
        <TechCardGrid items={techItems} activeGroup={activeCategory.id} />
      </GlassCard>
    </div>
  );
}
