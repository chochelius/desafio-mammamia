import React from 'react';
import { AppContext } from '../context/AppContext';

// function to select 4 random items from an array
const selectRandomItems = (array, n) => {
  if (!Array.isArray(array)) return [];
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
};

const Carousel = () => {
    const { data } = React.useContext(AppContext);
    const [items, setItems] = React.useState([]);
    
    React.useEffect(() => {
        if (data) {
        setItems(selectRandomItems(data, 4));
        }
    }, [data]);
    
    return (
        <div className="carousel">
        {items.map((item) => (
            <div className="carousel__item" key={item.id}>
            <img src={item.img} alt={item.name} />
            <div className="carousel__item__details">
                <h2>{item.name}</h2>
                <p>{item.desc}</p>
                <p>£{item.price}</p>
            </div>
            </div>
        ))}
        </div>
    );
    }

export default Carousel;

