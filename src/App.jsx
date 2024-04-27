import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
import Course from './pages/course/course.jsx';
import Contactus from './pages/contactus/contactus.jsx';
import Gallery from './pages/gallery/gallery.jsx';
import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx'
import Register from './pages/register/register.jsx'

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
              <Route path="/Register" element={<Register />} />
            </Routes>
        </div>

        <Footer/>
    </Router>    
  );
}

export default App;
