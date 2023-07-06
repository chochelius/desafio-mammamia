import { useContext, React } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useFetch } from '../hooks/useFetch';

//useParams for get idpizza
//useFetch for get pizzas
//useContext for get addToCart function




const Pizza = () => {
  const navigate = useNavigate();
  const { idpizza } = useParams();
  const { data, loading } = useFetch('/pizzas.json');
  const { addToCart } = useContext(AppContext);

  const pizzas = data;





  const handleNavigate = () => {
    navigate(`/menu`);
  }

  while (loading) {
    return <p className="text-center">Cargando...</p>
  }

  const pizza = pizzas.filter(pizza => pizza.id === idpizza)[0];

  return (
    <div className="container overflow-visible mb-5">
      <button onClick={handleNavigate} className="btn btn-primary mt-5">Volver</button>
      <h1 className="text-center my-4">Pizza</h1>
      <div className="row">
        <div className="col-12 col-md-4 mb-4 mx-auto" key={pizza.id}>
          <div className="card mx-auto">
            <img src={pizza.img} alt={pizza.name} className='card-img-top' />
            <div className="card-body">
              <h5 className="card-title">{pizza.name}</h5>
              <p className="card-text">{pizza.desc}</p>
              <br />
              <p className="card-text">{pizza.ingredients}</p>
              <p className="card-text fs-3">${pizza.price}</p>
              <button onClick={() => addToCart(pizza)} className='btn btn-primary'>Add to cart</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Pizza;