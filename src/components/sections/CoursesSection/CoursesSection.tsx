import Link from "next/link";
import { GlassCard } from "@/components/sub-components/GlassCard";
import { Badge } from "@/components/mini-components/Badge";
import { courses, gameProjects } from "@/data/courses.data";

export function CoursesSection() {
  return (
    <>
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
                    href={`https://cmartinezs.github.io/${course.code.toLowerCase()}-${course.title.toLowerCase().replace(/\s+/g, "-")}`}
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

      <section className="section" id="videojuegos">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Videojuegos</span>
            <h2 className="display-heading display-5 mt-3">
              Proyectos de exploración creativa y técnica.
            </h2>
            <p className="mt-3">
              Experimentos y prototipos donde aplico desarrollo web y lógica de juego para explorar
              interfaces, física, gráficos y mecánicas interactivas.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameProjects.map((game) => (
              <div key={game.id}>
                <GlassCard as="article" className="h-full">
                  <span className="service-icon">{game.icon}</span>
                  <h3 className="h5">{game.title}</h3>
                  <p className="text-muted-custom">{game.description}</p>
                  <Link
                    className="card-link-custom"
                    href={game.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver proyecto
                  </Link>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
