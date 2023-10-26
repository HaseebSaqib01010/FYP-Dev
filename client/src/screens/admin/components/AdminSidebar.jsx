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
import {useHistory} from "react-router-dom";

const AdminSidebar = () => {
  const history = useHistory();
  // const navigate =useNavigate();
  const logout = () => {
		window.localStorage.removeItem("token");
		window.localStorage.removeItem("user");
		window.location.reload();
    // navigate("/auth");
		history.push("/auth");

	}
  return (
    <ProSidebar className="pro-sidebar">
      <SidebarHeader className="row sidebarbox">
        <div className="col-md-12">
          <div className="container-fluid masaail">
            <h3 className="headingM">Admin</h3>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="sidebarbox">
        <Menu className="sideicon">
          <MenuItem
            className="sidebarmenu"
            active={window.location.pathname === "/admin/"}
            icon={<MdHome />}
          >
            Dashboard
            <Link to="/admin/" />
          </MenuItem>
          <MenuItem
            active={window.location.pathname === "/admin/approvals"}
            icon={<MdPending />}
          >
            Approvals
            <Link to="/admin/approvals" />
          </MenuItem>
          <MenuItem
            active={window.location.pathname === "/admin/reviewers"}
            icon={<MdReviews />}
          >
            Reviewers
            <Link to="/admin/reviewers" />
          </MenuItem>

          <MenuItem
            active={window.location.pathname === "/admin/investors"}
            icon={<FaMoneyBillWave />}
          >
            Investors
            <Link to="/admin/investors" />
          </MenuItem>

          <MenuItem
            active={window.location.pathname === "/admin/queries"}
            icon={<FaQuestionCircle />}
          >
            Queries
            <Link to="/admin/queries" />
          </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter className="sidebar-footer sidebarbox">
        <div className="row">
          <div className="col-md-12">
            <div className="container-fluid">
              <button onClick={logout}><i class="fa-solid fa-power-off"></i></button>
              <p className="para">
                copyrights@2022 <br /> 
              </p>
            </div>
          </div>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default AdminSidebar;