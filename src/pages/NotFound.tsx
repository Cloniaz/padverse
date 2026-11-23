import React from 'react';
import { Link } from 'react-router-dom';
import { Gamepad2, ArrowLeft } from 'lucide-react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4 py-16 space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-[var(--theme-accent)]/15 border border-[var(--theme-accent)]/30 flex items-center justify-center text-[var(--theme-accent)]">
        <Gamepad2 className="w-8 h-8" />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight">404</h1>
        <h2 className="text-xl font-bold text-[#b8b8bd]">Telemetry Disconnected</h2>
        <p className="text-sm text-[#8a8a90] max-w-sm mx-auto">
          The requested showroom sector does not exist or has been relocated to another frequency.
        </p>
      </div>
      <Link
        to="/"
        className="px-6 py-2.5 rounded-full bg-[var(--theme-accent)] text-black font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2 shadow-lg"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Return to showroom</span>
      </Link>
    </div>
  );
};
