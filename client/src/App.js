import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, useNavigate } from "react-router-dom";
import Login from "./Login";
import AuthProvider from "./Auth";
import Signup from "./Signup";
import Home from "./Home";
import PostDetails from "./DetailedPost";
import Profile from "./Profile";
import NewPost from './Newpost';
import Ideahub from "./Ideahub";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/post/:id" component={PostDetails} />
        <Route path="/profile" component={Profile} />
        <Route path="/createpost" component={NewPost} />
        <Route path="/ideahub" component={Ideahub} />
      </Switch>
    </BrowserRouter>
  </AuthProvider>
);
}

export default App;