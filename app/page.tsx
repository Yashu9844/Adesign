import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SmoothScroll from "@/components/SmoothScroll";
import SelectedWork from "@/components/SelectedWork";
import WhatWeDo from "@/components/WhatWeDo";
import HowWeWork from "@/components/HowWeWork";
import TeamSection from "@/components/TeamSection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <SmoothScroll />
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section (with integrated client marquee at bottom) */}
      <Hero />

      {/* Gradient Divider */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

      {/* Selected Work Section */}
      <SelectedWork />

      {/* Gradient Divider */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

      {/* What We Do Section */}
      <WhatWeDo />

      {/* Gradient Divider */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

      {/* How We Work Section */}
      <HowWeWork />

      {/* Gradient Divider */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

      {/* Team Section - Led by the Founders */}
      <TeamSection />

      {/* Gradient Divider */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

      {/* Testimonials - What Clients Say */}
      <Testimonials />

      {/* Gradient Divider */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />

      {/* CTA Section - Ready to Start */}
      <CTASection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
