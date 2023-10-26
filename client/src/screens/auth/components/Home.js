import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/logo.png";
import img from "../../../assets/img/invest.jpg";
import Signin from "./Signin";
import "../auth.css";
import NavbarComponent from "./Navbar";
import {
	BrowserRouter as Router,
	NavLink
} from "react-router-dom";

const Home = () => {
	return (
		<>
			<div className="background">
				<div className="row siginPage homePage">
				<NavbarComponent/>
					<div className="container-fluid col-lg-9 col-lg-12">
						<div className="container-fluid homeContent">
							<h2>Welcome To Investation</h2>
							<p>A Smart Plateform For Investors and a problem Solver for Reviewer</p>
							{/* <img src={img} alt="image" className="col-lg-12 img1"></img> */}
							<Signin/>
							<p className="paragraph container-fluid col-lg-9">
							Investation is essentially a platform to address and conceal the issues that ordinary people encounter in a way that can be advantageous not only for people but also for investors who have the authority and capacity to found firms or startups. It will serve as a platform where issues, requirements, or demands will collide with the resources, authority, and powers necessary to secure solutions for all parties. 
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
							</div>
						</div>
					</div>

				</div>
			</div>
		</>
	);
};

export default Home;
