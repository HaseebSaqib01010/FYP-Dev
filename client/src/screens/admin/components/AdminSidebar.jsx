import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import { MdReviews, MdPending, MdHome } from "react-icons/md";
import { FaQuestionCircle, FaMoneyBillWave } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import "../../react-pro-sidebar.css";
import { useHistory } from "react-router-dom";
import "../admin.css"

const AdminSidebar = () => {
  const history = useHistory();

  const logout = () => {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    window.location.reload();
    history.push("/auth");
  };

  return (
    <div className="admin-sidebar" style={{width:"1"}}>
      <div className="sidebar-header">
        <h3 className="headingM">Admin</h3>
      </div>

      <div className="sidebar-content">
        <ul className="menu">
          <li
            className={`menu-item ${window.location.pathname === "/admin/" ? "active" : ""}`}
          >
            <MdHome />
            <Link to="/admin/">Dashboard</Link>
          </li>
          <li
            className={`menu-item ${window.location.pathname === "/admin/approvals" ? "active" : ""}`}
          >
            <MdPending />
            <Link to="/admin/approvals">Approvals</Link>
          </li>
          <li
            className={`menu-item ${window.location.pathname === "/admin/reviewers" ? "active" : ""}`}
          >
            <MdReviews />
            <Link to="/admin/reviewers">Reviewers</Link>
          </li>
          <li
            className={`menu-item ${window.location.pathname === "/admin/investors" ? "active" : ""}`}
          >
            <FaMoneyBillWave />
            <Link to="/admin/investors">Investors</Link>
          </li>
          <li
            className={`menu-item ${window.location.pathname === "/admin/queries" ? "active" : ""}`}
          >
            <FaQuestionCircle />
            <Link to="/admin/queries">Queries</Link>
          </li>
        </ul>
      </div>

      <div className="sidebar-footer">
        <button onClick={logout}>Logout</button>
        <p className="para">copyrights@2022</p>
      </div>
    </div>
  );
};

export default AdminSidebar;
