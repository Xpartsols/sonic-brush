import assets from "@/lib/assets";

const generations = [
  { v: "V1", year: "2019", note: "First patent · fully automatic prototype" },
  { v: "V2", year: "2020", note: "Refined silicone mouthpiece geometry" },
  { v: "V3", year: "2021", note: "BASS-technique bristle angle at 45°" },
  { v: "V4", year: "2022", note: "Cold-light whitening integration" },
  { v: "V5", year: "2024", note: "Current — 3-in-1 function, 30-use battery" },
];

export const Craftsmanship = () => {
  return (
    <section
      data-testid="craftsmanship-section"
      className="bg-white py-20 sm:py-24"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left editorial copy */}
          <div className="lg:col-span-6">
            <span className="eyebrow">05 — Craftsmanship</span>
            <h2
              data-testid="craft-headline"
              className="mt-4 font-serif-display text-[38px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-[var(--sb-ink)]"
            >
              An evolving <br />
              <span className="italic text-[var(--sb-blue)]">technology.</span>
            </h2>
            <p className="mt-8 text-[17px] leading-[1.7] text-[var(--sb-ink-muted)] max-w-lg">
              We see Sonic Brush® as a platform, not a static product. Each
              generation is refined through research and precise engineering —
              from vibration calibration to material selection. Every detail is
              optimized for comfort, performance, and reliability.
            </p>

            <div className="mt-10 aspect-[4/3] bg-[var(--sb-blue-wash)] overflow-hidden">
              <img
                data-testid="craft-modes-image"
                src={assets.product.blueFilled}
                alt="Sonic Brush in detail — engineered silicone mouthpiece"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right timeline */}
          <div className="lg:col-span-6">
            <div className="border-t border-[var(--sb-line)]">
              {generations.map((g, i) => (
                <div
                  key={g.v}
                  data-testid={`generation-${g.v.toLowerCase()}`}
                  className="grid grid-cols-12 gap-4 py-8 border-b border-[var(--sb-line)] group"
                >
                  <div className="col-span-3 sm:col-span-2">
                    <div className="font-serif-display text-[44px] sm:text-[56px] leading-none text-[var(--sb-blue)] group-hover:italic transition-all">
                      {g.v}
                    </div>
                  </div>
                  <div className="col-span-3 sm:col-span-2 flex items-center">
                    <div className="text-[12px] tracking-[0.18em] uppercase text-[var(--sb-ink-muted)]">
                      {g.year}
                    </div>
                  </div>
                  <div className="col-span-6 sm:col-span-8 flex items-center">
                    <p className="text-[15.5px] leading-[1.5] text-[var(--sb-ink)]">
                      {g.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-8 bg-[var(--sb-blue-wash)] border border-[var(--sb-line)]">
              <div className="eyebrow">Engineered in detail</div>
              <p className="mt-4 font-serif-display italic text-[24px] sm:text-[28px] leading-[1.3] text-[var(--sb-ink)]">
                "Two years of research. Five generations of refinement. One goal:
                the most reliable 30 seconds of your day."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
