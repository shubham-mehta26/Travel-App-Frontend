import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { useFilter } from "../../../context";
import "./PriceRange.css";

const minDifference = 500;

function valuetext(value) {
  return `${value}`;
}

export const PriceRange = () => {
  const { priceRange, filterDispatch } = useFilter();

  const handlePriceRangeChange = (event, newValue, activeThumb) => {
    if (activeThumb === 0) {
      filterDispatch({
        type: "MINIMUM_PRICE",
        payload: {
          newValue,
          priceRange,
          minDifference,
        },
      });
    } else {
      filterDispatch({
        type: "MAXIMUM_PRICE",
        payload: {
          newValue,
          priceRange,
          minDifference,
        },
      });
    }
  };
  console.log(priceRange);
  // const [value, setValue] = React.useState([20, 37]);

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  return (
    <div className="filter-container">
      <div className="filter-label">Price Range</div>
      <div className="slider1">
        <div className="min-max-values min">100</div>
        <Box sx={{ width: "65%" }}>
          <Slider
            className="price-range"
            getAriaLabel={() => "Minimum Difference"}
            value={priceRange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            min={100}
            max={25000}
            onChange={handlePriceRangeChange}
            // onChange={handleChange}
            disableSwap
          />
        </Box>
        <div className="min-max-values max">25000</div>
      </div>
    </div>
  );
};
