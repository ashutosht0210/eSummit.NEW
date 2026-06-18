import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { TransitionLink } from "@/components/ui/TransitionLink";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/schedule", label: "Schedule" },
  { to: "/events", label: "Events" },
  { to: "/buy", label: "Passes" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : ""
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 h-16 flex items-center justify-between">
        <TransitionLink
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-3 group"
        >
          {/* Minimal E-Summit logo mark */}
          <div className="relative w-9 h-9 flex items-center justify-center">
            {/* Outer dashed racing ring */}
            <svg
              className="absolute inset-0 w-full h-full text-primary/80 group-hover:rotate-45 transition-transform duration-700 ease-out"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="44"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="8 8"
              />
            </svg>
            {/* Minimal E symbol */}
            <svg
              className="w-4 h-4 text-foreground"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25 20 H75 M25 50 H65 M25 80 H75 M25 20 V80"
                stroke="currentColor"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-display tracking-[0.2em] text-sm font-semibold uppercase leading-none">
              ESUMMIT
            </span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-muted-foreground uppercase mt-1 leading-none">
              IIT Dharwad · 2026
            </span>
          </div>
        </TransitionLink>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.2em]">
          {NAV.map((n) => (
            <TransitionLink
              key={n.to}
              to={n.to}
              onClick={closeMenu}
              className="hover:text-primary transition-colors duration-300"
            >
              {n.label}
            </TransitionLink>
          ))}
        </nav>

        <TransitionLink
          to="/buy"
          onClick={closeMenu}
          className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 bg-primary text-primary-foreground font-mono text-[10px] uppercase tracking-widest font-semibold hover:bg-primary/90 transition rounded-full shadow-sm"
        >
          Get Pass <span className="font-sans text-xs">→</span>
        </TransitionLink>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border px-6 py-6 space-y-4">
          {NAV.map((n) => (
            <TransitionLink
              key={n.to}
              to={n.to}
              onClick={closeMenu}
              className="block font-mono text-sm uppercase tracking-[0.15em] hover:text-primary transition-colors text-left"
            >
              {n.label}
            </TransitionLink>
          ))}
          <TransitionLink
            to="/buy"
            onClick={closeMenu}
            className="block bg-primary text-primary-foreground text-center py-3 font-mono text-xs uppercase tracking-[0.2em] font-semibold rounded-full shadow-md"
          >
            Get Pass →
          </TransitionLink>
        </div>
      )}
    </header>
  );
}
