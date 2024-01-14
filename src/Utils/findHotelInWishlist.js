export const findHotelInWishlist = (wishlist, hotelId) => {
  const isHotelInWishlist = wishlist.some((hotel) => hotel._id === hotelId);
  return isHotelInWishlist;
};
