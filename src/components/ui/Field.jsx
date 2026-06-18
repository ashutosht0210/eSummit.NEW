import { cn } from "@/lib/utils";

/**
 * Reusable form field container that packages labels and inputs together.
 */
export function Field({ label, children, className }) {
  return (
    <label className={cn("block text-left", className)}>
      <span className="font-mono text-xs text-muted-foreground">{label}</span>
      <div className="mt-1">{children}</div>
    </label>
  );
}
