import React, { useState } from "react";
import "./HomeScreen.scss";
import logo from "../assets/images/logoword.png";
import logError from "../assets/images/LogError.png";
import dismiss from "../assets/images/Dismiss.png";
import microsoftTri from "../assets/images/MicrosoftTri.png";
import needHelp from "../assets/images/needHelp.png";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {
  const navigate = useNavigate();
  const [showError, setShowError] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/export");
    }, 2000);
  };

  return (
    <div className="container">
      {loading ? (
        <div className="loading-container">
          <div className="spinner"></div>
          <p className="loading-text">Loading...</p>
        </div>
      ) : (
        <>
          {showError && (
            <div className="error-container">
              <div className="error-content">
                <img src={logError} alt="error icon" className="error-icon" />
                <div className="error-text-container">
                  <p className="error-title">Log In Error</p>
                  <p className="error-message">
                    This account is not in our system. For more questions contact the administrator via the link below.
                  </p>
                </div>
                <button className="dismiss-button" onClick={() => setShowError(false)}>
                  <img src={dismiss} alt="dismiss icon" className="dismiss-icon" />
                </button>
              </div>
            </div>
          )}

          <div className="main-content">
            <img src={logo} alt="logo" className="logo" />
            <h1 className="welcome-text">Welcome!</h1>
            <p className="sub-text">Export Excel files to Word with ease</p>
            <button className="login-button" onClick={handleLogin}>
              <img src={microsoftTri} alt="Microsoft icon" className="microsoft-icon" />
              <span>Sign In With Microsoft</span>
            </button>
          </div>

          <div className="help-container">
            <img src={needHelp} alt="help icon" className="help-icon" />
            <div>
              <p className="help-title">Need Help?</p>
              <p className="help-text">Contact Administrator</p>
            </div>
          </div>
        
        </>
      )}
    </div>
  );
};

export default HomeScreen;
