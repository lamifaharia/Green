import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const WishlistContext = createContext();

export const useWishlist = () =>
  useContext(WishlistContext);

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((prev) => [...prev, product]);

    toast.success("Added to wishlist");
  };

  const removeFromWishlist = (id) => {
    setWishlist(
      wishlist.filter((item) => item.id !== id)
    );

    toast.error("Removed from wishlist");
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;