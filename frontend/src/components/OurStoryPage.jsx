import { ArrowRight, CheckCircle2 } from "lucide-react";
import assets from "@/lib/assets";

// ── Helpers ──────────────────────────────────────────────────────────────────

const P = ({ children, className = "" }) => (
  <p className={`text-[16px] sm:text-[17px] leading-[1.8] text-[var(--sb-ink-muted)] ${className}`}>
    {children}
  </p>
);

/**
 * Reusable split-layout section.
 *
 * Props
 *   eyebrow  – small label above the heading
 *   title    – heading text (React node)
 *   image    – src string
 *   alt      – img alt
 *   aspect   – Tailwind aspect-ratio class (default "aspect-[4/3]")
 *   flip     – image on LEFT, text on RIGHT
 *   tone     – "white" | "wash"
 *   children – body content (P elements, lists, stats…)
 */
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
    <section className={`${bg} py-20 sm:py-28`}>
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

// ── Page ─────────────────────────────────────────────────────────────────────

export const OurStoryPage = () => {
  return (
    <div>

      {/* ── HERO ── */}
      <section className="relative h-[78vh] min-h-[540px] max-h-[820px] flex items-center justify-center overflow-hidden">
        <img
          src={assets.hero}
          alt="Sonic Brush — the U-shaped automatic toothbrush"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* lighter gradient so the lifestyle shot breathes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--sb-blue-deep)]/75 via-[var(--sb-blue-deep)]/20 to-transparent" />
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <span className="text-white/75 tracking-[0.18em] text-[11px] uppercase">
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
        alt="Woman holding Sonic Brush, smiling"
        aspect="aspect-[4/3]"
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
        alt="Model examining the Sonic Brush U-shaped mouthpiece"
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
        alt="Model holding the white Sonic Brush against a clean background"
        aspect="aspect-[4/3]"
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
            <div className="font-serif-display text-[32px] text-[var(--sb-blue)] leading-none">
              24h+
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.1em] text-[var(--sb-ink-muted)]">
              Saved per year
            </div>
          </div>
          <div>
            <div className="font-serif-display text-[32px] text-[var(--sb-blue)] leading-none">
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
        alt="Lifestyle shot — person using Sonic Brush in everyday setting"
        aspect="aspect-[4/3]"
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
        alt="Black Sonic Brush device against a clean background"
        aspect="aspect-[4/3]"
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

      {/* ── COLOR SHOWCASE ── */}
      <section className="bg-[var(--sb-blue-wash)] py-20 sm:py-28">
        <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12">
            <span className="eyebrow">Available in Four Colours</span>
            <h2 className="section-title mt-4">
              Find your{" "}
              <span className="italic text-[var(--sb-blue)]">perfect match.</span>
            </h2>
          </div>
          {/* full-bleed colorways banner */}
          <div className="overflow-hidden mb-10">
            <img
              src={assets.colorways}
              alt="Sonic Brush available in White, Blue, Pink, and Black"
              className="w-full object-cover max-h-[420px]"
            />
          </div>
          {/* four cutouts */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 sm:gap-8">
            {assets.cutouts.map(({ name, src }) => (
              <div key={name} className="flex flex-col items-center gap-4">
                <div className="w-full aspect-square bg-white flex items-center justify-center p-6">
                  <img
                    src={src}
                    alt={`Sonic Brush in ${name}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[12px] uppercase tracking-[0.12em] text-[var(--sb-ink-muted)]">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

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
        alt="Model with Sonic Brush device, looking down at it"
        aspect="aspect-[4/3]"
        flip
        tone="white"
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
      <section className="bg-[var(--sb-blue-deep)] py-24 sm:py-32">
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
      <section className="bg-white py-24 sm:py-32">
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
