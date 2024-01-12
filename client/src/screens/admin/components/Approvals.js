import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import http from "../../../axios";

const Approvals = () => {
  const [unapprovedPosts, setUnapprovedPosts] = useState([]);
  const [userToken, setUserToken] = useState(""); // State to store the user's authentication token
  const fetchUnapprovedPosts = async () => {
    try {
      // const response = await fetch("/api/post/unapproved", {
      //   method: "GET",
      //   // headers: {
      //   //   Authorization: `Bearer ${userToken}`,
      //   // },
      // });
    let response= await  http.get("/post/unapproved")
    setUnapprovedPosts(response?.data?.data);

    console.log("Fetched unapproved posts:", response?.data?.data);

      if (!response.ok) {
        console.error(`Error response from server: ${response.status} ${response.statusText}`);
        throw new Error("Failed to fetch unapproved posts");
      }

      const data = await response.json();
      console.log("Fetched unapproved posts:", data);
      setUnapprovedPosts(data);
    } catch (error) {
      console.error("Error fetching unapproved posts", error);
    }
  };
  useEffect(() => {
  
  
    fetchUnapprovedPosts();
  }, [userToken]);
  
  const handleApprove = async (postId) => {
    
    try {
      // Add logic to send an API request to approve the post
      const response = await http.put(`/post/postId:${postId}`);
console.log("response",response)
      if (response.status==200) {
        // Update the local state or refetch unapproved posts
        // For simplicity, let's just log a success message here
        fetchUnapprovedPosts()
        console.log(`Post with ID ${postId} approved successfully`);
      } else {
        console.error(`Failed to approve post with ID ${postId}`);
      }
    } catch (error) {
      console.error("Error approving post", error);
    }
  };
console.log(unapprovedPosts)
  const handleDelete = async (postId) => {
    try {
    
      const response = await fetch(`/api/posts/delete/${postId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      });

      if (response.ok) {
   
        console.log(`Post with ID ${postId} deleted successfully`);
      } else {
        console.error(`Failed to delete post with ID ${postId}`);
      }
    } catch (error) {
      console.error("Error deleting post", error);
    }
  };

  return (
    <div style={{ width: "100%" }}>
      <div className="main-content mainBody">
        <table className="table table-hover approvaltable">
          <thead>
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Location</td>
              <td>Post</td>
              <td>Approve</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
            {unapprovedPosts.map((post, index) => (
              
              <tr key={post._id}>
            
                <td>{index + 1}</td>
                <td>{post.by.firstName}</td>
                
                <td>{/* Add location data if available */}</td>
                <td>
                  <Link to={`/posts/${post._id}`} className="seePost">
                    See Post
                  </Link>
                </td>
                <td>
                  <button className="btn-success" onClick={() => handleApprove(post._id)}>
                    Approve
                  </button>
                </td>
                <td>
                  <button className="btn-danger" onClick={() => handleDelete(post._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Approvals;
