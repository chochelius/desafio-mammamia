import { createContext, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const { data } = useFetch("/pizzas.json");

  useEffect(() => {
    if (data) {
      setPizzas(data);
      setLoading(false);
    }
  }, [data]);

  console.log(pizzas);

  const addToCart = (pizza) => {
    const findProductIndex = cart.findIndex((item) => item.id === pizza.id);
    const pruduct = {
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      count: 1,
      desc: pizza.desc,
      img: pizza.img
    }
    if (findProductIndex >= 0) {
      cart[findProductIndex].count++;
      setCart([...cart]);
    } else {
      setCart([...cart, pruduct]);
    }
  }
  const increment = (index) => {
    cart[index].count++;
    setCart([...cart]);
  }
  const decrement = (index) => {
    if (cart[index].count === 1) {
      cart.splice(index, 1);
    } else {
      cart[index].count--;
    }
    setCart([...cart]);
  }
  const total = cart.reduce((acc, item) => acc + (item.price * item.count), 0);

  const AppProviderValues = {
        pizzas,
        cart,
        loading,
        setCart,
        addToCart,
        increment,
        decrement,
        total
    }

  return (
    <AppContext.Provider value={AppProviderValues}>
      {children}
    </AppContext.Provider>
  );
}
