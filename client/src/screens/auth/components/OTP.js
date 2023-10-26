import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import http from "../../../axios";
import "../auth.css";

const OTP = () => {
	const [otp, setOtp] = useState(new Array(4).fill(""));
  const history = useHistory();
  const [error, setError] = useState("");


  const onSubmit = () => {
    http.post('/user/verify/otp', {otp: otp.join(""), email: window.localStorage.getItem('email')}).then(res => {
      history.push("/auth/reset");
    }).catch(err => {
      setError("Invalid OTP");
    });
  }

	return (
		<>
			
		</>
	);
};

export default OTP;
