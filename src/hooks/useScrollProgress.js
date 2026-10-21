import { useEffect, useRef, useState } from "react";
import { getScrollProgress } from "../utils/scroll";

// Returns a ref (read every frame by the 3D scene) and state (drives the DOM overlay).
export default function useScrollProgress() {
  const progressRef = useRef(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      progressRef.current = getScrollProgress();
      setProgress(progressRef.current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return { progressRef, progress };
}