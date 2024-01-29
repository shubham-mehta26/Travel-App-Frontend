import "./FinalPrice.css";
import { React, useEffect, useState } from "react";
import { useDate, useMobileView, useAuth } from "../../context";
import { DateSelector } from "../DateSelector/DateSelector";
import { useNavigate } from "react-router-dom";

export const FinalPrice = ({ singleHotel }) => {
  const { _id, price, rating } = singleHotel;
  const { guests, checkInDate, checkOutDate, dateDispatch } = useDate();
  const [showModal, setShowModal] = useState(false);
  const [numberOfNights, setNumberOfNights] = useState(1);
  const navigate = useNavigate();
  const { mobileView } = useMobileView();
  const { AuthDispatch } = useAuth();

  useEffect(() => {
    if (checkOutDate && checkInDate) {
      const nights = Math.floor(
        (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
      );
      setNumberOfNights(nights);
    }
  }, [checkInDate, checkOutDate]);

  const handleDecreament = () => {
    dateDispatch({
      type: "DECREMENT",
    });
  };
  const handleIncreament = () => {
    dateDispatch({
      type: "INCREAMENT",
    });
  };

  const handleReserveClick = (e) => {
    if (e.target.innerText === "RESERVE") {
      setShowModal(true);
      e.target.innerText = "BOOK NOW";
    } else {
      if (checkInDate && checkOutDate && guests > 0) {
        e.target.innerText = "RESERVE";
        navigate(`/confirm-booking/stay/${_id}`);
      } else {
        AuthDispatch({
          type: "ALERT_POP",
          payload: {
            show: true,
            type: "error",
            message: "Please select valid dates and guests",
          },
        });
        setTimeout(() => {
          AuthDispatch({
            type: "ALERT_POP",
            payload: {
              show: false,
              type: "",
              message: "",
            },
          });
        }, 1500);
      }
    }
  };
  return (
    <div
      className={`price-detail-containe-wrapper ${
        showModal ? "show" : "hidden"
      }`}
    >
      <div
        className={`price-detail-container ${showModal ? "show2" : "hidden"}`}
      >
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
            <div className="check-in-date">
              <DateSelector placeholder="Add dates" checkInType="in" readonly />
            </div>
          </div>
          <div className="check-out">
            <div className="check-out-text">CHECK-OUT</div>
            <div className="check-out-date">
              <DateSelector
                placeholder="Add dates"
                checkInType="out"
                readonly
              />
            </div>
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
          <button
            // disabled={checkInDate && checkOutDate && guests > 0 ? false : true}
            onClick={handleReserveClick}
          >
            {mobileView ? "RESERVE" : "BOOK NOW"}
          </button>
        </div>
        <div className="total">
          <div className="nights tt">
            <div className="nights-calculate">
              ₹ {price} x {numberOfNights || 1} night
            </div>
            <div className="nights-total">
              ₹ {price * (numberOfNights || 1)}
            </div>
          </div>
          <div className="service tt">
            <div className="service-calculate">Service Fee</div>
            <div className="service-total">₹ 200</div>
          </div>
        </div>
        <div className="amount tt">
          <div className="amount-calculate">TOTAL</div>
          <div className="amount-total">
            ₹ {price * (numberOfNights || 1) + 200}
          </div>
        </div>
      </div>
    </div>
  );
};
