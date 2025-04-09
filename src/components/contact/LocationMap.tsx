
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
            <p className="text-gray-600">123 Spice Street</p>
            <p className="text-gray-600">Flavortown, FL 12345</p>
            <p className="text-gray-600">United States</p>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <MapPin className="h-6 w-6 text-indianred mr-3" />
          <div>
            <h3 className="text-lg font-semibold text-indiancharcoal mb-1">Directions</h3>
            <p className="text-gray-600">Located in downtown Flavortown, near City Park. Parking available behind the restaurant.</p>
          </div>
        </div>
      </div>
      
      <div className="h-[300px] rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215663173109!2d-73.98780372374367!3d40.75801057138285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1701696149082!5m2!1sen!2sus"
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
