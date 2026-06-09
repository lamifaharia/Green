import { NavLink } from "react-router-dom";
import {
  FaLeaf,
  FaHeart,
  FaShoppingCart,
} from "react-icons/fa";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const { user, logoutUser } = useAuth();

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/shop">Shop</NavLink>
      </li>

      <li>
        <NavLink to="/about">About</NavLink>
      </li>

      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4">

      {/* LEFT SIDE */}
      <div className="navbar-start">

        {/* Mobile Menu */}
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <NavLink
          to="/"
          className="btn btn-ghost text-2xl font-bold text-success"
        >
          <FaLeaf />
          Green
        </NavLink>
      </div>

      {/* CENTER (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      {/* RIGHT SIDE */}
      <div className="navbar-end gap-3">

        {/* Wishlist */}
        <NavLink
          to="/wishlist"
          className="btn btn-ghost btn-circle"
        >
          <div className="indicator">
            <FaHeart size={20} />

            {wishlist.length > 0 && (
              <span className="badge badge-success badge-sm indicator-item">
                {wishlist.length}
              </span>
            )}
          </div>
        </NavLink>

        {/* Cart */}
        <NavLink
          to="/cart"
          className="btn btn-ghost btn-circle"
        >
          <div className="indicator">
            <FaShoppingCart size={20} />

            {cart.length > 0 && (
              <span className="badge badge-success badge-sm indicator-item">
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>

        {/* AUTH SECTION */}
        {user ? (
          <div className="dropdown dropdown-end">

            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  src={
                    user.photoURL ||
                    "https://i.ibb.co/4pDNDk1/avatar.png"
                  }
                  alt="user"
                />
              </div>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={logoutUser}>
                  Logout
                </button>
              </li>
            </ul>

          </div>
        ) : (
          <NavLink
            to="/login"
            className="btn btn-success"
          >
            Login
          </NavLink>
        )}

      </div>
    </div>
  );
};

export default Navbar;