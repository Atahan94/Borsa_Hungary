import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Header from "./components/Header";
import { animateScroll as scroll } from 'react-scroll';


function App() {
  const scrollToSection = (offsetTop) => {
    scroll.scrollTo(offsetTop, {
      duration: 800,
      delay: 50,
      smooth: 'easeInOutQuart',
    });
  };
  return (
    <div className="main_App">
      <Router>
        <Header Link = {Link}/>
        <img src="/images/Background3.png" />
        <Routes>
          <Route path="/" element={<Home scroll ={scrollToSection} />} />
          <Route path="/projects" element={<Projects scroll ={scrollToSection}/>} />
          <Route path="/contact" element={<Contact scroll ={scrollToSection} />} />
        </Routes>
      </Router>
      <footer className="footer">
        <div className="container">
          <p>© 2023 Borsa Hungary Construction. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
