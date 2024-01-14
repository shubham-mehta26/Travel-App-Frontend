import { Navbar, HotelCard } from "../../components";
import { useWishList } from "../../context";
import "./Wishlist.css";
export const Wishlist = () => {
  const { wishlist, wishlistCount } = useWishList();
  return (
    <>
      <Navbar />
      <h2 className="wish-list-heading"> WishList ({wishlistCount})</h2>
      <section className="main">
        {wishlist &&
          wishlist.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
      </section>
    </>
  );
};
