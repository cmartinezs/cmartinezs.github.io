import { cn } from "@/lib/cn";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}

export function GlassCard({ children, className, as: Tag = "div" }: GlassCardProps) {
  return <Tag className={cn("glass-card", className)}>{children}</Tag>;
}
