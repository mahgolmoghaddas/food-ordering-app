import { useContext } from 'react';
import logoImg from '../assets/logo.jpg';
import { CartContext } from '../store/CartContext';

export default function Header() {

    const orderContext = useContext(CartContext);
    const totalItems = orderContext.items.reduce((acc, item) => {
        return acc + item.quantity;
    }, 0) // the 0 is the initial value of the accumulator
    //this reduce function is allowing us to get the total number of items in the cart by summing up the quantity of each item in the items array. The initial value of the accumulator is set to 0, so if there are no items in the cart, the total will be 0.
    //it can loop the items array and for each item, it adds the quantity of that item to the accumulator (acc). 
    //The final result is the total number of items in the cart.
    //the complexity of reduce is O(n) because it has to loop through the entire array of items to calculate the total quantity. 
    //This means that the time it takes to run the function will increase linearly with the size of the items array. In other words, if you double the number of items in the array, it will take roughly twice as long to calculate the total quantity.
    //the space complexity is O(1) because it only uses a fixed amount of memory to store the accumulator and the current item being processed. It does not create any new arrays or objects that depend on the size of the input array.


  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <button>{`Cart (${totalItems})`}</button>
      </nav>
    </header>
  );
}