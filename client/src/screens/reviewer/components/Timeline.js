import React, { useEffect, useState } from "react";
import http from "../../../axios";
import Poll from "react-polls";
import constants from "../../../constants";
import { useHistory } from "react-router-dom";

const pollQuestion = "Choose between these?";

const Timeline = () => {

  // this is polls


  const [posts, setPosts] = useState([]);
  const history = useHistory();
  useEffect(() => {
    http.get("/poll/get/all").then((res) => {
      setPosts(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  const [pollAnswers, setPollAnswers] = useState([
    { option: "React", votes: 8 },
    { option: "Angular", votes: 2 },
  ]);
  
  const likePost = (id, index) => {
    http.post("/post/support/" + id).then((res) => {
      let newPosts = [...posts];
      newPosts[index].isSupported = !newPosts[index].isSupported;
      newPosts[index].supportCount = newPosts[index].isSupported ? newPosts[index].supportCount + 1: newPosts[index].supportCount - 1;
      setPosts(newPosts);
      console.log(newPosts)
    })
  }

  const handleVote = (voteAnswer) => {

  };


  // const likePost = (id, index) => {
  //   http.post("/post/support/" + id).then((res) => {
  //     let newPosts = [...posts];
  //     newPosts[index].isSupported = !newPosts[index].isSupported;
  //     newPosts[index].supportCount = newPosts[index].isSupported ? newPosts[index].supportCount + 1: newPosts[index].supportCount - 1;
  //     setPosts(newPosts);
  //   })
  // }

  const handleNavigate=(by)=>{
    console.log(by)
    localStorage.setItem('postuser',JSON.stringify(by));
    history.push(`/reviewer/userprofile/:${by._id}`)
  } 


  return (
    <>
      {
        posts.map((post, index) => {

          return (
            <div className="post">
        <div className="row">
          <div className="col-md-2 profile-img">
            <div className="img">
              <img src={constants.file_url + '/' + post.by.profileImage}/>
            </div>
          </div>
          <div className="col-md-4">
            <h4 style={{'cursor':'pointer'}} onClick={()=>handleNavigate(post.by)}>{post.by.firstName}</h4>
            <h5>{post.by.city}, {post.by.country}</h5>
          </div>
          <div className="col-md-6">
            <h5 className="text-end">{post.supportCount} Views</h5>
          </div>
        </div>
        <div className="row">
          <Poll
            question={post.title}
            answers={post.answers}
            onVote={handleVote}
          />
        </div>
        <div></div>
        <div className="row">
          <div className="col">
            
          <i onClick={() => likePost(post._id, index)} class={post.isSupported ? "fas fa-heart like-filled" :"fas fa-heart"}></i>
            <i class="fas fa-plus-circle"></i>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-6">
            <h5 className="text-end">{post.supportCount} Support</h5>
          </div>
        </div>
      </div>
          )

        })
      }
    </>
  );
};

export default Timeline;
