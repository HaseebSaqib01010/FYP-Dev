import React,{useEffect,useState} from "react";
import http from "../../../axios";

const Investors = () => {
  const[allReviewers,setalReviewers]= useState([])
  const [show, setShow] = useState()
  const getallReviewerAccount = async () => {
    try {

    let response= await  http.get("/user/investor")
    // setUnapprovedPosts(response?.data?.data);
    setalReviewers(response.data);

    console.log("Fetched response getallReviewerAccount:", response.data);

      if (!response.ok) {
        console.error(`Error response from server: ${response.status} ${response.statusText}`);
        throw new Error("Failed to fetch unapproved posts");
      }

      // const data = await response.json();
      // console.log("Fetched unapproved posts:", data);
    } catch (error) {
      console.error("Error fetching unapproved posts", error);
    }
  };
  useEffect(()=>{
    getallReviewerAccount()

  },[])
  console.log('allrevuewerd',allReviewers)
  return (
    <>
          
        <div className="main-content overflow-auto" style={{width:"100%",height:"100vh"}}>
        <table className="table table-hover">
            <thead>
              <tr>
                <td>#</td>
                <td>Name</td>
                <td>Email</td>
                <td>Area</td>
                <td>Number</td>
                
                
              </tr>
            </thead>
            <tbody>
            {
              allReviewers.map((item,index,array)=>{
                return(

              <tr>
                <td>{index+1}</td>
                <td>{item.firstName}</td>
                <td>{item.email}</td>
                <td>
                  {item.city}
                </td>
                <td>
                  +92 300 0000000
                </td>
              </tr>
                )
              })
            }
            </tbody>
          </table>
        </div>
      
    </>
  );
};

export default Investors;
