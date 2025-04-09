
import React from "react";

const ContactHero = () => {
  return (
    <div className="relative h-[40vh] bg-indiancharcoal">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')", 
          filter: "brightness(0.3)"
        }}
      ></div>
      
      {/* Spice pattern overlay */}
      <div className="absolute inset-0 spice-pattern opacity-30"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
          Contact <span className="text-indiangold">Us</span>
        </h1>
        <div className="w-24 h-1 bg-indianred mx-auto my-6"></div>
        <p className="text-white/90 text-lg max-w-2xl">
          Get in touch with us for reservations, inquiries, or feedback.
        </p>
      </div>
    </div>
  );
};

export default ContactHero;
