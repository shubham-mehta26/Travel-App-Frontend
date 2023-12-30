import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  CategoryProvider,
  DateProvider,
  MobileViewProvider,
  FilterProvider,
  AuthProvider,
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
                <App />
              </AuthProvider>
            </FilterProvider>
          </MobileViewProvider>
        </DateProvider>
      </CategoryProvider>
    </Router>
  </React.StrictMode>
);
