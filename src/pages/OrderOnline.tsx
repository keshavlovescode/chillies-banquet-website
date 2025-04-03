
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const OrderOnline = () => {
  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const [cartItems, setCartItems] = useState<any[]>([]);

  const menuCategories = [
    { id: "breakfast", name: "Breakfast", count: 2 },
    { id: "starters", name: "Starters", count: 3 },
    { id: "new-arrivals", name: "New Arrivals", count: 2 },
    { id: "combos", name: "Combos", count: 4 },
    { id: "main-course", name: "Main Course", count: 50 },
    { id: "breads", name: "Breads", count: 22 },
    { id: "rice-biryani", name: "Rice and Biryani", count: 6 },
    { id: "thali", name: "Thali", count: 2 },
    { id: "snacks", name: "Snacks", count: 7 },
    { id: "chinese", name: "Chinese", count: 7 },
    { id: "burgers-sandwiches", name: "Burgers and Sandwiches", count: 3 },
    { id: "fried-rice-noodles", name: "Fried Rice and Noodles", count: 11 },
    { id: "soups", name: "Soups", count: 7 },
    { id: "rolls", name: "Rolls", count: 2 },
    { id: "accompaniments", name: "Accompaniments", count: 13 },
  ];

  const menuItems = {
    breakfast: [
      { id: 1, name: "Pudina Paratha", price: 70, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" },
      { id: 2, name: "Mixed Pakoda", price: 150, image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" },
    ],
    starters: [
      { 
        id: 3, 
        name: "Paneer Tikka", 
        price: 280, 
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        description: "Paneer tikka is an Indian dish made from chunks of paneer marinated in spices and grilled in a tandoor."
      },
      { 
        id: 4, 
        name: "Paneer Achari Tikka", 
        price: 320, 
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        description: "Paneer tikka is an Indian dish made from chunks of paneer marinated in pickling spices and grilled in a tandoor."
      },
      { id: 5, name: "Chaap Tikka", price: 250, image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3" },
    ],
    "new-arrivals": [
      { 
        id: 6, 
        name: "Kadai Chaap Gravy", 
        price: 260, 
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        isNew: true 
      },
      { 
        id: 7, 
        name: "Chaap Masala Gravy", 
        price: 240, 
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        isNew: true 
      },
    ],
    combos: [
      { 
        id: 8, 
        name: "Paneer Lababdar Combo", 
        price: 325, 
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        description: "Paneer Lababdar+2 Butter Naan+Salad",
        isBestseller: true
      },
      { 
        id: 9, 
        name: "Kadhai Paneer Combo", 
        price: 340, 
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        description: "Kadai Paneer+2 Butter Naan+Salad",
        isBestseller: true
      },
      { 
        id: 10, 
        name: "Paneer Butter Masala Combo", 
        price: 325, 
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        description: "Paneer Butter Masala+2 Butter Naan+Salad",
        isBestseller: true
      },
      { 
        id: 11, 
        name: "Mega Meal", 
        price: 460, 
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        description: "Dal Makhani+Mix Veg+3 Butter Naan+Onion Vinegar+Chutney",
        isBestseller: true
      },
    ],
    "main-course": [
      { 
        id: 12, 
        name: "Jeera Aloo", 
        price: 160, 
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        category: "Aloo Main Course"
      },
      { 
        id: 13, 
        name: "Aloo Achari", 
        price: 160, 
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        category: "Aloo Main Course"
      },
      { 
        id: 14, 
        name: "Dal Makhani", 
        price: 190, 
        image: "https://images.unsplash.com/photo-1546833998-877b37c2e5c4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        description: "The typical vegetables included in mixed vegetable are cauliflower, carrots, cabbage, french beans.",
        isBestseller: true,
        category: "Dal"
      },
      { 
        id: 15, 
        name: "Shahi Paneer", 
        price: 240, 
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        description: "Shahi paneer recipe - delicious, rich and creamy restaurant style shahi paneer.",
        isBestseller: true,
        category: "Paneer Main Course"
      },
      { 
        id: 16, 
        name: "Kadai Paneer", 
        price: 280, 
        image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        description: "Kadai paneer is a spicy, warming, flavorful and super delicious dish made by cooking paneer in a fragrant gravy.",
        isBestseller: true,
        isSpicy: true,
        category: "Paneer Main Course"
      },
      { 
        id: 17, 
        name: "Malai Kofta", 
        price: 240, 
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
        description: "Soft and delicious malai kofta in a creamy curry, you won't get enough of it!",
        category: "All Time Gravy"
      }
    ],
    "thali": [
      { 
        id: 18, 
        name: "Thali", 
        price: 249, 
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        description: "Dal Tadka+Matar Paneer+Rice+2 Butter Roti+Raita+Salad [Subject to Availability]"
      },
      { 
        id: 19, 
        name: "Special Thali", 
        price: 299, 
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
        description: "Dal Makhani+Shahi Paneer+Mixed Veg+1 Butter Naan+1 Laccha Paratha+Salad+Raita+Rice+Gulab Jamun [1 Piece] [Subject to Availability]",
        isBestseller: true
      }
    ]
  };

  const filteredMenuItems = () => {
    if (!searchTerm) return null;
    
    const results: any[] = [];
    
    Object.keys(menuItems).forEach(category => {
      const items = menuItems[category as keyof typeof menuItems].filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      
      if (items.length > 0) {
        results.push(...items);
      }
    });
    
    return results;
  };

  const addToCart = (item: any) => {
    setCartItems([...cartItems, item]);
  };

  const renderMenuItem = (item: any) => (
    <div key={item.id} className="border border-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between">
        <div className="flex-1">
          <div className="flex items-start gap-2">
            <h3 className="text-xl font-playfair font-semibold text-indiancharcoal">
              {item.name}
              {item.isNew && <Badge className="ml-2 bg-green-500">New</Badge>}
              {item.isBestseller && <Badge className="ml-2 bg-indiangold">Bestseller</Badge>}
              {item.isSpicy && <Badge className="ml-2 bg-indianred">Spicy</Badge>}
            </h3>
          </div>
          <div className="text-indianred font-semibold mt-1">₹{item.price}</div>
          {item.description && <p className="text-gray-600 mt-2 text-sm">{item.description}</p>}
        </div>
        {item.image && (
          <div className="ml-4">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-24 h-24 object-cover rounded-lg"
            />
            <Button 
              onClick={() => addToCart(item)}
              size="sm" 
              className="mt-2 w-full bg-indianred hover:bg-indianred/90 text-white"
            >
              Add
            </Button>
          </div>
        )}
      </div>
    </div>
  );

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
              Order <span className="text-indiangold">Online</span>
            </h1>
            <div className="w-24 h-1 bg-indianred mx-auto my-6"></div>
            <p className="text-white/90 text-lg max-w-2xl">
              Enjoy our delicious meals in the comfort of your home. Order online for pickup or delivery.
            </p>
          </div>
        </div>

        {/* Order Online Section */}
        <div className="bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Left sidebar - Categories */}
              <div className="md:w-1/4">
                <div className="bg-indiancream p-4 rounded-lg sticky top-24">
                  <h2 className="text-xl font-playfair font-bold text-indiancharcoal mb-4">Menu Categories</h2>
                  <div className="space-y-2">
                    {menuCategories.map(category => (
                      <a 
                        key={category.id}
                        href={`#${category.id}`}
                        className="flex justify-between items-center p-2 hover:bg-white rounded transition-colors"
                      >
                        <span className="text-indiancharcoal">{category.name}</span>
                        <span className="text-xs bg-indiangold/20 text-indiancharcoal px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right content - Menu and cart */}
              <div className="md:w-3/4">
                <div className="bg-white rounded-lg">
                  {/* Search bar */}
                  <div className="relative mb-6">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search for dishes..."
                      className="pl-10 pr-4 py-3 w-full border-indiangold/20"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  {/* Cart summary */}
                  {cartItems.length > 0 && (
                    <div className="mb-6 p-4 bg-indiancream rounded-lg flex justify-between items-center">
                      <div>
                        <span className="font-semibold">{cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}</span> in cart
                      </div>
                      <Button className="bg-indianred hover:bg-indianred/90 text-white">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        View Cart
                      </Button>
                    </div>
                  )}

                  {/* Tabs or Search Results */}
                  {searchTerm ? (
                    <div>
                      <h2 className="text-xl font-playfair font-bold text-indiancharcoal mb-4">
                        Search Results for "{searchTerm}"
                      </h2>
                      <div className="space-y-4">
                        {filteredMenuItems()?.length ? (
                          filteredMenuItems()?.map(item => renderMenuItem(item))
                        ) : (
                          <p className="text-center py-8 text-gray-500">No items found matching your search.</p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <Tabs defaultValue="breakfast">
                      <TabsList className="grid grid-cols-3 md:grid-cols-5 mb-6">
                        <TabsTrigger value="breakfast">Breakfast</TabsTrigger>
                        <TabsTrigger value="starters">Starters</TabsTrigger>
                        <TabsTrigger value="new-arrivals">New Arrivals</TabsTrigger>
                        <TabsTrigger value="combos">Combos</TabsTrigger>
                        <TabsTrigger value="main-course">Main Course</TabsTrigger>
                      </TabsList>

                      {Object.keys(menuItems).map(category => (
                        <TabsContent key={category} value={category} className="space-y-4" id={category}>
                          <h2 className="text-2xl font-playfair font-bold text-indiancharcoal mb-4">
                            {menuCategories.find(cat => cat.id === category)?.name}
                          </h2>
                          {menuItems[category as keyof typeof menuItems].map(item => renderMenuItem(item))}
                        </TabsContent>
                      ))}
                    </Tabs>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Download App CTA */}
        <div className="bg-indiancharcoal py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-playfair font-bold text-white mb-4">
              Download Our <span className="text-indiangold">Mobile App</span>
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Get exclusive offers and easier ordering by downloading our mobile app.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-indianred hover:bg-indianred/90 text-white">
                Download for Android
              </Button>
              <Button className="bg-indianred hover:bg-indianred/90 text-white">
                Download for iOS
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderOnline;
