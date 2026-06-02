import type { CertificationItem, TechnicalCourse } from "@/types/experience.types";

export const featuredCertifications: CertificationItem[] = [
  {
    id: "splpc",
    title: "Software Project Leader",
    issuer: "CertiProf",
    year: "2025",
    category: "Liderazgo",
    featured: true,
    description:
      "Software Project Leader Professional Certification - SPLPC, orientada a liderazgo, gestión y conducción de proyectos de software.",
    credlyUrl: "https://www.credly.com/badges/6c9db7d4-3dae-4c0b-9b14-16e9135af736/public_url",
    badgeImageUrl: "https://images.credly.com/images/a9500f3f-00ae-491e-9e5f-792fd2ce3be0/linkedin_thumb_blob",
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
    credlyUrl: "https://www.credly.com/badges/c67aa6bc-580f-431b-91ba-8742620ddf43/public_url",
    badgeImageUrl: "https://images.credly.com/images/a9848abf-f8bd-474d-a9b4-6086da11a916/linkedin_thumb_Oracle_Associates_Badge__1_.png",
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
  {
    id: "aws-educator",
    title: "AWS Academy Educator",
    issuer: "Amazon Web Services",
    year: "2025",
    category: "Cloud",
    featured: true,
    description:
      "Credencial de educador certificado por AWS Academy, habilitado para impartir formación oficial en tecnologías de nube de Amazon Web Services.",
    credlyUrl: "https://www.credly.com/badges/88151f75-13ca-42d5-ab8a-bb80f4757c16/public_url",
    badgeImageUrl: "https://images.credly.com/images/e7bf6727-22cf-45d6-ad9c-76ab57c3f11b/linkedin_thumb_image.png",
  },
  {
    id: "depc",
    title: "DevOps Essentials",
    issuer: "CertiProf",
    year: "2025",
    category: "DevOps",
    featured: true,
    description:
      "DevOps Essentials Professional Certification - DEPC®, cubre principios fundamentales de cultura DevOps, integración continua, entrega continua y colaboración entre desarrollo y operaciones.",
    credlyUrl: "https://www.credly.com/badges/def21580-84af-4f8a-a046-238643f0771a/public_url",
    badgeImageUrl: "https://images.credly.com/images/c3f12faf-d477-49f0-8032-32121303dc55/linkedin_thumb_blob",
  },
  {
    id: "lifelong-learning-2026",
    title: "Lifelong Learning 2026",
    issuer: "Credly",
    year: "2026",
    category: "Aprendizaje",
    featured: false,
    description:
      "Reconocimiento al compromiso con el aprendizaje continuo durante 2026.",
    credlyUrl: "https://www.credly.com/badges/0018fbbd-f79a-41da-b29d-ab5d93f0e4f0/public_url",
    badgeImageUrl: "https://images.credly.com/images/5e2afabf-62f3-48ae-bbed-7e57c2e78c6a/linkedin_thumb_blob",
  },
];

export const technicalCourses: TechnicalCourse[] = [
  {
    id: "java-fundamentals",
    title: "Java Fundamentals",
    issuer: "Sonda Training",
    year: "2017",
    hours: "40",
    imageUrl: "/certificados/java-fundamentals-sonda-2017.png",
  },
  {
    id: "desarrollo-spring",
    title: "Desarrollo de Sistemas utilizando Spring",
    issuer: "Track IT",
    year: "2011",
    hours: "24",
    imageUrl: "/certificados/desarrollo-spring-trackit-2011.png",
  },
  {
    id: "java-server-faces",
    title: "Uso Efectivo de Java Server Faces",
    issuer: "Track IT",
    year: "2011",
    hours: "24",
    imageUrl: "/certificados/java-server-faces-trackit-2011.png",
  },
  {
    id: "java-server-pages",
    title: "Desarrollo de Aplicaciones Java Server Pages",
    issuer: "Track IT",
    year: "2011",
    hours: "24",
    imageUrl: "/certificados/java-server-pages-trackit-2011.png",
  },
  {
    id: "modelado-requisitos",
    title: "BpE-Modelado de Requisitos del Sistema",
    issuer: "everis Training",
    year: "2014",
    hours: "8",
    imageUrl: "/certificados/modelado-requisitos-everis-2014.png",
  },
  {
    id: "java-android",
    title: "Programando con Java para aplicaciones Android",
    issuer: "Udemy",
    year: "2023",
  },
];

export const complementaryLearning: string[] = [
  "Curso de Inglés Nivel 3, Instituto Chileno-Británico de Cultura.",
  "Curso de Inglés Nivel 2, Instituto Chileno-Británico de Cultura.",
  "Formación continua aplicada a docencia, backend, arquitectura y desarrollo móvil con Ionic/Angular y Kotlin.",
];
