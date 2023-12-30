export const getHotelsByPriceRange = (hotels, priceRange) => {
  const updatedFilteredHotels = hotels.filter(
    (hotel) => hotel.price >= priceRange[0] && hotel.price <= priceRange[1]
  );
  return updatedFilteredHotels;
};
