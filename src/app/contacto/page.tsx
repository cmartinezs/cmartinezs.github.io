import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollTop } from "@/components/layout/ScrollTop";
import { ContactoClient } from "./ContactoClient";

export const metadata: Metadata = buildMetadata({
  title: "Contacto",
  description:
    "Contacto profesional de Carlos Martínez para proyectos de software, formación y colaboraciones técnicas.",
  path: "/contacto/",
});

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactoClient />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
