import React from 'react';
import "./Navbar.css";
import logo from "../Icons/logo.svg";

export  const Navbar=()=> {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>Yatra</span>
      </div>
      <div className="form-container">
        <span className="form-opiton">Any Where</span>
        <span className="border-span"></span>
        <span className="form-opiton">Any Week</span>
        <span className="border-span"></span>
        <span className="form-opiton">Any Guests</span>
        <span className="search-icon"><ion-icon name="search-outline"></ion-icon></span>
      </div>
      <nav className="User">
        <div className="userName">Hi, User</div>
        <div className="login">
          <span><ion-icon name="menu-outline"></ion-icon></span>
          <span><ion-icon name="person-outline"></ion-icon></span>
        </div>
      </nav>
    </header>
  )
}
