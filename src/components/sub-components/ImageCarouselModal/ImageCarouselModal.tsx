"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

export interface CarouselImage {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  width: number;
  height: number;
}

interface Props {
  images: CarouselImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageCarouselModal({ images, initialIndex, isOpen, onClose }: Props) {
  const [current, setCurrent] = useState(initialIndex);

  useEffect(() => { setCurrent(initialIndex); }, [initialIndex]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrent((i) => Math.max(0, i - 1));
      if (e.key === "ArrowRight") setCurrent((i) => Math.min(images.length - 1, i + 1));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, images.length, onClose]);

  if (!isOpen || typeof document === "undefined") return null;

  const img = images[current];
  if (!img) return null;
  const hasPrev = current > 0;
  const hasNext = current < images.length - 1;
  const multiple = images.length > 1;

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(5, 11, 20, 0.92)",
        backdropFilter: "blur(14px)",
        padding: "1rem",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 820,
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Cerrar"
          style={{
            position: "absolute",
            top: "-0.5rem",
            right: 0,
            zIndex: 1,
            background: "var(--panel)",
            border: "1px solid var(--panel-border)",
            borderRadius: "999px",
            color: "var(--text)",
            width: 36,
            height: 36,
            cursor: "pointer",
            fontSize: "1.1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ×
        </button>

        {/* Image + side arrows */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {multiple && (
            <button
              onClick={() => setCurrent((i) => i - 1)}
              disabled={!hasPrev}
              aria-label="Anterior"
              className="btn-secondary-custom"
              style={{
                flexShrink: 0,
                padding: "0.5rem 0.9rem",
                borderRadius: "0.75rem",
                fontSize: "1.3rem",
                opacity: hasPrev ? 1 : 0.25,
                cursor: hasPrev ? "pointer" : "not-allowed",
              }}
            >
              ‹
            </button>
          )}

          <div
            style={{
              flex: 1,
              borderRadius: "1rem",
              overflow: "hidden",
              background: "rgba(255,255,255,0.03)",
              border: "1px solid var(--panel-border)",
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              style={{ width: "100%", height: "auto", display: "block" }}
              unoptimized
              priority
            />
          </div>

          {multiple && (
            <button
              onClick={() => setCurrent((i) => i + 1)}
              disabled={!hasNext}
              aria-label="Siguiente"
              className="btn-secondary-custom"
              style={{
                flexShrink: 0,
                padding: "0.5rem 0.9rem",
                borderRadius: "0.75rem",
                fontSize: "1.3rem",
                opacity: hasNext ? 1 : 0.25,
                cursor: hasNext ? "pointer" : "not-allowed",
              }}
            >
              ›
            </button>
          )}
        </div>

        {/* Caption + dots */}
        <div style={{ textAlign: "center" }}>
          <p style={{ fontWeight: 600, marginBottom: "0.2rem" }}>{img.title}</p>
          {img.subtitle && (
            <p className="text-muted-custom" style={{ fontSize: "0.85rem", marginBottom: "0.75rem" }}>
              {img.subtitle}
            </p>
          )}
          {multiple && (
            <div style={{ display: "flex", justifyContent: "center", gap: "0.4rem" }}>
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Ir a imagen ${i + 1}`}
                  style={{
                    width: i === current ? 20 : 8,
                    height: 8,
                    borderRadius: "999px",
                    border: "none",
                    cursor: "pointer",
                    background: i === current ? "var(--accent)" : "var(--panel-border)",
                    padding: 0,
                    transition: "width 0.2s, background 0.2s",
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
