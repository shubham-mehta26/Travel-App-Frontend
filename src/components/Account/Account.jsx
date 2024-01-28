import { useAuth } from "../../context";
import { useNavigate } from "react-router-dom";
import "./Account.css";
export const Account = () => {
  const { AuthDispatch } = useAuth();
  const navigate = useNavigate();
  const handleLogut = () => {
    AuthDispatch({
      type: "LOGOUT",
    });
    AuthDispatch({
      type: "OPEN_ACCOUNT_MODAL",
    });
    AuthDispatch({
      type: "ALERT_POP",
      payload: {
        show: true,
        type: "success",
        message: "Logout Successful",
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
  };
  const handleWishlist = () => {
    navigate("/wishlist");
    AuthDispatch({
      type: "OPEN_ACCOUNT_MODAL",
    });
  };
  return (
    <div className="account-main">
      <div className="account-box account-info">My Account</div>
      <div className="account-box logout" onClick={handleLogut}>
        Logout
      </div>
      <div className="account-box wl" onClick={handleWishlist}>
        {" "}
        Wishlist
      </div>
    </div>
  );
};
