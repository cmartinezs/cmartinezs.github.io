"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GlassCard } from "@/components/sub-components/GlassCard";
import { ImageCarouselModal } from "@/components/sub-components/ImageCarouselModal/ImageCarouselModal";
import type { CarouselImage } from "@/components/sub-components/ImageCarouselModal/ImageCarouselModal";
import { technicalCourses } from "@/data/certifications.data";
import { sortByDateDesc } from "@/lib/sortByDate";

const sorted = sortByDateDesc(technicalCourses);

const certImages: CarouselImage[] = sorted
  .filter((c) => !!c.imageUrl)
  .map((c) => ({
    src: c.imageUrl!,
    alt: c.title,
    title: c.title,
    subtitle: `${c.issuer} · ${c.year}${c.hours ? ` · ${c.hours} hrs` : ""}`,
    width: 600,
    height: 420,
  }));

export function TechnicalCoursesGrid() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);

  const openModal = (course: (typeof technicalCourses)[number]) => {
    const idx = certImages.findIndex((c) => c.title === course.title);
    if (idx === -1) return;
    setModalIndex(idx);
    setModalOpen(true);
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map((course) => (
          <GlassCard key={course.id} as="article" className="flex flex-col">
            {course.imageUrl ? (
              <button
                onClick={() => openModal(course)}
                aria-label={`Ver certificado ${course.title}`}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  display: "block",
                  borderRadius: "0.75rem",
                  overflow: "hidden",
                  marginBottom: "1rem",
                }}
              >
                <Image
                  src={course.imageUrl}
                  alt={`Certificado ${course.title}`}
                  width={600}
                  height={420}
                  style={{ width: "100%", height: "auto", display: "block" }}
                  unoptimized
                />
              </button>
            ) : (
              <div
                style={{
                  height: "4rem",
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span className="service-icon" style={{ marginBottom: 0 }}>
                  {course.year.slice(-2)}
                </span>
              </div>
            )}
            <p
              className="text-muted-custom"
              style={{ fontSize: "0.75rem", marginBottom: "0.25rem" }}
            >
              {course.issuer} · {course.year}
              {course.hours && <> · {course.hours} hrs</>}
            </p>
            <h3 className="h5" style={{ marginBottom: "0.75rem" }}>
              {course.title}
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "auto" }}>
              {course.downloadUrl && (
                <a
                  className="card-link-custom"
                  href={course.downloadUrl}
                  download={`Carlos Martínez - ${course.title} - ${course.issuer} ${course.year}.${course.downloadUrl.split(".").pop()}`}
                >
                  <i className="bi bi-download" aria-hidden="true" style={{ marginRight: "0.35rem" }} />
                  Descargar
                </a>
              )}
              {course.verifyUrl && (
                <Link
                  className="card-link-custom"
                  href={course.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verificar en Coursera
                </Link>
              )}
            </div>
          </GlassCard>
        ))}
      </div>

      <ImageCarouselModal
        images={certImages}
        initialIndex={modalIndex}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
