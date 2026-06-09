import { useParams } from "react-router-dom";
import products from "../../data/products";
import { useCart } from "../../context/CartContext";

const ProductDetails = () => {
    const { id } = useParams();
    const { addToCart } = useCart();
    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return (
            <div className="text-center py-20">Product Not Found</div>
        );
    }
    return (
        <div className="max-w-6xl mx-autp [y-16 px-5">
            <div className="grid md:grid-cols-2 gap-10">
                <img src={product.image} alt={product.name} className="rounded-xl w-full" />

                <div>
                    <h1 className="text-5xl font-bold"> {product.name} </h1>
                    <p className="text-success text-3xl my-5">${product.price}</p>
                    <p className="text-lg">{}product.description</p>

                    <button onClick={() => addToCart(product)} className="btn btn-success mt-8">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;