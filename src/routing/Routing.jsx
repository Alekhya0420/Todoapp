import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Register from '../components/register/Register';
import ShowList from '../components/show/ShowList';
import Footer from '../layout/Footer';

function Routing() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path='/showlist' element={<ShowList/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default Routing;
