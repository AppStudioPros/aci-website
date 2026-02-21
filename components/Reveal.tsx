"use client";
import { motion } from "framer-motion";
import { type ReactNode } from "react";

const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
  y?: number;
}

/** Single element — fades up once when it enters the viewport */
export function Reveal({ children, delay = 0, className, style, y = 22 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: easeOut, delay }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

interface RevealGroupProps {
  children: ReactNode[];
  stagger?: number;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

/** Wraps an array of children — each staggers in sequence */
export function RevealGroup({
  children,
  stagger = 0.1,
  delay = 0,
  className,
  style,
}: RevealGroupProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delayChildren: delay,
          },
        },
      }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
