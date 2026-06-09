import { useState } from "react";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard";

const Shop = () => {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("");

    let filteredProducts = [...products];

    //search
    filteredProducts = filteredProducts.filter((product) =>
        product.name
    .toLowerCase()
    .includes(search.toLowerCase())
    );

    //catefgory
    if (category != "All") {
        filteredProducts = filteredProducts.filter(
            (product) => product.category === category
        );
    }

    //sorting
    if ( sort ==="low") {
        filteredProducts.sort(
            (a, b) => a.price - b.price
        );
    }

    if (sort === "high") {
        filteredProducts.sort(
            (a, b) => b.price - a.price
        );
    }

    return (
        <div className="max-w-screen-2xl mx-autp px-4 py-12">
            <h1 className="text-5xl font-bold text-center mb-10">Shop Products</h1>

            <div className="grid:grid-cols-4 gap-4 mb-10">
                <input type="text" placeholder="Search product..." className="input input-bordered w-full" value={search} onChange={(e) => setSearch(e.target.valur)} />

                <select className="select select-bordered w-full" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option>All</option>
                    <option>Fruits</option>
                    <option>Vegetables</option>
                    <option>Dairy</option>
                </select>

                <select className="select select-bordered w-full" value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option value="">Sort Price</option>
                    <option value="">Low → High</option>
                    <option value="">High → Low</option>
                </select>

                <button className="btn btn-error" onClick={() => { 
                    setSearch("");
                    setCategory("");
                    setSort("");
                    }}
                    >
                    Clear Filters
                    </button>
            </div>

            <p className="mb-6 text-lg font-semibold">
                Products Found:
                {" "}
                {filteredProducts.length}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                    <ProductCard
                    key={product.id}
                    product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default Shop;