import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Card from '../components/Card';
//get data from context and show it in the inicio page

const Inicio = () => {

    const { pizzas } = useContext(AppContext);

    return (
        <div className="container overflow-visible mb-5">
            <h1 className="text-center my-4">Conoce Nuestro Menu</h1>

            <div className="row">
                {pizzas && pizzas.map((pizza) => (
                    <div className="col-12 col-md-4 mb-4" key={pizza.id}>
                        <Card pizza={pizza} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Inicio;