import "./FinalPrice.css";
import { React, useEffect, useState } from "react";
import { useDate } from "../../context";
import { DateSelector } from "../DateSelector/DateSelector";

export const FinalPrice = ({ singleHotel }) => {
  const { price, rating } = singleHotel;
  const { guests,checkInDate,checkOutDate, dateDispatch } = useDate();
  const [numberOfNights, setNumberOfNights] = useState(1);

  useEffect(()=>{
    if (checkOutDate && checkInDate) {
      const nights = Math.floor((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
      setNumberOfNights(nights);
    }
  },[checkInDate,checkOutDate])
  


  const handleDecreament = () => {
    dateDispatch({
      type: "DECREMENT",
    })
  }
  const handleIncreament = () => {
    dateDispatch({
      type: "INCREAMENT",
    })
  }
  return (
    <div className="price-detail-containe-wrapper">
      <div className="price-detail-container">
        <div className="first">
          <div className="price">
            ₹ {price} <span className="price-span">night</span>{" "}
          </div>
          <div className="rating1">
            <ion-icon name="star-sharp"></ion-icon>
            <span>{rating}</span>
          </div>
        </div>
        <div className="dates">
          <div className="check-in">
            <div className="check-in-text">CHECK-IN</div>
            <div className="check-in-date"><DateSelector placeholder="Add dates" checkInType="in"/></div>
          </div>
          <div className="check-out">
            <div className="check-out-text">CHECK-OUT</div>
            <div className="check-out-date"><DateSelector placeholder="Add dates" checkInType="out"/></div>
          </div>
        </div>
        <div className="guests">
          <div className="guest-count">
            <div className="guest-count-text">GUESTS</div>
            <div className="guest-count-number">{guests} </div>
          </div>
          <div className="guest-controls">
            <div className="guest-controls-button">
              <button onClick={handleIncreament}>
                <ion-icon name="chevron-up-outline"></ion-icon>
              </button>
              <button onClick={handleDecreament}>
                <ion-icon name="chevron-down-outline"></ion-icon>
              </button>
            </div>
          </div>
        </div>
        <div className="reserve">
          <button>RESERVE</button>
        </div>
        <div className="total">
          <div className="nights tt">
            <div className="nights-calculate">₹ {price} x {(numberOfNights || 1)} night</div>
            <div className="nights-total">₹ {price * (numberOfNights || 1)}</div>
          </div>
          <div className="service tt">
            <div className="service-calculate">Service Fee</div>
            <div className="service-total">₹ 200</div>
          </div>
        </div>
        <div className="amount tt">
          <div className="amount-calculate">TOTAL</div>
          <div className="amount-total">₹ {price * (numberOfNights || 1) + 200}</div>
        </div>
      </div>
    </div>
  );
};
