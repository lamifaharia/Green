import { Link } from "react-router-dom";
import { FaLeaf, FaShoppingCart, FaHeart } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { useCart } from "../context/CartContext";

const Navbar = () => {
    const { cart } = useCart();
  return (
    <div className="navbar bg-base-100 shadow-lg px-6">
      <div className="navbar-start">
        <Link
          to="/"
          className="text-2xl font-bold text-green-600 flex items-center gap-2"
        >
          <FaLeaf /> Green
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Shop</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-4">

        <ThemeToggle />
        <Link to="/wishlist">
          <FaHeart size={20} />
        </Link>

        

        <Link to="/cart">
           <FaShoppingCart size= {20} />
        </Link>

        <Link to ="/login" className ="btn btn-success">
        Login 
        </Link>
      </div>
    </div>
  );
};

export default Navbar;