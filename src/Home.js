import { useState } from "react";
import Cart from "./Cart";

const product = [
  {
    name: "Glass",
  },
  {
    name: "Jug",
  },
  {
    name: "Spoon",
  },
];

export default function Home() {
  const [cartItems, setCartItems] = useState([]);

  function handleAddToCart(index) {
    setCartItems((prev) => [...prev, product[index]]);
  }

  function handleRemoveFromCart(name) {
    console.log(
      name,
      cartItems.filter((item) => item.name !== name),
    );
    setCartItems(cartItems.filter((item) => item.name !== name));
  }

  return (
    <div>
      <div>
        {product.map((item, index) => (
          <div key={index}>
            <h3>{item.name}</h3>
            <button onClick={(e) => handleAddToCart(index)}>Add to cart</button>
          </div>
        ))}
      </div>
      <br />
      <Cart cartItems={cartItems} handleRemoveFromCart={handleRemoveFromCart} />
    </div>
  );
}
