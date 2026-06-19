import { useParams } from "react-router-dom";
import products from "../../data/products";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import toast from "react-hot-toast";

const ProductDetails = () => {
  const { id } = useParams();

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <div className="text-center py-20">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <div className="grid md:grid-cols-2 gap-10">

        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-xl shadow-lg"
          />
        </div>

        {/* Details */}
        <div>

          <span className="badge badge-success mb-3">
            {product.category}
          </span>

          <h1 className="text-4xl font-bold mb-4">
            {product.name}
          </h1>

          <p className="text-3xl text-success font-bold mb-4">
            ${product.price}
          </p>

          <p className="text-gray-600 mb-8">
            {product.description}
          </p>

          <div className="flex gap-4">

            <button
              className="btn btn-success"
              onClick={() => {
                addToCart(product);
                toast.success("Added to cart");
              }}
            >
              Add To Cart
            </button>

            <button
              className="btn btn-outline"
              onClick={() => {
                addToWishlist(product);
                toast.success("Added to wishlist");
              }}
            >
              Wishlist
            </button>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetails;