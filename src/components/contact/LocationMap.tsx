
import React from "react";
import { MapPin } from "lucide-react";

const LocationMap = () => {
  return (
    <div>
      <h2 className="text-3xl font-playfair font-bold text-indiancharcoal mb-6">
        Our Location
      </h2>
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <div className="flex items-start mb-4">
          <MapPin className="h-6 w-6 text-indianred mr-3 mt-0.5" />
          <div>
            <h3 className="text-lg font-semibold text-indiancharcoal mb-1">Address</h3>
            <p className="text-gray-600">Near Sikhera Road, Delhi-Meerut Road</p>
            <p className="text-gray-600">Opposite Umesh Park, Modinagar</p>
            <p className="text-gray-600">Uttar Pradesh 201204</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <MapPin className="h-6 w-6 text-indianred mr-3" />
          <div>
            <h3 className="text-lg font-semibold text-indiancharcoal mb-1">Directions</h3>
            <p className="text-gray-600">Located on Delhi-Meerut Road, easily accessible from both cities. Ample parking available.</p>
          </div>
        </div>
      </div>
      
      <div className="h-[300px] rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.4408283402743!2d77.57290047548614!3d28.834376775583854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c63a8a02d2831%3A0x7dfd8be2c6ede9f1!2sIndian%20Chillies%20Restaurant!5e0!3m2!1sen!2sin!4v1712338800456!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default LocationMap;
