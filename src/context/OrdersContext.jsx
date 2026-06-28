import {
  createContext,
  useContext,
  useState,
  useEffect,
  useOrders,
} from "react";

const OrdersContext = createContext();

export const useOrders = () => {
  return useContext(OrdersContext);
};

const OrdersProvider = ({ children }) => {
  const [orders, setOrders] = useState(() => {
    const savedOrders =
      localStorage.getItem("orders");

    return savedOrders
      ? JSON.parse(savedOrders)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "orders",
      JSON.stringify(orders)
    );
  }, [orders]);

  const addOrder = (order) => {
    setOrders((prev) => [
      ...prev,
      {
        id: Date.now(),
        date: new Date().toLocaleString(),
        ...order,
      },
    ]);
  };

  return (
    <OrdersContext.Provider
      value={{
        orders,
        addOrder,
      }}
    >
      {children}
    </OrdersContext.Provider>
  );
};

export default OrdersProvider;