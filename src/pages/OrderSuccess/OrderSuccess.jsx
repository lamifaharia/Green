import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="card bg-base-100 shadow-xl max-w-lg w-full">
        <div className="card-body text-center">
          <h1 className="text-4xl font-bold text-success">
            🎉 Order Placed Successfully!
          </h1>

          <p className="mt-4">
            Thank you for shopping with Green Organic Store.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link to="/" className="btn btn-success">
              Home
            </Link>

            <Link to="/shop" className="btn btn-outline">
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;