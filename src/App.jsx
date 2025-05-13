import Header from "./components/Header";
import Meals from "./components/Meals";
import CartContextProvider from "./store/CartContext";

function App() {
  return (
    <UserProgressContextProvider>
    <CartContextProvider>
      <Header />
      <Cart/>
      <Meals />
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
