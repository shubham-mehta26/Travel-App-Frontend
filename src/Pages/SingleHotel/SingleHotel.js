import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDate } from "../../context";
import {
  Navbar,
  HotelImages,
  HotelDetails,
  FinalPrice,
  SearchStayWithDate
} from "../../components";
import "./SingleHotel.css";

export const SingleHotel = () => {
  const { id } = useParams();
  const [singleHotel, setSingleHotel] = useState({});
  const { isSearchModalOpen } = useDate();

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

  return (
    <>
      <Navbar />
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
