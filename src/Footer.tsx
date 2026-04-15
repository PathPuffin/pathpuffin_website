import { useState } from "react";
import { Link } from "react-router-dom";
import { LinkedinIcon, XIcon } from "lucide-react";

const LOGO_URL = "/puffin_logo_highres.png";
const CONTACT_EMAIL = "hello@pathpuffin.com";

const AI_QUERY = encodeURIComponent(
  "What is Pathpuffin? Summarize what they do as an engineering studio, their philosophy of engineering with soul, and how they approach building software."
);

const AI_LINKS = [
  {
    name: "ChatGPT",
    href: `https://chatgpt.com/?q=${AI_QUERY}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2a6.5 6.5 0 0 1 6.34 5.05A5 5 0 0 1 21 12a5 5 0 0 1-2.5 4.33A6.5 6.5 0 0 1 12 22a6.5 6.5 0 0 1-6.34-5.05A5 5 0 0 1 3 12a5 5 0 0 1 2.5-4.33A6.5 6.5 0 0 1 12 2z" />
        <path d="M12 8v8M8 12h8" />
      </svg>
    ),
  },
  {
    name: "Claude",
    href: `https://claude.ai/new?q=${AI_QUERY}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="w-5 h-5">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2l2.5 7.5H22l-6.5 4.5 2.5 7.5L12 17l-6 4.5 2.5-7.5L2 9.5h7.5z" />
      </svg>
    ),
  },
  {
    name: "Gemini",
    href: `https://gemini.google.com/app?q=${AI_QUERY}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M12 2C12 2 14 8 14 12C14 16 12 22 12 22C12 22 10 16 10 12C10 8 12 2 12 2Z" />
        <path d="M2 12C2 12 8 10 12 10C16 10 22 12 22 12C22 12 16 14 12 14C8 14 2 12 2 12Z" />
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 pb-16 border-b border-white/10">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-8 leading-tight">
              Stay in the loop on what<br /> we're <span className="italic">building.</span>
            </h2>
            {subscribed ? (
              <p className="text-white/70 text-sm">Thanks for subscribing! We'll be in touch.</p>
            ) : (
              <form className="flex gap-3 max-w-sm" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/10 border border-white/20 rounded-full py-2.5 px-5 focus:outline-none focus:border-white/50 transition-colors flex-1 text-sm placeholder:text-white/40"
                />
                <button
                  type="submit"
                  className="bg-white text-primary px-6 py-2.5 rounded-full font-medium text-sm hover:bg-white/90 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

          <div className="grid grid-cols-4 gap-x-16 gap-y-8">
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-1">Company</span>
              <Link to="/blog" className="text-sm hover:opacity-100 opacity-70 transition-opacity">Blog</Link>
              <a href={`mailto:${CONTACT_EMAIL}?subject=Careers inquiry`} className="text-sm hover:opacity-100 opacity-70 transition-opacity">Careers</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-1">Contact</span>
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-sm hover:opacity-100 opacity-70 transition-opacity">{CONTACT_EMAIL}</a>
              <Link to="/contact" className="text-sm hover:opacity-100 opacity-70 transition-opacity">Get in touch</Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-1">Follow</span>
              <a href="https://linkedin.com/company/pathpuffin" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-100 opacity-70 transition-opacity flex items-center gap-1.5">
                <LinkedinIcon className="w-3.5 h-3.5" />LinkedIn
              </a>
              <a href="https://x.com/pathpuffin" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-100 opacity-70 transition-opacity flex items-center gap-1.5">
                <XIcon className="w-3.5 h-3.5" />X / Twitter
              </a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-1">Legal</span>
              <a href={`mailto:${CONTACT_EMAIL}?subject=Privacy inquiry`} className="text-sm hover:opacity-100 opacity-70 transition-opacity">Privacy</a>
              <a href={`mailto:${CONTACT_EMAIL}?subject=Cookies inquiry`} className="text-sm hover:opacity-100 opacity-70 transition-opacity">Cookies</a>
            </div>
          </div>
        </div>

        {/* Ask AI About Us */}
        <div className="mb-12 pb-12 border-b border-white/10">
          <p className="text-xs font-semibold uppercase tracking-widest opacity-50 mb-4">Ask AI About Us</p>
          <div className="flex items-center gap-4">
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

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={LOGO_URL} alt="Pathpuffin Logo" className="w-8 h-8 object-contain" />
            <span className="font-serif italic text-lg">Pathpuffin</span>
          </Link>
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-30">© 2026 Pathpuffin, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
