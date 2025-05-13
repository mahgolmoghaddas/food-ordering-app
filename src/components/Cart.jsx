import React, { useContext } from "react";
import Modal from "../elements/Modal";
import Button from "../elements/Button";
import { UserProgressContext } from "../store/UserProgressContext";

//responsible to put out cart data
function Cart() {

    const userProgress = useContext(UserProgressContext)
  const totalPrice = cartcontext.items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const cartcontext = useContext(CartContext);
  return (
    <Modal open={userProgress.progress === 'cart'}>
      <h2> Your Cart</h2>
      <ul>
        {cartcontext.items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
      <p className="cart-total">Total Price: {totalPrice}</p>
      <p>
        <Button>Close</Button>
        <Button> Go to Checkout</Button>
      </p>
    </Modal>
  );
}

export default Cart;
