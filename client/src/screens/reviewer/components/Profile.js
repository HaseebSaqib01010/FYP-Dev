import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import http from "../../../axios";
import "../../auth/auth.css"; 
const Profile = () => {

  // useEffect(() => {
  //   fetch("http://localhost:8000/me")
  //   .then(response => response.json())
  //   .then(data => console.log('yes',data))
  //   .catch(err => console.log(err))
  //   }, []);
  const [user,setUser]  = useState({

  })
  const [msg,setMsg] = ("")
  useEffect(()=>{
    let users = JSON.parse(localStorage.getItem("user"));
    setUser({
      fullName:`${users.firstName} ${users.lastName}`,
      email:users.email,
      postalCode:users.postalCode,
      city:users.city,
    })
  },[])
  


  const handleChange=(e) => {
      const {name,value} = e.target;
      setUser((prevState)=>({...prevState,[name]:value }))
  }
  

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("submit")
		http.put('/user/profile', { user: user }).then(res => {
      setMsg("Updated Profile");
      setTimeout(() => {
      setMsg("");

      }, 1000);
			//   toast("Successfully login!");
		}).catch(err => {
			// setErrorMessage("Inavlid Email or Password");
		})
  }
  
	return (
		<div className="d-flex">
      <div className="row d-flex">
        <div className="col col-sm-4 profile-image d-flex align-items-center justify-content-center">
          <img src="http://localhost:8000/uploads/user.png" />
        </div>
        <form onSubmit={(e)=>handleSubmit(e)} > 
          <div className="col md-3 d-flex flex-column justify-content-center">
            <div className="row d-flex flex-column">
              <div className="col">
                <div className="title py-2 my-2">Username</div>
                <input type="text" value={user?.fullName} onChange={(e)=>handleChange(e)} name="fullName"/>
              </div>
              <div className="col">
                <div className="title py-2 my-2">postal Code</div>
                <input type="text" value={user?.postalCode} onChange={(e)=>handleChange(e)} name="postalCode"/>
              </div>
              <div className="col">
                <div className="title py-2 my-2">City</div>
                <input type="text" value={user?.city} onChange={(e)=>handleChange(e)} name="city"></input>
              </div>
              <div className="col">
                <div className="title py-2 my-2">Email</div>
                <input type="email" value={user?.email}   name="email" readOnly/>
              </div>
            </div>
            <button type="submit">Save</button>
            {msg &&
                <span className="text-success"> {msg}</span>
            }
          </div>

        </form>
      </div>
    </div>
	);
};

export default Profile;
