// Editorial wordmark-style press bar (no external imagery).
// Real publications that have featured Sonic Brush.

const pressItems = [
  { name: "FORBES", href: "https://www.forbes.com/sites/bernardmarr/2023/01/10/the-11-best-and-most-innovative-new-gadgets-and-devices-in-2023/", style: "font-serif-display italic" },
  { name: "BUSINESS INSIDER", href: "https://markets.businessinsider.com/news/stocks/the-future-of-brushing-is-here-meet-sonic-brush-v5-1033508803", style: "font-sans-display tracking-tight" },
  { name: "DENTALTOWN", href: "https://www.dentaltown.com/blog/post/19387/sonic-brush-review-is-it-worth-the-hype", style: "font-sans-display tracking-[0.05em]" },
  { name: "STARKVILLE DAILY", href: "https://business.starkvilledailynews.com/starkvilledailynews/markets/article/getnews-2023-9-15-introducing-the-worlds-first-fully-automatic-toothbrush-sonic-brush/", style: "font-serif-display" },
  { name: "WICZ NEWS", href: "https://www.wicz.com/story/52484551/story?S=52484551", style: "font-sans-display tracking-[0.08em]" },
  { name: "GERMAN DENTAL ASSOC.", href: "#", style: "font-serif-display italic" },
];

export const PressBar = () => {
  return (
    <section
      data-testid="press-bar"
      className="bg-white border-y border-[var(--sb-line)] py-10 sm:py-12"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px flex-1 max-w-[80px] bg-[var(--sb-line)]" />
          <span className="eyebrow">As featured in</span>
          <span className="h-px flex-1 max-w-[80px] bg-[var(--sb-line)]" />
        </div>
        <div className="mt-7 flex flex-wrap justify-center gap-x-8 gap-y-4 sm:gap-x-12">
          {pressItems.map((item, idx) => (
            <a
              key={`${item.name}-${idx}`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`press-logo-${idx}`}
              className={`text-[var(--sb-ink-muted)] hover:text-[var(--sb-blue)] transition-colors text-[14px] sm:text-[16px] uppercase ${item.style}`}
              aria-label={item.name}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressBar;
