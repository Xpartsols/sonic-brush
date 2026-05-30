import { useEffect, useRef } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
// All images sourced from client-approved folder:
// "Sonic Brush - Video & Images Assets - 2025 2"
import assets from "@/lib/assets";

// ── Helpers ──────────────────────────────────────────────────────────────────

const P = ({ children, className = "" }) => (
  <p className={`text-[16px] sm:text-[17px] leading-[1.8] text-[var(--sb-ink-muted)] ${className}`}>
    {children}
  </p>
);

/**
 * Floating notification-style card — sits on top of the image.
 * Inspired by the Yousign "You have sent a signature request" card style.
 */
const FloatCard = ({ label, sub }) => (
  <div
    className="relative inline-flex bg-white/95 backdrop-blur-md
               shadow-[0_24px_60px_-18px_rgba(3,68,164,0.45)]
               ring-1 ring-[var(--sb-ink)]/[0.06] max-w-[264px]"
  >
    {/* Architectural left accent bar */}
    <div className="w-[3px] bg-[var(--sb-blue)] flex-shrink-0" aria-hidden="true" />

    <div className="flex-1 px-5 py-4">
      {/* Abstract geometric mark — staggered bars (architectural diagram) */}
      <div className="flex flex-col gap-[3px] mb-3.5" aria-hidden="true">
        <span className="block h-[2px] w-10 bg-[var(--sb-blue)]" />
        <span className="block h-[2px] w-6 bg-[var(--sb-blue)] ml-1.5" />
        <span className="block h-[2px] w-3 bg-[var(--sb-blue)] ml-3" />
      </div>

      {/* Main label */}
      <p className="text-[14px] font-[600] text-[var(--sb-ink)] leading-[1.3] tracking-[-0.005em]">
        {label}
      </p>

      {sub && (
        <>
          {/* Hairline divider */}
          <div className="mt-3 w-6 h-px bg-[var(--sb-blue)]/50" />
          {/* Caption — uppercase, tracked, editorial */}
          <p className="mt-2 text-[9.5px] uppercase tracking-[0.22em] text-[var(--sb-ink-muted)] font-[500]">
            {sub}
          </p>
        </>
      )}
    </div>
  </div>
);

/**
 * Yousign-inspired split section.
 *
 * - Full-bleed abstract blocks extend from the outer corner to the page edge
 *   (positioned relative to the section, not the content container).
 * - Image fills the full height of the grid column.
 * - Optional floating card sits on the image.
 *
 * Props:
 *   flip    – image on LEFT, text on RIGHT
 *   tone    – "white" | "wash"
 *   badge   – optional <FloatCard /> element rendered on the image
 */
