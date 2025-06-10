import { Button } from "@/components/ui/button";

const featuredItems = [
  {
    id: 1,
    name: "Signature Latte",
    description: "Our house specialty with vanilla and caramel notes",
    price: "$4.50",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Artisan Croissant",
    description: "Buttery, flaky, and baked fresh every morning",
    price: "$3.75",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Avocado Toast",
    description: "Sourdough bread with fresh avocado and microgreens",
    price: "$8.95",
    image: "https://images.unsplash.com/photo-1603046891744-76e6300f82ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
  }
];

const FeaturedItems = () => {
  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Featured Items</h2>
          <div className="w-24 h-1 bg-amber-800 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our most loved menu items, crafted with care using only the finest ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900">{item.name}</h3>
                  <span className="text-amber-800 font-bold">{item.price}</span>
                </div>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button className="w-full bg-amber-800 hover:bg-amber-900">Add to Order</Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-white">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedItems;