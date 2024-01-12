import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import http from "../../../axios";
import "../auth.css";
import "./forget.css"

const Forgot = () => {
	const [user,setUser] = useState("")
	const [email,setemail] = useState("")

	const handleSubmit=(e)=>{
		// e.preventdefault()
		http.post("/user/change/password", { email: email,password:user }).then((res) => {
			// history.push("/auth");
		  })
		  .catch((err) => {
			if (err.response && err.response.data && err.response.data.message) {
			//   setErrorMessage(err.response.data.message);
			} else {
			  console.error("Unexpected error format:", err);
			  // Handle the error appropriately
			}
			
		  });
	}

	return (
		<>
		<div className="col-6 offset-lg-3 mt-5">

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email"  class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email}  onChange={(e)=>setemail(e.target.value)}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" >Password</label>
    <input type="password" onChange={(e)=>setUser(e.target.value)} class="form-control" id="exampleInputPassword1"/>
  </div>

  <button onClick={()=>handleSubmit()} class="btn btn-primary">Submit</button>

</div>

		



		</>
	);
};

export default Forgot;




// <div className="forgetname">
// <form class="form" onsubmit={(e)=>handleSubmit(e)}>
// 	<p class="login">Log in to Twitter</p>
// 	<div class="inputContainer">
// 		{/* <input type="button" value="next" class="submit" /> */}
// 		{/* <input placeholder="email " type="email" className="fInput email" value={user}  onChange={(e)=>setemail(e.target.value)}/> */}
// 		<input className="fInput email" placeholder="Enter your password" type="text"  />
// 		<input className="fInput email" placeholder="Enter your password" type="text"  />
// 	</div>
// 	<button class="forget">Submit</button>
// 	<div class="con">
// 		<p>don't have account?&nbsp;</p>
// 		<a href="#"> sign in</a>
// 	</div>
// </form>

// </div>