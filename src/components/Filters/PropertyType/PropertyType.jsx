import { useEffect } from "react";
import "./PropertyType.css";
import { useFilter } from "../../../context";
import { v4 as uuid } from "uuid";

const propertyTypes = [
  { id: uuid(), type: "House" },
  { id: uuid(), type: "Guest House" },
  { id: uuid(), type: "Flat" },
  { id: uuid(), type: "Hotel" },
];

export const PropertyType = () => {
  const { propertyType, filterDispatch } = useFilter();

  useEffect(() => {
    let propertyELe = document.querySelectorAll(".property-type span");
    propertyELe.forEach((ele) =>
      // eslint-disable-next-line
      ele.id === propertyType
        ? ele.classList.add("selected")
        : ele.classList.remove("selected")
    );
  }, [propertyType]);

  const handlePropertyClick = (property) => {
    filterDispatch({
      type: "PROPERTY_TYPE",
      payload: property,
    });
  };

  return (
    <div className="filter-container">
      <div className="filter-label">Property Type</div>
      <div className="property-type">
        {propertyTypes.map(({ id, type }) => (
          <span
            className="span-label"
            id={type}
            key={id}
            onClick={() => handlePropertyClick(type)}
          >
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};
