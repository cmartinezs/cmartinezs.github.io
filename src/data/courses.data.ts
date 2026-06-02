import type { CourseItem } from "@/types/experience.types";

export const courses: CourseItem[] = [
  {
    id: "dsy1103",
    code: "DSY1103",
    title: "Fullstack I: Backend",
    topics: [
      "Java y Spring Boot.",
      "APIs REST y persistencia.",
      "Seguridad y autenticación.",
      "Testing y calidad de código.",
    ],
    active: true,
  },
  {
    id: "fpy1101",
    code: "FPY1101",
    title: "Fundamentos de Programación",
    topics: [
      "Lógica y algoritmos desde cero.",
      "Python y estructuras de datos.",
      "Funciones y módulos.",
      "Orientación a objetos básica.",
    ],
    active: true,
  },
];

export interface GameProject {
  id: string;
  icon: string;
  title: string;
  description: string;
  href: string;
}

export const gameProjects: GameProject[] = [
  {
    id: "starborne-voyager",
    icon: "★",
    title: "Starborne Voyager",
    description:
      "Juego de exploración espacial con mecánicas de movimiento de nave, física de asteroides, disparo y gestión de recursos. Canvas 2D, colisiones y estado del juego.",
    href: "https://cmartinezs.github.io/starborne-voyager",
  },
  {
    id: "puzzle-maze",
    icon: "◈",
    title: "Puzzle Maze",
    description:
      "Laberinto generado algorítmicamente con mecánica de resolución, detección de colisiones, sistema de niveles y seguimiento de progreso.",
    href: "https://cmartinezs.github.io/puzzle-maze",
  },
  {
    id: "tower-defense",
    icon: "⬡",
    title: "Tower Defense",
    description:
      "Prototipo de tower defense con oleadas de enemigos, lógica de torres, pathfinding y UI de recursos. Canvas 2D y arquitectura orientada a eventos.",
    href: "https://cmartinezs.github.io/tower-defense",
  },
  {
    id: "plataformero",
    icon: "◎",
    title: "Plataformero",
    description:
      "Experimento de plataformero 2D con física de salto, gravedad, colisiones con tiles y animación de sprites. Base técnica para explorar mecánicas de movimiento fluido.",
    href: "https://cmartinezs.github.io/plataformero",
  },
];
