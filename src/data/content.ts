export const ABOUT_CONTENT = {
  hero: {
    badge: 'Hardware Telemetry Lab',
    headline: 'Engineering truth for the input devices you touch every day.',
    mission: 'Padverse is an independent hardware showcase and telemetry laboratory. We test, measure, and 3D-visualize modern gaming controllers with forensic accuracy—from true input latency to internal power consumption.',
  },
  disclaimer: 'Notice: Padverse is an independent benchmark and product exhibition. All brand names, trademarks, and registered logos (PlayStation, Xbox, GameSir, Nintendo, 8BitDo) belong to their respective owners. Content on this site is for educational, telemetry review, and showcase purposes.',
  milestones: [
    {
      year: '2023',
      title: 'Lab Inception & Hall-Effect Transition',
      desc: 'Founded by competitive gamers and hardware engineers frustrated by stick drift. Started measuring potentiometer degradation vs magnetic sensors.',
    },
    {
      year: '2024',
      title: '360° Realtime Telemetry Pipeline',
      desc: 'Developed custom automated testing rigs capturing USB polling jitter, trigger actuation curves, and multi-stage rumble wattage.',
    },
    {
      year: '2025',
      title: 'Multi-Brand Telemetry Database',
      desc: 'Benchmarked over 50 mainstream and boutique controllers with verified factory MSRP, certified connection protocols, and CAD models.',
    },
    {
      year: '2026',
      title: 'Padverse 3D Showroom Launch',
      desc: 'Brought forensic hardware exploration directly to consumer web browsers with interactive 3D, brand-reactive lighting, and verified spec cards.',
    },
  ],
  values: [
    {
      icon: 'Cube',
      title: 'Accurate 3D Models',
      desc: 'Every controller is rendered with correct button layout (Xbox asymmetric vs PS symmetric vs Nintendo reversed), real trigger angles, and authentic grip texture.',
    },
    {
      icon: 'ShieldCheck',
      title: 'Verified Specs',
      desc: 'We independently audit polling rate (Hz), battery capacity, weight down to the gram, and USB-C power draw across idle, gaming, and rumble states.',
    },
    {
      icon: 'Tag',
      title: 'Honest Prices',
      desc: 'MSRP verified against official launch documentation and verified retail databases, complete with exact "checked on" audit timestamps.',
    },
  ],
  verificationMethodology: {
    title: 'How We Verify Every Spec',
    description: 'We do not republish marketing claims uncritically. Every controller in our lab undergoes a 5-step hardware audit:',
    steps: [
      { step: '01', title: 'Input Polling Benchmark', desc: 'Connected via USB-C and 2.4GHz to hardware oscilloscope analysers to measure real packet frequency and jitter variance.' },
      { step: '02', title: 'Power Consumption Analysis', desc: 'Inline digital power meters measure voltage and current draw during passive standby, heavy dual-stick input, and maximum vibration rumble.' },
      { step: '03', title: 'Ergonomic & Weight Calibration', desc: 'Measured on lab-grade micro scales with and without cables/batteries, analyzing center-of-gravity balance.' },
      { step: '04', title: 'Component Teardown Check', desc: 'Inspecting stick modules (Hall Effect vs ALPS potentiometers), tactile microswitches, and trigger travel distance.' },
    ],
  },
  team: [
    { name: 'Dr. Aaron Vance', initials: 'AV', role: 'Head of Hardware Metrology', bio: 'Former robotics sensor engineer with 12 years testing electromagnetic Hall Effect arrays.' },
    { name: 'Kaelen Mori', initials: 'KM', role: 'Lead 3D & Graphics Architect', bio: 'Specializes in real-time WebGL PBR shaders and industrial CAD visualization.' },
    { name: 'Elena Rostova', initials: 'ER', role: 'Input Latency & Firmware Auditor', bio: 'Competitive esports technician auditing USB HID packet intervals and Bluetooth jitter.' },
    { name: 'Marcus Chen', initials: 'MC', role: 'Editorial & Teardown Specialist', bio: 'Hardware journalist dissecting microswitch lifespans, ergonomics, and tactile actuation forces.' },
  ],
};

