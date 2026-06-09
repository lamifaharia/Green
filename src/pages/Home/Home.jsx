import Hero from "../../components/Hero";
import CategoryCard from "../../components/CategoryCard";
import ProductCard from "../../components/ProductCard";
import Benefits from "../../components/Benefits";
import Newsletter from "../../components/Newsletter";
import products from "../../data/products";

const categories = [
  {
    title: "Vegetables",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999",
  },
  {
    title: "Fruits",
    image:
      "https://images.unsplash.com/photo-1619566636858-adf3ef46400b",
  },
  {
    title: "Organic Foods",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  },
];



const Home = () => {
  return (
    <>
      <Hero />

      <section className="py-20 max-w-screen-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              {...category}
            />
          ))}
        </div>
      </section>

      <section className="py-20 max-w-screen-2xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </section>

      <Benefits />

      <Newsletter />
    </>
  );
};

export default Home;