export const ProductsSection = () => {
  const productCategories = [
  {
    category: "Whole Spices",
    items: [
      {
        name: "Black Peppercorn",
        image:
          "https://png.pngtree.com/thumb_back/fh260/background/20220311/pngtree-black-pepper-hd-photography-material-image_1031696.jpg",
      },
      {
        name: "White Peppercorn",
        image:
          "https://ceylonspicesnb.com/wp-content/uploads/2021/10/w-ppr.png",
      },
      {
        name: "Coriander Seed",
        image:
          "https://cdn.vegetariantimes.com/wp-content/uploads/2017/01/edible-gardening-101-harvesting-coriander-seeds-2-corriander-seeds-leaves-powder.jpg",
      },
      {
        name: "Star Anise",
        image:
          "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTe8WNjGdeOymZhUf38VyVNhisn1yVoxVj-d0BZAKX83lgKGIHQRxTISgq2V5h_Xaz9jzuutGKfXxXsWVyz7NLVhWr49V_LvWVOfkDFqA",
      },
      {
        name: "Cinnamon Stick",
        image:
          "https://www.biovie.fr/1929-medium_default/organic-cinnamon-sticks-low-temperature-dried.webp",
      },
      {
        name: "Candlenut",
        image:
          "https://hbnindonesia.co.id/wp-content/uploads/2024/07/Gemini_Generated_Image_axjmbqaxjmbqaxjm-1-e1722304461297-1024x577.jpeg",
      },
      {
        name: "Small Red Chili",
        image:
          "https://asianinspirations.com.au/wp-content/uploads/2018/09/Birds-Eye-Chilli.jpg",
      },
      {
        name: "Cumin Seeds",
        image:
          "https://media.post.rvohealth.io/wp-content/uploads/sites/3/2020/02/319562_2200-800x1200.jpg",
      },
    ],
  },
  {
    category: "Ground & Powdered Spices",
    items: [
      {
        name: "Chilli Powder",
        image: "https://i.pinimg.com/1200x/8c/c9/b1/8cc9b160325c17ef11a1d7bd98ff2a46.jpg"
      },
      {
        name: "Chilli Pieces",
        image: "https://i.pinimg.com/736x/1f/50/40/1f50403d503213f12dc6ee8fa5781611.jpg",
      },
      {
        name: "Curry Powder",
        image: "https://i.pinimg.com/736x/fa/a9/f6/faa9f690b4879eeb7ed1351aabd248e3.jpg",
      },
      {
        name: "Roasted Curry Powder",
        image: "https://i.pinimg.com/1200x/73/c3/71/73c3710f42c56f11def8cad53b14fa42.jpg",
      },
      {
        name: "Fish Ambulthiyal Powder",
        image: "https://spicerackindia.com/wp-content/uploads/2020/11/fish-masala-powder-500x500-1.jpg",
      },
      {
        name: "Fish Curry Powder",
        image: "https://5.imimg.com/data5/SELLER/Default/2025/1/484887065/KG/HX/BX/107572365/organic-fish-curry-masala-powder-500x500.jpeg",
      },
      {
        name: "Chicken Curry Powder",
        image: "https://i.pinimg.com/736x/42/5a/56/425a5668b1faad954112d7d14552de26.jpg",
      },
      {
        name: "Turmeric Powder",
        image: "https://i.pinimg.com/1200x/80/16/1e/80161eabb977916628dbf206c0942594.jpg",
      },
      {
        name: "Black Pepper Powder",
        image: "https://i.pinimg.com/736x/30/72/cc/3072ccf2d818b5e861aeee6cab76f59f.jpg",
      },
      {
        name: "Cinnamon Powder",
        image: "https://i.pinimg.com/736x/b7/b9/21/b7b9219abed48c9049dbe390be5dd76f.jpg",
      },
    ],
  },
  {
    category: "Specialty Spice Products",
    items: [
      {
        name: "Cinnamon C5 Sticks",
        image: "https://i.pinimg.com/1200x/ae/e2/ee/aee2ee48e129d4fe768911286aa7e08c.jpg"
      },
      {
        name: "Cinnamon Chips",
        image: "https://inspiredleaf.com/wp-content/uploads/2021/09/Cinnamon-Chips-Organic-600.jpg"
      },
      {
        name: "Black Pepper Seeds",
        image: "https://m.media-amazon.com/images/I/81WeGFgjcWL.jpg" 
      },
    ],
  },
  {
    category: "Goraka Products",
    items: [
      {
        name: "Goraka",
        image: "https://img.drz.lazcdn.com/static/lk/p/d8ef6572b121c435a5917a25e5811a05.jpg_720x720q80.jpg"
      },
      {
        name: "Goraka Paste",
        image: "https://harithapola.lk/wp-content/uploads/2025/08/gracinia-paste.png"
      },
    ],
  },
  {
    category: "Trade/Raw Spices",
    items: [
      {
        name: "Coriander Seeds",
        image: "https://i.pinimg.com/736x/5f/40/41/5f40417a069e53ae0e7ee0ae8cf3cf48.jpg"
      },
      {
        name: "Cumin Seeds",
        image: "https://i.pinimg.com/736x/e2/12/91/e21291246df1bd18cf528a02cceaf56d.jpg"
      },
      {
        name: "Fennel Seeds",
        image: "https://i.pinimg.com/736x/c2/0c/a6/c20ca6f5d4938d4db642353257200c6b.jpg"
      },
    ],
  },
  {
    category: "Fresh & Aromatic Herbs",
    items: [
      {
        name: "Lemongrass",
        image:
          "https://cdn.shopify.com/s/files/1/0858/1205/2304/files/Get_to_Know_Lemongrass1.jpg?v=1726610567",
      },
      {
        name: "Bayleaf",
        image:
          "https://digital-coven.com/wp-content/uploads/2021/01/screen-shot-2021-01-07-at-13.38.43.png?w=834",
      },
      {
        name: "Citrus Leaves",
        image:
          "https://www.ruralsprout.com/wp-content/uploads/2021/09/lime-leaves-2.jpg.webp",
      },
      {
        name: "Kaffir Lime",
        image:
          "https://quickthai.co/wp-content/uploads/2021/11/Kaffir-Lime.jpg",
      },
    ],
  },
];


  const ProductGrid = ({
    products,
  }: {
    products: {
      name: string;
      image: string;
    }[];
  }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
      {products.map((product) => (
        <div
          key={product.name}
          className="relative overflow-hidden rounded-lg shadow-lg group"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <h3 className="text-white text-xl font-semibold p-6">
              {product.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
  return (
    <section id="products" className="py-20 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-orange-600 mb-10">
          Our Products
        </h2>
        <div className="space-y-16">
          {productCategories.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl md:text-2xl font-bold text-gray-800 mb-8 text-center">
                {category.category}
              </h3>
              <ProductGrid products={category.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
