import assets from "@/lib/assets";

export const Story = () => {
  return (
    <section
      id="our-story"
      data-testid="story-section"
      className="bg-white py-20 sm:py-24"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Sidebar label */}
          <div className="lg:col-span-3 lg:sticky lg:top-32">
            <div className="flex items-baseline gap-4">
              <span className="eyebrow">01 — Origin</span>
            </div>
            <h2
              data-testid="story-section-title"
              className="mt-4 font-serif-display text-[32px] lg:text-[40px] leading-[1.05] text-[var(--sb-ink)]"
            >
              Our Story
            </h2>
            <p className="mt-4 text-[14px] text-[var(--sb-ink-muted)] leading-relaxed">
              How a decades-old routine inspired a complete reinvention.
            </p>
          </div>

          {/* Main editorial */}
          <div className="lg:col-span-9">
            <h3
              data-testid="story-headline"
              className="font-serif-display text-[34px] sm:text-[50px] lg:text-[64px] leading-[1.04] text-[var(--sb-ink)] max-w-4xl"
            >
              The toothbrush hasn't{" "}
              <span className="italic text-[var(--sb-blue)]">changed in decades.</span>{" "}
              We decided it was time.
            </h3>

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <p
                data-testid="story-paragraph-1"
                className="text-[16px] lg:text-[17px] leading-[1.75] text-[var(--sb-ink-muted)]"
              >
                While many aspects of daily life have improved dramatically through
                technology, the toothbrush has remained surprisingly unchanged.
                For decades, brushing your teeth has relied on the same basic
                process: manual brushing that depends on technique, timing, and
                consistency.
              </p>
              <p
                data-testid="story-paragraph-2"
                className="text-[16px] lg:text-[17px] leading-[1.75] text-[var(--sb-ink-muted)]"
              >
                But the reality is simple:{" "}
                <span className="text-[var(--sb-ink)] font-medium">
                  most people don't brush perfectly.
                </span>{" "}
                Uneven brushing, missed spots, and brushing for less than the
                recommended time are typical — and over the years these small
                inconsistencies add up.
              </p>
            </div>

            {/* Quote */}
            <figure
              data-testid="story-pull-quote"
              className="mt-14 border-l-2 border-[var(--sb-blue)] pl-6 py-1 max-w-3xl"
            >
              <blockquote className="font-serif-display italic text-[24px] sm:text-[30px] lg:text-[36px] leading-[1.2] text-[var(--sb-ink)]">
                "What if brushing could be smarter, simpler, and more consistent?"
              </blockquote>
              <figcaption className="mt-5 text-[12px] tracking-[0.18em] uppercase text-[var(--sb-ink-muted)]">
                — The question that started it all
              </figcaption>
            </figure>

            {/* Full-bleed image */}
            <div className="mt-16">
              <div className="relative aspect-[16/9] bg-[var(--sb-blue-wash)] overflow-hidden border border-[var(--sb-line)]">
                <img
                  data-testid="story-history-image"
                  src={assets.model.landscape1}
                  alt="A new era of brushing — the Sonic Brush experience"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-[12px] tracking-[0.12em] uppercase text-[var(--sb-ink-muted)]">
                Fig. 01 — The evolution from manual to automatic brushing
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
