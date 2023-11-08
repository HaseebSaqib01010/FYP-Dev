import React, { Component, useState } from 'react';
import Poll from 'react-polls';

import user from '../../assets/img/user.jpg';

const pollQuestion = 'Choose between these?';
const pollAnswers = [
  { option: 'React', votes: 8 },
  { option: 'Angular', votes: 2 },
];

const Post = () => {
  const [pollAnswers, setPollAnswers] = useState([...pollAnswers]);

  const handleVote = (voteAnswer) => {
    const newPollAnswers = pollAnswers.map((answer) => {
      if (answer.option === voteAnswer) answer.votes++;
      return answer;
    });
    setPollAnswers(newPollAnswers);
  };

  return (
    <div className='post'>
      <div className='row'>
        <div className='col-md-2 profile-img'>
          <div className='img'>
            <img src={user} alt='User' />
          </div>
        </div>
        <div className='col-md-4'>
          <h4>Danyal</h4>
          <h5>Lahore</h5>
        </div>
        <div className='col-md-6'>
          <h5 className='text-end'>231 Views</h5>
        </div>
      </div>
      <div className='row'>
        <Poll question={pollQuestion} answers={pollAnswers} onVote={handleVote} />
      </div>
      <div>
      </div>
      <div className='row'>
        <div className='col'>
          <i className='fas fa-plus-circle'></i>
          <i className='fas fa-heart'></i>
        </div>
        <div className='col-md-4'></div>
        <div className='col-md-6'>
          <h5 className='text-end'>231 Support</h5>
        </div>
      </div>
    </div>
  );
};

class Polls extends Component {
  render() {
    // You can map over an array of posts or use a loop to render multiple posts.
    const numberOfPosts = 5;
    const posts = Array.from({ length: numberOfPosts }, (_, index) => <Post key={index} />);

    return <>{posts}</>;
  }
}

export default Polls;
