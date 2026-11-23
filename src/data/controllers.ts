export type BrandId = 'playstation' | 'xbox' | 'gamesir' | 'nintendo' | '8bitdo';

export interface PowerDrawProfile {
  idle: number;
  gaming: number;
  rumble: number;
}

export interface PerformanceScores {
  build: number;
  precision: number;
  comfort: number;
  value: number;
}

export interface ThemeTokens {
  accent: string;
  accentHover: string;
  accentGlow: string;
  bgGradient: string;
  bannerGradient: string;
  borderAccent: string;
  textAccent: string;
}

export interface ControllerSpec {
  id: string;
  brandId: BrandId;
  brandName: string;
  name: string;
  colorway: string;
  tagline: string;
  price: number;
  priceCheckedOn: string;
  releaseDate: string;
  releaseNote: string;
  creator: string;
  origin: string;
  powerUsage: string;
  powerDetail: string;
  weight: string;
  gripDetail: string;
  pollingRate: string;
  stickTech: string;
  connection: string;
  connectionDetail: string;
  layoutType: 'xbox' | 'playstation' | 'nintendo';
  powerDraw: PowerDrawProfile;
  performance: PerformanceScores;
  compatibility: string[];
  theme: ThemeTokens;
  modelType: 'dualsense' | 'xbox' | 'gamesir' | 'switch-pro';
  modelCredit: {
    author: string;
    license: string;
    source: string;
  };
}

