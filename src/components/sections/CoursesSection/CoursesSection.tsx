import Link from "next/link";
import { GlassCard } from "@/components/sub-components/GlassCard";
import { Badge } from "@/components/mini-components/Badge";
import { courses } from "@/data/courses.data";

export function CoursesSection() {
  return (
    <section className="section" id="cursos">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Cursos activos</span>
          <h2 className="display-heading display-5 mt-3">Asignaturas que imparto actualmente.</h2>
          <p className="mt-3">
            Materiales, ejercicios y proyectos publicados en GitHub Pages para acompañar cada
            asignatura.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course) => (
            <div key={course.id}>
              <GlassCard as="article" className="h-full">
                <Badge variant="pill" className="mb-3">
                  {course.code}
                </Badge>
                <h3 className="h4">{course.title}</h3>
                <ul className="feature-list">
                  {course.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
                <Link
                  className="card-link-custom"
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver página del curso
                </Link>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
