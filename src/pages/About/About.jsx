import {
  FaLeaf,
  FaSeedling,
  FaTruck,
  FaAward,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>

      {/* Hero */}

      <section className="bg-gradient-to-r from-[#0B1F16] via-[#123524] to-[#1B4332] text-white py-24">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            About Green
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-green-100 leading-8">
            We believe healthy living starts with healthy food.
            That's why we bring fresh, natural, and organic
            products directly from local farms to your table.
          </p>

        </div>

      </section>

      {/* Story */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=900"
            alt="Organic Farm"
            className="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
          />

          <div>

            <span className="text-green-600 font-semibold uppercase tracking-widest">
              Our Story
            </span>

            <h2 className="text-4xl font-black mt-4 mb-6">
              Fresh From Nature,
              Delivered With Love
            </h2>

            <p className="text-gray-600 leading-8 mb-5">
              Green Organic Store was founded with one mission:
              make healthy food affordable and accessible to everyone.
              We partner with trusted local farmers who grow crops
              without harmful chemicals.
            </p>

            <p className="text-gray-600 leading-8">
              Every product is carefully selected for freshness,
              quality, and sustainability. We believe food should
              nourish your body while protecting our planet.
            </p>

          </div>

        </div>

      </section>

      {/* Features */}

      <section className="py-20 bg-green-50">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-black text-center mb-16">
            Why Shop With Us?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

              <FaLeaf className="text-5xl text-green-600 mx-auto mb-5" />

              <h3 className="font-bold text-xl mb-3">
                100% Organic
              </h3>

              <p className="text-gray-500">
                Naturally grown products with no harmful chemicals.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

              <FaSeedling className="text-5xl text-green-600 mx-auto mb-5" />

              <h3 className="font-bold text-xl mb-3">
                Eco Friendly
              </h3>

              <p className="text-gray-500">
                Sustainable farming practices that protect nature.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

              <FaTruck className="text-5xl text-green-600 mx-auto mb-5" />

              <h3 className="font-bold text-xl mb-3">
                Fast Delivery
              </h3>

              <p className="text-gray-500">
                Fresh products delivered quickly to your doorstep.
              </p>

            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">

              <FaAward className="text-5xl text-green-600 mx-auto mb-5" />

              <h3 className="font-bold text-xl mb-3">
                Premium Quality
              </h3>

              <p className="text-gray-500">
                Every item is inspected before reaching your home.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Stats */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            <div className="text-center">

              <h2 className="text-5xl font-black text-green-600">
                5K+
              </h2>

              <p className="mt-3 text-gray-500">
                Happy Customers
              </p>

            </div>

            <div className="text-center">

              <h2 className="text-5xl font-black text-green-600">
                250+
              </h2>

              <p className="mt-3 text-gray-500">
                Organic Products
              </p>

            </div>

            <div className="text-center">

              <h2 className="text-5xl font-black text-green-600">
                60+
              </h2>

              <p className="mt-3 text-gray-500">
                Local Farmers
              </p>

            </div>

            <div className="text-center">

              <h2 className="text-5xl font-black text-green-600">
                99%
              </h2>

              <p className="mt-3 text-gray-500">
                Customer Satisfaction
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-24 bg-gradient-to-r from-[#0B1F16] via-[#123524] to-[#1B4332] text-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-black mb-6">
            Eat Healthy. Live Better.
          </h2>

          <p className="text-green-100 text-lg leading-8 mb-10">
            Explore our collection of fresh and green fruits,
            vegetables, dairy products, and groceries.
          </p>

          <Link
            to="/shop"
            className="btn btn-success btn-lg text-white"
          >
            Shop Now
          </Link>

        </div>

      </section>

    </div>
  );
};

export default About;