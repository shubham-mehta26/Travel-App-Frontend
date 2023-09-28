import "./HotelCard.css";
import React from 'react';

export const HotelCard=()=>{
    return (
       <div className="Hotel-Card">
            <div className="img-container">
                    <div className="image-overlay"></div>
                    <img src="https://a0.muscache.com/im/pictures/miso/Hosting-26117817/original/9da40e3c-5846-4359-bb41-05c27b09a8f5.jpeg?im_w=720" alt="" />
                    <div className="image-footer">
                        <div className="hotel-name">Whispering Pines Cottages</div>
                        <div className="rating">
                            <span><ion-icon name="star-sharp"></ion-icon></span>
                            <span>4.3</span>
                        </div>
                    </div>
            </div>
            
            <div className="card-details">
                <div className="details">
                    <div className="location"><ion-icon name="location-outline"></ion-icon>Jibhi , India</div>
                    <div className="price"><span className="rupees-logo">Rs</span> 5000/night</div>
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