import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { personJsonLd } from "@/lib/metadata";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carlos Martínez | Senior Software Engineer",
  description:
    "Senior Software Engineer en Chile. Más de 15 años construyendo software backend, APIs, sistemas distribuidos y productos digitales. Java, Spring Boot, cloud e IA aplicada.",
  metadataBase: new URL("https://cmartinezs.github.io"),
  robots: { index: true, follow: true },
  authors: [{ name: "Carlos Martínez Sánchez" }],
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
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Existing sections still use Bootstrap Icons and Devicon CSS classes.
            Restore their stylesheets until the icon system is migrated locally. */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
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
