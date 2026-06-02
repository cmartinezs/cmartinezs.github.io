"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { staggerFadeUp } from "@/lib/animations";
import type { TechItem, StackGroup } from "@/types/tech.types";

interface TechCardGridProps {
  items: TechItem[];
  activeGroup: StackGroup;
}

export function TechCardGrid({ items, activeGroup }: TechCardGridProps) {
  const visibleItems = items.filter((item) => item.groups.includes(activeGroup));

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
