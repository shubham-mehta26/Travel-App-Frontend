import { createContext, useContext, useReducer } from "react";
import { wishlistReducer } from "../reducer";

const initialState = {
  wishlist: [],
  wishlistCount: 0,
};

const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [{ wishlist, wishlistCount }, wishlistDispatch] = useReducer(
    wishlistReducer,
    initialState
  );
  return (
    <WishListContext.Provider
      value={{ wishlist, wishlistCount, wishlistDispatch }}
    >
      {children}
    </WishListContext.Provider>
  );
};
const useWishList = () => useContext(WishListContext);
export { WishListProvider, useWishList };
