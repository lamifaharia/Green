const Hero = () => {
  return (
    <div
      className="hero min-h-[80vh]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1542838132-92c53300491e')",
      }}
    >
      <div className="hero-overlay bg-black/60"></div>

      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-6xl font-bold">
            Fresh Organic Products
          </h1>

          <p className="mb-5 text-lg">
            Healthy food directly from nature.
            100% organic, fresh and eco-friendly.
          </p>

          <button className="btn btn-success">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;