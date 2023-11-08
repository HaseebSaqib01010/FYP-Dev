import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import http from "../../../axios";
import "../../auth/auth.css";
import "./item.css"
const Profile = () => {
  const history = useHistory();

  const [user, setUser] = useState({});
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("user"));

    setUser({
      fullName: `${users.firstName} ${users.lastName}`,
      email: users.email,
      postalCode: users.postalCode,
      city: users.city,
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    http.put('/user/profile', { user: user })
      .then((res) => {
        setMsg("Updated Profile");
        setTimeout(() => {
          setMsg(null);
        }, 1000);
      })
      .catch((err) => {
        // Handle the error
        console.error(err);
      });
  };

  return (
    <div className="containerr">
      <div className="profile-image" style={{display:"flex",marginTop:"10px" ,justifyContent:"center"}}>
        <img src="http://localhost:8000/uploads/user.png" alt="User" />
      </div>
      <form onSubmit={(e) => handleSubmit(e)} className="prof-form">
        <label style={{marginTop:"20px"}}>Username</label>
        <input
          type="text"
          value={user?.fullName}
          onChange={(e) => handleChange(e)}
          name="fullName"
        />

        <label style={{marginTop:"20px"}}>Postal Code</label>
        <input
          type="text"
          value={user?.postalCode}
          onChange={(e) => handleChange(e)}
          name="postalCode"
        />

        <label style={{marginTop:"20px"}}>City</label>
        <input
          type="text"
          value={user?.city}
          onChange={(e) => handleChange(e)}
          name="city"
        />

        <label style={{marginTop:"20px"}}>Email</label>
        <input type="email" value={user?.email} name="email" readOnly />
<div style={{display:"flex",justifyContent:"center",marginTop:"30px"}}>
        <button type="submit" className="button" >
          Save
        </button>
</div>
        {msg && <span className="text-success">{msg}</span>}
      </form>
    </div>
  );
};

export default Profile;
