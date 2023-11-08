import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import http from "../../../axios";
import "../../auth/auth.css";
const Profile = () => {

  // const [user, setUser] = useState([]);
  const history = useHistory();
  // useEffect(() => {
  //   http.get("/post/get/all").then((res) => {
  //     setUser(res.data.data);
  //   });
  // }, []);


  const [user,setUser]  = useState({

  })
  const [msg,setMsg] = useState(null)
  useEffect(()=>{
    let users = JSON.parse(localStorage.getItem("user"));
    console.log(users)
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
			
			//   toast("Successfully login!");
      setMsg("Updated Profile");
      setTimeout(() => {
      setMsg(null);

      }, 1000);
		}).catch(err => {
			// setErrorMessage("Inavlid Email or Password");
		})
  }


  return (
    <>
      
      <div className="">
  <div className="profile-image  align-items-center justify-content-center">
    <img src="http://localhost:8000/uploads/user.png" alt="User" />
  </div>
  <form onSubmit={(e) => handleSubmit(e)} className="d-flex flex-column">
    <div className="title py-2 my-2">Username</div>
    <input type="text" value={user?.fullName} onChange={(e) => handleChange(e)} name="fullName" />

    <div className="title py-2 my-2">Postal Code</div>
    <input type="text" value={user?.postalCode} onChange={(e) => handleChange(e)} name="postalCode" />

    <div className="title py-2 my-2">City</div>
    <input type="text" value={user?.city} onChange={(e) => handleChange(e)} name="city" />

    <div className="title py-2 my-2">Email</div>
    <input type="email" value={user?.email} name="email" readOnly />
p
    <button type="submit" className="btn btn-primary">
      Save
    </button>

    {msg && <span className="text-success">{msg}</span>}
  </form>
</div>

    
    </>
  );
};

export default Profile;
