import type { CaseStudy } from "@/types/caseStudy.types";

export const caseStudies: CaseStudy[] = [
  {
    id: "optimizacion-carrito-fulfillment",
    title: "Estrategia para optimizar obtención de productos del carrito según cercanía logística",
    domain: "ecommerce",
    industry: "E-commerce / Fulfillment",
    period: "2022–2024",
    context:
        "Participé en un contexto de producto y logística donde la experiencia de entrega era un factor competitivo relevante. En particular, existía la necesidad de optimizar la obtención de productos de un carrito considerando la cercanía del cliente con los centros de almacenamiento, junto con otras variables operacionales y de negocio.",
    problem:
        "La selección de productos y disponibilidad para un carrito no dependía solo del stock, sino también de variables como cercanía geográfica, tiempos de entrega, costos asociados y condiciones operacionales. El desafío era definir una estrategia que permitiera favorecer alternativas más cercanas al cliente cuando correspondiera, con impacto positivo en tiempos de entrega y costo final, especialmente en un mercado competitivo como Río de Janeiro.",
    contribution:
        "Participé en la definición de estrategia técnica y en la descomposición de tareas necesarias para optimizar la obtención de productos del carrito en función de la cercanía entre cliente y centros de almacenamiento. El trabajo implicó analizar el problema con mirada de producto, coordinar criterios técnicos, considerar múltiples variables de decisión y orientar la solución hacia una mejora concreta en la promesa de entrega.",
    results: [
      {
        description:
            "La estrategia permitió orientar la obtención de productos hacia alternativas logísticas más convenientes para el cliente, considerando cercanía y otras variables relevantes del dominio.",
      },
      {
        description:
            "La mejora contribuyó al objetivo de reducir tiempos de entrega y fortalecer la competitividad del servicio en Río de Janeiro frente a alternativas del mercado.",
      },
      {
        description:
            "El resultado esperado fue alcanzado, validando la estrategia definida para mejorar la experiencia de entrega en ese contexto.",
      },
    ],
    stack: ["Backend", "APIs", "E-commerce", "Fulfillment", "Optimización logística", "Diseño técnico"],
    confidentiality: "anonimized",
    featured: true,
    relatedServiceId: "backend-arquitectura",
  },
  {
    id: "reliquidacion-tarifaria-masiva",
    title: "Optimización del proceso de reliquidación tarifaria",
    domain: "operaciones",
    industry: "Utilities / Servicios sanitarios",
    period: "2024–presente",
    context:
        "Proceso operacional asociado a reliquidaciones tarifarias en un sistema empresarial utilizado para atender reglas, cálculos y ajustes sobre clientes. El flujo existente estaba orientado a procesamientos individuales, lo que hacía costoso abordar escenarios de volumen.",
    problem:
        "El procesamiento cliente a cliente aumentaba los tiempos de ejecución y el costo computacional cuando era necesario reliquidar grandes conjuntos de clientes. La necesidad era evolucionar el flujo hacia un enfoque masivo, manteniendo consistencia funcional y control sobre los resultados generados.",
    contribution:
        "Participé en la mejora y refactorización del proceso, pasando desde una lógica enfocada en operaciones individuales hacia procesamiento masivo. El trabajo implicó comprender reglas de negocio tarifarias, revisar el comportamiento existente, ajustar el flujo de ejecución y cuidar que la optimización no alterara los resultados esperados del proceso.",
    results: [
      {
        description:
            "El proceso completo redujo sus tiempos de ejecución al operar sobre conjuntos masivos de clientes en lugar de procesamientos individuales repetitivos.",
      },
      {
        description:
            "La solución disminuyó el costo computacional asociado al procesamiento, al reducir trabajo redundante y mejorar la forma de ejecución del flujo.",
      },
      {
        description:
            "La mejora permitió abordar escenarios operacionales de mayor volumen con un proceso más eficiente y sostenible.",
      },
    ],
    stack: ["Java", "JEE", "Oracle", "PL/SQL", "Procesamiento batch"],
    confidentiality: "anonimized",
    featured: true,
    relatedServiceId: "backend-arquitectura",
  },
  {
    id: "dmp-registro-mediciones-tareas",
    title: "Registro de mediciones en tareas operacionales",
    domain: "operaciones",
    industry: "Utilities / Monitoreo operacional",
    period: "2024–presente",
    context:
        "Digital Monitoring Plant requería incorporar una nueva capacidad funcional para registrar mediciones dentro del flujo de tareas operacionales. La funcionalidad debía integrarse a una experiencia ya existente y responder a necesidades concretas de seguimiento y operación.",
    problem:
        "El sistema necesitaba capturar mediciones asociadas a tareas, evitando que esa información quedara fuera del flujo digital o dependiera de registros manuales externos. La dificultad principal estaba en incorporar la funcionalidad completa sin romper la operación existente ni perder claridad en la experiencia de uso.",
    contribution:
        "Implementé una funcionalidad nueva para el registro de mediciones en tareas, trabajando sobre el flujo funcional, la interfaz y la integración con servicios. El foco estuvo en transformar una necesidad operacional en una capacidad usable dentro del sistema, cuidando validaciones, consistencia de datos y continuidad del proceso.",
    results: [
      {
        description:
            "Las tareas operacionales incorporaron registro digital de mediciones como parte del flujo de trabajo del sistema.",
      },
      {
        description:
            "La funcionalidad redujo dependencia de registros externos al integrar la captura de datos directamente en la operación.",
      },
      {
        description:
            "El sistema ganó una capacidad nueva para trazabilidad y seguimiento de información operacional vinculada a tareas.",
      },
    ],
    stack: ["React", "Next.js", "TypeScript", "REST", "Integración frontend/backend"],
    confidentiality: "anonimized",
    featured: true,
    relatedServiceId: "frontend-producto",
  },
  {
    id: "portabilidad-financiera",
    title: "Implementación de Portabilidad Financiera bajo plazo legislativo",
    domain: "banca",
    industry: "Banca / Regulación financiera",
    period: "2019–2021",
    context:
        "Proyecto bancario asociado a la implementación de Portabilidad Financiera, impulsado por exigencias regulatorias y plazos legislativos acotados. El contexto requería coordinación técnica, rapidez de entrega y cuidado en la integración con procesos financieros existentes.",
    problem:
        "La entrada en vigencia de la normativa exigía implementar capacidades en un plazo muy reducido. El desafío era construir e integrar funcionalidad crítica sin sacrificar calidad, trazabilidad ni consistencia en un dominio regulado.",
    contribution:
        "Participé en la implementación técnica de la solución, abordando desarrollo backend, integración entre sistemas, validaciones, pruebas y documentación técnica. El trabajo exigió adaptarse a un escenario de presión por calendario, manteniendo foco en entregables funcionales y alineados a la normativa.",
    results: [
      {
        description:
            "La implementación permitió responder a los plazos exigidos por el contexto legislativo de la Portabilidad Financiera.",
      },
      {
        description:
            "La solución integró capacidades nuevas dentro de un entorno bancario regulado, con foco en consistencia, trazabilidad y entrega oportuna.",
      },
      {
        description:
            "El proyecto fortaleció experiencia práctica en integración bancaria, trabajo bajo presión normativa y entrega de software crítico en ventanas acotadas.",
      },
    ],
    stack: ["Java", "Spring Boot", "Microservicios", "REST", "Integración", "Testing"],
    confidentiality: "public",
    featured: true,
    relatedServiceId: "backend-arquitectura",
  },

  {
    id: "salesforce-mobile-cases",
    title: "Integración Salesforce para visualización de casos en app mobile",
    domain: "banca",
    industry: "Banca / CRM e integración",
    period: "2019–2021",
    context:
        "En un contexto bancario, distintos métodos de contacto centralizaban casos en Salesforce. La información era necesaria para ser consultada y presentada desde una aplicación mobile, manteniendo una integración controlada con la plataforma CRM.",
    problem:
        "La app mobile necesitaba acceder a casos originados por canales de contacto centralizados en Salesforce. Para lograrlo, era necesario habilitar una integración backend segura, capaz de autenticarse contra Salesforce, obtener la información asociada y exponerla de forma consumible para la aplicación.",
    contribution:
        "Habilité la integración de lectura contra Salesforce mediante un set de microservicios. Estos servicios establecían conexión con Salesforce usando OAuth2, obtenían la información asociada a los casos y la exponían para su consumo desde la app mobile. La solución quedó diseñada como una capacidad reutilizable, abriendo la posibilidad de que otros equipos conectaran y obtuvieran información adicional desde Salesforce sin partir desde cero.",
    results: [
      {
        description:
            "La app mobile pudo consultar y mostrar casos centralizados en Salesforce, integrando información de canales de contacto dentro de la experiencia móvil.",
      },
      {
        description:
            "Se implementó una capa backend de integración con Salesforce basada en OAuth2, separando la complejidad de autenticación y consumo externo respecto de la aplicación mobile.",
      },
      {
        description:
            "La capacidad creada habilitó reutilización posterior por parte de otros equipos que necesitaban conectarse a Salesforce y obtener otra información desde la plataforma.",
      },
    ],
    stack: ["Java", "Spring Boot", "Microservicios", "REST", "OAuth2", "Salesforce", "Mobile"],
    confidentiality: "anonimized",
    featured: true,
    relatedServiceId: "backend-arquitectura",
  },
];
