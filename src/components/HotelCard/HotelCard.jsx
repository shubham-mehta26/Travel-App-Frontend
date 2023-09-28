import "./HotelCard.css";
import React from 'react';

export const HotelCard=({hotel})=>{
    const {  name, image, city, state, price, rating } = hotel;
    return (
       <div className="Hotel-Card">
            <div className="img-container">
                    <div className="image-overlay"></div>
                    <img src={image} alt={name} />
                    <div className="image-footer">
                        <div className="hotel-name">{name}</div>
                        <div className="rating">
                            <span><ion-icon name="star-sharp"></ion-icon></span>
                            <span>{rating}</span>
                        </div>
                    </div>
            </div>
            
            <div className="card-details">
                <div className="details">
                <ion-icon className="location-icon" name="location-outline"></ion-icon><div className="location">{city}, {state}</div>
                    <div className="price"><span className="rupees-logo">₹</span> {price}/night</div>
                </div>
                <div className="wishlist">
                    <button>
                        <span><ion-icon name="heart-outline"></ion-icon></span>
                    </button>
            </div>
            </div>
       </div>
    )
}