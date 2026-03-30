import Navbar from "./home/_components/Navbar";
import HeroSection from "./home/_components/HeroSection";
import CategoryIcons from "./home/_components/CategoryIcons";
import PremiumSection from "./home/_components/PremiumSection";
import ServiceSection from "./home/_components/ServiceSection";
import type { TreatmentCard } from "./home/_components/ServiceSection";
import Footer from "./home/_components/Footer";

// ── WhatsApp booking link helper ─────────────────────────────────────────────
const WA_NUMBER = "6281999231518";

function waLink(title: string, duration: string, price: string): string {
  const msg = `Hi, I'd like to book ${title} - ${duration} (${price})`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ── Thumbnail pool ───────────────────────────────────────────────────────────
const T = {
  sig:      "https://images.unsplash.com/photo-1649751295468-953038600bef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  bali:     "https://images.unsplash.com/photo-1611073615452-4889cb93422e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  back:     "https://images.unsplash.com/photo-1650044252595-cacd425982ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  neck:     "https://images.unsplash.com/photo-1706795034887-be9a24d1ac19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  stone:    "https://images.unsplash.com/photo-1610402601271-5b4bd5b3eba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  cup:      "https://images.unsplash.com/photo-1741522509438-a120c0bb5e88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  deep:     "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  foot:     "https://images.unsplash.com/photo-1633526543913-d30e3c230d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  footref:  "https://images.unsplash.com/photo-1728497872607-fa0b98a3eb79?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  scrub:    "https://images.unsplash.com/photo-1709315610156-fda8311ee3e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  sun:      "https://images.unsplash.com/photo-1542848284-8afa78a08ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  wood:     "https://images.unsplash.com/photo-1767043088777-1884c2ef6c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  lymph:    "https://images.unsplash.com/photo-1620051844584-15ac31d5fccd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  remedial: "https://images.unsplash.com/photo-1570174006382-148305ce4972?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  mani:     "https://images.unsplash.com/photo-1613457492120-4fcfbb7c3a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  pedi:     "https://images.unsplash.com/photo-1659391542239-9648f307c0b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  nails:    "https://images.unsplash.com/photo-1772322586785-3a34772cbc61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  facial:   "https://images.unsplash.com/photo-1761718210055-e83ca7e2c9ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  face2:    "https://images.unsplash.com/photo-1516815989420-9cb5ef0fce78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  hair1:    "https://images.unsplash.com/photo-1726555147240-61952754baeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  hairwash: "https://images.unsplash.com/photo-1717160675332-1a8d1080ae3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  haircut:  "https://images.unsplash.com/photo-1718720410628-6aa1b860ea78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  haircut2: "https://images.unsplash.com/photo-1735151225764-eac694642dbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  lash:     "https://images.unsplash.com/photo-1553103326-609d1bd0ca03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  brow:     "https://images.unsplash.com/photo-1737063935340-f9af0940c4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  wax1:     "https://images.unsplash.com/photo-1695044063262-ad2a4837f287?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  wax2:     "https://images.unsplash.com/photo-1529982412356-901cc3a363cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  wax3:     "https://images.unsplash.com/photo-1702261952303-581dd411cc54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
  face3:    "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=120",
};

// ── SECTION 1: MASSAGES ──────────────────────────────────────────────────────
const massageCards: TreatmentCard[] = [
  {
    title: "Deanna Signature Massage",
    description: "Combination Balinese, Shiatsu & Lomi-lomi",
    image: "https://images.unsplash.com/photo-1649751295468-953038600bef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "1.5 Hour", price: "IDR 300.000", thumbnail: T.sig,  bookingLink: waLink("Deanna Signature Massage", "1.5 Hour", "IDR 300.000") },
      { duration: "2 Hour",   price: "IDR 380.000", thumbnail: T.bali, bookingLink: waLink("Deanna Signature Massage", "2 Hour", "IDR 380.000") },
    ],
  },
  {
    title: "Balinese Massage",
    description: "Traditional Balinese techniques for deep relaxation.",
    image: "https://images.unsplash.com/photo-1611073615452-4889cb93422e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "1 Hour",   price: "IDR 200.000", thumbnail: T.bali, bookingLink: waLink("Balinese Massage", "1 Hour", "IDR 200.000") },
      { duration: "1.5 Hour", price: "IDR 280.000", thumbnail: T.sig,  bookingLink: waLink("Balinese Massage", "1.5 Hour", "IDR 280.000") },
      { duration: "2 Hour",   price: "IDR 300.000", thumbnail: T.back, bookingLink: waLink("Balinese Massage", "2 Hour", "IDR 300.000") },
    ],
  },
  {
    title: "Foot Massage",
    description: "Soothing foot massage to revive tired, aching feet.",
    image: "https://images.unsplash.com/photo-1633526543913-d30e3c230d1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "30 Min",   price: "IDR 100.000", thumbnail: T.foot,    bookingLink: waLink("Foot Massage", "30 Min", "IDR 100.000") },
      { duration: "1 Hour",   price: "IDR 150.000", thumbnail: T.footref, bookingLink: waLink("Foot Massage", "1 Hour", "IDR 150.000") },
    ],
  },
];

