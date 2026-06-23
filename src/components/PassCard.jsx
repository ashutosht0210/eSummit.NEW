import { Zap, Flame, MapPin, Trophy, Ticket, Calendar, CheckCircle2 } from "lucide-react";

const TIER_STYLES = {
  sprint: {
    accentGradient: "bg-gradient-to-r from-blue-600 to-cyan-400",
    glowBlob: "bg-blue-500/5 group-hover:bg-blue-500/12",
    borderActive: "border-blue-500/90 shadow-[0_0_30px_rgba(59,130,246,0.25)] scale-[1.01]",
    borderIdle: "border-border/80 hover:border-blue-500/40 hover:shadow-[0_0_25px_rgba(59,130,246,0.12)]",
    watermark: "SRT",
    accentColorText: "text-blue-400",
    accentBg: "bg-blue-500/5 border-blue-500/20 text-blue-400",
    buttonHover: "hover:border-blue-500/60 hover:text-blue-400",
    stripeGradient: "from-blue-500 via-cyan-400 to-blue-600",
    perkIconColor: "text-muted-foreground/60 group-hover:text-blue-400",
    glowColor: "rgba(59,130,246,0.4)",
    priceGradient: "bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
  },
  "grand-prix": {
    accentGradient: "bg-gradient-to-r from-primary to-orange-500",
    glowBlob: "bg-primary/5 group-hover:bg-primary/12",
    borderActive: "border-primary/90 shadow-[0_0_30px_rgba(240,150,40,0.25)] scale-[1.01]",
    borderIdle: "border-border/80 hover:border-primary/40 hover:shadow-[0_0_25px_rgba(240,150,40,0.12)]",
    watermark: "GP",
    accentColorText: "text-primary",
    accentBg: "bg-primary/5 border-primary/20 text-primary",
    buttonHover: "hover:border-primary/60 hover:text-primary",
    stripeGradient: "from-primary via-orange-400 to-orange-600",
    perkIconColor: "text-muted-foreground/60 group-hover:text-primary",
    glowColor: "rgba(240,150,40,0.4)",
    priceGradient: "bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent"
  },
  "pitstop-cabin": {
    accentGradient: "bg-gradient-to-r from-emerald-600 to-teal-400",
    glowBlob: "bg-emerald-500/5 group-hover:bg-emerald-500/12",
    borderActive: "border-emerald-500/90 shadow-[0_0_30px_rgba(16,185,129,0.25)] scale-[1.01]",
    borderIdle: "border-border/80 hover:border-emerald-500/40 hover:shadow-[0_0_25px_rgba(16,185,129,0.12)]",
    watermark: "PIT",
    accentColorText: "text-emerald-400",
    accentBg: "bg-emerald-500/5 border-emerald-500/20 text-emerald-400",
    buttonHover: "hover:border-emerald-500/60 hover:text-emerald-400",
    stripeGradient: "from-emerald-500 via-teal-400 to-emerald-600",
    perkIconColor: "text-muted-foreground/60 group-hover:text-emerald-400",
    glowColor: "rgba(16,185,129,0.4)",
    priceGradient: "bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent"
  },
  "podium-suite": {
    accentGradient: "bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600",
    glowBlob: "bg-amber-400/5 group-hover:bg-amber-400/12",
    borderActive: "border-amber-400/90 shadow-[0_0_30px_rgba(245,158,11,0.25)] scale-[1.01]",
    borderIdle: "border-border/80 hover:border-amber-400/40 hover:shadow-[0_0_25px_rgba(245,158,11,0.12)]",
    watermark: "POD",
    accentColorText: "text-amber-400",
    accentBg: "bg-amber-400/5 border-amber-400/20 text-amber-400",
    buttonHover: "hover:border-amber-400/60 hover:text-amber-400",
    stripeGradient: "from-amber-500 via-yellow-400 to-amber-600",
    perkIconColor: "text-muted-foreground/60 group-hover:text-amber-400",
    glowColor: "rgba(245,158,11,0.4)",
    priceGradient: "bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent"
  }
};

