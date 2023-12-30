import "./FreeCancel.css";
import { useFilter } from "../../../context";

export const FreeCancel = () => {
  const { isCancelable, filterDispatch } = useFilter();

  const handleCancelChange = (event) => {
    filterDispatch({
      type: "CANCELABLE",
      payload: event.target.checked,
    });
  };

  return (
    <div className="filter-container">
      <div className="filter-label free-c">
        <span>Free Cancelation</span>
        <label className="switch-free-c">
          <input
            type="checkbox"
            value={isCancelable}
            checked={isCancelable}
            onChange={handleCancelChange}
          />
          <span className="slider-free-c round"></span>
        </label>
      </div>
    </div>
  );
};
