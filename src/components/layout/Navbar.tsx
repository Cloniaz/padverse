import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Gamepad2 } from 'lucide-react';
import { SITE_METADATA } from '../../data/content';

interface NavbarProps {
  cartCount?: number;
  onOpenCart?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount = 0, onOpenCart }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About us', path: '/about' },
    { label: 'Contact us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#0e0e10]/85 border-b border-[#26262a] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 text-xl font-bold tracking-wider text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[var(--theme-accent)] rounded-lg p-1"
        >
          <div className="w-8 h-8 rounded-lg bg-[var(--theme-accent)] flex items-center justify-center text-black font-extrabold shadow-sm transition-colors duration-500">
            <Gamepad2 className="w-5 h-5 text-black" />
          </div>
          <span className="font-mono tracking-tight font-black">{SITE_METADATA.brand}</span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`relative py-1 transition-colors ${
                  active
                    ? 'text-[var(--theme-accent)] font-semibold'
                    : 'text-[#b8b8bd] hover:text-white'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[var(--theme-accent)] rounded-full transition-all duration-300" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Action icons (Cart Mock + Mobile Toggle) */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenCart}
            className="relative p-2.5 rounded-full bg-[#141416] border border-[#26262a] text-white/80 hover:text-white hover:border-[var(--theme-border-accent)] transition-all focus:outline-none focus:ring-2 focus:ring-[var(--theme-accent)]"
            aria-label="View shopping cart"
          >
            <ShoppingBag className="w-4 h-4 text-[var(--theme-accent)]" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[var(--theme-accent)] text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#b8b8bd] hover:text-white hover:bg-[#141416] border border-transparent hover:border-[#26262a] focus:outline-none focus:ring-2 focus:ring-[var(--theme-accent)]"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#26262a] bg-[#141416] px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => {
            const active = isActive(link.path);
            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  active
                    ? 'bg-[var(--theme-accent)]/15 text-[var(--theme-accent)] font-semibold'
                    : 'text-[#b8b8bd] hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
