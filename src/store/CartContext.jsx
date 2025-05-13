import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default function CartContextProvider({ children }) {
  function cartReducer(state, action) {
    if (action.type === "ADD_ITEM") {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.item.id,
      );

      const updatedItems = [...state.items];

      if (existingCartItemIndex > -1) {
        const existingItem = state.items[existingCartItemIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems.push({ ...action.item, quantity: 1 });
      }

      return { ...state, items: updatedItems };
    }

    if (action.type === "REMOVE_ITEM") {
      const existingItemInCartIndex = state.items.findIndex(
        (item) => item.id === action.id,
      );

      const updatedItems = [...state.items];

      if (existingItemInCartIndex > -1) {
        const existingItem = state.items[existingItemInCartIndex];
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };

        if (updatedItem.quantity === 0) {
          updatedItems.splice(existingItemInCartIndex, 1);
        } else {
          updatedItems[existingItemInCartIndex] = updatedItem;
        }
      }
      return { ...state, items: updatedItems };
    }

    return state;
  }

  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  const addItem = (item) => {
    dispatchCartAction({ type: "ADD_ITEM", item });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  };

  //the value that will be passed to the provider
  const cartContext = {
    items: cart.items,
    addItem: addItem,
    removeItem: removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
