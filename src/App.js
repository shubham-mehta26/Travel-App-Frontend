import "./App.css";
import { Home, SingleHotel, SearchResults } from "./Pages";
import { Route, Routes } from "react-router-dom";
import { AlertPop } from "./components";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/hotels/:name/:address/:id/reserve"
          element={<SingleHotel />}
        />
        <Route path="/hotels/:address" element={<SearchResults />} />
      </Routes>
      <AlertPop />
    </div>
  );
}

export default App;
