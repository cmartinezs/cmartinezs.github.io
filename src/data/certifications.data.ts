import type { CertificationItem } from "@/types/experience.types";

export const featuredCertifications: CertificationItem[] = [
  {
    id: "splpc",
    title: "Software Project Leader",
    issuer: "SPLPC",
    year: "2025",
    category: "Liderazgo",
    featured: true,
    description:
      "Software Project Leader Professional Certification - SPLPC, orientada a liderazgo, gestión y conducción de proyectos de software.",
  },
  {
    id: "oracle-java",
    title: "Oracle Java SE 8",
    issuer: "Oracle",
    year: "2020",
    category: "Backend",
    featured: true,
    description:
      "Oracle Certified Associate, Java SE 8 Programmer I. Refuerza una base formal en Java, lenguaje central de mi trayectoria backend.",
  },
  {
    id: "kotlin-fundamentals",
    title: "Kotlin Fundamentals",
    issuer: "JetBrains",
    year: "2025",
    category: "Mobile",
    featured: true,
    description: "Programming Fundamentals in Kotlin, conectado con docencia y desarrollo móvil moderno.",
  },
];

export const technicalCourses: string[] = [
  "Programando con Java para aplicaciones Android.",
  "Java Fundamentals, Sonda Training.",
  "Desarrollo de Sistemas utilizando Spring, Track IT.",
  "Uso Efectivo de Java Server Faces, Track IT.",
  "Desarrollo de Aplicaciones Java Server Pages, Track IT.",
  "Modelado de Requisitos del Sistema, everis Training.",
];

export const complementaryLearning: string[] = [
  "Curso de Inglés Nivel 3, Instituto Chileno-Británico de Cultura.",
  "Curso de Inglés Nivel 2, Instituto Chileno-Británico de Cultura.",
  "Formación continua aplicada a docencia, backend, arquitectura y desarrollo móvil con Ionic/Angular y Kotlin.",
];
