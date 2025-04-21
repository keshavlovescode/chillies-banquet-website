
import React from "react";
import LocationMap from "./LocationMap";

const ContactFormAndMap = () => {
  return (
    <section className="py-16 bg-indiancream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Only Map and Address now */}
          <LocationMap />
          <div className="mt-6">
            <img 
              src="/lovable-uploads/f1a1fbaa-d8d7-432c-8699-531871093a2f.png" 
              alt="Indian Chillies Restaurant" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormAndMap;

