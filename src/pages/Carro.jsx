import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';


const Carro = () => {

  const { cart, increment, decrement, total } = useContext(AppContext);

  return (
    <div className="container overflow-visible mb-5">
      <h1 className="text-center my-4">Carro de compras</h1>
      <h1>Cart total: $ {total}</h1>
      <h1>
        {/* list all products on the cart */}
        {cart && cart.map((pizza) => (
          <li key={pizza.id}>{pizza.name} - {pizza.count} - ${pizza.price}</li>
        ))}

      </h1>
      <div>
        <Link to="/Checkout" className="btn btn-primary mb-5 mx-3">Pagar</Link>
        <Link to="/Menu" className="btn btn-primary mb-5 mx-3">Volver</Link>
      </div>
      <div className="row">
        {cart && cart.map((pizza) => (
          <div className="col-12 col-md-4 mb-4" key={pizza.id}>
            <div className="card">
              <img src={pizza.img} alt={pizza.name} className='card-img-top' />
              <div className="card-body">
                <h5 className="card-title">{pizza.name}</h5>
                <p className="card-text">{pizza.desc}</p>
                <br />
                <p className="card-text">{pizza.ingredients}</p>
                <p className="card-text fs-3">${pizza.price}</p>
                <button onClick={() => increment(pizza.id)} className='btn btn-primary'>+</button>
                <span>{pizza.count}</span>
                <button onClick={() => decrement(pizza.id)} className='btn btn-primary'>-</button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carro;