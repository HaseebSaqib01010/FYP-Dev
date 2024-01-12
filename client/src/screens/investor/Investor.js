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
import Recommendations from "./components/Recommendations";

const Investor = (params) => {
  const history = useHistory();
  const [hot, setHot] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryRef, setCategoryRef] = useState("all");

  const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    window.location.reload();
    history.push("/auth");
  }
  const categoryIcons = {
    Food: 'fas fa-pizza-slice',
    Tech: 'fas fa-laptop',
    Lifestyle: 'fas fa-cocktail',
    Others: 'fas fa-star',
    Health: 'fas fa-heart',
    fitness: 'fas fa-dumbbell',
  };

  useEffect(() => {
    http.get("/category").then((res) => {
      setCategories(res.data.categories);
    });
  }, []);

  useEffect(() => {
    if(categoryRef === "all") {
      http.get("/post/hot/topics").then((res) => {
        setHot(res.data.data);
        console.log('res data all === ', res.data.data);
      });
    } else {
      http.get(`/post/get-by-category/${categoryRef}`).then((res) => {
        setHot(res.data.data);
        console.log('res data cat === ', res.data.data);
      });
    } 
  }, [categoryRef]);

  const handleCategoryClick = (id) => {
    if(id === "all") {
      setCategoryRef("all")
    } else {
      setCategoryRef(id);
    }
  }

  console.log('ref === ', categoryRef);

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
          <Link to ="/investor/recommend" className="custom-link">
            <button className="custom-btn">
              <i className="fas fa-star"></i>AI Bot 
            </button>
          </Link>
        </aside>
        <main className="content">
          <div className="content-scroll-container">
          <div className="main-container-categories-container">
      <button className="main-container-category-item" style={{
            border: (categoryRef === "all") ? "3px solid skyBlue " : ""
          }}  onClick={() => handleCategoryClick("all")}>
            <p>All</p>
          </button>
        {categories?.length > 0 && categories?.map((item, index) => (
          <button className="main-container-category-item" style={{
            border: (item?._id === categoryRef) ? "3px solid skyBlue" : ""
          }} key={index} onClick={() => handleCategoryClick(item?._id)}>
          <i className={categoryIcons[item?.name] || 'fas fa-heart'}></i>
              
            <p>{item?.name}</p>
          </button>
        ))}
      </div>
            <Switch>
              <Route exact path="/investor" render={(props) => (
                <Timeline {...props} categoryRef={categoryRef}/>
              )} />
              <Route exact path="/investor/chatbox" component={ChatBox} />
              <Route exact path="/investor/createpoll" component={CreatePoll} />
              <Route exact path="/investor/polls" component={MyPolls} />
              <Route exact path="/investor/profile" component={Profile} />
              <Route exact path="/investor/userprofile/:id" component={UserProfileShoe} />
              <Route exact path="/investor/recommend/" component={Recommendations} />
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
