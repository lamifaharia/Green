const Newsletter = () => {
  return (
    <section className="py-20">
      <div className="max-w-3xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-4">
          Join Our Newsletter
        </h2>

        <p className="mb-6">
          Get updates about new products and offers.
        </p>

        <div className="flex gap-2 justify-center">
          <input
            type="email"
            placeholder="Email Address"
            className="input input-bordered"
          />

          <button className="btn btn-success">
            Subscribe
          </button>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;