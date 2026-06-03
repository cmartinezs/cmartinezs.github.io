import type { WorkMethodContent } from "@/types/workMethod.types";

export const workMethodContent: WorkMethodContent = {
  principles: [
    {
      id: "entender-dominio",
      icon: "bi-search",
      title: "Entender el dominio antes de diseñar",
      description:
        "No diseño soluciones hasta comprender el problema que resuelven y el contexto en que operan. Una mala comprensión del dominio produce arquitecturas que resuelven el problema equivocado.",
      evidence:
        "En integración bancaria y e-commerce, el tiempo invertido en modelar el dominio previno decisiones de diseño difíciles de revertir.",
    },
    {
      id: "limites-contratos",
      icon: "bi-intersect",
      title: "Definir límites y contratos explícitos",
      description:
        "Las APIs y los servicios necesitan contratos claros antes que código. Los límites explícitos hacen el sistema más fácil de entender, probar y evolucionar con el tiempo.",
      evidence:
        "Los sistemas que más tarde resultaron difíciles de mantener eran los que carecían de contratos claros entre sus componentes.",
    },
    {
      id: "construccion-incremental",
      icon: "bi-stack",
      title: "Construir incrementalmente con criterio",
      description:
        "Prefiero sistemas que crecen de forma deliberada sobre los que se diseñan para un futuro que rara vez llega. Cada incremento debe agregar valor real y mantener coherencia técnica.",
      evidence:
        "En proyectos de liderazgo técnico, la entrega incremental con revisión constante redujo el retrabajo y mejoró la predictibilidad.",
    },
    {
      id: "calidad-mantenibilidad",
      icon: "bi-shield-check",
      title: "Cuidar calidad y mantenibilidad",
      description:
        "El código que no se puede leer ni probar acumula deuda silenciosa. La calidad no es un extra ni un lujo: es lo que permite que el software siga siendo útil con el tiempo.",
      evidence:
        "Incorporar tests desde el diseño inicial en cursos universitarios demostró que la calidad es una práctica, no una fase al final.",
    },
    {
      id: "transferir-criterio",
      icon: "bi-arrow-left-right",
      title: "Transferir criterio, no solo soluciones",
      description:
        "El objetivo no es resolver el problema por el equipo, sino que el equipo pueda resolverlo con criterio propio. La transferencia de conocimiento es parte del trabajo técnico, no un bonus.",
      evidence:
        "En contextos de liderazgo técnico y docencia, el resultado más valioso fue el equipo o los estudiantes que tomaron decisiones técnicas autónomas.",
    },
    {
      id: "honestidad-tecnica",
      icon: "bi-chat-square-text",
      title: "Revisar y mejorar con honestidad",
      description:
        "La revisión de código es conversación técnica, no control. Nombrar los problemas con claridad, sin evasión, es lo que permite mejorar. El silencio técnico acumula deuda.",
      evidence:
        "Los equipos que establecieron cultura de revisión abierta mejoraron la consistencia del código y redujeron incidentes recurrentes.",
    },
  ],
};
