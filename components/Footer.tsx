"use client";
export default function Footer() {
  return (
    <footer className="border-t border-[#1E1E21] py-10 mt-0">
      <div className="max-w-[1100px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <span
            className="font-display font-semibold text-[15px]"
            style={{ color: "#F5F5F0" }}
          >
            Adaptive Compound Intelligence™
          </span>
          <p className="text-[13px] mt-1" style={{ color: "#5A5A5F" }}>
            Patent Pending · © 2026 All Rights Reserved
          </p>
        </div>
        <div className="flex flex-col items-center md:items-end gap-1">
          <a
            href="mailto:contact@adaptivecompoundintelligence.com"
            className="text-[13px] transition-colors no-underline"
            style={{ color: "#5A5A5F" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#F59E0B")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#5A5A5F")}
          >
            contact@adaptivecompoundintelligence.com
          </a>
        </div>
      </div>
    </footer>
  );
}
