import {
  BadgeCheck,
  Brush,
  Droplets,
  Flame,
  Gem,
  Home,
  Shield,
  Sparkles,
  StretchHorizontal,
  Wind,
} from "lucide-react";

export const site = {
  name: "Royal Carpet Specialists",
  tagline: "Family-owned carpet, tile, and upholstery cleaning.",
  phone: "(909) 802-4624",
  phoneHref: "tel:+19098024624",
  email: "george@royalcarpetspecialists.com",
  emailHref: "mailto:george@royalcarpetspecialists.com",
  address: "Upland, CA",
  hours: "8am - 6pm",
  facebook: "https://www.facebook.com/royalcarpetspecialists",
  yelp: "https://www.yelp.com/biz/royal-carpet-specialists-la-verne-5",
};

export const serviceSlugs = [
  "carpet-cleaning",
  "tile-cleaning",
  "upholstery-cleaning",
  "fire-restoration",
  "odor-elimination",
  "repair-and-stretch",
  "marble-and-travertine",
  "scotchgard",
] as const;

export type ServiceSlug = (typeof serviceSlugs)[number];

export const services = {
  "carpet-cleaning": {
    title: "Carpet Cleaning",
    eyebrow: "Deep steam cleaning",
    href: "/services/carpet-cleaning",
    icon: Home,
    imagePublicId: "services/carpet-cleaning/truck-mounted-carpet-cleaning-living-room",
    summary:
      "Truck-mounted carpet cleaning that helps remove stains, odors, allergens, and residue so carpets look brighter and stay cleaner longer.",
    intro:
      "Royal Carpet Specialists uses a brushless rotary steam cleaning process designed to restore color and resiliency in a single visit. It is a practical, professional clean for everyday wear, pet traffic, spills, and older carpets that need a reset.",
    bullets: [
      "Truck-mounted hot water extraction",
      "Helps lift stains, soil, allergens, and odors",
      "Low-residue cleaning for a fresher finish",
      "Great for bedrooms, stairs, living rooms, rentals, and move-outs",
    ],
    process: [
      "Walk the areas and identify spots, traffic lanes, and concerns.",
      "Pre-treat problem areas when needed.",
      "Steam clean using professional truck-mounted equipment.",
      "Groom and review the finished work with you before wrapping up.",
    ],
    galleryFolder: "gallery/carpet-cleaning-before-after",
  },
  "tile-cleaning": {
    title: "Tile Cleaning",
    eyebrow: "Tile & grout refresh",
    href: "/services/tile-cleaning",
    icon: Droplets,
    imagePublicId: "services/tile-cleaning/tile-and-grout-cleaning-kitchen-floor",
    summary:
      "Professional tile and grout cleaning for kitchens, bathrooms, entryways, and other hard-surface areas that need a brighter finish.",
    intro:
      "Mopping can leave soil behind in grout lines. A professional tile cleaning helps cut through buildup and bring the surface back to a cleaner, more even look.",
    bullets: [
      "Targets dingy grout lines and surface buildup",
      "Good for kitchens, baths, halls, and entryways",
      "Helps remove everyday soil that regular mopping leaves behind",
      "A strong add-on when carpets are being cleaned too",
    ],
    process: [
      "Inspect tile type, grout condition, and problem areas.",
      "Apply cleaning solution and agitate where needed.",
      "Extract soil and rinse the surface.",
      "Review grout lines and high-traffic areas before finishing.",
    ],
    galleryFolder: "gallery/tile-cleaning-before-after",
  },
  "upholstery-cleaning": {
    title: "Upholstery Cleaning",
    eyebrow: "Furniture refresh",
    href: "/services/upholstery-cleaning",
    icon: Sparkles,
    imagePublicId: "services/upholstery-cleaning/upholstery-cleaning-sofa-chair",
    summary:
      "Refresh sofas, chairs, sectionals, and other upholstered furniture that has collected stains, dust, allergens, and everyday grime.",
    intro:
      "Furniture gets used hard but cleaned rarely. Upholstery cleaning can help restore neglected pieces and make frequently used furniture feel cleaner and more comfortable.",
    bullets: [
      "Great for sofas, chairs, cushions, and sectionals",
      "Targets visible spots and accumulated dirt",
      "Useful for homes with pets, kids, guests, and daily use",
      "Can be paired with Scotchgard protection after cleaning",
    ],
    process: [
      "Check fabric condition and areas of concern.",
      "Pre-treat spots when appropriate.",
      "Clean upholstery with tools suited for furniture and stairs.",
      "Allow proper drying time before heavy use.",
    ],
    galleryFolder: "gallery/upholstery-cleaning-before-after",
  },
  "fire-restoration": {
    title: "Fire Restoration",
    eyebrow: "Damage assessment",
    href: "/services/fire-restoration",
    icon: Flame,
    imagePublicId: "services/fire-restoration/fire-damage-carpet-restoration-assessment",
    summary:
      "Fire-damaged carpet does not always need to be replaced. Call to see whether cleaning or restoration is a realistic option.",
    intro:
      "Fire damage can be complicated, but replacement is not always the only path. Royal Carpet Specialists can assess the situation and explain what may be salvageable.",
    bullets: [
      "Assessment for carpet affected by smoke or fire damage",
      "May help reduce replacement costs when restoration is practical",
      "Best handled with a phone consultation first",
      "Honest guidance when replacement is the better option",
    ],
    process: [
      "Discuss the damage and timing over the phone.",
      "Inspect affected carpet and surrounding areas.",
      "Explain realistic cleaning/restoration options.",
      "Proceed only when the expected result makes sense.",
    ],
    galleryFolder: "gallery/fire-restoration-before-after",
  },
  "odor-elimination": {
    title: "Odor Elimination",
    eyebrow: "Freshen problem areas",
    href: "/services/odor-elimination",
    icon: Wind,
    imagePublicId: "services/odor-elimination/pet-odor-treatment-carpet-cleaning",
    summary:
      "Odor treatment for carpet and upholstery affected by pets, spills, smoke, moisture, or everyday use.",
    intro:
      "Some odors sit below the surface. Odor elimination focuses on the source instead of just covering smells with fragrance.",
    bullets: [
      "Helpful for pet odors, smoke smells, spills, and musty areas",
      "Can be combined with carpet or upholstery cleaning",
      "Targets problem rooms, stairs, furniture, and traffic areas",
      "Best results depend on the source and severity of the odor",
    ],
    process: [
      "Identify the affected areas and likely source.",
      "Apply treatment appropriate for the odor issue.",
      "Clean/extract the area when paired with service.",
      "Review follow-up expectations based on severity.",
    ],
    galleryFolder: "gallery/odor-elimination-before-after",
  },
  "repair-and-stretch": {
    title: "Repair and Stretch",
    eyebrow: "Carpet fixes",
    href: "/services/repair-and-stretch",
    icon: StretchHorizontal,
    imagePublicId: "services/repair-and-stretch/carpet-stretching-repair-wrinkles",
    summary:
      "Repair ripples, wrinkles, loose carpet, and small damaged areas so rooms look cleaner and safer before or after cleaning.",
    intro:
      "Carpet that has loosened, wrinkled, or pulled away can make a room look older than it is. Stretching and repair can improve both appearance and usability.",
    bullets: [
      "Helps correct wrinkles, ripples, and loose carpet",
      "Can improve appearance before a deep cleaning",
      "Useful for trip hazards and worn transition areas",
      "Great for getting more life out of existing carpet",
    ],
    process: [
      "Inspect the loose or damaged area.",
      "Determine whether stretching, repair, or replacement is best.",
      "Make the repair and trim/reset areas as needed.",
      "Clean afterward when requested for a finished look.",
    ],
    galleryFolder: "gallery/repair-and-stretch-before-after",
  },
  "marble-and-travertine": {
    title: "Marble and Travertine",
    eyebrow: "Natural stone care",
    href: "/services/marble-and-travertine",
    icon: Gem,
    imagePublicId: "services/marble-and-travertine/marble-travertine-floor-cleaning-polishing",
    summary:
      "Care for marble and travertine surfaces that need cleaning, attention, or a more polished finished appearance.",
    intro:
      "Natural stone needs a different approach than carpet or standard tile. The goal is to improve appearance while respecting the material.",
    bullets: [
      "Service for marble and travertine floors and surfaces",
      "Helps address dullness and surface soil",
      "Good for entryways, baths, kitchens, and stone floors",
      "Call first to discuss the surface and finish you want",
    ],
    process: [
      "Review the stone type and current finish.",
      "Identify dull areas, soil, or visible wear.",
      "Clean and treat according to the surface needs.",
      "Discuss maintenance recommendations after service.",
    ],
    galleryFolder: "gallery/marble-and-travertine-before-after",
  },
  scotchgard: {
    title: "3M Scotchgard",
    eyebrow: "Protective treatment",
    href: "/services/scotchgard",
    icon: Shield,
    imagePublicId: "services/scotchgard/scotchgard-fabric-carpet-protection-application",
    summary:
      "Add stain and water-repellent protection to carpet, rugs, and upholstery after cleaning.",
    intro:
      "Scotchgard can be applied to various fabrics, furniture, and carpets as a stain and durable water repellent. It is a smart add-on after a fresh cleaning.",
    bullets: [
      "Adds stain and water-repellent protection",
      "Useful for carpet, rugs, sofas, and chairs",
      "Good choice for high-traffic homes and family rooms",
      "Best applied after professional cleaning",
    ],
    process: [
      "Clean the carpet or upholstery first.",
      "Apply protection evenly across the selected surface.",
      "Allow appropriate drying time.",
      "Review simple care tips to help spills blot up easier.",
    ],
    galleryFolder: "gallery/scotchgard-protected-surfaces",
  },
} satisfies Record<ServiceSlug, unknown>;

export type Service = (typeof services)[ServiceSlug];

export const highlights = [
  { icon: BadgeCheck, title: "Family-owned", text: "Local service with direct communication from George." },
  { icon: Brush, title: "30+ years", text: "Decades of carpet, tile, and upholstery cleaning experience." },
  { icon: Home, title: "Residential & small business", text: "Homes, rentals, offices, and move-out cleanings." },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Before & After" },
  { href: "/contact", label: "Contact" },
];
