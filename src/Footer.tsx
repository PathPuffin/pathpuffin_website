import { useState } from "react";
import { Link } from "react-router-dom";
import { LinkedinIcon, XIcon } from "lucide-react";

const LOGO_URL = "/puffin_logo_highres.png";
const CONTACT_EMAIL = "hello@pathpuffin.com";

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

          <div className="grid grid-cols-4 gap-x-12 gap-y-8">
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

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={LOGO_URL} alt="Pathpuffin Logo" className="w-6 h-6 object-contain brightness-0 invert" />
            <span className="font-serif italic text-lg">Pathpuffin</span>
          </Link>
          <p className="text-[10px] uppercase tracking-[0.2em] opacity-30">© 2026 Pathpuffin, Inc.</p>
        </div>
      </div>
    </footer>
  );
}
