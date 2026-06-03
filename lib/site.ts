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
  tagline: "Owner-operated carpet, tile, and upholstery cleaning.",
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
    imagePublicId: "services/carpet",
    summary:
      "Truck-mounted carpet cleaning for traffic lanes, pet spots, spills, stairs, rentals, and rooms that need a real reset.",
    intro:
      "Royal Carpet Specialists cleans lived-in carpet: traffic lanes, pet spots, spills, stairs, rentals, and older rooms that have not been cleaned in a while. George uses truck-mounted steam cleaning equipment and keeps the process direct, careful, and practical.",
    bullets: [
      "Truck-mounted hot water extraction for deeper cleaning",
      "Good for bedrooms, stairs, living rooms, rentals, and move-outs",
      "Helps with pet spots, traffic lanes, spills, and everyday soil",
      "Optional Scotchgard protection after cleaning",
    ],
    process: [
      "Walk the areas and identify spots, traffic lanes, and concerns.",
      "Pre-treat problem areas when needed.",
      "Steam clean using professional truck-mounted equipment.",
      "Groom and review the finished work with you before wrapping up.",
    ],
    galleryFolder: "gallery/carpet",
  },
  "tile-cleaning": {
    title: "Tile Cleaning",
    eyebrow: "Tile & grout refresh",
    href: "/services/tile-cleaning",
    icon: Droplets,
    imagePublicId: "services/tile",
    summary:
      "Tile and grout cleaning for kitchens, bathrooms, entryways, and hard-surface areas that mopping cannot fully brighten.",
    intro:
      "Mopping can leave soil behind in grout lines, especially in kitchens, baths, entryways, and busy hallways. George can clean tile and grout while the truck is already set up for carpet or upholstery.",
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
    galleryFolder: "gallery/tile",
  },
  "upholstery-cleaning": {
    title: "Upholstery Cleaning",
    eyebrow: "Furniture refresh",
    href: "/services/upholstery-cleaning",
    icon: Sparkles,
    imagePublicId: "services/upholstery",
    summary:
      "Cleaning for sofas, chairs, cushions, sectionals, and other upholstered furniture with everyday spots, dust, and use.",
    intro:
      "Furniture gets used every day and cleaned rarely. Upholstery cleaning can refresh sofas, chairs, cushions, and sectionals, especially in homes with pets, kids, guests, and daily use.",
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
    galleryFolder: "gallery/upholstery",
  },
  "fire-restoration": {
    title: "Fire Restoration",
    eyebrow: "Damage assessment",
    href: "/services/fire-restoration",
    icon: Flame,
    imagePublicId: "services/fire",
    summary:
      "Assessment and cleaning guidance for carpet affected by smoke or fire damage when replacement may not be the only option.",
    intro:
      "Fire damage can be complicated, but replacement is not always the only path. George can look at the affected carpet and explain what may be realistic before you spend money replacing everything.",
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
    galleryFolder: "gallery/fire",
  },
  "odor-elimination": {
    title: "Odor Elimination",
    eyebrow: "Freshen problem areas",
    href: "/services/odor-elimination",
    icon: Wind,
    imagePublicId: "services/odor",
    summary:
      "Odor treatment for carpet and upholstery affected by pets, spills, smoke, moisture, or everyday use.",
    intro:
      "Some odors sit below the surface. Odor treatment focuses on the source instead of just covering smells with fragrance, including many pet odor situations.",
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
    galleryFolder: "gallery/odor",
  },
  "repair-and-stretch": {
    title: "Repair and Stretch",
    eyebrow: "Carpet fixes",
    href: "/services/repair-and-stretch",
    icon: StretchHorizontal,
    imagePublicId: "services/stretch",
    summary:
      "Repair ripples, wrinkles, loose carpet, and small damaged areas so rooms look cleaner and safer.",
    intro:
      "Carpet that has loosened, wrinkled, or pulled away can make a room look older than it is. Stretching and repair can improve appearance, reduce trip hazards, and help you get more life out of existing carpet.",
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
    galleryFolder: "gallery/stretch",
  },
  "marble-and-travertine": {
    title: "Marble and Travertine",
    eyebrow: "Natural stone care",
    href: "/services/marble-and-travertine",
    icon: Gem,
    imagePublicId: "services/marble",
    summary:
      "Cleaning and care for marble and travertine surfaces that need attention, refreshment, or a cleaner finish.",
    intro:
      "Natural stone needs a different approach than carpet or standard tile. George can talk through the surface, the current finish, and what kind of result is realistic before starting.",
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
    galleryFolder: "gallery/marble",
  },
  scotchgard: {
    title: "3M Scotchgard",
    eyebrow: "Protective treatment",
    href: "/services/scotchgard",
    icon: Shield,
    imagePublicId: "services/scotchgard",
    summary:
      "Add stain and water-repellent protection to carpet, rugs, and upholstery after cleaning.",
    intro:
      "Scotchgard can be applied to carpet, rugs, and many upholstery fabrics after cleaning. It is a smart add-on for busy homes, family rooms, stairs, and furniture that gets used often.",
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
    galleryFolder: "gallery/scotchgard",
  },
} satisfies Record<ServiceSlug, unknown>;

