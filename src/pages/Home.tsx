import React, { useEffect } from 'react';
import { useSearchParams, useOutletContext } from 'react-router-dom';
import {
  Calendar,
  User,
  Zap,
  Weight,
  Activity,
  Cable,
  ArrowRight,
  Gamepad
} from 'lucide-react';
import { CONTROLLERS, BRANDS } from '../data/controllers';
import type { BrandId, ControllerSpec } from '../data/controllers';
import { useTheme } from '../context/ThemeContext';
import { GamepadViewer } from '../components/three/GamepadViewer';

export const Home: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { activeController, setActiveController, setIsHome } = useTheme();
  const { handleAddToCart } = useOutletContext<{ handleAddToCart: () => void }>() || { handleAddToCart: () => {} };

  // Set home state for theme reactivity
  useEffect(() => {
    setIsHome(true);
    return () => setIsHome(false);
  }, [setIsHome]);

  // Sync URL query params with state
  const brandParam = (searchParams.get('brand') as BrandId) || activeController.brandId;
  const modelParam = searchParams.get('model') || activeController.id;

  useEffect(() => {
    const matched = CONTROLLERS.find(
      (c) => c.id === modelParam || (c.brandId === brandParam && c.id.includes(modelParam))
    ) || CONTROLLERS.find((c) => c.brandId === brandParam) || CONTROLLERS[0];

    if (matched && matched.id !== activeController.id) {
      setActiveController(matched);
    }
  }, [brandParam, modelParam, activeController.id, setActiveController]);

  const handleSelectBrand = (brandId: BrandId) => {
    const firstOfBrand = CONTROLLERS.find((c) => c.brandId === brandId) || CONTROLLERS[0];
    setActiveController(firstOfBrand);
    setSearchParams({ brand: brandId, model: firstOfBrand.id });
  };

  const handleSelectModel = (controller: ControllerSpec) => {
    setActiveController(controller);
    setSearchParams({ brand: controller.brandId, model: controller.id });
  };

  // Up to 3 models for the current brand
  const currentBrandModels = CONTROLLERS.filter((c) => c.brandId === activeController.brandId).slice(0, 3);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-12 transition-colors duration-500">
      {/* Top Brand Pill Tabs */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
        {BRANDS.map((brand) => {
          const isSelected = activeController.brandId === brand.id;
          return (
            <button
              key={brand.id}
              onClick={() => handleSelectBrand(brand.id)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--theme-accent)] ${
                isSelected
                  ? 'bg-[var(--theme-accent)] text-black shadow-lg scale-105'
                  : 'bg-[#18181b] text-[#b8b8bd] hover:text-white hover:bg-[#27272a] border border-[#26262a]'
              }`}
            >
              {brand.name}
            </button>
          );
        })}
      </div>

      {/* 1. Hero Stage: Rounded 16px Gradient Panel */}
      <section
        className="relative rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl overflow-hidden transition-all duration-700"
        style={{
          background: activeController.theme.bgGradient,
          boxShadow: `0 20px 50px -15px ${activeController.theme.accentGlow}`,
        }}
      >
        {/* Subtle Ambient Glow Orb */}
        <div
          className="absolute -top-24 -left-24 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-40 transition-colors duration-700"
          style={{ background: activeController.theme.accent }}
        />

        {/* Model Info Header */}
        <div className="relative z-10 space-y-1.5 text-left">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              {activeController.name}
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-[#b8b8bd]">
            {activeController.tagline}
          </p>

          {/* Price Pill */}
          <div className="pt-2">
            <span className="inline-block px-3 py-1 rounded-full bg-black/60 border border-white/15 text-sm sm:text-base font-bold text-[var(--theme-text-accent)] font-mono shadow-inner">
              ${activeController.price}
            </span>
          </div>
        </div>

        {/* 3D Interactive Controller Component */}
        <div className="relative my-2 sm:my-4 flex items-center justify-center">
          <GamepadViewer controller={activeController} interactive={true} />
        </div>

        {/* Bottom Hero Call to Action "View details" */}
        <div className="relative z-10 flex items-center justify-between pt-2">
          <a
            href="#specs"
            className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold bg-[var(--theme-accent)] text-black hover:opacity-90 transition-all shadow-md flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <span>View details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <span className="text-[11px] text-[#8a8a90] font-mono">
            Audit: {activeController.priceCheckedOn}
          </span>
        </div>
      </section>

      {/* 2. Model Selector Row */}
      <section className="space-y-3">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[#8a8a90]">
          Choose model
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {currentBrandModels.map((item) => {
            const isSelected = activeController.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectModel(item)}
                className={`p-3.5 rounded-xl text-left border transition-all duration-300 flex flex-col justify-between h-24 ${
                  isSelected
                    ? 'bg-[#18181c] border-[var(--theme-accent)] shadow-md ring-1 ring-[var(--theme-accent)]'
                    : 'bg-[#141416] border-[#26262a] hover:border-[#3f3f46] opacity-75 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <Gamepad
                    className={`w-6 h-6 transition-colors ${
                      isSelected ? 'text-[var(--theme-accent)]' : 'text-[#8a8a90]'
                    }`}
                  />
                  <span className="text-xs font-mono font-bold text-[#b8b8bd]">
                    ${item.price}
                  </span>
                </div>
                <div className="truncate">
                  <p className="text-xs font-bold text-white truncate">{item.name.replace(item.brandName, '').trim() || item.name}</p>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* 3. "Know your controller" - 6 Spec Cards */}
      <section id="specs" className="space-y-4 pt-4">
        <div>
          <div className="w-12 h-1 bg-[var(--theme-accent)] rounded-full mb-3 transition-colors duration-500" />
          <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Know your controller
          </h2>
          <p className="text-xs sm:text-sm text-[#8a8a90]">
            Everything about the {activeController.name}, at a glance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {/* Card 1: Release Date */}
          <div className="p-4 rounded-xl bg-[#141416] border border-[#26262a] space-y-2">
            <div className="flex items-center gap-2 text-[#8a8a90]">
              <Calendar className="w-4 h-4 text-[var(--theme-accent)]" />
              <span className="text-xs font-medium">Release date</span>
            </div>
            <p className="text-lg font-bold text-white">{activeController.releaseDate}</p>
            <p className="text-xs text-[#8a8a90]">{activeController.releaseNote}</p>
          </div>

          {/* Card 2: Creator */}
          <div className="p-4 rounded-xl bg-[#141416] border border-[#26262a] space-y-2">
            <div className="flex items-center gap-2 text-[#8a8a90]">
              <User className="w-4 h-4 text-[var(--theme-accent)]" />
              <span className="text-xs font-medium">Creator</span>
            </div>
            <p className="text-lg font-bold text-white">{activeController.creator}</p>
            <p className="text-xs text-[#8a8a90]">{activeController.origin}</p>
          </div>

          {/* Card 3: Power usage (Highlighted Card per design) */}
          <div className="p-4 rounded-xl bg-[#18181c] border border-[var(--theme-border-accent)] ring-1 ring-[var(--theme-border-accent)] space-y-2 shadow-lg">
            <div className="flex items-center gap-2 text-[var(--theme-text-accent)]">
              <Zap className="w-4 h-4 fill-current" />
              <span className="text-xs font-bold">Power usage</span>
            </div>
            <p className="text-lg font-black text-white">{activeController.powerUsage}</p>
            <p className="text-xs text-[#b8b8bd]">{activeController.powerDetail}</p>
          </div>

          {/* Card 4: Weight */}
          <div className="p-4 rounded-xl bg-[#141416] border border-[#26262a] space-y-2">
            <div className="flex items-center gap-2 text-[#8a8a90]">
              <Weight className="w-4 h-4 text-[var(--theme-accent)]" />
              <span className="text-xs font-medium">Weight</span>
            </div>
            <p className="text-lg font-bold text-white">{activeController.weight}</p>
            <p className="text-xs text-[#8a8a90]">{activeController.gripDetail}</p>
          </div>

          {/* Card 5: Polling Rate */}
          <div className="p-4 rounded-xl bg-[#141416] border border-[#26262a] space-y-2">
            <div className="flex items-center gap-2 text-[#8a8a90]">
              <Activity className="w-4 h-4 text-[var(--theme-accent)]" />
              <span className="text-xs font-medium">Polling rate</span>
            </div>
            <p className="text-lg font-bold text-white">{activeController.pollingRate}</p>
            <p className="text-xs text-[#8a8a90]">{activeController.stickTech}</p>
          </div>

          {/* Card 6: Connection */}
          <div className="p-4 rounded-xl bg-[#141416] border border-[#26262a] space-y-2">
            <div className="flex items-center gap-2 text-[#8a8a90]">
              <Cable className="w-4 h-4 text-[var(--theme-accent)]" />
              <span className="text-xs font-medium">Connection</span>
            </div>
            <p className="text-lg font-bold text-white">{activeController.connection}</p>
            <p className="text-xs text-[#8a8a90]">{activeController.connectionDetail}</p>
          </div>
        </div>
      </section>

      {/* 4. Two Chart Panels: Power Draw & Performance */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Power Draw Panel */}
        <div className="p-5 rounded-xl bg-[#141416] border border-[#26262a] space-y-4">
          <div>
            <h3 className="text-base font-bold text-white">Power draw</h3>
            <p className="text-xs text-[#8a8a90]">Measured in watts</p>
          </div>
          <div className="space-y-3 pt-2">
            {/* Idle */}
            <div className="flex items-center justify-between text-xs">
              <span className="w-16 text-[#b8b8bd]">Idle</span>
              <div className="flex-1 mx-3 h-2.5 bg-[#26262a] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${(activeController.powerDraw.idle / 5) * 100}%`,
                    background: activeController.theme.bannerGradient,
                  }}
                />
              </div>
              <span className="w-12 text-right font-mono font-bold text-white">
                {activeController.powerDraw.idle} W
              </span>
            </div>

            {/* Gaming */}
            <div className="flex items-center justify-between text-xs">
              <span className="w-16 text-[#b8b8bd]">Gaming</span>
              <div className="flex-1 mx-3 h-2.5 bg-[#26262a] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${(activeController.powerDraw.gaming / 5) * 100}%`,
                    background: activeController.theme.bannerGradient,
                  }}
                />
              </div>
              <span className="w-12 text-right font-mono font-bold text-white">
                {activeController.powerDraw.gaming} W
              </span>
            </div>

            {/* Rumble */}
            <div className="flex items-center justify-between text-xs">
              <span className="w-16 text-[#b8b8bd]">Rumble</span>
              <div className="flex-1 mx-3 h-2.5 bg-[#26262a] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${(activeController.powerDraw.rumble / 5) * 100}%`,
                    background: activeController.theme.bannerGradient,
                  }}
                />
              </div>
              <span className="w-12 text-right font-mono font-bold text-white">
                {activeController.powerDraw.rumble} W
              </span>
            </div>
          </div>
        </div>

        {/* Performance Panel */}
        <div className="p-5 rounded-xl bg-[#141416] border border-[#26262a] space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white">Performance</h3>
              <p className="text-xs text-[#8a8a90]">Out of 100 editorial telemetry</p>
            </div>
            <span className="text-[10px] text-[var(--theme-accent)] border border-[var(--theme-border-accent)] px-2 py-0.5 rounded-full">
              Audited
            </span>
          </div>

          <div className="space-y-3 pt-2">
            {Object.entries(activeController.performance).map(([metric, score]) => (
              <div key={metric} className="flex items-center justify-between text-xs">
                <span className="w-16 capitalize text-[#b8b8bd]">{metric}</span>
                <div className="flex-1 mx-3 h-2.5 bg-[#26262a] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700"
                    style={{
                      width: `${score}%`,
                      background: activeController.theme.bannerGradient,
                    }}
                  />
                </div>
                <span className="w-8 text-right font-mono font-bold text-white">
                  {score}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. "Works with" Compatibility Chips */}
      <section className="flex items-center gap-3 flex-wrap pt-2">
        <span className="text-xs text-[#8a8a90] font-medium mr-2">Works with</span>
        {activeController.compatibility.map((platform) => (
          <span
            key={platform}
            className="px-4 py-1.5 rounded-full text-xs font-semibold bg-[#141416] border border-[#26262a] text-[#b8b8bd] hover:border-[var(--theme-border-accent)] hover:text-white transition-all"
          >
            {platform}
          </span>
        ))}
      </section>

      {/* 6. Gradient Call-To-Action Banner */}
      <section
        className="relative rounded-2xl p-6 sm:p-8 overflow-hidden text-black shadow-2xl transition-all duration-700"
        style={{
          background: activeController.theme.bannerGradient,
        }}
      >
        {/* Decorative Circle from design */}
        <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full border-8 border-black/10 pointer-events-none" />

        <div className="relative z-10 max-w-md space-y-2">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
            Feel every degree.
          </h2>
          <p className="text-xs sm:text-sm font-semibold opacity-85">
            Free shipping on orders over $40.
          </p>

          <div className="pt-4 flex items-center gap-3 flex-wrap">
            <button
              onClick={handleAddToCart}
              className="px-6 py-2.5 rounded-full bg-black text-white text-xs sm:text-sm font-bold hover:bg-neutral-900 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-white"
            >
              Add to cart
            </button>
            <button
              onClick={() => {
                alert(`Comparing ${activeController.name} with standard reference specifications.`);
              }}
              className="px-6 py-2.5 rounded-full border border-black/30 hover:border-black text-xs sm:text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-black"
            >
              Compare models
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
