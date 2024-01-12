import React, { useRef, useState, useEffect } from "react";
import http from "../../../axios";
import { useHistory } from "react-router-dom";
import "./index.css"
const CreatePost = () => {
  const history = useHistory();

  const inputFile = useRef(null);
  const [files, setFiles] = useState([]);
  const [body, setBody] = useState("");
  const [budget, setBudget] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const onFileClick = () => {
    inputFile.current.click();
  };

  const onFileChange = (e) => {
    let formdata = new FormData();
    formdata.append("file", e.target.files[0]);
    let fileName = e.target.files[0].name;
    http.post("/upload", formdata).then((res) => {
      let newFiles = [...files];
      newFiles.push({
        name: fileName,
        url: res.data.url,
      });
      setFiles(newFiles);
    });
  };

  const deleteFile = (index) => {
    let newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  }

  const onSubmit = () => {
    let data = {
      post: {
        body: body,
        images: files,
        category: selectedCategory,
        budget: budget,
      }
    }

    console.log('janay wala data -=== ', data);

    http.post("/post/new", data).then((res) => {
      history.push("/reviewer/myposts");
    });
  }

  useEffect(() => {
    http.get("/category").then(res => setCategories(res.data.categories));
  }, [])

  return (
    <>
      <div className="" >
        <div className=" create-post" >
          <form>
            <div className="create mt-8">
              <div className="text-container">
                <textarea placeholder="Write Your Observation to attract a Business Investment" onChange={(e) => setBody(e.target.value)}></textarea>
              </div>
              <div className="text-container">
                <input placeholder="Budget" value={budget} onChange={(e) => setBudget(e.target.value)} />
              </div>
              <div>
      <label>Select Category:</label>
      <select value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select an option</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>

      {/* Display selected category */}
      {/* {selectedCategory && (
        <p>Selected Category ID: {selectedCategory}</p>
      )} */}
    </div>
              <div className="col-md-12 ms-2">
                {
                  files.map((file, index) => {
                    return <span class="badge rounded-pill text-bg-secondary" onClick={() => deleteFile(index)}>{file.name}</span>
                  })
                }
              </div>
              <div className="text-tools">

                <div className="image-div">
                <p>Add Image</p>
                  <i class="fas fa-paperclip" onClick={onFileClick}></i>
                  <input
                    type="file"
                    id="file"
                    ref={inputFile}
                    onChange={(e) => onFileChange(e)}
                    style={{ display: "none" }}
                  />
                </div>
                <div className="d-flex justify-content-end">
              <button className="create-btn"type="button" onClick={onSubmit}>Post</button>
            </div>
              </div>
            </div>
                
          </form>
        </div>
      </div>
    </>
  );
};

export default CreatePost;
