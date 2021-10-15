import React from "react";
import "./signupLogin.css";
import { useState } from "react";
import { db } from "./firebase";
import { doc } from "@firebase/firestore";
import { setDoc } from "@firebase/firestore";
// import { useAuthDispatch } from "./context";
// import { useAuthState } from "./context";

function Signup() {
  // const [signupCredentials, setSignupCredentials] = useState({
  //   email: "",
  // });
  const [email, setEmail] = useState({
    email: "",
  })
  const [username, setUsername] = useState({
    username: ""
  })
  const [pass1, setPass1] = useState({
    passw1: "",
  });
  const [pass2, setPass2] = useState({
    pass2: "",
  });
  const [password, setPassword] = useState({
    passwordUser: "",
  })
  function validatePassword() {
    console.log(pass1.passw1 + " " + pass2.pass2);
    return pass1.passw1 === pass2.pass2 ? true : false;
  }
  function handleSubmit() {
    if (validatePassword() === true) {
      // setSignupCredentials({ password: pass1.passw1 });
      setPassword({passwordUser: pass1.passw1})
      console.log("Validation successful \n" + email.email + pass1.passw1 + username.username);
      // const userSet = db.collection('users').doc(signupCredentials.username);
      // userSet.set({
      //   username: signupCredentials.username,
      //   email: signupCredentials.email,
      //   password: signupCredentials.password
      // })
      console.log(`${username.username}\n${password.passwordUser}\n${email.email}`)
      setDoc(doc(db, "users" , username.username),{
        username: username.username,
        password: password.passwordUser,
        email: email.email,
      }).then(()=>{
        console.log("successful");
        window.location.href = '/login';
      }).catch((e)=>{
        console.log(e)
      })
      console.log("Document written with ID");
    } else {
      console.log("Error validating password");
      window.alert("Please revalidate your password");
    }
  }
  return (
    <div className="Signup-wrapper">
      <div className="signup-form-wrapper">
        <div className="signup-form-title">
          <div className="logo-title-wrapper">
            <h2>
              <i className="fa fa-plug"></i> MOVIES
            </h2>
          </div>
        </div>
        <div className="signup-form">
          <form onSubmit={(e)=>{
            e.preventDefault();
            handleSubmit();
          }}>
            <input
              type="text"
              placeholder="Enter Preferred Username"
              onChange={(e) => {
                // setSignupCredentials({ username: e.target.value });
                setUsername({username: e.target.value})
              }}
            />
            <input
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                // setSignupCredentials({ email: e.target.value });
                setEmail({email: e.target.value})
              }}
            />
            <input
              type="password"
              placeholder="Enter password"
              onChange={(e) => {
                setPass1({ passw1: e.target.value });
              }}
            />
            <input
              type="password"
              placeholder="Confirm password"
              onChange={(e) => {
                setPass2({ pass2: e.target.value });
              }}
            />
            <button type="submit" onClick={(e)=>{
              e.preventDefault();
              handleSubmit();
            }}>
              Sign up
            </button>
            <a href="/login" className="linker">Already have an account? <span style={{
              color: "tomato",
              fontSize:"14px"
            }}>Login</span></a>
          </form>
        </div>
      </div>
    </div>
  );
}
//firebase login
//firebase init
// firebase deploy --only hosting:clivesportfolio
export default Signup;
