import React from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
function Signin() {
     const navigate = useNavigate();
   return (
    <div className="signin-container">
      <form className="signin-form">
        <h2>Sign In</h2>
        <div className="input-group">
          <label>Name</label>
          <input
            type="name"
            placeholder="Enter your name"
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" onClick={() => navigate("/")}>Sign In</button>

        <p className="signup-link">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Signin;