"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { PageWrapper } from "@/components/layout/PageWrapper";
import { ContactForm } from "@/components/components/ContactForm";
import { SocialButton } from "@/components/mini-components/SocialButton";

function ContactoInner() {
  const searchParams = useSearchParams();
  const topic = searchParams.get("topic") ?? "";

  return (
    <PageWrapper pageClass="page-contacto">
      <section className="page-hero" id="inicio">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5" id="canales">
              <span className="eyebrow">Contacto</span>
              <h1 className="page-title mt-3">
                Cuéntame qué quieres construir, mejorar o enseñar.
              </h1>
              <p className="hero-lead mt-2">
                Si necesitas construir una API, mejorar una arquitectura, crear una landing,
                formar a un equipo o explorar IA aplicada, conversemos.
              </p>
              <div className="grid gap-2 mt-4">
                <SocialButton
                  href="https://github.com/cmartinezs"
                  icon="bi-github"
                  label="GitHub"
                  className="btn-primary-custom"
                />
                <SocialButton
                  href="https://www.linkedin.com/in/cfms"
                  icon="bi-linkedin"
                  label="LinkedIn"
                />
              </div>
            </div>
            <div className="lg:col-span-7" id="formulario">
              <div className="glass-card">
                <ContactForm initialTopic={topic} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}

export function ContactoClient() {
  return (
    <Suspense>
      <ContactoInner />
    </Suspense>
  );
}
