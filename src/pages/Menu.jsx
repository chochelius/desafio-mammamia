//menu page that shows the items available to order fetched using the custom hook useFetch
// renders items from the data fetched from the file pizza.json
// renders the loading spinner while fetching data
// renders the error message if there is an error fetching data
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { useFetch } from '../hooks/useFetch';

const Menu = () => {
    const { addToCart } = useContext(AppContext);
    const { data, loading, error } = useFetch('/pizza.json');

    if (loading) {
        return (
            <div className="loading">
                <h2>Loading...</h2>
            </div>
        )
    }

    if (error) {
        return (
            <div className="error">
                <h2>{error}</h2>
            </div>
        )
    }

    return (
        <div className="menu">
            {data.pizzas.map((pizza) => (
                <div className="menu__item" key={pizza.id}>
                    <img src={pizza.img} alt={pizza.name} />
                    <div className="menu__item__details">
                        <h2>{pizza.name}</h2>
                        <p>{pizza.desc}</p>
                        <p>£{pizza.price}</p>
                        <button onClick={() => addToCart(pizza)}>Add to cart</button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Menu;

