const Newsletter = () => {
    return (
        <section className="py-16 bg-green-600 text-white">
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-4xl font-bold mb-4">Subscribe</h2>
                <p className="mb-6">Get updates about organic products.</p>

                <div className="join">
                    <input type="email" placeholder="email@gmail.com" className="input join-item" />

                    <button className="btn btn-neutral join-item">Subscribe</button>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;