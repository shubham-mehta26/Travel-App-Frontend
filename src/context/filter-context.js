import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer";

const initialValue = {
  isFilterModalOpen: false,
  priceRange: [300, 25000],
};

const FilterContext = createContext(initialValue);

const FilterProvider = ({ children }) => {
  const [{ isFilterModalOpen, priceRange }, filterDispatch] = useReducer(
    filterReducer,
    initialValue
  );

  return (
    <FilterContext.Provider
      value={{ isFilterModalOpen, priceRange, filterDispatch }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
