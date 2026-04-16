import { useState, useEffect, useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Menu, X } from "lucide-react";
import { posts } from "./posts";
import Footer from "./Footer";

const LOGO_URL = "/puffin_logo_highres.webp";

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
            <Link to="/blog" className="text-primary font-medium text-xs uppercase tracking-widest border-b border-primary pb-0.5">
              Blog
            </Link>
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
          {[{ label: "Blog", to: "/blog" }, { label: "Contact", to: "/contact" }].map(({ label, to }) => (
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

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const paragraphs = post.content.split("\n\n");

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <Navbar />

      <main className="max-w-3xl mx-auto px-8 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Link to="/blog" className="inline-flex items-center gap-2 text-secondary text-sm hover:text-primary transition-colors mb-10">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-medium uppercase tracking-widest text-secondary border border-outline-variant/40 rounded-full px-3 py-1">
              {post.category}
            </span>
            <span className="text-xs text-secondary/60 uppercase tracking-widest">{post.date} · {post.readTime}</span>
          </div>

          <h1 className="font-serif text-5xl md:text-6xl font-light leading-tight text-primary mb-8">
            {post.title}
          </h1>

          <p className="text-xl font-light text-secondary leading-relaxed mb-12 border-b border-outline-variant/20 pb-12">
            {post.excerpt}
          </p>

          <div className="prose-pathpuffin">
            {paragraphs.map((para, i) => {
              if (para.startsWith("## ")) {
                return (
                  <h2 key={i} className="font-serif text-2xl text-primary mt-12 mb-4 font-light">
                    {para.replace("## ", "")}
                  </h2>
                );
              }
              return (
                <p key={i} className="text-on-surface font-light leading-[1.85] mb-6 text-[1.05rem]"
                  dangerouslySetInnerHTML={{ __html: para.replace(/\*(.*?)\*/g, "<em>$1</em>") }}
                />
              );
            })}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
