import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./component/css/Login.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareEnvelope, faLock, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { faGoogle, faApple } from '@fortawesome/free-brands-svg-icons';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would normally validate the login credentials.
    // For demonstration, we'll just navigate to the dashboard.
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Hello Admin <span role="img" aria-label="wave">👋🏼</span></h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <FontAwesomeIcon icon={faSquareEnvelope} className="input-icon" />
            <input
              type="email"
              placeholder="Enter your email here"
              required
            />
          </div>
          <div className="input-group">
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Enter your password here"
              required
            />
            <button
              type="button"
              className="eye-btn"
              onClick={togglePasswordVisibility}
            >
              <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
            </button>
          </div>
          <a href="/forgot-password" className="forgot-password">Forgot password?</a>
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <div className="login-divider">
          <span>or</span>
        </div>
        <div className="social-login">
          <button className="google-login">
            <FontAwesomeIcon icon={faGoogle} className="social-icon" />
            Continue with Google
          </button>
          <button className="apple-login">
            <FontAwesomeIcon icon={faApple} className="social-icon" />
            Continue with Apple
          </button>
        </div>
        <a href="/" className="email-login">Or continue with your email address</a>
      </div>
    </div>
  );
}

export default Login;
