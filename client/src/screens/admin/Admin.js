import {Approvals, Dashboard, Queries, Reviewers, Investors} from "./components";
import { Switch, Route } from "react-router-dom";
import AdminSidebar from "./components/AdminSidebar";
import "./admin.css";
import Auth from "../auth/Auth";

const Admin = () => {
    return (
        <div style={{display:"flex"}}>
         <div>
            <AdminSidebar />
        </div>

    
          
            <Switch>
           
                <Route exact path="/admin" component={Dashboard}/>
                <Route exact path="/admin/approvals" component={Approvals}/>
                <Route exact path="/admin/queries" component={Queries}/>
                <Route exact path="/admin/reviewers" component={Reviewers}/>
                <Route exact path="/admin/investors" component={Investors}/>
                <Route exact path="/logout" component={Auth}/>
            </Switch>
        </div>
    );
}
export default Admin;
