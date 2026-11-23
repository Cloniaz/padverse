import React, { createContext, useContext, useEffect, useState } from 'react';
import { CONTROLLERS } from '../data/controllers';
import type { ControllerSpec } from '../data/controllers';

interface ThemeContextType {
  activeController: ControllerSpec;
  setActiveController: (controller: ControllerSpec) => void;
  isHome: boolean;
  setIsHome: (val: boolean) => void;
}

const defaultController = CONTROLLERS[0]; // GameSir G7 SE default

const ThemeContext = createContext<ThemeContextType>({
  activeController: defaultController,
  setActiveController: () => {},
  isHome: true,
  setIsHome: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeController, setActiveController] = useState<ControllerSpec>(defaultController);
  const [isHome, setIsHome] = useState(true);

  // Sync active controller tokens into CSS root variables
  useEffect(() => {
    const root = document.documentElement;
    if (isHome) {
      root.style.setProperty('--theme-accent', activeController.theme.accent);
      root.style.setProperty('--theme-accent-hover', activeController.theme.accentHover);
      root.style.setProperty('--theme-accent-glow', activeController.theme.accentGlow);
      root.style.setProperty('--theme-bg-gradient', activeController.theme.bgGradient);
      root.style.setProperty('--theme-banner-gradient', activeController.theme.bannerGradient);
      root.style.setProperty('--theme-border-accent', activeController.theme.borderAccent);
      root.style.setProperty('--theme-text-accent', activeController.theme.textAccent);
    } else {
      // Neutral theme for About and Contact with default GameSir gold accent
      root.style.setProperty('--theme-accent', '#f2c94c');
      root.style.setProperty('--theme-accent-hover', '#d4a017');
      root.style.setProperty('--theme-accent-glow', 'rgba(242, 201, 76, 0.35)');
      root.style.setProperty('--theme-bg-gradient', 'radial-gradient(circle at 50% 20%, #1c1810 0%, #0e0e10 50%, #08080a 100%)');
      root.style.setProperty('--theme-banner-gradient', 'linear-gradient(135deg, #f2c94c 0%, #b8860b 60%, #855f05 100%)');
      root.style.setProperty('--theme-border-accent', 'rgba(242, 201, 76, 0.35)');
      root.style.setProperty('--theme-text-accent', '#f2c94c');
    }
  }, [activeController, isHome]);

  return (
    <ThemeContext.Provider value={{ activeController, setActiveController, isHome, setIsHome }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
