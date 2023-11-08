import React, { useEffect, useState } from "react";
import http from "../../../axios";
import Poll from "react-polls";
import constants from "../../../constants";

const pollQuestion = "Choose between these?";

const Timeline = () => {
  const [posts, setPosts] = useState([]);
  const [pollAnswers, setPollAnswers] = useState([
    { option: "React", votes: 8 },
    { option: "Angular", votes: 2 },
  ]);

  const handleVote = (voteAnswer) => {
    // Create a copy of the current pollAnswers array to avoid directly mutating state
    const updatedPollAnswers = [...pollAnswers];
  
    // Find the answer option that matches the voted option
    const votedOption = updatedPollAnswers.find((option) => option.option === voteAnswer);
  
    if (votedOption) {
      // Increment the vote count for the voted option
      votedOption.votes++;
      setPollAnswers(updatedPollAnswers); // Update the state with the new pollAnswers
    }
  };
  

  useEffect(() => {
    http.get("/poll/get/my").then((res) => {
      setPosts(res.data.data);
      console.log(res.data.data);
    });
  }, []);

  return (
    <>
      {posts.map((post, index) => (
        <div className="post" key={index}>
          <div className="row">
            <div className="col-md-2 profile-img">
              <div className="img">
                <img src={constants.file_url + '/' + post.by.profileImage} alt="Profile" />
              </div>
            </div>
            <div className="col-md-4">
              <h4>{post.by.firstName}</h4>
              <h5>{post.by.city}, {post.by.country}</h5>
            </div>
            <div className="col-md-6">
              <h5 className="text-end"></h5>
            </div>
          </div>
          <div className="row">
            <Poll
              question={post.title}
              answers={post.answers}
              onVote={handleVote}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default Timeline;
