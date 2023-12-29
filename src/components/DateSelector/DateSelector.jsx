import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDate } from "../../context";

export const DateSelector = ({ placeholder, checkInType }) => {
  const { checkInDate, checkOutDate, dateDispatch } = useDate();

  const handleDateChange = (date) => {
    dateDispatch({
      type: checkInType === "in" ? "CHECK_IN" : "CHECK_OUT",
      payload: date,
    });
  };
  return (
    <DatePicker
      selected={checkInType === "in" ? checkInDate : checkOutDate}
      onChange={(date) => handleDateChange(date)}
      className="search-dest input"
      dateFormat="dd/MM/yyyy"
      placeholderText={placeholder}
      minDate={checkInType === "in" ? new Date() : checkInDate}
      closeOnScroll={true}
    />
  );
};
