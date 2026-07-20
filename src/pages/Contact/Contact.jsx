import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-[#F8FCF9] via-white to-[#F5FAF7] min-h-screen">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-gradient-to-r from-[#0B1F16] via-[#123524] to-[#1B4332] py-28">

        {/* Decorative Blur */}

        <div className="absolute -left-32 top-0 w-80 h-80 rounded-full bg-green-400/20 blur-[120px]" />

        <div className="absolute right-0 bottom-0 w-96 h-96 rounded-full bg-emerald-500/20 blur-[150px]" />

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="text-center text-white">

            <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-green-200 mb-6">

              🌿 We are always here to help

            </span>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">

              Let's Start a

              <span className="block text-green-300">
                Conversation
              </span>

            </h1>

            <p className="max-w-3xl mx-auto mt-8 text-lg md:text-xl text-green-100 leading-8">

              Whether you have a question about our fresh organic
              products, delivery services, or simply want to say
              hello—we'd love to hear from you.

            </p>

          </div>

        </div>

      </section>

      {/* ================= FLOATING CARDS ================= */}

      <section className="-mt-16 relative z-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="rounded-3xl bg-white/90 backdrop-blur-xl shadow-2xl p-8 hover:-translate-y-2 duration-300">

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">

                <FaPhoneAlt className="text-2xl text-green-700" />

              </div>

              <h2 className="text-2xl font-bold mb-3">

                Call Us

              </h2>

              <p className="text-gray-500 mb-2">

                Need immediate assistance?

              </p>

              <p className="font-semibold text-lg text-[#123524]">

                +880 1234-567890

              </p>

            </div>

            <div className="rounded-3xl bg-white/90 backdrop-blur-xl shadow-2xl p-8 hover:-translate-y-2 duration-300">

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">

                <FaEnvelope className="text-2xl text-green-700" />

              </div>

              <h2 className="text-2xl font-bold mb-3">

                Email Us

              </h2>

              <p className="text-gray-500 mb-2">

                We usually reply within 24 hours.

              </p>

              <p className="font-semibold text-lg text-[#123524]">

                support@green.com

              </p>

            </div>

            <div className="rounded-3xl bg-white/90 backdrop-blur-xl shadow-2xl p-8 hover:-translate-y-2 duration-300">

              <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">

                <FaMapMarkerAlt className="text-2xl text-green-700" />

              </div>

              <h2 className="text-2xl font-bold mb-3">

                Visit Us

              </h2>

              <p className="text-gray-500 mb-2">

                Our head office location.

              </p>

              <p className="font-semibold text-lg text-[#123524]">

                Dhaka, Bangladesh

              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;