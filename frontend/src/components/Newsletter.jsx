import { useState } from "react";
import axios from "axios";
import { ArrowRight, Loader2 } from "lucide-react";
import { toast } from "sonner";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(`${API}/newsletter`, {
        email: email.trim().toLowerCase(),
        source: "about_us_page",
      });
      if (res.data?.success) {
        setDone(true);
        toast.success(res.data.message || "Subscribed.");
        setEmail("");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (err) {
      const msg =
        err?.response?.data?.detail?.[0]?.msg ||
        err?.response?.data?.detail ||
        "Could not subscribe. Please try again.";
      toast.error(typeof msg === "string" ? msg : "Could not subscribe.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      data-testid="newsletter-section"
      className="bg-[var(--sb-blue-wash)] py-20 sm:py-24"
    >
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <span className="eyebrow">08 — Join us</span>
            <h2
              data-testid="newsletter-headline"
              className="mt-4 font-serif-display text-[38px] sm:text-[52px] lg:text-[64px] leading-[1.05] text-[var(--sb-ink)]"
            >
              Welcome to the <br />
              <span className="italic text-[var(--sb-blue)]">future of brushing.</span>
            </h2>
            <p className="mt-6 text-[16px] sm:text-[17px] leading-[1.7] text-[var(--sb-ink-muted)] max-w-xl">
              Be the first to hear about new generations of Sonic Brush®, exclusive
              bundles, and 40% launch offers. No spam — just the stuff that matters.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form
              onSubmit={onSubmit}
              data-testid="newsletter-form"
              className="bg-white p-6 sm:p-8 border border-[var(--sb-line)]"
              noValidate
            >
              <label
                htmlFor="newsletter-email"
                className="eyebrow text-[var(--sb-blue)] block mb-4"
              >
                Subscribe — Get 40% off
              </label>

              {!done ? (
                <>
                  <div className="flex flex-col sm:flex-row items-stretch gap-3">
                    <input
                      id="newsletter-email"
                      data-testid="newsletter-email-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      disabled={loading}
                      className="flex-1 bg-transparent border-b border-[var(--sb-ink)] text-[var(--sb-ink)] text-[16px] py-3 px-1 focus:outline-none focus:border-[var(--sb-blue)] placeholder:text-[var(--sb-ink-muted)]/60"
                      aria-required="true"
                    />
                    <button
                      type="submit"
                      data-testid="newsletter-submit-btn"
                      disabled={loading}
                      className="btn-sb-primary disabled:opacity-60"
                    >
                      {loading ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          Joining
                        </>
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight size={16} />
                        </>
                      )}
                    </button>
                  </div>
                  <p className="mt-4 text-[12px] text-[var(--sb-ink-muted)] leading-relaxed">
                    By subscribing you agree to our privacy policy. Unsubscribe anytime.
                  </p>
                </>
              ) : (
                <div
                  data-testid="newsletter-success"
                  className="py-6 text-center"
                >
                  <div className="font-serif-display text-[28px] text-[var(--sb-blue)] italic">
                    You're in.
                  </div>
                  <p className="mt-3 text-[14px] text-[var(--sb-ink-muted)]">
                    Check your inbox for a welcome message and your 40% off code.
                  </p>
                </div>
              )}

              <div className="hairline my-6" />

              <a
                href="https://sonic-brush.net/collections/sonic-brush-products"
                data-testid="newsletter-shop-cta"
                className="btn-sb-outline w-full"
              >
                Shop Sonic Brush®
                <ArrowRight size={16} />
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
