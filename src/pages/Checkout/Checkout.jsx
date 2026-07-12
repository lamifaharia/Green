import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast";

const Checkout = () => {
  const navigate = useNavigate();

  const {
    cart,
    totalPrice,
    totalItems,
    clearCart,
  } = useCart();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      toast.error("Your cart is empty");
      return;
    }

    console.log("Order Details:", {
      customer: formData,
      products: cart,
      totalPrice,
    });

    toast.success("Order placed successfully!");

    clearCart();

    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
    });

    navigate("/order-success");
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Shipping Information */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">
              Shipping Information
            </h2>

            <form
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input input-bordered w-full"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="input input-bordered w-full"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="input input-bordered w-full"
                value={formData.phone}
                onChange={handleChange}
                required
              />

              <textarea
                name="address"
                rows="4"
                placeholder="Shipping Address"
                className="textarea textarea-bordered w-full"
                value={formData.address}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="btn btn-success w-full"
              >
                Place Order
              </button>
            </form>
          </div>
        </div>

        {/* Order Summary */}
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">
              Order Summary
            </h2>

            {cart.length === 0 ? (
              <p className="text-center text-gray-500">
                No items in cart.
              </p>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b py-3"
                  >
                    <div>
                      <h3 className="font-semibold">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-500">
                        Quantity: {item.quantity}
                      </p>
                    </div>

                    <p className="font-semibold">
                      $
                      {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}

                <div className="divider"></div>

                <div className="flex justify-between">
                  <span>Total Items</span>
                  <span>{totalItems}</span>
                </div>

                <div className="flex justify-between mt-2">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>

                <div className="divider"></div>

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;