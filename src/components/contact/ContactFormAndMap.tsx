
import React from "react";
import ContactForm from "./ContactForm";
import LocationMap from "./LocationMap";

const ContactFormAndMap = () => {
  return (
    <section className="py-16 bg-indiancream">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ContactForm />

          {/* Map and Address */}
          <LocationMap />
        </div>
      </div>
    </section>
  );
};

export default ContactFormAndMap;
