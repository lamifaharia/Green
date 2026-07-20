import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eef7ef] via-white to-[#d8ecd8]">
      {/* Background Blobs */}
      <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-[#003300]/10 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#003300]/10 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center rounded-full bg-[#003300] px-5 py-2 text-sm font-semibold text-white">
            🌿 100% Organic Products
          </span>

          <h1 className="mt-8 text-5xl lg:text-7xl font-black leading-tight text-gray-900">
            Eat
            <span className="text-[#003300]"> Fresh</span>
            <br />
            Live
            <span className="text-[#003300]"> Healthy</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Fresh vegetables, fruits and organic groceries delivered directly
            from trusted local farms. Healthy living starts with healthy food.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">
            <Link
              to="/shop"
              className="btn border-0 bg-[#003300] px-8 text-white hover:bg-[#145214]"
            >
              Shop Now
            </Link>

            <Link
              to="/about"
              className="btn btn-outline border-[#003300] text-[#003300] hover:bg-[#003300] hover:text-white"
            >
              Learn More
            </Link>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-[#003300]">100%</h2>
              <p className="text-gray-500">Organic</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#003300]">24h</h2>
              <p className="text-gray-500">Delivery</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#003300]">500+</h2>
              <p className="text-gray-500">Products</p>
            </div>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <motion.img
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1000"
            alt="Organic Food"
            className="rounded-[35px] shadow-2xl"
          />

          
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;