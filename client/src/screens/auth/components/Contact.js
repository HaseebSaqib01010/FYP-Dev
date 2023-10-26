import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import img from "../../../assets/img/invest.jpg";
import danyal from "../../../assets/img/danyal.jpg"
import raahim from "../../../assets/img/raahim.jpg"
import abdullah from "../../../assets/img/abdullah.jpg"
import "../auth.css";

const Contact = () => {
    return (
        <>
            <div className="background">
                <div className="row siginPage homePage">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <div className="navbar d-flex align-items-center col-lg-9">
                            <Link to={''} className="navbar-brand">
                                <img src={logo} alt="logo" className="logo"></img>
                            </Link>
                        </div>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className='row'>
                            <div className='col-sm-12 col-md-4 col-lg-9 '>
                                <ul className="navbar-nav my-2 my-lg-0">
                                    <li className="nav-item">
                                        <div className="homeButton">
                                            <Link type="submit" to="/auth">
                                                <button type="submit" className="btn homebutton">
                                                    Home
                                                </button>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="homeButton">
                                            <Link type="submit" to="/auth/About">
                                                <button type="submit" className="btn homebutton">
                                                    About
                                                </button>
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="homeButton">
                                            <Link type="submit" to="/auth/contact">
                                                <button type="submit" className="btn homebutton">
                                                    Contact
                                                </button>
                                            </Link>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </div>

                    </nav>
                    <div className="container-fluid about-section" style={{ backgroundColor: "#7ce9f0" }}>

                        <h1>Contact Us</h1>

                        <p style={{ color: "black" }}>A platform that primarily deals in investment opportunities is called Investation.
                            The major goals of this project are to link users and investors, supply market gaps, provide investment plans, give users a platform to post their concerns in the non-government sector, and provide premium plans based on the unique needs of investors. This website's primary focus is finding solutions to the issues that the general public faces. The public will have a location to draw attention to the problems and post the demands in order to have the investors satisfy them</p>

                    </div>


                </div>
            </div>

        </>
    );
};

export default Contact;