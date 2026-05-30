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

const Split = ({
  eyebrow,
  title,
  image,
  alt,
  aspect = "aspect-[4/3]",
  flip = false,
  tone = "white",
  children,
}) => {
  const bg = tone === "wash" ? "bg-[var(--sb-blue-wash)]" : "bg-white";

  const imgEl = (
    <div className={`${aspect} overflow-hidden`}>
      <img src={image} alt={alt} className="w-full h-full object-cover" />
    </div>
  );

  const textEl = (
    <div>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="section-title mt-4">{title}</h2>
      <div className="mt-6 space-y-4">{children}</div>
    </div>
  );

  return (
    <section className={`${bg} py-12 sm:py-20`}>
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {flip ? (
            <>
              <div className="order-2 lg:order-1">{imgEl}</div>
              <div className="order-1 lg:order-2">{textEl}</div>
            </>
          ) : (
            <>
              <div>{textEl}</div>
              <div>{imgEl}</div>
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
  { stat: "30s",   label: "Full clean cycle"    },
  { stat: "360°",  label: "All teeth at once"   },
  { stat: "0",     label: "Technique required"  },
];

// ── Page ─────────────────────────────────────────────────────────────────────

export const OurStoryPage = () => {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative h-[78vh] min-h-[540px] max-h-[820px] flex items-end justify-center overflow-hidden">
        <picture className="absolute inset-0 w-full h-full">
          <source media="(max-width: 767px)" srcSet={assets.heroMobile} />
          <img
            src={assets.heroDesktop}
            alt="Woman using Sonic Brush U-shaped toothbrush"
            className="w-full h-full object-cover object-top"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--sb-blue-deep)]/90 via-[var(--sb-blue-deep)]/30 to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto pb-14 sm:pb-20">
          <span className="text-white/70 tracking-[0.18em] text-[11px] uppercase">
            Our Story
          </span>
          <h1 className="mt-5 font-serif-display text-[28px] sm:text-[40px] lg:text-[54px] leading-[1.12] text-white">
            The Toothbrush Hasn't Changed{" "}
            <br className="hidden sm:block" />
            in Decades.{" "}
            <span className="italic text-[var(--sb-blue-soft)]">
              We decided it was time.
            </span>
          </h1>
          <a href="#mission" className="btn-hero mt-9 inline-flex items-center gap-2">
            Read Our Story
            <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* ── PROOF STRIP — anchors the story immediately after hero ── */}
      <div className="bg-[var(--sb-blue)] py-8 sm:py-11">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-3 gap-4 text-center">
            {proofStats.map(({ stat, label }) => (
              <div key={label}>
                <div className="font-serif-display text-[36px] sm:text-[52px] leading-none text-white">
                  {stat}
                </div>
                <div className="mt-2 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] text-white/60">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 01 — OUR MISSION ── */}
      <Split
        eyebrow="01 — Our Mission"
        title={
          <>
            Most people don't brush{" "}
            <span className="italic text-[var(--sb-blue)]">perfectly.</span>
          </>
        }
        image={assets.story.mission}
        alt="Woman holding Sonic Brush U-shaped device, smiling in home setting"
        aspect="aspect-square"
        tone="white"
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

      {/* ── 02 — A NEW WAY TO BRUSH (flipped, wash) ── */}
      <Split
        eyebrow="02 — A New Way to Brush"
        title={
          <>
            So we built{" "}
            <span className="italic text-[var(--sb-blue)]">something better.</span>
          </>
        }
        image={assets.story.newWay}
        alt="Woman using Sonic Brush in dark blue studio"
        aspect="aspect-[4/5]"
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
        eyebrow="03 — Built for Modern Life"
        title={
          <>
            Time{" "}
            <span className="italic text-[var(--sb-blue)]">matters.</span>
          </>
        }
        image={assets.story.modernLife}
        alt="Woman using Sonic Brush against blue background"
        aspect="aspect-square"
        tone="white"
      >
        <P>
          Two minutes of brushing twice a day — over a year, that's more than
          24 hours of your life. Sonic Brush® uses precision vibration
          technology and a one-button system to deliver a complete clean in 30
          seconds, fitting effortlessly into even the busiest mornings.
        </P>
        <div className="grid grid-cols-2 gap-5 max-w-xs pt-2">
          <div>
            <div className="font-serif-display text-[36px] text-[var(--sb-blue)] leading-none">
              24h+
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.1em] text-[var(--sb-ink-muted)]">
              Saved per year
            </div>
          </div>
          <div>
            <div className="font-serif-display text-[36px] text-[var(--sb-blue)] leading-none">
              30s
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.1em] text-[var(--sb-ink-muted)]">
              Full clean cycle
            </div>
          </div>
        </div>
      </Split>

      {/* ── 04 — DESIGNED TO BE ACCESSIBLE (flipped, wash) ── */}
      <Split
        eyebrow="04 — Designed to Be Accessible"
        title={
          <>
            Oral care,{" "}
            <span className="italic text-[var(--sb-blue)]">for everyone.</span>
          </>
        }
        image={assets.story.accessible}
        alt="Woman using Sonic Brush U-shaped toothbrush, clean white background"
        aspect="aspect-square"
        flip
        tone="wash"
      >
        <P>
          Sonic Brush® was designed to make brushing easier for everyone —
          especially those who struggle with traditional routines. Our system
          can help support:
        </P>
        <ul className="space-y-2.5 pt-1">
          {supportGroups.map((group) => (
            <li key={group} className="flex items-start gap-3">
              <CheckCircle2
                size={16}
                className="text-[var(--sb-blue)] mt-[3px] flex-shrink-0"
              />
              <span className="text-[15px] sm:text-[16px] leading-[1.65] text-[var(--sb-ink)]">
                {group}
              </span>
            </li>
          ))}
        </ul>
        <P>
          By simplifying the process, Sonic Brush® helps make daily oral care a
          more manageable, consistent, and independent experience.
        </P>
      </Split>

      {/* ── FULL-BLEED VISUAL BREAK ── breaks the split rhythm mid-page ── */}
      <section className="relative h-[45vh] min-h-[280px] max-h-[480px] overflow-hidden">
        <img
          src={assets.fullBleed}
          alt="Sonic Brush in use — natural daylight"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--sb-blue-deep)]/80 via-[var(--sb-blue-deep)]/40 to-transparent" />
        <div className="relative z-10 h-full flex items-center px-5 sm:px-12 lg:px-20 max-w-[1280px] mx-auto">
          <blockquote className="font-serif-display italic text-[22px] sm:text-[32px] lg:text-[40px] leading-[1.25] text-white max-w-lg">
            "Smarter brushing.<br />Consistent results.<br />Every single day."
          </blockquote>
        </div>
      </section>

      {/* ── 05 — CONTINUOUS INNOVATION ── */}
      <Split
        eyebrow="05 — Continuous Innovation"
        title={
          <>
            An evolving{" "}
            <span className="italic text-[var(--sb-blue)]">technology.</span>
          </>
        }
        image={assets.story.innovation}
        alt="Woman holding glowing Sonic Brush in dark blue studio"
        aspect="aspect-square"
        tone="white"
      >
        <P>
          We see Sonic Brush® as an evolving technology, not a static product.
          Each iteration is refined through research and clever engineering —
          from vibration calibration to material selection, every detail is
          optimised for comfort, performance, and long-term reliability.
        </P>
        <p className="text-[16px] sm:text-[17px] leading-[1.8] font-medium text-[var(--sb-ink)]">
          Our goal: to elevate your oral care through intelligent,
          user-centred design.
        </p>
      </Split>

      {/* ── 06 — HEALTH, CONFIDENCE & DAILY HABITS (flipped, wash) ── */}
      <Split
        eyebrow="06 — Health, Confidence & Daily Habits"
        title={
          <>
            Small daily habits create{" "}
            <span className="italic text-[var(--sb-blue)]">lasting impact.</span>
          </>
        }
        image={assets.story.habits}
        alt="Woman using Sonic Brush outdoors in natural warm light"
        aspect="aspect-square"
        flip
        tone="wash"
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

      {/* ── 07 — OUR COMMITMENT (deep-blue centered) ── */}
      <section className="bg-[var(--sb-blue-deep)] py-16 sm:py-24">
        <div className="max-w-[860px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <span className="text-white/60 text-[11px] uppercase tracking-[0.18em]">
            07 — Our Commitment
          </span>
          <h2 className="mt-5 font-serif-display text-[26px] sm:text-[34px] lg:text-[44px] leading-[1.2] text-white">
            Trust is built through consistent quality,
            transparency, and continuous improvement.
          </h2>
          <p className="mt-7 text-[16px] sm:text-[17px] leading-[1.8] text-white/75 max-w-2xl mx-auto">
            At Sonic Brush®, we listen to our customers and refine our products
            based on real-world feedback. We are committed to delivering
            products that reflect modern expectations — building a brand you can
            trust for smarter, more consistent oral care, every single day.
          </p>
        </div>
      </section>

      {/* ── 08 — THE FUTURE OF BRUSHING ── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-[860px] mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <span className="eyebrow">08 — The Future of Brushing</span>
          <h2 className="section-title mt-4">
            Welcome to the{" "}
            <span className="italic text-[var(--sb-blue)]">
              future of brushing.
            </span>
          </h2>
          <P className="mt-7 max-w-2xl mx-auto">
            We believe the future of oral care lies in intelligent automation,
            thoughtful design, and routines that fit the pace of everyday life.
            Sonic Brush® is our contribution to that future — not replacing the
            fundamentals of oral hygiene, but improving how they're delivered.
          </P>
          <p className="mt-8 font-serif-display italic text-[22px] sm:text-[28px] leading-[1.25] text-[var(--sb-ink)]">
            The toothbrush had its era.
            <br />
            Now it's time for something better.
          </p>
          <a
            href="https://sonic-brush.net/collections/sonic-brush-products"
            className="btn-sb-primary mt-10 inline-flex items-center gap-2"
          >
            Shop Sonic Brush
            <ArrowRight size={14} />
          </a>
        </div>
      </section>

    </div>
  );
};

export default OurStoryPage;
