"use client";
import { useRef, useState, type ReactNode } from "react";

interface ClickRipple {
  id: number;
  x: number;
  y: number;
  size: number;
}

interface HoverState {
  x: number;
  y: number;
  size: number;
  phase: "in" | "out";
  key: number; // force remount on re-enter
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
  const [hover, setHover] = useState<HoverState | null>(null);
  const nextId = useRef(0);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const HOVER_DURATION = 700; // ms — match hoverIn/hoverOut animation duration

  const hoverFillColor =
    variant === "primary"
      ? "#FBBF24"
      : "rgba(245,158,11,0.18)";

  const clickRippleColor =
    variant === "primary"
      ? "rgba(255,255,255,0.4)"
      : "rgba(245,158,11,0.35)";

  /* ── Hover in ── */
  const handleMouseEnter = (e: React.MouseEvent<HTMLElement>) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const size = Math.max(rect.width, rect.height) * 2.6;
    setHover({ x, y, size, phase: "in", key: nextId.current++ });
  };

  /* ── Hover out ── */
  const handleMouseLeave = () => {
    setHover((prev) => (prev ? { ...prev, phase: "out" } : null));
    leaveTimer.current = setTimeout(() => setHover(null), HOVER_DURATION);
  };

  /* ── Click ── */
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

  const sharedStyle: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
    transition: "box-shadow 0.2s ease, transform 0.2s ease",
    ...style,
  };

  const content = (
    <>
      {/* Hover fill ripple — keyed so it remounts fresh on every enter */}
      {hover && (
        <span
          key={hover.key}
          style={{
            position: "absolute",
            left: hover.x - hover.size / 2,
            top: hover.y - hover.size / 2,
            width: hover.size,
            height: hover.size,
            borderRadius: "50%",
            background: hoverFillColor,
            animation: `${hover.phase === "in" ? "hoverIn" : "hoverOut"} ${HOVER_DURATION}ms ease forwards`,
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
        style={sharedStyle}
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
      style={sharedStyle}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      {content}
    </button>
  );
}
