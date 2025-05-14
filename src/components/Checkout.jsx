import React, { useContext } from "react";
import Modal from "../elements/Modal";
import { UserProgressContext } from "../store/UserProgressContext";
import Input from "./Input";
import { CartContext } from "../store/CartContext";
import Button from "../elements/Button";
import useHttp from "../hooks/useHttp";

const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  }

function Checkout() {
  const progressContext = useContext(UserProgressContext);
  const cartContext = useContext(CartContext);
  const totalPrice = cartContext.items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  console.log("progress", progressContext.progress);

  const closeModal = () => {
    progressContext.hideCheckout();
    clearData();
  };

  const { data, isLoading, error, sendHttpRequest, clearData } = useHttp(
    "http://localhost:3000/orders", config
    
  );

  function handleSubmit(event) {
    event.preventDefault();

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries()); // { email: test@example.com }


    sendHttpRequest(JSON.stringify({
          order: {
            items: cartContext.items,
            customer: customerData,
          },
        }),)

        

  }


  console.log("data", data);

  if (data && !error) {
    return (
      <Modal
        open={progressContext.progress === 'checkout'}
        onClose={closeModal}
      >
        <h2>Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes.
        </p>
        <p className="modal-actions">
          <Button onClick={closeModal}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      className="cart"
      open={progressContext.progress === "checkout"}
      onClose={closeModal}
    >
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: ${totalPrice}</p>
        <Input label="Full Name" type="text" id="full-name" name="name" />
        <Input label="Email" type="email" id="email" name="email" />
        <Input label="Street" type="text" id="street" name="street" />
        <div>
          <Input
            label="Postal Code"
            type="text"
            id="postal-code"
            name="postal-code"
          />
          <Input label="City" type="text" id="city" name="city" />
        </div>

        <p>
          <Button type="button" textOnly onClick={closeModal}>
            Close
          </Button>
          {cartContext.items.length > 0 && <Button>Pay</Button>}
        </p>
      </form>
    </Modal>
  );
}

export default Checkout;
