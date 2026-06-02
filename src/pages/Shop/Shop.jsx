import ProductCard from "../../components/ProductCard";
import products from "../../data/products";

const Shop = () => {
    return (
        <section className="max-w-7xl mx-auto py-16 px-4">
            <h1 className="text-5xl font-bold text-center mb-10">Shop Organic Products</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.map((product) => (

                <ProductCard key={products.id} product={product} />
                ))}
            </div>
        </section>
    );
};

export default Shop;