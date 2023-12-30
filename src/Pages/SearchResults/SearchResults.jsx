import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import {
  Navbar,
  Categories,
  Filter,
  SearchStayWithDate,
  HotelCard,
} from "../../components";
import { useDate, useCategory, useFilter } from "../../context";
import {
  getHotelsByPriceRange,
  getHotelsByRoomsAndBeds,
  getHotelsByPropertyType,
  getHotelsByRatings,
  getHotelsByCancelation,
} from "../../Utils";
import "./SearchResults.css";

export const SearchResults = () => {
  const { destination } = useDate();
  const [hotels, setHotels] = useState([]);
  const { hotelCategory } = useCategory();
  const { isSearchModalOpen } = useDate();
  const {
    noOfBathrooms,
    noOfBedrooms,
    noOfBeds,
    propertyType,
    applyFilter,
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

        setHotels(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [destination, hotelCategory]);

  const filteredSearchResults = hotels.filter(
    ({ city, address, state }) =>
      address.toLowerCase() === destination.toLowerCase() ||
      city.toLowerCase() === destination.toLowerCase() ||
      state.toLowerCase() === destination.toLowerCase()
  );

  const [filteredHotels, setFilteredHotels] = useState(filteredSearchResults);
  useEffect(() => {
    const updatedFilteredByPriceRangeHotels = getHotelsByPriceRange(
      filteredSearchResults,
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
    <Fragment>
      <Navbar />
      <Categories />
      {isFilterModalOpen && <Filter />}
      {isSearchModalOpen && <SearchStayWithDate />}
      <div className="main search-results-main">
        {filteredHotels ? (
          filteredHotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))
        ) : (
          <h3>No results found</h3>
        )}
      </div>
    </Fragment>
  );
};
