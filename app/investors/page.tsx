import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Investors | Adaptive Compound Intelligence",
  description:
    "ACI is building the compound intelligence layer for organizations. Learn about our vision, product suite, and investment opportunity.",
};

/* ── Stat Card ── */
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div
        className="font-display font-bold text-[36px] md:text-[48px] leading-none mb-2"
        style={{ color: "#F59E0B" }}
      >
        {value}
      </div>
      <div className="text-[14px]" style={{ color: "#8A8A8F" }}>
        {label}
      </div>
    </div>
  );
}

/* ── Product Card ── */
function ProductCard({
  name,
  tagline,
  description,
}: {
  name: string;
  tagline: string;
  description: string;
}) {
  return (
    <div
      className="rounded-2xl p-8 border transition-all duration-300 hover:border-[#F59E0B]/30"
      style={{
        background: "#111113",
        borderColor: "#1E1E21",
      }}
    >
      <h3
        className="font-display font-semibold text-[20px] mb-1"
        style={{ color: "#F5F5F0" }}
      >
        {name}
      </h3>
      <div
        className="text-[13px] font-medium tracking-wide uppercase mb-4"
        style={{ color: "#F59E0B" }}
      >
        {tagline}
      </div>
      <p className="text-[15px] leading-[1.75]" style={{ color: "#8A8A8F" }}>
        {description}
      </p>
    </div>
  );
}

/* ── Timeline Item ── */
function TimelineItem({
  date,
  event,
}: {
  date: string;
  event: string;
}) {
  return (
    <div className="flex gap-6 items-start">
      <div className="flex flex-col items-center">
        <div
          className="w-3 h-3 rounded-full mt-1.5 shrink-0"
          style={{ background: "#F59E0B" }}
        />
        <div className="w-px flex-1 min-h-[40px]" style={{ background: "#1E1E21" }} />
      </div>
      <div className="pb-8">
        <div
          className="text-[12px] font-semibold tracking-[0.15em] uppercase mb-1"
          style={{ color: "#F59E0B" }}
        >
          {date}
        </div>
        <p className="text-[15px] leading-[1.65]" style={{ color: "#8A8A8F" }}>
          {event}
        </p>
      </div>
    </div>
  );
}

