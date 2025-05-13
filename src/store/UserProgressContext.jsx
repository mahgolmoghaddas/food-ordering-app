import { set } from "mongoose";
import { createContext } from "react";

export const UserProgressContext = createContext({
    progress: '',
    showCart:() =>{},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {},
});

export default function UserProgressContextProvider({ children }) {

const [userProgress, setUserProgress] = useState({})

    

    function showCart() {
        setUserProgress('cart')
    }

    function hideCart() {
        setUserProgress('')
    }

    function showCheckout(){
        setUserProgress('checkout')
    }

    function hideCheckout(){
        setUserProgress('')
    }

    const userProgressctx ={
        progress: userProgress,
        showCart: showCart,
        hideCart: hideCart,
        showCheckout: showCheckout,
        hideCheckout: hideCheckout,
    }
     

    
    return (
        <UserProgressContext.Provider value={userProgressctx}>
        {children}
        </UserProgressContext.Provider>
    );
}