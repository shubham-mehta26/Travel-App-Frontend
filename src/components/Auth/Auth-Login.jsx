import { validateNumber, validatePassword } from "../../Utils";
import { loginHandler } from "../../services";
import { useAuth } from "../../context";
import "./Auth.css";

let isNumberValid, isPasswordValid;

export const AuthLogin = () => {
  const { number, password, AuthDispatch } = useAuth();

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

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (isNumberValid && isPasswordValid) {
      loginHandler(number, password);
    }
    AuthDispatch({
      type: "CLEAR_USER_DATA",
    });
  };

  return (
    <div className="auth-container-wrapper">
      <div className="auth-container">
        <form onSubmit={handleFormSubmit}>
          <div className="auth-part mobile-number">
            <label htmlFor="auth-login-number">
              Mobile No.<span className="asterisk">*</span>{" "}
            </label>
            <input
              defaultValue={number}
              type="text"
              maxLength={10}
              id="auth-login-number"
              required
              placeholder="Enter Mobile number"
              onChange={handleNumberChange}
            />
          </div>
          <div className="auth-part password">
            <label htmlFor="auth-login-password">Password</label>
            <input
              defaultValue={password}
              type="password"
              id="auth-login-password"
              placeholder="Enter password"
              required
              onChange={handlePasswordChange}
            />
          </div>
          <div className="auth-primary-btn">
            <button type="submit">Login</button>
          </div>
          <div className="auth-primary-btn">
            <button type="submit">Login with Test credentials</button>
          </div>
        </form>
      </div>
    </div>
  );
};
