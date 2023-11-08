import React from 'react';
import logo from "../../../assets/img/logo.png";
import './Footer.css'; // Add your CSS file if needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_wrapper">
        <div className="footer-logo">
          <img src={logo} alt="Footer Logo" style={{ width: '220px' }} />
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
              <li><i className="fa-brands fa-facebook" style={{ color: '#ffffff' }}></i></li>
              <li><i className="fa-brands fa-twitter" style={{ color: '#ffffff' }}></i></li>
              <li><i className="fa-brands fa-instagram" style={{ color: '#f2f4f7' }}></i></li>
              <li><i className="fa-brands fa-linkedin" style={{ color: '#ffffff' }}></i></li>
              <li><i className="fa-brands fa-youtube" style={{ color: '#ffffff' }}></i></li>
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
    </footer>
  );
};

export default Footer;
