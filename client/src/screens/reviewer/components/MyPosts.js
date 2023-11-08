// import React, { useEffect, useState } from "react";
// import constants from "../../../constants";

// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

// import http from "../../../axios";
// import "../reviewer.css";

// const MyPosts = () => {
//   const [posts, setPosts] = useState([]);
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     http.get("/post/get/my").then((res) => {
//       setPosts(res.data.data);
//     });
//   }, []);

//   return (
//     <>
//     <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//     <div class="modal-dialog" role="document">
//       <div class="modal-content">
//         <div class="modal-header">
//           <h5 class="modal-title" id="exampleModalLabel">Supports</h5>
//           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div class="modal-body p-4">
//             {
//               posts[index]?.supportBy.map((user) => {
//                 return (
//                   <p>{user.firstName} {user.lastName}</p>
//                 )
//               })
//             }
//             {
//               posts[index]?.supportBy.length === 0 && <p>No supports</p>
//             }
//         </div>
//       </div>
//     </div>
//   </div>
//       {posts.map((post, index) => {
//         return (
//           <div className="post">
//           <div className="row">
//             <div className="col-md-2 profile-img">
//               <div className="img">
//                 <img src={constants.file_url + '/' + post.by.profileImage} />
//               </div>
//             </div>
//             <div className="col-md-4">
//               <h4>{post.by.firstName}</h4>
//               <h6 className="paragrapgh">{post.by.city}, {post.by.country}</h6>
//             </div>
//             <div className="col-md-6">
//               <p className="text-end">
//               </p>
//             </div>
//           </div>
//           <div className="row">
//             <p>
//               {post.body}
//             </p>
//           </div>
//           <div>
//             <Carousel className="carousel">
//               {
//                 post.images.map((image, index) => {
//                   return (
//                     <div key={index}>
//                       <img src={constants.file_url + '/' +  image.url} />
//                     </div>
//                   )
//                 })
//               }
//             </Carousel>
//           </div>
//           <div className="row">
//             <div className="">
//             </div>
//             <div className="col-md-4"></div>
//             <div className="">
//               <h5 className="text-end" onClick={() => setIndex(index)} data-toggle="modal" data-target="#exampleModal">{post.supportCount} Support</h5>
//             </div>
//           </div>
//         </div>
//         )
//       })}
//     </>
//   );
// };

// export default MyPosts;
import React, { useEffect, useState } from "react";
import constants from "../../../constants";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useHistory } from "react-router-dom";

import http from "../../../axios";
import "../reviewer.css";

const MyPosts = () => {
  const [posts, setPosts] = useState([]);
  const [index, setIndex] = useState(0);
  const history = useHistory();
  useEffect(() => {
    http.get("/post/get/my").then((res) => {
      setPosts(res.data.data);
    });
  }, []);
  // console.log('posts', posts)
  const deletePost = async (id) => {
    try {
      const response = await http.delete(`/post/delete/${id}`, {
        method: 'DELETE',

      });

      if (response.status === 200) {
        // If the post was successfully deleted, update the local state
        const newPosts = posts.filter(post => post._id !== id);
        setPosts(newPosts);

      } else {
        const data = await response.json();

      }

    } catch (error) {
      console.error("There was an error deleting the post", error);
      alert('Error deleting post');
    }
  };
  const editPost = (id) => {
    history.push(`/reviewer/editpost/${id}`)
  }
  return (
    <>
      <div class="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Supports</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body p-4">
              {
                posts[index]?.supportBy.map((user) => {
                  return (
                    <p>{user.firstName} {user.lastName}</p>
                  )
                })
              }
              {
                posts[index]?.supportBy.length === 0 && <p>No supports</p>
              }
            </div>
          </div>
        </div>
      </div>
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
                <h4>{post.by.firstName}</h4>
                <h6 className="paragrapgh">{post.by.city}, {post.by.country}</h6>
              </div>
              <div className="col-md-6">
                <p className="text-end">
                </p>
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
                        <img src={constants.file_url + '/' + image.url} />
                      </div>
                    )
                  })
                }
              </Carousel>
            </div>
            <div className="row">
              <div className="col">
              </div>
              <div className="col-md-4"></div>
              <div className="col-md-6">
                <h5 className="text-end" onClick={() => setIndex(index)} data-toggle="modal" data-target="#exampleModal">{post.supportCount} Support</h5>

              </div>
            </div>
            <button onClick={() => deletePost(post._id)}>Delete post</button>
            <button onClick={() => editPost(post._id)}>Edit post</button>
          </div>
        )
      })}
    </>
  );
};

export default MyPosts;
  
