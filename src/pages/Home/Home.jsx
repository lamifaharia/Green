import Benefits from "../../components/Benefits";
import Hero from "../../components/Hero";
import Newsletter from "../../components/Newsletter";
import ProductCard from "../../components/ProductCard";
import Testimonial from "../../components/Testimonial";

import products from "../../data/products"

const Home = () => {
    return (
        <>
        <Hero />

        <Benefits />

        <section className="max-w-7xl mx-auto py-16 px-4">
            <h2 className="text-4xl font-bold text-center mb-8">
                Featured Products
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                <ProductCard key={product.id} product={product}
                 />
                ))}
            </div>
        </section>

        <Testimonial />

        <Newsletter />
        </>
    );
};

export default Home;