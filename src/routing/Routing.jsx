import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Register from '../components/register/Register';
import Login from '../components/login/Login';
import Update from '../components/update/Update';
import Allblog from '../components/allblog/Allblog';
import Getimage from '../components/getImage/Getimage';
import Blogdetails from '../components/blogdetail/Blogdetails';
import Pagecontent from '../components/page Content/Pagecontent';
import TestimonialId from '../components/page Content/TestimonialId';
import Teampic from '../components/page Content/Teampic';

function Routing() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/update" element={<Update/>}/>
        <Route path="/allblog" element={<Allblog/>}/>
        <Route path="/allblog/image/:id" element={<Getimage/>}/>
        <Route path="/allblog/details/:detail" element={<Blogdetails/>}/>
        <Route path="/pagecontent" element={<Pagecontent/>}/>
        <Route path="/pagecontent/testimonial/:testId" element={<TestimonialId/>}/>
        <Route path='/pagecontent/teampic/:teamid' element={<Teampic/>}/>
      </Routes>
    </Router>
  );
}

export default Routing;
