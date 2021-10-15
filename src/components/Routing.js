import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home";
import Login from "./Login";
import Signup from "./Signup";
// import { AuthStateContext } from "./context";
// import { useState, useEffect } from "react";
import { AuthProvider } from "./context";
import AccountSetup from "./accountSetup";
import { UserProvider } from "./userContext";
import { AuthStateProvider } from "./context";

function Routing() {
  //   const [isLoggedIn, setLoggedIn] = useState(false);
  // useEffect(()=>{
  // },[])
  return (
    <AuthStateProvider>
      <AuthProvider>
        <UserProvider>
          <Router>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/accountsetup">
              {/* retrieve username from context for rendering on the account setup component */}
              <AccountSetup user="Clive" />
            </Route>
          </Router>
        </UserProvider>
      </AuthProvider>
    </AuthStateProvider>
  );
}

export default Routing;
