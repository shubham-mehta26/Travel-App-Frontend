import { React, useEffect, useState } from "react";
import { useDate } from "../../context";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Payment.css";
import "../../components/FinalPrice/FinalPrice.css";

export const Payment = () => {
  const { id } = useParams();
  const [singleHotel, setSingleHotel] = useState({});
  const { guests, checkInDate, checkOutDate } = useDate();
  const [numberOfNights, setNumberOfNights] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          `https://travel-app-backend.cyclic.cloud/api/hotels/${id}`
        );
        setSingleHotel(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [id]);
  const { image, name, address, price, rating, state } = singleHotel;

  useEffect(() => {
    if (checkOutDate && checkInDate) {
      const nights = Math.floor(
        (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)
      );
      setNumberOfNights(nights);
    }
  }, [checkInDate, checkOutDate]);

  const handleHome = () => {
    navigate("/");
  };
  return (
    <div className="payment-main-wrapper">
      <header className="heading">
        <h1 className="heading-1" onClick={handleHome}>
          YatraWebApp
        </h1>
      </header>
      <div className="payment-main">
        <div className="payment-part1">
          <h2>Trip Details</h2>
          <div className="payment-booking-details">
            {/* <h3>Your Trip</h3> */}
            <div>
              <p>Dates :</p>
              <span>
                {checkInDate.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                })}{" "}
                -
                {checkOutDate.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                })}
              </span>
            </div>
            <div>
              <p>Guests :</p>
              <span>{guests} Guests</span>
            </div>
          </div>
          <div className="payment-method">
            <h3>Pay With</h3>
            <span>RazorPay</span>
          </div>
          <div className="payment-button">
            <button className="payment-button">Confirm Booking</button>
          </div>
        </div>
        <div className="payment-part2">
          <div className="payment-hotel-details-wrapper">
            <img src={image} alt="hotel" />
            <div className="payment-hotel-details">
              <div>
                <span>{name}</span>
                <div className="payment-details-subtext">
                  {address}, {state}
                </div>
              </div>
              <div>
                <span>
                  <span>
                    <ion-icon name="star"></ion-icon>
                  </span>
                  <span>{rating}</span>
                </span>
              </div>
            </div>
          </div>
          <div className="safe-payment">
            Your booking is 100% secure with &nbsp; <span> YatraWebApp </span>.
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
    </div>
  );
};
