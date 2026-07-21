import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLeaf,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0B1F16] text-white mt-16">

      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top */}

        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* Brand */}

          <div className="max-w-sm">

            <div className="flex items-center gap-3 mb-4">

              <div className="w-12 h-12 rounded-xl bg-green-600 flex items-center justify-center">

                <FaLeaf className="text-white text-xl" />

              </div>

              <div>

                <h2 className="text-2xl font-bold">
                  Green
                </h2>

                <p className="text-green-300 text-sm">
                  Organic Store
                </p>

              </div>

            </div>

            <p className="text-gray-400 text-sm leading-7">
              Fresh organic groceries delivered from trusted farms
              directly to your doorstep.
            </p>

          </div>

          {/* Links */}

          <div className="flex flex-wrap gap-8 text-sm font-medium">

            <Link to="/" className="hover:text-green-400">
              Home
            </Link>

            <Link to="/shop" className="hover:text-green-400">
              Shop
            </Link>

            <Link to="/about" className="hover:text-green-400">
              About
            </Link>

            <Link to="/contact" className="hover:text-green-400">
              Contact
            </Link>

            <Link to="/wishlist" className="hover:text-green-400">
              Wishlist
            </Link>

            <Link to="/cart" className="hover:text-green-400">
              Cart
            </Link>

          </div>

        </div>

        {/* Contact */}

        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 border-t border-white/10 mt-8 pt-8">

          <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-300">

            <div className="flex items-center gap-2">

              <FaMapMarkerAlt className="text-green-400" />

              Dhaka, Bangladesh

            </div>

            <div className="flex items-center gap-2">

              <FaPhoneAlt className="text-green-400" />

              +880 1234-567890

            </div>

            <div className="flex items-center gap-2">

              <FaEnvelope className="text-green-400" />

              support@green.com

            </div>

          </div>

          {/* Social */}

          <div className="flex gap-3">

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-600 transition flex items-center justify-center"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-600 transition flex items-center justify-center"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-green-600 transition flex items-center justify-center"
            >
              <FaTwitter />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">

          <p>
            © 2026 Green Organic Store. All rights reserved.
          </p>

          <p className="text-green-400 mt-2 md:mt-0">
            🌿 Eat Fresh • Live Healthy
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;