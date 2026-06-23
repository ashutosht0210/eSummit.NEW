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
    perkIconColor: "text-muted-foreground/60 group-hover:text-blue-400"
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
    perkIconColor: "text-muted-foreground/60 group-hover:text-primary"
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
    perkIconColor: "text-muted-foreground/60 group-hover:text-emerald-400"
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
    perkIconColor: "text-muted-foreground/60 group-hover:text-amber-400"
  }
};

/**
 * PassCard
 *
 * Props:
 *   pass: {
 *     id: string,
 *     name: string,
 *     price: number,
 *     perks: string[],
 *     tag?: string,
 *     badge?: string,
 *     duration?: string,
 *     extra?: string,
 *     soldOut?: boolean,
 *   }
 *   qty: number               — current quantity in cart
 *   totalQty: number          — total items across all passes in cart
 *   maxQty: number            — per-order maximum
 *   onIncrement: () => void
 *   onDecrement: () => void
 */
export function PassCard({
  pass: p,
  qty,
  totalQty,
  maxQty,
  onIncrement,
  onDecrement,
}) {
  const style = TIER_STYLES[p.id] || TIER_STYLES["sprint"];

  // Dynamically get tier-specific icon and theme colors
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
      className={`group relative overflow-hidden border p-6 sm:p-8 flex flex-col rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.6)] z-10 ${
        qty > 0 ? style.borderActive : style.borderIdle
      }`}
    >
      {/* Background Layer with opacity to support parent blur */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/85 to-card/95 backdrop-blur-xl z-0" />

      {/* Tech Dot Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none z-0" />

      {/* Glossy Reflection Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.03] pointer-events-none z-0" />

      {/* Repeating Racing Stripe Watermark on Selection */}
      {qty > 0 && (
        <div className="absolute inset-0 racing-stripe opacity-[0.03] pointer-events-none z-0" />
      )}

      {/* Glowing Blob Accent */}
      <div
        className={`absolute top-[-25%] right-[-25%] w-56 h-56 rounded-full blur-3xl pointer-events-none transition-all duration-700 z-0 ${style.glowBlob}`}
      />

      {/* Top Motorsport Accent Stripe */}
      <div
        className={`absolute top-0 left-0 right-0 h-1.5 transition-all duration-500 z-10 ${style.accentGradient}`}
      />

      {/* Slanted Racing Triple-Stripes Decoration */}
      <div className="absolute top-8 right-6 flex gap-1 transform -skew-x-12 opacity-[0.06] select-none pointer-events-none z-0">
        <div className={`w-1.5 h-8 bg-gradient-to-b ${style.stripeGradient}`} />
        <div className={`w-1.5 h-8 bg-gradient-to-b ${style.stripeGradient}`} />
        <div className={`w-1.5 h-8 bg-gradient-to-b ${style.stripeGradient}`} />
      </div>

      {/* Background Graphic Watermark */}
      <div className="absolute right-[-5%] bottom-[-5%] text-9xl font-black italic tracking-tighter text-foreground/[0.02] select-none pointer-events-none uppercase font-display z-0">
        {style.watermark}
      </div>

      {/* Header Tag and Selection Status */}
      <div className="flex justify-between items-center mb-6 z-10">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground border border-border/30 bg-secondary/35 px-2.5 py-1 rounded-md">
          {p.tag || "PASS"}
        </span>
        {qty > 0 ? (
          <div className="flex items-center gap-1.5 bg-primary text-primary-foreground text-[10px] font-bold px-2.5 py-1 rounded-full font-mono shadow-[0_0_15px_rgba(240,150,40,0.3)] animate-pulse">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {qty} ADDED
          </div>
        ) : p.soldOut ? (
          <span className="font-mono text-[10px] bg-destructive/10 text-destructive border border-destructive/20 font-bold px-2.5 py-1 rounded-md uppercase tracking-wider">
            Sold out
          </span>
        ) : (
          <span
            className={`font-mono text-[10px] font-bold px-2.5 py-1 rounded-md border uppercase tracking-wider transition-all duration-300 ${style.accentBg}`}
          >
            {p.badge || "Tier"}
          </span>
        )}
      </div>

      {/* Pass Name & Icon */}
      <div className="flex items-start gap-3 justify-between z-10">
        <div>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
            {p.name}
          </h3>
        </div>
        <div className="p-2 rounded-2xl bg-secondary/40 border border-border/30 shrink-0">
          {getPassIcon(p.id)}
        </div>
      </div>

      {/* Price Section */}
      <div className="mt-5 flex items-baseline gap-1.5 z-10">
        <span className="font-display text-4xl sm:text-5xl font-black text-foreground tracking-tighter">
          ₹{p.price}
        </span>
        <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">
          / ticket
        </span>
      </div>

      {/* Perks List */}
      <ul className="mt-6 space-y-3 text-sm text-muted-foreground flex-1 z-10">
        {p.perks.map((perk) => (
          <li key={perk} className="flex items-start gap-2.5">
            <CheckCircle2
              className={`w-4 h-4 shrink-0 mt-0.5 transition-colors ${
                qty > 0 ? style.accentColorText : style.perkIconColor
              }`}
            />
            <span className="text-foreground/80 group-hover:text-foreground transition-colors duration-300">
              {perk}
            </span>
          </li>
        ))}
      </ul>

      {/* Stay Details Itinerary box for Accommodation Tiers */}
      {p.duration && (
        <div className="mt-6 p-4 rounded-2xl bg-secondary/20 border border-border/40 text-xs space-y-2.5 backdrop-blur-md relative overflow-hidden group-hover:border-primary/20 transition-all duration-300 z-10">
          {/* Decorative ticket stub punch notches aligned with dashed divider */}
          <div className="absolute left-[-6px] top-[34px] w-3 h-3 rounded-full bg-background border-r border-border/40 z-10" />
          <div className="absolute right-[-6px] top-[34px] w-3 h-3 rounded-full bg-background border-l border-border/40 z-10" />

          <div className="flex items-center gap-2 text-foreground font-bold font-display">
            <Calendar className={`w-3.5 h-3.5 ${style.accentColorText} shrink-0`} />
            <span>STAY DETAILS</span>
          </div>

          {/* Dashed Ticket Stub Divider */}
          <div className="border-t border-dashed border-border/60 my-2 pt-2" />

          <div className="space-y-1">
            <div className="text-muted-foreground font-mono text-[10px] leading-relaxed">
              <span className="text-foreground/70 font-sans font-semibold">Duration:</span> {p.duration}
            </div>
            {p.extra && (
              <div className="text-[9px] text-muted-foreground/70 italic flex items-center gap-1.5 pt-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/60 shrink-0 animate-ping" />
                {p.extra}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Quantity Selectors */}
      <div className="mt-8 flex items-center justify-between border-t border-border/40 pt-6 z-10">
        <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Quantity
        </span>
        <div className="flex items-center gap-3 bg-secondary/30 p-1.5 rounded-2xl border border-border/40">
          <button
            onClick={onDecrement}
            disabled={qty === 0}
            className={`w-10 h-10 flex items-center justify-center border border-border/60 disabled:opacity-20 font-bold select-none rounded-xl transition-all duration-300 active:scale-95 hover:bg-background/80 cursor-pointer ${style.buttonHover}`}
            title="Decrease quantity"
          >
            −
          </button>
          <span className="font-display text-2xl font-black w-8 text-center tabular-nums text-foreground">
            {qty}
          </span>
          <button
            onClick={onIncrement}
            disabled={p.soldOut || totalQty >= maxQty}
            className={`w-10 h-10 flex items-center justify-center border border-border/60 disabled:opacity-20 font-bold select-none rounded-xl transition-all duration-300 active:scale-95 hover:bg-background/80 cursor-pointer ${style.buttonHover}`}
            title="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
