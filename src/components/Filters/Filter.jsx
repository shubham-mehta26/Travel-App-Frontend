import "./Filter.css";
import {
  PriceRange,
  RoomsAndBeds,
  PropertyType,
  Rating,
  FreeCancel,
} from "./index";
import { useFilter } from "../../context";

export const Filter = () => {
  const { filterDispatch } = useFilter();

  const handleClose = () => {
    filterDispatch({ type: "SHOW_FILTER_MODAL" });
  };

  const handleFilterApplyClick = () => {
    filterDispatch({ type: "APPLY_FILTERS" });
  };

  const handleClearFilterClick = () => {
    filterDispatch({ type: "CLEAR_FILTERS" });
  };

  return (
    <div className="filter-modal-wrapper">
      <div className="filter-modal">
        <div className="filer-heading">
          <div>Filters</div>
          <div className="close-logo button" onClick={handleClose}>
            <ion-icon name="close-outline"></ion-icon>
          </div>
        </div>
        <PriceRange />
        <RoomsAndBeds />
        <PropertyType />
        <Rating />
        <FreeCancel />
        <div className="filter-buttons">
          <button className="clear-button" onClick={handleClearFilterClick}>
            Clear
          </button>
          <button className="apply-button" onClick={handleFilterApplyClick}>
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};
