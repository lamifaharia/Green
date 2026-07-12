import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLeaf,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-28 border-t border-gray-200 bg-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* Logo */}

          <div>

            <div className="flex items-center gap-3">

              <div className="w-14 h-14 rounded-xl bg-[#003300] flex items-center justify-center">

                <FaLeaf
                  className="text-white"
                  size={24}
                />

              </div>

              <div>

                <h2 className="text-3xl font-black text-[#003300]">
                  Green
                </h2>

                <p className="text-gray-500 text-sm">
                  Organic Store
                </p>

              </div>

            </div>

            <p className="mt-6 max-w-sm text-gray-500 leading-7">
              Fresh organic fruits, vegetables and healthy groceries
              delivered from trusted local farms.
            </p>

          </div>

          {/* Navigation */}

          <div className="flex justify-center">

            <ul className="space-y-4 text-center">

              <li>
                <Link
                  to="/"
                  className="text-gray-600 hover:text-[#003300] transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/shop"
                  className="text-gray-600 hover:text-[#003300] transition"
                >
                  Shop
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-gray-600 hover:text-[#003300] transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-gray-600 hover:text-[#003300] transition"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Social */}

          <div className="flex lg:justify-end">

            <div>

              <h3 className="font-semibold text-lg mb-5">
                Follow Us
              </h3>

              <div className="flex gap-4">

                <a
                  href="#"
                  className="w-11 h-11 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-[#003300] hover:text-white hover:border-[#003300] transition-all duration-300"
                >
                  <FaFacebookF />
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-[#003300] hover:text-white hover:border-[#003300] transition-all duration-300"
                >
                  <FaInstagram />
                </a>

                <a
                  href="#"
                  className="w-11 h-11 rounded-xl border border-gray-300 flex items-center justify-center hover:bg-[#003300] hover:text-white hover:border-[#003300] transition-all duration-300"
                >
                  <FaTwitter />
                </a>

              </div>

              <p className="mt-6 text-gray-500">
                support@green.com
              </p>

            </div>

          </div>

        </div>

      </div>

      <div className="border-t border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-3">

          <p className="text-gray-500 text-sm">
            © 2026 Green Organic Store. All rights reserved.
          </p>

          <div className="flex gap-8 text-sm">

            <a
              href="#"
              className="text-gray-500 hover:text-[#003300]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-gray-500 hover:text-[#003300]"
            >
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;