const renderRacetrack = (id, strokeColor) => {
  switch (id) {
    case "sprint":
      return (
        <svg className="absolute top-20 right-6 w-36 h-24 opacity-25 select-none pointer-events-none z-0" viewBox="0 0 100 60">
          <path d="M 5,15 L 95,15" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
          <path d="M 5,30 L 95,30" stroke={strokeColor} strokeWidth="2.5" fill="none" />
          <path d="M 5,45 L 95,45" stroke={strokeColor} strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
          <path d="M 65,25 L 75,30 L 65,35" stroke={strokeColor} strokeWidth="1.5" fill="none" />
          <path d="M 75,25 L 85,30 L 75,35" stroke={strokeColor} strokeWidth="1.5" fill="none" />
        </svg>
      );
    case "grand-prix":
      return (
        <svg className="absolute top-20 right-6 w-36 h-24 opacity-30 select-none pointer-events-none z-0" viewBox="0 0 120 80">
          <path
            d="M 10,65 C 10,35 40,10 60,30 C 80,50 110,60 110,40 C 110,20 90,15 80,10"
            stroke={strokeColor}
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <line x1="10" y1="65" x2="20" y2="60" stroke={strokeColor} strokeWidth="3" strokeDasharray="2 1" />
        </svg>
      );
    case "pitstop-cabin":
      return (
        <svg className="absolute top-20 right-6 w-36 h-24 opacity-25 select-none pointer-events-none z-0" viewBox="0 0 100 60">
          <path
            d="M 10,15 Q 50,55 90,15 M 10,28 Q 50,68 90,28"
            stroke={strokeColor}
            strokeWidth="1.5"
            fill="none"
          />
          <circle cx="50" cy="39" r="4" stroke={strokeColor} strokeWidth="1.5" fill="none" />
        </svg>
      );
    case "podium-suite":
      return (
        <svg className="absolute top-20 right-6 w-36 h-24 opacity-30 select-none pointer-events-none z-0" viewBox="0 0 100 80">
          <path d="M 10,15 L 90,15 L 80,45 L 20,45 Z" fill="none" stroke={strokeColor} strokeWidth="1.5" />
          <path d="M 20,45 L 10,75" stroke={strokeColor} strokeWidth="2.5" fill="none" />
          <path d="M 30,25 Q 50,15 70,25" stroke={strokeColor} strokeWidth="1" fill="none" />
          <path d="M 25,35 Q 50,25 75,35" stroke={strokeColor} strokeWidth="1" fill="none" />
        </svg>
      );
    default:
      return null;
  }
};

