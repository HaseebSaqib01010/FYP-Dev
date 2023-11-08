import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import img from "../../../assets/img/invest.jpg";
import Signin from "./Signin";
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import COL from 'react-bootstrap/COL';
import NavbarComponent from "./Navbar";
import "./Home.css";
import Footer from "./Footer";
import {
	BrowserRouter as Router,
	NavLink
} from "react-router-dom";


const Home = () => {
  return (
    <>
      <div className="background">
        <NavbarComponent />

        <div className="banner">
          <div className="banner-content">
            <h1>Read reviews. Write reviews.</h1>
            <p>
              Find Investment Opportunities you can <span>Trust.</span>
            </p>
          </div>
        </div>

        <div className="carousel-container">
          <div className="c-top">
            <h1>Explore Categories</h1>
            <button>View all</button>
          </div>
          <Carousel>
            <Carousel.Item>
              <Container>
                <Row>
                  <COL>Bank</COL>
                  <COL>Jewelry Store</COL>
                  <COL>Pet Store</COL>
                  <COL>Travel Insurance Company</COL>
                </Row>
                <Row>
                  <COL>Car Dealer</COL>
                  <COL>Furniture Store</COL>
                  <COL>Electronics and Technology</COL>
                  <COL>Clothing Store</COL>
                </Row>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container>
                <Row>
                  <COL>Car Dealer</COL>
                  <COL>Furniture Store</COL>
                  <COL>Electronics and Technology</COL>
                  <COL>Clothing Store</COL>
                </Row>
                <Row>
                  <COL>Fitness and Nutrition Service</COL>
                  <COL>Real Estate Agent</COL>
                  <COL>Insurance Agency</COL>
                  <COL>Energy Supplier</COL>
                </Row>
              </Container>
            </Carousel.Item>
            <Carousel.Item>
              <Container>
                <Row>
                  <COL>Bedroom Furniture Store</COL>
                  <COL>ActiveWear Store</COL>
                  <COL>Women Clothing Store</COL>
                  <COL>Men's Clothing Store</COL>
                </Row>
                <Row>
                  <COL>Bicycle Store</COL>
                  <COL>Shoe Store</COL>
                  <COL>Mortgage Broker</COL>
                  <COL>Appliance Store</COL>
                </Row>
                <Row>
                  <COL>Cosmetics Store</COL>
                  <COL>Electronics Store</COL>
                  <COL>Garden Center</COL>
                  <COL>Travel Agency</COL>
                </Row>
              </Container>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="forBusiness">
          <h3>Are you an Investor?</h3>
		  
		  <Link type="submit" to="/auth/signup">
        <li>
            <button type="submit" className="join-button">
              Join
            </button>
            </li>
        </Link>
        </div>

        <div className="green">
          <div className="first-sec">
            <h2 style={{ COLor: "black" }}>
              Bridge <span style={{ COLor: "skyBlue" }}> Gap</span>
              <svg
                width="102"
                height="94"
                viewBox="0 0 102 94"
                xmlns="http://www.w3.org/2000/svg"
                style={{ COLor: "black", transform: "rotate(-16deg)" }}
              >
                {/* Your SVG path here */}
              </svg>
            </h2>
            <p>
              Investation is the bridge that connects individuals seeking investment opportunities with experienced and dedicated investors. We believe in the power of COLlaboration and partnership to drive economic growth and prosperity.
            </p>
            <a href="/about" target="_self">
              <span className="do">What we do</span>
            </a>
          </div>

          <div className="second-sec">
            <h2>Premium Investment Solutions
              <svg
                width="102"
                height="94"
                viewBox="0 0 102 94"
                xmlns="http://www.w3.org/2000/svg"
                style={{ COLor: "white", transform: "rotate(16deg)" }}
              >
                {/* Your SVG path here */}
              </svg>
            </h2>
            <p style={{ COLor: "white" }}>
              Our premium investment plans are designed to meet the diverse requirements of our investors.
            </p>
            <a className="do" href="/trust/transparency?utm_source=hp_banner&amp;utm_medium=consumer&amp;utm_campaign=transparencyreport" target="_self">
              <span>Take a look</span>
            </a>
          </div>
        </div>

        {/* <Signin />

        <p className="paragraph container-fluid COL-lg-9">
          Investation is essentially a platform to address and conceal the issues that ordinary people encounter in a way that can be advantageous not only for people but also for investors who have the authority and capacity to found firms or startups. It will serve as a platform where issues, requirements, or demands will COLlide with the resources, authority, and powers necessary to secure solutions for all parties.
        </p>

        <h2>Are You?</h2>
        <div className="homeButton">
          <Link type="submit" to="/auth/signup">
            <button type="submit" className="btn homebutton">
              Reviewer
            </button>
          </Link>
        </div>

        <div className="homeButton">
          <Link type="submit" to="/auth/signup">
            <button type="submit" className="btn homebutton">
              Investor
            </button>
          </Link>
          <div className="">
            <p>
              Already have an account?{" "}
              <Link to="/auth/signin">Sign In</Link>
            </p>
          </div>
		  
        </div> */}
		{/* <footer className="footer">
      <div className="footer_wrapper">
        <div className="footer-logo">
          <img src={logo} alt="Footer Logo" style={{width:'220px'}} />
        </div>
        <div className="footer-content">
          <section className="about-sec">
            <h3>About</h3>
            <ul>
              <li>About us</li>
              <li>Jobs</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>How Investation works</li>
              <li>Transparency Report</li>
              <li>Press</li>
              <li>Investor Relations</li>
            </ul>
          </section>
          <section className="community-sec">
            <h3>Community</h3>
            <ul>
              <li>Trust in reviews</li>
              <li>Help Center</li>
              <li>Log in</li>
              <li>Sign up</li>
              <li>App</li>
            </ul>
          </section>
          <section className="business-sec">
            <h3>Businesses</h3>
            <ul>
              <li>Business</li>
              <li>Products</li>
              <li>Plans & Pricing</li>
              <li>Business Login</li>
              <li>Blog for Business</li>
            </ul>
          </section>
          <section className="follow-sec">
            <h3>Follow us on</h3>
            <ul>
              <li><i className="fa-brands fa-facebook" style={{ COLor: "#ffffff" }}></i></li>
              <li><i className="fa-brands fa-twitter" style={{ COLor: "#ffffff" }}></i></li>
              <li><i className="fa-brands fa-instagram" style={{ COLor: "#f2f4f7" }}></i></li>
              <li><i className="fa-brands fa-linkedin" style={{ COLor: "#ffffff" }}></i></li>
              <li><i className="fa-brands fa-youtube" style={{ COLor: "#ffffff" }}></i></li>
            </ul>
          </section>
          <section className="country-sec">
            <h3>Choose country</h3>
            <div className="country-selector">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button">
                  United States
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li><a className="dropdown-item active" href="#">United Kingdom</a></li>
                  <li><a className="dropdown-item" href="#">New Zealand</a></li>
                  <li><a className="dropdown-item" href="#">Portugal</a></li>
                  <li><a className="dropdown-item">Denmark</a></li>
                  <li><a className="dropdown-item" href="#">Spain</a></li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div className="footer_legal">
          <ul>
            <li>Legal</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Guidelines for Reviewers</li>
            <li>System status</li>
            <li>Cookie Preferences</li>
            <li>Modern Slavery Statement</li>
          </ul>
        </div>
        <div className="foot-end">
          <h6>© 2023 Investation, Inc. All rights reserved.</h6>
        </div>
      </div>
    </footer> */}
	<Footer/>


      </div>
    </>
  );
};

export default Home;
