import { useNavigate } from "react-router-dom";
import { playPageTransition } from "@/lib/transition";

/**
 * Custom hook to programmatically navigate with page transitions.
 * @returns {Function} - Transition-enabled navigation function.
 */
export function useTransitionNavigate() {
  const navigate = useNavigate();
  return (to) => {
    playPageTransition(() => navigate(to));
  };
}
