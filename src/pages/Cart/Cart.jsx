import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } =
    useCart();

  return (
    <div className="max-w-6xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cart.map((item) => (
        <div
          key={item.id}
          className="flex justify-between items-center border p-4 rounded-lg mb-4"
        >
          <h2>{item.name}</h2>

          <button
            className="btn btn-error"
            onClick={() =>
              removeFromCart(item.id)
            }
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;