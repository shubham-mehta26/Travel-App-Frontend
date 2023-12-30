import "./RoomsAndBeds.css";
import { useFilter } from "../../../context";
import { useEffect } from "react";
const noOfAmenities = ["Any", "1", "2", "3", "4", "5+"];

export const RoomsAndBeds = () => {
  const { noOfBathrooms, noOfBedrooms, noOfBeds, filterDispatch } = useFilter();

  useEffect(() => {
    let BedroomELe = document.querySelectorAll(
      ".rooms-beds-number-values.bedrooms span"
    );
    let BathroomELe = document.querySelectorAll(
      ".rooms-beds-number-values.bathrooms span"
    );
    let BedELe = document.querySelectorAll(
      ".rooms-beds-number-values.beds span"
    );
    BedroomELe.forEach((ele) =>
      // eslint-disable-next-line
      ele.id == noOfBedrooms || (ele.id == "5+" && noOfBedrooms == 5)
        ? ele.classList.add("selected")
        : ele.classList.remove("selected")
    );
    BathroomELe.forEach((ele) =>
      // eslint-disable-next-line
      ele.id == noOfBathrooms || (ele.id == "5+" && noOfBathrooms == 5)
        ? ele.classList.add("selected")
        : ele.classList.remove("selected")
    );
    BedELe.forEach((ele) =>
      // eslint-disable-next-line
      ele.id == noOfBeds || (ele.id == "5+" && noOfBeds == 5)
        ? ele.classList.add("selected")
        : ele.classList.remove("selected")
    );
  }, [noOfBathrooms, noOfBedrooms, noOfBeds]);

  const handleBedroomClick = (number) => {
    filterDispatch({ type: "BEDROOMS", payload: number });
  };

  const handleBathroomClick = (number) => {
    filterDispatch({ type: "BATHROOMS", payload: number });
  };

  const handleBedClick = (number) => {
    filterDispatch({ type: "BEDS", payload: number });
  };

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
          <div className="rooms-beds-number-values bedrooms">
            {noOfAmenities.map((number, index) => (
              <span
                id={number}
                key={index}
                onClick={() => handleBedroomClick(number)}
              >
                {number}
              </span>
            ))}
          </div>
          <div className="rooms-beds-number-values beds">
            {noOfAmenities.map((number, index) => (
              <span
                id={number}
                key={index}
                onClick={() => handleBedClick(number)}
              >
                {number}
              </span>
            ))}
          </div>
          <div className="rooms-beds-number-values bathrooms">
            {noOfAmenities.map((number, index) => (
              <span
                id={number}
                key={index}
                onClick={() => handleBathroomClick(number)}
              >
                {number}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
