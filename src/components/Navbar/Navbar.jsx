import React from "react";
import "./Navbar.css";
import logo from "../Icons/logo.svg";
import { useDate, useMobileView, useAuth } from "../../context";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { destination, guests, checkInDate, checkOutDate, dateDispatch } =
    useDate();
  const { mobileView } = useMobileView();
  const { isLoggedIn, name, AuthDispatch } = useAuth();
  const navigate = useNavigate();

  const handleSearchClick = () => {
    dateDispatch({
      type: "OPEN_SEARCH_MODAL",
    });
  };

  const handleHomeClick = () => {
    dateDispatch({
      type: "RESET",
    });
    navigate("/");
  };

  const handleAuthClick = () => {
    AuthDispatch({
      type: "OPEN_AUTH_MODAL",
    });
  };

  return (
    <header className="navbar">
      <div className="logo" onClick={handleHomeClick}>
        <img src={logo} alt="Logo" />
        <span>Yatra</span>
      </div>
      {!mobileView && (
        <div className="form-container" onClick={handleSearchClick}>
          <span className="form-opiton">{destination || "Any Where"}</span>
          <span className="border-span"></span>
          <span className="form-opiton">
            {checkInDate && checkOutDate
              ? `${checkInDate.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                })} - ${checkOutDate.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                })}`
              : "Add Date"}
          </span>
          <span className="border-span"></span>
          <span className="form-opiton">
            {guests > 1 ? `${guests} guests` : "Add Guests"}
          </span>
          <span className="search-icon">
            <ion-icon name="search-outline"></ion-icon>
          </span>
        </div>
      )}
      {
        <nav className="User">
          <div className="userName">Hi, {isLoggedIn ? name : "Guest"}</div>
          <div className="login" onClick={handleAuthClick}>
            {/* <span><ion-icon name="menu-outline"></ion-icon></span> */}
            <span>
              <ion-icon name="person-outline"></ion-icon>
            </span>
          </div>
        </nav>
      }
      {mobileView && (
        <div className="mobile-search" onClick={handleSearchClick}>
          <span>
            <ion-icon name="search-outline"></ion-icon>
          </span>{" "}
          Search
        </div>
      )}
    </header>
  );
};
