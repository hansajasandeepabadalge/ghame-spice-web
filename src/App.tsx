import React from "react";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { CertificationsSection } from "./components/CertificationsSection";
import { ProductsSection } from "./components/ProductsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
export function App() {
  return <div className="w-full min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <CertificationsSection />
        <ProductsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>;
}