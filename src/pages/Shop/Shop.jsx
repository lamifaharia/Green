import { useState } from "react";
import {
  FaSearch,
  FaFilter,
  FaSortAmountDown,
} from "react-icons/fa";

import products from "../../data/products";
import ProductCard from "../../components/ProductCard";

const Shop = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("");

  let filteredProducts = [...products];

  // Search
  filteredProducts = filteredProducts.filter((product) =>
    product.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  // Category
  if (category !== "All") {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === category
    );
  }

  // Sort
  if (sort === "low") {
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
    <div className="max-w-screen-2xl mx-auto px-4 py-12">

      {/* Heading */}

      <div className="text-center mb-10">

        <h1 className="text-5xl font-bold text-[#123524]">
          Shop Products
        </h1>

        <p className="text-gray-500 mt-3">
          Fresh Organic Foods Delivered To Your Doorstep
        </p>

      </div>

      {/* Filter Card */}

      <div className="bg-white shadow-xl rounded-3xl p-6 border border-gray-100 mb-10">

        <div className="grid md:grid-cols-4 gap-5">

          {/* Search */}

          <label className="input input-bordered rounded-xl flex items-center gap-3 h-14 focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-200">

            <FaSearch className="text-green-600" />

            <input
              type="text"
              className="grow"
              placeholder="Search products..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </label>

          {/* Category */}

          <label className="input input-bordered rounded-xl flex items-center gap-3 h-14 focus-within:border-green-600">

            <FaFilter className="text-green-600" />

            <select
              className="grow bg-transparent outline-none"
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
            >
              <option>All</option>
              <option>Fruits</option>
              <option>Vegetables</option>
              <option>Dairy</option>
            </select>

          </label>

          {/* Sort */}

          <label className="input input-bordered rounded-xl flex items-center gap-3 h-14 focus-within:border-green-600">

            <FaSortAmountDown className="text-green-600" />

            <select
              className="grow bg-transparent outline-none"
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
            >
              <option value="">
                Sort By Price
              </option>

              <option value="low">
                Low → High
              </option>

              <option value="high">
                High → Low
              </option>

            </select>

          </label>

          {/* Clear */}

          <button
            className="btn btn-success rounded-xl h-14"
            onClick={() => {
              setSearch("");
              setCategory("All");
              setSort("");
            }}
          >
            Clear Filters
          </button>

        </div>

      </div>

      {/* Result */}

      <div className="flex justify-between items-center mb-6">

        <p className="text-lg font-semibold">

          Products Found:

          <span className="text-green-700 ml-2">

            {filteredProducts.length}

          </span>

        </p>

      </div>

      {/* Products */}

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