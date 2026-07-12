import { NavLink } from "react-router-dom";
import {
  FaLeaf,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaSignOutAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();
  const { user, logoutUser } = useAuth();

  const navLink = ({ isActive }) =>
    `relative px-4 py-2 text-sm font-semibold transition-all duration-300 ${
      isActive
        ? "text-[#003300]"
        : "text-gray-600 hover:text-[#003300]"
    }`;

  return (
    <header className="sticky top-5 z-50 px-5">

      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: .6 }}
        className="max-w-7xl mx-auto"
      >

        <div className="bg-white/90 backdrop-blur-xl border border-gray-200 rounded-3xl shadow-xl px-6 py-3">

          <div className="flex items-center justify-between">

            {/* LOGO */}

            <NavLink
              to="/"
              className="flex items-center gap-3"
            >

              <motion.div
                whileHover={{
                  rotate: 20,
                  scale: 1.1,
                }}
                className="w-12 h-12 rounded-2xl bg-[#003300] flex items-center justify-center shadow-lg"
              >
                <FaLeaf
                  className="text-white text-xl"
                />
              </motion.div>

              <div>

                <h2 className="text-2xl font-black text-[#003300] leading-none">
                  Green
                </h2>

                <p className="text-xs text-gray-500 tracking-wide">
                  ORGANIC STORE
                </p>

              </div>

            </NavLink>

            {/* Desktop Menu */}

            <ul className="hidden lg:flex items-center gap-8">

              {[
                ["Home", "/"],
                ["Shop", "/shop"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([name, path]) => (

                <li key={name}>

                  <NavLink
                    to={path}
                    className={navLink}
                  >

                    {({ isActive }) => (
                      <div className="relative">

                        {name}

                        {isActive && (
                          <motion.div
                            layoutId="navbar"
                            className="absolute left-0 -bottom-2 h-[3px] w-full rounded-full bg-[#003300]"
                          />
                        )}

                      </div>
                    )}

                  </NavLink>

                </li>

              ))}

            </ul>

            {/* RIGHT */}

            <div className="flex items-center gap-3">

              {/* Wishlist */}

              <NavLink
                to="/wishlist"
                className="relative w-11 h-11 rounded-full bg-gray-100 hover:bg-[#003300] hover:text-white transition-all duration-300 flex items-center justify-center"
              >

                <FaHeart />

                {wishlist.length > 0 && (

                  <span className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold">
                    {wishlist.length}
                  </span>

                )}

              </NavLink>

              {/* Cart */}

              <NavLink
                to="/cart"
                className="relative w-11 h-11 rounded-full bg-gray-100 hover:bg-[#003300] hover:text-white transition-all duration-300 flex items-center justify-center"
              >

                <FaShoppingCart />

                {totalItems > 0 && (

                  <span className="absolute -top-1 -right-1 bg-red-500 text-white w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold">
                    {totalItems}
                  </span>

                )}

              </NavLink>

              {/* USER */}

              {user ? (

                <div className="dropdown dropdown-end">

                  <label
                    tabIndex={0}
                    className="cursor-pointer"
                  >

                    <img
                      src={
                        user.photoURL ||
                        "https://i.pravatar.cc/150"
                      }
                      alt=""
                      className="w-11 h-11 rounded-2xl object-cover border-2 border-[#003300]"
                    />

                  </label>

                  <ul
                    tabIndex={0}
                    className="menu dropdown-content mt-4 w-64 bg-white rounded-3xl shadow-2xl p-4"
                  >

                    <li className="pointer-events-none">

                      <h2 className="font-bold text-[#003300]">
                        {user.displayName || "User"}
                      </h2>

                    </li>

                    <li className="pointer-events-none text-xs text-gray-500">
                      {user.email}
                    </li>

                    <div className="divider"></div>

                    <li>

                      <button
                        onClick={logoutUser}
                        className="text-red-500"
                      >

                        <FaSignOutAlt />

                        Logout

                      </button>

                    </li>

                  </ul>

                </div>

              ) : (

                <NavLink
                  to="/login"
                  className="hidden md:flex bg-[#003300] hover:bg-[#145214] text-white px-7 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg"
                >
                  Login
                </NavLink>

              )}

              {/* MOBILE */}

              <div className="dropdown lg:hidden">

                <label
                  tabIndex={0}
                  className="btn btn-ghost"
                >
                  <FaBars />
                </label>

                <ul
                  tabIndex={0}
                  className="menu dropdown-content right-0 mt-4 bg-white rounded-2xl shadow-xl w-56 p-3 z-50"
                >

                  <li>
                    <NavLink to="/">
                      Home
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/shop">
                      Shop
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/about">
                      About
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="/contact">
                      Contact
                    </NavLink>
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </motion.nav>

    </header>
  );
};

export default Navbar;