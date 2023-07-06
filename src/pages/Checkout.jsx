import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Checkout = () => {
 //usw context

 const { cart, total } = useContext(AppContext);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, phone, address);
  }

  return (
    <div className="container">
      <h1 className="text-center my-4">Checkout</h1>
      <h2>Cart</h2>
      <ul>
        {cart && cart.map((pizza) => (
          <li key={pizza.id}>{pizza.name} - {pizza.count}</li>
        ))}
      </ul>
      <h2>Total: {total} 
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Telefono</label>
          <input type="text" className="form-control" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Direccion</label>
          <input type="text" className="form-control" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Ordenar</button>
      </form>
    </div>
  )
}

export default Checkout;




