import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const initialValue = {
  isAuthModalOpen: false,
  username: "",
  number: "",
  email: "",
  password: "",
  confirmPassword: "",
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
        AuthDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
