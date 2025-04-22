import React, { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "breakfast", name: "Breakfast" },
  { id: "starters", name: "Starters" },
  { id: "new-arrivals", name: "New Arrivals" },
  { id: "combos", name: "Combos" },
  { id: "main-course", name: "Main Course" },
  { id: "breads", name: "Breads" },
  { id: "rice-biryani", name: "Rice and Biryani" },
  { id: "thali", name: "Thali" },
  { id: "snacks", name: "Snacks" },
  { id: "chinese", name: "Chinese" },
  { id: "burgers-sandwiches", name: "Burgers and Sandwiches" },
  { id: "fried-rice-noodles", name: "Fried Rice and Noodles" },
  { id: "soups", name: "Soups" },
  { id: "rolls", name: "Rolls" },
  { id: "accompaniments", name: "Accompaniments" },
];

// Define a proper type for menu items
type MenuItem = {
  name: string;
  description: string;
  price: string;
  category?: string;
  bestseller?: boolean;
  spicy?: boolean;
};

const menuItems: Record<string, MenuItem[]> = {
  breakfast: [
    { name: "Pudina Paratha", description: "Fresh mint flavored paratha, a perfect way to start your day.", price: "₹70" },
    { name: "Mixed Pakoda", description: "Assorted vegetables dipped in chickpea flour batter and deep fried.", price: "₹150" },
  ],
  starters: [
    { name: "Paneer Tikka", description: "Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor.", price: "₹280" },
    { name: "Paneer Achari Tikka", description: "Paneer tikka is an Indian dish made from chunks of paneer marinated in pickling spices and grilled in a tandoor.", price: "₹320" },
    { name: "Chaap Tikka", description: "Marinated soya chaap grilled to perfection in the tandoor.", price: "₹250" },
  ],
  "main-course": [
    { name: "Jeera Aloo", description: "Potatoes tempered with cumin seeds and spices.", price: "₹160", category: "Aloo Main Course" },
    { name: "Aloo Achari", description: "Potatoes cooked with pickling spices for a tangy flavor.", price: "₹160", category: "Aloo Main Course" },
    { name: "Aloo Capsicum Dry", description: "Stir-fried potatoes and capsicum with aromatic spices.", price: "₹180", category: "Aloo Main Course" },
    { name: "Aloo Do Pyaza", description: "Potatoes cooked with layers of onions and spices.", price: "₹180", category: "Aloo Main Course" },
    { name: "Dum Aloo Kashmiri", description: "Baby potatoes in a rich, slightly sweet gravy.", price: "₹220", category: "Aloo Main Course" },
    { name: "Matar Mushroom Gravy", description: "Green peas and mushrooms cooked in a flavorful gravy.", price: "₹240", category: "Mushroom Main Course" },
    { name: "Kadai Mushroom Gravy", description: "Mushrooms cooked with bell peppers in a spicy kadai masala.", price: "₹260", category: "Mushroom Main Course" },
    { name: "Dal Makhani", description: "The typical vegetables included in mixed vegetable are cauliflower, carrots, cabbage, french beans.", price: "₹190", category: "Dal", bestseller: true },
    { name: "Yellow Dal Tadka", description: "The literal translation of dal tadka is dal lentil and tadka tempering.", price: "₹180", category: "Dal" },
    { name: "Shahi Paneer", description: "Shahi paneer recipe delicious, rich and creamy restaurant style shahi paneer.", price: "₹240", category: "Paneer Main Course", bestseller: true },
    { name: "Kadai Paneer", description: "Kadai paneer is a spicy, warming, flavorful and super delicious dish made by cooking paneer in a fragrant gravy.", price: "₹280", category: "Paneer Main Course", bestseller: true, spicy: true },
    { name: "Paneer Butter Masala", description: "Punjabi paneer butter masala is one of the most popular paneer recipes in Indian cuisine.", price: "₹260", category: "Paneer Main Course", bestseller: true },
  ],
  breads: [
    { name: "Tandoori Roti", description: "Soft thin refined and whole wheat flour rotis that are served folded like a handkerchief.", price: "₹20", category: "Roti" },
    { name: "Tandoori Butter Roti", description: "Indian flat bread baked on a tawa, topped with butter.", price: "₹25", category: "Roti" },
    { name: "Naan", description: "Leavened bread baked in a tandoor.", price: "₹50", category: "Naan" },
    { name: "Butter Naan", description: "Indian bread baked in Indian clay oven with a touch of butter.", price: "₹60", category: "Naan" },
    { name: "Lachha Paratha", description: "Layered flaky flatbread.", price: "₹50", category: "Paratha" },
    { name: "Pudina Paratha", description: "Flatbread infused with fresh mint.", price: "₹70", category: "Paratha" },
  ],
  "rice-biryani": [
    { name: "Plain Rice", description: "Steamed basmati rice.", price: "₹120" },
    { name: "Jeera Rice", description: "Basmati rice tempered with cumin seeds.", price: "₹130" },
    { name: "Veg Biryani", description: "A classic dish made by layering rice over slow cooked mixed veg gravy.", price: "₹220" },
  ],
  thali: [
    { name: "Thali", description: "Dal Tadka+Matar Paneer+Rice+2 Butter Roti+Raita+Salad [Subject to Availability]", price: "₹249" },
    { name: "Special Thali", description: "Dal Makhani+Shahi Paneer+Mixed Veg+1 Butter Naan+1 Laccha Paratha+Salad+Raita+Rice+Gulab Jamun [1 Piece] [Subject to Availability]", price: "₹299", bestseller: true },
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
            {/* Featured categories section */}
            {Object.keys(menuItems).map((categoryKey) => {
              const categoryName = categories.find(cat => cat.id === categoryKey)?.name;
              const items = menuItems[categoryKey as keyof typeof menuItems];
              
              if (!items || items.length === 0) return null;
              
              // Group by subcategory if present
              const subcategories: Record<string, any[]> = {};
              items.forEach(item => {
                const subcategory = item.category || 'default';
                if (!subcategories[subcategory]) {
                  subcategories[subcategory] = [];
                }
                subcategories[subcategory].push(item);
              });
              
              return (
                <div key={categoryKey} id={categoryKey} className="mb-16 scroll-mt-28">
                  <h2 className="text-3xl font-playfair font-bold text-indiancharcoal mb-8 text-center">
                    {categoryName}
                  </h2>
                  
                  {Object.keys(subcategories).length > 1 ? (
                    // Display with subcategories
                    Object.entries(subcategories).map(([subcatName, subcatItems]) => (
                      <div key={subcatName} className="mb-10">
                        {subcatName !== 'default' && (
                          <h3 className="text-xl font-playfair font-semibold text-indianred mb-4 border-b border-indiangold/30 pb-2">
                            {subcatName}
                          </h3>
                        )}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          {subcatItems.map((item, index) => (
                            <div key={index} className="border border-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                              <div className="flex justify-between items-start">
                                <h3 className="text-xl font-playfair font-semibold text-indiancharcoal flex items-center">
                                  {item.name}
                                  {item.bestseller && (
                                    <span className="ml-2 text-xs bg-indiangold text-white px-2 py-0.5 rounded-full">Bestseller</span>
                                  )}
                                  {item.spicy && (
                                    <span className="ml-2 text-xs bg-indianred text-white px-2 py-0.5 rounded-full">Spicy</span>
                                  )}
                                </h3>
                                <span className="text-indianred font-semibold">{item.price}</span>
                              </div>
                              <p className="text-gray-600 mt-2">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    // Display without subcategories
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {items.map((item, index) => (
                        <div key={index} className="border border-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                          <div className="flex justify-between items-start">
                            <h3 className="text-xl font-playfair font-semibold text-indiancharcoal flex items-center">
                              {item.name}
                              {item.bestseller && (
                                <span className="ml-2 text-xs bg-indiangold text-white px-2 py-0.5 rounded-full">Bestseller</span>
                              )}
                              {item.spicy && (
                                <span className="ml-2 text-xs bg-indianred text-white px-2 py-0.5 rounded-full">Spicy</span>
                              )}
                            </h3>
                            <span className="text-indianred font-semibold">{item.price}</span>
                          </div>
                          <p className="text-gray-600 mt-2">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="text-center mt-12 space-y-4">
              <p className="text-gray-600">This is just a sample of our extensive menu. </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Menu;
