import "./HotelImages.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useMobileView } from "../../context";

export const HotelImages = ({ singleHotel }) => {
  const { name, image, imageArr } = singleHotel;
  const { mobileView } = useMobileView();

  return (
    <>
      {!mobileView ? (
        <div className="images">
          <div className="hotel-name1">{name}</div>
          <div className="main-img">
            <img src={image} alt="hotel-img" />
          </div>
          <div className="secondary-img">
            {imageArr &&
              imageArr.map((image, index) => (
                <img key={index} src={image} alt="hotel-img" />
              ))}
          </div>
        </div>
      ) : (
        <div className="images1">
          <Carousel autoPlay={true} showThumbs={true} infiniteLoop={true} className="crsl">
            <div>
              <img className="img-crsl" src={image} alt="hotel-img" />
            </div>
          </Carousel>
        </div>
      )}
    </>
  );
};
