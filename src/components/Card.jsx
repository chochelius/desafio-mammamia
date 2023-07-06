import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Card = ({ pizza }) => {
  const { addToCart } = useContext(AppContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/menu/${pizza.id}`);
  }
  
  const { desc, id, img, ingredients, name, price } = pizza;
  return (
    <div className="card" id={id}>
      <img src={img} alt={name} className='card-img-top' />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{desc}</p>
        <br />
        <p className="card-text">{ingredients}</p>
        <p className="card-text fs-3">${price}</p>
        <button className="btn btn-primary mx-3 my-1" onClick={handleNavigate}>Ver Pizza</button>
        <button onClick={()=>addToCart(pizza)} className='btn btn-primary mx-3 my-1'>Add to cart</button>

      </div>

    </div>
  )
}

export default Card;
