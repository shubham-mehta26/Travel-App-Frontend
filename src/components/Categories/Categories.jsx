// import * as React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab, Box } from "@mui/material";
import { useCategory, useMobileView, useFilter } from "../../context";
import { useNavigate } from "react-router-dom";
import "./Categories.css";
import img from "../Icons/filter.png";

export const Categories = () => {
  const [value, setValue] = useState(0);
  const [categories, setCategories] = useState([]);
  const { setHotelCategory } = useCategory();
  const { mobileView } = useMobileView();
  const { filterDispatch } = useFilter();
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCategoryClick = (category) => {
    setHotelCategory(category.category);
  };

  const navigateHome = () => {
    navigate("/");
  };
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://travel-app-backend.cyclic.cloud/api/category"
        );

        const sortedCategories = data.sort((a, b) => a.index - b.index);
        setCategories(sortedCategories);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleFilterClick = () => {
    filterDispatch({ type: "SHOW_FILTER_MODAL" });
  };

  return (
    <div className="categories">
      <Box
        sx={{
          maxWidth: {
            xs: mobileView ? "100%" : 360,
            sm: "90%",
          },
          bgcolor: "white",
          color: "text.secondary",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          textColor="secondary"
          allowScrollButtonsMobile
          indicatorColor="secondary"
          aria-label="scrollable force tabs example"
          sx={{
            width: "100%",
            color: "#363030",
            fontFamily: "Poppins",
            fontWeight: "600",
          }}
        >
          {categories.map((category) => (
            <Tab
              onClick={() => handleCategoryClick(category)}
              label={category.category}
              key={category._id}
            />
          ))}
        </Tabs>
      </Box>
      <div className="filter-button">
        {mobileView && (
          <div className="mobile-nav home-btn" onClick={navigateHome}>
            <ion-icon name="home-outline"></ion-icon> Home
          </div>
        )}
        <div className="mobile-nav" onClick={handleFilterClick}>
          <img src={img} alt="" /> Filters
        </div>
      </div>
    </div>
  );
};
