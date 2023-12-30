import { useEffect } from "react";
import { useFilter } from "../../../context";
import "./Rating.css";

const ratings = ["1", "2", "3", "4", "5"];

export const Rating = () => {
  const { travelRating, filterDispatch } = useFilter();

  useEffect(() => {
    let ratingEle = document.querySelectorAll(".rating-container span");
    ratingEle.forEach((ele) =>
      // eslint-disable-next-line
      ele.id == travelRating
        ? ele.classList.add("selected")
        : ele.classList.remove("selected")
    );
  }, [travelRating]);

  const handleRatingsClick = (rating) => {
    filterDispatch({ type: "RATINGS", payload: rating });
  };

  return (
    <div className="filter-container">
      <div className="filter-label">Rating</div>
      <div className="rating-container">
        {ratings.map((rating) => (
          <span
            className="span-label"
            id={rating}
            key={rating}
            onClick={() => handleRatingsClick(rating)}
          >
            {rating}+
          </span>
        ))}
      </div>
    </div>
  );
};
