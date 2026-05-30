import { ArrowDown } from "lucide-react";
import assets from "@/lib/assets";

export const Hero = () => {
  return (
    <section
      data-testid="about-hero"
      className="bg-[var(--sb-blue-wash)]"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-14 sm:pt-20 lg:pt-24 pb-14 sm:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <span className="eyebrow" data-testid="hero-eyebrow">Our Story</span>
              <span className="h-px w-10 bg-[var(--sb-blue)]" />
              <span className="text-[11px] tracking-[0.22em] uppercase font-medium text-[var(--sb-ink-muted)]">
                Est. 2019
              </span>
            </div>

            <h1
              data-testid="hero-headline"
              className="font-serif-display text-[40px] sm:text-[56px] lg:text-[74px] leading-[1.02] text-[var(--sb-ink)]"
            >
              The toothbrush had its era.
              <br />
              <span className="italic text-[var(--sb-blue)]">
                Now it's time for something better.
              </span>
            </h1>

            <p
              data-testid="hero-subhead"
              className="mt-6 max-w-xl text-[16px] lg:text-[17px] leading-[1.7] text-[var(--sb-ink-muted)] font-normal"
            >
              We built the world's first fully automatic sonic toothbrush —
              cleaning every tooth at once, in 30 seconds flat. This is the story
              of Sonic Brush® and the future of daily oral care.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#our-story"
                data-testid="hero-cta-story"
                className="btn-sb-primary"
              >
                Read Our Story
                <ArrowDown size={16} />
              </a>
              <a
                href="https://sonic-brush.net/collections/sonic-brush-products"
                data-testid="hero-cta-shop"
                className="btn-sb-outline"
              >
                Shop Sonic Brush
              </a>
            </div>

            {/* Inline stats */}
            <div className="mt-12 grid grid-cols-3 gap-5 max-w-xl border-t border-[var(--sb-line)] pt-6">
              <div data-testid="hero-stat-users">
                <div className="font-serif-display text-[32px] lg:text-[40px] text-[var(--sb-blue)] leading-none">
                  100K+
                </div>
                <div className="mt-2 text-[12px] tracking-[0.12em] uppercase text-[var(--sb-ink-muted)]">
                  Happy users
                </div>
              </div>
              <div data-testid="hero-stat-seconds">
                <div className="font-serif-display text-[32px] lg:text-[40px] text-[var(--sb-blue)] leading-none">
                  30s
                </div>
                <div className="mt-2 text-[12px] tracking-[0.12em] uppercase text-[var(--sb-ink-muted)]">
                  Full mouth clean
                </div>
              </div>
              <div data-testid="hero-stat-generations">
                <div className="font-serif-display text-[32px] lg:text-[40px] text-[var(--sb-blue)] leading-none">
                  V5
                </div>
                <div className="mt-2 text-[12px] tracking-[0.12em] uppercase text-[var(--sb-ink-muted)]">
                  Generations refined
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto border border-[var(--sb-line)] bg-white">
              <img
                data-testid="hero-product-image"
                src={assets.product.packaged1}
                alt="Sonic Brush V5 — fully automatic sonic toothbrush with packaging"
                className="relative z-10 w-full h-full object-contain p-5 sm:p-7"
              />

              <div
                data-testid="hero-product-label"
                className="absolute bottom-5 left-5 z-20 bg-white px-4 py-3 border border-[var(--sb-line)]"
              >
                <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--sb-blue)] font-semibold">
                  Current Model
                </div>
                <div className="text-[15px] font-medium text-[var(--sb-ink)] mt-0.5">
                  Sonic Brush® V5
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
