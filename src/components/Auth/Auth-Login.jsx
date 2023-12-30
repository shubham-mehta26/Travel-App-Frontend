import "./Auth.css";

export const AuthLogin = () => {
  return (
    <div className="auth-container-wrapper">
      <div className="auth-container">
        <form action="">
          <div className="auth-part mobile-number">
            <label htmlFor="auth-login-number">
              Mobile No.<span className="asterisk">*</span>{" "}
            </label>
            <input
              type="text"
              maxLength={10}
              id="auth-login-number"
              required
              placeholder="Enter Mobile number"
            />
          </div>
          <div className="auth-part password">
            <label htmlFor="auth-login-password">Password</label>
            <input
              type="password"
              id="auth-login-password"
              placeholder="Enter password"
              required
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
