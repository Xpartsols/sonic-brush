import { Instagram, Facebook, Youtube } from "lucide-react";

const columns = [
  {
    title: "Shop",
    links: [
      { label: "Adults", href: "https://sonic-brush.net/products/sonic-brush" },
      { label: "Kids", href: "https://sonic-brush.net/products/sonic-brush%C2%AE-kids" },
      { label: "Mouthpiece", href: "https://sonic-brush.net/products/sonic-brush-head" },
      { label: "Disinfection Box", href: "https://sonic-brush.net/products/disinfection-box-for-sonic-brush" },
      { label: "Foam Toothpaste", href: "https://sonic-brush.net/products/foam-toothpaste" },
    ],
  },
  {
    title: "Bundles",
    links: [
      { label: "Essentials Bundle", href: "https://sonic-brush.net/products/essentials-bundle" },
      { label: "Perfect Pair Bundle", href: "https://sonic-brush.net/products/perfect-pair-bundle" },
      { label: "Family Smile Bundle", href: "https://sonic-brush.net/products/family-smile-bundle" },
      { label: "Ultimate Gift Bundle", href: "https://sonic-brush.net/products/ultimate-gift-bundle" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact us", href: "https://sonic-brush.net/pages/contact-us" },
      { label: "Customer Reviews", href: "https://sonic-brush.net/pages/sonic-brush-reviews" },
      { label: "FAQ", href: "https://sonic-brush.net/pages/faq" },
      { label: "Order Tracking", href: "https://sonic-brush.net/apps/parcelpanel" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer
      data-testid="site-footer"
      className="bg-white border-t border-[var(--sb-line)] text-[var(--sb-ink)]"
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a
              href="/"
              className="inline-flex items-center"
            >
              <img
                src="/assets/logo/sonicbrush-logo-trans.png"
                alt="Sonic Brush"
                className="h-10 w-auto"
              />
            </a>
            <p className="mt-6 text-[15px] leading-[1.7] text-[var(--sb-ink-muted)] max-w-sm">
              The world's first fully automatic sonic toothbrush. Designed for
              modern life, trusted by dentists, loved by 100,000+ users worldwide.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                data-testid="footer-instagram"
                href="https://www.instagram.com/sonic.brush_official"
                aria-label="Sonic Brush on Instagram"
                className="p-2 border border-[var(--sb-line)] hover:border-[var(--sb-blue)] hover:text-[var(--sb-blue)] transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                data-testid="footer-facebook"
                href="https://www.facebook.com/sonicbrushcompany"
                aria-label="Sonic Brush on Facebook"
                className="p-2 border border-[var(--sb-line)] hover:border-[var(--sb-blue)] hover:text-[var(--sb-blue)] transition-colors"
              >
                <Facebook size={16} />
              </a>
              <a
                data-testid="footer-youtube"
                href="https://www.youtube.com/@sonic-brush"
                aria-label="Sonic Brush on YouTube"
                className="p-2 border border-[var(--sb-line)] hover:border-[var(--sb-blue)] hover:text-[var(--sb-blue)] transition-colors"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="eyebrow mb-5">{col.title}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                        className="text-[14px] text-[var(--sb-ink)] hover:text-[var(--sb-blue)] transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="hairline mt-16" />

        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[12px] tracking-[0.08em] uppercase text-[var(--sb-ink-muted)]">
          <div>© {new Date().getFullYear()} Sonic Brush®. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--sb-blue)]">Privacy</a>
            <a href="#" className="hover:text-[var(--sb-blue)]">Terms</a>
            <a href="#" className="hover:text-[var(--sb-blue)]">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
