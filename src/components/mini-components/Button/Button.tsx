import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "outline";
type ButtonSize = "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  className,
  external,
  ariaLabel,
}: ButtonProps) {
  const baseClass = cn(
    variant === "primary" ? "btn-primary-custom" : "btn-outline-custom",
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={baseClass}
        aria-label={ariaLabel}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={baseClass} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </button>
  );
}
