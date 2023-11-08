import React, { useState,useEffect } from "react";
import logo from "../../../../assets/img/logo.png";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Switch, Route, useHistory } from "react-router-dom";
import "../../../auth/components/Navbar/Navbar.css";
import 'bootstrap/dist/css/bootstrap.css';



const NavbarComponent = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const navLinksClass = isNavOpen ? "nav-links open" : "nav-links";
    const [hot, setHot] = useState([]);
	const history = useHistory();
	const logout = () => {
		window.localStorage.removeItem("token");
		window.localStorage.removeItem("user");
		window.location.reload();
		history.push("/auth");
	}


	

    return (
        <Navbar>
            <div className="logo">
                <Link to="/auth">
                    <div className="lo" style={{ width: '150px' }}>
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
            <div style={{ display: "flex", listStyle: "none", gap: "130px", paddingRight: "30px", marginRight: "120px" }}>

                <div className="row icons px-2">
                    <div className="message-button">
                        <Link to={'/chat'}>
                            <i class="fa-solid fa-comment-dots"></i>
                        </Link>
                    </div>

                    <div className="logout-button">
                        <Link to={'/auth/signin'} onClick={logout}>
                            <i class="fa-solid fa-power-off"></i></Link>
                    </div>
                </div>

            </div>
        </Navbar>
    );
};
export default NavbarComponent;