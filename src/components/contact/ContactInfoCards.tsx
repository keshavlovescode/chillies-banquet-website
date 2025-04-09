
import React from "react";
import { Phone, Clock, MapPin } from "lucide-react";

const ContactInfoCards = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-indiancream p-8 rounded-lg shadow-md text-center">
            <Phone className="h-12 w-12 text-indianred mx-auto mb-4" />
            <h3 className="text-xl font-playfair font-semibold text-indiancharcoal mb-2">Phone</h3>
            <p className="text-gray-700">+91 999-776-1232</p>
          </div>
          
          <div className="bg-indiancream p-8 rounded-lg shadow-md text-center">
            <MapPin className="h-12 w-12 text-indianred mx-auto mb-4" />
            <h3 className="text-xl font-playfair font-semibold text-indiancharcoal mb-2">Address</h3>
            <p className="text-gray-700">Near Sikhera Road, Delhi-Meerut Road</p>
            <p className="text-gray-700">Opposite Umesh Park, Modinagar</p>
          </div>
          
          <div className="bg-indiancream p-8 rounded-lg shadow-md text-center">
            <Clock className="h-12 w-12 text-indianred mx-auto mb-4" />
            <h3 className="text-xl font-playfair font-semibold text-indiancharcoal mb-2">Hours</h3>
            <p className="text-gray-700">Monday - Friday: 11am - 10pm</p>
            <p className="text-gray-700">Saturday - Sunday: 11am - 11pm</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
