import "./LoginPage.scss";
import { LoginLogo, LogoLight, LogoDark } from "../../assets";
import { Button } from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "../../context/theme";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [isLoginPwShow, setLoginPw] = useState<Boolean>(false);
  const [isSignupPwShow, setSignupPw] = useState<Boolean>(false);
  return (
    <div className="loginpage">
      <div className="loginpage__navbar">
        <img
          src={theme == "dark" ? LogoDark : LogoLight}
          alt="login-logo"
          onClick={() => navigate("/")}
        />
        <form className="loginpage__navbar-loginsection">
          <input
            className="loginInput-username"
            type="text"
            placeholder="User name"
          ></input>
          <div className="loginInput-password-container">
            <input
              className="loginInput-password"
              type={isLoginPwShow ? "text" : "password"}
              placeholder="Password"
            ></input>
            <FontAwesomeIcon
              icon={isLoginPwShow ? faEye : faEyeSlash}
              className="login-toogle"
              size="lg"
              onClick={() => setLoginPw(!isLoginPwShow)}
            />
          </div>
          <Button
            color="cyan-filled"
            size="medium"
            borderRadius="6px"
            className="login-button"
          >
            Login
          </Button>
        </form>
      </div>
      <div className="loginpage__content-background">
        <div className="loginpage__content">
          <img src={LoginLogo} alt="login-image" />
          <div className="loginpage__content-signup-container">
            <form action="post" className="loginpage__content-signup">
              <div className="signup-title">
                Get Started - it's Free for limited time!
              </div>
              <input
                className="signupInput-username"
                type="text"
                placeholder="Your name"
              ></input>
              <input
                className="signupInput-email"
                type="email"
                placeholder="Email address"
              ></input>
              <div className="signupInput-password-container">
                <input
                  className="signupInput-password"
                  type={isSignupPwShow ? "text" : "password"}
                  placeholder="Password"
                ></input>
                <FontAwesomeIcon
                  icon={isSignupPwShow ? faEye : faEyeSlash}
                  className="signup-toogle"
                  size="lg"
                  onClick={() => setSignupPw(!isSignupPwShow)}
                />
              </div>
              <div className="signup-termAgree">
                <input type="checkbox" />
                <p>
                  I agree with <span>Privacy Policy</span> and{" "}
                  <span>Terms of Use</span>
                </p>
              </div>
              <Button color="cyan-filled" size="large" borderRadius="6px">
                Join Now
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="loginpage__footer">
        <p className="loginpage__footer-trademark">&copy; PhungLeHoangNgoc</p>
        <div className="loginpage__footer-footerlinks">
          <p>Footer link</p>
          <p>Footer link</p>
          <p>Footer link</p>
          <p>Footer link</p>
        </div>
        <div className="loginpage__footer-policy">
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
        </div>
      </div>
    </div>
  );
};