const Split = ({
  eyebrow,
  title,
  image,
  alt,
  flip   = false,
  tone   = "white",
  badge,
  children,
}) => {
  const bg     = tone === "wash" ? "bg-[var(--sb-blue-wash)]" : "bg-white";
  // Full-bleed block colors vary by tone
  const block1 = tone === "wash" ? "bg-white/80"             : "bg-[var(--sb-blue-soft)]";
  const block2 = tone === "wash" ? "bg-[var(--sb-blue)]/18"  : "bg-[var(--sb-blue-deep)]/10";

  return (
    <section className={`${bg} relative overflow-hidden`}>

      {/* ── Full-bleed abstract blocks (extend to page edge) ── */}
      {/* Large — top outer corner */}
      <div
        className={`absolute top-0 ${flip ? "left-0" : "right-0"} w-[46%] h-[60%] ${block1} pointer-events-none`}
      />
      {/* Small accent — bottom inner corner */}
      <div
        className={`absolute bottom-0 ${flip ? "right-0" : "left-0"} w-[16%] h-[24%] ${block2} pointer-events-none`}
      />

      {/* ── Content (max-width container) ── */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">

          {!flip ? (
            <>
              {/* Text — left */}
              <div className="flex items-center">
                <div className="w-full">
                  <span className="eyebrow">{eyebrow}</span>
                  <h2 className="section-title mt-6">{title}</h2>
                  <div className="mt-7 space-y-4">{children}</div>
                </div>
              </div>
              {/* Image — right */}
              <div className="relative min-h-[380px] sm:min-h-[520px] lg:min-h-0 lg:h-full">
                <img
                  src={image}
                  alt={alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {badge && (
                  <div className="absolute bottom-5 left-5 z-20">{badge}</div>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Image — left (order-2 on mobile so text reads first) */}
              <div className="relative order-2 lg:order-1 min-h-[380px] sm:min-h-[520px] lg:min-h-0 lg:h-full">
                <img
                  src={image}
                  alt={alt}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {badge && (
                  <div className="absolute bottom-5 right-5 z-20">{badge}</div>
                )}
              </div>
              {/* Text — right */}
              <div className="flex items-center order-1 lg:order-2">
                <div className="w-full">
                  <span className="eyebrow">{eyebrow}</span>
                  <h2 className="section-title mt-6">{title}</h2>
                  <div className="mt-7 space-y-4">{children}</div>
                </div>
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  );
};

// ── Data ─────────────────────────────────────────────────────────────────────

const supportGroups = [
  "Children who resist brushing",
  "Parents and caregivers helping with daily hygiene",
  "People with autism or ADHD",
  "People with sensory sensitivities",
  "People with physical or neurological challenges and limitations",
];

const proofStats = [
  { stat: "30s",  label: "Full clean cycle",   desc: "Every tooth brushed in a single automated pass" },
  { stat: "360°", label: "All teeth at once",  desc: "Simultaneous coverage — nothing missed"         },
  { stat: "0",    label: "Technique required", desc: "Press once and let Sonic Brush® do the work"    },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export const OurStoryPage = () => {
  const heroImgRef = useRef(null);

  // ── Parallax on hero image (RAF-throttled, 60fps) ──────────────────────────
  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (heroImgRef.current) {
          heroImgRef.current.style.transform = `scale(1.12) translateY(${window.scrollY * 0.3}px)`;
        }
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative h-[82vh] min-h-[560px] max-h-[860px] flex items-end overflow-hidden">
        {/* Parallax image */}
        <picture className="absolute inset-0 w-full h-full">
          <source media="(max-width: 767px)" srcSet={assets.heroMobile} />
          <img
            ref={heroImgRef}
            src={assets.heroDesktop}
            alt="Woman using Sonic Brush U-shaped toothbrush"
            className="w-full h-full object-cover object-left-top"
            style={{ transform: "scale(1.12)", willChange: "transform" }}
          />
        </picture>

        {/* Gradient: heavy on the left, fades right — lets image breathe */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--sb-blue-deep)]/90 via-[var(--sb-blue-deep)]/35 to-transparent" />
        {/* Bottom fade for extra text safety */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--sb-blue-deep)]/70 via-transparent to-transparent" />

        {/* Text — bottom-left, editorial style */}
        <div className="relative z-10 w-full px-5 sm:px-10 lg:px-16 pb-12 sm:pb-16 lg:pb-20">
          <div className="max-w-[580px]">
            <h1
              className="mt-4 font-serif-display text-[44px] sm:text-[64px] lg:text-[80px] leading-[1.02] tracking-[-0.025em] text-white"
              style={{ textShadow: "0 2px 24px rgba(2,45,110,0.7)" }}
            >
              The Toothbrush
              <br />
              Hasn't Changed
              <br />
              in Decades.
              <span className="block mt-2 italic text-[var(--sb-blue-soft)]">
                We decided it was time.
              </span>
            </h1>
            <div className="mt-8 flex items-center gap-5">
              <a href="#mission" className="btn-hero inline-flex items-center gap-2">
                Read Our Story
                <ArrowRight size={14} />
              </a>
              {/* Divider + scroll hint */}
              <div className="hidden sm:flex items-center gap-3 text-white/50 text-[11px] uppercase tracking-[0.15em]">
                <span className="w-8 h-px bg-white/30" />
                Scroll to explore
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF STRIP — equal highlight blocks ── */}
      <div className="bg-[var(--sb-blue-deep)]">
        <div className="grid grid-cols-3">
          {[
            { stat: "30s",   label: "Full clean cycle",   sub: "Every tooth, every time"       },
            { stat: "360°",  label: "All teeth at once",  sub: "Simultaneous coverage"         },
            { stat: "0",     label: "Technique required", sub: "Just press and brush"          },
          ].map(({ stat, label, sub }, i) => (
            <div
              key={stat}
              className={`relative flex flex-col items-center text-center py-10 sm:py-14 lg:py-16 px-4 sm:px-8
                ${i !== 0 ? "border-l border-white/10" : ""}`}
            >
              {/* Top accent — the highlight marker */}
              <div className="w-8 h-[2px] bg-[var(--sb-blue-soft)] mb-5 sm:mb-7" />

              {/* Number */}
              <div className="font-serif-display text-[52px] sm:text-[72px] lg:text-[88px] leading-none text-white">
                {stat}
              </div>

              {/* Label */}
              <div className="mt-3 sm:mt-4 text-[9px] sm:text-[10px] uppercase tracking-[0.22em] text-white/45">
                {label}
              </div>

              {/* Sub — hidden on mobile */}
              <p className="hidden sm:block mt-1.5 text-[11px] sm:text-[12px] text-white/25 leading-snug max-w-[140px]">
                {sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── 01 — OUR MISSION ── */}
      <Split
        eyebrow="Our Mission"
        title={<>Most people don't brush <span className="italic text-[var(--sb-blue)]">perfectly.</span></>}
        image={assets.story.mission}
        alt="Woman holding Sonic Brush U-shaped device, smiling"
        tone="white"
        badge={
          <FloatCard
            icon={<CheckCircle2 size={14} />}
            label="Brushing cycle complete"
            sub="30 seconds · All teeth covered"
          />
        }
      >
        <div id="mission" />
        <P>
          For decades, brushing your teeth has relied on the same basic process:
          manual strokes that depend on technique, timing, and consistency. But
          the reality is simple — most people don't brush perfectly. Uneven
          coverage, missed spots, and rushing through the two-minute mark are
          the norm.
        </P>
        <P>
          Over years, those small inconsistencies add up. We asked ourselves a
          question that changed everything:
        </P>
        <blockquote className="border-l-2 border-[var(--sb-blue)] pl-5 font-serif-display italic text-[20px] sm:text-[23px] leading-[1.35] text-[var(--sb-ink)]">
          "What if brushing could be smarter, simpler, and more consistent?"
        </blockquote>
      </Split>

      {/* ── 02 — A NEW WAY TO BRUSH ── */}
      <Split
        eyebrow="A New Way to Brush"
        title={<>So we built <span className="italic text-[var(--sb-blue)]">something better.</span></>}
        image={assets.story.newWay}
        alt="Woman using Sonic Brush in dark blue studio"
        flip
        tone="wash"
      >
        <P>
          Instead of refining the traditional toothbrush, we rethought brushing
          entirely. Sonic Brush® introduced a fully automatic system that cleans
          all your teeth at once — in a structured 30-second cycle.
        </P>
        <p className="text-[16px] sm:text-[17px] leading-[1.8] font-medium text-[var(--sb-ink)]">
          No technique. No guesswork. No missed spots.
        </p>
        <P>
          By standardising motion and timing, Sonic Brush® turns brushing from a
          technique-dependent task into a simple, highly effective daily ritual.
        </P>
      </Split>

      {/* ── 03 — BUILT FOR MODERN LIFE ── */}
      <Split
        eyebrow="Built for Modern Life"
        title={<>Time <span className="italic text-[var(--sb-blue)]">matters.</span></>}
        image={assets.story.modernLife}
        alt="Woman using Sonic Brush against blue background"
        tone="white"
        badge={
          <FloatCard
            icon={<CheckCircle2 size={14} />}
            label="24+ hours saved per year"
            sub="vs. traditional brushing"
          />
        }
      >
        <P>
          Two minutes of brushing twice a day — over a year, that's more than
          24 hours of your life. Sonic Brush® uses precision vibration
          technology and a one-button system to deliver a complete clean in 30
          seconds, fitting effortlessly into even the busiest mornings.
        </P>
        <div className="grid grid-cols-2 gap-5 max-w-xs pt-2">
          <div>
            <div className="font-serif-display text-[36px] text-[var(--sb-blue)] leading-none">24h+</div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.1em] text-[var(--sb-ink-muted)]">Saved per year</div>
          </div>
          <div>
            <div className="font-serif-display text-[36px] text-[var(--sb-blue)] leading-none">30s</div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.1em] text-[var(--sb-ink-muted)]">Full clean cycle</div>
          </div>
        </div>
      </Split>

      {/* ── 04 — DESIGNED TO BE ACCESSIBLE ── */}
      <Split
        eyebrow="Designed to Be Accessible"
        title={<>Oral care, <span className="italic text-[var(--sb-blue)]">for everyone.</span></>}
        image={assets.story.accessible}
        alt="Woman using Sonic Brush, clean white background"
        flip
        tone="wash"
        badge={
          <FloatCard
            icon={<CheckCircle2 size={14} />}
            label="Designed for all ages"
            sub="Sensory-friendly & easy to use"
          />
        }
      >
        <P>
          Sonic Brush® was designed to make brushing easier for everyone —
          especially those who struggle with traditional routines. Our system
          can help support:
        </P>
        <ul className="space-y-2.5 pt-1">
          {supportGroups.map((group) => (
            <li key={group} className="flex items-start gap-3">
              <CheckCircle2 size={16} className="text-[var(--sb-blue)] mt-[3px] flex-shrink-0" />
              <span className="text-[15px] sm:text-[16px] leading-[1.65] text-[var(--sb-ink)]">{group}</span>
            </li>
          ))}
        </ul>
        <P>
          By simplifying the process, Sonic Brush® helps make daily oral care a
          more manageable, consistent, and independent experience.
        </P>
      </Split>

      {/* ── MANIFESTO BREAK — pure typography, no image ── */}
      <section className="bg-[var(--sb-ink)] py-20 sm:py-28">
        <div className="max-w-[860px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <blockquote className="font-serif-display italic text-[32px] sm:text-[48px] lg:text-[58px] leading-[1.15] text-white">
            "Smarter brushing.
            <br />Consistent results.
            <br />Every single day."
          </blockquote>
          {/* Signature rule */}
          <div className="mt-10 flex items-center justify-center gap-5">
            <div className="w-12 h-px bg-white/20" />
            <span className="text-white/40 text-[11px] uppercase tracking-[0.22em]">Sonic Brush®</span>
            <div className="w-12 h-px bg-white/20" />
          </div>
        </div>
      </section>

      {/* ── 05 — CONTINUOUS INNOVATION ── */}
      <Split
        eyebrow="Continuous Innovation"
        title={<>An evolving <span className="italic text-[var(--sb-blue)]">technology.</span></>}
        image={assets.story.innovation}
        alt="Woman holding glowing Sonic Brush in dark blue studio"
        tone="white"
        badge={
          <FloatCard
            icon={<CheckCircle2 size={14} />}
            label="Continuously refined"
            sub="Research-driven engineering"
          />
        }
      >
        <P>
          We see Sonic Brush® as an evolving technology, not a static product.
          Each iteration is refined through research and clever engineering —
          from vibration calibration to material selection, every detail is
          optimised for comfort, performance, and long-term reliability.
        </P>
        <p className="text-[16px] sm:text-[17px] leading-[1.8] font-medium text-[var(--sb-ink)]">
          Our goal: to elevate your oral care through intelligent, user-centred design.
        </p>
      </Split>

      {/* ── 06 — HEALTH, CONFIDENCE & DAILY HABITS ── */}
      <Split
        eyebrow="Health, Confidence & Daily Habits"
        title={<>Small daily habits create <span className="italic text-[var(--sb-blue)]">lasting impact.</span></>}
        image={assets.story.habits}
        alt="Woman using Sonic Brush outdoors in natural warm light"
        flip
        tone="wash"
        badge={
          <FloatCard
            icon={<CheckCircle2 size={14} />}
            label="Daily habit formed"
            sub="Simple, consistent, automatic"
          />
        }
      >
        <P>
          Oral care is a daily habit — and habits shape long-term outcomes.
          When routines are simple, they're easier to maintain. When brushing
          becomes effortless, consistency follows naturally.
        </P>
        <P>
          Sonic Brush® was designed to make brushing simple, reliable, and
          automatic — so you can focus on the results, not the process. Because
          it's the small daily rituals that create the biggest difference over
          time, especially for your health and confidence.
        </P>
      </Split>

      {/* ── 07 — OUR COMMITMENT ── */}
      {/* Redesign: left-aligned with large decorative quote mark */}
      <section className="bg-[var(--sb-blue-deep)] py-16 sm:py-24 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="max-w-[780px]">
            {/* Large decorative opening quote */}
            <div
              className="font-serif-display text-[120px] sm:text-[160px] leading-none text-[var(--sb-blue)]/40 select-none -mb-6 sm:-mb-8"
              aria-hidden="true"
            >
              "
            </div>
            <span className="eyebrow eyebrow--light">
              Our Commitment
            </span>
            <h2 className="mt-6 section-title section-title--xl section-title--light">
              Trust is built through consistent quality,
              transparency, and continuous improvement.
            </h2>
            <p className="mt-7 section-lead section-lead--light max-w-[620px]">
              At Sonic Brush®, we listen to our customers and refine our products
              based on real-world feedback. We are committed to delivering
              products that reflect modern expectations — building a brand you can
              trust for smarter, more consistent oral care, every single day.
            </p>
            {/* Divider rule */}
            <div className="mt-10 w-16 h-[2px] bg-[var(--sb-blue-soft)]/40" />
          </div>
        </div>
      </section>

      {/* ── 08 — THE FUTURE — 2-column split CTA ── */}
      {/* Completely different: text left + product image right */}
      <section className="bg-white relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[480px] sm:min-h-[560px]">

          {/* Left — text + CTA */}
          <div className="flex items-center px-5 sm:px-10 lg:px-16 xl:px-20 py-16 sm:py-20">
            <div className="max-w-[480px]">
              <span className="eyebrow">The Future of Brushing</span>
              <h2 className="section-title section-title--xl mt-6">
                Welcome to the{" "}
                <span className="italic text-[var(--sb-blue)]">future of brushing.</span>
              </h2>
              <p className="mt-7 section-lead text-[var(--sb-ink-muted)]">
                We believe the future of oral care lies in intelligent automation,
                thoughtful design, and routines that fit the pace of everyday life.
                Sonic Brush® is our contribution to that future.
              </p>
              <p className="mt-7 font-serif-display italic text-[22px] sm:text-[28px] leading-[1.3] text-[var(--sb-ink)]">
                The toothbrush had its era.
                <br />
                Now it's time for something better.
              </p>
              <a
                href="https://sonic-brush.net/collections/sonic-brush-products"
                className="btn-sb-primary mt-8 inline-flex items-center gap-2"
              >
                Shop Sonic Brush
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Right — product image, full height */}
          <div className="relative min-h-[340px] lg:min-h-0">
            {/* Abstract block behind image */}
            <div className="absolute top-0 right-0 w-[55%] h-[55%] bg-[var(--sb-blue-soft)]" />
            <div className="absolute bottom-0 left-0 w-[22%] h-[28%] bg-[var(--sb-blue-deep)]/10" />
            <div className="absolute inset-0 z-10 overflow-hidden">
              <img
                src={assets.cta}
                alt="Sonic Brush — the future of brushing"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default OurStoryPage;
