import { gameProjects } from "@/data/games.data";
import { GamePreviewCard } from "./GamePreviewCard";

export function GamesSection() {
  return (
    <section className="section" id="videojuegos">
      <div className="container">
        <div className="section-title">
          <span className="eyebrow">Proyectos</span>
          <h2 className="display-heading display-5 mt-3">
            Exploración creativa y técnica a través del juego.
          </h2>
          <p className="mt-3">
            Prototipos donde aplico desarrollo web y lógica de juego para experimentar con física,
            gráficos, pathfinding y mecánicas interactivas sobre Canvas 2D.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {gameProjects.map((game) => (
            <GamePreviewCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}
