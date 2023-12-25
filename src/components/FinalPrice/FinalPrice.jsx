import "./FinalPrice.css";
import { React, useState } from "react";

export const FinalPrice = ({ singleHotel }) => {
  const { price, rating } = singleHotel;
  const [guests, setGuests] = useState(1);
  console.log(guests);
  return (
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
          <div className="check-in-date">Wed, 20 Oct</div>
        </div>
        <div className="check-out">
          <div className="check-out-text">CHECK-OUT</div>
          <div className="check-out-date">Thu, 21 Oct</div>
        </div>
      </div>
      <div className="guests">
        <div className="guest-count">
          <div className="guest-count-text">GUESTS</div>
          <div className="guest-count-number">{guests} </div>
        </div>
        <div className="guest-controls">
          <div className="guest-controls-button">
            <button onClick={() => setGuests(guests + 1)}>
              <ion-icon name="chevron-up-outline"></ion-icon>
            </button>
            <button onClick={() => setGuests(guests > 2 ? guests - 1 : 1)}>
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
          <div className="nights-calculate">₹ {price} x 2 night</div>
          <div className="nights-total">₹ {price * 2}</div>
        </div>
        <div className="service tt">
          <div className="service-calculate">Service Fee</div>
          <div className="service-total">₹ 200</div>
        </div>
      </div>
      <div className="amount tt">
        <div className="amount-calculate">TOTAL</div>
        <div className="amount-total">₹ {price * 2 + 200}</div>
      </div>
    </div>
  );
};
