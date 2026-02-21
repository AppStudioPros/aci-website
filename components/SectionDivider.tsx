"use client";
import { useEffect, useRef, useState } from "react";

export default function SectionDivider() {
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(20);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const MAX_W = 120;
    const MIN_W = 20;

    const calculate = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      // Full width when element center is at 40% down the viewport
      const elCenter = rect.top + rect.height / 2;
      const targetY = viewH * 0.4;
      const deviation = Math.abs(elCenter - targetY);
      const maxDeviation = viewH * 0.65;
      const progress = Math.max(0, 1 - deviation / maxDeviation);
      setWidth(MIN_W + (MAX_W - MIN_W) * progress);
    };

    window.addEventListener("scroll", calculate, { passive: true });
    calculate(); // run on mount too

    return () => window.removeEventListener("scroll", calculate);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        width,
        height: 2,
        background: "#F59E0B",
        margin: "0 auto 40px",
        borderRadius: 1,
        transition: "width 0.12s ease-out",
      }}
    />
  );
}
