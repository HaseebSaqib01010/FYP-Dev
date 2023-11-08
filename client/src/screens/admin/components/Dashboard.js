import React from "react";
import { Link } from "react-router-dom";
import "./admin.css"

const Dashboard = () => {
  return (
    <>
      <div className="dashboard-container">
        
        <div className="main-admin">
        <div className=" admin-card">
                        <img
                          src="https://cdn.pixabay.com/photo/2014/04/02/10/12/checkbox-303113_960_720.png"
                          className="card-img-top img"
                          alt="img1"
                        />

                        <div className="card-body" style={{padding:"25px"}}>
                         
                            <h3 className="card-title">Approvals</h3>
                      

                          <p className="">
                           50 Posts are pending for approvals to be answered.
                           
                          </p>
 
                          <center className="center-div">
                            <Link to="/admin/approvals" className="approvals" style={{color:"white",marginTop:"20px"}}>
                              Approve Posts
                            </Link>
                          </center>
                        </div>
         </div>
      
          
           
               
      <div className="card admin-card">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/942/942751.png"
                        className="card-img-top img"
                        alt="img2"
                      />

                      <div className="card-body">
                      
                          <h3 className="">Queries</h3>
                      
                        <p className="" >
                            50 queries are pending to be answered.
                       
                        </p>

                        <center style ={{marginTop:"20px"}}>
                          <Link to="/admin/queries" className="approvals" style={{color:"white",marginTop:"20px"}}>
                            Queries
                          </Link>
                        </center>
                      </div>
              </div>
          
  </div>
  </div>
    </>
  );
};

export default Dashboard;
