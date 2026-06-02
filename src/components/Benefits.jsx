import { FaLeaf, FaTruck, FaSeedling, FaAward,} from "react-icons/fa";

const Benefits = () => {
    return (
        <section className="py-20 bg-base-200">
            <div className="max-w-7xl mx-auto px-4">

                <h2 className="text-4xl font-bold text-center mb-10"> Why Choose Green</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols4 gap-6">
                    <div className="card bg-base-100 shadow">
                        <div className="card-body text-center">
                            <FaLeaf size={40} />
                            <h3 className="font-bold">Organic</h3>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow">
                        <div className="card-body text-center">
                            <FaTruck size={40} />
                            <h3 className="font-bold">Fast Delivery</h3>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow">
                        <div className="card-body text-center">
                            <FaSeedling size={40} />
                            <h3 className="font-bold">Eco Friendly</h3>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow">
                        <div className="card-body text-center">
                            <FaAward size={40} />
                            <h3 className="font-bold">Premium Quality</h3>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Benefits;