import { useState } from "react";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { filterProducts } from "../../utils/filterProducts";

const Shop = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");

    const filtered = filterProducts(
        products,
        search,
        category
    );

    return(
        <section className="max-w-7xl mx-auto py-16 px-4">
            <h1 className="text-5xl font-bold text-center mb-8">Shop Organic Products</h1>

            <div className="flex gap-4 mb-8 justify-cneter">
                <input className="input input-bordered" placeholder="
                search products..." onChange={(e) => setSearch(e.target.value)} />

                <select className="select select-bordered" onChange={(e) => setCategory(e.target.value)}>
                    <option value="">All</option>
                    <option value="Fruits">Fruits</option>
                    <option value="Vegetable">Vegetable</option>
                    <option value="Dairy">Dairy</option>
                </select>
            </div>

            {/* PRODUCTS */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filtered.map((product) => (
                    <ProductCard
                    key={product.id}
                    product={product}/>
                ))}
            </div>
        </section>
    );
};

export default Shop;