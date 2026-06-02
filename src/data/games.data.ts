export interface GameProject {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
  label: string;
  tech: string[];
}

export const gameProjects: GameProject[] = [
  {
    id: "starborne-voyager",
    icon: "★",
    title: "Starborne Voyager",
    description: "Exploración espacial: navegación, física orbital y gestión de recursos en un entorno generativo.",
    href: "https://cmartinezs.github.io/starborne-voyager",
    label: "Jugar",
    tech: ["TypeScript", "React", "Three.js", "Canvas 2D"],
  },
  {
    id: "web-game-prototypes",
    icon: "◈",
    title: "Web Game Prototypes",
    description: "Colección de prototipos de mecánicas de juego implementadas directamente en el navegador.",
    href: "https://cmartinezs.github.io/web-game-prototypes",
    label: "Explorar",
    tech: ["TypeScript", "React", "Three.js", "Canvas 2D"],
  },
  {
    id: "lab-lights-web",
    icon: "◉",
    title: "Lab Lights",
    description: "Experimento visual con luces, shaders y efectos de iluminación interactiva en web.",
    href: "https://cmartinezs.github.io/lab-lights-web",
    label: "Ver demo",
    tech: ["TypeScript", "React", "p5.js", "Anime.js", "Tailwind CSS"],
  },
  {
    id: "neon-pursuit",
    icon: "▶",
    title: "Neon Pursuit",
    description: "Juego de persecución con estética neon: velocidad, reflejos y geometría en movimiento.",
    href: "https://cmartinezs.github.io/neon-pursuit",
    label: "Jugar",
    tech: ["TypeScript", "React", "Tailwind CSS"],
  },
];
