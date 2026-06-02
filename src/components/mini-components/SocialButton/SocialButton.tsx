import Link from "next/link";
import { cn } from "@/lib/cn";

interface SocialButtonProps {
  href: string;
  icon: string;
  label: string;
  size?: "md" | "lg";
  className?: string;
}

export function SocialButton({ href, icon, label, size = "lg", className }: SocialButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "btn btn-outline-custom rounded-pill",
        size === "lg" && "btn-lg",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={`bi ${icon}`} aria-hidden="true" /> {label}
    </Link>
  );
}
