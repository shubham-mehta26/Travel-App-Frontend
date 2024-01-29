import React from "react";
import { useNavigate } from "react-router-dom";
import payGif from "../../components/Icons/pay.gif";
import snoopdog from "../../components/Icons/snoop-dogg-dancing.gif";

import "./OrderSummary.css";

export const OrderSummary = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };
  return (
    <div>
      <header className="heading">
        <h1 className="heading-1" onClick={handleHome}>
          YatraWebApp
        </h1>
      </header>
      <div className="summary-main">
        <img className="snoop" src={snoopdog} alt="" />
        <img className="paid" src={payGif} alt="" />
        <h1 className="summary-heading">Payment Successful</h1>
        <div className="back-to-shopping">
          <button className="back-to-shopping" onClick={handleHome}>
            Contine Booking
          </button>
        </div>
      </div>
    </div>
  );
};
