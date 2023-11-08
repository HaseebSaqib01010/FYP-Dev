import { ChatBox, CreatePoll, Timeline, MyPolls, Profile } from "./components";
import { Switch, Route, Link, useHistory } from "react-router-dom";
import "./investor.css";
import logo from "../../assets/img/logo.png";
import { useEffect, useState } from "react";
import http from "../../axios";
import NavbarComponent from "../auth/components/Navbar/reviewerNavbar";
import SubServices from "./SubServices";
import Footer from "../auth/components/Footer";
import UserProfileShoe from "./components/UserProfileShoe";

const Investor = (params) => {
  const history = useHistory();
  const [hot, setHot] = useState([]);

  const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    window.location.reload();
    history.push("/auth");
  }

  useEffect(() => {
    http.get("/post/hot/topics").then((res) => {
      setHot(res.data.data);
    });
  }, []);

  return (
    <div>
      <NavbarComponent />
      <div className="main-container">
      
        <aside className="sidebar right-sec trend-container">
        <h2>Menu</h2>
          <Link to="/investor/createpoll" className="custom-link">
            <button className="custom-btn">
              <i className="fas fa-clipboard-list"></i>Create Poll
            </button>
          </Link>
          <Link to="/investor" className="custom-link">
            <button className="custom-btn">
              <i className="fas fa-home"></i>Timeline
            </button>
          </Link>
          <Link to="/investor/polls" className="custom-link">
            <button className="custom-btn">
              <i className="fas fa-poll"></i>My Polls
            </button>
          </Link>
          <Link to="/investor/profile" className="custom-link">
            <button className="custom-btn">
              <i className="fas fa-user"></i>Profile
            </button>
          </Link>
          <Link className="custom-link">
            <button className="custom-btn">
              <i className="fas fa-star"></i>Smart Plan
            </button>
          </Link>
        </aside>
        <main className="content">
          <div className="content-scroll-container">
            <Switch>
              <Route exact path="/investor" component={Timeline} />
              <Route exact path="/investor/chatbox" component={ChatBox} />
              <Route exact path="/investor/createpoll" component={CreatePoll} />
              <Route exact path="/investor/polls" component={MyPolls} />
              <Route exact path="/investor/profile" component={Profile} />
              <Route exact path="/investor/userprofile/:id" component={UserProfileShoe} />
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
    </div>
  );
};

export default Investor;
