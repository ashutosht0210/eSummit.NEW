import { useEffect, useState } from "react";
import { TARGET_DATE } from "@/lib/store";

function calc() {
  const diff = TARGET_DATE - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0, done: true, urgent: false };
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s, done: false, urgent: d === 0 && h < 6 };
}

export function Countdown() {
  const [t, setT] = useState(calc());
  useEffect(() => {
    const i = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(i);
  }, []);

  if (t.done) {
    return (
      <div className="bg-signal text-foreground font-mono uppercase tracking-widest text-center py-4">
        Registrations Closed — See you trackside
      </div>
    );
  }

  const blocks = [
    { label: "Days", v: t.d },
    { label: "Hours", v: t.h },
    { label: "Mins", v: t.m },
    { label: "Secs", v: t.s },
  ];

  return (
    <div className="w-full">
      {t.urgent && (
        <div className="text-center font-mono text-xs uppercase tracking-[0.25em] text-signal mb-8 flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-signal pulse-signal inline-block" />
          <span>Pit Window Closing: Only hours remaining</span>
        </div>
      )}
      <div className="grid grid-cols-4 gap-4 md:gap-8 lg:gap-12">
        {blocks.map((b, idx) => (
          <div
            key={b.label}
            className="relative flex flex-col items-center md:items-start text-center md:text-left"
          >
            <div className="flex items-baseline w-full justify-center md:justify-start">
              <span
                className={`font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight tabular-nums ${t.urgent ? "text-signal" : "text-foreground"}`}
              >
                {String(b.v).padStart(2, "0")}
              </span>
              {idx < 3 && (
                <span className="hidden md:inline text-muted-foreground/20 text-4xl md:text-6xl font-light ml-auto pr-2 select-none">
                  :
                </span>
              )}
            </div>
            <div
              className={`font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] mt-3 ${t.urgent ? "text-signal/80" : "text-primary"}`}
            >
              {b.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
