export const ProductsSection = () => {
  const spices = [{
    name: "Black Peppercorn",
    image: "https://png.pngtree.com/thumb_back/fh260/background/20220311/pngtree-black-pepper-hd-photography-material-image_1031696.jpg"
  }, {
    name: "White Peppercorn",
    image: "https://ceylonspicesnb.com/wp-content/uploads/2021/10/w-ppr.png"
  }, {
    name: "Coriander Seed",
    image: "https://cdn.vegetariantimes.com/wp-content/uploads/2017/01/edible-gardening-101-harvesting-coriander-seeds-2-corriander-seeds-leaves-powder.jpg"
  }, {
    name: "Star Anise",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTe8WNjGdeOymZhUf38VyVNhisn1yVoxVj-d0BZAKX83lgKGIHQRxTISgq2V5h_Xaz9jzuutGKfXxXsWVyz7NLVhWr49V_LvWVOfkDFqA"
  }, {
    name: "Cinnamon Stick",
    image: "https://www.biovie.fr/1929-medium_default/organic-cinnamon-sticks-low-temperature-dried.webp"
  }, {
    name: "Candlenut",
    image: "https://hbnindonesia.co.id/wp-content/uploads/2024/07/Gemini_Generated_Image_axjmbqaxjmbqaxjm-1-e1722304461297-1024x577.jpeg"
  }, {
    name: "Small Red Chili",
    image: "https://asianinspirations.com.au/wp-content/uploads/2018/09/Birds-Eye-Chilli.jpg"
  }, {
    name: "Cumin Seeds",
    image: "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2020/02/319562_2200-800x1200.jpg"
  }];
  const herbs = [{
    name: "Lemongrass",
    image: "https://cdn.shopify.com/s/files/1/0858/1205/2304/files/Get_to_Know_Lemongrass1.jpg?v=1726610567"
  }, {
    name: "Bayleaf",
    image: "https://digital-coven.com/wp-content/uploads/2021/01/screen-shot-2021-01-07-at-13.38.43.png?w=834"
  }, {
    name: "Citrus Leaves",
    image: "https://www.ruralsprout.com/wp-content/uploads/2021/09/lime-leaves-2.jpg.webp"
  }, {
    name: "Kaffir Lime",
    image: "https://quickthai.co/wp-content/uploads/2021/11/Kaffir-Lime.jpg"
  }];
  const ProductGrid = ({
    products
  }: {
    products: {
      name: string;
      image: string;
    }[];
  }) => <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map(product => <div key={product.name} className="relative overflow-hidden rounded-lg shadow-lg group">
          <img src={product.image} alt={product.name} className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <h3 className="text-white text-xl font-semibold p-6">
              {product.name}
            </h3>
          </div>
        </div>)}
    </div>;
  return <section id="products" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          Our Products
        </h2>
        <div className="space-y-16">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Spices
            </h3>
            <ProductGrid products={spices} />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
              Herbs
            </h3>
            <ProductGrid products={herbs} />
          </div>
        </div>
      </div>
    </section>;
};