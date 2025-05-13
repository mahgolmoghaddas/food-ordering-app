import React, { useContext } from "react";
import Modal from "../elements/Modal";
import Button from "../elements/Button";
import { UserProgressContext } from "../store/UserProgressContext";
import { CartContext } from "../store/CartContext";
import CartItem from "./CartItem";

//responsible to put out cart data
function Cart() {
  const userProgress = useContext(UserProgressContext);
  const cartcontext = useContext(CartContext);
  const totalPrice = cartcontext.items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const closeModal = () => {
    userProgress.hideCart();
  };

  const proceedToCheckout = () => {
    userProgress.showCheckout();
  }

  return (
    <Modal className="cart" open={userProgress.progress === "cart"} onClose={userProgress.progress === 'cart' ? closeModal : null}>
      <h2> Your Cart</h2>
      <ul>
        {cartcontext.items.map((item) => (
          <CartItem
            key={item.id}
            price={item.price}
            name={item.name}
            quantity={item.quantity}
            onIncrease={() => cartcontext.addItem(item)}
            onDecrease={() => cartcontext.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">Total Price: {totalPrice}</p>
      <p>
        <Button onClick={closeModal}>Close</Button>
       {cartcontext.items.length>0 && <Button onClick={proceedToCheckout}> Go to Checkout</Button>}
      </p>
    </Modal>
  );
}

export default Cart;
