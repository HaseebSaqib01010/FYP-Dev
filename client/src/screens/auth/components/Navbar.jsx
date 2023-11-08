import React, { useState } from "react";
import logo from "../../../assets/img/logo.png";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar/Navbar.css";
import 'bootstrap/dist/css/bootstrap.css';


const NavbarComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const navLinksClass = isNavOpen ? "nav-links open" : "nav-links";

  return (
    <Navbar>
      <div className="logo">
      <Link to="/auth">
          <div className="lo"  style={{width:'150px'}}>
            <img src={logo} alt="logo" className="logo" />
          </div>
        </Link>
      </div>
      <div className="hamburger" onClick={toggleNav}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      {/* Place the ul inside the hamburger div */}
      <ul className={navLinksClass}>
        <li>
          <Link to="/auth">Home</Link>
        </li>
        <li>
          <Link to="/auth/about">About</Link>
        </li>
        <li>
          <Link to="/auth/contact">Contact</Link>
        </li>
      </ul>
      <div style={{ display: "flex", listStyle: "none", gap: "130px", paddingRight: "30px",marginRight:"-120px"}}>
      <Link type="submit" to="/auth/signin">
        <li>
            <button type="submit" className="login-button">
              Login
            </button>
            </li>
        </Link> 
      
        <Link type="submit" to="/auth/signup">
        <li>
            <button type="submit" className="join-button">
              Join
            </button>
            </li>
        </Link>
         
      
      </div>
    </Navbar>
  );
};
export default NavbarComponent;