import { useEffect, useState } from "react";

/**
 * Subscribes to a media query. Starts false on the server / first paint and
 * corrects on mount, so anything gated on this renders its fallback first ,
 * which is what we want for video (phones must never start a download).
 */
export default function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const update = () => setMatches(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, [query]);

  return matches;
}
