"use client";

import { useState, useCallback } from "react";
import type { ContactFormData } from "@/types/contact.types";
import {
  buildMailtoUrl,
  buildGmailUrl,
  validateContactForm,
} from "@/services/contactService";

const INITIAL: ContactFormData = { name: "", email: "", topic: "", message: "" };

export function useContactForm(initialTopic = "") {
  const [data, setData] = useState<ContactFormData>({ ...INITIAL, topic: initialTopic });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: "" }));
    },
    []
  );

  const submit = useCallback(
    (mode: "mailto" | "gmail") => {
      const validationErrors = validateContactForm(data);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        return;
      }
      const url = mode === "gmail" ? buildGmailUrl(data) : buildMailtoUrl(data);
      window.open(url, "_blank");
    },
    [data]
  );

  return { data, errors, handleChange, submit };
}
