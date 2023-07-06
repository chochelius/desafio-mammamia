import React, { useContext, useState, useEffect, useCallback } from 'react';
import { AppContext } from '../context/AppContext';
import Card from '../components/Card';
import { useFetch } from '../hooks/useFetch';

//get data from context and show it in the inicio page

const Inicio = () => {
  //useFetch to get the pizzas
  const { data, loading } = useFetch('/pizzas.json');

  //useState to save the pizzas
  const [randomPizzas, setRandomPizzas] = useState([]);

  //useContext to get the addToCart function
  useContext(AppContext);

  //function to get 2 random pizzas

  const getRandomPizzas = useCallback(() => {
    if (data) {
      //get a random number between 0 and the length of the pizzas array
      const random1 = Math.floor(Math.random() * data.length);
      let random2 = Math.floor(Math.random() * data.length);

      //if the random numbers are the same, get another one
      while (random1 === random2) {
        random2 = Math.floor(Math.random() * data.length);
      }

      //save the pizzas in the state
      setRandomPizzas([data[random1], data[random2]]);
    }
  }, [data]);

  //useEffect to get the random pizzas when the component is mounted
  useEffect(() => {
    getRandomPizzas();
  }, [getRandomPizzas]);

  //useEffect to get the random pizzas when the data changes
  useEffect(() => {
    getRandomPizzas();
  }, [data, getRandomPizzas]);

  return (
    <div className="container overflow-visible mb-5">
      <h1 className="text-center my-4">Las Pizzas de la Semana</h1>

      <div className="row mb-5">
        {loading && <p className="text-center">Cargando...</p>}
        {randomPizzas && randomPizzas.map((pizza) => (
          <div className="col-6 mx-auto mb-5" key={pizza.id}>
            <Card pizza={pizza} className="mb-5" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Inicio;
