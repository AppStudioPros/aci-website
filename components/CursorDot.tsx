"use client";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorDot() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const [visible, setVisible] = useState(false);

  const springX = useSpring(x, { stiffness: 140, damping: 18, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 140, damping: 18, mass: 0.6 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      if (!visible) setVisible(true);
    };
    const hide = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
    };
  }, [x, y, visible]);

  // Don't render on touch devices
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <motion.div
      style={{
        position: "fixed",
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: "#F59E0B",
        opacity: visible ? 0.55 : 0,
        pointerEvents: "none",
        zIndex: 9998,
        mixBlendMode: "screen",
        transition: "opacity 0.3s ease",
      }}
    />
  );
}
