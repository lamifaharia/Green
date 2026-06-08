import Hero from "../../components/Hero";
import CategoryCard from "../../components/CategoryCard";
import ProductCard from "../../components/ProductCard";
import Benefits from "../../components/Benefits";
import Newsletter from "../../components/Newsletter";

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

const products = [
  {
    id: 1,
    name: "Fresh Apple",
    price: 5,
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6",
  },
  {
    id: 2,
    name: "Organic Tomato",
    price: 3,
    image:
      "https://images.unsplash.com/photo-1546094096-0df4bcaaa337",
  },
  {
    id: 3,
    name: "Fresh Carrot",
    price: 4,
    image:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37",
  },
];

const Home = () => {
  return (
    <>
      <Hero />

      <section className="py-20 max-w-6xl mx-auto px-5">
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

      <section className="py-20 max-w-6xl mx-auto px-5">
        <h2 className="text-4xl font-bold mb-10 text-center">
          Featured Products
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
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