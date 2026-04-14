/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const LOGO_URL = "/pathpuffin.png";
const HERO_IMAGE_URL = "/pathpuffin3d.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/10">
      <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-8">
          <img 
            src={LOGO_URL} 
            alt="Pathpuffin Logo" 
            className="w-48 h-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <span className="text-5xl font-bold font-serif tracking-tight text-primary">Pathpuffin</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-12">
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

        <button className="bg-primary text-on-primary px-8 py-3 rounded-md font-medium text-xs uppercase tracking-widest hover:opacity-90 transition-all duration-300 shadow-ambient">
          Connect
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="pt-48 pb-32 max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-8"
        >
          <h1 className="text-7xl md:text-9xl font-serif font-light leading-[1] tracking-tight text-primary">
            Engineering <br />
            <span className="italic">with Soul.</span>
          </h1>
          <p className="mt-12 text-xl md:text-2xl font-light text-secondary max-w-xl leading-relaxed">
            We create digital paths that feel as natural as physical ones. Technical mastery meeting the warmth of human intent.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-4 flex justify-end"
        >
          <div className="relative w-full max-w-[320px] rounded-xl overflow-hidden shadow-ambient">
            <img 
              src={HERO_IMAGE_URL} 
              alt="Puffin Engineering Symbol" 
              className="w-full h-auto block object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  return (
    <section className="py-48 bg-surface-container-low border-y border-outline-variant/10">
      <div className="max-w-4xl mx-auto px-8 text-center">
        <motion.blockquote 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-serif text-4xl md:text-6xl italic leading-tight text-primary"
        >
          "The most sophisticated engineering is that which disappears, leaving only the experience of effortless utility and quiet beauty."
        </motion.blockquote>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-48 max-w-7xl mx-auto px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-serif text-5xl md:text-7xl mb-16 leading-tight text-primary">
          Begin your <br /> <span className="italic">meaningful</span> build.
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <button className="bg-primary text-on-primary px-12 py-5 rounded-md font-medium text-sm uppercase tracking-widest hover:opacity-90 transition-all duration-300 shadow-ambient flex items-center gap-2 group">
            Start a Conversation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="text-secondary font-medium text-sm uppercase tracking-widest border-b border-outline-variant/30 pb-1 hover:border-primary hover:text-primary transition-all">
            View our Practice
          </button>
        </div>
      </motion.div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="w-full py-24 bg-primary-container text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          {/* Newsletter Section */}
          <div className="lg:col-span-6">
            <h2 className="font-serif text-4xl md:text-5xl mb-12 leading-tight">
              Join our newsletter for <br /> the latest product updates
            </h2>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="text" 
                placeholder="Full name" 
                className="bg-transparent border-b border-white/30 py-2 px-1 focus:outline-none focus:border-white transition-colors flex-1"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-transparent border-b border-white/30 py-2 px-1 focus:outline-none focus:border-white transition-colors flex-1"
              />
              <button className="bg-white text-primary-container px-8 py-2 rounded-md font-medium transition-transform hover:scale-105 active:scale-95">
                Subscribe
              </button>
            </form>
          </div>

          {/* Links Section */}
          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest opacity-60">Ask AI</span>
              <div className="flex gap-2 opacity-80">
                {/* Placeholder for AI icons */}
                <div className="w-5 h-5 rounded-full border border-white/30" />
                <div className="w-5 h-5 rounded-full border border-white/30" />
                <div className="w-5 h-5 rounded-full border border-white/30" />
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest opacity-60">Contact</span>
              <a href="mailto:hello@pathpuffin.ai" className="text-sm hover:underline opacity-80">hello@pathpuffin.ai</a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest opacity-60">Follow</span>
              <a href="#" className="text-sm hover:underline opacity-80">LinkedIn</a>
              <a href="#" className="text-sm hover:underline opacity-80">X</a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest opacity-60">Resources</span>
              <a href="#" className="text-sm hover:underline opacity-80">Blog</a>
              <a href="#" className="text-sm hover:underline opacity-80">Careers</a>
            </div>

            <div className="flex flex-col gap-4">
              <span className="text-xs font-semibold uppercase tracking-widest opacity-60">Legal</span>
              <a href="#" className="text-sm hover:underline opacity-80">Privacy</a>
              <a href="#" className="text-sm hover:underline opacity-80">Cookies</a>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10">
          <div className="flex items-center gap-3">
            <img 
              src={LOGO_URL} 
              alt="Pathpuffin Logo" 
              className="w-12 h-auto invert brightness-0"
              referrerPolicy="no-referrer"
            />
            <span className="font-serif italic text-2xl">Pathpuffin</span>
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-40">
            © 2026 Pathpuffin, Inc.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FeaturedArtifacts = () => {
  const artifacts = [
    { title: "The Kinetic Compass", category: "Physical Computing", size: "lg" },
    { title: "Neural Topography", category: "Generative Art", size: "sm" },
    { title: "Tactile Interface v2", category: "Industrial Design", size: "sm" },
    { title: "Atmospheric Loom", category: "Installation", size: "md" },
  ];

  return (
    <section className="py-48 max-w-7xl mx-auto px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <div className="max-w-xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-4 block">Selected Works</span>
          <h2 className="font-serif text-5xl md:text-7xl leading-tight text-primary">
            Artifacts of <br /> <span className="italic">intentional</span> design.
          </h2>
        </div>
        <p className="text-secondary max-w-xs font-light leading-relaxed">
          Each project is a study in the intersection of technical precision and human warmth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {artifacts.map((art, i) => (
          <motion.div
            key={art.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`
              relative group cursor-pointer overflow-hidden rounded-xl bg-surface-container-low
              ${art.size === "lg" ? "md:col-span-8 aspect-[16/9]" : ""}
              ${art.size === "md" ? "md:col-span-7 aspect-square" : ""}
              ${art.size === "sm" ? "md:col-span-4 aspect-[4/5]" : ""}
              ${i === 2 ? "md:col-span-5" : ""}
            `}
          >
            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <span className="text-[10px] uppercase tracking-widest text-secondary mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {art.category}
              </span>
              <h3 className="font-serif text-2xl text-primary translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {art.title}
              </h3>
            </div>
            {/* Placeholder for image */}
            <div className="w-full h-full flex items-center justify-center text-outline-variant/20 font-serif italic text-4xl">
              Artifact {i + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { num: "01", title: "Theory", desc: "We begin with the abstract—the soul of the intent." },
    { num: "02", title: "Craft", desc: "Technical mastery brings the theory into physical form." },
    { num: "03", title: "Soul", desc: "The final artifact must breathe with human warmth." },
  ];

  return (
    <section className="py-48 bg-surface-container-highest/10">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-24">
        <div className="lg:col-span-4">
          <div className="sticky top-48">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary mb-6 block">Our Method</span>
            <h2 className="font-serif text-5xl leading-tight text-primary mb-8">
              The path from <br /> <span className="italic">thought</span> to form.
            </h2>
            <div className="h-px w-24 bg-primary/20" />
          </div>
        </div>
        
        <div className="lg:col-span-8 flex flex-col gap-32">
          {steps.map((step) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex gap-12 items-start"
            >
              <span className="font-serif text-6xl italic text-outline-variant/30 leading-none">{step.num}</span>
              <div className="max-w-md">
                <h3 className="font-serif text-3xl text-primary mb-4">{step.title}</h3>
                <p className="text-secondary font-light text-lg leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary-container/20 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <FeaturedArtifacts />
        <Philosophy />
        <Process />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
