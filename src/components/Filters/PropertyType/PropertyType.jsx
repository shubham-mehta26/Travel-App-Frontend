import "./PropertyType.css";
import { v4 as uuid } from "uuid";

const propertyType = [
  { id: uuid(), type: "House" },
  { id: uuid(), type: "Guest House" },
  { id: uuid(), type: "Flat" },
  { id: uuid(), type: "Hotel" },
];

export const PropertyType = () => {
  return (
    <div className="filter-container">
      <div className="filter-label">Property Type</div>
      <div className="property-type">
        {propertyType.map(({ id, type }) => (
          <span className="span-label" key={id}>
            {type}
          </span>
        ))}
      </div>
    </div>
  );
};
