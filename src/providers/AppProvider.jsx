import AuthProvider from "../context/AuthContext";
import CartProvider from "../context/CartContext";
import WishlistProvider from "../context/WishlistContext";

const AppProvider = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
            {children}
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default AppProvider;
