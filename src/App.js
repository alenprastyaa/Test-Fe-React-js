

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbars from './components/Navbars';
import Home from './components/Home';
import Marketing from './components/Marketing';
import Komisi from './components/Komisi';
import Penjual from './components/marketer';
import ListPayment from './components/ListPayment';
import AddPayment from './components/AddPayment';

const App = () => {
  return (
    <Router>
      <Navbars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/penjual' element={<Penjual />} />
        <Route path='/marketing' element={<Marketing />} />
        <Route path='/komisi' element={<Komisi />} />
        <Route path='/list-payment' element={<ListPayment />} />
        <Route path='/add-payment' element={<AddPayment />} />
      </Routes>
    </Router>
  );
};

export default App;