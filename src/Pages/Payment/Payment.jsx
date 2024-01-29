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

  // payment gateway
  const loadScript = (source) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = source;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleConfirmBookingClick = async () => {
    console.log(process.env.REACT_APP_RAZORPAY_KEY);
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!response) {
      console.log({ message: "Razorpay SDK failed to load" });
      return;
    }

    const options = {
      key: "rzp_test_K3JDjNHukQJdaM",
      amount: price * (numberOfNights || 1) + 200,
      currency: "INR",
      name: "YatraWebApp",
      email: "shubham.sm911@gmail.com",
      contact: "9999999999",
      description: "Thank you for booking with us",
      image:
        "https://serving.photos.photobox.com/57107225d02bfce95df561a53f229ccb66063ab0e845072f832ea77287f63e44674a8e6c.jpg",

      handler: ({ payment_id }) => {
        navigate("/order-summary");
      },
      prefill: {
        name: "Shubham Mehta",
        email: "shubham.sm911@gmail.com",
        contact: "9999999999",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
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
            <button
              className="payment-button"
              onClick={handleConfirmBookingClick}
            >
              Confirm Booking
            </button>
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
