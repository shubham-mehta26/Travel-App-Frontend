import React from 'react';
import "./Navbar.css";
import logo from "../Icons/logo.svg";
import { useDate, useMobileView } from "../../context";

export  const Navbar=()=> {

  const { dateDispatch } = useDate();
  const { mobileView } = useMobileView();

  const handleSearchClick = () => {
    dateDispatch({
        type: "OPEN_SEARCH_MODAL"
    });
  }

  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>Yatra</span>
      </div>
      {
        !mobileView && <div className="form-container" onClick={handleSearchClick}>
        <span className="form-opiton">Any Where</span>
        <span className="border-span"></span>
        <span className="form-opiton">Any Week</span>
        <span className="border-span"></span>
        <span className="form-opiton">Any Guests</span>
        <span className="search-icon"><ion-icon name="search-outline"></ion-icon></span>
      </div>
      }
      {
        !mobileView && <nav className="User">
        <div className="userName">Hi, User</div>
        <div className="login">
          {/* <span><ion-icon name="menu-outline"></ion-icon></span> */}
          <span><ion-icon name="person-outline"></ion-icon></span>
        </div>
      </nav>
      }
      {
        mobileView && <div className="mobile-search" onClick={handleSearchClick}>
        <span><ion-icon name="search-outline"></ion-icon></span> Search
        </div>
      }
      
    </header>
  )
}
