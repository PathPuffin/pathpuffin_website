/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import Footer from "./Footer";

const LOGO_URL = "/puffin_logo_highres.png";
const HERO_IMAGE_URL = "/compass_background.png";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setVisible(current < lastScrollY.current || current < 60);
      setScrolled(current > window.innerHeight * 0.85);
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 border-b transition-colors duration-500 ${
          scrolled || menuOpen
            ? "glass-nav border-outline-variant/10"
            : "bg-transparent border-transparent"
        }`}
        animate={{ y: visible ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Pathpuffin Logo" className="w-12 h-12 object-contain" fetchPriority="high" width={48} height={48} />
            <span className={`text-lg font-semibold font-serif tracking-tight transition-colors duration-500 ${scrolled || menuOpen ? "text-primary" : "text-white"}`}>
              Pathpuffin
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              to="/blog"
              className={`font-medium text-xs uppercase tracking-widest transition-colors duration-500 ${scrolled ? "text-secondary hover:text-primary" : "text-white/70 hover:text-white"}`}
            >
              Blog
            </Link>
            <button
              onClick={() => scrollTo("contact")}
              className={`font-medium text-xs uppercase tracking-widest transition-colors duration-500 ${scrolled ? "text-secondary hover:text-primary" : "text-white/70 hover:text-white"}`}
            >
              Careers
            </button>
          </div>

          {/* Right side: Connect + burger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className={`px-6 py-2.5 rounded-full font-medium text-xs uppercase tracking-widest transition-all duration-500 ${
                scrolled || menuOpen
                  ? "bg-primary text-on-primary hover:bg-primary/80"
                  : "bg-white text-primary hover:bg-white/90"
              }`}
            >
              Connect
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`md:hidden p-2 transition-colors duration-300 ${scrolled || menuOpen ? "text-primary" : "text-white"}`}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <motion.div
        className="fixed inset-0 z-40 bg-primary md:hidden flex flex-col px-8 pt-28 pb-12"
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none" }}
        transition={{ duration: 0.25 }}
      >
        <nav className="flex flex-col gap-2">
          {[
            { label: "Blog", to: "/blog" },
            { label: "Careers", to: null },
            { label: "Contact", to: "/contact" },
          ].map(({ label, to }) =>
            to ? (
              <Link
                key={label}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-4xl font-light text-white/80 hover:text-white py-3 border-b border-white/10 transition-colors"
              >
                {label}
              </Link>
            ) : (
              <button
                key={label}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-4xl font-light text-white/80 hover:text-white py-3 border-b border-white/10 transition-colors text-left"
              >
                {label}
              </button>
            )
          )}
        </nav>
      </motion.div>
    </>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Full-bleed background image */}
      <img
        src={HERO_IMAGE_URL}
        alt="Pathpuffin Compass"
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
        width={1440}
        height={900}
      />

      {/* Content: title top, buttons bottom */}
      <motion.div
        className="relative z-10 flex flex-col min-h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        {/* Top — title + subtitle + mobile-only button */}
        <div className="text-center px-8 pt-20 md:pt-24 pb-0">
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-light leading-[1.05] tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Engineering <span className="italic">with Soul</span>
          </motion.h1>

          {/* Subtitle — desktop only */}
          <motion.p
            className="hidden sm:block mt-5 text-base md:text-lg font-light text-white/65 max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            We create digital paths that feel as natural as physical ones. Technical mastery meeting the warmth of human intent.
          </motion.p>

          {/* Button — mobile only, sits between title and illustration */}
          <motion.div
            className="sm:hidden mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-3.5 rounded-full font-medium text-sm uppercase tracking-widest hover:bg-white/90 transition-all duration-300 inline-flex items-center gap-2 group"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Spacer — illustration lives in the image */}
        <div className="flex-1" />

        {/* Bottom — desktop only: both buttons */}
        <motion.div
          className="hidden sm:block text-center px-8 pb-6 md:pb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
        >
          <div className="flex items-center justify-center gap-6">
            <Link
              to="/contact"
              className="bg-white text-primary px-8 py-3.5 rounded-full font-medium text-sm uppercase tracking-widest hover:bg-white/90 transition-all duration-300 flex items-center gap-2 group"
            >
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button
              onClick={() => scrollTo("process")}
              className="text-white/70 text-sm font-medium hover:text-white transition-colors flex items-center gap-2 group"
            >
              Our Practice
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
};

const Philosophy = () => {
  return (
    <section className="py-40 bg-primary text-on-primary relative overflow-hidden">
      <div className="absolute top-0 left-0 text-on-primary/5 font-serif text-[20rem] leading-none select-none">"</div>
      <div className="relative max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <blockquote className="font-serif text-3xl md:text-5xl italic leading-snug text-on-primary/90">
            "The most sophisticated engineering is that which disappears, leaving only the experience of effortless utility and quiet beauty."
          </blockquote>
          <p className="mt-8 text-xs uppercase tracking-[0.3em] text-on-primary/40">— The Pathpuffin Principle</p>
        </motion.div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: "01", title: "Theory", desc: "We begin with the abstract — the soul of the intent. Every great build starts with a deeply held belief about what the world should feel like." },
    { num: "02", title: "Craft", desc: "Technical mastery brings the theory into physical form. We obsess over the details others overlook, because the whole is felt through its smallest parts." },
    { num: "03", title: "Soul", desc: "The final artifact must breathe with human warmth. Code alone is not enough — it must carry the energy of the people who made it." },
  ];

  return (
    <section id="process" className="py-40">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4 block">Our Method</span>
          <h2 className="font-serif text-5xl md:text-6xl leading-tight text-primary">
            The path from <span className="italic">thought</span> to form.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/15">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-background p-12 group hover:bg-surface-container-low transition-colors duration-300"
            >
              <span className="font-serif text-5xl italic text-outline-variant/40 leading-none block mb-8">{step.num}</span>
              <h3 className="font-serif text-2xl text-primary mb-4">{step.title}</h3>
              <p className="text-secondary font-light leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BottomCTA = () => (
  <section className="relative overflow-hidden">
    {/* Lighthouse image — fills the section */}
    <img
      src="/puffins_lighthouse.png"
      alt="Puffins at the lighthouse"
      className="w-full h-auto block"
      loading="lazy"
      width={1440}
      height={600}
    />

    {/* Text + button overlaid at the top of the image */}
    <motion.div
      className="absolute top-0 left-0 right-0 text-center px-8 pt-10 md:pt-14"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-serif text-4xl md:text-6xl font-light text-white leading-tight mb-6">
        Ready to build something <span className="italic">meaningful?</span>
      </h2>
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-full font-medium text-sm uppercase tracking-widest hover:bg-white/90 transition-all duration-300 group"
      >
        Contact
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  </section>
);



export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Process />
        <Philosophy />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
}
