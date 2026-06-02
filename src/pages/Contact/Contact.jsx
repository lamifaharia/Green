const Contact = () => {
  return (
    <section className="max-w-4xl mx-autp py-20 px-4">
      <h1 className="text-5xl font-bold mb-10">Contact Us</h1>

      <div className="card bg-base-100 shadow">
        <div className="card-body gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered"
          />

          <textarea
            className="textarea textarea-bordered"
            placeholder="Message"
          ></textarea>

          <button className="btn btn-success">Send Message</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
