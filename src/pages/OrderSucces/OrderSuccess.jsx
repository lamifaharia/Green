import { Link } from "react-router-dom";

const OrderSuccess = () => {
return ( <div className="min-h-screen flex items-center justify-center px-4"> <div className="card bg-base-100 shadow-xl w-full max-w-xl"> <div className="card-body text-center">


      <div className="text-7xl mb-4">
        🎉
      </div>

      <h1 className="text-4xl font-bold">
        Order Placed Successfully!
      </h1>

      <p className="mt-4 text-gray-500">
        Thank you for shopping with Green Organic Store.
      </p>

      <p className="text-gray-500">
        Your order has been received and will be processed shortly.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

        <Link
          to="/shop"
          className="btn btn-success"
        >
          Continue Shopping
        </Link>

        <Link
          to="/"
          className="btn btn-outline"
        >
          Back To Home
        </Link>

      </div>

    </div>
  </div>
</div>


);
};

export default OrderSuccess;
