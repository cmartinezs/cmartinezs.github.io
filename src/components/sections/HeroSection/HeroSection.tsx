"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TerminalCard } from "@/components/components/TerminalCard";
import { GlassCard } from "@/components/sub-components/GlassCard";
import { GlowEffect } from "@/components/nano-components/GlowEffect";
import { staggerFadeUp, floatAnimation } from "@/lib/animations";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

export function HeroSection() {
  const { shouldAnimate } = useHeroAnimation();

  return (
    <section className="hero d-flex align-items-center" id="inicio">
      <div className="container position-relative z-1">
        <div className="row align-items-center g-5" style={{ "--bs-gutter-x": "4rem" } as React.CSSProperties}>
          <div className="col-lg-6">
            <div className="hero-copy">
              {shouldAnimate ? (
                <>
                  <motion.div variants={staggerFadeUp} className="eyebrow">
                    Software · Formación · IA aplicada
                  </motion.div>
                  <motion.h1 variants={staggerFadeUp} className="hero-title">
                    Construyo software robusto.{" "}
                    <span>Ayudo a equipos a crecer.</span>
                  </motion.h1>
                  <motion.div
                    variants={staggerFadeUp}
                    className="d-flex flex-column flex-sm-row gap-3 mt-4"
                    style={{ flexWrap: "wrap" }}
                  >
                    <HeroActions />
                  </motion.div>
                </>
              ) : (
                <>
                  <div className="eyebrow">Software · Formación · IA aplicada</div>
                  <h1 className="hero-title">
                    Construyo software robusto. <span>Ayudo a equipos a crecer.</span>
                  </h1>
                  <div className="d-flex flex-column flex-sm-row gap-3 mt-4" style={{ flexWrap: "wrap" }}>
                    <HeroActions />
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="col-lg-6">
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
                <p className="hero-support-lead mb-0">
                  Aporto criterio técnico, foco en entrega realista y transferencia clara hacia el equipo.
                </p>
                <div className="hero-signal-grid">
                  <div className="hero-signal">
                    <strong>15+</strong>
                    <span>años construyendo software</span>
                  </div>
                  <div className="hero-signal">
                    <strong>Prod</strong>
                    <span>sistemas productivos reales</span>
                  </div>
                  <div className="hero-signal">
                    <strong>Edu</strong>
                    <span>docencia activa superior</span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroActions() {
  return (
    <>
      <Link
        href="/contacto/?topic=colaboracion"
        className="btn btn-primary-custom btn-lg rounded-pill px-4"
      >
        <i className="bi bi-chat-dots-fill" aria-hidden="true" /> Hablemos de tu proyecto
      </Link>
      <Link
        href="#servicios"
        className="btn btn-outline-custom btn-lg rounded-pill px-4"
      >
        <i className="bi bi-compass-fill" aria-hidden="true" /> Explorar servicios
      </Link>
    </>
  );
}
