import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { Navbar, SearchStayWithDate, HotelCard } from "../../components";
import { useDate, useCategory } from "../../context";
import "./SearchResults.css";

export const SearchResults = () => {
  const { destination } = useDate();
  const [hotels, setHotels] = useState([]);
  const { hotelCategory } = useCategory();
  const { isSearchModalOpen } = useDate();

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

  return (
    <Fragment>
      <Navbar />
      {isSearchModalOpen && <SearchStayWithDate />}
      <div className="main search-results-main">
        {filteredSearchResults ? (
          filteredSearchResults.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))
        ) : (
          <h3>No results found</h3>
        )}
      </div>
    </Fragment>
  );
};
