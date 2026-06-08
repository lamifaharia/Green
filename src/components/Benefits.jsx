import {
  FaLeaf,
  FaShippingFast,
  FaAward,
} from "react-icons/fa";

const Benefits = () => {
  return (
    <section className="py-20 bg-base-200">
      <div className="max-w-6xl mx-auto px-5">

        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <FaLeaf size={40} />
              <h3 className="text-xl font-bold">
                Organic
              </h3>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <FaShippingFast size={40} />
              <h3 className="text-xl font-bold">
                Fast Delivery
              </h3>
            </div>
          </div>

          <div className="card bg-base-100 shadow-lg">
            <div className="card-body items-center text-center">
              <FaAward size={40} />
              <h3 className="text-xl font-bold">
                Premium Quality
              </h3>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;