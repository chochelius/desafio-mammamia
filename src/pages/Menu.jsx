import React from 'react';
import { useFetch } from '../hooks/useFetch';
import Card from '../components/Card';

const Menu = () => {
    const { data, loading } = useFetch('/pizzas.json');

    return ( 
        <div className="container overflow-visible mb-5">
            <h1 className="text-center my-4">Conoce Nuestro Menu</h1>

            <div className="row">
                {loading && <p className="text-center">Cargando...</p>}
                {data && data.map((pizza) => (
                    <div className="col-12 col-md-4 mb-4" key={pizza.id}>
                        <Card pizza={pizza} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
