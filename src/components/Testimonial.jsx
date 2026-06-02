const Testimonial = () => {
    return(
        <section className="py-20">
            <div className="max-w-6xl mx-auto px-4">

                <h2 className="text-4xl font-bold text-center mb-10">Customer Reviews</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="card shadow bg-base-100">
                        <div className="card-body">
                            <p>Fresh products and great services.</p>
                            <h3 className="font-bold">Sarah</h3>
                        </div>
                    </div>

                    <div className="card shadow bg-base-100">
                        <div className="card-body">
                            <p>Best organic store online.</p>
                            <h3 className="font-bold">Michael</h3>
                        </div>
                    </div>

                    <div className="card shadow bg-base-100">
                        <div className="card-body">
                            <p>High quality and fast delivery.</p>
                            <h3 className="font-bold">Emma</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;