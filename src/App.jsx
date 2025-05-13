import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContextProvider from "./store/CartContext";
import UserProgressContextProvider from "./store/UserProgressContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App() {
  return (
    <UserProgressContextProvider>
      <CartContextProvider>
        <Cart />
        <Checkout/>
        <Header />
        
        <Meals />
      </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
