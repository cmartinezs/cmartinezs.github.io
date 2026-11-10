/**
 * Public portfolio catalogue, not the authoritative product registry.
 * ADÜMÜN GitHub Pages follow https://adumun.github.io/<repository-name>.
 * demoStatus separates owner-confirmed URLs from repositories with a Pages workflow only.
 */
export interface GameProject {
  id: string;
  icon: string;
  title: string;
  description: string;
  owner: "ADÜMÜN";
  repositoryUrl?: string;
  demoUrl?: string;
  demoStatus?: "owner-confirmed" | "workflow-configured";
  publicationStatus: "public-source" | "private-development";
  tech: string[];
  techFocus?: string;
}

export const gameProjects: GameProject[] = [
  {
    id: "starborne-voyager",
    demoStatus: "workflow-configured",
    demoUrl: "https://adumun.github.io/starborne-voyager/",
    icon: "★",
    title: "Starborne Voyager",
    description:
      "Exploración espacial: navegación, física orbital y gestión de recursos en un entorno generativo.",
    owner: "ADÜMÜN",
    publicationStatus: "private-development",
    tech: ["TypeScript", "React", "Three.js", "Canvas 2D"],
    techFocus: "Física y rendering 3D en tiempo real",
  },
  {
    id: "web-game-prototypes",
    demoStatus: "workflow-configured",
    demoUrl: "https://adumun.github.io/web-game-prototypes/",
    icon: "◈",
    title: "Web Game Prototypes",
    description:
      "Colección de prototipos de mecánicas de juego implementadas directamente en el navegador.",
    owner: "ADÜMÜN",
    publicationStatus: "private-development",
    tech: ["TypeScript", "React", "Three.js", "Canvas 2D"],
    techFocus: "Prototipado rápido de mecánicas",
  },
  {
    id: "lab-lights-web",
    icon: "◉",
    title: "Lab Lights",
    description:
      "Juego de puzles de luces. Una experiencia web desarrollada con React, TypeScript y Vite.",
    owner: "ADÜMÜN",
    repositoryUrl: "https://github.com/adumun/lab-lights-web",
    demoStatus: "owner-confirmed",
    demoUrl: "https://adumun.github.io/lab-lights-web/",
    publicationStatus: "public-source",
    tech: ["TypeScript", "React", "Vite", "Vitest"],
    techFocus: "Interacción y lógica de puzles",
  },
  {
    id: "neon-pursuit",
    demoStatus: "workflow-configured",
    demoUrl: "https://adumun.github.io/neon-pursuit/",
    icon: "▶",
    title: "Neon Pursuit",
    description:
      "Prototipo de juego de persecución con estética neón, velocidad y geometría en movimiento.",
    owner: "ADÜMÜN",
    publicationStatus: "private-development",
    tech: ["TypeScript", "React"],
    techFocus: "Game loop y mecánicas interactivas",
  },
];