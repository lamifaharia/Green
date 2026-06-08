import { useWishlist } from "../../context/WishlistContext";

const Wishlist = () => {
  const { wishlist } =
    useWishlist();

  return (
    <div className="max-w-6xl mx-auto p-10">

      <h1 className="text-4xl font-bold mb-8">
        Wishlist
      </h1>

      {wishlist.map((item) => (
        <div
          key={item.id}
          className="border p-4 rounded-lg mb-4"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default Wishlist;