import React, {useState, useEffect} from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import http from "../../../axios";
import { useHistory } from "react-router-dom";
import constants from "../../../constants";
import './allpost.css'



// import "../investor.css";
function Allpost() {


    const [posts, setPosts] = useState([]);
    const history = useHistory();
    useEffect(() => {
      http.get("/post/get/all").then((res) => {
        setPosts(res.data.data);
        console.log(res.data.data)
      });
    }, []);
    const handleNavigate=(by)=>{
        console.log(by)
        localStorage.setItem('postuser',JSON.stringify(by));
        history.push(`/reviewer/userprofile/:${by._id}`)
        
      } 

      const likePost = (id, index) => {
        http.post("/post/support/" + id).then((res) => {
          let newPosts = [...posts];
          newPosts[index].isSupported = !newPosts[index].isSupported;
          newPosts[index].supportCount = newPosts[index].isSupported ? newPosts[index].supportCount + 1: newPosts[index].supportCount - 1;
          setPosts(newPosts);
        })
      }
      
  return (
   <>

{posts.map((post, index) => {
        return (
          <div className="post">
          <div className="row">
            <div className="col-md-2 profile-img">
              <div className="img">
                <img src={constants.file_url + '/' + post.by.profileImage} />
              </div>
            </div>
            <div className="col-md-4">
              <h4 style={{'cursor':'pointer'}} onClick={()=>handleNavigate(post.by)}>{post.by.firstName}</h4>
              <h6 className="paragrapgh">{post.by.city}, {post.by.country}</h6>
            </div>
            <div className="col-md-6">
            </div>
          </div>
          <div className="row">
            <p>
              {post.body}
            </p>
          </div>
          <div>
            <Carousel className="carousel">
              {
                post.images.map((image, index) => {
                  return (
                    <div key={index}>
                      <img src={constants.file_url + '/' +  image.url} />
                    </div>
                  )
                })
              }
            </Carousel>
          </div>
          <div className="row">
            <div className="col">
              <i onClick={() => likePost(post._id, index)} class={post.isSupported ? "fas fa-heart like-filled" :"fas fa-heart"}></i>
              {/* <i onClick = {() => createChat(post.by._id)} class="fas fa-comment-alt"></i> */}
            </div>
            <div className="col-md-4"></div>
            <div className="col-md-6">
            <div className="support-contaienr">
              <h5 className="text-end">{post.supportCount} Support</h5>
              <div className="support-list-wrapper">
                    <div>
                        <span>{post?.supportBy.map(post=>{
                            return <><span> {post?.firstName}</span><br/> </>
                        })}</span>
                        
                    </div>
              </div>
            </div>

            </div>
          </div>
        </div>
        )
      })}

   </>
  )
}

export default Allpost
