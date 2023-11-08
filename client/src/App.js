import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Auth, Admin, Investor, Reviewer } from "./screens";
import Chat from "./screens/chat/Chat";
import { Home } from "./screens/auth/components";

const userAllowedMap = {
  1: ['/admin', '/chat'],
  2: ['/investor', '/chat'],
  3: ['/reviewer', '/chat'],
}

function getUser(){
  return JSON.parse(window.localStorage.getItem('user')) || null;
}

function PrivateRoute({ component: Component, ...rest }) {
  const user = getUser();
  const isUserAllowed = user && userAllowedMap[user.role].includes(rest.path);
  const redirectPath = user ? userAllowedMap[user.role][0] : '/home';


  return (
    <Route
      {...rest}
      render={(props) =>
        isUserAllowed ? <Component {...props} /> : <Redirect to={redirectPath} />
      }
    />
  );
}

function App() {
  const user = getUser();
  return (
    <div>
      <Switch>
        <Route path="/auth" render={() => {
          if (user) {
            const redirectPath = userAllowedMap[user.role][0];
            return <Redirect to={redirectPath} />
          }
          return <Auth />
        }}/>
   
        <PrivateRoute path="/investor" component={Investor} />
        <PrivateRoute path="/reviewer" component={Reviewer} />
        <PrivateRoute path="/chat" component={Chat} />
        <Route path="/admin" component={Admin} />
        <Route path="/">
          <Redirect to="/auth" />
        </Route>
      </Switch>
    </div>
  );
  
}

export default App;





















     {/* <PrivateRoute path="/admin" component={Admin} /> */}