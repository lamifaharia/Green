import { FaCartPlus } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-cover"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          {product.name}
        </h2>

        <p className="text-success font-bold">
          ${product.price}
        </p>

        <button className="btn btn-success">
          <FaCartPlus />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;