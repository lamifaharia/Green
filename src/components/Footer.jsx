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
    <footer className="mt-24 bg-[#0B1F16] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo */}
          <div>

            <div className="flex items-center gap-3 mb-5">

              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-green-700 flex items-center justify-center shadow-lg">

                <FaLeaf className="text-white text-2xl" />

              </div>

              <div>

                <h2 className="text-3xl font-black tracking-wide">
                  Green
                </h2>

                <p className="text-green-300 text-sm">
                  Organic Store
                </p>

              </div>

            </div>

            <p className="text-gray-300 leading-7">
              Fresh organic fruits, vegetables and healthy groceries
              delivered directly from trusted farms to your doorstep.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>
                <Link
                  to="/"
                  className="hover:text-green-400 transition duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/shop"
                  className="hover:text-green-400 transition duration-300"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  to="/wishlist"
                  className="hover:text-green-400 transition duration-300"
                >
                  Wishlist
                </Link>
              </li>

              <li>
                <Link
                  to="/cart"
                  className="hover:text-green-400 transition duration-300"
                >
                  Cart
                </Link>
              </li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Company
            </h3>

            <ul className="space-y-4 text-gray-300">

              <li>
                <Link
                  to="/about"
                  className="hover:text-green-400 transition duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-green-400 transition duration-300"
                >
                  Contact
                </Link>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-green-400 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-green-400 transition duration-300"
                >
                  Terms & Conditions
                </a>
              </li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact Us
            </h3>

            <div className="space-y-5 text-gray-300">

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-green-400" />
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-green-400" />
                <span>+880 1234-567890</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-green-400" />
                <span>support@green.com</span>
              </div>

            </div>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-green-500 transition-all duration-300 flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-green-500 transition-all duration-300 flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-green-500 transition-all duration-300 flex items-center justify-center"
              >
                <FaTwitter />
              </a>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-400 text-sm">
            © 2026 Green Organic Store. All rights reserved.
          </p>

          <p className="text-green-400 text-sm mt-3 md:mt-0">
            🌱 Eat Fresh • Live Healthy • Shop Organic
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;