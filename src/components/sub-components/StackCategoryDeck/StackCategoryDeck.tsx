"use client";

import { cn } from "@/lib/cn";
import { useStackShowcaseStore } from "@/store/stackShowcaseStore";
import { stackCategories } from "@/data/techStack.data";

export function StackCategoryDeck() {
  const { activeIndex, setActiveIndex } = useStackShowcaseStore();

  return (
    <div className="stack-categories-viewport">
      <div className="stack-categories-track">
        {stackCategories.map((cat, i) => {
          const distance = Math.abs(i - activeIndex);
          const isActive = i === activeIndex;
          const side = i < activeIndex ? "left" : "right";

          const transform = isActive
            ? "translateY(-4px) rotateY(-8deg) scale(1.07)"
            : side === "left"
              ? `translateY(${2 + distance}px) rotateY(${42 - distance * 4}deg) scale(${0.94 - distance * 0.03})`
              : `translateY(${2 + distance}px) rotateY(${-42 + distance * 4}deg) scale(${0.94 - distance * 0.03})`;

          return (
            <button
              key={cat.id}
              type="button"
              className={cn("stack-category-card", isActive && "is-active")}
              style={{
                transform,
                opacity: isActive ? 1 : Math.max(0.4, 0.71 - distance * 0.1),
                filter: isActive ? "saturate(1.35) brightness(1.08)" : `saturate(${Math.max(0.5, 0.84 - distance * 0.1)}) brightness(${Math.max(0.6, 0.85 - distance * 0.1)})`,
                transition: "all 420ms cubic-bezier(0.25, 0.46, 0.45, 0.94)",
              }}
              onClick={() => setActiveIndex(i)}
              aria-pressed={isActive}
              aria-label={`Categoría: ${cat.label}`}
            >
              <span className="stack-category-icon">
                <i className={cat.iconClass} aria-hidden="true" />
              </span>
              <strong>{cat.label}</strong>
              <small>{cat.description.split(".")[0]}</small>
            </button>
          );
        })}
      </div>
    </div>
  );
}
