import { FaLeaf } from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="py-24 px-4">

      <div className="max-w-6xl mx-auto">

        <div className="rounded-3xl bg-gradient-to-r from-[#0B1F16] via-[#123524] to-[#1B4332] p-10 md:p-16 shadow-2xl">

          <div className="max-w-3xl mx-auto text-center text-white">

            <div className="flex justify-center mb-6">

              <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center shadow-lg">

                <FaLeaf className="text-3xl text-white" />

              </div>

            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Join Our Green Community
            </h2>

            <p className="text-green-100 text-lg leading-8 mb-10">
              Subscribe to receive exclusive discounts,
              healthy lifestyle tips, and updates on our
              newest organic products delivered fresh to
              your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <input
                type="email"
                placeholder="Enter your email address"
                className="input input-bordered w-full h-14 text-black bg-white border-none focus:outline-none"
              />

              <button className="btn h-14 px-10 bg-green-500 border-green-500 hover:bg-green-600 hover:border-green-600 text-white text-base font-semibold">
                Subscribe
              </button>

            </div>

            <p className="mt-5 text-sm text-green-200">
              🌿 100% Organic • No Spam • Unsubscribe Anytime
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Newsletter;