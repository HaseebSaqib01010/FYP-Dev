import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import http from "../../../axios";
import "../auth.css";
import "./forget.css"

const Forgot = () => {
	const [user,setUser] = useState("")

	const handleSubmit=(e)=>{
		// http.post("/user/signup", { user: user }).then((res) => {
		// 	history.push("/auth");
		//   })
		//   .catch((err) => {
		// 	if (err.response && err.response.data && err.response.data.message) {
		// 	  setErrorMessage(err.response.data.message);
		// 	} else {
		// 	  console.error("Unexpected error format:", err);
		// 	  // Handle the error appropriately
		// 	}
			
		//   });
	}

	return (
		<>
			<div className="forgetname">
				<form class="form" onsubmit={(e)=>handleSubmit(e)}>
					<p class="login">Log in to Twitter</p>
					<div class="inputContainer">
						{/* <input type="button" value="next" class="submit" /> */}
						<input placeholder="email " type="email" class="fInput email" value={user}  onChange={(e)=>setUser(e.target.value)}/>

						<input placeholder="Enter your password" type="text" class="fInput pass" />
					</div>
					<button class="forget">Submit</button>
					<div class="con">
						<p>don't have account?&nbsp;</p>
						<a href="#"> sign in</a>
					</div>
				</form>

			</div>



		</>
	);
};

export default Forgot;
