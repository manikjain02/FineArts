// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import { useEffect, useState } from 'react';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn', true);
  // const isRole = localStorage.getItem('isRole');
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/contact" element={<Contact/>} />
        {/* <Route exact path='/' element={<Protectedroute/>} > */}
          <Route exact path="/login" element={isLoggedIn ?<Dashboard /> : <Login />}/>
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/dashboard" element={<Dashboard/>} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
