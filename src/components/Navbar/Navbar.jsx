import React from 'react';
import "./Navbar.css";
import logo from "../Icons/logo.svg";

export  const Navbar=()=> {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>TravelEz</span>
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
