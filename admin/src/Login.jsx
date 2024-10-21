import React from "react";
import "./component/css/Login.css"

function Login() {
  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Hello Admin👋🏼</h2>
        <form>
          <input
            type="email"
            placeholder="Enter your email here"
            required
            
          />
          <input
            type="password"
            placeholder="Enter your password here"
            required
          />
          <a href="/forgot-password" className="forgot-password">Forgot password?</a>
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <div className="login-divider">
          <span>or</span>
        </div>
        <div className="social-login">
          <button className="google-login">Continue with Google</button>
          <button className="apple-login">Continue with Apple</button>
        </div>
        <a href="/" className="email-login">Or continue with your email address</a>
      </div>
    </div>
  );
}

export default Login;
