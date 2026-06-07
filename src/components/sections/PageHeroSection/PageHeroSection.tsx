"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerFadeUp } from "@/lib/animations";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

interface PageHeroSectionProps {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  id?: string;
  children?: React.ReactNode;
  side?: React.ReactNode;
}

export function PageHeroSection({
  eyebrow,
  title,
  lead,
  id = "inicio",
  children,
  side,
}: PageHeroSectionProps) {
  const { shouldAnimate } = useHeroAnimation();

  const content = (
    <div className="container">
      <div className={side ? "page-hero-grid" : undefined}>
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="page-title mt-3">{title}</h1>
          <p className="hero-lead mt-4">{lead}</p>
          {children}
        </div>
        {side && <div className="page-hero-side">{side}</div>}
      </div>
    </div>
  );

  if (!shouldAnimate) {
    return (
      <section className="page-hero" id={id}>
        {content}
      </section>
    );
  }

  return (
    <motion.section
      className="page-hero"
      id={id}
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="container">
        <div className={side ? "page-hero-grid" : undefined}>
          <div>
            <motion.span variants={staggerFadeUp} className="eyebrow">
              {eyebrow}
            </motion.span>
            <motion.h1 variants={staggerFadeUp} className="page-title mt-3">
              {title}
            </motion.h1>
            <motion.p variants={staggerFadeUp} className="hero-lead mt-4">
              {lead}
            </motion.p>
            {children && (
              <motion.div variants={staggerFadeUp}>
                {children}
              </motion.div>
            )}
          </div>
          {side && (
            <motion.div variants={staggerFadeUp} className="page-hero-side">
              {side}
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}
