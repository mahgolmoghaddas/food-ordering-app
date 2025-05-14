import { createContext, useState } from "react";

export const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
  showThanks: () => {},
  hideThanks: () => {},
});

export default function UserProgressContextProvider({ children }) {
  const [userProgress, setUserProgress] = useState({});

  function showCart() {
    setUserProgress("cart");
  }

  function hideCart() {
    setUserProgress("");
  }

  function showCheckout() {
    setUserProgress("checkout");
  }

  function hideCheckout() {
    setUserProgress("");
  }

  function showThanks() {
    setUserProgress("thanks");
  }
  function hideThanks() {
    setUserProgress("");
  }



  const userProgressctx = {
    progress: userProgress,
    showCart: showCart,
    hideCart: hideCart,
    showCheckout: showCheckout,
    hideCheckout: hideCheckout,
    showThanks: showThanks,
    hideThanks: hideThanks,
  };

  return (
    <UserProgressContext.Provider value={userProgressctx}>
      {children}
    </UserProgressContext.Provider>
  );
}
