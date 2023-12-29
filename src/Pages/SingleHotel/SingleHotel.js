import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDate, useMobileView } from "../../context";
import { useNavigate } from "react-router-dom";
import {
  HotelImages,
  HotelDetails,
  FinalPrice,
  SearchStayWithDate,
  Navbar,
} from "../../components";
import "./SingleHotel.css";
import img from "../../components/Icons/logo.svg";

export const SingleHotel = () => {
  const { id } = useParams();
  const [singleHotel, setSingleHotel] = useState({});
  const { isSearchModalOpen } = useDate();
  const { mobileView } = useMobileView();
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

  const goback = () => {
    navigate(-1);
  };

  return (
    <>
      {!mobileView && <Navbar />}
      {mobileView && (
        <div className="mobile-navbar">
          <div className="mobile-navbar-back" onClick={goback}>
            <ion-icon name="arrow-back-outline"></ion-icon>Back
          </div>
          <div className="logo">
            <img src={img} alt="logo-img" />
          </div>
        </div>
      )}
      <main className="single-hotel-page">
        <HotelImages singleHotel={singleHotel} />
        <div className="hotel-details">
          <HotelDetails singleHotel={singleHotel} />
          <FinalPrice singleHotel={singleHotel} />
        </div>
      </main>
      {isSearchModalOpen && <SearchStayWithDate />}
    </>
  );
};
