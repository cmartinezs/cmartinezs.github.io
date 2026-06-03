import Link from "next/link";
import { GlassCard } from "@/components/sub-components/GlassCard";

export function ContentSection() {
  return (
    <section className="section" id="contenido">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6">
          <GlassCard>
            <h2 className="display-heading h1">Contenido y aprendizaje</h2>
            <p className="text-muted-custom">
              Comparto conocimiento práctico sobre backend, arquitectura, buenas prácticas,
              docencia e IA aplicada al desarrollo.
            </p>
            <ul className="feature-list">
              <li>Backend con Spring Boot.</li>
              <li>Buenas prácticas reales.</li>
              <li>Testing y calidad.</li>
              <li>Uso de IA en desarrollo.</li>
              <li>Guías técnicas y recursos educativos.</li>
            </ul>
            <Link className="card-link-custom" href="/recursos/">
              Ver recursos
            </Link>
          </GlassCard>
          <GlassCard>
            <h2 className="display-heading h1">En qué puedo ayudarte</h2>
            <p className="text-muted-custom">
              Trabajo con personas, equipos y proyectos que necesitan criterio técnico y ejecución
              práctica.
            </p>
            <ul className="feature-list">
              <li>Desarrollar una plataforma o API.</li>
              <li>Mejorar la arquitectura de un sistema.</li>
              <li>Implementar autenticación con KeyGo.</li>
              <li>Capacitar equipos, alumnos o perfiles técnicos.</li>
              <li>Integrar IA en tu flujo de trabajo.</li>
            </ul>
            <Link className="card-link-custom" href="/contacto/?topic=colaboracion">
              Hablemos de tu proyecto
            </Link>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
