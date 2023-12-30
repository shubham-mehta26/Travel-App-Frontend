import { createContext, useContext, useReducer } from "react";
import { filterReducer } from "../reducer";

const initialValue = {
  applyFilter: false,
  isFilterModalOpen: false,
  priceRange: [300, 25000],
  noOfBathrooms: "Any",
  noOfBedrooms: "Any",
  noOfBeds: "Any",
  propertyType: "Any",
  travelRating: 1,
  isCancelable: true,
};

const FilterContext = createContext(initialValue);

const FilterProvider = ({ children }) => {
  const [
    {
      applyFilter,
      isFilterModalOpen,
      noOfBathrooms,
      noOfBedrooms,
      noOfBeds,
      priceRange,
      propertyType,
      travelRating,
      isCancelable,
    },
    filterDispatch,
  ] = useReducer(filterReducer, initialValue);

  return (
    <FilterContext.Provider
      value={{
        applyFilter,
        noOfBathrooms,
        noOfBedrooms,
        noOfBeds,
        isFilterModalOpen,
        priceRange,
        propertyType,
        travelRating,
        isCancelable,
        filterDispatch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

const useFilter = () => useContext(FilterContext);

export { useFilter, FilterProvider };
