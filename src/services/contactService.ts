import { emailParts } from "@/data/contact.data";
import type { ContactFormData } from "@/types/contact.types";

export function getEmailAddress(): string {
  return `${emailParts.a}@${emailParts.b}.${emailParts.c}`;
}

export function buildMailtoUrl(data: ContactFormData): string {
  const email = getEmailAddress();
  const subject = encodeURIComponent(`[Portfolio] ${data.topic}: ${data.name}`);
  const body = encodeURIComponent(
    `Nombre: ${data.name}\nEmail: ${data.email}\nAsunto: ${data.topic}\n\n${data.message}`
  );
  return `mailto:${email}?subject=${subject}&body=${body}`;
}

export function buildGmailUrl(data: ContactFormData): string {
  const email = getEmailAddress();
  const subject = encodeURIComponent(`[Portfolio] ${data.topic}: ${data.name}`);
  const body = encodeURIComponent(
    `Nombre: ${data.name}\nEmail: ${data.email}\nAsunto: ${data.topic}\n\n${data.message}`
  );
  return `https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`;
}

export function validateContactForm(data: ContactFormData): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!data.name.trim()) errors["name"] = "El nombre es requerido.";
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors["email"] = "Ingresa un email válido.";
  }
  if (!data.topic) errors["topic"] = "Selecciona un tema.";
  if (!data.message.trim() || data.message.trim().length < 10) {
    errors["message"] = "El mensaje debe tener al menos 10 caracteres.";
  }
  return errors;
}
