import { Recycle, Leaf, ShieldCheck, Droplets } from "lucide-react";
import assets from "@/lib/assets";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Food-grade silicone",
    text: "Soft, antibacterial bristles that last longer than traditional nylon — oriented at 45° to simulate the dentist-recommended BASS technique.",
  },
  {
    icon: Recycle,
    title: "Less waste per year",
    text: "One Sonic Brush® mouthpiece replaces dozens of throwaway plastic toothbrushes, reducing what ends up in landfill.",
  },
  {
    icon: Leaf,
    title: "30-use battery",
    text: "An efficient Li-ion battery lasts up to 30 full sessions per charge — fewer charges, less energy, longer life.",
  },
  {
    icon: Droplets,
    title: "Clean, gentle formula",
    text: "Our companion 2-in-1 foam toothpaste is formulated without unnecessary additives, safe for daily use.",
  },
];

export const Sustainability = () => {
  return (
    <section
      data-testid="sustainability-section"
      className="bg-[var(--sb-blue-wash)] py-20 sm:py-24"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          <div className="lg:col-span-5 relative aspect-square max-w-[520px] mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-white border border-[var(--sb-line)]" />
            <img
              data-testid="sustain-product-image"
              src={assets.product.packaged3}
              alt="Sonic Brush full kit — built to last"
              className="relative w-full h-full object-contain p-4"
            />
          </div>

          <div className="lg:col-span-7">
            <span className="eyebrow">06 — Materials & Sustainability</span>
            <h2
              data-testid="sustain-headline"
              className="mt-4 font-serif-display text-[38px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-[var(--sb-ink)]"
            >
              Built to last. <br />
              <span className="italic text-[var(--sb-blue)]">
                Made to matter.
              </span>
            </h2>
            <p className="mt-8 text-[17px] leading-[1.75] text-[var(--sb-ink-muted)] max-w-xl">
              We build products that stay out of the landfill. Premium silicone,
              reusable mouthpieces, and a long-life battery mean one Sonic
              Brush® replaces many years of disposables — without compromise on
              performance.
            </p>
          </div>
        </div>

        <div
          data-testid="sustain-pillars-grid"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border border-[var(--sb-line)] bg-white"
        >
          {pillars.map((p, i) => (
            <div
              key={p.title}
              data-testid={`sustain-pillar-${i}`}
              className="p-8 lg:p-10 border-r border-b border-[var(--sb-line)]"
            >
              <p.icon
                size={22}
                strokeWidth={1.5}
                className="text-[var(--sb-blue)] mb-6"
              />
              <h3 className="font-serif-display text-[24px] leading-tight text-[var(--sb-ink)] mb-3">
                {p.title}
              </h3>
              <p className="text-[14.5px] leading-[1.7] text-[var(--sb-ink-muted)]">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
