import { Zap, Clock, Target, Sparkles } from "lucide-react";
import assets from "@/lib/assets";

const values = [
  {
    icon: Zap,
    title: "Effortless",
    text: "One button. Thirty seconds. A structured brushing cycle that removes the guesswork.",
  },
  {
    icon: Target,
    title: "Consistent",
    text: "Identical motion and timing, every single brush. No technique required.",
  },
  {
    icon: Clock,
    title: "Respectful of time",
    text: "Two minutes twice a day equals 24 hours a year. We give those hours back.",
  },
  {
    icon: Sparkles,
    title: "Truly accessible",
    text: "Designed for every mouth — including those who've always struggled with brushing.",
  },
];

export const Mission = () => {
  return (
    <section
      id="mission"
      data-testid="mission-section"
      className="bg-[var(--sb-blue-wash)] py-20 sm:py-24"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-10 items-start mb-12">
          <div className="lg:col-span-5">
            <span className="eyebrow">02 — Mission & Values</span>
            <h2
              data-testid="mission-headline"
              className="mt-4 font-serif-display text-[38px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-[var(--sb-ink)]"
            >
              A new way <span className="italic text-[var(--sb-blue)]">to brush.</span>
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p
              data-testid="mission-intro"
              className="text-[17px] lg:text-[19px] leading-[1.7] text-[var(--sb-ink-muted)]"
            >
              Instead of slightly improving the traditional toothbrush, we rethought
              brushing entirely. After years of research and development, Sonic
              Brush® introduced a fully automatic system designed to clean all your
              teeth at once — in a structured 30-second cycle.
            </p>
            <p className="mt-5 text-[16px] leading-[1.7] text-[var(--sb-ink)] font-medium">
              No technique. No guesswork. No missed spots.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div
          data-testid="mission-values-grid"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[var(--sb-line)] bg-white"
        >
          {values.map((v, i) => (
            <div
              key={v.title}
              data-testid={`value-card-${i}`}
              className="group p-7 lg:p-8 border-r border-b border-[var(--sb-line)] transition-colors hover:bg-[var(--sb-blue-wash)]"
            >
              <v.icon
                size={22}
                className="text-[var(--sb-blue)] mb-8"
                strokeWidth={1.5}
              />
              <div className="eyebrow mb-3">0{i + 1}</div>
              <h3 className="font-serif-display text-[26px] lg:text-[30px] text-[var(--sb-ink)] leading-tight mb-3">
                {v.title}
              </h3>
              <p className="text-[14.5px] leading-[1.7] text-[var(--sb-ink-muted)]">
                {v.text}
              </p>
            </div>
          ))}
        </div>

        {/* Feature banner */}
        <div className="mt-16 grid lg:grid-cols-2 gap-0 items-stretch bg-white border border-[var(--sb-line)]">
          <div className="p-10 sm:p-14 lg:p-16 flex flex-col justify-center">
            <span className="eyebrow">Built for modern life</span>
            <h3
              data-testid="modern-life-headline"
              className="mt-4 font-serif-display text-[34px] sm:text-[44px] leading-[1.08] text-[var(--sb-ink)]"
            >
              Time matters. <br />
              <span className="italic text-[var(--sb-blue)]">We give it back.</span>
            </h3>
            <p className="mt-6 text-[16px] leading-[1.7] text-[var(--sb-ink-muted)] max-w-md">
              Two minutes of brushing twice a day may seem small — but over a year
              that adds up to more than 24 hours. An entire day of your life. Sonic
              Brush® uses precision vibration and a simple one-button system to
              deliver a complete brushing cycle, fast and reliably.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 max-w-sm">
              <div>
                <div className="font-serif-display text-[40px] text-[var(--sb-blue)] leading-none">
                  24h
                </div>
                <div className="mt-2 text-[12px] tracking-[0.12em] uppercase text-[var(--sb-ink-muted)]">
                  Saved per year
                </div>
              </div>
              <div>
                <div className="font-serif-display text-[40px] text-[var(--sb-blue)] leading-none">
                  1 btn
                </div>
                <div className="mt-2 text-[12px] tracking-[0.12em] uppercase text-[var(--sb-ink-muted)]">
                  Full-mouth clean
                </div>
              </div>
            </div>
          </div>
          <div className="relative min-h-[360px] lg:min-h-[560px] bg-[var(--sb-blue-wash)]">
            <img
              data-testid="modern-life-image"
              src={assets.product.allColors}
              alt="Sonic Brush in four colors — designed for every modern life"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
