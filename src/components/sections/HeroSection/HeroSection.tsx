"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TerminalCard } from "@/components/components/TerminalCard";
import { GlassCard } from "@/components/sub-components/GlassCard";
import { GlowEffect } from "@/components/nano-components/GlowEffect";
import { staggerFadeUp, floatAnimation } from "@/lib/animations";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { heroContent } from "@/data/hero.data";
import type { HeroAction } from "@/types/hero.types";

export function HeroSection() {
  const { shouldAnimate } = useHeroAnimation();
  const { eyebrow, title, tagline, lead, actions, signals } = heroContent;

  return (
    <section className="hero flex items-center" id="inicio">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="hero-copy">
              {shouldAnimate ? (
                <>
                  <motion.div variants={staggerFadeUp} className="eyebrow">
                    {eyebrow}
                  </motion.div>
                  <motion.h1 variants={staggerFadeUp} className="hero-title">
                    {title}
                  </motion.h1>
                  {tagline && (
                    <motion.p variants={staggerFadeUp} className="hero-tagline">
                      {tagline}
                    </motion.p>
                  )}
                  <motion.div
                    variants={staggerFadeUp}
                    className="flex flex-col sm:flex-row flex-wrap gap-4 mt-6"
                  >
                    <HeroActions actions={actions} />
                  </motion.div>
                </>
              ) : (
                <>
                  <div className="eyebrow">{eyebrow}</div>
                  <h1 className="hero-title">{title}</h1>
                  {tagline && <p className="hero-tagline">{tagline}</p>}
                  <div className="flex flex-col sm:flex-row flex-wrap gap-4 mt-6">
                    <HeroActions actions={actions} />
                  </div>
                </>
              )}
            </div>
          </div>

          <div>
            <div className="hero-side">
              <GlowEffect />
              {shouldAnimate ? (
                <motion.div animate={floatAnimation}>
                  <TerminalCard />
                </motion.div>
              ) : (
                <TerminalCard />
              )}
              <GlassCard className="hero-support-card">
                <p className="hero-support-lead mb-0">{lead}</p>
                <div className="hero-signal-grid">
                  {signals.map((signal) => (
                    <div key={signal.value} className="hero-signal">
                      <strong>{signal.value}</strong>
                      <span>{signal.description ?? signal.label}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroActions({ actions }: { actions: HeroAction[] }) {
  return (
    <>
      {actions.map((action) =>
        action.external ? (
          <a
            key={action.href}
            href={action.href}
            className={
              action.variant === "primary"
                ? "btn-primary-custom"
                : "btn-outline-custom"
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {action.icon && (
              <i className={`bi ${action.icon}`} aria-hidden="true" />
            )}{" "}
            {action.label}
          </a>
        ) : (
          <Link
            key={action.href}
            href={action.href}
            className={
              action.variant === "primary"
                ? "btn-primary-custom"
                : "btn-outline-custom"
            }
          >
            {action.icon && (
              <i className={`bi ${action.icon}`} aria-hidden="true" />
            )}{" "}
            {action.label}
          </Link>
        )
      )}
    </>
  );
}
