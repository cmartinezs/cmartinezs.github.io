import type { CourseItem } from "@/types/experience.types";

export const courses: CourseItem[] = [
  {
    id: "dsy1103",
    code: "DSY1103",
    title: "Fullstack I: Backend",
    description:
      "Desarrollo backend en Java con Spring Boot: APIs REST, persistencia, seguridad, arquitectura por capas y buenas prácticas profesionales desde el primer proyecto real.",
    topics: [
      "Java y Spring Boot.",
      "APIs REST y persistencia.",
      "Seguridad y autenticación.",
      "Testing y calidad de código.",
    ],
    url: "https://cmartinezs.github.io/DSY1103-FULLSTACK-I-BACKEND",
    active: true,
  },
  {
    id: "fpy1101",
    code: "FPY1101",
    title: "Fundamentos de Programación",
    description:
      "Introducción a la programación con Python: lógica, estructuras de datos, funciones, orientación a objetos y resolución de problemas desde cero con enfoque aplicado.",
    topics: [
      "Lógica y algoritmos desde cero.",
      "Python y estructuras de datos.",
      "Funciones y módulos.",
      "Orientación a objetos básica.",
    ],
    url: "https://cmartinezs.github.io/FPY1101-FUNDAMENTOS-PROGRAMACION",
    active: true,
  },
];
