import { useState } from "react";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast";

const Checkout = () => {
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
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold mb-8">
        Checkout
      </h1>

      <div className="grid md:grid-cols-2 gap-8">

        {/* Shipping Form */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">

            <h2 className="card-title mb-4">
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
                placeholder="Email"
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
                placeholder="Shipping Address"
                className="textarea textarea-bordered w-full"
                rows="4"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>

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
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">

            <h2 className="card-title mb-4">
              Order Summary
            </h2>

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between border-b py-2"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>

                <span>
                  $
                  {(
                    item.price * item.quantity
                  ).toFixed(2)}
                </span>
              </div>
            ))}

            <div className="divider"></div>

            <div className="flex justify-between font-semibold">
              <span>Total Items</span>
              <span>{totalItems}</span>
            </div>

            <div className="flex justify-between text-xl font-bold mt-3">
              <span>Total</span>
              <span>
                ${totalPrice.toFixed(2)}
              </span>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;