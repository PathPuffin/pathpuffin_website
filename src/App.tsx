/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import Footer from "./Footer";

const LOGO_URL = "/puffin_logo_highres.png";
const HERO_IMAGE_URL = "/compass_background.png";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      setVisible(current < lastScrollY.current || current < 60);
      lastScrollY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/10"
      animate={{ y: visible ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <Link to="/" className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Pathpuffin Logo" className="w-12 h-12 object-contain" fetchPriority="high" width={48} height={48} />
          <span className="text-lg font-semibold font-serif tracking-tight text-primary">Pathpuffin</span>
        </Link>

        <div className="hidden md:flex items-center space-x-10">
          <Link
            to="/blog"
            className="text-secondary hover:text-primary font-medium text-xs uppercase tracking-widest transition-colors duration-300"
          >
            Blog
          </Link>
          <button
            onClick={() => scrollTo("contact")}
            className="text-secondary hover:text-primary font-medium text-xs uppercase tracking-widest transition-colors duration-300"
          >
            Careers
          </button>
        </div>

        <Link
          to="/contact"
          className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-primary/80 transition-all duration-300"
        >
          Connect
        </Link>
      </div>
    </motion.nav>
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
        {/* Top — title + subtitle */}
        <div className="text-center px-8 pt-32 pb-0">
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-light leading-[1.05] tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
          >
            Engineering <span className="italic">with Soul</span>
          </motion.h1>

          <motion.p
            className="mt-5 text-base md:text-lg font-light text-white/65 max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            We create digital paths that feel as natural as physical ones. Technical mastery meeting the warmth of human intent.
          </motion.p>
        </div>

        {/* Spacer — illustration lives in the image */}
        <div className="flex-1" />

        {/* Bottom — buttons */}
        <motion.div
          className="text-center px-8 pb-28"
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
              className="text-white/60 text-sm font-medium hover:text-white transition-colors flex items-center gap-2 group"
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
  <section className="py-40 bg-surface-container-low text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="font-serif text-5xl md:text-6xl font-light text-primary leading-tight mb-6">
        Ready to build something <br /><span className="italic">meaningful?</span>
      </h2>
      <p className="text-secondary font-light text-lg mb-10 max-w-md mx-auto leading-relaxed">
        Tell us about your project. We'll get back to you within 24 hours.
      </p>
      <Link
        to="/contact"
        className="inline-flex items-center gap-2 bg-primary text-on-primary px-10 py-4 rounded-full font-medium text-sm uppercase tracking-widest hover:bg-primary/80 transition-all duration-300 group"
      >
        Get in Touch
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
        <Philosophy />
        <Process />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
}
