import { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);

  const { data } = useFetch("/pizzas.json");

  useEffect(() => {
    if (data) {
      setPizzas(data);
    }
  }
  , [data]);

  const addToCart = (pizza) => {
    setCart([...cart, pizza]);
  }

  const removeFromCart = (id) => {
    setCart(cart.filter((pizza) => pizza.id !== id));
  }

  const clearCart = () => {
    setCart([]);
  }

  return (
    <AppContext.Provider value={{
      pizzas,
      cart,
      addToCart,
      removeFromCart,
      clearCart,
    }}>
      {children}
    </AppContext.Provider>
  );

}

export default AppProvider;
