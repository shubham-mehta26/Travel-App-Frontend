import "./Auth.css";

export const AuthSignUp = () => {
  return (
    <div className="auth-container-wrapper">
      <div className="auth-container">
        <form action="">
          <div className="auth-part mobile-number">
            <label htmlFor="auth-signup-number">
              Mobile No.<span className="asterisk">*</span>{" "}
            </label>
            <input
              type="text"
              maxLength={10}
              id="auth-signup-number"
              required
              placeholder="Enter Mobile number"
            />
          </div>
          <div className="auth-part name">
            <label htmlFor="auth-signup-name">
              Name<span className="asterisk">*</span>{" "}
            </label>
            <input
              type="text"
              id="auth-signup-name"
              required
              placeholder="Enter Name"
            />
          </div>
          <div className="auth-part email">
            <label htmlFor="auth-signup-email">
              Email<span className="asterisk">*</span>{" "}
            </label>
            <input
              type="email"
              id="auth-signup-email"
              required
              placeholder="Enter Email"
            />
          </div>
          <div className="auth-part password">
            <label htmlFor="auth-signup-password">Password</label>
            <input
              type="password"
              id="auth-signup-password"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="auth-part password">
            <label htmlFor="auth-signup-password-confirm">Password</label>
            <input
              type="password"
              id="auth-signup-password-confirm"
              placeholder="Confirm password"
              required
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
