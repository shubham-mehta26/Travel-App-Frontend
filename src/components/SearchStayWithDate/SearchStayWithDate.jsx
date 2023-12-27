import "./SearchStayWithDate.css";
import { DateSelector } from "../DateSelector/DateSelector";
import icon from "../Icons/logo2.svg";

export const SearchStayWithDate = () => {
  return (
    <div className="destination-container-wrapper">
      <div className="logo-name">
        <div className="logo-logo">
          <img src={icon} alt="" />
        </div>
        <div className="name-name">Yatra</div>
      </div>
      <div className="destination-container">
        <div className="search-bar-popup">
          <div className="search-location part">
            <div className="destination-container-label">
              <ion-icon name="location-outline"></ion-icon> Where
            </div>
            <input type="text" placeholder="Search Destination" />
          </div>
          <div className="check-in part">
            <div className="destination-container-label">
              <ion-icon name="calendar-outline"></ion-icon> Check-IN
            </div>
            <DateSelector />
          </div>
          <div className="check-out part">
            <div className="destination-container-label">
              <ion-icon name="calendar-outline"></ion-icon> Check-OUT
            </div>
            <DateSelector />
          </div>
          <div className="guests-number part">
            <div className="destination-container-label">
              <ion-icon name="people-outline"></ion-icon> Guests
            </div>
            <input type="text" placeholder="Guests" />
          </div>
          <div className="search part"><ion-icon name="search-outline"></ion-icon></div>
        </div>
      </div>
    </div>
  );
};
