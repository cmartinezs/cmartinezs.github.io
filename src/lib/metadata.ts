import type { Metadata } from "next";

const BASE_URL = "https://cmartinezs.github.io";
const AUTHOR = "Carlos Martínez Sánchez";
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
  jobTitle: "Senior Software Engineer",
  description:
    "Ingeniero de software senior y docente de informática con más de 15 años de experiencia en backend, arquitectura, sistemas distribuidos e IA aplicada.",
  sameAs: [
    "https://github.com/cmartinezs",
    "https://www.linkedin.com/in/cfms",
  ],
  knowsAbout: [
    "Software Engineering",
    "Backend Development",
    "Java",
    "Spring Boot",
    "REST APIs",
    "Microservices",
    "Distributed Systems",
    "Apache Kafka",
    "Software Architecture",
    "Cloud Computing",
    "Docker",
    "Kubernetes",
    "Applied Artificial Intelligence",
    "Technical Education",
  ],
};
