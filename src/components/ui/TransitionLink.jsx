import { useNavigate, useLocation } from "react-router-dom";
import { playPageTransition } from "@/lib/transition";
import { cn } from "@/lib/utils";

/**
 * An anchor tag wrapper that automatically triggers custom GSAP page transition
 * before executing React Router navigate.
 */
export function TransitionLink({ to, children, className, onClick, ...props }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (e.defaultPrevented) return;
    e.preventDefault();
    if (location.pathname === to) return;
    playPageTransition(() => navigate(to));
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={cn("transition-colors duration-300", className)}
      {...props}
    >
      {children}
    </a>
  );
}
