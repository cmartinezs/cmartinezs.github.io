import type { Metadata } from "next";

const BASE_URL = "https://cmartinezs.github.io";
const AUTHOR = "Carlos Martínez";
const BASE_TITLE = "Carlos Martínez";

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = `${title} | ${BASE_TITLE}`;
  const url = `${BASE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(BASE_URL),
    alternates: { canonical: url },
    authors: [{ name: AUTHOR }],
    robots: { index: true, follow: true },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: BASE_TITLE,
      type: "website",
      locale: "es_CL",
    },
    twitter: {
      card: "summary",
      title: fullTitle,
      description,
    },
  };
}

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: AUTHOR,
  url: BASE_URL,
  jobTitle: "Desarrollador Backend Senior · Arquitecto de Software · Docente Técnico",
  sameAs: ["https://github.com/cmartinezs", "https://www.linkedin.com/in/cfms"],
  knowsAbout: [
    "Backend Development",
    "Software Architecture",
    "Java",
    "Spring Boot",
    "REST APIs",
    "Clean Architecture",
    "Technical Leadership",
    "Technical Education",
    "PostgreSQL",
    "Docker",
    "Microservices",
    "React",
    "Kotlin",
  ],
};
