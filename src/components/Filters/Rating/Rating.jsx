import "./Rating.css";

const ratings = ["1", "2", "3", "4", "5"];

export const Rating = () => {
  return (
    <div className="filter-container">
      <div className="filter-label">Rating</div>
      <div className="rating-container">
        {ratings.map((rating) => (
          <span key={rating}>{rating}+</span>
        ))}
      </div>
    </div>
  );
};
