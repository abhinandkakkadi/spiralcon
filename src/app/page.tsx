import HeroSlider from "@/components/home/HeroSlider";
import ServicesOverview from "@/components/home/ServicesOverview";
import StatsSection from "@/components/home/StatsSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import AboutBanner from "@/components/home/AboutBanner";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ServicesOverview />
      <StatsSection />
      <FeaturedProjects />
      <AboutBanner />
    </>
  );
}
