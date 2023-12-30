import "./AuthModal.css";
import { AuthLogin, AuthSignUp } from "../";
import { useAuth } from "../../context";

export const AuthModal = () => {
  const { selectedTab, AuthDispatch } = useAuth();
  const handleAuthClose = () => {
    AuthDispatch({
      type: "OPEN_AUTH_MODAL",
    });
  };

  const handleLoginTabClick = () => {
    AuthDispatch({
      type: "SET_TO_LOGIN",
    });
  };
  const handleSignUpTabClick = () => {
    AuthDispatch({
      type: "SET_TO_SIGNUP",
    });
  };
  return (
    <div className="auth-modal-wrapper">
      <div className="auth-modal">
        <span className="close-auth-logo" onClick={handleAuthClose}>
          <ion-icon name="close-outline"></ion-icon>
        </span>
        <div className="auth-modal-buttons">
          <button
            className={`auth-modal-button ${
              selectedTab === "login" ? "selected1" : ""
            }`}
            onClick={handleLoginTabClick}
          >
            Login
          </button>
          <button
            className={`auth-modal-button ${
              selectedTab === "signup" ? "selected1" : ""
            }`}
            onClick={handleSignUpTabClick}
          >
            Sign Up
          </button>
        </div>
        {selectedTab === "login" ? <AuthLogin /> : <AuthSignUp />}
      </div>
    </div>
  );
};
