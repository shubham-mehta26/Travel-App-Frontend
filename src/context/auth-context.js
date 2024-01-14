import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const initialValue = {
  isAuthModalOpen: false,
  username: "",
  number: "",
  email: "",
  password: "",
  confirmPassword: "",
  accessToken: "",
  name: "",
  isLoggedIn: false,
  alertShow: false,
  alertMessage: "",
  alertType: "",
  selectedTab: "login",
};

const AuthContext = createContext(initialValue);

const AuthProvider = ({ children }) => {
  const [
    {
      isAuthModalOpen,
      username,
      number,
      email,
      password,
      confirmPassword,
      selectedTab,
      accessToken,
      isLoggedIn,
      name,
      alertShow,
      alertMessage,
      alertType,
    },
    AuthDispatch,
  ] = useReducer(authReducer, initialValue);

  return (
    <AuthContext.Provider
      value={{
        isAuthModalOpen,
        username,
        number,
        email,
        password,
        confirmPassword,
        selectedTab,
        accessToken,
        name,
        isLoggedIn,
        alertShow,
        alertMessage,
        alertType,
        AuthDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
