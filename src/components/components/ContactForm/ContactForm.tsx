"use client";

import { useContactForm } from "@/hooks/useContactForm";
import { ContactFormField } from "@/components/sub-components/ContactFormField";
import { contactTopics } from "@/data/contact.data";

interface ContactFormProps {
  initialTopic?: string;
}

export function ContactForm({ initialTopic = "" }: ContactFormProps) {
  const { data, errors, handleChange, submit } = useContactForm(initialTopic);

  return (
    <div className="contact-form">
      <div className="row g-3">
        <div className="col-sm-6">
          <ContactFormField id="name" label="Nombre">
            <input
              id="name"
              name="name"
              type="text"
              className="form-control"
              placeholder="Tu nombre"
              value={data.name}
              onChange={handleChange}
              required
            />
            {errors["name"] && <div className="form-note text-danger mt-1">{errors["name"]}</div>}
          </ContactFormField>
        </div>

        <div className="col-sm-6">
          <ContactFormField id="email" label="Email">
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              placeholder="tu@email.com"
              value={data.email}
              onChange={handleChange}
              required
            />
            {errors["email"] && (
              <div className="form-note text-danger mt-1">{errors["email"]}</div>
            )}
          </ContactFormField>
        </div>

        <div className="col-12">
          <ContactFormField id="topic" label="Tema">
            <select
              id="topic"
              name="topic"
              className="form-select"
              value={data.topic}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Selecciona un tema…
              </option>
              {contactTopics.map((t) => (
                <option key={t.value} value={t.value}>
                  {t.label}
                </option>
              ))}
            </select>
            {errors["topic"] && (
              <div className="form-note text-danger mt-1">{errors["topic"]}</div>
            )}
          </ContactFormField>
        </div>

        <div className="col-12">
          <ContactFormField id="message" label="Mensaje">
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows={4}
              placeholder="¿Qué tienes en mente?"
              value={data.message}
              onChange={handleChange}
              required
            />
            {errors["message"] && (
              <div className="form-note text-danger mt-1">{errors["message"]}</div>
            )}
          </ContactFormField>
        </div>

        <div className="col-12">
          <div className="d-flex flex-column flex-sm-row gap-2">
            <button
              type="button"
              className="btn btn-primary-custom rounded-pill px-4"
              onClick={() => submit("mailto")}
            >
              <i className="bi bi-envelope-fill" aria-hidden="true" /> Enviar por email
            </button>
            <button
              type="button"
              className="btn btn-outline-custom rounded-pill px-4"
              onClick={() => submit("gmail")}
            >
              <i className="bi bi-google" aria-hidden="true" /> Abrir en Gmail
            </button>
          </div>
          <p className="form-note mt-2">
            El email no está expuesto en el HTML, se reconstruye al hacer click.
          </p>
        </div>
      </div>
    </div>
  );
}
