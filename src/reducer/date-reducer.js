export const dateReducer = (state, { type, payload }) => {
  switch (type) {
    case "OPEN_SEARCH_MODAL":
      return { ...state, isSearchModalOpen: !state.isSearchModalOpen };
    case "CLOSE_SEARCH_MODAL":
      return { ...state, isSearchModalOpen: !state.isSearchModalOpen };
    case "DECREMENT":
      return { ...state, guests: state.guests>1 ? state.guests - 1 : 1};
    case "INCREAMENT":
      return { ...state, guests: state.guests + 1 };
    case "RESET":
      return {
        ...state,
        guests: 0,
        destination: "",
        checkInDate: null,
        checkOutDate: null,
      };
    case "CHECK_IN":
      return {
        ...state,
        checkInDate: payload,
      };
    case "CHECK_OUT":
      return {
        ...state,
        checkOutDate: payload,
      };
    case "DESTINATION":
      return{
        ...state,
        destination: payload,
      }
    case "GUESTS":
      return{
        ...state,
        guests: payload,
      }
    default:
      return state;
  }
};
