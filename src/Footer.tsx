import { useState } from "react";
import { Link } from "react-router-dom";
import { LinkedinIcon, XIcon } from "lucide-react";

const LOGO_URL = "/puffin_logo_highres.png";
const CONTACT_EMAIL = "hello@pathpuffin.com";

const PATHPUFFIN_QUERY = encodeURIComponent(
  "I want to understand how Pathpuffin works as an engineering studio. Summarize what Pathpuffin does, their philosophy of engineering with soul, and their core principles. Use information from their website: https://pathpuffin.com/"
);

const AI_QUERY = PATHPUFFIN_QUERY;

const AI_LINKS = [
  {
    name: "ChatGPT",
    href: `https://chatgpt.com/?q=${AI_QUERY}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M12 2a6.5 6.5 0 0 1 6.34 5.05A5 5 0 0 1 21 12a5 5 0 0 1-2.5 4.33A6.5 6.5 0 0 1 12 22a6.5 6.5 0 0 1-6.34-5.05A5 5 0 0 1 3 12a5 5 0 0 1 2.5-4.33A6.5 6.5 0 0 1 12 2z" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    name: "Claude",
    href: `https://claude.ai/new?q=${AI_QUERY}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-4 h-4">
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
        <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
      </svg>
    ),
  },
  {
    name: "Perplexity",
    href: `https://www.perplexity.ai/search?q=${AI_QUERY}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M12 2l2.5 7.5H22l-6.5 4.5 2.5 7.5L12 17l-6 4.5 2.5-7.5L2 9.5h7.5z" />
      </svg>
    ),
  },
  {
    name: "Google",
    href: `https://www.google.com/search?udm=50&q=${AI_QUERY}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <path d="M21 12.5a9 9 0 1 1-9-9c2.39 0 4.68.94 6.36 2.64" />
        <path d="M21 12.5h-9" />
      </svg>
    ),
  },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="w-full py-16 bg-primary text-on-primary">
      <div className="max-w-7xl mx-auto px-8">

        {/* Main row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 pb-12 border-b border-white/10">

          {/* Left — Newsletter */}
          <div>
            <h2 className="font-serif text-2xl md:text-3xl mb-8 leading-snug">
              Join our newsletter for <br />the latest product updates
            </h2>
            {subscribed ? (
              <p className="text-white/60 text-sm">Thanks for subscribing!</p>
            ) : (
              <form className="flex flex-col sm:flex-row gap-3 max-w-sm" onSubmit={handleSubscribe}>
                <input
                  type="text"
                  placeholder="Full name"
                  className="bg-transparent border-b border-white/30 py-2 px-1 focus:outline-none focus:border-white/60 transition-colors text-sm placeholder:text-white/40 sm:w-28"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-transparent border-b border-white/30 py-2 px-1 focus:outline-none focus:border-white/60 transition-colors sm:flex-1 text-sm placeholder:text-white/40"
                />
                <button
                  type="submit"
                  className="bg-white text-primary px-5 py-2 rounded-md font-medium text-sm hover:bg-white/90 transition-colors whitespace-nowrap self-start sm:self-auto"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          {/* Right — Links grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">

            {/* Ask AI */}
            <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
              <span className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-1">Ask AI About Us</span>
              <div className="flex flex-wrap gap-3">
                {AI_LINKS.map((ai) => (
                  <a
                    key={ai.name}
                    href={ai.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={ai.name}
                    className="text-on-primary/40 hover:text-on-primary/80 transition-colors duration-200"
                  >
                    {ai.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-1">Contact</span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm hover:opacity-100 opacity-70 transition-opacity break-all">{CONTACT_EMAIL}</a>
              <Link to="/contact" className="text-sm hover:opacity-100 opacity-70 transition-opacity">Get in touch</Link>
            </div>

            {/* Follow */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-1">Follow</span>
              <a href="https://linkedin.com/company/pathpuffin" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-100 opacity-70 transition-opacity flex items-center gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5" />LinkedIn
              </a>
              <a href="https://x.com/pathpuffin" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-100 opacity-70 transition-opacity flex items-center gap-1.5">
                <XIcon className="w-3.5 h-3.5" />X
              </a>
            </div>

            {/* Resources */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-1">Resources</span>
              <Link to="/blog" className="text-sm hover:opacity-100 opacity-70 transition-opacity">Blog</Link>
              <a href={`mailto:${CONTACT_EMAIL}?subject=Careers inquiry`} className="text-sm hover:opacity-100 opacity-70 transition-opacity">Careers</a>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-1">Legal</span>
              <a href={`mailto:${CONTACT_EMAIL}?subject=Privacy inquiry`} className="text-sm hover:opacity-100 opacity-70 transition-opacity">Privacy</a>
              <a href={`mailto:${CONTACT_EMAIL}?subject=Cookies inquiry`} className="text-sm hover:opacity-100 opacity-70 transition-opacity">Cookies</a>
            </div>

          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <a href="https://pathpuffin.com" className="flex items-center gap-2.5">
            <img src={LOGO_URL} alt="Pathpuffin Logo" className="w-8 h-8 object-contain" />
            <span className="font-serif italic text-lg">Pathpuffin</span>
          </a>
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-30">© 2026 Pathpuffin, Inc.</p>
        </div>

      </div>
    </footer>
  );
}