// ── SECTION 2: DEANNA WOOD THERAPY ──────────────────────────────────────────
const woodCards: TreatmentCard[] = [
  {
    title: "Lymphatic Drainage & Body Sculpting",
    description: "Wood therapy to stimulate lymph flow and sculpt the body.",
    image: "https://images.unsplash.com/photo-1767043088777-1884c2ef6c97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Lymphatic Full Body (1Hr)", price: "IDR 550.000", thumbnail: T.wood,  bookingLink: waLink("Lymphatic Drainage", "1Hr", "IDR 550.000") },
      { duration: "Body Sculpt Full Body (1Hr)", price: "IDR 550.000", thumbnail: T.lymph, bookingLink: waLink("Body Sculpt", "1Hr", "IDR 550.000") },
    ],
  },
  {
    title: "Manicure & Pedicure",
    description: "Professional nail care and polish.",
    image: "https://images.unsplash.com/photo-1613457492120-4fcfbb7c3a5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Manicure Normal Colour", price: "IDR 200.000", thumbnail: T.mani, bookingLink: waLink("Manicure", "Normal", "IDR 200.000") },
      { duration: "Pedicure Normal Colour", price: "IDR 250.000", thumbnail: T.pedi, bookingLink: waLink("Pedicure", "Normal", "IDR 250.000") },
    ],
  },
];

// ── SECTION 3: HAIR & LASH ───────────────────────────────────────────────────
const hairLashCards: TreatmentCard[] = [
  {
    title: "Haircut & Styling",
    description: "Expert cuts and wash services.",
    image: "https://images.unsplash.com/photo-1726555147240-61952754baeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Cut Only",          price: "IDR 200.000", thumbnail: T.haircut,  bookingLink: waLink("Haircut", "Cut Only", "IDR 200.000") },
      { duration: "Hair wash & dry",   price: "IDR 200.000", thumbnail: T.hair1,    bookingLink: waLink("Hair Wash", "Wash & Dry", "IDR 200.000") },
    ],
  },
  {
    title: "Eyelash Extension",
    description: "Lash extensions for bold, defined eyes.",
    image: "https://images.unsplash.com/photo-1553103326-609d1bd0ca03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800",
    options: [
      { duration: "Extension (start from)", price: "IDR 500.000", thumbnail: T.lash, bookingLink: waLink("Eyelash", "Start From", "IDR 500.000") },
    ],
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-0">
        <HeroSection />
        <CategoryIcons />
        <PremiumSection />
        <ServiceSection
          id="treatments"
          title="Massage"
          cards={massageCards}
        />
        <ServiceSection
          id="wood-therapy"
          title="Deanna Wood Therapy"
          cards={woodCards}
          bgLight
        />
        <ServiceSection
          id="hair-lash"
          title="Hair & Lash"
          cards={hairLashCards}
        />
      </main>
    </div>
  );
}
