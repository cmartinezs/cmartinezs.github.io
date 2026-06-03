"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { staggerFadeUp } from "@/lib/animations";
import type { TechItem, TechLevel, StackGroup } from "@/types/tech.types";

const levelOrder: Record<TechLevel, number> = {
  core: 0,
  strong: 1,
  working: 2,
  exploratory: 3,
};

const levelLabels: Record<TechLevel, string> = {
  core: "Core",
  strong: "Sólido",
  working: "En uso",
  exploratory: "Exploratorio",
};

interface TechCardGridProps {
  items: TechItem[];
  activeGroup: StackGroup;
}

export function TechCardGrid({ items, activeGroup }: TechCardGridProps) {
  const visibleItems = items
    .filter((item) => item.groups.includes(activeGroup))
    .sort((a, b) => {
      const la = a.level ? levelOrder[a.level] : 4;
      const lb = b.level ? levelOrder[b.level] : 4;
      if (la !== lb) return la - lb;
      return (a.priority ?? 99) - (b.priority ?? 99);
    });

  return (
    <div className="stack-grid">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeGroup}
          className="stack-grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          style={{ display: "contents" }}
        >
          {visibleItems.map((item, i) => (
            <motion.article
              key={item.id}
              className="tech-card"
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.24, delay: i * 0.04 }}
              variants={staggerFadeUp}
            >
              <TechIcon item={item} />
              <span>{item.name}</span>
              <small>{item.description}</small>
              {item.level && (
                <span className={`tech-level-badge tech-level-${item.level}`}>
                  {levelLabels[item.level]}
                </span>
              )}
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function TechIcon({ item }: { item: TechItem }) {
  const { icon } = item;

  if (icon.type === "devicon") {
    return <i className={icon.className} aria-hidden="true" />;
  }

  if (icon.type === "brand-img") {
    return (
      <Image
        src={icon.src}
        alt={icon.alt}
        width={32}
        height={32}
        className="tech-brand-icon"
        unoptimized
      />
    );
  }

  return (
    <span className="tech-generic-icon">
      <i className={icon.iconClass} aria-hidden="true" />
    </span>
  );
}
