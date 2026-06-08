import CartProvider from "../context/CartContext";
import WishlistProvider from "../context/WishlistContext";

const AppProvider = ({ children }) => {
  return (
    <CartProvider>
      <WishlistProvider>
        {children}
      </WishlistProvider>
    </CartProvider>
  );
};

export default AppProvider;