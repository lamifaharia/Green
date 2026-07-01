import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice,
    totalItems,
  } = useCart();

  if (!cart || cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Your Cart is Empty 🛒
        </h1>

        <p className="mb-6 text-gray-500">
          Add some organic products to get started.
        </p>

        <Link
          to="/shop"
          className="btn btn-success"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">

        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">

          {cart.map((item) => (
            <div
              key={item.id}
              className="card bg-base-100 shadow-md"
            >
              <div className="card-body">

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">

                  <div>
                    <h2 className="text-xl font-bold">
                      {item.name}
                    </h2>

                    <p className="text-success font-semibold">
                      ${item.price}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      className="btn btn-sm"
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                    >
                      -
                    </button>

                    <span className="font-bold text-lg">
                      {item.quantity}
                    </span>

                    <button
                      className="btn btn-sm"
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                    >
                      +
                    </button>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-lg">
                      $
                      {(item.price * item.quantity).toFixed(2)}
                    </p>

                    <button
                      className="btn btn-error btn-sm mt-2"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      Remove
                    </button>
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* Order Summary */}
        <div>
          <div className="card bg-base-100 shadow-xl sticky top-24">
            <div className="card-body">

              <h2 className="card-title text-2xl">
                Order Summary
              </h2>

              <div className="flex justify-between">
                <span>Total Items</span>
                <span>{totalItems}</span>
              </div>

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <div className="divider"></div>

              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>

              <Link
                to="/checkout"
                className="btn btn-success mt-4"
              >
                Proceed To Checkout
              </Link>

              <Link
                to="/shop"
                className="btn btn-outline"
              >
                Continue Shopping
              </Link>

              <Link
                to="/shop"
                className="btn btn-outline"
              >
                Continue Shopping
              </Link>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;