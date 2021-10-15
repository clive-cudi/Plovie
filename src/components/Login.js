import React from "react";
import "./signupLogin.css";
import { useState } from "react";
import { doc } from "@firebase/firestore";
import { getDoc } from "@firebase/firestore";
import { db } from "./firebase";
import {LoginUser} from "./actions";
import { useAuthDispatch } from "./context";
import { useContext } from "react";
import { userContext } from "./userContext";
import { AuthStateCurrentContext } from "./context";
import { UsernameCtx } from "./contexts/UserNameCtx";


function Login() {
  // const [loginCredentials, setLoginCredentials] = useState(
  //   { username: "" },
  //   { password: "" }
  // );
  const [userName, setUserNameCtx] = useContext(UsernameCtx);
  const [authState, setAuthState] = useContext(AuthStateCurrentContext)
  const [globalUsername, setGlobalUsername] = useContext(userContext)
  const [username, setUsername] = useState({
    username: "",
  });
  const [password, setPassword] = useState({
    password: "",
  });
  const dispatch = useAuthDispatch();
  function validateCredentials() {
    return username.username || password.password != null ? true : false;
  }
  function handleLoginSubmit() {
    if (validateCredentials() === true) {
      //function that validates user credentials on firebase then returns something if user exists along with some data
      // console.log(loginCredentials)
      console.log(
        `username: ${username.username} \npassword: ${password.password}`
      );
      const docRef = doc(db, "users", username.username);
      getDoc(docRef)
        .then((docSnapshot) => {
          if (docSnapshot.exists()){
            console.log("Found", docSnapshot.data());
            LoginUser(dispatch, username.username);
            setGlobalUsername(username.username);
            console.log(globalUsername)
            setAuthState(true);
            window.location.href = "/";
          }else {
            console.log("404 Not Found");
            window.alert(
              "Invalid credentials\nPlease confirm your input or create an account"
            );
          }
          // docSnapshot.exists()
          //   ? () => {
          //       console.log("Found", docSnapshot.data());
          //       window.location.href = "/";
          //     }
          //   : () => {
          //       console.log("404 Not Found");
          //       window.alert(
          //         "Invalid credentials\nPlease confirm your input or create an account"
          //       );
          //     };
        })
        .catch((e) => {
          console.log(e);
        });
    } else {
      console.log("Error!! \nPlease fill out all fields");
      window.alert("Error!! \nPlease fill out all fields");
    }
  }
  return (
    <div className="Signup-wrapper">
      <div className="login-form-wrapper">
        <div className="signup-form-title">
          <div className="logo-title-wrapper">
            <h2>
              <i className="fa fa-plug"></i> MOVIES.
            </h2>
          </div>
        </div>
        <div className="signup-form">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLoginSubmit();
            }}
          >
            <input
              type="text"
              placeholder="Enter Username"
              onChange={(e) => {
                // setLoginCredentials({username: e.target.value})
                setUsername({ username: e.target.value });
              }}
            />
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => {
                // setLoginCredentials({password: e.target.value})
                setPassword({ password: e.target.value });
              }}
            />
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                handleLoginSubmit();
              }}
            >
              Login
            </button>
            <a href="/signup" className="linker">Don't have an Account? <span style={{
              color: "tomato",
              fontSize:"14px"
            }}>Sign up</span></a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