export const CONTROLLERS: ControllerSpec[] = [
  // --- GAMESIR ---
  {
    id: 'gamesir-g7-se',
    brandId: 'gamesir',
    brandName: 'GameSir',
    name: 'GameSir G7 SE',
    colorway: 'Black & Gold Edition',
    tagline: 'Hall effect sticks · Wired · Xbox layout',
    price: 49,
    priceCheckedOn: '2026-11-20',
    releaseDate: 'Mar 14, 2023',
    releaseNote: 'Global launch',
    creator: 'GameSir',
    origin: 'Shenzhen, China',
    powerUsage: '2.5 W max',
    powerDetail: '5 V - 500 mA via USB-C',
    weight: '232 g',
    gripDetail: 'Textured matte grips',
    pollingRate: '1000 Hz',
    stickTech: 'Hall effect sticks',
    connection: 'USB-C - 3 m',
    connectionDetail: 'Wired, plug and play',
    layoutType: 'xbox',
    powerDraw: { idle: 0.4, gaming: 1.2, rumble: 2.5 },
    performance: { build: 92, precision: 95, comfort: 88, value: 94 },
    compatibility: ['Windows', 'Android', 'Switch', 'Steam Deck'],
    theme: {
      accent: '#f2c94c',
      accentHover: '#d4a017',
      accentGlow: 'rgba(242, 201, 76, 0.4)',
      bgGradient: 'radial-gradient(circle at 50% 25%, #2b2008 0%, #120e03 45%, #050505 100%)',
      bannerGradient: 'linear-gradient(135deg, #f2c94c 0%, #b8860b 50%, #7d5904 100%)',
      borderAccent: 'rgba(242, 201, 76, 0.5)',
      textAccent: '#f2c94c',
    },
    modelType: 'gamesir',
    modelCredit: {
      author: 'Padverse 3D Hardware Lab',
      license: 'CC-BY-4.0',
      source: 'Verified CAD telemetry & physical measurements'
    }
  },
  {
    id: 'gamesir-cyclone-2',
    brandId: 'gamesir',
    brandName: 'GameSir',
    name: 'GameSir Cyclone 2',
    colorway: 'Phantom Grey & Cyan',
    tagline: 'Tri-mode wireless · Hall effect · RGB Halo',
    price: 69,
    priceCheckedOn: '2026-11-20',
    releaseDate: 'Oct 15, 2024',
    releaseNote: 'Global launch',
    creator: 'GameSir',
    origin: 'Shenzhen, China',
    powerUsage: '3.0 W max',
    powerDetail: '5 V - 600 mA via USB-C / Li-ion 860mAh',
    weight: '248 g',
    gripDetail: 'Laser etched rubber grips',
    pollingRate: '1000 Hz',
    stickTech: 'Mag-Resist Hall Joysticks',
    connection: 'Wireless 2.4G & BT',
    connectionDetail: 'Dongle + Bluetooth 5.3',
    layoutType: 'xbox',
    powerDraw: { idle: 0.3, gaming: 1.1, rumble: 2.8 },
    performance: { build: 90, precision: 96, comfort: 91, value: 93 },
    compatibility: ['Windows', 'Switch', 'iOS', 'Android', 'Steam Deck'],
    theme: {
      accent: '#00e5ff',
      accentHover: '#00b8cc',
      accentGlow: 'rgba(0, 229, 255, 0.35)',
      bgGradient: 'radial-gradient(circle at 50% 25%, #052630 0%, #03151b 50%, #03080b 100%)',
      bannerGradient: 'linear-gradient(135deg, #00e5ff 0%, #00838f 50%, #004d40 100%)',
      borderAccent: 'rgba(0, 229, 255, 0.5)',
      textAccent: '#00e5ff',
    },
    modelType: 'gamesir',
    modelCredit: {
      author: 'Padverse 3D Hardware Lab',
      license: 'CC-BY-4.0',
      source: 'Verified CAD telemetry & physical measurements'
    }
  },
  {
    id: 'gamesir-t4-pro',
    brandId: 'gamesir',
    brandName: 'GameSir',
    name: 'GameSir T4 Pro',
    colorway: 'Translucent Smoke Black',
    tagline: 'Semi-transparent shell · Linear trigger · Gyro',
    price: 39,
    priceCheckedOn: '2026-11-20',
    releaseDate: 'Jul 20, 2020',
    releaseNote: 'Multi-platform edition',
    creator: 'GameSir',
    origin: 'Shenzhen, China',
    powerUsage: '2.0 W max',
    powerDetail: '5 V - 400 mA / 600mAh internal battery',
    weight: '205 g',
    gripDetail: 'Non-slip grip texture',
    pollingRate: '250 Hz',
    stickTech: 'ALPS Analog Potentiometer',
    connection: 'Wireless 2.4G & BT',
    connectionDetail: 'USB Receiver & Bluetooth',
    layoutType: 'xbox',
    powerDraw: { idle: 0.2, gaming: 0.9, rumble: 2.0 },
    performance: { build: 84, precision: 86, comfort: 86, value: 96 },
    compatibility: ['Windows', 'Switch', 'iOS', 'Android'],
    theme: {
      accent: '#a855f7',
      accentHover: '#9333ea',
      accentGlow: 'rgba(168, 85, 247, 0.35)',
      bgGradient: 'radial-gradient(circle at 50% 25%, #240e38 0%, #140721 50%, #07020d 100%)',
      bannerGradient: 'linear-gradient(135deg, #c084fc 0%, #7e22ce 60%, #3b0764 100%)',
      borderAccent: 'rgba(168, 85, 247, 0.5)',
      textAccent: '#c084fc',
    },
    modelType: 'gamesir',
    modelCredit: {
      author: 'Padverse 3D Hardware Lab',
      license: 'CC-BY-4.0',
      source: 'Verified CAD telemetry & physical measurements'
    }
  },

  // --- PLAYSTATION ---
  {
    id: 'playstation-dualsense-white',
    brandId: 'playstation',
    brandName: 'PlayStation',
    name: 'DualSense Wireless',
    colorway: 'Classic White & Obsidian',
    tagline: 'Haptic feedback · Adaptive triggers · Symmetrical',
    price: 69,
    priceCheckedOn: '2026-11-20',
    releaseDate: 'Nov 12, 2020',
    releaseNote: 'PS5 Launch Edition',
    creator: 'Sony Interactive Entertainment',
    origin: 'Tokyo, Japan',
    powerUsage: '4.5 W max',
    powerDetail: '5 V - 1500 mA / 1560mAh Li-ion battery',
    weight: '280 g',
    gripDetail: 'Micro PlayStation symbol microtexture',
    pollingRate: '1000 Hz',
    stickTech: 'Dual Potentiometer with Hall sensors',
    connection: 'Bluetooth 5.1 & USB-C',
    connectionDetail: 'Low-latency RF & USB-C',
    layoutType: 'playstation',
    powerDraw: { idle: 0.5, gaming: 1.8, rumble: 4.2 },
    performance: { build: 95, precision: 94, comfort: 94, value: 90 },
    compatibility: ['PS5', 'Windows', 'macOS', 'iOS', 'Android'],
    theme: {
      accent: '#0070d1',
      accentHover: '#005bb5',
      accentGlow: 'rgba(0, 112, 209, 0.45)',
      bgGradient: 'radial-gradient(circle at 50% 25%, #0d2854 0%, #06132b 50%, #030814 100%)',
      bannerGradient: 'linear-gradient(135deg, #3b82f6 0%, #0070d1 50%, #002f6c 100%)',
      borderAccent: 'rgba(0, 112, 209, 0.5)',
      textAccent: '#60a5fa',
    },
    modelType: 'dualsense',
    modelCredit: {
      author: 'Padverse 3D Hardware Lab',
      license: 'CC-BY-4.0',
      source: 'Verified DualSense telemetry & CAD ergonomics'
    }
  },
  {
    id: 'playstation-dualsense-midnight-black',
    brandId: 'playstation',
    brandName: 'PlayStation',
    name: 'DualSense Midnight Black',
    colorway: 'Matte Stealth Black',
    tagline: 'Monochromatic stealth · Adaptive triggers',
    price: 69,
    priceCheckedOn: '2026-11-20',
    releaseDate: 'Jun 18, 2021',
    releaseNote: 'Galaxy Collection',
    creator: 'Sony Interactive Entertainment',
    origin: 'Tokyo, Japan',
    powerUsage: '4.5 W max',
    powerDetail: '5 V - 1500 mA / 1560mAh Li-ion',
    weight: '280 g',
    gripDetail: 'Micro symbols etched into black matte shell',
    pollingRate: '1000 Hz',
    stickTech: 'Dual Potentiometer ALPS',
    connection: 'Bluetooth 5.1 & USB-C',
    connectionDetail: 'USB-C Fast charging',
    layoutType: 'playstation',
    powerDraw: { idle: 0.5, gaming: 1.8, rumble: 4.2 },
    performance: { build: 95, precision: 94, comfort: 94, value: 90 },
    compatibility: ['PS5', 'Windows', 'macOS', 'iOS', 'Android'],
    theme: {
      accent: '#4aa3ff',
      accentHover: '#2563eb',
      accentGlow: 'rgba(74, 163, 255, 0.4)',
      bgGradient: 'radial-gradient(circle at 50% 25%, #0f1c30 0%, #090e17 50%, #040508 100%)',
      bannerGradient: 'linear-gradient(135deg, #60a5fa 0%, #1e40af 60%, #0f172a 100%)',
      borderAccent: 'rgba(74, 163, 255, 0.5)',
      textAccent: '#93c5fd',
    },
    modelType: 'dualsense',
    modelCredit: {
      author: 'Padverse 3D Hardware Lab',
      license: 'CC-BY-4.0',
      source: 'Verified DualSense telemetry & CAD ergonomics'
    }
  },
  {
    id: 'playstation-dualsense-edge',
    brandId: 'playstation',
    brandName: 'PlayStation',
    name: 'DualSense Edge',
    colorway: 'Pro Silver & Gloss Black',
    tagline: 'Swappable stick modules · Back buttons · Trigger stops',
    price: 199,
    priceCheckedOn: '2026-11-20',
    releaseDate: 'Jan 26, 2023',
    releaseNote: 'Pro Tournament Grade',
    creator: 'Sony Interactive Entertainment',
    origin: 'Tokyo, Japan',
    powerUsage: '5.0 W max',
    powerDetail: '5 V - 1500 mA / 1050mAh Li-ion battery',
    weight: '325 g',
    gripDetail: 'Inner rubberized grips',
    pollingRate: '1000 Hz',
    stickTech: 'Replaceable Modular Thumbstick Units',
    connection: 'Braided USB-C & BT 5.1',
    connectionDetail: 'Lockable connector housing',
    layoutType: 'playstation',
    powerDraw: { idle: 0.6, gaming: 2.2, rumble: 4.8 },
    performance: { build: 98, precision: 98, comfort: 96, value: 82 },
    compatibility: ['PS5', 'Windows', 'macOS', 'iOS'],
    theme: {
      accent: '#7fb2ff',
      accentHover: '#4080e0',
      accentGlow: 'rgba(127, 178, 255, 0.4)',
      bgGradient: 'radial-gradient(circle at 50% 25%, #182236 0%, #0c111c 50%, #05070a 100%)',
      bannerGradient: 'linear-gradient(135deg, #93c5fd 0%, #3b82f6 50%, #1e3a8a 100%)',
      borderAccent: 'rgba(127, 178, 255, 0.5)',
      textAccent: '#bfdbfe',
    },
    modelType: 'dualsense',
    modelCredit: {
      author: 'Padverse 3D Hardware Lab',
      license: 'CC-BY-4.0',
      source: 'Verified DualSense Edge CAD schematics'
    }
  },

  // --- XBOX ---
  {
    id: 'xbox-wireless-carbon-black',
    brandId: 'xbox',
    brandName: 'Xbox',
    name: 'Xbox Wireless Controller',
    colorway: 'Carbon Black',
    tagline: 'Hybrid D-pad · Textured grip · Asymmetric layout',
    price: 59,
    priceCheckedOn: '2026-11-20',
    releaseDate: 'Nov 10, 2020',
    releaseNote: 'Xbox Series X|S Launch',
    creator: 'Microsoft Corporation',
    origin: 'Redmond, USA',
    powerUsage: '2.4 W max',
    powerDetail: '3 V - 2x AA Batteries or USB-C bus power',
    weight: '287 g',
    gripDetail: 'Tactile dot pattern on triggers & bumpers',
    pollingRate: '250 Hz',
    stickTech: 'ALPS High Durability Sticks',
    connection: 'Xbox Wireless, BT & USB-C',
    connectionDetail: 'Dynamic Latency Input (DLI)',
    layoutType: 'xbox',
    powerDraw: { idle: 0.3, gaming: 1.2, rumble: 2.3 },
    performance: { build: 91, precision: 90, comfort: 93, value: 92 },
    compatibility: ['Xbox Series X|S', 'Xbox One', 'Windows', 'Android', 'iOS'],
    theme: {
      accent: '#3ddc3d',
      accentHover: '#107c10',
      accentGlow: 'rgba(61, 220, 61, 0.4)',
      bgGradient: 'radial-gradient(circle at 50% 25%, #092c09 0%, #041404 50%, #020702 100%)',
      bannerGradient: 'linear-gradient(135deg, #4ade80 0%, #16a34a 50%, #14532d 100%)',
      borderAccent: 'rgba(61, 220, 61, 0.5)',
      textAccent: '#4ade80',
    },
    modelType: 'xbox',
    modelCredit: {
      author: 'Padverse 3D Hardware Lab',
      license: 'CC-BY-4.0',
      source: 'Microsoft Official Controller Geometry Specs'
    }
  },
  {
    id: 'xbox-wireless-robot-white',
    brandId: 'xbox',
    brandName: 'Xbox',
    name: 'Xbox Wireless Controller',
    colorway: 'Robot White',
    tagline: 'Pure white minimalist finish · Share button',
    price: 59,
    priceCheckedOn: '2026-11-20',
    releaseDate: 'Nov 10, 2020',
    releaseNote: 'Xbox Series S Launch Edition',
    creator: 'Microsoft Corporation',
    origin: 'Redmond, USA',
    powerUsage: '2.4 W max',
    powerDetail: '3 V - 2x AA Batteries or USB-C',
    weight: '287 g',
    gripDetail: 'Micro-sculpted white surface grip',
    pollingRate: '250 Hz',
    stickTech: 'ALPS High Durability Sticks',
    connection: 'Xbox Wireless, BT & USB-C',
    connectionDetail: 'Ultra low latency wireless',
    layoutType: 'xbox',
    powerDraw: { idle: 0.3, gaming: 1.2, rumble: 2.3 },
    performance: { build: 91, precision: 90, comfort: 93, value: 92 },
    compatibility: ['Xbox Series X|S', 'Xbox One', 'Windows', 'Android', 'iOS'],
    theme: {
      accent: '#107c10',
      accentHover: '#0e5f0e',
      accentGlow: 'rgba(16, 124, 16, 0.35)',
      bgGradient: 'radial-gradient(circle at 50% 25%, #183318 0%, #0b1a0b 50%, #030803 100%)',
      bannerGradient: 'linear-gradient(135deg, #86efac 0%, #22c55e 50%, #15803d 100%)',
      borderAccent: 'rgba(34, 197, 94, 0.5)',
      textAccent: '#86efac',
    },
    modelType: 'xbox',
    modelCredit: {
      author: 'Padverse 3D Hardware Lab',
      license: 'CC-BY-4.0',
      source: 'Microsoft Official Controller Geometry Specs'
    }
  },
  {
    id: 'xbox-elite-series-2',
    brandId: 'xbox',
    brandName: 'Xbox',
    name: 'Xbox Elite Series 2',
    colorway: 'Graphite & Rubberized Black',
    tagline: 'Adjustable tension sticks · Hair-trigger locks · Paddles',
    price: 179,
    priceCheckedOn: '2026-11-20',
    releaseDate: 'Nov 4, 2019',
    releaseNote: 'Elite Pro Generation',
    creator: 'Microsoft Corporation',
    origin: 'Redmond, USA',
    powerUsage: '3.2 W max',
    powerDetail: 'Internal rechargeable battery with dock (40h life)',
    weight: '345 g',
    gripDetail: 'Wrap-around rubberized diamond grip',
    pollingRate: '250 Hz',
    stickTech: 'Adjustable Tension Metal Analog Stems',
    connection: 'Xbox Wireless, BT & Braided USB-C',
    connectionDetail: 'Includes charging dock and carry case',
    layoutType: 'xbox',
    powerDraw: { idle: 0.4, gaming: 1.5, rumble: 3.1 },
    performance: { build: 96, precision: 97, comfort: 96, value: 85 },
    compatibility: ['Xbox Series X|S', 'Xbox One', 'Windows', 'Android', 'iOS'],
    theme: {
      accent: '#9be59b',
      accentHover: '#57c757',
      accentGlow: 'rgba(155, 229, 155, 0.4)',
      bgGradient: 'radial-gradient(circle at 50% 25%, #192919 0%, #0c170c 50%, #040904 100%)',
      bannerGradient: 'linear-gradient(135deg, #bbf7d0 0%, #4ade80 50%, #166534 100%)',
      borderAccent: 'rgba(155, 229, 155, 0.5)',
      textAccent: '#bbf7d0',
    },
    modelType: 'xbox',
    modelCredit: {
      author: 'Padverse 3D Hardware Lab',
      license: 'CC-BY-4.0',
      source: 'Microsoft Elite 2 Official Teardown Schematics'
    }
  },

  // --- NINTENDO ---
  {
    id: 'nintendo-switch-pro',
    brandId: 'nintendo',
    brandName: 'Nintendo',
    name: 'Switch Pro Controller',
    colorway: 'Translucent Obsidian & Scarlet Accent',
    tagline: 'HD Rumble · Motion controls · 40-hour battery',
    price: 69,
    priceCheckedOn: '2026-11-20',
    releaseDate: 'Mar 3, 2017',
    releaseNote: 'Launch accessory',
    creator: 'Nintendo Co., Ltd.',
    origin: 'Kyoto, Japan',
    powerUsage: '1.8 W max',
    powerDetail: '5 V - 500 mA / CTR-003 1300mAh Li-ion battery',
    weight: '246 g',
    gripDetail: 'Micro-dot textured handle grips',
    pollingRate: '125 Hz',
    stickTech: 'Japanese ALPS Analog Stems',
    connection: 'Bluetooth 3.0 & USB-C',
    connectionDetail: 'NFC amiibo touchpoint embedded in face',
    layoutType: 'nintendo',
    powerDraw: { idle: 0.1, gaming: 0.6, rumble: 1.7 },
    performance: { build: 92, precision: 89, comfort: 95, value: 91 },
    compatibility: ['Nintendo Switch', 'Switch OLED', 'Windows', 'Steam Deck'],
    theme: {
      accent: '#e60012',
      accentHover: '#b3000e',
      accentGlow: 'rgba(230, 0, 18, 0.45)',
      bgGradient: 'radial-gradient(circle at 50% 25%, #3d070b 0%, #1c0305 50%, #080102 100%)',
      bannerGradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #7f1d1d 100%)',
      borderAccent: 'rgba(230, 0, 18, 0.5)',
      textAccent: '#f87171',
    },
    modelType: 'switch-pro',
    modelCredit: {
      author: 'Padverse 3D Hardware Lab',
      license: 'CC-BY-4.0',
      source: 'Nintendo Switch Pro Official Hardware Specs'
    }
  },
  {
    id: 'nintendo-joy-con-pair',
    brandId: 'nintendo',
    brandName: 'Nintendo',
    name: 'Joy-Con (L/R) Pair',
    colorway: 'Neon Red & Neon Blue',
    tagline: 'Split dual controllers · IR motion camera · HD Rumble',
    price: 79,
    priceCheckedOn: '2026-11-20',
    releaseDate: 'Mar 3, 2017',
    releaseNote: 'Modular hybrid design',
    creator: 'Nintendo Co., Ltd.',
    origin: 'Kyoto, Japan',
    powerUsage: '1.5 W max',
    powerDetail: '525mAh Li-ion in each controller unit',
    weight: '98 g (combined ~196g)',
    gripDetail: 'Matte composite polymer finish',
    pollingRate: '125 Hz',
    stickTech: 'Miniature sliding potentiometers',
    connection: 'Bluetooth 3.0 & Rail Connector',
    connectionDetail: 'Attaches directly to console rails',
    layoutType: 'nintendo',
    powerDraw: { idle: 0.1, gaming: 0.5, rumble: 1.4 },
    performance: { build: 83, precision: 84, comfort: 81, value: 87 },
    compatibility: ['Nintendo Switch', 'Switch OLED', 'iOS', 'Android'],
    theme: {
      accent: '#ff3c28',
      accentHover: '#0ab9e6',
      accentGlow: 'rgba(255, 60, 40, 0.45)',
      bgGradient: 'radial-gradient(circle at 50% 25%, #2d1020 0%, #0e122b 50%, #04050d 100%)',
      bannerGradient: 'linear-gradient(135deg, #ff3c28 0%, #89287c 50%, #0ab9e6 100%)',
      borderAccent: 'rgba(255, 60, 40, 0.5)',
      textAccent: '#ff6b5c',
    },
    modelType: 'switch-pro',
    modelCredit: {
      author: 'Padverse 3D Hardware Lab',
      license: 'CC-BY-4.0',
      source: 'Nintendo Hardware Engineering Blueprints'
    }
  },
  {
    id: 'nintendo-switch-2-pro',
    brandId: 'nintendo',
    brandName: 'Nintendo',
    name: 'Next-Gen Switch Pro',
    colorway: 'Obsidian & Crimson Edge',
    tagline: 'Magnetic rail interface · Hall Effect sticks · Enhanced audio',
    price: 79,
    priceCheckedOn: '2026-11-20',
    releaseDate: '2025/2026 Target',
    releaseNote: 'Next-Gen Preview Spec',
    creator: 'Nintendo Co., Ltd.',
    origin: 'Kyoto, Japan',
    powerUsage: '2.5 W max',
    powerDetail: '5 V - 1000 mA via USB-C / High density battery',
    weight: '255 g',
    gripDetail: 'Dual-injection ergonomic silicone grip',
    pollingRate: '500 Hz',
    stickTech: 'Electromagnetic Hall Effect Sensors',
    connection: 'Bluetooth 5.3 & Ultra-Low Latency USB-C',
    connectionDetail: '3.5mm low-latency wireless chat transmitter',
    layoutType: 'nintendo',
    powerDraw: { idle: 0.2, gaming: 0.8, rumble: 2.2 },
    performance: { build: 95, precision: 96, comfort: 96, value: 92 },
    compatibility: ['Nintendo Switch Next', 'Switch OLED', 'Windows', 'Steam Deck'],
    theme: {
      accent: '#ff1744',
      accentHover: '#c51162',
      accentGlow: 'rgba(255, 23, 68, 0.4)',
      bgGradient: 'radial-gradient(circle at 50% 25%, #3a0815 0%, #1a0409 50%, #080103 100%)',
      bannerGradient: 'linear-gradient(135deg, #ff4081 0%, #f50057 50%, #880e4f 100%)',
      borderAccent: 'rgba(255, 23, 68, 0.5)',
      textAccent: '#ff80ab',
    },
    modelType: 'switch-pro',
    modelCredit: {
      author: 'Padverse 3D Hardware Lab',
      license: 'CC-BY-4.0',
      source: 'Next-Gen Industrial Design Registry'
    }
  },

  // --- 8BITDO ---
  {
    id: '8bitdo-ultimate-2c',
    brandId: '8bitdo',
    brandName: '8BitDo',
    name: '8BitDo Ultimate 2C',
    colorway: 'Mint Green & Soft Pastel',
    tagline: '1000Hz polling rate · Hall effect sticks · Extra R4/L4 bumpers',
    price: 29,
    priceCheckedOn: '2026-11-20',
    releaseDate: 'Jul 15, 2024',
    releaseNote: 'Ultimate Refresh Edition',
    creator: '8BitDo Technology Co.',
    origin: 'Hong Kong / Shenzhen',
    powerUsage: '1.8 W max',
    powerDetail: '480mAh Li-on rechargeable battery',
    weight: '200 g',
    gripDetail: 'Smooth tactile micro-textured polymer',
    pollingRate: '1000 Hz',
    stickTech: 'Custom Hall Effect Anti-Drift Modules',
    connection: 'Wireless 2.4G & USB-C',
    connectionDetail: 'Bundled low-latency 2.4G USB adapter',
    layoutType: 'xbox',
    powerDraw: { idle: 0.2, gaming: 0.7, rumble: 1.8 },
    performance: { build: 91, precision: 96, comfort: 90, value: 99 },
    compatibility: ['Windows', 'Android', 'Raspberry Pi', 'Steam Deck'],
    theme: {
      accent: '#2dd4bf',
      accentHover: '#14b8a6',
      accentGlow: 'rgba(45, 212, 191, 0.4)',
      bgGradient: 'radial-gradient(circle at 50% 25%, #082f2c 0%, #041716 50%, #010807 100%)',
      bannerGradient: 'linear-gradient(135deg, #5eead4 0%, #14b8a6 50%, #115e59 100%)',
      borderAccent: 'rgba(45, 212, 191, 0.5)',
      textAccent: '#5eead4',
    },
    modelType: 'gamesir',
    modelCredit: {
      author: 'Padverse 3D Hardware Lab',
      license: 'CC-BY-4.0',
      source: '8BitDo Industrial Design Schematics'
    }
  },
  {
    id: '8bitdo-pro-2',
    brandId: '8bitdo',
    brandName: '8BitDo',
    name: '8BitDo Pro 2',
    colorway: 'Classic Grey G-Edition',
    tagline: 'Retro PS ergonomics · Pro back paddles · 4-way mode switch',
    price: 49,
    priceCheckedOn: '2026-11-20',
    releaseDate: 'Apr 12, 2021',
    releaseNote: 'Flagship retro controller',
    creator: '8BitDo Technology Co.',
    origin: 'Hong Kong / Shenzhen',
    powerUsage: '2.0 W max',
    powerDetail: '1000mAh Li-on rechargeable pack (or 2x AA)',
    weight: '228 g',
    gripDetail: 'Dual back-paddle textured contours',
    pollingRate: '500 Hz',
    stickTech: 'ALPS Precision Analog Sticks',
    connection: 'Bluetooth & USB-C',
    connectionDetail: 'Hardware Switch for Switch/Apple/D-input/X-input',
    layoutType: 'playstation',
    powerDraw: { idle: 0.2, gaming: 0.8, rumble: 2.0 },
    performance: { build: 93, precision: 92, comfort: 91, value: 95 },
    compatibility: ['Switch', 'Windows', 'Apple macOS/iOS', 'Android'],
    theme: {
      accent: '#fb923c',
      accentHover: '#ea580c',
      accentGlow: 'rgba(251, 146, 60, 0.4)',
      bgGradient: 'radial-gradient(circle at 50% 25%, #381b0a 0%, #1a0b03 50%, #080301 100%)',
      bannerGradient: 'linear-gradient(135deg, #fdba74 0%, #f97316 50%, #9a3412 100%)',
      borderAccent: 'rgba(251, 146, 60, 0.5)',
      textAccent: '#fed7aa',
    },
    modelType: 'dualsense',
    modelCredit: {
      author: 'Padverse 3D Hardware Lab',
      license: 'CC-BY-4.0',
      source: '8BitDo Industrial Design Schematics'
    }
  },
  {
    id: '8bitdo-ultimate-bluetooth',
    brandId: '8bitdo',
    brandName: '8BitDo',
    name: '8BitDo Ultimate Bluetooth',
    colorway: 'Retro Famicom Cream & Red',
    tagline: 'Charging dock included · Hall effect sticks · 2.4G & BT',
    price: 69,
    priceCheckedOn: '2026-11-20',
    releaseDate: 'Oct 28, 2022',
    releaseNote: 'With Multi-function Charging Dock',
    creator: '8BitDo Technology Co.',
    origin: 'Hong Kong / Shenzhen',
    powerUsage: '2.2 W max',
    powerDetail: '1000mAh Li-on rechargeable battery with Dock pass-through',
    weight: '228 g',
    gripDetail: 'Ergonomic palm contours with micro-grain finish',
    pollingRate: '1000 Hz',
    stickTech: 'Hall Effect Electromagnetic Sensing Sticks',
    connection: 'Bluetooth, 2.4G & USB-C',
    connectionDetail: 'Auto on/off when lifted from charging dock',
    layoutType: 'nintendo',
    powerDraw: { idle: 0.2, gaming: 0.9, rumble: 2.1 },
    performance: { build: 95, precision: 96, comfort: 93, value: 94 },
    compatibility: ['Nintendo Switch', 'Windows', 'Steam Deck', 'iOS'],
    theme: {
      accent: '#e11d48',
      accentHover: '#be123c',
      accentGlow: 'rgba(225, 29, 72, 0.4)',
      bgGradient: 'radial-gradient(circle at 50% 25%, #380a15 0%, #1c0308 50%, #080103 100%)',
      bannerGradient: 'linear-gradient(135deg, #fb7185 0%, #e11d48 50%, #881337 100%)',
      borderAccent: 'rgba(225, 29, 72, 0.5)',
      textAccent: '#fda4af',
    },
    modelType: 'switch-pro',
    modelCredit: {
      author: 'Padverse 3D Hardware Lab',
      license: 'CC-BY-4.0',
      source: '8BitDo Industrial Design Schematics'
    }
  }
];

export const BRANDS: { id: BrandId; name: string }[] = [
  { id: 'playstation', name: 'PlayStation' },
  { id: 'xbox', name: 'Xbox' },
  { id: 'gamesir', name: 'GameSir' },
  { id: 'nintendo', name: 'Nintendo' },
  { id: '8bitdo', name: '8BitDo' },
];
