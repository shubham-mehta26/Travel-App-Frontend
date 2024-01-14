import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  CategoryProvider,
  DateProvider,
  MobileViewProvider,
  FilterProvider,
  AuthProvider,
  WishListProvider,
} from "./context";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <CategoryProvider>
        <DateProvider>
          <MobileViewProvider>
            <FilterProvider>
              <AuthProvider>
                <WishListProvider>
                  <App />
                </WishListProvider>
              </AuthProvider>
            </FilterProvider>
          </MobileViewProvider>
        </DateProvider>
      </CategoryProvider>
    </Router>
  </React.StrictMode>
);
