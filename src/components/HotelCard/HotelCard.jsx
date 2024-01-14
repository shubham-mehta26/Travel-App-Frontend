import "./HotelCard.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useWishList } from "../../context";
import { findHotelInWishlist } from "../../Utils";
import { useAuth } from "../../context";
import heartFilled from "../../components/Icons/heart-filled.svg";
import heart from "../../components/Icons/heart.svg";

export const HotelCard = ({ hotel }) => {
  const { _id, name, image, city, state, price, rating } = hotel;
  const { wishlistDispatch, wishlist } = useWishList();
  const { isLoggedIn, AuthDispatch } = useAuth();

  const navigate = useNavigate();

  const handleHotelCardClick = (e) => {
    if (e.target.name === "heart-outline") return;
    console.log(e.target.name);
    navigate(`/hotels/${name}/${city}-${state}/${_id}/reserve`);
  };

  const isHotelInWishlist = findHotelInWishlist(wishlist, _id);

  const handleWishlistClick = () => {
    if (isLoggedIn) {
      if (!isHotelInWishlist) {
        wishlistDispatch({
          type: "ADD_TO_WISHLIST",
          payload: hotel,
        });
        AuthDispatch({
          type: "ALERT_POP",
          payload: {
            show: true,
            type: "success",
            message: "Added to Wishlist",
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
      } else {
        wishlistDispatch({
          type: "REMOVE_FROM_WISHLIST",
          payload: _id,
        });
        AuthDispatch({
          type: "ALERT_POP",
          payload: {
            show: true,
            type: "warning",
            message: "Removed From Wishlist",
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
    } else {
      AuthDispatch({
        type: "OPEN_AUTH_MODAL",
      });
    }
  };

  return (
    <div onClick={handleHotelCardClick} className="Hotel-Card">
      <div className="img-container">
        <div className="image-overlay"></div>
        <img src={image} alt={name} />
        <div className="image-footer">
          <div className="hotel-name">{name}</div>
          <div className="rating">
            <span>
              <ion-icon name="star-sharp"></ion-icon>
            </span>
            <span>{rating}</span>
          </div>
        </div>
      </div>

      <div className="card-details">
        <div className="details">
          <ion-icon
            className="location-icon"
            name="location-outline"
          ></ion-icon>
          <div className="location">
            {city}, {state}
          </div>
          <div className="price">
            <span className="rupees-logo">₹</span> {price}/night
          </div>
        </div>
        <div className="wishlist">
          <button onClick={handleWishlistClick}>
            <span>
              <ion-icon
                src={isHotelInWishlist ? heartFilled : heart}
                name="heart-outline"
              ></ion-icon>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
