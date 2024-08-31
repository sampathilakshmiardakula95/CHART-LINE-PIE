import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar.js';
import Account  from './pages/Account.js';
import Calculator from './pages/Calculator';
import Channel from './pages/Channel';
import   Customer from './pages/Customer';
import   Dashboard from './pages/Dashboard';
import   Integration  from './pages/Integration';
import   Inventory from './pages/Inventory';
import   Order   from './pages/Order';
import  Reports from './pages/Reports';
import  Returns  from './pages/Returns';
import  Shipping  from './pages/Shipping';

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/account" element={<Account />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/channel" element={<Channel />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/order" element={<Order />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/returns" element={<Returns />} />
          <Route path="/shipping" element={<Shipping />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;