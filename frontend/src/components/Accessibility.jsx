import { Check } from "lucide-react";

const groups = [
  "Children who resist brushing",
  "Parents & caregivers helping with daily hygiene",
  "People with autism or ADHD",
  "People with sensory sensitivities",
  "People with physical or neurological challenges",
  "Anyone who values a simpler, more reliable routine",
];

export const Accessibility = () => {
  return (
    <section
      data-testid="accessibility-section"
      className="bg-white py-20 sm:py-24"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <span className="eyebrow">03 — Designed to be accessible</span>
            <h2
              data-testid="accessibility-headline"
              className="mt-4 font-serif-display text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.06] text-[var(--sb-ink)]"
            >
              Oral care, <br />
              <span className="italic text-[var(--sb-blue)]">for every mouth.</span>
            </h2>
            <p className="mt-8 text-[17px] leading-[1.7] text-[var(--sb-ink-muted)] max-w-md">
              Above all, Sonic Brush® was designed to make brushing easier for
              everyone — especially those who struggle with traditional routines.
              By simplifying the process, we make daily oral care manageable,
              consistent, and independent.
            </p>
          </div>

          <div className="lg:col-span-7">
            <ul
              data-testid="accessibility-list"
              className="grid sm:grid-cols-2 gap-x-8 gap-y-5 border-t border-[var(--sb-line)] pt-8"
            >
              {groups.map((g, i) => (
                <li
                  key={g}
                  data-testid={`accessibility-item-${i}`}
                  className="flex items-start gap-4 py-4 border-b border-[var(--sb-line)]"
                >
                  <span className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-[var(--sb-blue)] flex items-center justify-center">
                    <Check size={12} strokeWidth={3} className="text-white" />
                  </span>
                  <span className="text-[15.5px] leading-[1.5] text-[var(--sb-ink)]">
                    {g}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accessibility;
