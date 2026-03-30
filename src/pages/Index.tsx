// ... (bagian import lainnya tetap sama)
import HeroSection from "./home/_components/HeroSection";
import CategoryIcons from "./home/_components/CategoryIcons";
// BestDealSection sudah dihapus dari sini
import PremiumSection from "./home/_components/PremiumSection";
// ... (bagian data massageCards, woodCards, dll tetap sama)

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-0">
        <HeroSection />
        <CategoryIcons />
        {/* BestDealSection sudah dihapus dari sini */}
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
