import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <SmoothScroll />
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section (with integrated client marquee at bottom) */}
      <Hero />

      {/* Separator */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

      {/* More sections will be added here */}
    </div>
  );
}
