
import React from "react";

const FAQ = () => {
  return (
    <section className="py-16 bg-indiancream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-indiancharcoal mb-4">
            Frequently Asked <span className="text-indianred">Questions</span>
          </h2>
          <div className="w-20 h-1 bg-indiangold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-700">
            Find answers to our most commonly asked questions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold text-indiancharcoal mb-2">Do you take reservations?</h3>
              <p className="text-gray-600">Yes, we recommend making reservations, especially for dinner and weekends. You can make a reservation online or by calling us.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold text-indiancharcoal mb-2">Do you offer vegetarian options?</h3>
              <p className="text-gray-600">Yes, we have an extensive vegetarian menu with many delicious options to choose from.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold text-indiancharcoal mb-2">Can you accommodate dietary restrictions?</h3>
              <p className="text-gray-600">Yes, we can accommodate various dietary restrictions. Please inform your server about any allergies or dietary needs when ordering.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold text-indiancharcoal mb-2">How do I book the banquet hall for an event?</h3>
              <p className="text-gray-600">You can book our banquet hall by contacting our events coordinator. We recommend booking at least 2-3 months in advance for large events.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
