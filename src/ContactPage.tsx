import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Footer from "./Footer";

const LOGO_URL = "/puffin_logo_highres.png";
const CONTACT_EMAIL = "hello@pathpuffin.com";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/10">
    <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
      <Link to="/" className="flex items-center gap-3">
        <img src={LOGO_URL} alt="Pathpuffin Logo" className="w-12 h-12 object-contain" />
        <span className="text-lg font-semibold font-serif tracking-tight text-primary">Pathpuffin</span>
      </Link>
      <div className="hidden md:flex items-center space-x-10">
        <Link to="/blog" className="text-secondary hover:text-primary font-medium text-xs uppercase tracking-widest transition-colors">
          Blog
        </Link>
        <a href="#" className="text-secondary hover:text-primary font-medium text-xs uppercase tracking-widest transition-colors">
          Careers
        </a>
      </div>
      <Link
        to="/contact"
        className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-primary/80 transition-all duration-300"
      >
        Connect
      </Link>
    </div>
  </nav>
);

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Project inquiry from ${form.name}${form.company ? ` (${form.company})` : ""}`;
    const body = `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const inputClass = "w-full border border-outline-variant/40 rounded-lg px-4 py-3 text-sm font-light text-primary placeholder:text-secondary/50 focus:outline-none focus:border-primary/40 transition-colors bg-background";

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="pt-20 min-h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:min-h-[calc(100vh-5rem)]"
          >
            {/* Left panel */}
            <div className="bg-primary text-on-primary p-12 lg:p-20 flex flex-col justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-on-primary/40 mb-6 block">Get in touch</span>
                <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-8">
                  Let's build something <span className="italic">meaningful.</span>
                </h2>
                <p className="text-on-primary/60 font-light leading-relaxed max-w-sm">
                  Tell us about your project. We'll get back to you within 24 hours.
                </p>
              </div>

              <ul className="mt-12 flex flex-col gap-4">
                {[
                  "Response within 24 hours",
                  "No commitment required",
                  "Honest advice, always",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-on-primary/70">
                    <CheckCircle2 className="w-4 h-4 text-on-primary/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right panel */}
            <div className="bg-surface-container-low p-12 lg:p-20 flex items-center">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center w-full"
                >
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4 opacity-60" />
                  <h3 className="font-serif text-2xl text-primary mb-2">Your email client is open</h3>
                  <p className="text-secondary font-light text-sm">Finish sending the message and we'll be in touch shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5">
                  <h3 className="font-serif text-2xl text-primary mb-2">How can we help?</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-widest text-secondary font-medium">Name *</label>
                      <input
                        type="text"
                        placeholder="Jane Smith"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs uppercase tracking-widest text-secondary font-medium">Company</label>
                      <input
                        type="text"
                        placeholder="Acme Corp"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-secondary font-medium">Email *</label>
                    <input
                      type="email"
                      placeholder="jane@acme.com"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-secondary font-medium">Message *</label>
                    <textarea
                      placeholder="Tell us about your project and how we can help..."
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-primary text-on-primary py-4 rounded-lg font-medium text-sm uppercase tracking-widest hover:bg-primary/80 transition-all duration-300 flex items-center justify-center gap-2 group mt-2"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
