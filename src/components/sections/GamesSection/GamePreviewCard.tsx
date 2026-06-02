"use client";

import { useState } from "react";
import Link from "next/link";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import type { GameProject } from "@/data/games.data";

export function GamePreviewCard({ game }: { game: GameProject }) {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const { ref, isIntersecting } = useIntersectionObserver<HTMLElement>({ rootMargin: "200px" });

  return (
    <article
      ref={ref}
      className="glass-card overflow-hidden flex flex-col"
      style={{ padding: 0 }}
    >
      {/* Live preview area */}
      <div className="relative" style={{ height: 224, overflow: "hidden", flexShrink: 0 }}>
        {/* Animated placeholder */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 transition-opacity duration-700"
          style={{
            opacity: iframeLoaded ? 0 : 1,
            background:
              "linear-gradient(135deg, rgba(73,210,255,0.12) 0%, rgba(130,247,191,0.08) 50%, rgba(255,209,102,0.06) 100%)",
          }}
        >
          <span
            style={{
              fontSize: "3.5rem",
              lineHeight: 1,
              filter: "drop-shadow(0 0 1.5rem rgba(73,210,255,0.6))",
            }}
          >
            {game.icon}
          </span>
          <span className="text-muted-custom" style={{ fontSize: "0.78rem", opacity: 0.6 }}>
            Cargando preview…
          </span>
        </div>

        {/* Iframe — only mounted when card enters viewport */}
        {isIntersecting && (
          <iframe
            src={game.href}
            title={`Preview de ${game.title}`}
            onLoad={() => setIframeLoaded(true)}
            sandbox="allow-scripts allow-same-origin"
            loading="lazy"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "200%",
              height: "448px",
              transform: "scale(0.5)",
              transformOrigin: "top left",
              pointerEvents: "none",
              border: "none",
              opacity: iframeLoaded ? 1 : 0,
              transition: "opacity 0.6s ease",
            }}
          />
        )}

        {/* Bottom fade-out gradient */}
        <div
          className="absolute bottom-0 left-0 right-0 pointer-events-none"
          style={{
            height: 72,
            background: "linear-gradient(to bottom, transparent, var(--bg-soft))",
          }}
        />
      </div>

      {/* Card content */}
      <div className="flex flex-col flex-1" style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
        <h3 className="h5">{game.title}</h3>
        <p className="text-muted-custom mt-2" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
          {game.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {game.tech.map((t) => (
            <span
              key={t}
              className="badge-soft"
              style={{ borderRadius: "999px", padding: "0.15rem 0.65rem", fontSize: "0.75rem" }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Link */}
        <div className="mt-auto pt-4">
          <Link
            className="card-link-custom"
            href={game.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {game.label}
          </Link>
        </div>
      </div>
    </article>
  );
}
