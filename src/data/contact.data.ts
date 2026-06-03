import type { ContactTopic } from "@/types/contact.types";

export const contactTopics: ContactTopic[] = [
  {
    value: "colaboracion",
    label: "Colaboración / proyecto",
    hint: "Describe brevemente el proyecto, el stack o dominio, y qué tipo de apoyo necesitas.",
  },
  {
    value: "arquitectura",
    label: "Arquitectura de software",
    hint: "Cuéntame qué sistema tienes, qué problema enfrentas y qué decisiones debes tomar.",
  },
  {
    value: "mentoria",
    label: "Mentoría técnica",
    hint: "Indica tu nivel actual, en qué área quieres mejorar y cuál es tu objetivo.",
  },
  {
    value: "docencia",
    label: "Docencia / formación",
    hint: "Indica el tipo de institución, el perfil de los estudiantes y los temas que te interesan.",
  },
  {
    value: "alianza",
    label: "Alianza técnica",
    hint: "Describe el tipo de proyecto, qué rol backend necesitas cubrir y en qué modalidad.",
  },
  {
    value: "empleo",
    label: "Oportunidad laboral",
    hint: "Describe el rol, la modalidad (remoto/híbrido), el stack y el nivel de senioridad esperado.",
  },
  {
    value: "keygo",
    label: "KeyGo / autenticación",
    hint: "Cuéntame tu caso de uso: tipo de app, escala estimada y si buscas integrar o contribuir.",
  },
  {
    value: "ai",
    label: "Automatización con IA",
    hint: "Describe el flujo que quieres automatizar y qué herramientas ya usas o consideras.",
  },
  {
    value: "backend",
    label: "Desarrollo backend",
    hint: "Menciona el lenguaje/framework, el tipo de sistema y qué necesitas: diseño, desarrollo o revisión.",
  },
  {
    value: "frontend",
    label: "Desarrollo frontend",
    hint: "Indica el framework, el tipo de interfaz y si necesitas integración con una API existente.",
  },
  {
    value: "mobile",
    label: "Desarrollo mobile",
    hint: "Indica si es nativo (Android/iOS) o híbrido, el stack preferido y el tipo de app.",
  },
  { value: "recursos", label: "Recursos / contenido" },
  { value: "otro", label: "Otro" },
];

export const emailParts = {
  a: "carlos.f.martinez.s",
  b: "gmail",
  c: "com",
};

// MP-032: Decisión de agenda
// Se optó por no integrar Calendly u otra herramienta de agenda en este ciclo.
// El contacto inicial vía formulario es suficiente para calificar la conversación.
// Si se integra en el futuro, el link debe quedar aquí como scheduleHref.
export const scheduleHref: string | null = null;
