import { EVENTS } from "@/lib/store";
import { PageHeader } from "@/components/ui/PageHeader";
import { TransitionLink } from "@/components/ui/TransitionLink";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

export function Events() {
  useDocumentTitle("Events — E-Summit 2026");

  return (
    <div className="pt-32 pb-24 mx-auto max-w-[1600px] px-6 lg:px-12 text-left">
      <PageHeader tag="The Grid" title="All Events." />
      <div className="mt-16 divide-y divide-border border-t border-b border-border">
        {EVENTS.map((e, i) => (
          <TransitionLink
            key={e.slug}
            to={`/event/${e.slug}`}
            className="group flex items-center justify-between py-8 hover:bg-card/50 px-4 -mx-4 transition cursor-pointer text-left"
          >
            <div className="flex items-baseline gap-6">
              <span className="font-mono text-xs text-muted-foreground">
                No. {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-display text-3xl md:text-6xl group-hover:text-primary transition">
                {e.name}
              </h2>
            </div>
            <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
              <span className="text-muted-foreground">
                {e.day} · {e.time}
              </span>
              <span className="text-primary">View →</span>
            </div>
          </TransitionLink>
        ))}
      </div>
    </div>
  );
}