export function PassCard({
  pass: p,
  qty,
  totalQty,
  maxQty,
  onIncrement,
  onDecrement,
}) {
  const style = TIER_STYLES[p.id] || TIER_STYLES["sprint"];

  const getPassIcon = (id) => {
    switch (id) {
      case "sprint":
        return <Zap className="w-6 h-6 text-blue-400" />;
      case "grand-prix":
        return <Flame className="w-6 h-6 text-primary" />;
      case "pitstop-cabin":
        return <MapPin className="w-6 h-6 text-emerald-400" />;
      case "podium-suite":
        return <Trophy className="w-6 h-6 text-amber-400 animate-pulse" />;
      default:
        return <Ticket className="w-6 h-6 text-primary" />;
    }
  };

  return (
    <div
      className={`group relative overflow-hidden border flex flex-col rounded-3xl transition-all duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-[0_25px_50px_rgba(0,0,0,0.7)] z-10 ${
        qty > 0 ? style.borderActive : style.borderIdle
      }`}
      style={{ minHeight: "560px" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4.5 bg-background border-x border-b border-border/50 rounded-b-xl flex items-center justify-center z-20 pointer-events-none">
        <div className="w-8 h-1 bg-neutral-950 border border-border/30 rounded-full" />
      </div>

      <div className="absolute inset-0 bg-linear-to-b from-card/85 to-card/95 backdrop-blur-xl z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.012)_1px,transparent_1px)] bg-size-[14px_14px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/1 to-white/3 pointer-events-none z-0" />

      {qty > 0 && (
        <div className="absolute inset-0 racing-stripe opacity-[0.03] pointer-events-none z-0" />
      )}

      <div
        className={`absolute top-[-25%] right-[-25%] w-56 h-56 rounded-full blur-3xl pointer-events-none transition-all duration-700 z-0 ${style.glowBlob}`}
      />

      {qty > 0 && (
        <div 
          className="absolute inset-0 border rounded-3xl animate-pulse pointer-events-none z-20"
          style={{ borderColor: style.glowColor, borderWidth: "1.5px" }}
        />
      )}

      <div
        className={`absolute top-1.5 left-0 right-0 h-1.5 transition-all duration-500 z-10 ${style.accentGradient}`}
      />

      <div className="absolute top-3 left-0 right-0 h-1 flex overflow-hidden opacity-30 select-none pointer-events-none z-10">
        <svg className="w-full h-full" viewBox="0 0 100 2" preserveAspectRatio="none">
          <pattern id="top-checkers" width="4" height="2" patternUnits="userSpaceOnUse">
            <rect width="2" height="1" fill="#fff" />
            <rect x="2" y="1" width="2" height="1" fill="#fff" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#top-checkers)" />
        </svg>
      </div>

      <div className="absolute top-9 right-6 flex gap-1 transform -skew-x-12 opacity-[0.06] select-none pointer-events-none z-0">
        <div className={`w-1.5 h-8 bg-linear-to-b ${style.stripeGradient}`} />
        <div className={`w-1.5 h-8 bg-linear-to-b ${style.stripeGradient}`} />
        <div className={`w-1.5 h-8 bg-linear-to-b ${style.stripeGradient}`} />
      </div>

      <div className="absolute left-2 top-[16%] h-[26%] w-3 flex flex-col justify-between opacity-[0.06] group-hover:opacity-[0.14] transition-opacity duration-300 pointer-events-none select-none z-10">
        <div className="h-full w-full flex flex-col gap-0.5 overflow-hidden">
          {[4, 2, 6, 1, 5, 2, 8, 3, 2, 4, 1, 6, 2, 3, 8].map((width, idx) => (
            <div key={idx} className="bg-foreground w-full shrink-0" style={{ height: `${width}px` }} />
          ))}
        </div>
        <div className="text-[6px] font-mono tracking-wider rotate-90 origin-left mt-3 text-muted-foreground shrink-0 whitespace-nowrap">
          ES26-{p.id.toUpperCase()}
        </div>
      </div>

      {renderRacetrack(p.id, style.accentColorText)}

      <div className="absolute right-[-5%] bottom-[45%] text-9xl font-black italic tracking-tighter text-foreground/1.5 select-none pointer-events-none uppercase font-display z-0">
        {style.watermark}
      </div>

      {/* ── TOP EVENT DETAILS AREA (Badge Front) ── */}
      <div className="p-6 sm:p-8 pb-5 flex flex-col z-10 relative h-52.5 shrink-0 justify-start">
        <div className="flex justify-between items-center mt-2">
          <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-muted-foreground/80">
            SEC. A // PIT LANE
          </span>
          {qty > 0 ? (
            <div className="flex items-center gap-1 bg-primary text-primary-foreground text-[9px] font-extrabold px-2 py-0.5 rounded-full font-mono shadow-[0_0_10px_rgba(240,150,40,0.2)] animate-pulse">
              <CheckCircle2 className="w-3 h-3" />
              {qty} STUB
            </div>
          ) : p.soldOut ? (
            <span className="font-mono text-[9px] bg-destructive/10 text-destructive border border-destructive/20 font-bold px-2 py-0.5 rounded uppercase tracking-wider">
              SOLD OUT
            </span>
          ) : (
            <span
              className={`font-mono text-[9px] font-bold px-2 py-0.5 rounded border uppercase tracking-wider transition-all duration-300 ${style.accentBg}`}
            >
              {p.badge || "Tier"}
            </span>
          )}
        </div>

        <div className="mt-4 flex items-start gap-3 justify-between">
          <div className="flex-1 pl-3">
            <div className="font-mono text-[9px] text-muted-foreground/75 tracking-wider uppercase font-semibold">
              OFFICIAL ADMISSION
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors duration-300 leading-tight">
              {p.name}
            </h3>
          </div>
          <div className="p-2.5 rounded-2xl bg-secondary/40 border border-border/30 shrink-0 group-hover:border-primary/20 transition-colors">
            {getPassIcon(p.id)}
          </div>
        </div>

        <div className="mt-4 pl-3 flex items-baseline gap-1.5">
          <span className={`font-display text-4xl sm:text-5xl font-black tracking-tighter pr-1 ${style.priceGradient}`}>
            ₹{p.price}
          </span>
          <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-wider">
            / ticket
          </span>
        </div>
      </div>

      <div className="relative w-[calc(100%+48px)] sm:w-[calc(100%+64px)] -mx-6 sm-mx-8 my-4 pointer-events-none select-none z-20">
        <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-r border-border/50" />
        <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border-l border-border/50" />
        <div className="w-full border-t border-dashed border-border/60" />
      </div>

      <div className="p-6 sm:p-8 pt-4 flex flex-col justify-between z-10 bg-black/10 rounded-b-3xl flex-1">
        <ul className="space-y-2.5 text-xs text-muted-foreground flex-1">
          {p.perks.map((perk) => (
            <li key={perk} className="flex items-start gap-2.5">
              <CheckCircle2
                className={`w-3.5 h-3.5 shrink-0 mt-0.5 transition-colors ${
                  qty > 0 ? style.accentColorText : style.perkIconColor
                }`}
              />
              <span className="text-foreground/80 group-hover:text-foreground transition-colors duration-300 font-sans text-[11px] leading-snug">
                {perk}
              </span>
            </li>
          ))}
        </ul>

        {p.duration && (
          <div className="mt-4 p-3 rounded-2xl bg-secondary/15 border border-border/30 text-xs space-y-1.5 backdrop-blur-md relative overflow-hidden group-hover:border-primary/10 transition-all duration-300">
            <div className="flex items-center gap-1.5 text-foreground font-bold font-display text-xs tracking-wider">
              <Calendar className={`w-3.5 h-3.5 ${style.accentColorText} shrink-0`} />
              <span>STAY PROVISIONS</span>
            </div>

            <svg className="w-full h-1.5 opacity-20" viewBox="0 0 100 4" preserveAspectRatio="none">
              <pattern id="checkers-stub-check" width="6" height="4" patternUnits="userSpaceOnUse">
                <rect width="3" height="2" fill="currentColor" />
                <rect x="3" y="2" width="3" height="2" fill="currentColor" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#checkers-stub-check)" className="text-foreground" />
            </svg>

            <div className="space-y-1 font-mono text-[11px] leading-relaxed text-muted-foreground">
              <div>
                <span className="text-foreground/80 font-sans font-semibold">Stay:</span> {p.duration}
              </div>
              {p.extra && (
                <div className="text-[9.5px] text-muted-foreground/70 italic flex items-center gap-1.5 pt-0.5">
                  <span className="w-1 h-1 rounded-full bg-primary/60 shrink-0 animate-ping" />
                  {p.extra}
                </div>
              )}
            </div>
          </div>
        )}

        <div className="mt-5 flex items-center justify-between border-t border-border/30 pt-4 z-10">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            QTY
          </span>
          <div className="flex items-center gap-3 bg-secondary/25 p-1 rounded-xl border border-border/30">
            <button
              onClick={onDecrement}
              disabled={qty === 0}
              className={`w-8 h-8 flex items-center justify-center border border-border/50 disabled:opacity-20 font-bold select-none rounded-lg transition-all duration-300 active:scale-90 hover:bg-background/60 cursor-pointer text-xs ${style.buttonHover}`}
              title="Decrease quantity"
            >
              −
            </button>
            <span className="font-display text-lg font-black w-6 text-center tabular-nums text-foreground">
              {qty}
            </span>
            <button
              onClick={onIncrement}
              disabled={p.soldOut || totalQty >= maxQty}
              className={`w-8 h-8 flex items-center justify-center border border-border/50 disabled:opacity-20 font-bold select-none rounded-lg transition-all duration-300 active:scale-90 hover:bg-background/60 cursor-pointer text-xs ${style.buttonHover}`}
              title="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
