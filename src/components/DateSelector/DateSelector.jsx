import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const DateSelector = () => {
  return <DatePicker dateFormat="dd/MM/yyyy" placeholder="Check In" closeOnScroll={true} />;
};
