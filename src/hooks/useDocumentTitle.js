import { useEffect } from "react";

/**
 * Custom hook to update the document title.
 * @param {string} title - The title to set.
 */
export function useDocumentTitle(title) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);
}
