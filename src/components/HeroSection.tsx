import logo from '../assets/images/logo/logo.png';

export const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById("products");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="hero" className="relative h-screen w-full bg-cover bg-center flex items-center" style={{
    backgroundImage: 'url("https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3")'
  }}>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block mb-8">
          <img
              src={logo}
              alt="Ghame Spice Logo"
              className="h-64 w-auto mx-auto transition-transform duration-500 ease-in-out hover:scale-105"
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Ghame Spice
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Bringing the Finest Ceylon Spices to the World
        </p>
        <button onClick={scrollToProducts} className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors cursor-pointer">
          Explore Our Products
        </button>
      </div>
    </section>;
};