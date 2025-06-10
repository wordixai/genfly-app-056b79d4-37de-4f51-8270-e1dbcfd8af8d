const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Coffee art"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Coffee cup on table"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Cafe interior"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1515215316771-2742baa337f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Pastries display"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Coffee beans"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1525480122447-64809d765a77?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Barista making coffee"
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Gallery</h2>
          <div className="w-24 h-1 bg-amber-800 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            A glimpse into our cozy atmosphere, delicious offerings, and the craft behind every cup.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-lg h-64 transition-transform hover:scale-105">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;