export const CONTACT_CONTENT = {
  hero: {
    badge: 'Hardware Support & Inquiries',
    headline: 'Connect with the Padverse Lab Team',
    subtitle: 'Have a question about controller telemetry, request a model benchmark, or want to collaborate with our hardware laboratory?',
  },
  details: {
    email: 'lab@padverse-showcase.internal',
    supportHours: 'Mon - Fri: 09:00 - 18:00 UTC',
    responseTime: 'Within 24 to 48 business hours',
    location: 'Metrology Lab 4, Tech Innovation Center',
  },
  beforeYouWrite: [
    'Check our FAQ section below for immediate answers on shipping, returns, and spec methodology.',
    'For benchmark verification requests, please include the controller model and firmware version.',
    'Padverse is an independent showroom; warranty claims for hardware defects should be directed to the manufacturer.',
  ],
  faqs: [
    {
      q: 'How are your 3D models and measurements sourced?',
      a: 'All 3D models in our showroom are constructed to exact physical dimensions, button layouts, and curvature based on certified manufacturer teardowns and CAD telemetry. Nothing is faked with primitive placeholders.'
    },
    {
      q: 'What do the "Checked on" dates beside MSRP prices mean?',
      a: 'Hardware prices fluctuate with supply cycles. Our verified dates indicate when our metrology team last confirmed the official manufacturer MSRP against authorized retail distributors.'
    },
    {
      q: 'How is controller power draw measured in watts?',
      a: 'We use hardware inline USB meters measuring at 5.0V. "Idle" is connected with no input; "Gaming" involves active dual-stick deflection; "Rumble" triggers all internal haptic actuators and motors at 100% duty cycle.'
    },
    {
      q: 'Does Padverse sell these gamepads directly?',
      a: 'The Padverse showroom features a frontend demo cart and checkout simulation to test consumer flows. Real units should be purchased from authorized brand retail stores linked in our catalog.'
    },
    {
      q: 'Can I request a teardown and 3D benchmark for an unlisted controller?',
      a: 'Yes! Select "Product info" or "General question" in the contact form with the specific brand and model name. Our hardware team prioritizes models with significant community interest.'
    },
    {
      q: 'Why are Xbox and Nintendo face button layouts different?',
      a: 'Nintendo pioneered the modern cross layout with B at the bottom and A on the right. Microsoft Xbox uses A at the bottom and B on the right. Our models and spec sheets accurately document these layout differences per brand.'
    }
  ]
};

export const SITE_METADATA = {
  brand: 'PADVERSE',
  tagline: 'Spin it. Pick it. Play it. The 3D gamepad showroom.',
  socials: [
    { name: 'YouTube', href: 'https://youtube.com' },
    { name: 'GitHub', href: 'https://github.com' },
    { name: 'X / Twitter', href: 'https://x.com' },
    { name: 'Discord', href: 'https://discord.com' },
  ],
  footerLinks: {
    shop: [
      { label: 'PlayStation', href: '/?brand=playstation' },
      { label: 'Xbox', href: '/?brand=xbox' },
      { label: 'GameSir', href: '/?brand=gamesir' },
      { label: 'Nintendo', href: '/?brand=nintendo' },
      { label: '8BitDo', href: '/?brand=8bitdo' },
    ],
    support: [
      { label: 'Help center', href: '/contact#faq' },
      { label: 'Shipping', href: '/contact#faq' },
      { label: 'Returns', href: '/contact#faq' },
      { label: 'Contact us', href: '/contact' },
    ],
    company: [
      { label: 'About us', href: '/about' },
      { label: 'Careers (Coming Soon)', href: '/about#careers' },
      { label: 'Press & Media', href: '/about#press' },
      { label: 'Partners', href: '/about#partners' },
    ]
  }
};
