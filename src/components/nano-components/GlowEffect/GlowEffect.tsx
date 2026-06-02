import { cn } from "@/lib/cn";
import styles from "./GlowEffect.module.css";

interface GlowEffectProps {
  color?: "primary" | "accent" | "warning";
  className?: string;
}

export function GlowEffect({ color = "primary", className }: GlowEffectProps) {
  return (
    <span
      className={cn(styles.glow, styles[`glow--${color}`], className)}
      aria-hidden="true"
    />
  );
}
