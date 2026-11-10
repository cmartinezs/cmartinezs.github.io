import Link from "next/link";
import type { GameProject } from "@/data/games.data";
import styles from "./GamePreviewCard.module.css";

/** Portfolio artwork is intentionally local: never iframe an unverified deployment. */
function GameArtwork({ id }: { id: GameProject["id"] }) {
  if (id === "starborne-voyager") {
    return (
      <svg viewBox="0 0 280 130" fill="none" aria-hidden="true">
        <ellipse cx="145" cy="65" rx="102" ry="39" stroke="currentColor" strokeWidth="1.4" transform="rotate(-18 145 65)" />
        <ellipse cx="145" cy="65" rx="77" ry="26" stroke="currentColor" opacity=".4" transform="rotate(23 145 65)" />
        <circle cx="145" cy="65" r="27" stroke="currentColor" strokeWidth="2" />
        <circle cx="145" cy="65" r="12" fill="currentColor" opacity=".23" />
        <circle cx="44" cy="94" r="5" fill="currentColor" />
        <circle cx="225" cy="37" r="4" fill="currentColor" opacity=".7" />
        <path d="M18 22h9m-4.5-4.5v9M253 96h10m-5-5v10" stroke="currentColor" opacity=".55" />
      </svg>
    );
  }
  if (id === "lab-lights-web") {
    return (
      <svg viewBox="0 0 280 130" fill="none" aria-hidden="true">
        {Array.from({ length: 15 }, (_, i) => {
          const x = 70 + (i % 5) * 30;
          const y = 20 + Math.floor(i / 5) * 30;
          const active = [1, 3, 5, 7, 9, 11, 13].includes(i);
          return (
            <rect
              key={i}
              x={x} y={y} width="23" height="23" rx="6"
              fill={active ? "currentColor" : "transparent"}
              fillOpacity={active ? ".85" : "0"}
              stroke="currentColor"
              strokeOpacity={active ? ".95" : ".35"}
            />
          );
        })}
      </svg>
    );
  }
  if (id === "neon-pursuit") {
    return (
      <svg viewBox="0 0 280 130" fill="none" aria-hidden="true">
        <path d="M16 103 109 27l40 32 44-31 71 76" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M38 103 114 46l33 29 46-31 49 59" stroke="currentColor" opacity=".4" />
        <path d="M130 83h39m-23-13 24 13-24 13" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 116h236M88 17h19M190 18h27" stroke="currentColor" opacity=".32" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 280 130" fill="none" aria-hidden="true">
      <rect x="52" y="29" width="49" height="49" rx="9" stroke="currentColor" strokeWidth="2" />
      <rect x="115" y="17" width="49" height="49" rx="9" stroke="currentColor" opacity=".68" />
      <rect x="178" y="38" width="49" height="49" rx="9" stroke="currentColor" opacity=".5" />
      <path d="M76 92v17h126V89" stroke="currentColor" opacity=".55" />
      <circle cx="202" cy="89" r="6" fill="currentColor" />
    </svg>
  );
}

export function GamePreviewCard({ game }: { game: GameProject }) {
  const hasVerifiedDemo = Boolean(game.demoUrl);
  return (
    <article className="glass-card overflow-hidden flex flex-col" style={{ padding: 0 }}>
      <div className={styles.artwork + " " + styles[game.id.replace(/-/g, "_")]}>
        <div className={styles.topline}>
          <span>{game.owner} / DIGITAL LAB</span>
          <span>{hasVerifiedDemo ? "DEMO DISPONIBLE" : "CONCEPTO VISUAL"}</span>
        </div>
        <div className={styles.visual}>
          <GameArtwork id={game.id} />
        </div>
        <strong className={styles.artworkTitle}>{game.title}</strong>
      </div>

      <div className="flex flex-col flex-1" style={{ padding: "1.25rem 1.5rem 1.5rem" }}>
        <div className={styles.meta}>
          <span>{game.owner}</span>
          <span>{game.publicationStatus === "public-source" ? "Código público" : "Código privado"}</span>
        </div>
        <h3 className="h5">{game.title}</h3>
        <p className="text-muted-custom mt-2" style={{ fontSize: "0.9rem", lineHeight: 1.6 }}>
          {game.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-3">
          {game.tech.map((tech) => (
            <span key={tech} className="badge-soft" style={{ borderRadius: 999, padding: "0.15rem 0.65rem", fontSize: "0.75rem" }}>
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto pt-4">
          {game.demoUrl ? (
            <Link className="card-link-custom" href={game.demoUrl} target="_blank" rel="noopener noreferrer">
              Abrir demo
            </Link>
          ) : game.repositoryUrl ? (
            <Link className="card-link-custom" href={game.repositoryUrl} target="_blank" rel="noopener noreferrer">
              Ver código en ADÜMÜN
            </Link>
          ) : (
            <p className={styles.availability}>Demo pública pendiente de verificación</p>
          )}
        </div>
      </div>
    </article>
  );
}
