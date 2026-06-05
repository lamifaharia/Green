import { Children, createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const useWishlist = () =>
    useContext(WishlistContext);

const WishlistProvider = ({ Children }) => {
    const [wishlist, setWishlist] = useState([]);

    const toggleWishlist = (product) => {
        setWishlist((prev) =>{
            const exists = prev.find((p) => p.id === product.id);

            if (exists) {
                return prev.filter((p) => p.id !== product.id);
            }

            return [...prev, product];
        });
    };

    return (
        <WishlistContext.Provider value ={{ wishlist, toggleWishlist }}>
            {Children}
        </WishlistContext.Provider>
    );
};

export default WishlistProvider;