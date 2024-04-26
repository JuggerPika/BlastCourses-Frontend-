import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/navbar.tsx';
import Course from './pages/course/course.tsx';
import Contactus from './pages/contactus/contactus.tsx';
import Gallery from './pages/gallery/gallery.tsx';
import Home from './pages/home/home.tsx';
import Login from './pages/login/login.tsx'
import RegistrationForm from './pages/register/RegistrationForm.tsx';


function App() {
  return (
    
    <Router>
      <NavBar />
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contactus" element={<Contactus />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Course" element={<Course />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<RegistrationForm />} />
          </Routes>
      </div>
  </Router>
  );
}

export default App;
