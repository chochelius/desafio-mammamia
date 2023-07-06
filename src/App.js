import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRouter from './routes/AppRouter';
import { AppProvider } from './context/AppContext';


const App = () => {
  return (
    <AppProvider>
      <Router>
        <Navbar />
        <AppRouter />
        <Footer />
      </Router>
    </AppProvider>
  );
}

export default App;