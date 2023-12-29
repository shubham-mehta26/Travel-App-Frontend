import "./RoomsAndBeds.css";
const noOfAmenities = ["Any", "1", "2", "3", "4", "5+"];

export const RoomsAndBeds = () => {
  return (
    <div className="filter-container">
      <div className="filter-label">Rooms And Beds</div>
      <div className="rooms-beds-container">
        <div className="room-type">
          <span className="span-label">Bedrooms</span>
          <span className="span-label">Beds</span>
          <span className="span-label">Bathrooms</span>
        </div>
        <div className="rooms-beds-number">
          <div className="rooms-beds-number-values ">
            {noOfAmenities.map((number, index) => (
              <span key={index}>{number}</span>
            ))}
          </div>
          <div className="rooms-beds-number-values ">
            {noOfAmenities.map((number, index) => (
              <span key={index}>{number}</span>
            ))}
          </div>
          <div className="rooms-beds-number-values ">
            {noOfAmenities.map((number, index) => (
              <span key={index}>{number}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
