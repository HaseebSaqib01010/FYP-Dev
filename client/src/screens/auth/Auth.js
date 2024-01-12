import { Forgot, Home, Signin, OTP, SignUp , About, Contact } from "./components";
import { Switch, Route } from "react-router-dom";
import Admin from "../admin/Admin";
import "./auth.css";
import Reset from "./components/Reset";
import AdminLogin from "./adminLogin";

const Auth = () => {
    return (
        <div>
            <Switch>
            
                <Route exact path="/auth" component={Home} />
                <Route exact path="/auth/forgot" component={Forgot} />
                <Route exact path="/auth/reset" component={Reset} />
                <Route exact path="/auth/about" component={About} />
                <Route exact path="/auth/contact" component={Contact} />
                <Route exact path="/auth/otp" component={OTP} />
                <Route exact path="/auth/signup" component={SignUp} />
                <Route exact path="/auth/signin" component={Signin} />
                <Route exact path="/auth/adminLogin" component={AdminLogin} />
                <Route exact path="./admin" component={Admin} />
              
            </Switch>
        </div>
    );
}

export default Auth;
