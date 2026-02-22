"use client";
import { useState, useEffect } from "react";
import Script from "next/script";
import RippleButton from "@/components/RippleButton";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileReady, setTurnstileReady] = useState(false);

  // Re-render the Turnstile widget once the script loads
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).turnstile && !turnstileReady) {
      setTurnstileReady(true);
    }
  }, [turnstileReady]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;

    const data = {
      firstName:  (form.elements.namedItem("firstName")  as HTMLInputElement).value,
      lastName:   (form.elements.namedItem("lastName")   as HTMLInputElement).value,
      email:      (form.elements.namedItem("email")      as HTMLInputElement).value,
      company:    (form.elements.namedItem("company")    as HTMLInputElement).value,
      use_case:   (form.elements.namedItem("use_case")   as HTMLTextAreaElement).value,
      // Honeypot — bots fill this, humans don't
      website:    (form.elements.namedItem("website")    as HTMLInputElement)?.value ?? "",
      // Turnstile token — auto-populated by the widget
      turnstileToken: (form.elements.namedItem("cf-turnstile-response") as HTMLInputElement)?.value ?? "",
    };

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error ?? "Something went wrong.");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message ?? "Something went wrong — please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="text-5xl mb-4">✦</div>
        <h3 className="font-display font-semibold text-2xl mb-3" style={{ color: "#F5F5F0" }}>
          You&apos;re in.
        </h3>
        <p style={{ color: "#8A8A8F" }}>
          We&apos;ll be in touch. The teams who get in now will shape what gets built.
        </p>
      </div>
    );
  }

  return (
    <>
      {/* Load Turnstile script */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
        onLoad={() => setTurnstileReady(true)}
      />

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* ── Honeypot — hidden from real users, bots fill it ── */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{
            position: "absolute",
            opacity: 0,
            height: 0,
            width: 0,
            zIndex: -1,
            pointerEvents: "none",
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-[13px] font-medium mb-2" style={{ color: "#8A8A8F" }}>First Name</label>
            <input type="text" name="firstName" placeholder="First name" required className="form-input" />
          </div>
          <div>
            <label className="block text-[13px] font-medium mb-2" style={{ color: "#8A8A8F" }}>Last Name</label>
            <input type="text" name="lastName" placeholder="Last name" required className="form-input" />
          </div>
        </div>

        <div>
          <label className="block text-[13px] font-medium mb-2" style={{ color: "#8A8A8F" }}>Work Email</label>
          <input type="email" name="email" placeholder="you@company.com" required className="form-input" />
        </div>

        <div>
          <label className="block text-[13px] font-medium mb-2" style={{ color: "#8A8A8F" }}>Company / Team Size</label>
          <input type="text" name="company" placeholder="e.g. Acme Corp, ~20 people" className="form-input" />
        </div>

        <div>
          <label className="block text-[13px] font-medium mb-2" style={{ color: "#8A8A8F" }}>What would ACI change for your team?</label>
          <textarea name="use_case" placeholder="Tell us what's broken, what you're hoping for, or what problem you'd love solved..." className="form-input" rows={3} />
        </div>

        {/* Cloudflare Turnstile widget — dark theme to match site */}
        <div
          className="cf-turnstile"
          data-sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          data-theme="dark"
        />

        {error && (
          <p className="text-[13px] text-center" style={{ color: "#EF4444" }}>{error}</p>
        )}

        <RippleButton type="submit" className="w-full justify-center" disabled={loading}>
          {loading ? "Sending..." : "Get Early Access →"}
        </RippleButton>

        <p className="text-center text-[12px]" style={{ color: "#5A5A5F" }}>
          Patent Pending — US App. 63/987,765 · Built by builders, for builders.
        </p>
      </form>
    </>
  );
}
