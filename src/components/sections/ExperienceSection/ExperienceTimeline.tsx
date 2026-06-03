"use client";

import { useRef, useState, useCallback } from "react";
import { Badge } from "@/components/mini-components/Badge";
import { experienceItems } from "@/data/experience.data";

export function ExperienceTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const navigateTo = useCallback((index: number) => {
    if (index < 0 || index >= experienceItems.length) return;
    setActiveIndex(index);
    const item = itemRefs.current[index];
    const container = containerRef.current;
    if (!item || !container) return;
    const itemRect = item.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();
    container.scrollTo({
      top: container.scrollTop + itemRect.top - containerRect.top - 12,
      behavior: "smooth",
    });
  }, []);

  const total = experienceItems.length;

  return (
    <div>
      {/* Nav bar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <span
          className="text-muted-custom"
          style={{ fontSize: "0.8rem", fontFamily: "var(--font-mono)" }}
        >
          {activeIndex + 1} / {total}
        </span>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button
            onClick={() => navigateTo(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="btn-secondary-custom"
            style={{
              padding: "0.35rem 0.75rem",
              borderRadius: "0.6rem",
              opacity: activeIndex === 0 ? 0.35 : 1,
              cursor: activeIndex === 0 ? "not-allowed" : "pointer",
              transition: "opacity 0.15s",
            }}
            aria-label="Experiencia anterior"
          >
            <i className="bi bi-chevron-up" />
          </button>
          <button
            onClick={() => navigateTo(activeIndex + 1)}
            disabled={activeIndex === total - 1}
            className="btn-secondary-custom"
            style={{
              padding: "0.35rem 0.75rem",
              borderRadius: "0.6rem",
              opacity: activeIndex === total - 1 ? 0.35 : 1,
              cursor: activeIndex === total - 1 ? "not-allowed" : "pointer",
              transition: "opacity 0.15s",
            }}
            aria-label="Siguiente experiencia"
          >
            <i className="bi bi-chevron-down" />
          </button>
        </div>
      </div>

      {/* Timeline */}
      <div ref={containerRef} className="experience-timeline">
        {experienceItems.map((item, i) => (
          <div
            key={item.id}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            style={{ display: "flex", gap: "1rem" }}
            onClick={() => setActiveIndex(i)}
          >
            {/* Dot + line */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                flexShrink: 0,
                paddingTop: "0.35rem",
              }}
            >
              <div
                style={{
                  width: 13,
                  height: 13,
                  borderRadius: "50%",
                  flexShrink: 0,
                  background:
                    i === activeIndex ? "var(--accent)" : "var(--panel-border)",
                  boxShadow:
                    i === activeIndex
                      ? "0 0 8px rgba(130,247,191,0.55)"
                      : "none",
                  transition: "background 0.2s, box-shadow 0.2s",
                }}
              />
              {i < total - 1 && (
                <div
                  style={{
                    width: 2,
                    flex: 1,
                    minHeight: "1.5rem",
                    marginTop: "0.4rem",
                    background: "var(--panel-border)",
                  }}
                />
              )}
            </div>

            {/* Content */}
            <div
              style={{
                flex: 1,
                padding: "0.6rem 0.9rem 1.4rem",
                borderRadius: "0.9rem",
                background:
                  i === activeIndex ? "var(--panel)" : "transparent",
                border: `1px solid ${
                  i === activeIndex
                    ? "var(--panel-border)"
                    : "transparent"
                }`,
                transition: "background 0.2s, border-color 0.2s",
                cursor: "pointer",
              }}
            >
              {item.period && (
                <span
                  style={{
                    display: "block",
                    fontSize: "0.72rem",
                    fontFamily: "var(--font-mono)",
                    color: "var(--muted)",
                    marginBottom: "0.5rem",
                    opacity: 0.8,
                  }}
                >
                  {item.period}
                </span>
              )}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                <Badge variant="pill">{item.badge}</Badge>
                {item.domain && (
                  <span
                    style={{
                      fontSize: "0.7rem",
                      padding: "0.15rem 0.5rem",
                      borderRadius: "999px",
                      border: "1px solid var(--panel-border)",
                      color: "var(--muted)",
                      background: "rgba(255,255,255,0.04)",
                    }}
                  >
                    {item.domain}
                  </span>
                )}
                {item.company && (
                  <span
                    className="text-muted-custom"
                    style={{ fontSize: "0.82rem" }}
                  >
                    {item.company}
                    {item.role && (
                      <> &middot; <em>{item.role}</em></>
                    )}
                  </span>
                )}
              </div>

              <h3
                className="h5"
                style={{ marginBottom: "0.4rem", fontSize: "1rem" }}
              >
                {item.title}
              </h3>
              <p
                className="text-muted-custom"
                style={{
                  fontSize: "0.85rem",
                  lineHeight: 1.65,
                  marginBottom: "0.5rem",
                }}
              >
                {item.body}
              </p>

              {i === activeIndex && item.impact && (
                <p
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    marginBottom: "0.5rem",
                    color: "var(--text)",
                    borderLeft: "2px solid var(--accent)",
                    paddingLeft: "0.75rem",
                  }}
                >
                  {item.impact}
                </p>
              )}

              <p
                className="text-muted-custom"
                style={{ fontSize: "0.82rem", marginBottom: 0, opacity: 0.85 }}
              >
                <strong>Aprendizaje:</strong> {item.learning}
              </p>

              {i === activeIndex && item.stack && item.stack.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.35rem",
                    marginTop: "0.75rem",
                    paddingTop: "0.75rem",
                    borderTop: "1px solid var(--panel-border)",
                  }}
                >
                  {item.stack.map((tech) => (
                    <span key={tech} className="case-stack-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
