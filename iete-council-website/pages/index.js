import HeroSection       from "@/components/sections/home/HeroSection";
import StatsSection      from "@/components/sections/home/StatsSection";
import AboutSnapshot     from "@/components/sections/home/AboutSnapshot";
import HighlightsSection from "@/components/sections/home/HighlightsSection";
import SocialStrip       from "@/components/sections/home/SocialStrip";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSnapshot />
      <HighlightsSection />
      <SocialStrip />
    </>
  );
}