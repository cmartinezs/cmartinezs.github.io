interface ContactFormFieldProps {
  id: string;
  label: string;
  children: React.ReactNode;
  note?: string;
}

export function ContactFormField({ id, label, children, note }: ContactFormFieldProps) {
  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {children}
      {note && <div className="form-note mt-1">{note}</div>}
    </div>
  );
}
