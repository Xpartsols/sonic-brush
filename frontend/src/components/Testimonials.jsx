import { Star, Users, Award, Shield, Sparkles } from "lucide-react";
import assets from "@/lib/assets";

const trustBadges = [
  { icon: Users, label: "100K+ happy users" },
  { icon: Award, label: "Forbes featured" },
  { icon: Shield, label: "Dentist approved" },
  { icon: Sparkles, label: "4.5★ on Trustpilot" },
];

export const Testimonials = () => {
  return (
    <section
      data-testid="testimonials-section"
      className="bg-white py-20 sm:py-24"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Trust badges row */}
        <div
          data-testid="trust-badges"
          className="border-y border-[var(--sb-line)] py-8 grid grid-cols-2 md:grid-cols-4 gap-6 mb-14"
        >
          {trustBadges.map((b, i) => (
            <div
              key={b.label}
              data-testid={`trust-badge-${i}`}
              className="flex items-center justify-center gap-3 text-center"
            >
              <b.icon
                size={22}
                strokeWidth={1.5}
                className="text-[var(--sb-blue)] flex-shrink-0"
              />
              <span className="text-[13px] sm:text-[14px] font-medium tracking-wide text-[var(--sb-ink)]">
                {b.label}
              </span>
            </div>
          ))}
        </div>

        {/* Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7">
            <span className="eyebrow">07 — The People</span>
            <h2
              data-testid="testimonials-headline"
              className="mt-4 font-serif-display text-[38px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-[var(--sb-ink)]"
            >
              Loved by <span className="italic text-[var(--sb-blue)]">100,000+</span> smiles.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <div className="inline-flex items-center gap-2 justify-end">
              {[0, 1, 2, 3, 4].map((s) => (
                <Star
                  key={s}
                  size={18}
                  fill="#0344a4"
                  strokeWidth={0}
                  className="text-[var(--sb-blue)]"
                />
              ))}
              <span className="ml-2 text-[14px] font-medium text-[var(--sb-ink)]">
                4.5 / 5 · Rated Excellent on Trustpilot
              </span>
            </div>
          </div>
        </div>

        {/* Grid of reviews */}
        <div
          data-testid="reviews-grid"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          {assets.reviews.map((r, i) => (
            <figure
              key={r.name}
              data-testid={`review-card-${i}`}
              className="group flex flex-col bg-white border border-[var(--sb-line)] transition-all hover:border-[var(--sb-blue)]"
            >
              <div className="aspect-[4/5] overflow-hidden bg-[var(--sb-blue-wash)]">
                <img
                  src={r.img}
                  alt={`Review by ${r.name}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-1 mb-3">
                  {Array.from({ length: r.stars }).map((_, s) => (
                    <Star
                      key={s}
                      size={12}
                      fill="#0344a4"
                      strokeWidth={0}
                      className="text-[var(--sb-blue)]"
                    />
                  ))}
                </div>
                <blockquote className="font-serif-display text-[18px] leading-[1.4] text-[var(--sb-ink)] mb-5 flex-1">
                  "{r.text}"
                </blockquote>
                <div className="text-[12px] tracking-[0.12em] uppercase text-[var(--sb-ink-muted)] border-t border-[var(--sb-line)] pt-4">
                  {r.name} · Verified buyer
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
