import { useAuth } from "../../context";
import {
  validateEmail,
  validateName,
  validateNumber,
  validatePassword,
} from "../../Utils";
import { signupHandler } from "../../services";
import "./Auth.css";

export const AuthSignUp = () => {
  const { username, email, password, number, confirmPassword, AuthDispatch } =
    useAuth();

  let isNumberValid,
    isNameValid,
    isEmailValid,
    isPasswordValid,
    isConfirmPasswordValid;
  const handleNumberChange = (event) => {
    isNumberValid = validateNumber(event.target.value);
    if (isNumberValid) {
      AuthDispatch({
        type: "NUMBER",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Number");
    }
  };

  const handleNameChange = (event) => {
    isNameValid = validateName(event.target.value);
    if (isNameValid) {
      AuthDispatch({
        type: "NAME",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Name");
    }
  };

  const handleEmailChange = (event) => {
    isEmailValid = validateEmail(event.target.value);

    if (isEmailValid) {
      event.target.style.border = "1px solid green";
      AuthDispatch({
        type: "EMAIL",
        payload: event.target.value,
      });
    } else {
      event.target.style.outline = "1px solid red";
      console.log("Invalid Email");
    }
  };

  const handlePasswordChange = (event) => {
    isPasswordValid = validatePassword(event.target.value);

    if (isPasswordValid) {
      AuthDispatch({
        type: "PASSWORD",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Password");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    isConfirmPasswordValid = validatePassword(event.target.value);
    if (isConfirmPasswordValid) {
      AuthDispatch({
        type: "CONFIRM_PASSWORD",
        payload: event.target.value,
      });
    } else {
      console.log("Invalid Confirm Password");
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log({ isNumberValid, isNameValid, isEmailValid, isPasswordValid });
    console.log({ username, email, password, number, confirmPassword });
    if (password === confirmPassword) {
      signupHandler(username, number, email, password);
    } else {
      console.log("Error posting data");
    }
  };
  return (
    <div className="auth-container-wrapper">
      <div className="auth-container">
        <form onSubmit={handleFormSubmit}>
          <div className="auth-part mobile-number">
            <label htmlFor="auth-signup-number">
              Mobile No.<span className="asterisk">*</span>{" "}
            </label>
            <input
              defaultValue={number}
              type="text"
              maxLength={10}
              id="auth-signup-number"
              required
              placeholder="Enter Mobile number"
              onChange={handleNumberChange}
            />
          </div>
          <div className="auth-part name">
            <label htmlFor="auth-signup-name">
              Name<span className="asterisk">*</span>{" "}
            </label>
            <input
              defaultValue={username}
              type="text"
              id="auth-signup-name"
              required
              placeholder="Enter Name"
              onChange={handleNameChange}
            />
          </div>
          <div className="auth-part email">
            <label htmlFor="auth-signup-email">
              Email<span className="asterisk">*</span>{" "}
            </label>
            <input
              defaultValue={email}
              type="email"
              id="auth-signup-email"
              required
              placeholder="Enter Email"
              onChange={handleEmailChange}
            />
          </div>
          <div className="auth-part password">
            <label htmlFor="auth-signup-password">Password</label>
            <input
              defaultValue={password}
              type="password"
              id="auth-signup-password"
              placeholder="Enter password"
              required
              onChange={handlePasswordChange}
            />
          </div>
          <div className="auth-part password">
            <label htmlFor="auth-signup-password-confirm">Password</label>
            <input
              defaultValue={confirmPassword}
              type="password"
              id="auth-signup-password-confirm"
              placeholder="Confirm password"
              required
              onChange={handleConfirmPasswordChange}
            />
          </div>
          <div className="auth-primary-btn">
            <button type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};
