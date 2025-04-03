
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuHighlights from "@/components/MenuHighlights";
import BanquetHall from "@/components/BanquetHall";
import Testimonials from "@/components/Testimonials";
import Reservation from "@/components/Reservation";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Hero />
        <About />
        <MenuHighlights />
        <BanquetHall />
        <Testimonials />
        <Reservation />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
