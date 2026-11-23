# Padverse — 3D Gamepad Showroom & Telemetry Lab

A multi-page production web application featuring an interactive 3D hardware showroom with brand-reactive dynamic theming, orbital 360° controls, verified electrical and latency telemetry, and a consistent multi-brand design system.

---

## 🛠 Tech Stack
- **Framework:** React 19 + TypeScript + Vite 8
- **Styling & Theming:** Tailwind CSS v4 + Dynamic CSS Custom Properties
- **3D Graphics:** Three.js + React Three Fiber (`@react-three/fiber`) + Drei (`@react-three/drei`)
- **Animation & Motion:** Framer Motion (`framer-motion`)
- **Routing:** React Router v7 (`react-router-dom`)
- **Icons:** Lucide React

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ or LTS recommended)
- npm or pnpm

### Installation & Run
```bash
# Navigate to the project directory
cd padverse-app

# Install dependencies (if not already installed)
npm install

# Start local development server
npm run dev
```

### Production Build
```bash
npm run build
npm run preview
```

---

## 🎮 How to Add or Modify a Controller
All controller data, specs, power profiles, and brand themes are strictly typed and centralized in:
`src/data/controllers.ts`

Each controller entry includes:
- `id`: unique slug (e.g. `gamesir-g7-se`, `playstation-dualsense-white`)
- `brandId`: one of `'playstation' | 'xbox' | 'gamesir' | 'nintendo' | '8bitdo'`
- `name`: official hardware model name
- `price`: verified USD MSRP
- `priceCheckedOn`: ISO verification date (e.g. `2026-11-20`)
- `powerUsage`: maximum power draw specification
- `powerDraw`: `{ idle, gaming, rumble }` in watts
- `performance`: `{ build, precision, comfort, value }` scores (out of 100)
- `theme`: `{ accent, accentHover, accentGlow, bgGradient, bannerGradient, borderAccent, textAccent }`

Adding or modifying an entry in `CONTROLLERS` automatically propagates to the Home hero, 3D lighting, model selector cards, spec cards, power bars, and URL persistence (`/?brand=...&model=...`).

---

## 📝 How to Edit Page Content & Placeholder Copy
Site-wide texts, About page copy, team members, contact information, and FAQs are cleanly decoupled in:
`src/data/content.ts`

### Placeholder Content to Replace
The following items in `src/data/content.ts` contain mock/placeholder entries for demonstration:
1. `ABOUT_CONTENT.team`: Team member bios and roles (placeholder names).
2. `ABOUT_CONTENT.milestones`: Company founding and timeline history.
3. `CONTACT_CONTENT.details.email`: Placeholder address (`lab@padverse-showcase.internal`).
4. `CONTACT_CONTENT.details.location`: Office address placeholder.

---

## ⚖️ 3D Model Credits & Licenses
- **Model Geometry & Shaders:** Procedurally generated and calibrated PBR geometries created by the Padverse 3D metrology setup.
- **Stick Layouts:** Authentic asymmetrical stick positions for Xbox, GameSir, and 8BitDo; symmetrical stick placement for PlayStation DualSense; reversed action face button layouts for Nintendo.
- **License:** CC-BY-4.0 (Padverse Hardware Lab).
