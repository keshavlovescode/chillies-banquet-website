
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2 } from "lucide-react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    name: "Kadai Paneer",
    description: "Kadai paneer is a spicy, warming, flavorful and super delicious dish made by cooking paneer in a fragrant gravy.",
    price: "₹280",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    bestseller: true,
  },
  {
    name: "Dal Makhani",
    description: "The typical vegetables included in mixed vegetable are cauliflower, carrots, cabbage, french beans.",
    price: "₹190",
    image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
    bestseller: true,
  },
  {
    name: "Special Thali",
    description: "Dal Makhani+Shahi Paneer+Mixed Veg+Butter Naan+Laccha Paratha+Salad+Raita+Rice+Gulab Jamun",
    price: "₹299",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    bestseller: true,
  },
  {
    name: "Veg Biryani",
    description: "A classic dish made by layering rice over slow cooked mixed veg gravy.",
    price: "₹220",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
];

const MenuHighlights = () => {
  return (
    <section className="py-20 bg-indiancream spice-pattern" id="menu-highlights">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-indiancharcoal mb-4 animate-fade-up">
            Our Signature <span className="text-indianred">Dishes</span>
          </h2>
          <div className="w-20 h-1 bg-indiangold mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-indianbrown">
            Explore our chef's selection of the finest Indian cuisine, prepared with authentic
            recipes and the freshest ingredients to delight your taste buds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {menuItems.map((item, index) => (
            <Card 
              key={index} 
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {item.bestseller && (
                  <div className="absolute top-2 right-2 bg-indiangold text-white text-xs px-2 py-1 rounded-full">
                    Bestseller
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-5 bg-white">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-playfair text-xl font-semibold text-indiancharcoal">{item.name}</h3>
                  <span className="text-indianred font-semibold">{item.price}</span>
                </div>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/menu">
            <Button className="bg-indianred hover:bg-indianred/90 text-white mx-2 transform hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-lg">
              View Complete Menu
            </Button>
          </Link>
        </div>
        
        {/* Banquet Hall Promo */}
        <div className="mt-12 p-6 banquet-highlight rounded-lg max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-4">
            <h3 className="text-lg font-semibold text-indianbrown">Hosting an event?</h3>
            <p className="text-sm text-indianbrown/80">Book our elegant banquet hall for your special occasions</p>
          </div>
          <Link to="/banquet">
            <Button className="bg-indianbrown hover:bg-indianbrown/90 text-white whitespace-nowrap transform hover:scale-105 transition-transform duration-300">
              <Building2 className="mr-2 h-4 w-4" /> Explore Banquet Hall
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
