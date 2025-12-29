import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  const total =
    cart?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;

  const discount = total * 0.1;
  const finalAmount = total - discount;

  return (
    <>
      <h2>My Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map(item => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => increaseQty(item.id)}>+</button>
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>

          <p>Total: ₹{item.price * item.quantity}</p>
        </div>
      ))}

      <hr />
      <h3>Total: ₹{total.toFixed(2)}</h3>
      <h3>Discount (10%): ₹{discount.toFixed(2)}</h3>
      <h2>Final Amount: ₹{finalAmount.toFixed(2)}</h2>
    </>
  );
};

export default Cart;
