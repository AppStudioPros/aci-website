"use client";
import { useRef, useState, type ReactNode } from "react";

interface ClickRipple {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface HoverRipple {
  x: number;
  y: number;
  size: number;
  active: boolean;
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
  const [clickRipples, setClickRipples] = useState<ClickRipple[]>([]);
  const [hoverRipple, setHoverRipple] = useState<HoverRipple | null>(null);
  const nextId = useRef(0);

  // Colors
  const hoverFillColor =
    variant === "primary"
      ? "#FBBF24"                      // lighter amber fill on hover
      : "rgba(245,158,11,0.18)";       // subtle amber tint for ghost

  const clickRippleColor =
    variant === "primary"
      ? "rgba(255,255,255,0.4)"        // light white flash on click
      : "rgba(245,158,11,0.35)";       // amber flash for ghost

  /* ── Hover handlers ── */
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2.6;
    setHoverRipple({ x, y, size, active: true });
  };

  const handleMouseLeave = () => {
    setHoverRipple((prev) => (prev ? { ...prev, active: false } : null));
    // Clean up after transition
    setTimeout(() => setHoverRipple(null), 400);
  };

  /* ── Click handler ── */
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2.6;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    const id = nextId.current++;

    setClickRipples((prev) => [...prev, { id, x, y, size }]);
    setTimeout(() => {
      setClickRipples((prev) => prev.filter((r) => r.id !== id));
    }, 600);

    onClick?.();
  };

  const baseStyle: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
    // Remove default CSS hover — we handle it via the ripple
    transition: "box-shadow 0.2s ease, transform 0.2s ease",
    ...style,
  };

  const content = (
    <>
      {/* Hover fill ripple */}
      {hoverRipple && (
        <span
          style={{
            position: "absolute",
            left: hoverRipple.x - hoverRipple.size / 2,
            top: hoverRipple.y - hoverRipple.size / 2,
            width: hoverRipple.size,
            height: hoverRipple.size,
            borderRadius: "50%",
            background: hoverFillColor,
            transform: hoverRipple.active ? "scale(1)" : "scale(0)",
            opacity: hoverRipple.active ? 1 : 0,
            transition: "transform 0.45s ease, opacity 0.35s ease",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
      )}

      {/* Click ripples */}
      {clickRipples.map((r) => (
        <span
          key={r.id}
          style={{
            position: "absolute",
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
            borderRadius: "50%",
            background: clickRippleColor,
            transform: "scale(0)",
            animation: "ripple 0.6s linear",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />
      ))}

      {/* Content always on top */}
      <span style={{ position: "relative", zIndex: 2 }}>{children}</span>
    </>
  );

  const baseClass =
    variant === "primary"
      ? `btn-primary ${className}`
      : `btn-ghost ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={baseClass}
        style={baseStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClass}
      style={baseStyle}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={(e) => {
        handleClick(e);
      }}
    >
      {content}
    </button>
  );
}
