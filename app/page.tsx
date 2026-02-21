import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CompoundAnimation from "@/components/CompoundAnimation";
import WaitlistForm from "@/components/WaitlistForm";
import RippleButton from "@/components/RippleButton";

/* ── Pillar ── */
function Pillar({ label, text }: { label: string; text: string }) {
  return (
    <div className="pillar-card">
      <div
        className="font-display font-semibold text-[13px] tracking-[0.2em] uppercase mb-4"
        style={{ color: "#F59E0B" }}
      >
        {label}
      </div>
      <p className="text-[16px] leading-[1.75]" style={{ color: "#8A8A8F" }}>
        {text}
      </p>
    </div>
  );
}

/* ── Who Card ── */
function WhoCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="card">
      <div
        className="font-display font-semibold text-[16px] mb-3"
        style={{ color: "#F5F5F0" }}
      >
        {title}
      </div>
      <p className="text-[15px] leading-[1.7]" style={{ color: "#8A8A8F" }}>
        {text}
      </p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ─── 1. HERO ─── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <CompoundAnimation />
        {/* Radial vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 40%, #0A0A0B 100%)",
          }}
        />
        <div className="relative z-10 max-w-[900px] mx-auto px-6 text-center">
          <div className="badge mb-8">Adaptive Compound Intelligence</div>
          <h1
            className="font-display font-semibold leading-[1.06] mb-8"
            style={{
              fontSize: "clamp(44px, 7vw, 88px)",
              color: "#F5F5F0",
              letterSpacing: "-0.02em",
            }}
          >
            Your company&apos;s{" "}
            <span className="text-amber-animate">living intelligence.</span>
          </h1>
          <p
            className="max-w-[680px] mx-auto leading-[1.75] mb-10"
            style={{ fontSize: "clamp(17px, 2vw, 21px)", color: "#8A8A8F" }}
          >
            ACI isn&apos;t the next AI tool. It&apos;s the evolution of AI itself — one intelligence
            that knows every person on your team, compounds knowledge across all of them, and
            helps everyone do what only humans can do, better. Not here to replace you.
            Here to make you irreplaceable.
          </p>
          <RippleButton href="#waitlist" style={{ padding: "16px 36px", fontSize: "16px" }}>
            Get Early Access →
          </RippleButton>
          <p className="mt-6 text-[13px]" style={{ color: "#3A3A3F" }}>
            Patent Pending · Limited Early Access
          </p>
        </div>
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #0A0A0B)" }}
        />
      </section>

      {/* ─── 2. THE PROBLEM ─── */}
      <section className="py-28" style={{ borderTop: "1px solid #1E1E21" }}>
        <div className="max-w-[820px] mx-auto px-6">
          <div className="section-divider" />
          <h2
            className="font-display font-semibold text-center mb-14"
            style={{
              fontSize: "clamp(32px, 4.5vw, 52px)",
              color: "#F5F5F0",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            AI got smarter.
            <br />
            Your team didn&apos;t get freer.
          </h2>

          <div className="space-y-6 text-[17px] leading-[1.85]" style={{ color: "#8A8A8F" }}>
            <p>
              Every AI product on the market makes the same pitch: It&apos;ll save you time. Cut costs.
              Automate the boring stuff.
            </p>
            <p style={{ color: "#6A6A6F", fontStyle: "italic" }}>
              And underneath it, the same fear: <em className="em-glow-white" style={{ color: "#F5F5F0" }}>Is this thing coming for my job?</em>
            </p>
            <p>
              Here&apos;s the honest answer nobody&apos;s giving you — most AI tools aren&apos;t after your job.
              But they&apos;re not really designed to help you do it better either. They&apos;re designed to
              do <em className="em-glow-white" style={{ color: "#F5F5F0" }}>tasks.</em> Discrete, isolated, one-at-a-time tasks. They
              don&apos;t know your company. They don&apos;t know your team. They don&apos;t know you.
            </p>
            <p>
              Every session starts from zero. One user, one context, one conversation. Done. Gone.
            </p>
            <p>
              Your team&apos;s collective intelligence — the stuff people carry in their heads, across
              projects, across years — has no place to live. No way to compound. No way to connect
              Sarah&apos;s insight to Marcus&apos;s problem three months later.
            </p>
            <p
              className="font-display font-semibold text-[22px] pt-4"
              style={{ color: "#F5F5F0", letterSpacing: "-0.01em" }}
            >
              That&apos;s not a tool problem. That&apos;s a category problem.
            </p>
            <p>And it&apos;s what ACI was built to solve.</p>
          </div>
        </div>
      </section>

      {/* ─── 3. THE EVOLUTION ─── */}
      <section className="py-28" style={{ background: "#0D0D0F", borderTop: "1px solid #1E1E21", borderBottom: "1px solid #1E1E21" }}>
        <div className="max-w-[820px] mx-auto px-6">
          <div className="section-divider" />
          <h2
            className="font-display font-semibold text-center mb-14"
            style={{
              fontSize: "clamp(32px, 4.5vw, 52px)",
              color: "#F5F5F0",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            The evolution of AI isn&apos;t smarter tools.
            <br />
            <span className="text-amber-animate">It&apos;s smarter teams.</span>
          </h2>

          <div className="space-y-6 text-[17px] leading-[1.85]" style={{ color: "#8A8A8F" }}>
            <p>
              Chatbots. Copilots. Agents. Every generation of AI has been a chapter in the same
              story: here&apos;s a faster, smarter tool for you to use.
            </p>
            <p className="font-display font-semibold text-[20px]" style={{ color: "#F5F5F0", letterSpacing: "-0.01em" }}>
              ACI is the next book.
            </p>
            <p>
              Not a tool you use — an intelligence that joins you. Not something you deploy —
              something that becomes part of how your company thinks. This is where AI was always
              heading. From task automation to genuine organizational intelligence.
            </p>
            <p>The question was never <em className="em-glow-white" style={{ color: "#F5F5F0" }}>&ldquo;will AI replace us?&rdquo;</em></p>
            <p>
              The real question is:{" "}
              <em className="em-glow-amber" style={{ color: "#F59E0B" }}>
                &ldquo;What could we do if AI handled everything we shouldn&apos;t be doing — so we could
                human better?&rdquo;
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* ─── 4. WHAT ACI IS ─── */}
      <section id="what" className="py-28">
        <div className="max-w-[820px] mx-auto px-6">
          <div className="section-divider" />
          <h2
            className="font-display font-semibold text-center mb-14"
            style={{
              fontSize: "clamp(32px, 4.5vw, 52px)",
              color: "#F5F5F0",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            An AI that knows your whole ship.
          </h2>

          <div className="space-y-6 text-[17px] leading-[1.85]" style={{ color: "#8A8A8F" }}>
            <p>
              Imagine an AI that knows every person on your team — how they think, what
              they&apos;re working on, what they need. It knows every project, every system, every
              function. And because it knows all of it together, it becomes something more than a tool.
            </p>
            <p>
              Think of the Enterprise computer from Star Trek. It knows every crew member. It knows
              every system on the ship. It doesn&apos;t just respond to commands — it understands
              context, adapts to whoever&apos;s asking, and when the mission demands it, brings
              everything together as one. And because of that? It doesn&apos;t feel like a ship&apos;s
              computer. It feels like a crew member.
            </p>
            <p className="font-display font-semibold text-[22px]" style={{ color: "#F5F5F0", letterSpacing: "-0.01em" }}>
              That&apos;s ACI.
            </p>
            <p>
              Not a tool your team uses. An intelligence that{" "}
              <em className="em-glow-white" style={{ color: "#F5F5F0" }}>joins your team.</em> It learns each person
              individually — their thinking style, their work, their patterns. Over time it compounds
              everything it learns into something your whole organization can draw from.
            </p>

            <div
              className="rounded-2xl py-8 px-8 mt-6 space-y-2 text-[16px]"
              style={{ background: "#111113", border: "1px solid #1E1E21" }}
            >
              <p style={{ color: "#5A5A5F" }}>It doesn&apos;t replace anyone.</p>
              <p style={{ color: "#5A5A5F" }}>It doesn&apos;t audit your workflows.</p>
              <p style={{ color: "#5A5A5F" }}>It doesn&apos;t tell you what&apos;s broken.</p>
              <p className="pt-2 font-display font-semibold text-[18px]" style={{ color: "#F59E0B" }}>
                It becomes part of the crew.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. HUMAN BETTER ─── */}
      <section
        className="py-28"
        style={{ background: "#0D0D0F", borderTop: "1px solid #1E1E21", borderBottom: "1px solid #1E1E21" }}
      >
        <div className="max-w-[820px] mx-auto px-6">
          <div className="section-divider" />
          <h2
            className="font-display font-semibold text-center mb-14"
            style={{
              fontSize: "clamp(32px, 4.5vw, 52px)",
              color: "#F5F5F0",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            ACI isn&apos;t here to replace you.{" "}
            <span className="text-amber-animate">
              It&apos;s here to make you irreplaceable.
            </span>
          </h2>

          <div className="space-y-6 text-[17px] leading-[1.85]" style={{ color: "#8A8A8F" }}>
            <p>Let&apos;s be direct about something.</p>
            <p>
              The fear around AI isn&apos;t irrational. Every other pitch tells you to automate your
              workforce and calls it progress. ACI isn&apos;t that.
            </p>
            <p>
              ACI works <em className="em-glow-white" style={{ color: "#F5F5F0" }}>with</em> your people — not around them,
              not instead of them. The more your team interacts with ACI, the better it understands
              what each person does that only a human can do. The judgment calls. The relationships.
              The creative leaps. The vision.
            </p>
            <p>
              ACI gets sharper at identifying everything else — the friction, the admin, the
              repetitive decisions, the stuff that drains your team&apos;s best energy — and handles it.
            </p>
            <p>
              You help ACI grow.{" "}
              <em className="em-glow-white" style={{ color: "#F5F5F0" }}>ACI helps you human better.</em>
            </p>

            <div
              className="rounded-2xl py-8 px-8 mt-6"
              style={{ background: "#111113", border: "1px solid #1E1E21" }}
            >
              <p
                className="font-display font-semibold text-[20px] mb-4"
                style={{ color: "#F5F5F0", letterSpacing: "-0.01em" }}
              >
                That&apos;s not a tagline. That&apos;s the actual model.
              </p>
              <p className="text-[16px]" style={{ color: "#8A8A8F" }}>
                Your team teaches ACI what matters. ACI frees your team to do more of it.
              </p>
              <p className="text-[16px] mt-3" style={{ color: "#8A8A8F" }}>
                The result isn&apos;t a smaller team. It&apos;s a team that operates like it&apos;s twice the
                size — because every person is spending more time on work only they can do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. THE FIVE PILLARS ─── */}
      <section id="pillars" className="py-28">
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="section-divider" />
          <div className="text-center mb-16">
            <h2
              className="font-display font-semibold"
              style={{
                fontSize: "clamp(32px, 4.5vw, 52px)",
                color: "#F5F5F0",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              How ACI compounds.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <Pillar
              label="Adapts"
              text="Every person on your team thinks differently. ACI knows that. A systems architect gets a different experience than a creative director — not because you configured it, but because it learned. One intelligence, calibrated to every individual."
            />
            <Pillar
              label="Compounds"
              text="The more people interact with ACI, the smarter it gets for everyone. Knowledge from one person's work surfaces when someone else needs it. Patterns emerge that no single person could see. The whole becomes greater than the sum of its parts — and it keeps growing."
            />
            <Pillar
              label="Persists"
              text="Memory that spans months, not minutes. Organized hierarchically — session context flows up into project knowledge, project knowledge into organizational understanding. ACI remembers everything that matters and forgets nothing important."
            />
            <Pillar
              label="Proactive"
              text="ACI doesn't wait to be asked. It surfaces what's about to matter. Connects the dots before you think to look. Checks in. Does background work. The difference between a tool you go to and a teammate who's always thinking."
            />
            <Pillar
              label="Identity"
              text="ACI has character. It pushes back when something doesn't add up. It has opinions and defends them. It knows your company's values and works from them. An AI that agrees with everything you say isn't thinking — it's performing. ACI earns trust through competence, not compliance."
            />
            {/* 6th card — quote/cta */}
            <div
              className="pillar-card flex flex-col justify-center items-start"
              style={{ borderColor: "rgba(245,158,11,0.2)", background: "rgba(245,158,11,0.04)" }}
            >
              <p
                className="font-display font-semibold text-[22px] mb-4 leading-snug"
                style={{ color: "#F59E0B", letterSpacing: "-0.01em" }}
              >
                One intelligence.
                <br />
                Every individual.
                <br />
                Always growing.
              </p>
              <RippleButton href="#waitlist" style={{ padding: "10px 20px", fontSize: "14px" }}>
                Get Early Access →
              </RippleButton>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. THE ORIGIN ─── */}
      <section
        id="origin"
        className="py-28"
        style={{ background: "#0D0D0F", borderTop: "1px solid #1E1E21", borderBottom: "1px solid #1E1E21" }}
      >
        <div className="max-w-[820px] mx-auto px-6">
          <div className="section-divider" />
          <h2
            className="font-display font-semibold text-center mb-14"
            style={{
              fontSize: "clamp(32px, 4.5vw, 52px)",
              color: "#F5F5F0",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Built before it had a name.
          </h2>

          <div className="space-y-6 text-[17px] leading-[1.85]" style={{ color: "#8A8A8F" }}>
            <p>
              In early 2026, while building AI tools for enterprise clients, something started
              happening that didn&apos;t have a category yet.
            </p>
            <p>
              Three people — a systems architect, a visual designer, a creative — working with the
              same AI. Different thinking styles, different problems, different ways of seeing the
              world. The AI didn&apos;t average them out. It adapted to each one. And over time, it got
              better at all of it — simultaneously.
            </p>
            <p style={{ color: "#F5F5F0" }}>The whole was becoming smarter than the sum of its parts.</p>
            <p>
              The concept went to Oxford. A discussion on Gardner&apos;s 9 Intelligences and what AGI
              actually requires. The class was debating whether AI could replicate all types of human
              intelligence.
            </p>
            <p>The argument: that&apos;s the wrong question.</p>
          </div>

          {/* Oxford Pullquote */}
          <div className="my-12 py-2">
            <blockquote className="pullquote">
              &ldquo;My system wasn&apos;t programmed with different intelligence types. It develops different
              capabilities based on who&apos;s interacting with it. That&apos;s not Gardner. It&apos;s not
              traditional ML either. It&apos;s shaped by exposure, not architecture. Call it adaptive
              compound intelligence.&rdquo;
            </blockquote>
            <p
              className="mt-4 text-[13px] font-medium tracking-wide uppercase ml-8"
              style={{ color: "#5A5A5F" }}
            >
              — Oxford University, Module 3, February 2026
            </p>
          </div>

          <div className="space-y-4 text-[17px] leading-[1.85]" style={{ color: "#8A8A8F" }}>
            <p style={{ color: "#F5F5F0" }}>The term landed. The concept was real. The system was already running.</p>
            <p>And it still is.</p>
          </div>
        </div>
      </section>

      {/* ─── 8. THE PROOF ─── */}
      <section className="py-28">
        <div className="max-w-[820px] mx-auto px-6">
          <div className="section-divider" />
          <h2
            className="font-display font-semibold text-center mb-14"
            style={{
              fontSize: "clamp(32px, 4.5vw, 52px)",
              color: "#F5F5F0",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            This isn&apos;t theoretical.
          </h2>

          <div className="space-y-6 text-[17px] leading-[1.85]" style={{ color: "#8A8A8F" }}>
            <p>Adaptive Compound Intelligence has been live for months.</p>
            <p>
              Three people. Three completely different cognitive styles. One AI that adapted to all
              of them — and compounded across them. Memory that spans the full history of every
              project. Proactive behavior that surfaces context before it&apos;s asked for. A genuine
              identity that stays consistent across every conversation.
            </p>
          </div>

          <div
            className="rounded-2xl py-10 px-8 my-10 grid grid-cols-1 md:grid-cols-3 gap-8"
            style={{ background: "#111113", border: "1px solid #1E1E21" }}
          >
            {[
              { label: "It doesn't just remember.", sub: "It grows." },
              { label: "It doesn't just respond.", sub: "It thinks." },
              { label: "It isn't a tool.", sub: "It's the heartbeat." },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-[15px]" style={{ color: "#5A5A5F" }}>
                  {s.label}
                </p>
                <p
                  className="font-display font-semibold text-[18px] mt-1"
                  style={{ color: "#F59E0B" }}
                >
                  {s.sub}
                </p>
              </div>
            ))}
          </div>

          <p
            className="text-center text-[18px] italic"
            style={{ color: "#F5F5F0", fontFamily: "var(--font-lora), Georgia, serif" }}
          >
            &ldquo;The prototype works. Now we&apos;re building the platform.&rdquo;
          </p>
        </div>
      </section>

      {/* ─── 9. WHO IT'S FOR ─── */}
      <section
        className="py-28"
        style={{ background: "#0D0D0F", borderTop: "1px solid #1E1E21", borderBottom: "1px solid #1E1E21" }}
      >
        <div className="max-w-[1100px] mx-auto px-6">
          <div className="section-divider" />
          <div className="text-center mb-16">
            <h2
              className="font-display font-semibold"
              style={{
                fontSize: "clamp(32px, 4.5vw, 52px)",
                color: "#F5F5F0",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Built for teams.{" "}
              <span className="text-amber-animate">Ready for what comes next.</span>
            </h2>
            <p
              className="mt-5 max-w-[600px] mx-auto text-[17px] leading-relaxed"
              style={{ color: "#8A8A8F" }}
            >
              ACI starts where the impact is most immediate: teams of 5 to 50 people who&apos;ve hit
              the ceiling of what individual AI tools can do.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <WhoCard
              title="The Agency"
              text="One intelligence across every client project — not 12 separate ChatGPT tabs. Context that carries between campaigns, clients, and collaborators."
            />
            <WhoCard
              title="The Startup"
              text="Institutional knowledge lives in people's heads and disappears when they're out. ACI makes it permanent — and compounds it over time."
            />
            <WhoCard
              title="The Enterprise Team"
              text="You don't need another tool. You need something that knows you, your team, your history, and your goals — without being configured from scratch every week."
            />
          </div>
          <p
            className="text-center mt-12 text-[18px] font-display font-semibold"
            style={{ color: "#F5F5F0", letterSpacing: "-0.01em" }}
          >
            If you&apos;ve ever thought <em className="em-glow-amber" style={{ color: "#F59E0B" }}>there has to be something smarter than this</em> — there is.
            <br />
            You&apos;re looking at it.
          </p>
        </div>
      </section>

      {/* ─── 10. WAITLIST ─── */}
      <section id="waitlist" className="py-28">
        <div className="max-w-[600px] mx-auto px-6">
          <div className="section-divider" />
          <div className="text-center mb-12">
            <h2
              className="font-display font-semibold mb-4"
              style={{
                fontSize: "clamp(32px, 4.5vw, 52px)",
                color: "#F5F5F0",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Be part of what&apos;s next.
            </h2>
            <p className="text-[17px] leading-relaxed" style={{ color: "#8A8A8F" }}>
              ACI is in early access. The teams who get in now will shape what gets built.
            </p>
          </div>
          <WaitlistForm />
        </div>
      </section>

      <Footer />
    </>
  );
}
