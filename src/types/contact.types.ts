export interface ContactTopic {
  value: string;
  label: string;
  hint?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  topic: string;
  message: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface NavLink {
  label: string;
  href: string;
  isAnchor?: boolean;
}
