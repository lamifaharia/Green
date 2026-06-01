const ProductCard = ({ product }) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img src={product.image} alt={product.name} className="h-60 w-full object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>${product.proce}</p>

                <div className="card-actions justify-end">
                    <button className="btn btn-success">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;