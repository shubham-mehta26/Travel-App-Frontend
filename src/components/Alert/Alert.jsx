import Alert from "@mui/material/Alert";
import { useAuth } from "../../context";
import "./Alert.css";
export const AlertPop = () => {
  const { alertShow, alertMessage, alertType } = useAuth();
  return (
    <div className={`popup ${alertShow ? "visible" : "hidden"}`}>
      <Alert variant="filled" severity={alertType}>
        {alertMessage}
      </Alert>
    </div>
  );
};
