import { useState } from "react";
import { useHistory } from "react-router-dom";
import http from "../../../axios";

function Reset () {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();
  
  return (
    <>

   </>
  )
}

export default Reset;