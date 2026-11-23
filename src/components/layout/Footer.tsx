import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, Play, Circle, Plus } from 'lucide-react';
import { SITE_METADATA } from '../../data/content';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#0a0a0c] border-t border-[#26262a] text-[#b8b8bd] pt-14 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-[#1f1f23]">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-2 text-white font-mono font-bold tracking-tight text-lg">
              <div className="w-6 h-6 rounded bg-[var(--theme-accent)] flex items-center justify-center transition-colors">
                <Gamepad2 className="w-3.5 h-3.5 text-black" />
              </div>
              <span className="font-black">{SITE_METADATA.brand}</span>
            </Link>
            <p className="text-sm text-[#8a8a90] max-w-sm leading-relaxed">
              {SITE_METADATA.tagline}
            </p>
            {/* Social Icons row matching design */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#26262a] flex items-center justify-center text-[#8a8a90] hover:text-[var(--theme-accent)] hover:border-[var(--theme-border-accent)] transition-all"
                aria-label="YouTube channel"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#26262a] flex items-center justify-center text-[#8a8a90] hover:text-[var(--theme-accent)] hover:border-[var(--theme-border-accent)] transition-all"
                aria-label="Discord community"
              >
                <Circle className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full border border-[#26262a] flex items-center justify-center text-[#8a8a90] hover:text-[var(--theme-accent)] hover:border-[var(--theme-border-accent)] transition-all"
                aria-label="GitHub repository"
              >
                <Plus className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Shop</h4>
            <ul className="space-y-2 text-sm">
              {SITE_METADATA.footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-[var(--theme-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Support</h4>
            <ul className="space-y-2 text-sm">
              {SITE_METADATA.footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-[var(--theme-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Company</h4>
            <ul className="space-y-2 text-sm">
              {SITE_METADATA.footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="hover:text-[var(--theme-accent)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8a8a90] gap-4">
          <p>© {currentYear} {SITE_METADATA.brand}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/about#privacy" className="hover:text-white transition-colors">Privacy</Link>
            <span>·</span>
            <Link to="/about#terms" className="hover:text-white transition-colors">Terms</Link>
            <span>·</span>
            <Link to="/about#cookies" className="hover:text-white transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
