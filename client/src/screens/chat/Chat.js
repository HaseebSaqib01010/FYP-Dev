import "./chat.css"
import user from "../../assets/img/user.jpg"
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import http from "../../axios";
import constants from "../../constants";
function Chat (){
    const [chats, setChats] = useState([]);
    const messagesEndRef = useRef(null)
    const [message, setMessage] = useState("");
    const [index, setIndex] = useState(0);
    const user = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        getChats();
    }, []);

    const getChats = () => {
        http.get("/chat/get/all").then((res) => {
            // console.log(res.data.data[0]._id)
            setChats(res.data.data);
            scrollToBottom();
        })
    }


    const scrollToBottom = () => {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const sendMessage = () => {
        // console.log("chats",chats)
        // console.log("chats[0].id",chats[0].id)
        http.post("/chat/message", {chatId:  chats[0]._id, message: message}).then((res) => {
            getChats();
            document.getElementById("msg").value = "";
        })
    }

// console.log("chats>>",chats)

    return (
        <div className="chat">
            <div class="messaging">
                <div class="inbox_msg">
                    <div class="inbox_people">
                        <div class="headind_srch">
                            <div class="recent_heading">
                                <h4>
                                    <Link to="/investor">
                                    <i class="fas fa-arrow-circle-left me-3"></i>
                                    </Link>
                                    Inbox
                                </h4>
                            </div>
                        </div>
                        <div class="inbox_chat">
                            {
                                chats.map((chat, ind) => {
                                    return (
                                        <div class={ind === index ? "chat_list active_chat" : "chat_list"}>
                                            <div class="chat_people" onClick={() => setIndex(ind)}>
                                                <div class="chat_img"> <img src={
                                                    constants.file_url + '/' + (user._id.toString() === chat.user1._id.toString() ? chat.user2.profileImage : chat.user1.profileImage)
                                                }/> </div>
                                                <div class="chat_ib">
                                                    <h5>
                                                        {
                                                            user._id.toString() === chat.user1._id.toString() ? chat.user2.firstName : chat.user1.firstName
                                                        }
                                                    </h5>
                                                    <p>{
                                                       chat.messages.length > 0 ? chat.messages[chat.messages.length - 1].body : 'Start Chat'
                                                    }</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div class="mesgs">
                        <div class="msg_history" ref={messagesEndRef}>
                            {
                                chats[index]?.messages.map((chat, index) => {
                                    return(
                                        <>
                                        <div class={chat.by._id.toString() === user._id.toString() ? 'outgoing_msg' : 'incoming_msg'}>
                                            <div class={chat.by._id.toString() === user._id.toString() ? 'sent_msg' : 'received_mdg'}>
                                                    <p>{chat.body}</p>
                                            </div>
                                        </div>
                                        </>
                                    );
                                })
                            }
                        </div>
                        <div class="type_msg">
                            <div class="input_msg_write">
                                <input type="text" id="msg" class="write_msg" placeholder="Type Here" onChange = {(e) => {setMessage(e.target.value)}} />
                                <button class="msg_send_btn" type="button" onClick = {sendMessage}><i class="far fa-paper-plane"></i>   </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Chat;
// import React from 'react';

// import '../chat/chat.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'jquery/dist/jquery.min.js';
// import $ from 'jquery';

// class Chat extends React.Component {
//   componentDidMount(){
//   $('#action_menu_btn').click(function(){
//     $('.action_menu').toggle();
//   });
//   }
 
//   render() {
   
//     return (
     
//         <div className="maincontainer">
         
         
//           <div class="container-fluid h-50">
//             <div class="row justify-content-center h-100">
//               <div class="col-md-4 col-xl-3 chat"><div class="card mb-sm-3 mb-md-0 contacts_card">
//                 <div class="card-header">
//                   <div class="input-group">
//                     <input type="text" placeholder="Search..." name="" class="form-control search" />
//                     <div class="input-group-prepend">
//                       <span class="input-group-text search_btn"><i class="fas fa-search"></i></span>
//                     </div>
//                   </div>
//                 </div>
//                 <div class="card-body contacts_body">
//                   <ul class="contacts">
//                   <li class="active">
//                     <div class="d-flex bd-highlight">
//                       <div class="img_cont">
//                         <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img" />
//                         <span class="online_icon"></span>
//                       </div>
//                       <div class="user_info">
//                         <span>jassa</span>
//                         <p>Kalid is online</p>
//                       </div>
//                     </div>
//                   </li>
//                   <li>
//                     <div class="d-flex bd-highlight">
//                       <div class="img_cont">
//                         <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img" />
//                         <span class="online_icon offline"></span>
//                       </div>
//                       <div class="user_info">
//                         <span>jassa</span>
//                         <p>Taherah left 7 mins ago</p>
//                       </div>
//                     </div>
//                   </li>
//                   <li>
//                     <div class="d-flex bd-highlight">
//                       <div class="img_cont">
//                         <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img" />
//                         <span class="online_icon"></span>
//                       </div>
//                       <div class="user_info">
//                         <span>jassa Mann</span>
//                         <p>Sami is online</p>
//                       </div>
//                     </div>
//                   </li>
//                   <li>
//                     <div class="d-flex bd-highlight">
//                       <div class="img_cont">
//                         <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img" />
//                         <span class="online_icon offline"></span>
//                       </div>
//                       <div class="user_info">
//                         <span>jassa Mann</span>
//                         <p>Nargis left 30 mins ago</p>
//                       </div>
//                     </div>
//                   </li>
//                   <li>
//                     <div class="d-flex bd-highlight">
//                       <div class="img_cont">
//                         <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img" />
//                         <span class="online_icon offline"></span>
//                       </div>
//                       <div class="user_info">
//                         <span>jassa Mann</span>
//                         <p>Rashid left 50 mins ago</p>
//                       </div>
//                     </div>
//                   </li>
//                 </ul>
//                 </div>
//                 <div class="card-footer"></div>
//               </div></div>
//               <div class="col-md-8 col-xl-6 chat">
//                 <div class="card">
//                   <div class="card-header msg_head">
//                     <div class="d-flex bd-highlight">
//                       <div class="img_cont">
//                         <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img" />
//                         <span class="online_icon"></span>
//                       </div>
//                       <div class="user_info">
//                         <span>Chat with jassa</span>
//                         <p>1767 Messages</p>
//                       </div>
//                       <div class="video_cam">
//                         <span><i class="fas fa-video"></i></span>
//                         <span><i class="fas fa-phone"></i></span>
//                       </div>
//                     </div>
//                     <span id="action_menu_btn"><i class="fas fa-ellipsis-v"></i></span>
//                     <div class="action_menu">
//                       <ul>
//                         <li><i class="fas fa-user-circle"></i> View profile</li>
//                         <li><i class="fas fa-users"></i> Add to close friends</li>
//                         <li><i class="fas fa-plus"></i> Add to group</li>
//                         <li><i class="fas fa-ban"></i> Block</li>
//                       </ul>
//                     </div>
//                   </div>
//                   <div class="card-body msg_card_body">
//                     <div class="d-flex justify-content-start mb-4">
//                       <div class="img_cont_msg">
//                         <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img_msg" />
//                       </div>
//                       <div class="msg_cotainer">
//                         Hi, how are you samim?
//                         <span class="msg_time">8:40 AM, Today</span>
//                       </div>
//                     </div>
//                     <div class="d-flex justify-content-end mb-4">
//                       <div class="msg_cotainer_send">
//                         Hi jassa i am good tnx how about you?
//                         <span class="msg_time_send">8:55 AM, Today</span>
//                       </div>
//                       <div class="img_cont_msg">
//                     <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img_msg" />
//                       </div>
//                     </div>
//                     <div class="d-flex justify-content-start mb-4">
//                       <div class="img_cont_msg">
//                         <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img_msg" />
//                       </div>
//                       <div class="msg_cotainer">
//                         I am good too, thank you for your chat template
//                         <span class="msg_time">9:00 AM, Today</span>
//                       </div>
//                     </div>
//                     <div class="d-flex justify-content-end mb-4">
//                       <div class="msg_cotainer_send">
//                         You are welcome
//                         <span class="msg_time_send">9:05 AM, Today</span>
//                       </div>
//                       <div class="img_cont_msg">
//                     <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img_msg" />
//                       </div>
//                     </div>
//                     <div class="d-flex justify-content-start mb-4">
//                       <div class="img_cont_msg">
//                         <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img_msg" />
//                       </div>
//                       <div class="msg_cotainer">
//                         I am looking for your next templates
//                         <span class="msg_time">9:07 AM, Today</span>
//                       </div>
//                     </div>
//                     <div class="d-flex justify-content-end mb-4">
//                       <div class="msg_cotainer_send">
//                         Ok, thank you have a good day
//                         <span class="msg_time_send">9:10 AM, Today</span>
//                       </div>
//                       <div class="img_cont_msg">
//                   <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img_msg" />
//                       </div>
//                     </div>
//                     <div class="d-flex justify-content-start mb-4">
//                       <div class="img_cont_msg">
//                         <img src="https://therichpost.com/wp-content/uploads/2020/06/avatar2.png" class="rounded-circle user_img_msg" />
//                       </div>
//                       <div class="msg_cotainer">
//                         Bye, see you
//                         <span class="msg_time">9:12 AM, Today</span>
//                       </div>
//                     </div>
//                   </div>
//                   <div class="card-footer">
//                     <div class="input-group">
//                       <div class="input-group-append">
//                         <span class="input-group-text attach_btn"><i class="fas fa-paperclip"></i></span>
//                       </div>
//                       <textarea name="" class="form-control type_msg" placeholder="Type your message..."></textarea>
//                       <div class="input-group-append">
//                         <span class="input-group-text send_btn"><i class="fas fa-location-arrow"></i></span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
     
      
// )
// };
// }

// export default Chat;