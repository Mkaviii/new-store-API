import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const ProductCard = ({ item }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  // Check if this product is already in cart
  const isInCart = cart.some(cartItem => cartItem.id === item.id);

  return (
    <div className="box">
      {/* Product Image */}
      <img src={item.image} alt={item.title} />

      {/* Product Title */}
      <h5>{item.title}</h5>

      {/* Product Price */}
      <p>₹{item.price}</p>

      {/* Add / Remove Cart Button */}
      <button
        onClick={() =>
          isInCart ? removeFromCart(item.id) : addToCart(item)
        }
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </div>
  );
};

export default ProductCard;
