import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  configureRecaptcha,
  onSignInSubmit,
  otpVerification,
} from "../../../Firebase/Auth";
import "./Index.css";

const Login = ({ setFlag }) => {
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const inputEvent = (e) => {
    if (e.target.value.length === 11) {
      setContact(e.target.value.slice(0, 10));
    } else {
      setContact(e.target.value);
    }
  };

  useEffect(() => {
    configureRecaptcha();

    return () => {
      window.recaptchaVerifier.clear();
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    otpVerification(otp, navigate);
  };

  const handleOtpClick = () => {
    onSignInSubmit(contact);
  };

  return (
    <div>
      <div className="loginMainContainer">
        <div className="loginContainer">
          <h2 className="mt-4">LOGIN</h2>
          <form onSubmit={handleLogin} className="mt-5">
            <div className="loginInputContainer">
              <div className="loginInput">
                <input
                  onChange={(e) => setContact(e.target.value)}
                  onInput={inputEvent}
                  placeholder="Phone Number"
                  type="number"
                />
              </div>

              <button
                type="button"
                id="sign-in-button"
                onClick={handleOtpClick}
                className="btn btn-secondary w-100"
              >
                Send OTP
              </button>

              <div className="loginInput">
                <input
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="OTP"
                  type="number"
                />
              </div>
            </div>

            <div className="loginBtn mt-4">
              <button
                disabled={otp.length !== 6}
                className="btn btn-primary w-100"
                type="submitt"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
