import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import http from "../../../axios";
import logo from "../../../assets/img/logo.png";
import signup from "../../../assets/img/signup.jpg";
import NavbarComponent from "./Navbar";
import Footer from "./Footer";
const SignUp = () => {
  const [user, setUser] = useState({
    role: 2,
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [isOtp, setIsOtp] = useState(false);
    const [otp, setOtp] = useState('');
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      setErrorMessage("Password does not match");
      setTimeout(() => {
        setErrorMessage(null);
      }, 1000);
    } else {
      console.log("match");
      console.log(user);

      http
        .post("/user/signup", { user: user })
        .then((res) => {
          if (res.data.success) {
                      setIsOtp(true)
                    }
          // history.push("/auth");
        })
        .catch((err) => {
          if (err.response && err.response.data && err.response.data.message) {
            setErrorMessage(err.response.data.message);
          } else {
            console.error("Unexpected error format:", err);
            // Handle the error appropriately
          }
        });
    }
  };
  const submitotp = async () => {
        http.post("/user/verify/otp", { otp: otp, email: user.email }).then((res) => {
          console.log('response otp', (res))
          if (res.status == 200) {
    
            history.push("/auth");
          }
        })
      }
  const emailValidation = () => {
    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!user.email || regex.test(user.email) === false) {
      setErrorMessage("Email is not valid");
      return false;
    }
    return true;
  };

  return (
    <>
      <NavbarComponent />
      <div className="background" style={{display:"flex"}}>
      <div style={{width:"60%"}}>
      <img src={signup} alt="" srcset="" style={{width:"100%"}}/>

      </div>
        <div className="row siginPage">
          <div className="col-md-2">
            <div className="nav-bar d-flex align-items-center justify-content-between">
              <Link to={''} className="navbar-brand">
                <img src={logo} alt="logo" className="logo" />
              </Link>
            </div>
          </div>
          <div className="col-md-8" style={{marginBottom:"120px"}}>
          <div className="container-fluid sigin-card signupPage" style={{marginRight:"70px",height:"100%",width:"100%"}}>
          {
            isOtp?<>
            <div className="col-md-6">
                       <div className="form-group">
                         <label>Otp*</label>
                         <input
                           type="text"
                           className="form-control"
                           placeholder="enter otp"
                           onChange={(e) =>
                             setOtp(e.target.value)
                           }
                           required
                         />
                       </div>
                       <button onClick={submitotp}>submitotp</button>
                    </div>
            </>:<>

  <div className="signup-form">
    <div className="card-header">
      <h3>Sign Up</h3>
    </div>
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>First Name*</label>
            <input
              type="text"
              className="form-control"
              placeholder="First Name"
              onChange={(e) =>
                setUser({ ...user, firstName: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Last Name*</label>
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              onChange={(e) =>
                setUser({ ...user, lastName: e.target.value })
              }
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Email*</label>
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={(e) =>
                setUser({ ...user, email: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Country*</label>
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              onChange={(e) =>
                setUser({ ...user, country: e.target.value })
              }
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>State*</label>
            <input
              type="text"
              className="form-control"
              placeholder="State"
              onChange={(e) =>
                setUser({ ...user, state: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>City*</label>
            <input
              type="text"
              className="form-control"
              placeholder="City"
              onChange={(e) =>
                setUser({ ...user, city: e.target.value })
              }
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Postal Code*</label>
            <input
              type="text"
              className="form-control"
              placeholder="Postal Code"
              onChange={(e) =>
                setUser({ ...user, postalCode: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Gender*</label>
            <input
              type="text"
              className="form-control"
              placeholder="Gender"
              onChange={(e) =>
                setUser({ ...user, gender: e.target.value })
              }
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Password*</label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={(e) =>
                setUser({ ...user, password: e.target.value })
              }
              required
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Confirm Password*</label>
            <input
              type="password"
              className="form-control"
              placeholder="Confirm Password"
              onChange={(e) =>
                setUser({
                  ...user,
                  confirmPassword: e.target.value,
                })
              }
              required
            />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-danger text-center">
          {errorMessage && errorMessage}
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
        <div>
           <h1 style={{color:"#14279B"}}> Select Account Type</h1>
           <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <div className="">
                      <div className="form-check form-check-flex">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="role"
                          value="2"
                          onChange={(e) =>
                            setUser({ ...user, role: +e.target.value })
                          }
                        />
                        <label className="form-check-label" htmlFor="role">
                          Investor
                        </label>
                      </div>
                    </div>

                    <div className="">
                      <div className="form-check form-check-flex">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="role"
                          value="3"
                          onChange={(e) =>
                            setUser({ ...user, role: +e.target.value })
                          }
                        />
                        <label className="form-check-label" htmlFor="role">
                          Reviewer
                        </label>
                      </div>
                    </div>
                    </div>
          </div>
          <div className="buttonSignup">
            <button type="submit" className="btn signupbtn">
              Sign Up
            </button>
          </div>
          
          <div className="sigininContent">
       
            <p>
              Already have an account? <Link to="/auth/signin">Sign In</Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  </div>
            </>
        
          }
</div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
// import React, { useState } from "react";
// import { Link, useHistory } from "react-router-dom";
// import http from "../../../axios";
// import logo from "../../../assets/img/logo.png";
// const SignUp = () => {
//   const [user, setUser] = useState({
//     role: 2,
//   });
//   const [isOtp, setIsOtp] = useState(false);
//   const [otp, setOtp] = useState('');
//   const [errorMessage, setErrorMessage] = useState("");
//   const history = useHistory();
//   const onSubmit = (e) => {
//     e.preventDefault();

//     if (user.password !== user.confirmPassword) {
//       setErrorMessage("Password does not match");
//       setTimeout(() => {
//         setErrorMessage(null);
//       }, 1000);
//       // console.log("no ,match")
//       // return;
//     } else {
//       // setErrorMessage("");
//       console.log("match")
//       console.log(user);

//       http.post("/user/signup", { user: user }).then((res) => {
//         console.log('response signup', (res))
//         if (res.data.success) {
//           setIsOtp(true)
//         }
//         // history.push("/auth");
//       })
//         .catch((err) => {
//           if (err.response && err.response.data && err.response.data.message) {
//             setErrorMessage(err.response.data.message);
//           } else {
//             console.error("Unexpected error format:", err);
//             // Handle the error appropriately
//           }

//         });

//     }
//   };

//   const emailValidation = () => {
//     const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     if (!this.state.email || regex.test(this.state.email) === false) {
//       this.setState({
//         error: "Email is not valid"
//       });
//       return false;
//     }
//     return true;
//   }
//   const submitotp = async () => {
//     http.post("/user/verify/otp", { otp: otp, email: user.email }).then((res) => {
//       console.log('response otp', (res))
//       if (res.status == 200) {

//         history.push("/auth");
//       }
//     })
//   }

//   return (
//     <>
//       <div>
//         <div className="background">
//           <div className="row siginPage">
//             <div className="col-md-2">
//               <div className="nav-bar d-flex align-items-center justify-content-between">
//                 <Link to={''} className="navbar-brand">
//                   <img src={logo} alt="logo" className="logo"></img>
//                 </Link>
//               </div>
//             </div>
//             <div className="col-md-8">
//               <div className="container-fluid sigin-card signupPage">
//                 {
//                   isOtp ? <>
//                     <div className="col-md-6">
//                       <div className="form-group">
//                         <label>Otp*</label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           placeholder="enter otp"
//                           onChange={(e) =>
//                             setOtp(e.target.value)
//                           }
//                           required
//                         />
//                       </div>
//                       <button onClick={submitotp}>submitotp</button>
//                     </div>
//                   </> : <>

//                     <div className="signup-form">
//                       <div className="card-header">
//                         <h3>Sign Up</h3>
//                       </div>
//                       <form onSubmit={(e) => onSubmit(e)}>
//                         <div className="row">
//                           <div className="col-md-6">
//                             <div className="form-check form-check-inline">
//                               <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name="inlineRadioOptions"
//                                 id="role"
//                                 value="2"
//                                 onChange={(e) =>
//                                   setUser({ ...user, role: +e.target.value })
//                                 }
//                               // required
//                               />
//                               <label className="form-check-label" htmlFor="role">
//                                 Investor
//                               </label>
//                             </div>
//                           </div>

//                           <div className="col-md-6">
//                             <div className="form-check form-check-inline">
//                               <input
//                                 className="form-check-input"
//                                 type="radio"
//                                 name="inlineRadioOptions"
//                                 id="role"
//                                 value="3"
//                                 onChange={(e) =>
//                                   setUser({ ...user, role: +e.target.value })
//                                 }
//                               // required
//                               />
//                               <label className="form-check-label" htmlFor="role">
//                                 Reviewer
//                               </label>
//                             </div>
//                           </div>
//                           <div className="col-md-6">
//                             <div className="form-group">
//                               <label>First Name*</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="First Name"
//                                 onChange={(e) =>
//                                   setUser({ ...user, firstName: e.target.value })
//                                 }
//                                 required
//                               />
//                             </div>
//                           </div>
//                           <div className="col-md-6">
//                             <div className="form-group">
//                               <label>Last Name*</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Last Name"
//                                 onChange={(e) =>
//                                   setUser({ ...user, lastName: e.target.value })
//                                 }
//                                 required
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row">
//                           <div className="col-md-6">
//                             <div className="form-group">
//                               <label>Email*</label>
//                               <input
//                                 type="email"
//                                 className="form-control"
//                                 placeholder="Email"
//                                 onChange={(e) =>

//                                   setUser({ ...user, email: e.target.value })
//                                 }
//                                 required
//                               />
//                             </div>
//                           </div>
//                           <div className="col-md-6">
//                             <div className="form-group">
//                               <label>Country*</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Country"
//                                 onChange={(e) =>
//                                   setUser({ ...user, country: e.target.value })
//                                 }
//                                 required
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row">
//                           <div className="col-md-6">
//                             <div className="form-group">
//                               <label>State*</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="State"
//                                 onChange={(e) =>
//                                   setUser({ ...user, state: e.target.value })
//                                 }
//                                 required
//                               />
//                             </div>
//                           </div>
//                           <div className="col-md-6">
//                             <div className="form-group">
//                               <label>City*</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="City"
//                                 onChange={(e) =>
//                                   setUser({ ...user, city: e.target.value })
//                                 }
//                                 required
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row">
//                           <div className="col-md-6">
//                             <div className="form-group">
//                               <label>Postal Code*</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Postal Code"
//                                 onChange={(e) =>
//                                   setUser({ ...user, postalCode: e.target.value })
//                                 }
//                                 required
//                               />
//                             </div>
//                           </div>
//                           <div className="col-md-6">
//                             <div className="form-group">
//                               <label>Gender*</label>
//                               <input
//                                 type="text"
//                                 className="form-control"
//                                 placeholder="Gender"
//                                 onChange={(e) =>
//                                   setUser({ ...user, gender: e.target.value })
//                                 }
//                                 required
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row">
//                           <div className="col-md-6">
//                             <div className="form-group">
//                               <label>Password*</label>
//                               <input
//                                 type="password"
//                                 className="form-control"
//                                 placeholder="Password"
//                                 onChange={(e) =>
//                                   setUser({ ...user, password: e.target.value })
//                                 }
//                                 required
//                               />
//                             </div>
//                           </div>
//                           <div className="col-md-6">
//                             <div className="form-group">
//                               <label>Confirm Password*</label>
//                               <input
//                                 type="password"
//                                 className="form-control"
//                                 placeholder="Confirm Password"
//                                 onChange={(e) =>
//                                   setUser({
//                                     ...user,
//                                     confirmPassword: e.target.value,
//                                   })
//                                 }
//                                 required
//                               />
//                             </div>
//                           </div>
//                         </div>
//                         <div className="row "></div>
//                         <div className="row">
//                           <div className="col-md-12 text-danger text-center">
//                             {errorMessage && errorMessage}
//                           </div>

//                           <div className="col-md-12">
//                             <div className="buttonSignup">
//                               <button
//                                 type="submit"
//                                 className="btn signupbtn"
//                               // onClick={onSubmit}
//                               >
//                                 Sign Up
//                               </button>
//                             </div>
//                             <div className="sigininContent">
//                               <p>
//                                 Already have an account?{" "}
//                                 <Link to="/auth/signin">Sign In</Link>
//                               </p>
//                             </div>
//                           </div>
//                         </div>
//                       </form>
//                     </div>
//                   </>
//                 }
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;

