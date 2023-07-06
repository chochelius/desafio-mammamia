import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Cart from './Cart';


const Navbar = () => {
  const { total } = useContext(AppContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">Pizza App</Link>
        <Link to="/Menu" className="navbar-brand">Menu</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/Carro" className="nav-link">Carro</Link>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Cart <span className="badge bg-secondary">{total}</span>
              <Cart />
            </button>

          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
