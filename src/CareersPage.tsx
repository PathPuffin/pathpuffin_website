import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import Footer from "./Footer";

const LOGO_URL = "/puffin_logo_highres.png";
const CAREERS_EMAIL = "nest@pathpuffin.com";

const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
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
    <>
      <motion.nav
        className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/10"
        animate={{ y: visible ? 0 : "-100%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
          <Link to="/" className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Pathpuffin Logo" className="w-12 h-12 object-contain" />
            <span className="text-lg font-semibold font-serif tracking-tight text-primary">Pathpuffin</span>
          </Link>
          <div className="hidden md:flex items-center space-x-10">
            <Link to="/blog" className="text-secondary hover:text-primary font-medium text-xs uppercase tracking-widest transition-colors">Blog</Link>
            <Link to="/careers" className="text-primary font-medium text-xs uppercase tracking-widest border-b border-primary pb-0.5">Careers</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-primary/80 transition-all duration-300"
            >
              Connect
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 text-primary"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <motion.div
        className="fixed inset-0 z-40 bg-primary md:hidden flex flex-col px-8 pt-28 pb-12"
        initial={false}
        animate={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none" }}
        transition={{ duration: 0.25 }}
      >
        <nav className="flex flex-col gap-2">
          {[{ label: "Blog", to: "/blog" }, { label: "Careers", to: "/careers" }, { label: "Contact", to: "/contact" }].map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-4xl font-light text-white/80 hover:text-white py-3 border-b border-white/10 transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

const roles = [
  {
    title: "UI/UX Puffin",
    type: "Full-time",
    desc: "We're looking for a designer who thinks in systems but feels in details. You'll shape how people experience Pathpuffin — every screen, every interaction, every moment of delight. You care deeply about craft, know that whitespace is not wasted space, and believe that great design is invisible.",
    skills: ["Figma", "Design systems", "Prototyping", "User research"],
  },
  {
    title: "Marketing Puffin",
    type: "Full-time",
    desc: "We need someone who can translate what we build into words that move people. You'll own how Pathpuffin shows up in the world — from brand voice to campaigns to the stories we tell. You write with clarity, think strategically, and understand that the best marketing doesn't feel like marketing.",
    skills: ["Brand strategy", "Content", "Growth", "Copywriting"],
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="max-w-5xl mx-auto px-8 pt-40 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-secondary mb-4 block">Join the flock</span>
          <h1 className="font-serif text-5xl md:text-7xl font-light text-primary leading-tight mb-6">
            Work at <span className="italic">Pathpuffin</span>
          </h1>
          <p className="text-secondary font-light text-lg max-w-xl leading-relaxed mb-20">
            We're a small team that builds with intention. If you care about craft, love hard problems, and want your work to matter — you'll fit right in.
          </p>

          <div className="flex flex-col gap-6">
            {roles.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-outline-variant/30 rounded-2xl p-8 md:p-12 hover:border-outline-variant/60 transition-colors duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-widest text-secondary border border-outline-variant/40 rounded-full px-3 py-1 mb-3 inline-block">
                      {role.type}
                    </span>
                    <h2 className="font-serif text-3xl font-light text-primary">{role.title}</h2>
                  </div>
                  <a
                    href={`mailto:${CAREERS_EMAIL}?subject=Application — ${role.title}`}
                    className="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-primary/80 transition-all duration-300 group shrink-0 self-start"
                  >
                    Apply
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                <p className="text-secondary font-light leading-relaxed mb-6">{role.desc}</p>

                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs uppercase tracking-widest text-secondary bg-surface-container-low px-3 py-1.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 pt-12 border-t border-outline-variant/20 text-center">
            <p className="text-secondary font-light mb-4">Don't see your role? We're always open to hearing from exceptional people.</p>
            <a
              href={`mailto:${CAREERS_EMAIL}`}
              className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:opacity-70 transition-opacity"
            >
              {CAREERS_EMAIL}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
