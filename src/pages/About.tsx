import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Box, Tag, ArrowRight } from 'lucide-react';
import { ABOUT_CONTENT } from '../data/content';
import { CONTROLLERS } from '../data/controllers';
import { useTheme } from '../context/ThemeContext';
import { GamepadViewer } from '../components/three/GamepadViewer';

export const About: React.FC = () => {
  const { setIsHome, activeController } = useTheme();

  useEffect(() => {
    setIsHome(false);
  }, [setIsHome]);

  // Compute live numbers from real data
  const totalControllers = CONTROLLERS.length;
  const totalBrands = new Set(CONTROLLERS.map((c) => c.brandId)).size;
  const verifiedSpecsCount = totalControllers * 6; // 6 core spec metrics per controller

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-16">
      {/* 1. About Hero Section with Decorative 3D Showcase */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <div className="w-12 h-1 bg-[var(--theme-accent)] rounded-full mb-3" />
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--theme-accent)]">
            {ABOUT_CONTENT.hero.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {ABOUT_CONTENT.hero.headline}
          </h1>
          <p className="text-sm sm:text-base text-[#b8b8bd] leading-relaxed">
            {ABOUT_CONTENT.hero.mission}
          </p>
          <div className="pt-2 text-xs text-[#8a8a90] italic">
            {ABOUT_CONTENT.disclaimer}
          </div>
        </div>

        {/* Decorative 3D Controller */}
        <div className="lg:col-span-5 h-[280px] sm:h-[320px] rounded-2xl bg-[#141416] border border-[#26262a] relative overflow-hidden flex items-center justify-center p-4">
          <GamepadViewer controller={activeController} interactive={false} />
          <div className="absolute bottom-3 text-[10px] text-[#8a8a90] font-mono">
            Slow ambient rotational display
          </div>
        </div>
      </section>

      {/* 2. By The Numbers (Computed from Real Data) */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-xl bg-[#141416] border border-[#26262a] text-center space-y-1">
          <p className="text-3xl font-extrabold text-[var(--theme-accent)] font-mono">{totalBrands}</p>
          <p className="text-xs text-[#8a8a90] uppercase tracking-wider font-semibold">Brands Covered</p>
        </div>
        <div className="p-5 rounded-xl bg-[#141416] border border-[#26262a] text-center space-y-1">
          <p className="text-3xl font-extrabold text-white font-mono">{totalControllers}</p>
          <p className="text-xs text-[#8a8a90] uppercase tracking-wider font-semibold">Controllers Benchmarked</p>
        </div>
        <div className="p-5 rounded-xl bg-[#141416] border border-[#26262a] text-center space-y-1">
          <p className="text-3xl font-extrabold text-white font-mono">{verifiedSpecsCount}+</p>
          <p className="text-xs text-[#8a8a90] uppercase tracking-wider font-semibold">Telemetry Data Points</p>
        </div>
        <div className="p-5 rounded-xl bg-[#141416] border border-[#26262a] text-center space-y-1">
          <p className="text-3xl font-extrabold text-[var(--theme-accent)] font-mono">100%</p>
          <p className="text-xs text-[#8a8a90] uppercase tracking-wider font-semibold">Independent Audits</p>
        </div>
      </section>

      {/* 3. What We Do: Three Value Cards */}
      <section className="space-y-6">
        <div>
          <div className="w-12 h-1 bg-[var(--theme-accent)] rounded-full mb-3" />
          <h2 className="text-2xl font-bold text-white tracking-tight">Core Pillars</h2>
          <p className="text-xs sm:text-sm text-[#8a8a90]">
            The standards we uphold across every controller entry in our catalog.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {ABOUT_CONTENT.values.map((val, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-[#141416] border border-[#26262a] space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[var(--theme-accent)]/15 border border-[var(--theme-accent)]/30 flex items-center justify-center text-[var(--theme-accent)]">
                {idx === 0 ? <Box className="w-5 h-5" /> : idx === 1 ? <ShieldCheck className="w-5 h-5" /> : <Tag className="w-5 h-5" />}
              </div>
              <h3 className="text-lg font-bold text-white">{val.title}</h3>
              <p className="text-xs sm:text-sm text-[#b8b8bd] leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. How We Verify Every Spec */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#141416] border border-[#26262a] space-y-6">
        <div>
          <div className="w-12 h-1 bg-[var(--theme-accent)] rounded-full mb-3" />
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {ABOUT_CONTENT.verificationMethodology.title}
          </h2>
          <p className="text-xs sm:text-sm text-[#8a8a90] pt-1">
            {ABOUT_CONTENT.verificationMethodology.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {ABOUT_CONTENT.verificationMethodology.steps.map((st) => (
            <div key={st.step} className="p-4 rounded-xl bg-[#0e0e10] border border-[#26262a] flex gap-3">
              <span className="text-base font-bold text-[var(--theme-accent)] font-mono">{st.step}</span>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">{st.title}</h4>
                <p className="text-xs text-[#8a8a90] leading-relaxed">{st.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Our Story / Timeline */}
      <section className="space-y-6">
        <div>
          <div className="w-12 h-1 bg-[var(--theme-accent)] rounded-full mb-3" />
          <h2 className="text-2xl font-bold text-white tracking-tight">Our Story</h2>
        </div>

        <div className="space-y-4">
          {ABOUT_CONTENT.milestones.map((m) => (
            <div key={m.year} className="p-5 rounded-xl bg-[#141416] border border-[#26262a] flex flex-col sm:flex-row sm:items-center gap-4">
              <span className="text-lg font-mono font-black text-[var(--theme-accent)] px-3 py-1 rounded bg-[var(--theme-accent)]/10 border border-[var(--theme-accent)]/20 self-start">
                {m.year}
              </span>
              <div>
                <h4 className="text-base font-bold text-white">{m.title}</h4>
                <p className="text-xs sm:text-sm text-[#b8b8bd]">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Team Cards (Placeholder Data) */}
      <section className="space-y-6">
        <div>
          <div className="w-12 h-1 bg-[var(--theme-accent)] rounded-full mb-3" />
          <h2 className="text-2xl font-bold text-white tracking-tight">The Lab Team</h2>
          <p className="text-xs sm:text-sm text-[#8a8a90]">
            Engineers, gamers, and metrology auditors behind Padverse.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ABOUT_CONTENT.team.map((member) => (
            <div key={member.name} className="p-5 rounded-xl bg-[#141416] border border-[#26262a] space-y-3">
              <div className="w-12 h-12 rounded-full bg-[var(--theme-accent)]/20 border border-[var(--theme-accent)] text-[var(--theme-accent)] font-bold flex items-center justify-center font-mono">
                {member.initials}
              </div>
              <div>
                <h4 className="text-base font-bold text-white">{member.name}</h4>
                <p className="text-xs text-[var(--theme-accent)] font-medium">{member.role}</p>
              </div>
              <p className="text-xs text-[#8a8a90] leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Call To Action Banner */}
      <section
        className="rounded-2xl p-6 sm:p-8 overflow-hidden text-black shadow-2xl relative"
        style={{ background: 'linear-gradient(135deg, #f2c94c 0%, #b8860b 60%, #855f05 100%)' }}
      >
        <div className="max-w-md space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
            Have a controller to audit?
          </h2>
          <p className="text-xs sm:text-sm font-semibold opacity-90">
            Submit a model or suggest telemetry benchmarks to our testing laboratory.
          </p>
          <div className="pt-2 flex items-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-full bg-black text-white text-xs sm:text-sm font-bold hover:bg-neutral-900 transition-all shadow-md inline-flex items-center gap-1.5"
            >
              <span>Contact the lab</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/"
              className="px-6 py-2.5 rounded-full border border-black/40 hover:border-black text-xs sm:text-sm font-bold transition-all"
            >
              Explore showroom
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
