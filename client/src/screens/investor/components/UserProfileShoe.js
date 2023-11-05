import React , {useState, useEffect} from 'react'
import {useParams,useLocation} from 'react-router-dom'
import http from "../../../axios";
function UserProfileShoe() {
    const { id } = useParams();
    // console.log(id)
    const location = useLocation();
    //   const userss = location.state.user;
    
    const [user,setUser] = useState({
        fullName:"",
        postalCode:"",
        city:"",
        email:"",
    
    })
    useEffect(()=>{
        let user ={
            _id:id
        }
        // console.log("userLocation",userss)
    //     http.get('/user/me', {  user }).then(res => {
			
	// 		//   toast("Successfully login!");
    //         console.log("res",res)
    // //   setMsg("Updated Profile");
    // //   setTimeout(() => {
    // //   setMsg(null);

    // //   }, 1000);
	// 	}).catch(err => {
	// 		// setErrorMessage("Inavlid Email or Password");
	// 	})

    },[id])

    useEffect(()=>{
        let userr= JSON.parse(localStorage.getItem("postuser"));

        setUser({
            fullName: `${userr?.firstName} ${userr?.lastName}`,
            postalCode:userr?.postalCode,
            city: userr?.city,
            email:userr?.email,
        
        })
    },[])



  return (
    <div>
      <div className="d-flex">
        <div className="row d-flex">
          <div className="col md-2 profile-image d-flex align-items-center justify-content-center">
            <img src="http://localhost:8000/uploads/user.png" />
          </div>
          {/* <form onSubmit={(e)=>handleSubmit(e)} >  */}
          <div className="col md-3 d-flex flex-column justify-content-center">
            <div className="row d-flex flex-column">
              <div className="col">
                <div className="title py-2 my-2">Username</div>
                <span>{user?.fullName}</span>
              </div>
              <div className="col">
                <div className="title py-2 my-2">postal Code</div>
                <span> {user?.postalCode}</span>
              </div>
            
              <div className="col">
                <div className="title py-2 my-2">City</div>
                <span>{user?.city}</span>
              </div>
              <div className="col">
                <div className="title py-2 my-2">Email</div>
                <span>{user?.email} </span>
              </div>
            </div>
            
            
          </div>

        {/* </form> */}
        </div>
      </div>
    </div>
  )
}

export default UserProfileShoe
