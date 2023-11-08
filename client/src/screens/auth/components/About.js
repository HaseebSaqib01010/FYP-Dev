import React from "react";
import { Link } from "react-router-dom";
import ifrah from "../../../assets/img/ifrah.png";
import Haseeb from "../../../assets/img/haseeb.jpg";
import Danyal from "../../../assets/img/danyal.png";
import Footer from "./Footer";

import NavbarComponent from "./Navbar"; 

import "./AboutUs.css"

const About = () => {

    
    return (
        <div className="about-us">
            <NavbarComponent /> {/* Include your Navbar here */}
            <div className="about-content">
            <div className="about-content-inner">
                <h1>About Us</h1>
                <p>
                    Welcome to Investation, your gateway to the world of investment opportunities and solutions. We are committed to connecting users and investors, bridging market gaps, and offering tailored investment plans. Our mission is to empower users to voice their concerns in the non-government sector while providing premium investment solutions that cater to the unique needs of our valued investors.
                </p>
             
           </div>
           <h2>What We Do</h2>
            <ul>
                <li>
                    <strong>Connect Users and Investors:</strong> Investation is the bridge that connects individuals seeking investment opportunities with experienced and dedicated investors. We believe in the power of collaboration and partnership to drive economic growth and prosperity.
                </li>
                <li>
                    <strong>Fill Market Gaps:</strong> We identify market gaps and work diligently to provide solutions that benefit both users and investors. Our goal is to create win-win scenarios that drive success and growth.
                </li>
                <li>
                    <strong>Tailored Investment Plans:</strong> We understand that every investor has unique needs and objectives. That's why we offer custom-tailored investment plans to ensure that your financial goals are met.
                </li>
                <li>
                    <strong>Voice of the Public:</strong> Investation gives the general public a voice in the non-government sector. We provide a platform for users to raise concerns, share their ideas, and have their voices heard by potential investors.
                </li>
                <li>
                    <strong>Premium Investment Solutions:</strong> Our premium investment plans are designed to meet the diverse requirements of our investors. Whether you're a seasoned investor or just getting started, Investation has the right solution for you.
                </li>
            </ul>
                <h2>Our Team</h2>
                <div className="Team">
                    <div   class="card" style={{ width: '18rem', backgroundColor: 'aliceblue',  border: '1px solid lightGray'}}>
                    <img class="card-img-top" src={ifrah} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-text">Ifrah Ayaz</h3>
                        <p>SP20-BCS-068</p>
                    </div>
                </div>
                <div class="card" style={{ width: '18rem', backgroundColor: 'aliceblue',  border: '1px solid lightGray'}}>
                    <img class="card-img-top" src={Haseeb} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-text">Haseeb Saqib</h3>
                        <p>SP20-BCS-113</p>
                    </div>
                </div>
                <div class="card" style={{ width: '18rem', backgroundColor: 'aliceblue',  border: '1px solid lightGray'}}>
                    <img class="card-img-top" src={Danyal} alt="Card image cap" />
                    <div class="card-body">
                        <h3 class="card-text">Daniyal Ahmad</h3>
                        <p>SP20-BCS-128</p>
                    </div>
                </div>
            </div>
          <h2>Our Mission</h2>
                <p>
                    At Investation, our primary focus is to find innovative solutions to the challenges that the general public faces. We believe that everyone should have a platform to highlight their issues and express their demands, which we then strive to fulfill through our network of dedicated investors.
                </p>
            <h2>Join Us in Shaping the Future</h2>
            <p>
                We invite you to be a part of Investation's mission to create a world where individuals can thrive and investors can find new opportunities. Together, we can build a brighter future and create innovative solutions to the challenges of our time.
            </p>
            <h2>Contact Us</h2>
            <p>
                Have questions or want to learn more about Investation? Feel free to <Link to="/contact">contact us</Link> today.
            </p>
        </div>
        <Footer/>
        </div>
    );
};


export default About;