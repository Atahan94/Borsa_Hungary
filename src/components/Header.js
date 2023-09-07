import React, { useState, useEffect } from 'react';

const Header = ({ Link }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [isSmallImage, setIsSmallImage] = useState("Ana_logo.png");
  const [navbarClasses, setNavbarClasses] = useState({
    navbar : "navbar",
    navbarBrand: "navbar-brand"
  })

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 700) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    handleResize(); // Initial check

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



window.addEventListener('scroll', () => {
if (window.scrollY >= 165) {
    setIsSmallImage("Ana_logo_2.jpg");
    setNavbarClasses({
      navbar : "fixed-navbar",
      navbarBrand: "navbar-brand-fixed"
    })
  } else {
    setIsSmallImage("Ana_logo.png");
    setNavbarClasses({
      navbar : "navbar",
      navbarBrand: "navbar-brand"
    })
  }
});
  return (
    <header id="header" className="header">
      <nav className={navbarClasses.navbar}>
          <div className={navbarClasses.navbarBrand} > <img src={`/images/${isSmallImage}`}/></div>
         { isSmallScreen? <div class="dropdown-content">
         <button class="menu-button"></button>
            <ul class="dropdown-links">
              <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
              </li>
              <li>
              <Link to="/#services" className="nav-link">
                Services
              </Link>
              </li>
              <li>
              <Link to="/#about-us" className="nav-link">
                About Us
              </Link>
              </li>
              <li>
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
              </li>
              <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
              </li>
            </ul>
          </div>
          :
         <div className="navbar-nav">
          <ul>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#about-us" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          </div>}
      </nav>
      <div className="header-content">
        <h1 className="heading">Building Excellence</h1>
        <p className="subheading">We bring your vision to life</p>
      </div>
    </header>
  );
};

export default Header;
