
import React, { useState } from 'react';

function Navbar() {
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const close = () => setVisible(false);
  const customStyles = {
    content: {
      width: '7%',
      height: '18%',
      margin: 'auto',
      borderRadius: '10px',
      backgroundColor: '#f8f9fa',
      transform: 'translate(660%, -175%)',
      zIndex: '1000',
    },
    Link:{
      textDecoration:'none',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
    },
  };
  const userId = 1;
  return (
    <div className="navbar-container">
      <div className="title">
      <img src="https://ncsm.gov.in/storage/settings/logo-main.png?ver=1.3.5" alt="NCSM"/>
    </div>
        <span></span>
    </div>
  );
}

export default Navbar;


/*import React, { useState } from 'react';
import logo from '../asserts/img/logo.png'; // Adjust the path to your logo

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="tm-main-content" id="top">
      <div className="tm-top-bar-bg" style={{ height: '10vh' }} />
      <div className="tm-top-bar" id="tm-top-bar" style={{ height: '10vh', position: 'relative' }}>
        <div className="container">
          <div className="row">
            <nav className="navbar">
              <div className="navbar-brand">
                <img src={logo} alt="Site logo" className="navbar-logo" />
                <span className="navbar-title">Level</span>
              </div>
              <button className="navbar-toggler" onClick={toggleNavbar}>
                <span className="navbar-toggler-icon">&#9776;</span>
              </button>
              <div className={`navbar-collapse ${isNavOpen ? 'active' : ''}`} id="mainNav">
                <ul className="navbarl">
                  <li className="nav-item">
                    <a className="nav-link" href="#top">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#tm-section-4">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#tm-section-6">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
*/