import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import http from "../../../axios";
import logo from "../../../assets/img/logo.png";
import "../auth.css";
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
const Signin = () => {

	const [user, setUser] = useState({});
	const [errorMessage, setErrorMessage] = useState("");
	const history = useHistory();

	const onSubmit = (e) => {
		e.preventDefault();
		http.post('/user/login', { user: user }).then(res => {
			window.localStorage.setItem("token", res.data.data.token);
			window.localStorage.setItem("user", JSON.stringify(res.data.data.user));
			window.location.reload();
			//   toast("Successfully login!");
		}).catch(err => {
			setErrorMessage("Inavlid Email or Password");
		})
	}
	return (
		<div className="">
			<div className="row siginPage">
				{/* <div className="col-md-4">
					<div className="nav-bar d-flex align-items-center justify-content-between">
					<Link to={''} className="navbar-brand">
                    <img src={logo} alt="logo" className="logo"></img>
                    </Link>
			   		</div>
				</div> */}

				<div className="container-fluid sigin-card">
					<div className="signin-form">
						<div className="card-header">
							<h3>Sign In</h3>
						</div>
						<form onSubmit={onSubmit}>
							<div className="form-group">
								<label>Email address</label>
								<input
									type="email"
									className="form-control"
									placeholder="Email" required
									onChange={(e) => setUser({ ...user, email: e.target.value })}
								/>
							</div>
							<div className="form-group">
								<label>Password</label>
								<input
									type="text" required
									className="form-control"
									placeholder="Password"
									onChange={(e) => setUser({ ...user, password: e.target.value })}
								/>
							</div>
							<div className="buttonSignup">
								<p className="text-danger">{errorMessage}</p>
								<button type="submit" className="btn signupbtn" >
									Sign in
								</button>
							</div>
							<div className="sigininContent">
								<p>
									<Link to="/auth/forgot">Forgot Password?</Link>
								</p>
								<p>
									Don't have an account? <Link to="/auth/signup">Signup</Link>
								</p>
							</div>
						</form>
					</div>
				</div>
			</div>
			{/* <div className="col-md-4"></div> */}
		</div>

	);
};

export default Signin;
