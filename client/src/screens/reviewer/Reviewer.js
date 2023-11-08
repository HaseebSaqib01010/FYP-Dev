import { CreatePost, 	MyPosts, Timeline, Profile } from "./components";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import "./reviewer.css";
import Polls from "../shared/polls";
import { useEffect, useState } from "react";
import logo from "../../assets/img/logo.png";
import http from "../../axios";
import SubServices from "./SubServices"
import UserProfileShoe from "./components/UserProfileShoe";
import Allpost from "./components/Allpost";
import NavbarComponent from "../auth/components/Navbar/reviewerNavbar";
import Footer from "../auth/components/Footer";
import EditPost from "./components/EditPost";

const Reviewer = (params) => {
	const [hot, setHot] = useState([]);
	const history = useHistory();
	const logout = () => {
		window.localStorage.removeItem("token");
		window.localStorage.removeItem("user");
		window.location.reload();
		history.push("/auth");
	}

	useEffect(() => {
		http.get("/post/hot/topics").then(res => {
			setHot(res.data.data);
		})
	}, []);

	return (
		<>
			<NavbarComponent />
			<div className="main-container">

				
			 <aside className="sidebar right-sec trend-container">
        <h2>Menu</h2>
		<Link to="/reviewer/createpost">
							<button className="btn post-btn">
								<i class="fas fa-pen-square"></i>Create Post
							</button>
						</Link>

						<Link to="/reviewer/">
							<button className="btn post-btn">
								<i class="fas fa-home"></i>Polls
								{/*Polls is  Timeline */}
							</button>
						</Link>
						<Link to="/reviewer/timeline">
							<button className="btn post-btn">
								<i class="fas fa-home"></i>Timeline
								{/*Polls is  Timeline */}
							</button>
						</Link>

						<Link to="/reviewer/myposts">
							<button className="btn post-btn">
								<i class="fas fa-clipboard-list"></i>My Reviews
							</button>
						</Link>

						<Link to="/reviewer/profile">
							<button className="btn post-btn">
								<i class="fas fa-user"></i>Profile
							</button>
						</Link>

						<Link to="">
							<button className="btn post-btn">
								<i class="fas fa-star"></i>Premium Acc
							</button>
						</Link>
        </aside>

		<main className="content">
          <div className="content-scroll-container">
					<Switch>
						<Route exact path="/reviewer" component={Timeline} />
						<Route exact path="/reviewer/createpost" component={CreatePost} />
						<Route exact path="/reviewer/editpost/:id" component={EditPost} />
						<Route exact path="/reviewer/myposts" component={MyPosts} />
						<Route exact path="/reviewer/profile" component={Profile} />
						<Route exact path="/reviewer/userprofile/:id" component={UserProfileShoe} />
						<Route exact path="/reviewer/timeline" component={Allpost} />

					</Switch>
		   </div>
		</main>
		<aside className="sidebar trend-container">
        <h2>Trending Posts</h2>
          <div className="trending-posts ">
      
            {hot.map((item, index) => (
              <div className="hot-topic" key={index}>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </aside>
			</div>
			<Footer />
		</>
	);
};
export default Reviewer;
