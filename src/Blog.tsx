import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { posts } from "./posts";
import Footer from "./Footer";

const LOGO_URL = "/puffin_logo_highres.png";

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
          <img src={LOGO_URL} alt="Pathpuffin Logo" className="w-12 h-12 object-contain" />
          <span className="text-lg font-semibold font-serif tracking-tight text-primary">Pathpuffin</span>
        </Link>
        <div className="hidden md:flex items-center space-x-10">
          <Link to="/blog" className="text-primary font-medium text-xs uppercase tracking-widest border-b border-primary pb-0.5">
            Blog
          </Link>
          <a href="#" className="text-secondary hover:text-primary font-medium text-xs uppercase tracking-widest transition-colors">
            Careers
          </a>
        </div>
        <Link
          to="/"
          className="bg-primary text-on-primary px-6 py-2.5 rounded-full font-medium text-xs uppercase tracking-widest hover:bg-primary/80 transition-all duration-300"
        >
          Connect
        </Link>
      </div>
    </motion.nav>
  );
};

const FeaturedPost = ({ post }: { post: typeof posts[0] }) => (
  <Link to={`/blog/${post.slug}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="group cursor-pointer border border-outline-variant/20 rounded-2xl overflow-hidden hover:border-outline-variant/40 transition-colors duration-300 bg-surface-container-low"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-150">
        <div className="bg-primary p-12 lg:p-16 flex flex-col justify-between">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-on-primary/40">Featured</span>
          <div>
            <span className="inline-block text-xs font-medium uppercase tracking-widest text-on-primary/50 border border-on-primary/20 rounded-full px-3 py-1 mb-6">
              {post.category}
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-light leading-tight text-on-primary mb-4">
              {post.title}
            </h2>
            <p className="text-on-primary/60 font-light leading-relaxed">
              {post.excerpt}
            </p>
          </div>
          <div className="flex items-center justify-between mt-8">
            <span className="text-xs text-on-primary/40 uppercase tracking-widest">{post.date} · {post.readTime}</span>
            <span className="flex items-center gap-2 text-on-primary/70 text-sm font-medium group-hover:text-on-primary transition-colors">
              Read more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </div>
        <div className="bg-surface-container-highest/30 flex items-center justify-center p-12">
          <p className="font-serif text-5xl italic text-outline-variant/30 text-center leading-tight">
            "{post.title.split(" ").slice(0, 3).join(" ")}..."
          </p>
        </div>
      </div>
    </motion.div>
  </Link>
);

const PostCard = ({ post, index }: { post: typeof posts[0]; index: number }) => (
  <Link to={`/blog/${post.slug}`}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer border border-outline-variant/20 rounded-2xl p-8 hover:border-outline-variant/50 hover:bg-surface-container-low transition-all duration-300 flex flex-col justify-between gap-6 h-full"
    >
      <div>
        <div className="flex items-center justify-between mb-5">
          <span className="text-xs font-medium uppercase tracking-widest rounded-full px-3 py-1 bg-surface-container-high text-secondary">
            {post.category}
          </span>
          <span className="text-xs text-secondary uppercase tracking-widest">{post.readTime}</span>
        </div>
        <h3 className="font-serif text-xl text-primary leading-snug mb-3 group-hover:text-primary/70 transition-colors">
          {post.title}
        </h3>
        <p className="text-secondary font-light text-sm leading-relaxed">
          {post.excerpt}
        </p>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-outline-variant/15">
        <span className="text-xs text-secondary/60 uppercase tracking-widest">{post.date}</span>
        <span className="flex items-center gap-1.5 text-xs font-medium text-secondary group-hover:text-primary transition-colors">
          Read <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </motion.div>
  </Link>
);

export default function Blog() {
  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary">
      <Navbar />
      <main className="max-w-7xl mx-auto px-8 pt-36 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <Link to="/" className="inline-flex items-center gap-2 text-secondary text-sm hover:text-primary transition-colors mb-8">
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to home
          </Link>
          <h1 className="font-serif text-6xl md:text-7xl font-light text-primary leading-tight">
            Perspectives
          </h1>
          <p className="mt-4 text-secondary font-light text-lg max-w-md leading-relaxed">
            On engineering, design, and the soul of great software.
          </p>
        </motion.div>

        <div className="mb-12">
          <FeaturedPost post={featured} />
        </div>

        {rest.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <PostCard key={post.slug} post={post} index={i} />
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
