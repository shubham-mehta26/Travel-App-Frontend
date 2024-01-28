import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const initialValue = {
  isAuthModalOpen: false,
  isAccountModalOpen: false,
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
  alertType: "success",
  selectedTab: "login",
};

const AuthContext = createContext(initialValue);

const AuthProvider = ({ children }) => {
  const [
    {
      isAuthModalOpen,
      isAccountModalOpen,
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
        isAccountModalOpen,
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
