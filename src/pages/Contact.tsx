
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactFormAndMap from "@/components/contact/ContactFormAndMap";
import SocialMedia from "@/components/contact/SocialMedia";
import FAQ from "@/components/contact/FAQ";

const Contact = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <ContactHero />
        <ContactInfoCards />
        <ContactFormAndMap />
        <SocialMedia />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
