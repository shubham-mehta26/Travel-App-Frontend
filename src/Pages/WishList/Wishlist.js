import {
  Navbar,
  HotelCard,
  Categories,
  AuthModal,
  SearchStayWithDate,
  Filter,
} from "../../components";
import { useWishList, useAuth, useDate, useFilter } from "../../context";
import "./Wishlist.css";
export const Wishlist = () => {
  const { wishlist, wishlistCount } = useWishList();
  const { isSearchModalOpen } = useDate();
  const { isAuthModalOpen } = useAuth();
  const { isFilterModalOpen } = useFilter();
  return (
    <>
      <Navbar />
      <Categories />
      <h2 className="wish-list-heading"> WishList ({wishlistCount})</h2>
      <section className="main">
        {wishlist &&
          wishlist.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
      </section>
      {isSearchModalOpen && <SearchStayWithDate />}
      {isAuthModalOpen && <AuthModal />}
      {isFilterModalOpen && <Filter />}
    </>
  );
};
