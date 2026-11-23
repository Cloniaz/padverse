import React, { Suspense, useState, useRef, useEffect, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows, Float } from '@react-three/drei';
import { ControllerModel } from './ControllerModel';
import type { ControllerSpec } from '../../data/controllers';
import { ChevronLeft, ChevronRight, RotateCw, Eye } from 'lucide-react';

interface GamepadViewerProps {
  controller: ControllerSpec;
  interactive?: boolean;
  className?: string;
}

export const GamepadViewer: React.FC<GamepadViewerProps> = ({
  controller,
  interactive = true,
  className = '',
}) => {
  const [rotationAngle, setRotationAngle] = useState(0); // 0 to 360 degrees
  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const isInteracting = useRef(false);

  // Auto-rotation effect
  useEffect(() => {
    if (!interactive || !isAutoRotate) return;
    const interval = setInterval(() => {
      setRotationAngle((prev) => (prev + 0.5) % 360);
    }, 30);
    return () => clearInterval(interval);
  }, [interactive, isAutoRotate]);

  const handlePointerDown = () => {
    isInteracting.current = true;
    setIsAutoRotate(false);
  };

  const handlePointerUp = () => {
    isInteracting.current = false;
  };

  const rotateStep = useCallback((delta: number) => {
    setIsAutoRotate(false);
    setRotationAngle((prev) => {
      let next = (prev + delta) % 360;
      if (next < 0) next += 360;
      return next;
    });
  }, []);

  // Keyboard navigation for rotation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      rotateStep(-15);
    } else if (e.key === 'ArrowRight') {
      rotateStep(15);
    }
  };

  const rotationRadians = (rotationAngle * Math.PI) / 180;

  return (
    <div
      className={`relative w-full flex flex-col items-center select-none ${className}`}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onKeyDown={handleKeyDown}
      tabIndex={interactive ? 0 : -1}
      aria-label="3D Gamepad Interactive Viewer"
    >
      {/* 360 View Badge */}
      {interactive && (
        <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide bg-black/60 backdrop-blur-md border border-white/10 text-white/90 shadow-lg">
          <Eye className="w-3.5 h-3.5 text-[var(--theme-accent)] animate-pulse" />
          <span>360° view</span>
        </div>
      )}

      {/* Main 3D Canvas Area */}
      <div className="relative w-full h-[320px] sm:h-[380px] md:h-[420px] flex items-center justify-center">
        {/* Left Rotate Button */}
        {interactive && (
          <button
            onClick={() => rotateStep(-30)}
            className="absolute left-3 sm:left-6 z-10 p-2.5 rounded-full bg-black/40 hover:bg-black/80 border border-white/10 text-white/70 hover:text-white transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-accent)]"
            aria-label="Rotate gamepad left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* 3D Canvas */}
        <Canvas
          camera={{ position: [0, 0.4, 4.2], fov: 45 }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          {/* Dynamic Studio Lighting matched to Theme */}
          <ambientLight intensity={0.8} />
          <directionalLight
            position={[5, 8, 5]}
            intensity={1.5}
            color="#ffffff"
            castShadow
          />
          {/* Brand RGB Glow Accent Light */}
          <pointLight
            position={[0, 1.5, 2]}
            intensity={2.2}
            color={controller.theme.accent}
            distance={7}
          />
          <pointLight
            position={[0, -2, -2]}
            intensity={1.0}
            color={controller.theme.accent}
            distance={5}
          />

          <Suspense fallback={null}>
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
              <ControllerModel controller={controller} rotationY={rotationRadians} />
            </Float>
            <ContactShadows
              position={[0, -1.35, 0]}
              opacity={0.65}
              scale={6}
              blur={2.2}
              far={3}
            />
          </Suspense>

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 1.8}
            minPolarAngle={Math.PI / 2.6}
            onChange={(e) => {
              if (e?.target) {
                // Keep slider angle roughly in sync if dragged manually
                setIsAutoRotate(false);
              }
            }}
          />
        </Canvas>

        {/* Right Rotate Button */}
        {interactive && (
          <button
            onClick={() => rotateStep(30)}
            className="absolute right-3 sm:right-6 z-10 p-2.5 rounded-full bg-black/40 hover:bg-black/80 border border-white/10 text-white/70 hover:text-white transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--theme-accent)]"
            aria-label="Rotate gamepad right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Dashed Orbit Ring Aesthetic Under Controller */}
        <div
          className="absolute bottom-10 w-64 sm:w-80 h-16 rounded-[100%] border border-dashed pointer-events-none opacity-40 transition-colors duration-500"
          style={{ borderColor: controller.theme.accent }}
        />
      </div>

      {/* Bottom Orbit Slider & Reset Control */}
      {interactive && (
        <div className="w-full max-w-xs sm:max-w-sm px-6 pb-2 flex flex-col items-center gap-2">
          <div className="w-full flex items-center justify-between text-[11px] text-[#8a8a90] font-mono">
            <span>0°</span>
            <button
              onClick={() => setIsAutoRotate(!isAutoRotate)}
              className="flex items-center gap-1 hover:text-[var(--theme-accent)] transition-colors"
              title={isAutoRotate ? 'Pause spin' : 'Resume auto-spin'}
            >
              <RotateCw className={`w-3 h-3 ${isAutoRotate ? 'animate-spin' : ''}`} />
              <span>{Math.round(rotationAngle)}°</span>
            </button>
            <span>360°</span>
          </div>
          <input
            type="range"
            min="0"
            max="360"
            value={Math.round(rotationAngle)}
            onChange={(e) => {
              setIsAutoRotate(false);
              setRotationAngle(parseFloat(e.target.value));
            }}
            className="w-full h-1.5 bg-[#26262a] rounded-lg appearance-none cursor-pointer accent-[var(--theme-accent)] focus:outline-none focus:ring-1 focus:ring-[var(--theme-accent)]"
            aria-label="Gamepad 360 degree rotation angle slider"
          />
        </div>
      )}
    </div>
  );
};
