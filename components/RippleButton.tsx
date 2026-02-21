"use client";
import { useRef, useState, type ReactNode } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface RippleButtonProps {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "ghost";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export default function RippleButton({
  children,
  href,
  className = "",
  variant = "primary",
  type = "button",
  disabled,
  onClick,
  style,
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const nextId = useRef(0);

  const addRipple = (e: React.MouseEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = nextId.current++;

    setRipples((prev) => [...prev, { id, x, y, size }]);

    // Remove after animation completes
    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);
  };

  const baseClass =
    variant === "primary"
      ? `btn-primary ${className}`
      : `btn-ghost ${className}`;

  const rippleColor =
    variant === "primary"
      ? "rgba(255,255,255,0.25)"
      : "rgba(245,158,11,0.2)";

  const content = (
    <>
      {ripples.map((r) => (
        <span
          key={r.id}
          style={{
            position: "absolute",
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
            borderRadius: "50%",
            background: rippleColor,
            transform: "scale(0)",
            animation: "ripple 0.6s linear",
            pointerEvents: "none",
          }}
        />
      ))}
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={baseClass}
        style={{ position: "relative", overflow: "hidden", ...style }}
        onClick={addRipple}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClass}
      style={{ position: "relative", overflow: "hidden", ...style }}
      disabled={disabled}
      onClick={(e) => {
        addRipple(e);
        onClick?.();
      }}
    >
      {content}
    </button>
  );
}
