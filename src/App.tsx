/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight, Mail, Linkedin, Twitter } from "lucide-react";

const LOGO_URL = "/puffin_logo_highres.png";
const HERO_IMAGE_URL = "/pathpuffin3d.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img src={LOGO_URL} alt="Pathpuffin Logo" className="w-12 h-12 object-contain" />
          <span className="text-lg font-semibold font-serif tracking-tight text-primary">Pathpuffin</span>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          {["Blog", "Careers"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-secondary hover:text-primary font-medium text-xs uppercase tracking-widest transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-primary/80 transition-all duration-300">
          Connect
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-surface-container-low" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/4 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-8 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-serif font-light leading-[1.05] tracking-tight text-primary">
              Engineering <br />
              <span className="italic">with Soul</span>
            </h1>

            <p className="mt-8 text-lg font-light text-secondary max-w-md leading-relaxed">
              We create digital paths that feel as natural as physical ones. Technical mastery meeting the warmth of human intent.
            </p>

            <div className="mt-12 flex items-center gap-6">
              <button className="bg-primary text-on-primary px-8 py-4 rounded-full font-medium text-sm uppercase tracking-widest hover:bg-primary/80 transition-all duration-300 flex items-center gap-2 group">
                Start a Conversation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="text-secondary text-sm font-medium hover:text-primary transition-colors flex items-center gap-2 group">
                Our Practice
                <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/8 rounded-3xl blur-2xl scale-90 translate-y-4" />
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative rounded-3xl overflow-hidden shadow-2xl max-w-[420px] w-full"
              >
                <img
                  src={HERO_IMAGE_URL}
                  alt="Puffin Engineering Symbol"
                  className="w-full h-auto block"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 pt-8 border-t border-outline-variant/15 grid grid-cols-3 gap-8 max-w-lg"
        >
          {[
            { value: "12+", label: "Projects Shipped" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "3", label: "Core Principles" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-serif text-3xl font-light text-primary">{stat.value}</p>
              <p className="text-xs uppercase tracking-widest text-secondary mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
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
    <section className="py-40">
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

const CTA = () => {
  return (
    <section className="py-40 bg-surface-container-low">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-6 block">Ready?</span>
          <h2 className="font-serif text-5xl md:text-7xl mb-6 leading-tight text-primary">
            Begin your <span className="italic">meaningful</span> build.
          </h2>
          <p className="text-secondary font-light text-lg mb-12 max-w-md mx-auto leading-relaxed">
            Tell us about what you're building. We'll tell you if we're the right people to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-primary text-on-primary px-10 py-4 rounded-full font-medium text-sm uppercase tracking-widest hover:bg-primary/80 transition-all duration-300 flex items-center gap-2 group">
              Start a Conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a href="mailto:hello@pathpuffin.ai" className="text-secondary font-medium text-sm hover:text-primary transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              hello@pathpuffin.ai
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="w-full py-16 bg-primary text-on-primary">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 pb-16 border-b border-white/10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight">
              Stay in the loop on what<br /> we're <span className="italic">building.</span>
            </h2>
            <form className="flex gap-3 max-w-sm" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-white/10 border border-white/20 rounded-full py-2.5 px-5 focus:outline-none focus:border-white/50 transition-colors flex-1 text-sm placeholder:text-white/40"
              />
              <button className="bg-white text-primary px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white/90 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid grid-cols-3 gap-8 lg:justify-items-end">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-1">Company</span>
              <a href="#blog" className="text-sm hover:opacity-100 opacity-70 transition-opacity">Blog</a>
              <a href="#careers" className="text-sm hover:opacity-100 opacity-70 transition-opacity">Careers</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-1">Follow</span>
              <a href="#" className="text-sm hover:opacity-100 opacity-70 transition-opacity flex items-center gap-1.5"><Linkedin className="w-3.5 h-3.5" />LinkedIn</a>
              <a href="#" className="text-sm hover:opacity-100 opacity-70 transition-opacity flex items-center gap-1.5"><Twitter className="w-3.5 h-3.5" />X / Twitter</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-1">Legal</span>
              <a href="#" className="text-sm hover:opacity-100 opacity-70 transition-opacity">Privacy</a>
              <a href="#" className="text-sm hover:opacity-100 opacity-70 transition-opacity">Cookies</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2.5">
            <img src={LOGO_URL} alt="Pathpuffin Logo" className="w-6 h-6 object-contain brightness-0 invert" />
            <span className="font-serif italic text-lg">Pathpuffin</span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-30">© 2026 Pathpuffin, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Philosophy />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
