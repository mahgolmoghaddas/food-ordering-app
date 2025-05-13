import React, { useContext } from 'react'
import Modal from '../elements/Modal'
import { UserProgressContext } from '../store/UserProgressContext'
import Input from './Input';
import { CartContext } from '../store/CartContext';
import Button from '../elements/Button';

function Checkout() {
   const progressContext=  useContext(UserProgressContext)
    const cartContext= useContext(CartContext)
   const totalPrice = cartContext.items.reduce((acc, item) => {
    return acc + item.price * item.quantity;}, 0);
    console.log('progress', progressContext.progress)

    const closeModal = () => {
        progressContext.hideCheckout();
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log('formData', formData)
        const data = Object.fromEntries(formData.entries());
        console.log('data', data)
        
        console.log('orderData', orderData)
        // send orderData to server
       try{ const response = fetch('http://localhost:3000/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ items:cartContext.items, customer: data })
        });}
        catch (error) {
            console.error('Error:', error);
        }

        // close modal
        //closeModal();
    }

return (
    <Modal className="cart" open={progressContext.progress === 'checkout'} onClose={closeModal}>
        <form onSubmit={handleSubmitForm}>
            <h2>Checkout</h2>
            <p>Total Amount: ${totalPrice}</p>
            <Input label="Full Name" type="text" id="full-name" name="full-name" />
            <Input label="Email" type="email" id="email" name="email" />
            <Input label="Street" type="text" id="street" name="street" />
            <div>
                <Input label="Postal Code" type="text" id="postal-code" name="postal-code" />
                <Input label="City" type="text" id="city" name="city" />
            </div>
       
        <p>
        <Button  type="button" textOnly onClick={closeModal}>Close</Button>
       {cartContext.items.length>0 && <Button>Pay</Button>}
      </p>
      </form>
    </Modal>
)
}

export default Checkout