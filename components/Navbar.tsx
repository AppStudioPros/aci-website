"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
      <div className="max-w-[1100px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline">
          <span
            className="font-display font-semibold text-[17px] tracking-tight"
            style={{ color: "#F5F5F0" }}
          >
            ACI
          </span>
          <span
            className="hidden sm:inline text-[13px] font-medium tracking-wide"
            style={{ color: "#5A5A5F" }}
          >
            Adaptive Compound Intelligence
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "What It Is", href: "#what" },
            { label: "The Five Pillars", href: "#pillars" },
            { label: "Origin", href: "#origin" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[14px] font-medium transition-colors no-underline"
              style={{ color: "#8A8A8F" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F5F5F0")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#8A8A8F")}
            >
              {l.label}
            </a>
          ))}
          <a href="#waitlist" className="btn-primary" style={{ padding: "9px 20px", fontSize: "13px" }}>
            Get Early Access
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="block w-5 h-0.5 bg-[#F5F5F0]" />
          <span className="block w-5 h-0.5 bg-[#F5F5F0]" />
          <span className="block w-5 h-0.5 bg-[#F5F5F0]" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#1E1E21] bg-[#0A0A0B] px-6 py-4 flex flex-col gap-4">
          {[
            { label: "What It Is", href: "#what" },
            { label: "The Five Pillars", href: "#pillars" },
            { label: "Origin", href: "#origin" },
          ].map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium no-underline"
              style={{ color: "#8A8A8F" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#waitlist" className="btn-primary text-center" onClick={() => setOpen(false)}>
            Get Early Access
          </a>
        </div>
      )}
    </nav>
  );
}
