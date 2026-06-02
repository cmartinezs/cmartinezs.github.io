"use client";

import { motion } from "framer-motion";
import { staggerContainer, staggerFadeUp } from "@/lib/animations";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

interface PageHeroSectionProps {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  id?: string;
}

export function PageHeroSection({ eyebrow, title, lead, id = "inicio" }: PageHeroSectionProps) {
  const { shouldAnimate } = useHeroAnimation();

  const content = (
    <div className="container">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="page-title mt-3">{title}</h1>
      <p className="hero-lead mt-4">{lead}</p>
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
        <motion.span variants={staggerFadeUp} className="eyebrow">
          {eyebrow}
        </motion.span>
        <motion.h1 variants={staggerFadeUp} className="page-title mt-3">
          {title}
        </motion.h1>
        <motion.p variants={staggerFadeUp} className="hero-lead mt-4">
          {lead}
        </motion.p>
      </div>
    </motion.section>
  );
}
