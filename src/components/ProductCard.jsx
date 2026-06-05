import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  const liked = wishlist.find(
    (p) => p.id === product.id
  );

  return (
    <div className="card bg-base-100 shadow">
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="h-52 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="font-bold">
          {product.name}
        </h2>

        <p>${product.price}</p>

        <div className="flex justify-between items-center">
          <button
            onClick={() => addToCart(product)}
            className="btn btn-success btn-sm"
          >
            Add
          </button>

          <button
            onClick={() =>
              toggleWishlist(product)
            }
          >
            <FaHeart
              color={liked ? "red" : "gray"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;