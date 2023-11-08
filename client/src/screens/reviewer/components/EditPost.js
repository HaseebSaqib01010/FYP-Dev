import React, { useEffect, useRef, useState } from "react";
import http from "../../../axios";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Carousel } from "react-responsive-carousel";
import constants from "../../../constants";

const EditPost = (props) => {
  const postId = props.match.params.id;
  const history = useHistory();

  const inputFile = useRef(null);
  const [Images, setImages] = useState([]);
  const [files, setFiles] = useState([]);
  const [body, setBody] = useState("");

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
      }
    }

    http.post("/post/new", data).then((res) => {
      history.push("/reviewer/myposts");
    });
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await http.get(`/post/get/${postId}`);

        setBody(response.data.data.body);
        setImages(response.data.data.images)
      } catch (err) {

      }
    };

    fetchPost();
  }, [props.match.params.postId]);
  const handleUpdate = () => {
    http.put(`/post/update/${postId}`, { body: body })
      .then(response => {
        alert('successfully updated')
      })
      .catch(err => {
        // setError('Failed to update the post');
      });
  };


  return (
    <>
      <div className="col-md-12">
        <div className="col-md-8 create-post">
          <div className="d-flex justify-content-end">
            <button className="btn" type="button" onClick={handleUpdate}>update</button>
          </div>
          <form>
            <div className="create mt-8">
              <div className="form-group">
                <textarea placeholder="Write Your Observation to attract a Business Investment" value={body} onChange={(e) => setBody(e.target.value)}></textarea>
              </div>
              <div className="col-md-12 ms-2">
                {
                  files.map((file, index) => {
                    return <span class="badge rounded-pill text-bg-secondary" onClick={() => deleteFile(index)}>{file.name}</span>
                  })
                }
              </div>
              <div>
                <div className="form-group">
                  <i class="fas fa-paperclip" onClick={onFileClick}></i>
                  <input
                    type="file"
                    id="file"
                    ref={inputFile}
                    onChange={(e) => onFileChange(e)}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
            </div>
            <Carousel className="carousel">
              {
                Images.map((image, index) => {
                  return (
                    <div key={index}>
                      <img src={constants.file_url + '/' + image.url} />
                    </div>
                  )
                })
              }
            </Carousel>

          </form>
        </div>
      </div>
    </>
  );
};

export default EditPost;
