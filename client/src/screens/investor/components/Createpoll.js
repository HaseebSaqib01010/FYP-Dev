import React, { useState } from "react";
import http from "../../../axios";
import { useHistory } from "react-router-dom";
import "./item.css"

const CreatePoll = () => {
  const [input, setInput] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState([]);
  const history = useHistory();
  const onChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };
  const onKeyDown = (e) => {
    const { key, keyCode } = e;
    const trimmedInput = input.trim();

    if (keyCode === 13 && trimmedInput.length && !tags.includes(trimmedInput)) {
      e.preventDefault();
      let newTags = [...tags, {name: trimmedInput}];
      setTags(newTags);
      setInput("");
    }

    if (key === "Backspace" && !input.length && tags.length) {
      e.preventDefault();
      const tagsCopy = [...tags];
      const poppedTag = tagsCopy.pop();

      setTags(tagsCopy);
      setInput(poppedTag);
    }
  };

  const onSubmit = () => {
    let body = {
      poll:{
        title: title,
        polls: tags
      }
    }

    http.post('/poll/new', body).then(res => {
      history.push('/investor/polls');
    });
  }
  return (
    <>
     <div>
  <form action="" className="card">
    <div className="custom-create-post">
      <div className="custom-create mt-4">
        <div className="custom-form-group">
        <p style={{backgroundColor:"#204F8C", color:"white",borderRadius:"12px"}}>Create Poll</p>
          <textarea
            className="custom-tags-input custom-polls-title"
            placeholder="Write Poll Name"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="custom-tags">
          {tags.map((tag) => (
            <span className="custom-tag">{tag.name}</span>
          ))}
        </div>
        <div className="custom-form-grouping"></div>
        {/* <textarea
          className="custom-tags-input custom-polls-title-text"
          value={input}
          placeholder="Write Poll Name and Press Enter"
          onKeyDown={onKeyDown}
          onChange={onChange}
        /> */}
      </div>
      <div className="custom-button-container">
        <button className="custom-button" type="button" onClick={onSubmit}>Post</button>
      </div>
    </div>
  </form>
</div>

    </>
  );
};

export default CreatePoll;
