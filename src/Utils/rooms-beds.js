export const getHotelsByRoomsAndBeds = (
  hotels,
  noOfBathrooms,
  noOfBedrooms,
  noOfBeds
) => {
  if (noOfBathrooms === "Any" || noOfBedrooms === "Any" || noOfBeds === "Any") {
    return hotels;
  }
  const filteredHotels = hotels.filter(
    ({ numberofBathrooms, numberofBedrooms, numberOfBeds }) =>
      numberofBathrooms === noOfBathrooms ||
      numberofBedrooms === noOfBedrooms ||
      numberOfBeds === noOfBeds
  );
  return filteredHotels;
};
