import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((p) => p.id === product.id);

      if (exist) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p

        );
      }

      return [...prev, {...product, qty: 1 }];
    });
  };

const removeFromCart = (id) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
};

const clearCart = () => setCart([]);

const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
);

return (
    <CartContext.Provider
    value={{
        cart, addToCart, removeFromCart, clearCart, total,
    }} >{children}</CartContext.Provider>
);
};

export default CartProvider;