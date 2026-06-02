export type TechIconType = "devicon" | "brand-img" | "generic";
export type StackGroup = "backend" | "frontend" | "datos" | "devops";

export interface TechItem {
  id: string;
  name: string;
  description: string;
  groups: StackGroup[];
  icon: TechIcon;
}

export type TechIcon =
  | { type: "devicon"; className: string }
  | { type: "brand-img"; src: string; alt: string }
  | { type: "generic"; iconClass: string };

export interface StackCategory {
  id: StackGroup;
  label: string;
  title: string;
  description: string;
  iconClass: string;
}
