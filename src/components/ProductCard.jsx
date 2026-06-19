import { FaCartPlus, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300">
      
      {/* Product Image */}
      <figure className="overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="h-56 w-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </figure>

      {/* Product Info */}
      <div className="card-body">

        <Link to={`/product/${product.id}`}>
          <h2 className="card-title hover:text-success transition-colors">
            {product.name}
          </h2>
        </Link>

        <p className="text-success font-bold text-lg">
          ${product.price}
        </p>

        {/* Actions */}
        <div className="flex gap-2 mt-2">

          <button
            onClick={() => addToCart(product)}
            className="btn btn-success flex-1"
          >
            <FaCartPlus />
            Add Cart
          </button>

          <button
            onClick={() => addToWishlist(product)}
            className="btn btn-outline btn-success"
          >
            <FaHeart />
          </button>

        </div>

        <Link
          to={`/product/${product.id}`}
          className="btn btn-primary w-full mt-3"
        >
          View Details
        </Link>

      </div>
    </div>
  );
};

export default ProductCard;