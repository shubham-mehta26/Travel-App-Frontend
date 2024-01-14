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

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (isNumberValid && isPasswordValid) {
      try {
        const { accessToken, username } = await loginHandler(number, password);
        AuthDispatch({
          type: "SET_ACCESS_TOKEN",
          payload: accessToken,
        });
        AuthDispatch({
          type: "SET_USERNAME",
          payload: username,
        });
        AuthDispatch({
          type: "OPEN_AUTH_MODAL",
        });
        AuthDispatch({
          type: "CLEAR_USER_DATA",
        });
        AuthDispatch({
          type: "ALERT_POP",
          payload: {
            show: true,
            type: "success",
            message: "Login Successful",
          },
        });
        setTimeout(() => {
          AuthDispatch({
            type: "ALERT_POP",
            payload: {
              show: false,
              type: "",
              message: "",
            },
          });
        }, 1500);
      } catch (error) {
        AuthDispatch({
          type: "ALERT_POP",
          payload: {
            show: true,
            type: "error",
            message: "Invalid Credentials",
          },
        });
        setTimeout(() => {
          AuthDispatch({
            type: "ALERT_POP",
            payload: {
              show: false,
              type: "",
              message: "",
            },
          });
        }, 1500);
      }
    } else {
      AuthDispatch({
        type: "ALERT_POP",
        payload: {
          show: true,
          type: "error",
          message: "Invalid Credentials",
        },
      });
      setTimeout(() => {
        AuthDispatch({
          type: "ALERT_POP",
          payload: {
            show: false,
            type: "",
            message: "",
          },
        });
      }, 1500);
    }
  };

  const handleLoginTestCredentials = async (e) => {
    e.preventDefault();
    try {
      const { accessToken, username } = await loginHandler(9999999999, "admin");
      AuthDispatch({
        type: "SET_ACCESS_TOKEN",
        payload: accessToken,
      });
      AuthDispatch({
        type: "SET_USERNAME",
        payload: username,
      });
      AuthDispatch({
        type: "OPEN_AUTH_MODAL",
      });
      AuthDispatch({
        type: "CLEAR_USER_DATA",
      });
      AuthDispatch({
        type: "ALERT_POP",
        payload: {
          show: true,
          type: "success",
          message: "Login Successful",
        },
      });
      setTimeout(() => {
        AuthDispatch({
          type: "ALERT_POP",
          payload: {
            show: false,
            type: "",
            message: "",
          },
        });
      }, 1500);
    } catch (error) {
      console.error("Login failed:", error.message);
      AuthDispatch({
        type: "ALERT_POP",
        payload: {
          show: true,
          type: "error",
          message: "Invalid Credentials",
        },
      });
      setTimeout(() => {
        AuthDispatch({
          type: "ALERT_POP",
          payload: {
            show: false,
            type: "",
            message: "",
          },
        });
      }, 1500);
    }
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
            <button onClick={handleLoginTestCredentials}>
              Login with Test credentials
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
