import { motion } from "framer-motion";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <motion.div
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
    >
      {/* Image */}

      <div className="relative overflow-hidden bg-gray-100">

        <motion.img
          whileHover={{
            scale: 1.08,
          }}
          transition={{
            duration: 0.4,
          }}
          src={product.image}
          alt={product.name}
          className="w-full h-72 object-cover"
        />

        <button
          onClick={() => addToWishlist(product)}
          className="absolute top-4 right-4 w-10 h-10 bg-white rounded-md shadow-md flex items-center justify-center text-[#003300] hover:bg-[#003300] hover:text-white transition-all"
        >
          <FaHeart />
        </button>

      </div>

      {/* Content */}

      <div className="p-5">

        <span className="inline-flex px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[#EEF7EE] text-[#003300] rounded-md">
          {product.category}
        </span>

        <h2 className="mt-4 text-2xl font-bold text-gray-900 line-clamp-1">
          {product.name}
        </h2>

        <p className="mt-2 text-gray-500 text-sm leading-6 h-12 overflow-hidden">
          {product.description}
        </p>

        <div className="flex items-center justify-between mt-6">

          <span className="text-3xl font-bold text-[#003300]">
            ${product.price}
          </span>

          <span className="text-xs text-gray-400 uppercase tracking-widest">
            Organic
          </span>

        </div>

        <div className="mt-6 flex gap-3">

          <button
            onClick={() => addToCart(product)}
            className="flex-1 h-11 bg-[#003300] hover:bg-[#145214] text-white rounded-md font-semibold flex items-center justify-center gap-2 transition-all"
          >
            <FaCartPlus />
            Add
          </button>

          <Link
            to={`/product/${product.id}`}
            className="h-11 px-5 border border-[#003300] rounded-md text-[#003300] hover:bg-[#003300] hover:text-white font-semibold flex items-center justify-center transition-all"
          >
            Details
          </Link>

        </div>

      </div>
    </motion.div>
  );
};

export default ProductCard;