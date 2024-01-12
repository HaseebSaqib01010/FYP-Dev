import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import http from "../../axios";
import NavbarComponent from "../auth/components/Navbar";
import signinImage from "../../assets/img/loginImage.jpg";
import Footer from "../auth/components/Footer";

const AdminLogin = () => {
    const [user, setUser] = useState({ text: "", password: "" });
    const [errorMessage, setErrorMessage] = useState("");
    const history = useHistory();

    const onSubmit = (e) => {
        e.preventDefault();

        // Check if username is "admin" and password is "$$$"
        if (user.text === "admin" && user.password === "$$$") {
            // Redirect to the admin page
            history.push("/admin");
        } else {
            // Show error message
            setErrorMessage("Invalid Username or Password");
        }
    };

    return (
        <>
            <NavbarComponent />

            <div className="" style={{ display: "flex" }}>
                <div className="signInImage">
                    <img src={signinImage} alt="" srcSet="" />
                </div>
                <div className="row siginPage" style={{ width: "100%" }}>
                    <div className="container-fluid sigin-card">
                        <div className="signin-form">
                            <div className="card-header">
                                <h3>Welcome to Admin Side</h3>
                            </div>
                            <form onSubmit={onSubmit}>
                                <div className="form-group">
                                    <label>User Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="admin unique name"
                                        required
                                        value={user.text}
                                        onChange={(e) => setUser({ ...user, text: e.target.value })}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        required
                                        className="form-control"
                                        placeholder="Password"
                                        value={user.password}
                                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                                    />
                                </div>
                                <div className="buttonSignup">
                                    <p className="text-danger">{errorMessage}</p>
                                    <button type="submit" className="btn signupbtn">
                                        Sign in
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdminLogin;
