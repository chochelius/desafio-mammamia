import { Route, Routes } from 'react-router-dom';
import Carro from '../pages/Carro';
import Checkout from '../pages/Checkout';
import Contacto from '../pages/Contacto';
import Inicio from '../pages/Inicio';
import Menu from '../pages/Menu';
import Pizza from '../pages/Pizza';


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/carro" element={<Carro />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/pizza/:idpizza" element={<Pizza />} />

    </Routes>
  );
}

export default AppRouter;