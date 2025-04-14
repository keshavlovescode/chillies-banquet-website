
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MenuHighlights from "@/components/MenuHighlights";
import BanquetHall from "@/components/BanquetHall";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    // Set page title and meta description for SEO
    document.title = "Indian Chillies - Authentic Indian Restaurant & Banquet Hall in Modinagar";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Experience authentic North Indian cuisine at Indian Chillies Restaurant. Book our elegant banquet hall for weddings and events in Modinagar. Call +919997761232 for reservations.');
    }
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
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
