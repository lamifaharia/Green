import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div>

      {/* Hero */}

      <section className="bg-gradient-to-r from-[#0B1F16] via-[#123524] to-[#1B4332] py-24 text-white">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Contact Us
          </h1>

          <p className="max-w-3xl mx-auto text-lg text-green-100 leading-8">
            We'd love to hear from you. Whether you have a question,
            feedback, or need support, our team is always ready to help.
          </p>

        </div>

      </section>

      {/* Contact Cards */}

      <section className="py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-3 gap-8">

            <div className="card bg-base-100 shadow-xl">

              <div className="card-body items-center text-center">

                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">

                  <FaPhoneAlt className="text-green-700 text-2xl" />

                </div>

                <h2 className="text-2xl font-bold mt-4">
                  Call Us
                </h2>

                <p className="text-gray-500">
                  +880 1234-567890
                </p>

              </div>

            </div>

            <div className="card bg-base-100 shadow-xl">

              <div className="card-body items-center text-center">

                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">

                  <FaEnvelope className="text-green-700 text-2xl" />

                </div>

                <h2 className="text-2xl font-bold mt-4">
                  Email
                </h2>

                <p className="text-gray-500">
                  support@green.com
                </p>

              </div>

            </div>

            <div className="card bg-base-100 shadow-xl">

              <div className="card-body items-center text-center">

                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">

                  <FaMapMarkerAlt className="text-green-700 text-2xl" />

                </div>

                <h2 className="text-2xl font-bold mt-4">
                  Address
                </h2>

                <p className="text-gray-500">
                  Dhaka, Bangladesh
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Contact Form */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* Form */}

            <div className="card bg-base-100 shadow-2xl">

              <div className="card-body">

                <h2 className="text-3xl font-bold mb-6">
                  Send Us a Message
                </h2>

                <div className="space-y-5">

                  <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered w-full"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="input input-bordered w-full"
                  />

                  <input
                    type="text"
                    placeholder="Subject"
                    className="input input-bordered w-full"
                  />

                  <textarea
                    rows="6"
                    placeholder="Write your message..."
                    className="textarea textarea-bordered w-full"
                  ></textarea>

                  <button className="btn btn-success w-full">
                    Send Message
                  </button>

                </div>

              </div>

            </div>

            {/* Map */}

            <div>

              <div className="rounded-3xl overflow-hidden shadow-2xl h-full min-h-[500px]">

                <iframe
                  title="Google Map"
                  src="https://www.google.com/maps?q=Dhaka,Bangladesh&output=embed"
                  className="w-full h-full"
                  loading="lazy"
                ></iframe>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FAQ */}

      <section className="bg-green-50 py-24">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-4xl font-black text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-5">

            <div className="collapse collapse-arrow bg-base-100 shadow-md">

              <input type="radio" name="faq" defaultChecked />

              <div className="collapse-title text-lg font-semibold">
                Where do your products come from?
              </div>

              <div className="collapse-content">
                <p>
                  We partner with trusted local farms to provide
                  fresh, chemical-free organic products.
                </p>
              </div>

            </div>

            <div className="collapse collapse-arrow bg-base-100 shadow-md">

              <input type="radio" name="faq" />

              <div className="collapse-title text-lg font-semibold">
                Do you offer home delivery?
              </div>

              <div className="collapse-content">
                <p>
                  Yes! We deliver fresh organic products directly
                  to your doorstep.
                </p>
              </div>

            </div>

            <div className="collapse collapse-arrow bg-base-100 shadow-md">

              <input type="radio" name="faq" />

              <div className="collapse-title text-lg font-semibold">
                Can I return a product?
              </div>

              <div className="collapse-content">
                <p>
                  Absolutely. If you receive a damaged or incorrect
                  item, contact us within 24 hours for assistance.
                </p>
              </div>

            </div>

            <div className="collapse collapse-arrow bg-base-100 shadow-md">

              <input type="radio" name="faq" />

              <div className="collapse-title text-lg font-semibold">
                Are your products certified organic?
              </div>

              <div className="collapse-content">
                <p>
                  Yes. We work only with suppliers who follow
                  certified organic farming practices.
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;