export type Service = (typeof services)[ServiceSlug];

export const highlights = [
  {
    icon: BadgeCheck,
    title: "Owner-operated",
    text: "When you call, you talk with George directly instead of a call center.",
  },
  {
    icon: Brush,
    title: "30+ years",
    text: "Decades of carpet, tile, upholstery, repair, and odor work.",
  },
  {
    icon: Home,
    title: "Two-person local crew",
    text: "Most jobs are handled by George and one helper, not a rotating crew.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const serviceAreas = [
  "Upland",
  "La Verne",
  "Claremont",
  "Rancho Cucamonga",
  "Ontario",
  "Montclair",
  "Pomona",
  "San Dimas",
  "Glendora",
  "Chino",
  "Chino Hills",
  "Fontana",
  "Rialto",
  "Covina",
  "Walnut",
  "Diamond Bar",
];

export const appointmentPrep = [
  "Please make sure there is access to a working outdoor hose spigot for the truck-mounted cleaning system.",
  "Clear a parking spot as close as practical to the rooms being cleaned so the hoses can reach safely.",
  "Pick up small items, cords, toys, and breakables before the appointment.",
  "Move small furniture if you can. If something is difficult, ask George what makes sense when you schedule.",
  "Point out pet spots, stains, odors, delicate areas, or carpet repairs before cleaning starts.",
];

export const faqs = [
  {
    question: "Do you need access to water?",
    answer:
      "Yes. For most truck-mounted cleaning jobs, George needs access to a working outdoor hose spigot and a parking spot close enough for the hoses to reach the cleaning area.",
  },
  {
    question: "How long does carpet take to dry?",
    answer:
      "Most carpet is dry the same day or overnight. A practical range is about 6 to 24 hours depending on carpet thickness, humidity, airflow, soil level, and whether protector was applied. Fans, air conditioning, and open interior doors can help.",
  },
  {
    question: "Do I need to move furniture?",
    answer:
      "Please pick up small items and move light furniture if you can. George can talk through larger pieces when you schedule and help decide what should be moved for the job.",
  },
  {
    question: "Can you remove pet odor?",
    answer:
      "Yes, pet odor treatment is available for carpet and upholstery. Results depend on the source and how deep the odor has reached, so it helps to point out every affected area before cleaning starts.",
  },
  {
    question: "Do you clean stairs and upholstery?",
    answer:
      "Yes. Royal Carpet Specialists cleans carpeted stairs, sofas, chairs, cushions, sectionals, and other upholstery.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Royal Carpet Specialists is based in Upland and regularly serves nearby Inland Empire and foothill communities. Larger jobs may be possible farther out, so call to confirm.",
  },
];
