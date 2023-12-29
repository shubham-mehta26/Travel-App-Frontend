import "./FreeCancel.css";

export const FreeCancel = () => {
  return (
    <div className="filter-container">
      <div className="filter-label free-c">
        <span>Free Cancelation</span>
        <label className="switch-free-c">
          <input type="checkbox" />
          <span className="slider-free-c round"></span>
        </label>
      </div>
    </div>
  );
};
