import { FaCartPlus, FaHeart } from "react-icons/fa";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const { addToWishlist } =
    useWishlist();

  return (
    <div className="card bg-base-100 shadow-xl">

      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover"
        />
      </figure>

      <div className="card-body">

        <h2 className="card-title">
          {product.name}
        </h2>

        <p className="font-bold text-success">
          ${product.price}
        </p>

        <div className="flex gap-2">

          <button
            onClick={() =>
              addToCart(product)
            }
            className="btn btn-success flex-1"
          >
            <FaCartPlus />
            Add Cart
          </button>

          <button
            onClick={() =>
              addToWishlist(product)
            }
            className="btn btn-outline"
          >
            <FaHeart />
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;