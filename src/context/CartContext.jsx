import {
createContext,
useContext,
useState,
useEffect,
} from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const useCart = () => {
return useContext(CartContext);
};

const CartProvider = ({ children }) => {
const [cart, setCart] = useState(() => {
const savedCart =
localStorage.getItem("cart");

```
return savedCart
  ? JSON.parse(savedCart)
  : [];
```

});

useEffect(() => {
localStorage.setItem(
"cart",
JSON.stringify(cart)
);
}, [cart]);

const addToCart = (product) => {
const existingProduct = cart.find(
(item) => item.id === product.id
);

```
if (existingProduct) {
  setCart(
    cart.map((item) =>
      item.id === product.id
        ? {
            ...item,
            quantity:
              item.quantity + 1,
          }
        : item
    )
  );
} else {
  setCart([
    ...cart,
    {
      ...product,
      quantity: 1,
    },
  ]);
}

toast.success(
  `${product.name} added to cart`
);
```

};

const increaseQuantity = (id) => {
setCart(
cart.map((item) =>
item.id === id
? {
...item,
quantity:
item.quantity + 1,
}
: item
)
);
};

const decreaseQuantity = (id) => {
setCart(
cart
.map((item) =>
item.id === id
? {
...item,
quantity:
item.quantity - 1,
}
: item
)
.filter(
(item) => item.quantity > 0
)
);
};

const removeFromCart = (id) => {
setCart(
cart.filter(
(item) => item.id !== id
)
);

```
toast.error("Item removed");
```

};

const clearCart = () => {
setCart([]);
};

const totalPrice = cart.reduce(
(total, item) =>
total +
item.price * item.quantity,
0
);

const totalItems = cart.reduce(
(total, item) =>
total + item.quantity,
0
);

return (
<CartContext.Provider
value={{
cart,
addToCart,
removeFromCart,
increaseQuantity,
decreaseQuantity,
clearCart,
totalPrice,
totalItems,
}}
>
{children}
</CartContext.Provider>
);
};

export default CartProvider;
