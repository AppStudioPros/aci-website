"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? scrollTop / docHeight : 0);
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 2,
        height: `${progress * 100}%`,
        background: "linear-gradient(to bottom, #F59E0B, #FBBF24)",
        zIndex: 200,
        pointerEvents: "none",
        transition: "height 0.05s linear",
        boxShadow: "0 0 6px rgba(245,158,11,0.4)",
      }}
    />
  );
}
