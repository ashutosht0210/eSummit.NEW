import { cn } from "@/lib/utils";

/**
 * Standard section header layout with title, tag, description, and optional custom actions.
 */
export function SectionHeader({
  tag,
  title,
  description,
  layout = "vertical",
  children,
  className,
}) {
  if (layout === "split") {
    return (
      <div
        className={cn(
          "grid md:grid-cols-[1fr_2fr] gap-8 items-end mb-16 text-left",
          className,
        )}
      >
        <div>
          {tag && (
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
              {tag}
            </div>
          )}
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
            {title}
          </h2>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between w-full gap-4">
          {description && (
            <p className="text-muted-foreground max-w-md text-sm md:text-base leading-relaxed">
              {description}
            </p>
          )}
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={cn("mb-12 text-left", className)}>
      {tag && (
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-primary mb-3">
          {tag}
        </div>
      )}
      <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
