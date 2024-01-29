import "./App.css";
import {
  Home,
  SingleHotel,
  SearchResults,
  Wishlist,
  Payment,
  OrderSummary,
} from "./Pages";
import { Route, Routes } from "react-router-dom";
import { AlertPop } from "./components";
function App() {
  return (
    <div className="App unselectable">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/hotels/:name/:address/:id/reserve"
          element={<SingleHotel />}
        />
        <Route path="/hotels/:address" element={<SearchResults />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/confirm-booking/stay/:id" element={<Payment />} />
        <Route path="/order-summary" element={<OrderSummary />} />
      </Routes>
      <AlertPop />
    </div>
  );
}

export default App;
