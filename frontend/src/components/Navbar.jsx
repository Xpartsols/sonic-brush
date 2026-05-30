import { useState } from "react";
import { Menu, X, ShoppingBag, Search, User } from "lucide-react";

const navLinks = [
  { label: "Shop", href: "https://sonic-brush.net/collections/sonic-brush-products" },
  { label: "Bundles", href: "https://sonic-brush.net/collections/bundles" },
  { label: "About", href: "/" },
  { label: "Reviews", href: "https://sonic-brush.net/pages/sonic-brush-reviews" },
  { label: "FAQ", href: "https://sonic-brush.net/pages/faq" },
  { label: "Contact", href: "https://sonic-brush.net/pages/contact-us" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-testid="site-navbar"
      className="sticky top-0 z-50 bg-white border-b border-[var(--sb-line)]"
    >
      {/* Announcement bar */}
      <div
        data-testid="announcement-bar"
        className="bg-[var(--sb-blue)] text-white text-[11px] tracking-[0.22em] uppercase font-medium py-2 text-center"
      >
        Free Shipping Worldwide — Get 40% Off Today
      </div>

      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-[72px]">
          {/* Mobile menu toggle */}
          <button
            data-testid="mobile-menu-toggle"
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 -ml-2 text-[var(--sb-ink)]"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Logo */}
          <a
            data-testid="nav-logo"
            href="/"
            className="flex items-center gap-2 text-[var(--sb-ink)]"
          >
            <img
              src="/assets/logo/sonicbrush-logo-trans.png"
              alt="Sonic Brush"
              className="h-8 sm:h-9 w-auto"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-testid={`nav-link-${link.label.toLowerCase()}`}
                className="text-[13px] font-medium tracking-[0.04em] text-[var(--sb-ink)] hover:text-[var(--sb-blue)] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Utility */}
          <div className="flex items-center gap-3">
            <button
              data-testid="nav-search"
              aria-label="Search"
              className="hidden sm:inline-flex p-2 text-[var(--sb-ink)] hover:text-[var(--sb-blue)] transition-colors"
            >
              <Search size={18} />
            </button>
            <a
              href="https://sonic-brush.net/account"
              data-testid="nav-account"
              aria-label="Account"
              className="hidden sm:inline-flex p-2 text-[var(--sb-ink)] hover:text-[var(--sb-blue)] transition-colors"
            >
              <User size={18} />
            </a>
            <a
              href="https://sonic-brush.net/cart"
              data-testid="nav-cart"
              aria-label="Cart"
              className="relative inline-flex p-2 text-[var(--sb-ink)] hover:text-[var(--sb-blue)] transition-colors"
            >
              <ShoppingBag size={18} />
              <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] bg-[var(--sb-blue)] text-white text-[9px] font-semibold rounded-full flex items-center justify-center px-1">
                0
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          data-testid="mobile-menu"
          className="lg:hidden border-t border-[var(--sb-line)] bg-white"
        >
          <nav className="flex flex-col px-5 py-4 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                data-testid={`mobile-nav-${link.label.toLowerCase()}`}
                className="py-3 text-[15px] font-medium text-[var(--sb-ink)] border-b border-[var(--sb-line)] last:border-b-0"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
