export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "OPEN_AUTH_MODAL":
      return {
        ...state,
        isAuthModalOpen: !state.isAuthModalOpen,
      };
    case "SET_TO_LOGIN":
      return {
        ...state,
        selectedTab: "login",
      };
    case "SET_TO_SIGNUP":
      return {
        ...state,
        selectedTab: "signup",
      };
    case "NUMBER":
      return {
        ...state,
        number: payload,
      };
    case "NAME":
      return {
        ...state,
        username: payload,
      };
    case "EMAIL":
      return {
        ...state,
        email: payload,
      };
    case "PASSWORD":
      return {
        ...state,
        password: payload,
      };
    case "CONFIRM_PASSWORD":
      return {
        ...state,
        confirmPassword: payload,
      };
    case "CLEAR_USER_DATA":
      return {
        ...state,
        username: "",
        number: "",
        email: "",
        password: "",
        confirmPassword: "",
      };
    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        accessToken: payload,
        isLoggedIn: true,
      };
    case "SET_USERNAME":
      const firstName = payload.split(" ")[0];
      return {
        ...state,
        name: firstName,
      };
    case "ALERT_POP":
      return {
        ...state,
        alertShow: payload.show,
        alertMessage: payload.message,
        alertType: payload.type,
      };
    default:
      return state;
  }
};
