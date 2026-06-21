import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="card bg-base-100 shadow-xl max-w-lg w-full">
        <div className="card-body text-center">

          <div className="text-7xl">
            ✅
          </div>

          <h1 className="text-4xl font-bold mt-4">
            Order Placed Successfully!
          </h1>

          <p className="text-gray-500 mt-2">
            Thank you for shopping with Green Organic Store.
          </p>

          <p className="text-gray-500">
            Your fresh organic products are on the way.
          </p>

          <div className="mt-6">
            <Link
              to="/shop"
              className="btn btn-success"
            >
              Continue Shopping
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;