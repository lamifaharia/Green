import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="hero min-h-[80vh] bg-green-100">
            <div className="hero-content text-center">
                <div className="max-w-2xl">
                    <h1 className="text-6xl font-bold">Organic Products</h1>
                    <p className="py-6"> Eat healthy. Live healthy. Discover fresh organic products directly from trusted farms.</p>

                    <Link to="/shop" className="btn btn--success">Shop Now</Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;