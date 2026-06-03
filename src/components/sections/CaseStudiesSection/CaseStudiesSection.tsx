"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies.data";
import type { CaseStudy } from "@/types/caseStudy.types";

// ── Mobile detection ──────────────────────────────────────────────────────────

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767.98px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isMobile;
}

// ── Overview card ─────────────────────────────────────────────────────────────

function CaseOvNode({
  c,
  index,
  onSelect,
}: {
  c: CaseStudy;
  index: number;
  onSelect: () => void;
}) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.button
      className="glass-card case-ov-node"
      onClick={onSelect}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.88, transition: { duration: 0.18 } }}
      transition={{ delay: index * 0.07, duration: 0.3 }}
      whileHover={{ y: -4 }}
    >
      <span className="service-icon">{num}</span>
      <h3 className="h4">{c.title}</h3>
      <p className="service-features-label">Stack</p>
      <div className="case-ov-node__badges">
        {c.stack?.slice(0, 4).map((s) => (
          <span key={s} className="case-stack-pill">{s}</span>
        ))}
      </div>
      <span className="card-link-custom case-ov-node__cta" aria-hidden="true">
        Explorar caso
      </span>
    </motion.button>
  );
}

// ── Mobile detail ─────────────────────────────────────────────────────────────

function MobileDetail({ c, onClose }: { c: CaseStudy; onClose: () => void }) {
  return (
    <motion.div
      className="mobile-detail"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 16 }}
      transition={{ duration: 0.22 }}
    >
      <button className="mobile-detail-back" onClick={onClose}>
        ← Volver a casos
      </button>

      <h3 className="mobile-detail-title">{c.title}</h3>

      <div className="case-detail-badges">
        {c.stack?.map((s) => (
          <span key={s} className="case-stack-pill">{s}</span>
        ))}
      </div>

      <div className="mobile-detail-sections">
        <div className="glass-card mobile-detail-section">
          <span className="eyebrow">Contexto</span>
          <p>{c.context}</p>
        </div>
        <div className="glass-card mobile-detail-section">
          <span className="eyebrow">Problema</span>
          <p>{c.problem}</p>
        </div>
        <div className="glass-card mobile-detail-section">
          <span className="eyebrow">Aporte</span>
          <p>{c.contribution}</p>
        </div>
        {c.results.map((r, i) => (
          <div key={i} className="glass-card mobile-detail-section">
            <span className="eyebrow">Resultado {i + 1}</span>
            <p>{r.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ── Graph helpers ─────────────────────────────────────────────────────────────

const SVG_W = 900;
const SVG_H = 560;

interface GNode {
  id: string;
  w: number;
  label: string;
  text: string;
  type: "central" | "satellite" | "result";
  delay: number;
  parentId?: string;
}

interface GEdgeRef {
  fromId: string;
  toId: string;
  delay: number;
  showWhenExpanded?: string;
  hideWhenExpanded?: string;
}

interface NodePos { x: number; y: number }
type LayoutMap = Record<string, NodePos>

const NODE_W: Record<GNode["type"], number> = { central: 280, satellite: 240, result: 240 };

function buildMeta(c: CaseStudy): { nodes: GNode[]; edgeRefs: GEdgeRef[] } {
  const rCount = c.results.length;
  const nodes: GNode[] = [
    { id: "desc",    w: NODE_W.satellite, label: "Contexto", text: c.context,      type: "satellite", delay: 0.20 },
    { id: "prob",    w: NODE_W.satellite, label: "Problema",  text: c.problem,      type: "satellite", delay: 0.25 },
    { id: "contrib", w: NODE_W.central,   label: "Aporte",    text: c.contribution, type: "satellite", delay: 0.30 },
    ...c.results.map((r, i) => ({
      id: `r${i}`, w: NODE_W.result, label: `Resultado ${i + 1}`, text: r.description,
      type: "result" as const, delay: i * 0.08, parentId: "contrib",
    })),
    { id: "central", w: NODE_W.central, label: "", text: c.title, type: "central", delay: 0.05 },
  ];

  const edgeRefs: GEdgeRef[] = [
    { fromId: "central", toId: "desc",    delay: 0.18, hideWhenExpanded: "contrib" },
    { fromId: "central", toId: "prob",    delay: 0.23, hideWhenExpanded: "contrib" },
    { fromId: "central", toId: "contrib", delay: 0.28 },
    ...Array.from({ length: rCount }, (_, i) => ({
      fromId: "contrib", toId: `r${i}`, delay: 0.06 + i * 0.07,
      showWhenExpanded: "contrib",
    })),
  ];

  return { nodes, edgeRefs };
}

function computeLayout(rCount: number, contribOpen: boolean, expandedResultId: string | null): LayoutMap {
  if (!contribOpen) {
    return {
      central: { x: 310, y: 140 },
      desc:    { x: 20,  y: 20  },
      prob:    { x: 640, y: 20  },
      contrib: { x: 310, y: 330 },
      r0: { x: 50,  y: 490 }, r1: { x: 330, y: 490 }, r2: { x: 610, y: 490 },
    };
  }

  const layout: LayoutMap = {
    central: { x: 310, y: 20  },
    contrib: { x: 310, y: 185 },
    desc:    { x: 20,  y: 20  },
    prob:    { x: 640, y: 20  },
  };

  const expandedIdx = expandedResultId ? parseInt(expandedResultId.slice(1)) : -1;

  if (expandedIdx === -1) {
    const rPos: NodePos[] =
      rCount === 1 ? [{ x: 330, y: 400 }] :
      rCount === 2 ? [{ x: 140, y: 400 }, { x: 520, y: 400 }] :
      [{ x: 40, y: 400 }, { x: 310, y: 420 }, { x: 580, y: 400 }];
    rPos.forEach((p, i) => { layout[`r${i}`] = p; });
  } else {
    for (let i = 0; i < rCount; i++) {
      if (i === expandedIdx) {
        layout[`r${i}`] = { x: 280, y: 330 };
      } else {
        const others = Array.from({ length: rCount }, (_, j) => j).filter(j => j !== expandedIdx);
        const pos = others.indexOf(i);
        layout[`r${i}`] = rCount === 3
          ? (pos === 0 ? { x: 20, y: 355 } : { x: 620, y: 355 })
          : { x: 580, y: 345 };
      }
    }
  }

  return layout;
}

// ── Detail graph (desktop) ────────────────────────────────────────────────────

const COLLAPSED_H = 44;
const EXPANDED_H: Record<GNode["type"], number> = {
  central: 102,
  satellite: 210,
  result: 150,
};

function DetailGraph({ c, onClose }: { c: CaseStudy; onClose: () => void }) {
  const { nodes, edgeRefs } = buildMeta(c);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [contribOpen, setContribOpen] = useState(false);

  const expandedResultId = expandedId?.startsWith("r") ? expandedId : null;
  const layout = computeLayout(c.results.length, contribOpen, expandedResultId);

  const lcx = (id: string) => (layout[id]?.x ?? 0) + (nodes.find(n => n.id === id)?.w ?? 240) / 2;
  const lcy = (id: string) => (layout[id]?.y ?? 0) + COLLAPSED_H / 2;

  const isVisible = (n: GNode) => {
    if (n.id === "central") return true;
    if (n.parentId) return n.parentId === "contrib" && contribOpen;
    if (contribOpen && (n.id === "desc" || n.id === "prob")) return false;
    return true;
  };

  const handleClick = (id: string) => {
    if (id === "central") { onClose(); return; }
    if (id === "contrib") {
      const opening = !contribOpen;
      setContribOpen(opening);
      setExpandedId(opening ? "contrib" : null);
      return;
    }
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <motion.div
      className="case-detail-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.22 }}
    >
      <div className="case-detail-badges">
        {c.stack?.map((s) => (
          <span key={s} className="case-stack-pill">{s}</span>
        ))}
      </div>

      <div className="case-detail-graph-container">
        <svg
          viewBox={`0 0 ${SVG_W} ${SVG_H}`}
          className="case-graph-svg"
          style={{ overflow: "visible" }}
        >
          {edgeRefs.map((e, i) => {
            const edgeVisible =
              (!e.showWhenExpanded || contribOpen) &&
              (!e.hideWhenExpanded || !contribOpen);
            return (
              <motion.line
                key={i}
                stroke="rgba(73,210,255,0.22)"
                strokeWidth="1.5"
                strokeDasharray="5 4"
                initial={{
                  opacity: 0,
                  x1: lcx(e.fromId), y1: lcy(e.fromId),
                  x2: lcx(e.toId),   y2: lcy(e.toId),
                }}
                animate={{
                  x1: lcx(e.fromId), y1: lcy(e.fromId),
                  x2: lcx(e.toId),   y2: lcy(e.toId),
                  opacity: edgeVisible ? 1 : 0,
                }}
                transition={{
                  x1: { duration: 0.4, ease: "easeInOut" },
                  y1: { duration: 0.4, ease: "easeInOut" },
                  x2: { duration: 0.4, ease: "easeInOut" },
                  y2: { duration: 0.4, ease: "easeInOut" },
                  opacity: { delay: edgeVisible ? e.delay : 0, duration: 0.35 },
                }}
              />
            );
          })}

          <foreignObject x={0} y={0} width={SVG_W} height={SVG_H} overflow="visible">
            <div style={{ position: "relative", width: SVG_W, height: SVG_H }}>
              {nodes.map((n) => {
                const isCentral = n.id === "central";
                const visible = isVisible(n);
                const isExpanded = isCentral || expandedId === n.id;
                const expandedH = EXPANDED_H[n.type];
                const targetH = isExpanded ? expandedH : COLLAPSED_H;
                const pos = layout[n.id] ?? { x: 0, y: 0 };

                return (
                  <motion.div
                    key={n.id}
                    className={`cgn cgn--${n.type}${isCentral ? " cgn--central" : ""}`}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: n.w,
                      cursor: "pointer",
                      overflowX: "hidden",
                      overflowY: isExpanded && !isCentral ? "auto" : "hidden",
                    }}
                    initial={{ opacity: 0, scale: 0.6, x: pos.x, y: pos.y, height: isCentral ? expandedH : COLLAPSED_H }}
                    animate={{
                      x: pos.x, y: pos.y,
                      opacity: visible ? 1 : 0,
                      scale: visible ? 1 : 0.5,
                      height: visible ? targetH : 0,
                      pointerEvents: visible ? "auto" : "none",
                    }}
                    transition={{
                      x:       { duration: 0.4, ease: "easeInOut" },
                      y:       { duration: 0.4, ease: "easeInOut" },
                      opacity: { delay: visible ? n.delay : 0, duration: 0.28 },
                      scale:   { delay: visible ? n.delay : 0, type: "spring", stiffness: 220, damping: 24 },
                      height:  { duration: 0.26, ease: "easeInOut" },
                    }}
                    onClick={() => handleClick(n.id)}
                  >
                    {isCentral ? (
                      <>
                        <span className="cgn__text cgn__text--title">{n.text}</span>
                        <span className="cgn__back">← cerrar</span>
                      </>
                    ) : (
                      <>
                        <span className="cgn__label">{n.label}</span>
                        {isExpanded && visible && (
                          <motion.span
                            className="cgn__text"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.14, duration: 0.2 }}
                          >
                            {n.text}
                          </motion.span>
                        )}
                      </>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </foreignObject>
        </svg>
      </div>
    </motion.div>
  );
}

// ── Section ───────────────────────────────────────────────────────────────────

export function CaseStudiesSection() {
  const [selected, setSelected] = useState<CaseStudy | null>(null);
  const isMobile = useIsMobile();
  const featured = caseStudies.filter((c) => c.featured);
  const row1 = featured.slice(0, 3);
  const row2 = featured.slice(3);

  return (
    <section className="section" id="casos">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Casos</span>
          <h2 className="display-heading display-5 mt-3">
            Problemas reales que he ayudado a resolver.
          </h2>
          <p className="mt-3">
            Proyectos anonimizados de trabajo real en banca, e-commerce, operaciones y formación.
            Cada caso muestra un problema concreto, mi aporte y el resultado obtenido.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!selected ? (
            <motion.div key="overview" exit={{ opacity: 0, transition: { duration: 0.18 } }}>
              {isMobile ? (
                <div className="case-ov-carousel">
                  {featured.map((c, i) => (
                    <CaseOvNode key={c.id} c={c} index={i} onSelect={() => setSelected(c)} />
                  ))}
                </div>
              ) : (
                <>
                  <div className="case-ov-grid">
                    {row1.map((c, i) => (
                      <CaseOvNode key={c.id} c={c} index={i} onSelect={() => setSelected(c)} />
                    ))}
                  </div>
                  {row2.length > 0 && (
                    <div className="case-ov-grid case-ov-grid--centered">
                      {row2.map((c, i) => (
                        <CaseOvNode key={c.id} c={c} index={i + 3} onSelect={() => setSelected(c)} />
                      ))}
                    </div>
                  )}
                </>
              )}
            </motion.div>
          ) : isMobile ? (
            <MobileDetail key="mobile-detail" c={selected} onClose={() => setSelected(null)} />
          ) : (
            <DetailGraph key="detail" c={selected} onClose={() => setSelected(null)} />
          )}
        </AnimatePresence>

        <div className="flex flex-wrap gap-4 mt-8">
          <Link className="card-link-custom" href="/casos/">
            Ver todos los casos
          </Link>
        </div>
      </div>
    </section>
  );
}
