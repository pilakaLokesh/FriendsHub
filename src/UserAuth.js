import React, { useState } from 'react';
import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import './userAuth.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const UserAuth = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [errormsg, setErrorMsg] = useState("");
  
  const navigate = useNavigate(); 

  const { email, password } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const signIn = (e) => {
    e.preventDefault();
    setErrorMsg(""); // Clear any previous errors

    if (!email || !password) {
      setErrorMsg("Email and password are required.");
      return;
    }

    // Sign in with Firebase
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User signed in:", userCredential.user);
        
        // Redirect to home page after successful sign-in
        navigate('/');  // Use navigate instead of redirect
      })
      .catch((err) => {
        console.error("Sign-in error:", err.message);
        setErrorMsg("Sign-in failed: " + err.message); // Display Firebase error
      });
  };

  const signUp = (e) => {
    e.preventDefault();
    setErrorMsg(""); // Clear any previous errors

    if (!email || !password) {
      setErrorMsg("Email and password are required.");
      return;
    }

    // Create a new user with Firebase
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("User signed up:", userCredential.user);

        // Optionally, you can navigate to home or log the user in automatically
        navigate('/');  // Redirect after successful sign-up
      })
      .catch((err) => {
        console.error("Sign-up error:", err.message);
        setErrorMsg("Sign-up failed: " + err.message); // Display Firebase error
      });
  };

  return (
    <div className="bg-container">
      <center>
      <h1 className="login">Login for PoRn RaNgers</h1>
        <form className="form">
          <h3 className='sign'>SignUp/SignIn</h3>
          {errormsg && <p className="errorMsg" style={{ color: "red" }}>{errormsg}</p>}
          <input
            className="input"
            type="email"
            value={email}
            name="email"
            placeholder="Email"
            onChange={changeHandler}
          />
          <br />
          <input
            className="input"
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={changeHandler}
          />
          <br />
          <div>
            <button className="button" type="button" onClick={signIn}>Sign In</button>&nbsp;&nbsp;
            <button className="button" type="button" onClick={signUp}>Sign Up</button>
          </div>
          <br />
        </form>
      </center>
    </div>
  );
};

export default UserAuth;
