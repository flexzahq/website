import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView();
      });
      return () => window.cancelAnimationFrame(frame);
    }

    window.scrollTo(0, 0);
    return undefined;
  }, [pathname, hash]);

  return null;
}
