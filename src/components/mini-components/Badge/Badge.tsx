import { cn } from "@/lib/cn";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "soft" | "pill";
  className?: string;
}

export function Badge({ children, variant = "soft", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "badge-soft",
        variant === "pill" && "rounded-pill px-3 py-2",
        className
      )}
    >
      {children}
    </span>
  );
}
