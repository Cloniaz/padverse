import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const Layout: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<{ id: string; name: string; price: number; qty: number }[]>([]);
  const { activeController } = useTheme();

  const handleAddToCart = () => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === activeController.id);
      if (existing) {
        return prev.map((item) =>
          item.id === activeController.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { id: activeController.id, name: activeController.name, price: activeController.price, qty: 1 }];
    });
    setCartOpen(true);
  };

  const totalCartPrice = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#0e0e10] text-[#f4f4f4] selection:bg-[var(--theme-accent)] selection:text-black">
      {/* Skip to Content Accessibility Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[999] px-4 py-2 bg-[var(--theme-accent)] text-black font-semibold rounded shadow-lg"
      >
        Skip to main content
      </a>

      {/* Shared Persistent Navbar */}
      <Navbar cartCount={totalCartCount} onOpenCart={() => setCartOpen(true)} />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        <Outlet context={{ handleAddToCart }} />
      </main>

      {/* Shared Persistent Footer */}
      <Footer />

      {/* Shopping Cart Modal / Drawer (Front-end Mock) */}
      {cartOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/70 backdrop-blur-sm">
          <div className="w-full max-w-md h-full bg-[#141416] border-l border-[#26262a] p-6 flex flex-col shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#26262a]">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                Showroom Cart
                <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--theme-accent)]/20 text-[var(--theme-accent)]">
                  Mock
                </span>
              </h3>
              <button
                onClick={() => setCartOpen(false)}
                className="p-1 rounded text-[#8a8a90] hover:text-white"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {cartItems.length === 0 ? (
                <div className="text-center py-16 text-[#8a8a90]">
                  Your cart is currently empty.
                </div>
              ) : (
                cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-xl bg-[#0e0e10] border border-[#26262a] flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.name}</h4>
                      <p className="text-xs text-[#8a8a90]">Qty: {item.qty} · ${item.price} each</p>
                    </div>
                    <span className="text-sm font-bold text-[var(--theme-accent)] font-mono">
                      ${item.price * item.qty}
                    </span>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="pt-4 border-t border-[#26262a] space-y-4">
                <div className="flex items-center justify-between text-base font-bold text-white">
                  <span>Subtotal</span>
                  <span className="font-mono text-[var(--theme-accent)]">${totalCartPrice}</span>
                </div>
                <button
                  onClick={() => {
                    alert('This is a front-end showroom demonstration. No live checkout transaction initiated.');
                    setCartItems([]);
                    setCartOpen(false);
                  }}
                  className="w-full py-3 rounded-xl bg-[var(--theme-accent)] hover:opacity-90 text-black font-bold flex items-center justify-center gap-2 transition-all shadow-lg"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Demo Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
