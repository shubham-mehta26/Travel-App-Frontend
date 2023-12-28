import { useEffect, useState } from "react";
import axios from "axios";
import "./SearchStayWithDate.css";
import { DateSelector } from "../DateSelector/DateSelector";
import { useDate, useCategory } from "../../context";
import icon from "../Icons/logo2.svg";
import { useNavigate } from "react-router-dom";

export const SearchStayWithDate = () => {
  const { destination, guests, dateDispatch } = useDate();
  const { hotelCategory } = useCategory();
  const [hotels, setHotels] = useState([]);
  const [searchOptionsVisible, setSearchOptionsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } =
          await axios.get(`https://travel-app-backend.cyclic.cloud/api/hotels
            ?category=${hotelCategory}`);

        setHotels(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [hotelCategory]);

  const handleGuestChange = (event) => {
    dateDispatch({
      type: "GUESTS",
      payload: event.target.value,
    });
  };

  const handleDestinationChange = (event) => {
    dateDispatch({
      type: "DESTINATION",
      payload: event.target.value,
    });
  };

  const handleSearchClick = (event) => {
    if (event.target.classList.contains("destination-container-wrapper")) {
      dateDispatch({
        type: "OPEN_SEARCH_MODAL",
      });
    }
  };

  const destinationOptions = hotels.filter(
    ({ address, city, state, country }) =>
      address.toLowerCase().includes(destination.toLowerCase()) ||
      city.toLowerCase().includes(destination.toLowerCase()) ||
      state.toLowerCase().includes(destination.toLowerCase()) ||
      country.toLowerCase().includes(destination.toLowerCase())
  );

  const handleSRC = (event) => {
    if (
      event.target.classList.contains("destination-container") &&
      !event.target.classList.contains("search-location")
    ) {
      setSearchOptionsVisible(false);
    }
  };

  const handleSearchResultClick = (address) => {
    dateDispatch({
      type: "DESTINATION",
      payload: address,
    });
    setSearchOptionsVisible(false);
  };

  const handleSearchButtonClick= ()=>{
    dateDispatch({
      type: "CLOSE_SEARCH_MODAL",
    })
    destination ? navigate(`/hotels/${destination}`) : navigate("/");
  }

  return (
    <div className="destination-container-wrapper" onClick={handleSearchClick}>
      <div className="logo-name">
        <div className="logo-logo">
          <img src={icon} alt="" />
        </div>
        <div className="name-name">Yatra</div>
      </div>
      <div className="destination-container" onClick={handleSRC}>
        <div className="search-bar-popup">
          <div className="search-location part">
            <div className="destination-container-label">
              <ion-icon name="location-outline"></ion-icon> Where
            </div>
            <input
              value={destination}
              onChange={handleDestinationChange}
              onFocus={() => setSearchOptionsVisible(true)}
              onClick={() => setSearchOptionsVisible(true)}
              type="text"
              placeholder="Search Destination"
            />
            <div
              className={`search-result-container ${
                searchOptionsVisible ? "show" : ""
              }`}
            >
              {destinationOptions &&
                destinationOptions.map(({ address, city }, index) => (
                  <p
                    key={index}
                    className="search-result-container-part"
                    onClick={() => handleSearchResultClick(address)}
                  >
                    {address}, {city}
                  </p>
                ))}
            </div>
          </div>
          <div className="check-in part">
            <div className="destination-container-label">
              <ion-icon name="calendar-outline"></ion-icon> Check-in
            </div>
            <DateSelector placeholder="Add Dates" checkInType="in" />
          </div>
          <div className="check-out part">
            <div className="destination-container-label">
              <ion-icon name="calendar-outline"></ion-icon> Check-out
            </div>
            <DateSelector placeholder="Add Dates" checkInType="out" />
          </div>
          <div className="guests-number part">
            <div className="destination-container-label">
              <ion-icon name="people-outline"></ion-icon> Guests
            </div>
            <input
              onFocus={() => setSearchOptionsVisible(false)}
              value={guests}
              onChange={handleGuestChange}
              type="text"
              placeholder="Add Guests"
            />
          </div>
          <div onClick={handleSearchButtonClick} className="search part">
            <ion-icon name="search-outline"></ion-icon>
          </div>
        </div>
      </div>
    </div>
  );
};
