import React, { useEffect, useState } from "react";
import constants from "../../../constants";
import { useHistory } from "react-router-dom";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import http from "../../../axios";
import "../investor.css";
import "./item.css"

const Timeline = () => {
  const [posts, setPosts] = useState([]);
  const history = useHistory();
  useEffect(() => {
    http.get("/post/get/all").then((res) => {
      setPosts(res.data.data);
    });
  }, []);

  const likePost = (id, index) => {
    http.post("/post/support/" + id).then((res) => {
      let newPosts = [...posts];
      newPosts[index].isSupported = !newPosts[index].isSupported;
      newPosts[index].supportCount = newPosts[index].isSupported ? newPosts[index].supportCount + 1 : newPosts[index].supportCount - 1;
      setPosts(newPosts);
    })
  }

  const createChat = (id) => {
    http.post("/chat/create", { user2: id }).then((res) => {
      history.push("/chat");
    })
  }
  const handleNavigate = (by) => {
    console.log(by)
    localStorage.setItem('postuser', JSON.stringify(by));
    history.push(`/investor/userprofile/:${by._id}`)
  }


  return (
    <>
      {posts.map((post, index) => (
        <div className="custom-post">
        <div style={{display:"flex"}}>
          <div className="custom-profile-img"onClick={() => handleNavigate(post.by)}>
            <div className="img" >
              <img src={constants.file_url + '/' + post.by.profileImage} />
            </div>
          </div>
          <div className="custom-info">
            <h3 style={{ cursor: 'pointer' }} onClick={() => handleNavigate(post.by)}>
              {post.by.firstName}
            </h3>
            <div className="post-desc">
            <p>
              {post.by.city}, {post.by.country}
            </p>
            </div>
          </div>
          </div>
          <div className="custom-content" style={{marginTop:"20px"}}>
            <p>{post.body}</p>
            <Carousel className="carousel">
              {post.images.map((image, index) => (
                <div key={index}>
                  <img src={constants.file_url + '/' + image.url} />
                </div>
              ))}
            </Carousel>
            <div className="custom-support">
            <h5 className="text-end">{post.supportCount} Support</h5>
          </div>
            <hr />
          </div>
          <div className="custom-actions">
            <i onClick={() => likePost(post._id, index)} className={post.isSupported ? "fas fa-heart like-filled" : "fas fa-heart"}></i>
            <i onClick={() => createChat(post.by._id)} className="fas fa-comment-alt"></i>
          </div>
         
        </div>
      ))}
    </>

  );
};

export default Timeline;
