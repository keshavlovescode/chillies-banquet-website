
import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "appetizers", name: "Appetizers" },
  { id: "tandoori", name: "Tandoori Specialties" },
  { id: "curries", name: "Curries" },
  { id: "vegetarian", name: "Vegetarian" },
  { id: "biryanis", name: "Biryanis & Rice" },
  { id: "breads", name: "Breads" },
  { id: "desserts", name: "Desserts" },
  { id: "beverages", name: "Beverages" },
];

const menuItems = {
  appetizers: [
    { name: "Vegetable Samosa", description: "Crispy pastry filled with spiced potatoes and peas.", price: "$5.99" },
    { name: "Onion Bhaji", description: "Crispy onion fritters made with chickpea flour and spices.", price: "$5.99" },
    { name: "Paneer Pakora", description: "Cottage cheese fritters made with chickpea flour and spices.", price: "$6.99" },
    { name: "Chicken Pakora", description: "Tender chicken fritters made with chickpea flour and spices.", price: "$7.99" },
  ],
  tandoori: [
    { name: "Tandoori Chicken", description: "Chicken marinated in yogurt and spices, roasted in a tandoor.", price: "$14.99" },
    { name: "Chicken Tikka", description: "Boneless chicken pieces marinated in yogurt and spices, roasted in a tandoor.", price: "$15.99" },
    { name: "Seekh Kebab", description: "Minced lamb mixed with herbs and spices, roasted in a tandoor.", price: "$16.99" },
    { name: "Tandoori Shrimp", description: "Jumbo shrimp marinated in yogurt and spices, roasted in a tandoor.", price: "$18.99" },
  ],
  curries: [
    { name: "Butter Chicken", description: "Tender chicken cooked in a rich and creamy tomato sauce with aromatic spices.", price: "$16.99" },
    { name: "Chicken Tikka Masala", description: "Grilled chicken pieces in a creamy tomato sauce with aromatic spices.", price: "$16.99" },
    { name: "Lamb Rogan Josh", description: "Tender lamb cooked with aromatic spices in a rich and flavorful sauce.", price: "$18.99" },
    { name: "Goan Fish Curry", description: "Fish cooked in a tangy coconut sauce with spices.", price: "$17.99" },
  ],
  vegetarian: [
    { name: "Paneer Tikka Masala", description: "Grilled cottage cheese cubes in a creamy tomato sauce with aromatic spices.", price: "$15.99" },
    { name: "Dal Makhani", description: "Black lentils cooked with butter and cream in a rich and flavorful sauce.", price: "$13.99" },
    { name: "Chana Masala", description: "Chickpeas cooked with onions, tomatoes, and spices.", price: "$13.99" },
    { name: "Aloo Gobi", description: "Potatoes and cauliflower cooked with onions, tomatoes, and spices.", price: "$13.99" },
  ],
  biryanis: [
    { name: "Vegetable Biryani", description: "Fragrant basmati rice cooked with mixed vegetables and aromatic spices.", price: "$14.99" },
    { name: "Chicken Biryani", description: "Fragrant basmati rice cooked with chicken and aromatic spices.", price: "$16.99" },
    { name: "Lamb Biryani", description: "Fragrant basmati rice cooked with lamb and aromatic spices.", price: "$18.99" },
    { name: "Shrimp Biryani", description: "Fragrant basmati rice cooked with shrimp and aromatic spices.", price: "$19.99" },
  ],
  breads: [
    { name: "Naan", description: "Leavened bread baked in a tandoor.", price: "$3.99" },
    { name: "Garlic Naan", description: "Leavened bread topped with garlic and baked in a tandoor.", price: "$4.99" },
    { name: "Roti", description: "Whole wheat bread baked in a tandoor.", price: "$3.99" },
    { name: "Paratha", description: "Layered whole wheat bread baked in a tandoor.", price: "$4.99" },
  ],
  desserts: [
    { name: "Gulab Jamun", description: "Deep-fried milk solid balls soaked in sugar syrup.", price: "$5.99" },
    { name: "Kheer", description: "Rice pudding made with milk, rice, and sugar, flavored with cardamom and garnished with nuts.", price: "$5.99" },
    { name: "Kulfi", description: "Indian ice cream made with milk, sugar, and flavored with cardamom and nuts.", price: "$5.99" },
    { name: "Gajar Halwa", description: "Carrot pudding made with carrots, milk, sugar, and ghee, garnished with nuts.", price: "$5.99" },
  ],
  beverages: [
    { name: "Mango Lassi", description: "Refreshing yogurt drink flavored with mango.", price: "$4.99" },
    { name: "Sweet Lassi", description: "Refreshing yogurt drink flavored with rose water and cardamom.", price: "$4.99" },
    { name: "Masala Chai", description: "Spiced tea made with milk and a blend of spices.", price: "$3.99" },
    { name: "Indian Coffee", description: "Strong coffee made with milk and sugar.", price: "$3.99" },
  ],
};

const Menu = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-indiancharcoal">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3')", 
              filter: "brightness(0.3)"
            }}
          ></div>
          
          {/* Spice pattern overlay */}
          <div className="absolute inset-0 spice-pattern opacity-30"></div>
          
          {/* Content */}
          <div className="container mx-auto px-4 relative z-10 flex flex-col justify-center items-center h-full text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-4">
              Our <span className="text-indiangold">Menu</span>
            </h1>
            <div className="w-24 h-1 bg-indianred mx-auto my-6"></div>
            <p className="text-white/90 text-lg max-w-2xl">
              Explore our wide selection of authentic Indian dishes prepared with the finest ingredients and traditional recipes.
            </p>
          </div>
        </div>

        {/* Menu Categories Tabs */}
        <div className="bg-indiancream py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="inline-block px-4 py-2 bg-white hover:bg-indianred hover:text-white text-indiancharcoal rounded-full shadow-sm transition-colors"
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Sections */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            {categories.map((category) => (
              <div key={category.id} id={category.id} className="mb-16 scroll-mt-28">
                <h2 className="text-3xl font-playfair font-bold text-indiancharcoal mb-8 text-center">
                  {category.name}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {menuItems[category.id as keyof typeof menuItems].map((item, index) => (
                    <div key={index} className="border border-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-playfair font-semibold text-indiancharcoal">{item.name}</h3>
                        <span className="text-indianred font-semibold">{item.price}</span>
                      </div>
                      <p className="text-gray-600 mt-2">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="text-center mt-12">
              <Button className="bg-indianred hover:bg-indianred/90 text-white">
                Download PDF Menu
              </Button>
            </div>
          </div>
        </div>

        {/* Reservation CTA */}
        <div className="bg-indiancharcoal py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold text-white mb-4">
              Enjoy Our <span className="text-indiangold">Delicious Food</span>
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Make a reservation to experience our authentic Indian cuisine in a warm and welcoming atmosphere.
            </p>
            <Button className="bg-indianred hover:bg-indianred/90 text-white">
              Make a Reservation
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
