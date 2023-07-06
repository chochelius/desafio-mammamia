import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
  const { total } = useContext(AppContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">Pizza App</Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/Menu" className="nav-link">Menu</Link>
          </li>
          <li className="nav-item">
            <Link to="/Carro" className="nav-link">Carro ({total})</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
