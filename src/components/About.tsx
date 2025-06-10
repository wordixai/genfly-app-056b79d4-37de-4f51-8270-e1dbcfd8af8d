const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                alt="Cafe interior" 
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-800 text-white p-6 rounded-lg shadow-lg">
                <p className="font-bold text-xl">Est. 2010</p>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <div className="w-24 h-1 bg-amber-800 mb-6"></div>
            <p className="text-lg text-gray-600 mb-6">
              Café Aroma began with a simple passion for exceptional coffee and a desire to create a welcoming space for our community. Founded in 2010 by coffee enthusiasts Maria and James, our café has grown from a small corner shop to the beloved establishment it is today.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We source our beans directly from sustainable farms around the world, ensuring both quality and ethical practices. Every cup is crafted with care by our trained baristas who are as passionate about coffee as we are.
            </p>
            <p className="text-lg text-gray-600">
              Beyond coffee, we're committed to being a positive force in our community, hosting local events, supporting artists, and providing a space where everyone feels welcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;