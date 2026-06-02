import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { personJsonLd } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Carlos Martínez | Software Developer & Docente",
    template: "%s | Carlos Martínez",
  },
  description:
    "Carlos Martínez, software developer backend specialist, docente universitario y creador de soluciones con IA. 15+ años de experiencia en Java, Spring Boot, React, Kotlin.",
  metadataBase: new URL("https://cmartinezs.github.io"),
  robots: { index: true, follow: true },
  authors: [{ name: "Carlos Martínez" }],
  openGraph: {
    siteName: "Carlos Martínez",
    locale: "es_CL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