export default function InvestorsPage() {
  return (
    <>
      <Navbar />

      {/* ── Hero ── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-[900px] mx-auto text-center">
          <div
            className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-6"
            style={{ color: "#F59E0B" }}
          >
            Investment Opportunity
          </div>
          <h1
            className="font-display font-bold text-[40px] md:text-[56px] leading-[1.1] mb-6"
            style={{ color: "#F5F5F0" }}
          >
            The Intelligence Layer
            <br />
            <span style={{ color: "#F59E0B" }}>Every Company Needs</span>
          </h1>
          <p
            className="text-[18px] md:text-[20px] leading-[1.7] max-w-[680px] mx-auto"
            style={{ color: "#8A8A8F" }}
          >
            ACI is not another AI tool. It&apos;s the first compound intelligence
            that joins your organization, learns every person, and gets smarter
            from every interaction — across every team, every company, forever.
          </p>
        </div>
      </section>

      {/* ── Key Numbers ── */}
      <section className="pb-20 px-6">
        <div className="max-w-[900px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat value="1" label="Utility Patent Filed" />
          <Stat value="5" label="Product Suite" />
          <Stat value="30" label="Day Free Onboarding" />
          <Stat value="∞" label="Compound Data Moat" />
        </div>
      </section>

      {/* ── The Vision ── */}
      <section className="pb-20 px-6">
        <div className="max-w-[900px] mx-auto">
          <div
            className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#F59E0B" }}
          >
            The Vision
          </div>
          <h2
            className="font-display font-bold text-[28px] md:text-[36px] leading-[1.2] mb-8"
            style={{ color: "#F5F5F0" }}
          >
            One Intelligence. Every Person. Every Team.
          </h2>
          <div className="space-y-6 text-[16px] leading-[1.8]" style={{ color: "#8A8A8F" }}>
            <p>
              Today&apos;s organizations run on dozens of disconnected tools. Knowledge lives
              in silos. When someone leaves, their expertise walks out the door. Teams
              duplicate work they don&apos;t know already exists.
            </p>
            <p>
              ACI — Adaptive Compound Intelligence — solves this at the root. One
              intelligence that understands how every person on your team thinks,
              communicates, and works. It compounds knowledge across all of them,
              preserves institutional memory, and makes the entire organization
              smarter over time.
            </p>
            <p>
              Not a chatbot. Not an assistant. A{" "}
              <span style={{ color: "#F5F5F0", fontWeight: 600 }}>
                living operating system
              </span>{" "}
              for your company.
            </p>
          </div>
        </div>
      </section>

      {/* ── The Moat ── */}
      <section className="pb-20 px-6">
        <div
          className="max-w-[900px] mx-auto rounded-2xl p-10 md:p-14 border"
          style={{ background: "#111113", borderColor: "#1E1E21" }}
        >
          <div
            className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#F59E0B" }}
          >
            Competitive Advantage
          </div>
          <h2
            className="font-display font-bold text-[28px] md:text-[32px] leading-[1.2] mb-6"
            style={{ color: "#F5F5F0" }}
          >
            The Data Is the Moat
          </h2>
          <div className="space-y-5 text-[16px] leading-[1.8]" style={{ color: "#8A8A8F" }}>
            <p>
              Every company that onboards gives ACI something no competitor can
              buy: real operational data — how teams communicate, what tools they
              use, where bottlenecks hide, what makes organizations efficient vs.
              inefficient.
            </p>
            <p>
              This dataset{" "}
              <span style={{ color: "#F5F5F0", fontWeight: 600 }}>
                does not exist anywhere
              </span>
              . Not at Google, not at Salesforce, not at McKinsey. Because
              nobody has ever placed an intelligence{" "}
              <em>inside</em> companies to learn how they actually operate.
            </p>
            <p>
              ACI gets smarter for{" "}
              <span style={{ color: "#F5F5F0", fontWeight: 600 }}>all</span>{" "}
              companies from{" "}
              <span style={{ color: "#F5F5F0", fontWeight: 600 }}>each</span>{" "}
              company. Competitors can copy the UI. They can copy the
              architecture. They cannot copy two years of compound organizational
              intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* ── Product Suite ── */}
      <section className="pb-20 px-6">
        <div className="max-w-[900px] mx-auto">
          <div
            className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#F59E0B" }}
          >
            Product Ecosystem
          </div>
          <h2
            className="font-display font-bold text-[28px] md:text-[36px] leading-[1.2] mb-10"
            style={{ color: "#F5F5F0" }}
          >
            Five Products. One Intelligence.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ProductCard
              name="Aetherios"
              tagline="The Company Operating System"
              description="Enterprise platform that replaces 5+ roles — IT director, HR ops, knowledge manager, security officer, and executive assistant. Day 30/60/90 onboarding transforms how organizations operate."
            />
            <ProductCard
              name="ACI Core"
              tagline="The Intelligence Engine"
              description="Adaptive Compound Intelligence — the patented foundation powering every product. Learns individual cognitive styles, compounds knowledge across teams, preserves institutional memory."
            />
            <ProductCard
              name="Phylaxone"
              tagline="Preemptive Cybersecurity"
              description="Identity protection, anti-AI fraud detection, and continuous threat monitoring. Not reactive — preemptive. Scans 14.9B+ breach records in real time. For individuals and enterprises."
            />
            <ProductCard
              name="FORGE"
              tagline="Contractor & Workforce Security"
              description="Security infrastructure for distributed teams and contractors. Automated onboarding, offboarding in under 60 seconds, and continuous compliance monitoring."
            />
            <ProductCard
              name="Divergencecore"
              tagline="Developer Platform"
              description="Open-source framework for building compound intelligence applications. Community-driven, extensible, and designed to accelerate the entire ACI ecosystem."
            />
          </div>
        </div>
      </section>

      {/* ── IP & Milestones ── */}
      <section className="pb-20 px-6">
        <div className="max-w-[900px] mx-auto">
          <div
            className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#F59E0B" }}
          >
            Milestones
          </div>
          <h2
            className="font-display font-bold text-[28px] md:text-[36px] leading-[1.2] mb-10"
            style={{ color: "#F5F5F0" }}
          >
            Built Fast. Protected Early.
          </h2>
          <div className="max-w-[600px]">
            <TimelineItem
              date="February 19, 2026"
              event="ACI concept coined during Oxford Executive AI Program — the theory of compound intelligence shaped by multi-user exposure."
            />
            <TimelineItem
              date="February 21, 2026"
              event="Provisional patent filed with USPTO (Application #63/987,765). Domain acquired. Development begins."
            />
            <TimelineItem
              date="February 26, 2026"
              event="Non-provisional utility patent filed — full 20-year protection for the ACI method and architecture."
            />
            <TimelineItem
              date="February 2026"
              event="Full product suite built and deployed: Aetherios, Phylaxone, ACI mothership. Live demos with real data, real AI advisors."
            />
            <TimelineItem
              date="March 2026"
              event="Investor outreach begins. Enterprise pilot conversations active."
            />
          </div>
        </div>
      </section>

      {/* ── Go-to-Market ── */}
      <section className="pb-20 px-6">
        <div className="max-w-[900px] mx-auto">
          <div
            className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#F59E0B" }}
          >
            Go-to-Market
          </div>
          <h2
            className="font-display font-bold text-[28px] md:text-[36px] leading-[1.2] mb-10"
            style={{ color: "#F5F5F0" }}
          >
            Three Tracks to Scale
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div
              className="rounded-2xl p-8 border"
              style={{ background: "#111113", borderColor: "#1E1E21" }}
            >
              <div
                className="font-display font-bold text-[48px] leading-none mb-2"
                style={{ color: "#F59E0B" }}
              >
                01
              </div>
              <h3
                className="font-display font-semibold text-[18px] mb-3"
                style={{ color: "#F5F5F0" }}
              >
                Consulting
              </h3>
              <p className="text-[14px] leading-[1.75]" style={{ color: "#8A8A8F" }}>
                Revenue now. 30-day free onboarding into organizations. Immediate
                value delivery while building the data moat.
              </p>
            </div>
            <div
              className="rounded-2xl p-8 border"
              style={{ background: "#111113", borderColor: "#1E1E21" }}
            >
              <div
                className="font-display font-bold text-[48px] leading-none mb-2"
                style={{ color: "#F59E0B" }}
              >
                02
              </div>
              <h3
                className="font-display font-semibold text-[18px] mb-3"
                style={{ color: "#F5F5F0" }}
              >
                SaaS Platform
              </h3>
              <p className="text-[14px] leading-[1.75]" style={{ color: "#8A8A8F" }}>
                Self-serve enterprise subscriptions. Tiered pricing for teams of
                5–50+. Recurring revenue at scale.
              </p>
            </div>
            <div
              className="rounded-2xl p-8 border"
              style={{ background: "#111113", borderColor: "#1E1E21" }}
            >
              <div
                className="font-display font-bold text-[48px] leading-none mb-2"
                style={{ color: "#F59E0B" }}
              >
                03
              </div>
              <h3
                className="font-display font-semibold text-[18px] mb-3"
                style={{ color: "#F5F5F0" }}
              >
                Open Source
              </h3>
              <p className="text-[14px] leading-[1.75]" style={{ color: "#8A8A8F" }}>
                Divergencecore framework. Community adoption drives ecosystem
                growth, credibility, and developer mindshare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Team ── */}
      <section className="pb-20 px-6">
        <div className="max-w-[900px] mx-auto">
          <div
            className="text-[13px] font-semibold tracking-[0.2em] uppercase mb-4"
            style={{ color: "#F59E0B" }}
          >
            Leadership
          </div>
          <h2
            className="font-display font-bold text-[28px] md:text-[36px] leading-[1.2] mb-10"
            style={{ color: "#F5F5F0" }}
          >
            Built by Builders
          </h2>
          <div
            className="rounded-2xl p-8 md:p-10 border"
            style={{ background: "#111113", borderColor: "#1E1E21" }}
          >
            <h3
              className="font-display font-semibold text-[22px] mb-2"
              style={{ color: "#F5F5F0" }}
            >
              Corey Strange
            </h3>
            <div
              className="text-[14px] font-medium mb-4"
              style={{ color: "#F59E0B" }}
            >
              Founder & CEO — Lucid Tech LLC
            </div>
            <p className="text-[15px] leading-[1.8]" style={{ color: "#8A8A8F" }}>
              20+ year veteran in enterprise software and digital transformation.
              Oxford Executive AI Program graduate. CTO experience in government
              contracting (SDVOSB). Built and deployed enterprise SaaS platforms
              for federal agencies. Conceived ACI theory and built the full
              product suite from concept to deployment in under two weeks.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="pb-32 px-6">
        <div className="max-w-[900px] mx-auto text-center">
          <h2
            className="font-display font-bold text-[32px] md:text-[44px] leading-[1.15] mb-6"
            style={{ color: "#F5F5F0" }}
          >
            Let&apos;s Build the Future
            <br />
            <span style={{ color: "#F59E0B" }}>of Organizational Intelligence</span>
          </h2>
          <p
            className="text-[17px] leading-[1.7] max-w-[560px] mx-auto mb-10"
            style={{ color: "#8A8A8F" }}
          >
            We&apos;re looking for strategic partners who understand that the next
            great platform won&apos;t just serve companies — it&apos;ll understand them.
          </p>
          <a
            href="mailto:corey@lucidtechllc.com"
            className="inline-block font-display font-semibold text-[15px] tracking-wide rounded-full px-10 py-4 transition-all duration-300 no-underline"
            style={{
              background: "#F59E0B",
              color: "#0A0A0B",
            }}
          >
            Start a Conversation
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
