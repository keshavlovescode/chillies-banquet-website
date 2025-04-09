
import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-indiancharcoal">
            Contact <span className="text-indianred">Us</span>
          </h2>
          <div className="w-24 h-1 bg-indianred mx-auto my-4"></div>
          <p className="text-gray-600 max-w-xl mx-auto">
            We'd love to hear from you! Visit us, call us, or send us a message.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="bg-indiancream p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-playfair font-semibold text-indiancharcoal mb-6">
                Get in Touch
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="mr-3 h-5 w-5 text-indianred shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-indiancharcoal">Our Location</h4>
                    <p className="text-gray-600">Near Sikhera Road, Delhi-Meerut Road, Opposite Umesh Park, Modinagar, Uttar Pradesh 201204</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="mr-3 h-5 w-5 text-indianred shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-indiancharcoal">Phone Number</h4>
                    <p className="text-gray-600">
                      <a href="tel:+919997761232" className="hover:text-indianred transition-colors">+91 999-776-1232</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="mr-3 h-5 w-5 text-indianred shrink-0 mt-1" />
                  <div>
                    <h4 className="font-medium text-indiancharcoal">Opening Hours</h4>
                    <p className="text-gray-600">Monday - Sunday: 8:00 AM - 11:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <img 
              src="/lovable-uploads/84c153ab-5592-47a7-90bb-d113716b8c4a.png" 
              alt="Indian Chillies Restaurant Front" 
              className="rounded-lg shadow-md mb-4 w-full h-auto"
            />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3494.4408283402743!2d77.57290047548614!3d28.834376775583854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c63a8a02d2831%3A0x7dfd8be2c6ede9f1!2sIndian%20Chillies%20Restaurant!5e0!3m2!1sen!2sin!4v1712338800456!5m2!1sen!2sin" 
              width="100%" 
              height="200" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
              title="Indian Chillies Restaurant Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
