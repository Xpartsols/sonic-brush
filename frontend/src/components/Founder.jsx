import assets from "@/lib/assets";
import { Quote, ShieldCheck } from "lucide-react";

export const Founder = () => {
  return (
    <section
      data-testid="founder-section"
      className="bg-white py-20 sm:py-24 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Lifestyle visual */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] max-w-[460px] mx-auto lg:mx-0">
              <div className="relative w-full h-full bg-white border border-[var(--sb-line)] overflow-hidden">
                <img
                  data-testid="founder-image"
                  src={assets.model.vertical1}
                  alt="A real Sonic Brush user — clinical-grade clean at home"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-[var(--sb-ink)] px-5 py-4 max-w-[260px] border border-[var(--sb-line)]">
                <div className="text-[10px] tracking-[0.22em] uppercase text-[var(--sb-blue)] font-semibold flex items-center gap-2">
                  <ShieldCheck size={12} strokeWidth={2.5} />
                  Dentist approved
                </div>
                <div className="font-serif-display text-[20px] leading-tight mt-1">
                  Recommended by dental professionals
                </div>
                <div className="text-[12px] text-[var(--sb-ink-muted)] mt-1">
                  Clinical endorsement · BASS-technique aligned
                </div>
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:col-span-7">
            <span className="eyebrow">04 — Endorsement</span>
            <h2
              data-testid="founder-headline"
              className="mt-4 font-serif-display text-[38px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-[var(--sb-ink)]"
            >
              Trusted by the <br />
              <span className="italic text-[var(--sb-blue)]">professionals who matter.</span>
            </h2>

            <div
              data-testid="founder-quote"
              className="mt-8 border-l border-[var(--sb-blue)]/40 pl-6"
            >
              <Quote size={26} className="text-[var(--sb-blue)] mb-4" />
              <p className="font-serif-display italic text-[21px] sm:text-[25px] leading-[1.35] text-[var(--sb-ink)]">
                "A 2016 report by the German Dental Association — analysing more
                than 350 clinical trials — proved the superiority of automated
                brushing over manual technique. Sonic Brush® reflects exactly
                that: a solution that enhances daily hygiene and supports
                long-term oral health."
              </p>
              <div className="mt-6 text-[13px] tracking-[0.12em] uppercase text-[var(--sb-ink-muted)]">
                Endorsed by licensed dental professionals
              </div>
            </div>

            <p className="mt-8 text-[16px] leading-[1.75] text-[var(--sb-ink-muted)] max-w-2xl">
              Our brush is engineered around the dentist-recommended BASS technique:
              45° angled silicone bristles, gentle 360° coverage, and a structured
              30-second cycle. The result is a product that doesn't just feel
              modern — it performs the way clinicians say teeth should be cleaned.
            </p>

            {/* Credentials row */}
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-lg border-t border-[var(--sb-line)] pt-6">
              <div data-testid="founder-stat-1">
                <div className="font-serif-display text-[34px] text-[var(--sb-blue)] leading-none">
                  350+
                </div>
                <div className="mt-2 text-[11px] tracking-[0.18em] uppercase text-[var(--sb-ink-muted)]">
                  Clinical trials referenced
                </div>
              </div>
              <div data-testid="founder-stat-2">
                <div className="font-serif-display text-[34px] text-[var(--sb-blue)] leading-none">
                  17%
                </div>
                <div className="mt-2 text-[11px] tracking-[0.18em] uppercase text-[var(--sb-ink-muted)]">
                  Less gum bleeding
                </div>
              </div>
              <div data-testid="founder-stat-3">
                <div className="font-serif-display text-[34px] text-[var(--sb-blue)] leading-none">
                  100%
                </div>
                <div className="mt-2 text-[11px] tracking-[0.18em] uppercase text-[var(--sb-ink-muted)]">
                  More plaque removed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
