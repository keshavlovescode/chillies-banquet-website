
import React from "react";
import { Instagram } from "lucide-react";

const SocialMedia = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-playfair font-bold text-indiancharcoal mb-4">
            Connect With <span className="text-indianred">Us</span>
          </h2>
          <div className="w-20 h-1 bg-indiangold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700 mb-8">
            Follow us on social media for updates, special offers, and behind-the-scenes content.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/indian_chillies_restaurant/" target="_blank" rel="noopener noreferrer" className="p-4 bg-indiancream rounded-full transition-colors hover:bg-indianred hover:text-white">
              <Instagram className="h-8 w-8" />
            </a>
            <a href="https://www.zomato.com/modinagar/indian-chillies-restaurant-modinagar-locality/order" target="_blank" rel="noopener noreferrer" className="p-4 bg-indiancream rounded-full transition-colors hover:bg-indianred hover:text-white flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor">
                <path d="M12.141 0.439l3.585 7.839 8.034 0.696c0.381 0.033 0.73 0.216 0.965 0.505 0.236 0.29 0.347 0.661 0.308 1.031-0.024 0.232-0.115 0.452-0.254 0.637l-5.854 6.24 1.746 7.976c0.086 0.394-0.022 0.805-0.283 1.091-0.262 0.286-0.639 0.449-1.033 0.438-0.191 0.01-0.379-0.022-0.54-0.106l-7.348-4.177-7.348 4.173c-0.166 0.086-0.362 0.124-0.57 0.101-0.398 0.011-0.775-0.152-1.037-0.439-0.262-0.286-0.369-0.697-0.283-1.091l1.744-7.997-5.832-6.211c-0.14-0.188-0.231-0.407-0.254-0.648-0.040-0.372 0.07-0.744 0.308-1.035 0.236-0.283 0.584-0.458 0.965-0.491l8.025-0.696 3.584-7.839c0.149-0.348 0.43-0.626 0.783-0.762 0.353-0.136 0.746-0.128 1.094 0.022 0.194 0.079 0.366 0.201 0.498 0.359 0.114 0.14 0.194 0.3 0.257 0.484z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
