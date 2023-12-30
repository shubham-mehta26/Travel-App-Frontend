import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCategory, useDate, useFilter } from "../../context";
import {
  getHotelsByPriceRange,
  getHotelsByRoomsAndBeds,
  getHotelsByPropertyType,
  getHotelsByRatings,
  getHotelsByCancelation,
} from "../../Utils";
import InfiniteScroll from "react-infinite-scroll-component";

import {
  Navbar,
  HotelCard,
  Categories,
  SearchStayWithDate,
  Filter,
} from "../../components";

export const Home = () => {
  const [hasMore, setHasMore] = useState(true);
  const [hotels, setHotels] = useState([]);
  const [testData, setTestData] = useState([]);
  const [currIndex, setCurrIndex] = useState(16);
  const [dataLoaded, setDataLoaded] = useState(false);
  const { hotelCategory } = useCategory();
  const { isSearchModalOpen } = useDate();
  const {
    noOfBathrooms,
    noOfBedrooms,
    noOfBeds,
    applyFilter,
    propertyType,
    priceRange,
    travelRating,
    isCancelable,
    isFilterModalOpen,
  } = useFilter();

  useEffect(() => {
    (async () => {
      try {
        const { data } =
          await axios.get(`https://travel-app-backend.cyclic.cloud/api/hotels
                ?category=${hotelCategory}`);

        const sortedData = data.sort((a, b) => a.index - b.index);
        setTestData(sortedData);
        setDataLoaded(true);

        setCurrIndex(16);
        data.length < 16 ? setHasMore(false) : setHasMore(true);
        setHotels(data ? data.slice(0, 16) : []);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [hotelCategory]);

  const fetchMoreData = () => {
    if (hotels.length >= testData.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      if (hotels && hotels.length > 0) {
        setHotels(hotels.concat(testData.slice(currIndex, currIndex + 16)));
        setCurrIndex((prev) => prev + 16);
      } else {
        setHotels([]);
      }
    }, 1000);
  };

  const [filteredHotels, setFilteredHotels] = useState(hotels);

  useEffect(() => {
    const updatedFilteredByPriceRangeHotels = getHotelsByPriceRange(
      hotels,
      priceRange
    );
    const updatedFilteredByBeds = getHotelsByRoomsAndBeds(
      updatedFilteredByPriceRangeHotels,
      noOfBathrooms,
      noOfBedrooms,
      noOfBeds
    );

    const updatedFilteredByPropertyType = getHotelsByPropertyType(
      updatedFilteredByBeds,
      propertyType
    );

    const updatedFilteredByRatings = getHotelsByRatings(
      updatedFilteredByPropertyType,
      travelRating
    );

    const updatedFilteredByCancelation = getHotelsByCancelation(
      updatedFilteredByRatings,
      isCancelable
    );

    const finalFilteredHotels = updatedFilteredByCancelation;
    setFilteredHotels(finalFilteredHotels);
    // eslint-disable-next-line
  }, [applyFilter, hotels]);

  return (
    <>
      <Navbar />
      <Categories />
      {hotels && hotels.length > 0 ? (
        <InfiniteScroll
          dataLength={hotels.length}
          next={fetchMoreData}
          hasMore={hasMore}
          loader={
            hotels.length.length > 0 && <h3 className="loading">Loading...</h3>
          }
          endMessage={<p className="end-message">No more Hotels....</p>}
        >
          <main className="main">
            {filteredHotels &&
              filteredHotels.map((hotel) => (
                <HotelCard key={hotel._id} hotel={hotel} />
              ))}
          </main>
        </InfiniteScroll>
      ) : (
        dataLoaded && <p className="end-message">No Hotels</p>
      )}
      {isSearchModalOpen && <SearchStayWithDate />}
      {isFilterModalOpen && <Filter />}
    </>
  );
};
